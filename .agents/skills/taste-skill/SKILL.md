---
name: design-taste-frontend
description: Anti-slop frontend skill for landing pages, portfolios, and redesigns. The agent reads the brief, infers the right design direction, and ships interfaces that do not look templated.
---

# tasteskill: Anti-Slop Frontend Skill

## 1. THE THREE DIALS (Core Configuration)
* **`DESIGN_VARIANCE: 8`** - 1 = Perfect Symmetry, 10 = Artsy Chaos
* **`MOTION_INTENSITY: 6`** - 1 = Static, 10 = Cinematic / Physics
* **`VISUAL_DENSITY: 4`** - 1 = Art Gallery / Airy, 10 = Cockpit / Packed Data

## 2. DEFAULT ARCHITECTURE & CONVENTIONS
* **Framework:** React or Next.js.
* **Styling:** **Tailwind v4** (default). 
* **Animation:** **Motion** (from `motion/react`).
* **Fonts:** Use `next/font` (Next.js) or self-host. Never link Google Fonts in production.
* **Icons:** `@phosphor-icons/react`, `hugeicons-react`, `@radix-ui/react-icons`, `@tabler/icons-react`. No `lucide-react` unless asked.

## 3. DESIGN ENGINEERING DIRECTIVES (Bias Correction)
* **Typography:** Default `text-4xl md:text-6xl tracking-tighter leading-none` for headlines. Avoid `Inter` by default. Pick `Geist`, `Outfit`, `Cabinet Grotesk`, `Satoshi`. Serif is very discouraged as default.
* **Color Calibration:** Max 1 accent color. Avoid AI Purple / Blue glow aesthetic. Use neutral bases (Zinc / Slate / Stone) with high-contrast singular accents (Emerald, Electric Blue, Deep Rose, etc.). Lock accent color per page.
* **Layout Diversification:** ANTI-CENTER BIAS. Avoid centered Hero/H1 sections when `DESIGN_VARIANCE > 4`.
* **Button Contrast Check:** Button text MUST be readable against the button background (WCAG AA). Button text MUST fit on one line at desktop.
* **Hero Restraint:** Max 2 lines on desktop for headline, subtext max 20 words. No "Used by" logo wall inside the hero itself.
* **Bento Grids:** MUST have rhythm, not one-sided repetition. Alternate full-width feature rows, asymmetric tile sizes.
* **Eyebrow Restraint:** Maximum 1 eyebrow (small uppercase label) per 3 sections.
* **Image Strategy:** Use real images or generate them. Do not use text-only pages with fake-screenshot divs.
