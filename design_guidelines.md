# Dada Agro Farm E-Commerce Design Guidelines

## Design Approach
**Reference-Based: Farm-to-Table E-Commerce**
Drawing inspiration from premium organic/farm e-commerce sites like Butcher Box, Thrive Market, and Shopify's best farm stores. Focus on trust-building, product quality presentation, and authentic farm aesthetics.

**Core Principles:**
- Authenticity: Natural, farm-fresh visual language
- Trust: Clear product information, transparent pricing
- Simplicity: Easy navigation and checkout flow

## Color Palette

**Primary Colors (inspired by logo):**
- Forest Green: 145 45% 35% (primary brand, headers, CTAs)
- Sage Green: 140 25% 55% (secondary accents)
- Cream/Beige: 40 35% 92% (backgrounds, cards)

**Supporting Colors:**
- Rich Brown: 25 30% 25% (text, borders)
- Warm White: 40 15% 98% (page background)
- Earthy Orange: 25 70% 55% (add to cart, checkout CTAs)

**Dark Mode:**
- Deep Forest: 145 35% 15% (background)
- Moss Green: 140 20% 35% (cards)
- Light Sage: 140 25% 85% (text)

## Typography

**Font Families:**
- Headings: 'Playfair Display' or 'Merriweather' (serif, premium feel)
- Body: 'Inter' or 'Open Sans' (clean, readable)
- Accent/Labels: 'Poppins' (modern, friendly)

**Hierarchy:**
- Hero Headline: text-5xl to text-6xl, font-bold
- Section Headers: text-3xl to text-4xl, font-semibold
- Product Titles: text-xl, font-medium
- Body Text: text-base, font-normal
- Price: text-2xl, font-bold (highlight prices)

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20
- Section padding: py-16 lg:py-20
- Card padding: p-6
- Element spacing: gap-6 to gap-8
- Container: max-w-7xl mx-auto px-4

**Grid System:**
- Product Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
- Featured Products: grid-cols-1 lg:grid-cols-2 (larger cards)
- Cart Layout: Two-column (items list + order summary)

## Component Library

**Navigation:**
- Sticky header with logo (Dada Agro Farm image)
- Categories: Chicken, Pork, Beef, Eggs
- Shopping cart icon with item count badge
- WhatsApp & Facebook icons in header

**Hero Section:**
- Full-width background image (farm landscape, happy chickens, or fresh produce)
- Large hero image showing farm authenticity
- Overlay: Semi-transparent dark gradient for text readability
- Centered headline: "Farm Fresh Meat & Eggs Delivered"
- Primary CTA: "Shop Now" (earthy orange, large button)
- Trust badge: "100% Natural" or "Farm Fresh Daily"

**Product Cards:**
- High-quality product images (use provided images)
- Product name with clear typography
- Price in Maluti (M) - prominent, bold
- Weight/quantity information
- "Add to Cart" button (earthy orange)
- Subtle hover effect: lift shadow, scale-105

**Shopping Cart:**
- Floating cart icon with item count
- Cart modal/page with product thumbnails
- Quantity adjusters (+/- buttons)
- Running total in Maluti (M)
- "Proceed to Checkout" CTA

**Checkout Flow:**
- Single-page checkout with form sections
- Customer info fields with proper labels
- Order summary sidebar (sticky on desktop)
- WhatsApp/Facebook contact confirmation message
- Trust elements: "Secure Checkout" badge

**Category Filters:**
- Horizontal tabs or pills: All, Chicken, Pork, Beef, Eggs
- Active state with green background

**Footer:**
- Farm story/about snippet
- Contact: WhatsApp & Facebook buttons (green, with icons)
- Operating hours or delivery info
- Logo watermark

## Images

**Required Images:**
1. **Hero Image:** Full-width farm landscape, animals, or fresh produce arrangement (authentic farm photography). If creating, show green pastures, livestock, or harvest scenes - 1920x800px minimum
2. **Product Images:** Use provided images for chicken, pork, beef, eggs - ensure consistent white/neutral backgrounds, 800x800px
3. **Trust/About Section:** Farm workers, packaging process, or happy animals - candid, authentic shots

**Image Treatment:**
- Subtle warm filter on farm photos (increase saturation by 10%)
- Product images: Clean, well-lit, professional
- Hero overlay: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))

## Interactions & Animations

**Minimal Animations:**
- Product card hover: transform scale(1.03), shadow elevation
- Add to cart: Brief success checkmark or cart icon bounce
- Cart count badge: Pulse on update
- Smooth scroll to sections

## E-Commerce Specific Elements

**Product Display:**
- Clear pricing with "M" prefix (e.g., "M 85.00")
- Stock indicator if applicable ("In Stock" green badge)
- Per-unit pricing (e.g., "per kg")

**Trust Signals:**
- "Farm Fresh" badges on products
- Delivery information near checkout
- Social proof: "Join 500+ Happy Customers"

**Mobile Optimization:**
- Sticky bottom cart bar on mobile
- Touch-friendly buttons (min 44px height)
- Simplified checkout form for mobile
- Full-width product images on mobile

## Accessibility

- High contrast text (brown on cream, white on green)
- Focus states on all interactive elements (green ring)
- Alt text for all product images
- Keyboard navigation for cart
- ARIA labels for social media links

This design creates a warm, trustworthy farm-fresh brand experience while providing smooth e-commerce functionality with clear calls-to-action and easy checkout flow.