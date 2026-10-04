# PatnaHost Design System & Visual Architecture Specification
**Design Architect:** Nitish Rock  
**Project:** Flagship Digital Portfolio & Enterprise Client Acquisition Platform  
**Design System Codename:** *PatnaHost Kinetic Editorial (PKE-26)*  
**Version:** 2.4.0  

---

## 1. Visual Philosophy & Design Directives

The PatnaHost design system is constructed on the intersection of **tactile editorial minimalism** and **kinetic physical feedback**. Every visual element serves a deliberate psychological and functional purpose:

1. **Anti-Template Editorialism:** We deliberately reject the predictable "3-column card grid" common in generic WordPress and agency templates. Layouts alternate between asymmetrical editorial narrative columns, full-width typographic strewing, and high-contrast typographic statements.
2. **Tactile Digital Craftsmanship:** Digital elements mimic physical inertia. Buttons possess magnetic attraction to the user's pointer; scroll movements trigger momentum-preserving parallax; interactive vector doodles appear hand-sketched in real-time.
3. **Conversion Psychology:** Aesthetic delight is intentionally coupled with commercial conversion mechanics. Case studies do not simply show screenshots—they showcase verified corporate metrics, client transformation quotes, and frictionless, direct communication channels.

---

## 2. Color Palette & Semantic Design Tokens

All colors are declared as CSS Custom Properties in `assets/css/styleguide.css` and strictly maintained across all stylesheets.

### 2.1 Core Neutral Foundation
```css
:root {
   --color-dark: #1C1D20;        /* Deep Obsidian — Primary Dark Section Background */
   --color-dark-dark: #141517;   /* Jet Charcoal — Footer & Backdrop Base */
   --color-lightgray: #E9EAEC;   /* Warm Platinum — High-Legibility Light Background */
   --color-white: #FFFFFF;       /* Pure White — Content Container Background */
   --color-gray: #999D9E;        /* Cool Slate — Secondary Labels & Dividers */
   --color-text-dark: #1C1D20;   /* High-Contrast Charcoal for Light Backgrounds */
   --color-text-light: #FFFFFF;  /* High-Contrast White for Dark Backgrounds */
}
```

### 2.2 Semantic Accent Accents
- **Electric Cobalt (`#2563EB` / `#3B82F6`):** Applied exclusively to high-priority interactive conversion touchpoints—the iconic floating "Get in touch" magnetic circle and active filter badges.
- **Vibrant Sunset Coral (`#FF4B26`):** Used in energy micro-stickers (`fire.svg`, `good-vibes.svg`) to inject vitality and informal warmth into formal enterprise content.
- **Emerald Growth (`#10B981`):** Applied in client outcome badges (`+340% RFQs`, `Hallmark Verified`) to convey commercial success.

---

## 3. Typographic Hierarchy & Fluid Scale

The typographic foundation is built upon **Neue Montreal**, a contemporary grotesque sans-serif designed by Pangram Pangram, engineered with clean geometric forms and subtle grotesque warmth.

### 3.1 Font Family Declarations
```css
@font-face {
   font-family: 'Neue Montreal';
   src: url('../fonts/NeueMontreal-Regular.woff2') format('woff2');
   font-weight: 400;
   font-display: swap;
}
@font-face {
   font-family: 'Neue Montreal';
   src: url('../fonts/NeueMontreal-Medium.woff2') format('woff2');
   font-weight: 500;
   font-display: swap;
}
@font-face {
   font-family: 'Neue Montreal';
   src: url('../fonts/NeueMontreal-Bold.woff2') format('woff2');
   font-weight: 700;
   font-display: swap;
}
```

### 3.2 Mathematical Fluid Clamping Scale
Rather than relying on static pixel font sizes that break across viewports, all headers scale dynamically using viewport math:

| Role | CSS Declaration | Target Size (Mobile → 4K) |
|------|-----------------|---------------------------|
| **Display Hero (H1)** | `font-size: calc(clamp(3.25em, 7vw, 8em) * .875);` | `48px → 112px` |
| **Section Header (H2)**| `font-size: clamp(2rem, 8vw, 4.5rem);` | `32px → 72px` |
| **Subheader (H3)** | `font-size: clamp(1.5rem, 5vw, 2.75rem);` | `24px → 44px` |
| **Editorial H4** | `font-size: clamp(1.25rem, 3.5vw, 2rem);` | `20px → 32px` |
| **Body Paragraph** | `font-size: clamp(1rem, 1.8vw, 1.25rem);` | `16px → 20px` |
| **Micro Caption (H5)**| `font-size: 0.85em; text-transform: uppercase; letter-spacing: 0.05em;` | `13px → 14px` |

