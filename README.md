# South Sudan Airlines — ssairlines.com

Marketing website for the national flag carrier of the Republic of South Sudan.
*The Pride of the New Nation · Unity · Pride · Future.*

## Stack
- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (brand design tokens in `tailwind.config.ts`)
- **Framer Motion** — tasteful micro-interactions
- Image optimisation (AVIF/WebP) for fast load on 3G
- Ready for: next-intl (EN/AR), Sanity CMS, Plausible analytics, AeroCRS booking embed

## Run locally
```bash
pnpm install
pnpm dev          # http://localhost:3000
```
(`npm install && npm run dev` works too.)

## Build
```bash
pnpm build && pnpm start
```

## Structure
```
app/
  layout.tsx      # fonts, metadata, Airline JSON-LD, skip link
  page.tsx        # homepage composition
  globals.css     # base styles + brand component classes
components/
  Header.tsx          Hero.tsx           SearchWidget.tsx   (AeroCRS-ready)
  WhyFlyUs.tsx        RouteMapPreview.tsx (arc-trace)        Fleet.tsx
  Destinations.tsx    Press.tsx          Footer.tsx
  brand.tsx           # StarMark, FlagRule, Kicker, Wordmark
lib/
  data.ts         # hard-coded v1 content (CMS-ready)
  utils.ts
public/
  livery/         # aircraft renders (national livery)
  star.svg        # favicon — gold star of unity
```

## Design system
| Token | Value | Use |
|---|---|---|
| `nile` | `#0A4F75` | structure, trust, primary |
| `gold` | `#D4A845` | earned accent, star, hairline |
| `paper` | `#FAF6EF` | background (warm, not stark) |
| `ink` / `slatey` | `#1F1F1F` / `#595959` | text |
| `flag.red/green/black` | flag colours | fine punctuation only |

Display serif is **Source Serif 4** (free stand-in for licensed **Tiempos Headline**);
body/UI is **Inter**. Swap the display font in `app/layout.tsx` when Tiempos is licensed.

## Notes for the next steps
- **Booking (AeroCRS):** `SearchWidget` and `/book` are styled scaffolding to be swapped
  for the AeroCRS embed/iframe once credentials are provisioned (white-labelled to this design system).
- **Imagery:** hero/fleet use the supplied livery renders; destination tiles use Unsplash
  placeholders pending commissioned photography.
- **i18n:** layout is logical-property friendly for the Arabic `dir="rtl"` scaffold (Step 5).
