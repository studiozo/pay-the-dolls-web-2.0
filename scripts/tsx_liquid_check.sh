#!/usr/bin/env bash
set -euo pipefail

# Exit code and output if missing corresponding Liquid files for changed TSX components.
BASE="origin/main"
CHANGED=$(git diff --name-only "$BASE"...HEAD || true)
TSX_CHANGED=$(echo "$CHANGED" | grep '^components/.*\.tsx$' || true)
if [ -z "$TSX_CHANGED" ]; then
  echo "No TSX component changes detected relative to $BASE."
  exit 0
fi

MISSING=0
for f in $TSX_CHANGED; do
  name=$(basename "$f" .tsx)
  # Derive core name (strip trailing 'Page' if present) and lower-case for matching
  core=$(echo "$name" | sed -E 's/[Pp]age$//' | tr '[:upper:]' '[:lower:]')

  # Search templates/ and sections/ for files that contain the core name (case-insensitive)
  match_found=false
  files=$(git ls-files "templates/*" "sections/*" 2>/dev/null || true)
  for candidate in $files; do
    lname=$(basename "$candidate" | tr '[:upper:]' '[:lower:]')
    # normalize alphanumeric only for better matching (strip dashes/underscores)
    core_clean=$(echo "$core" | tr -cd '[:alnum:]')
    candidate_clean=$(echo "$lname" | tr -cd '[:alnum:]')
    if echo "$candidate_clean" | grep -q "$core_clean"; then
      match_found=true
      break
    fi
  done

  if [ "$match_found" = false ]; then
    echo "Missing Liquid template for modified TSX: $f -> no templates/sections include '$core' in filename"
    MISSING=1
  fi
done

if [ "$MISSING" -ne 0 ]; then
  echo "TSX → Liquid sync check failed. Please add corresponding Liquid templates or update existing ones." >&2
  exit 2
fi

echo "All TSX changes have corresponding Liquid templates."
exit 0