---

## 4. Motion Design & Physical Kinetics

### 4.1 Physics-Based Magnetic Mechanics
Interactive call-to-action buttons feature an active spring physics layer calculated in `assets/js/index-new.js`:
- **Attraction Radius:** Bounding box scaled by `1.5x`.
- **Damping Ratio:** `gsap.to(el, { x: dx * 0.35, y: dy * 0.35, ease: "power2.out", duration: 0.4 })`.
- **Inner Text Offset:** `gsap.to(text, { x: dx * 0.2, y: dy * 0.2, ease: "power2.out", duration: 0.3 })`.
- **Release Elasticity:** Returns to centroid with `elastic.out(1, 0.3)`.

### 4.2 Locomotive Momentum Scroller
- **Desktop Momentum:** `lerp: 0.1` smooth scrolling pipeline via `LocomotiveScroll`.
- **Parallax Rate Calculation:** Layer translation velocities configured from `data-scroll-speed="-4"` (background reveal) to `data-scroll-speed="2"` (foreground float).
- **Viewport Bounds Protection:** Background image containers enforce minimum headroom (`top: -12%; height: 124%`) to prevent backdrop bleed during rapid momentum decel.
- **Mobile Strategy (< 768px):** Locomotive Scroll switches to native scrolling (`smooth: false`). All fixed containers and critical footer elements override transforms with `transform: none !important` to ensure zero clipped content.

### 4.3 Kinetic SVG Doodle Vectors
- Vector underline paths (`assets/img/doodle-*.svg`) are initialized with `stroke-dasharray` equal to total path length.
- When scrolled into the central 60% of the viewport, a GSAP ScrollTrigger timeline animates `stroke-dashoffset` from `length → 0` over `0.8s` with `power2.out`, paired with an elastic pop on adjacent sticker icons (`scale: 0 → 1.15 → 1.0`).

---

## 5. Responsive Spatial Grid & Breakpoint Strategy

We enforce a 5-tier responsive breakpoint architecture:

```
┌──────────────┬───────────────────┬────────────────────────────────────────┐
│ Breakpoint   │ Width Range       │ Spatial Strategy                       │
├──────────────┼───────────────────┼────────────────────────────────────────┤
│ Micro-Mobile │ 280px — 360px     │ Compact footer, inline arrow, single   │
│              │                   │ column flow, relative buttons          │
├──────────────┼───────────────────┼────────────────────────────────────────┤
│ Standard Mob │ 361px — 540px     │ Full-bleed image containers, optimized │
│              │                   │ 48px touch targets, mobile nav drawer  │
├──────────────┼───────────────────┼────────────────────────────────────────┤
│ Tablet       │ 541px — 840px     │ 2-column editorial story split,        │
│              │                   │ responsive image aspect ratio 125%     │
├──────────────┼───────────────────┼────────────────────────────────────────┤
│ Desktop      │ 841px — 1440px    │ Active GSAP magnetic cursor, virtual   │
│              │                   │ scroller, multi-column work matrix     │
├──────────────┼───────────────────┼────────────────────────────────────────┤
│ Large / 4K   │ 1441px+           │ Clamped max-width containers, 2x       │
│              │                   │ high-DPI asset rendering, fluid clamp  │
└──────────────┴───────────────────┴────────────────────────────────────────┘
```

---

## 6. Accessibility & Performance Guardrails

- **Zero Layout Shift:** Image containers enforce aspect ratio preservation through pseudo-element percentage padding (`::before { padding-top: 125%; }`), guaranteeing zero Cumulative Layout Shift (CLS = 0.00).
- **Contrast Ratios:** Text-to-background contrast ratios strictly satisfy WCAG 2.1 AA standards (minimum 4.5:1 for body copy, 3:1 for large display headers).
- **Reduced Motion Support:** Users with `prefers-reduced-motion: reduce` automatically have parallax transforms set to zero, maintaining instantaneous navigation and static accessibility.
