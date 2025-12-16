# Wireframe & Interaction Spec

This file is the canonical wireframing notes for the `shopify-product-page-visualizer` app and describes how header buttons and site interactions should behave.

## Navigation & Header
- SHOP → navigates to `Collections` view (URL concept: `/collections`) and shows all collection items in a grid.
- BRANDS → opens `BrandsIndex` (list of brands). Clicking a brand can:
  - Enter a brand storefront page (e.g., `brand-studio-zo`), or
  - Filter the collections grid to that brand.
- ABOUT → opens the About page.
- VERSE (Mission) → opens the Mission page for protocol details.
- SUBMIT → opens a Submit form where creators/partners can submit pitches.
- WIREFRAME → opens a visual mockup page (this file and the `WireframePage`).

Design notes:
- On mobile: header collapses into a **hamburger menu**. Menu items must be accessible, focusable, and keyboard navigable. The mobile menu should:
  - Use `role="dialog"` and `aria-modal="true` when open.
  - Trap focus on open and close on ESC or when a link is chosen.
  - Prevent body scroll while open.
- Active state: show a subtle underline or text color change (class: `text-brand-neon` or a border) to indicate the current page.

## SHOP / Collections
- Collections view shows a grid of product cards: image, title, vendor, price.
- Clicking a product opens Product Detail (ProductPage). In the real site this would be a route like `/products/:slug`.
- Breadcrumbs: Home / Shop / [Collection] / Product — clicking `Shop` always returns to the Collections view.

## Product detail
- Product pages show gallery (main image + thumbnails), product information, price, creator badge, and Add to Cart.
- CTA behavior:
  - Add to Cart updates cart UI state.
  - Creator badge links to the brand storefront.

## Mission (VERSE)
- A documentation-style page describing the protocol. This can include diagrams, FAQs, and governance details.

## Submit
- Simple contact/submit form with fields: Name, Email, Message, File Upload (optional), and a checkbox for terms/consent.
- Validation rules used in the dev app:
  - Name: required (non-empty)
  - Email: required, must be a valid email format
  - Message: required, minimum 10 characters
  - Terms checkbox: required
  - File upload: optional (can be added later with size/type limits)
- On submit: validate fields, show inline errors, display a success message, and send a mock API request (simulated delay).

## Contact
- The live Shopify theme includes a Contact page (Liquid template). If included in the dev app, it should mirror the Shopify contact form and submit to a test endpoint.

## Accessibility & Micro-interactions
- All interactive elements must have explicit ARIA labels where needed and visible focus states.
- Keyboard nav order should be logical: header → hero CTA → content → footer.
- Ensure color contrast meets WCAG AA for text and interactive elements.

## Implementation notes
- In the dev preview app, these pages are components in `drafts-main/shopify-product-page-visualizer/components/`.
- To integrate built assets into the Shopify theme, build the app and copy compiled CSS/JS into `assets/` and reference in Liquid templates.

---

If you'd like, I can:
- Add a basic mobile hamburger menu to the header mockup, or
- Wire up live form validation for the Submit page, or
- Replace mock product data with a JSON file and add filters/sorting to Collections.

Which would you like next?