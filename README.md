# PAY THE DØLLS™ Web 2.0

**Like Amazon, But For DØLLs**

A custom Shopify theme for Pay The Dolls - a trans-owned, queer-led cultural commerce platform.

---

## 🎨 Design System

### Colors
- **White** `#FFFFFF` - Primary backgrounds
- **Black** `#000000` - Primary text
- **Phthalo Green** `#123524` - Text links, labels (readable on white)
- **Mint Green** `#00FF88` - Buttons, borders, accents
- **Light Gray** `#FAFAFA` - Alt backgrounds

### Typography
- **Font:** Avenir (all weights)
- **Logo:** Weight 900 with Phthalo → Mint gradient

---

## 📁 Theme Structure

```
pay-the-dolls-web-2.0/
├── assets/           # CSS, JS, images
├── config/           # Theme settings
├── layout/           # Base HTML layouts
├── sections/         # Reusable sections (header, footer, etc)
├── snippets/         # Small reusable components
├── templates/        # Page templates
└── locales/          # Translations
```

---

## 🚀 Installation

### Upload to Shopify
1. Zip this entire folder
2. Go to **Shopify Admin → Online Store → Themes**
3. Click **Add theme → Upload zip file**
4. Publish when ready

### Using Shopify CLI
```bash
cd pay-the-dolls-web-2.0
shopify theme push
```

### Connect to GitHub
1. Create new repo on GitHub: `pay-the-dolls-web-2.0`
2. Push this code to the repo
3. In Shopify Admin → Online Store → Themes → Add theme → Connect from GitHub

---

## 📄 Key Pages

- **Homepage** - `templates/index.liquid` (uses homepage-v3.css)
- **Product Page** - `templates/product.liquid`
- **Collections** - `templates/collection.liquid`
- **Shop** - `templates/list-collections.liquid`

---

## 🔧 Recent Updates (Dec 2025)

✅ Fixed page layout spacing - content no longer stretches on wide screens
✅ Added max-width constraints (1200px-1400px) to all major containers
✅ Improved responsive behavior for mobile/tablet
✅ Better readability with proper spacing throughout

---

## 🎯 Brand Guidelines

- ✅ Use Phthalo Green for readable text
- ✅ Use Mint Green for buttons/borders
- ✅ Logo gradient: Phthalo → Mint (135deg)
- ✅ Use Ø character (not O) in "DØLLS"
- ✅ Include ™ after logo
- ❌ Never use Mint as text on white
- ❌ No fonts other than Avenir

---

© 2025 PAY THE DØLLS™. All rights reserved.
