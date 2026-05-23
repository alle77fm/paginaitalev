---
name: Premium Tech Narrative
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e4e2e1'
  on-surface-variant: '#e3bfb1'
  inverse-surface: '#e4e2e1'
  inverse-on-surface: '#303030'
  outline: '#aa8a7d'
  outline-variant: '#5a4136'
  surface-tint: '#ffb596'
  primary: '#ffb596'
  on-primary: '#581e00'
  primary-container: '#ff6600'
  on-primary-container: '#561d00'
  inverse-primary: '#a33e00'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#c8c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#989696'
  on-tertiary-container: '#2f2f2f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbcd'
  primary-fixed-dim: '#ffb596'
  on-primary-fixed: '#360f00'
  on-primary-fixed-variant: '#7c2e00'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#131313'
  on-background: '#e4e2e1'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 80px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-mobile: 24px
  section-gap-desktop: 160px
  section-gap-mobile: 80px
---

## Brand & Style
The brand personality is **authoritative, innovative, and uncompromisingly premium**. It moves away from "utility software" toward a "luxury technology partner" aesthetic. This design system targets established merchants and high-growth businesses that value prestige and precision.

The visual direction is a blend of **Corporate Minimalism** and **Glassmorphism**. It utilizes expansive negative space to create a "gallery-like" experience where content is curated rather than cluttered. The aesthetic relies on the interplay of deep monochromatic foundations and highly-targeted pops of energetic color, evoking the feel of high-end automotive or fintech interfaces.

## Colors
This design system operates primarily in **Dark Mode** to convey technological sophistication, though it supports a "High-Contrast Light" variation for documentation and long-form reading.

- **Deep Charcoal (#121212):** The core canvas color. Use this for all main backgrounds to provide depth.
- **Pure White (#FFFFFF):** Reserved for primary typography on dark backgrounds and for card surfaces in Light Mode.
- **Signature Orange (#FF6600):** A high-energy accent. Use strictly for primary calls-to-action, success states, and critical data points. It should represent less than 5% of the total screen real estate.
- **Glass/Stroke:** Use semi-transparent whites (10-15% opacity) for borders and dividers to maintain a lightweight, technical feel.

## Typography
The typography is built on **Inter**, chosen for its mathematical precision and exceptional legibility in digital environments. 

Large-scale display text uses heavy weights and negative letter-spacing to create a "bold statement" effect. Body text is prioritized for comfort, utilizing generous line heights. Use `label-caps` for eyebrows and small metadata to provide a structured, architectural rhythm to the layout.

## Layout & Spacing
The layout follows a **Fixed-Fluid hybrid grid**. Content is contained within a 1280px centered container on desktop, utilizing a 12-column structure.

To achieve the "luxury tech" feel, vertical spacing is intentionally exaggerated. Sections should be separated by large gaps (`section-gap-desktop`) to ensure no two major ideas compete for the user's attention. On mobile, the grid collapses to a single column with increased side margins to maintain an airy feel even on small screens.

## Elevation & Depth
Depth is created through **Glassmorphism** and **Tonal Layering** rather than traditional heavy shadows.

1.  **Base Layer:** The Deep Charcoal (#121212) background.
2.  **Surface Layer:** Cards and containers use a slightly lighter neutral (#1A1A1A) with a subtle 1px border at 10% white opacity.
3.  **Glass Layer:** Floating elements (modals, navigation bars) use a backdrop blur (20px) with a 40% translucent fill.
4.  **Lighting:** Use a very subtle, large-radius ambient glow (Signature Orange at 5% opacity) behind primary hero images or key value propositions to suggest a source of light within the interface.

## Shapes
The shape language is defined by **large, soft radii**. This counteracts the technical "coldness" of the dark theme and makes the brand feel approachable. 

- **Primary Cards:** Use `rounded-xl` (1.5rem) for a distinctive, modern look.
- **Buttons:** Use `rounded-lg` (1rem) to create a "squircle" appearance that feels premium under-thumb.
- **Inputs:** Maintain consistency with `rounded-lg`.
- **Iconography:** Icons should feature rounded terminals and consistent stroke weights (1.5px - 2px).

## Components

### Buttons
- **Primary:** Solid Signature Orange (#FF6600) with white text. No shadow, or a very tight, high-intensity orange glow on hover.
- **Secondary:** Transparent background with a 1px White border (30% opacity). Text in pure white.
- **Tertiary:** Pure text with an arrow icon, transitioning to 100% opacity on hover.

### Cards
Cards should not have visible drop shadows. Instead, they use a "ghost border" (1px solid #FFFFFF at 10% opacity). When nested on the #121212 background, the card fill should be #1A1A1A.

### Input Fields
Inputs are dark-themed: #1A1A1A fill, 1px border. On focus, the border transitions to Signature Orange. Labels should use the `label-caps` style for a technical, organized appearance.

### Navigation
The navigation bar should be a "Floating Glass" component—a pill-shaped container with a heavy backdrop blur, centered at the top of the viewport, emphasizing the application's modern architecture.

### Chips/Tags
Small, low-contrast pills (Dark grey fill with light grey text) used for categories. Use Signature Orange text only for "New" or "Hot" status indicators.