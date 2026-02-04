# Brand Guide - Beck's Bakes

## Overview

Beck's Bakes is an authentic South African bakery in Melville, Johannesburg, offering traditional favorites like koeksisters, melktert, rusks, vetkoek, hertzoggies, and peppermint crisp tart. The brand embodies the warmth of a traditional neighborhood bakery - welcoming, family-oriented, and authentically South African with a focus on fresh, quality baking.

## Colors

### Primary Palette
- **Primary (Warm Amber)**: `oklch(0.65 0.14 65)` - The golden warmth of fresh-baked goods. Used for buttons, links, and key CTAs to evoke the inviting feeling of a bakery.
- **Secondary (Soft Cream)**: `oklch(0.96 0.02 65)` - A warm cream for subtle backgrounds and cards, reminiscent of pastry and dough.
- **Accent (Terracotta)**: `oklch(0.58 0.12 35)` - An earthy, warm accent for hover states and highlights, adding South African warmth.

### Neutral Palette
- **Background**: `oklch(0.99 0.01 65)` - Warm off-white, never harsh or clinical
- **Foreground**: `oklch(0.2 0.02 65)` - Deep charcoal with warm undertones for body text
- **Muted**: `oklch(0.94 0.02 65)` - Soft warm gray for disabled states
- **Border**: `oklch(0.88 0.02 65)` - Subtle warm borders

### OKLCH Values

#### Light Mode (Default)
| Token | Value | Purpose |
|-------|-------|---------|
| `--background` | `oklch(0.99 0.01 65)` | Main page background - warm off-white |
| `--foreground` | `oklch(0.2 0.02 65)` | Body text - deep warm charcoal |
| `--card` | `oklch(1 0 0)` | Card backgrounds - pure white |
| `--card-foreground` | `oklch(0.2 0.02 65)` | Text on cards |
| `--popover` | `oklch(1 0 0)` | Popover backgrounds |
| `--popover-foreground` | `oklch(0.2 0.02 65)` | Popover text |
| `--primary` | `oklch(0.65 0.14 65)` | Warm amber - brand color |
| `--primary-foreground` | `oklch(0.99 0.01 65)` | Text on primary (white) |
| `--secondary` | `oklch(0.96 0.02 65)` | Soft cream backgrounds |
| `--secondary-foreground` | `oklch(0.2 0.02 65)` | Text on secondary |
| `--muted` | `oklch(0.94 0.02 65)` | Soft warm gray |
| `--muted-foreground` | `oklch(0.48 0.03 65)` | Secondary text |
| `--accent` | `oklch(0.58 0.12 35)` | Terracotta accent |
| `--accent-foreground` | `oklch(0.99 0.01 65)` | Text on accent |
| `--destructive` | `oklch(0.577 0.245 27.325)` | Error red |
| `--border` | `oklch(0.88 0.02 65)` | Warm borders |
| `--input` | `oklch(0.88 0.02 65)` | Input borders |
| `--ring` | `oklch(0.65 0.14 65)` | Focus rings |

#### Dark Mode
| Token | Value | Purpose |
|-------|-------|---------|
| `--background` | `oklch(0.16 0.015 35)` | Deep warm brown |
| `--foreground` | `oklch(0.96 0.01 65)` | Warm off-white text |
| `--card` | `oklch(0.2 0.02 35)` | Slightly lighter cards |
| `--card-foreground` | `oklch(0.96 0.01 65)` | Card text |
| `--primary` | `oklch(0.7 0.14 65)` | Brighter amber for contrast |
| `--primary-foreground` | `oklch(0.16 0.015 35)` | Dark text on primary |
| `--secondary` | `oklch(0.24 0.03 35)` | Warm dark gray |
| `--muted` | `oklch(0.24 0.03 35)` | Muted backgrounds |
| `--accent` | `oklch(0.62 0.12 35)` | Lighter terracotta |
| `--border` | `oklch(1 0 0 / 12%)` | Subtle borders |

### Color Hue Reference

- **Hue 65** = Warm amber/golden (primary brand color - evokes fresh baking)
- **Hue 35** = Terracotta/warm orange (accent - earthy South African warmth)
- **Chroma 0.14** = Rich saturation (inviting, appetizing)
- **Chroma 0.01-0.03** = Subtle warm tint (for neutrals)

## Typography

### Fonts
- **Headings**: Quicksand (variable) - A rounded, friendly sans-serif that feels welcoming and approachable, perfect for a neighborhood bakery. The soft letterforms evoke warmth without sacrificing readability.
- **Body**: Nunito Sans (variable) - A clean, highly legible sans-serif with a gentle, warm character. Excellent for extended reading while maintaining the friendly, accessible tone.

### Implementation
```tsx
import { Quicksand, Nunito_Sans } from 'next/font/google'

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${quicksand.variable} ${nunitoSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

In `globals.css`:
```css
@theme inline {
  --font-sans: var(--font-body);
  --font-heading: var(--font-heading);
}
```

### Typography Scale
- **Headings**: Use Quicksand with weights 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Body**: Use Nunito Sans with weights 400 (regular), 600 (semibold)
- **Line Height**: Generous line-height for comfortable reading (1.6-1.8 for body)

## Shape & Space

### Border Radius
- Base radius: `0.75rem` (12px)
- Feel: Soft, rounded, approachable - like fresh-baked goods
- Creates a friendly, welcoming interface that feels warm and inviting

### Spacing
- Generous whitespace to feel spacious and uncluttered
- Let the baked goods imagery breathe
- Comfortable padding around content (16-24px minimum)
- Section padding: `py-16 md:py-24`
- Card padding: `p-6` or `p-8`
- Gap between items: `gap-6` to `gap-8`

## Visual Guidelines

### Do
- Use warm, inviting imagery of freshly baked goods
- Embrace warm amber/golden tones that evoke fresh baking
- Keep layouts spacious and uncluttered
- Use soft, rounded corners consistently
- Feature traditional South African baked goods prominently
- Use natural, appetizing food photography
- Create a sense of neighborhood warmth and tradition
- Let the products be the hero - minimal design distractions

### Don't
- Use cold, clinical colors (bright whites, harsh grays)
- Overcrowd the interface - maintain breathing room
- Mix sharp and rounded corners
- Use overly modern or trendy design elements that conflict with traditional warmth
- Use stock photos that don't look authentically South African
- Add too many animations or flashy effects
- Stray from the warm color palette into cool tones

## Brand Personality

**Warm**: Like stepping into a bakery filled with the aroma of fresh baking
**Traditional**: Honoring authentic South African baking heritage
**Welcoming**: Family-friendly and neighborhood-focused
**Quality**: Fresh, handmade, with care and attention
**Authentic**: Genuinely South African, not pretentious

## Color Usage Philosophy

Color is used **thoughtfully and purposefully**:
- Warm amber appears on CTAs, links, and key actions
- Terracotta provides warmth in hover states and accents
- Neutrals with warm undertones dominate to keep focus on the baked goods
- The overall palette creates a cohesive, bakery-like warmth without overwhelming
