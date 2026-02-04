# Beck's Bakes - Project Brief

## Business Overview
Beck's Bakes is a traditional South African bakery in Johannesburg (Melville) offering authentic baked goods including koeksisters, melktert, rusks, vetkoek, hertzoggies, and peppermint crisp tart.

## Pages Required

### 1. Home Page (`/`)
**Sections to use:**
- HeroWithImage - Showcase the bakery with warm, inviting imagery
- FeaturedServices - Display top 4 bakery items (koeksisters, melktert, rusks, vetkoek)
- AboutPreview - Brief intro about Beck's Bakes
- FeaturesSection - Why choose Beck's (fresh daily, traditional recipes, etc.)
- CTASection - Visit us or call to order
- LocationSection - Melville location with hours
- FAQSection - Common questions about ordering, pickup, etc.

### 2. Menu Page (`/menu`)
**Special requirement:** User wants a "nice menu page"
- ServicesHero - Hero section for menu page
- ServicesGrid - Display all bakery items in grid format
- Custom component needed: Create an attractive menu layout using `/frontend-design` skill that groups items by category (pastries, tarts, breads, etc.) with prices and descriptions

### 3. About Page (`/about`)
**Sections to use:**
- AboutFullSection - Full story about Beck's Bakes, the tradition, the passion
- AboutFeatures - What makes Beck's special
- TestimonialsSection - Customer testimonials
- CTASection - Visit us today

### 4. Contact Page (`/contact`)
**Sections to use:**
- LocationSection - Address, hours, map
- CTASection - Call us or visit

## Special Considerations

1. **Menu page emphasis** - User specifically wants a "nice menu page", so this needs special attention with custom design
2. **South African items** - Services are renamed to bakery items (koeksisters, melktert, rusks, vetkoek, hertzoggies, peppermint crisp tart)
3. **Warm, welcoming aesthetic** - Bakery should feel authentic, traditional, and inviting
4. **Pricing in Rands (R)** - South African currency

## Parallel Execution Plan

1. **Brand subagent** - Run `/brand-setup` for colors, typography, and tone
2. **Layout subagent** - Customize root layout navbar and footer
3. **Home page subagent** - Build home page using existing sections
4. **Menu page subagent** - Build menu page with custom menu component using `/frontend-design`
5. **About page subagent** - Build about page using existing sections
6. **Contact page subagent** - Build contact page using existing sections
7. **Metadata subagent** - Run `/metadata-files` for SEO assets

All subagents should coordinate on brand colors and style from brand-guide.md
