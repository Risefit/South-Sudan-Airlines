# Changelog — South Sudan Airlines

All notable changes to the website are recorded here. This project uses
**semantic versioning** — `vMAJOR.MINOR.PATCH`:

- **MAJOR** — large redesigns or breaking restructures.
- **MINOR** — new pages, sections, or features.
- **PATCH** — small fixes, copy tweaks, styling adjustments.

Each release is packaged as a downloadable archive: `releases/south-sudan-airlines-vX.Y.Z.zip`.

---

## v1.1.0 — 21 June 2026
**White Nile Club — frequent flyer programme added.**

### New programme (Birds of the Sudd)
- Brand: **White Nile Club**, currency **Nile Miles**, tagline "Follow the river".
- Tiers: **Weaver → Crowned Crane → Shoebill → Fish Eagle**, each with custom bird-silhouette emblems, accent colours, and a benefits ladder.

### New pages
- `/white-nile-club` — landing: how-it-works, tier ladder + benefits, illustrative reward chart, FAQ, join CTAs.
- `/white-nile-club/join` — enrolment (Go7 registration-form placeholder, white-labelled).
- `/white-nile-club/account` — member dashboard: membership card, tier progress bar, Nile Miles balance, recent activity (sign-in preview with sample data).
- `/legal/white-nile-club-terms` — programme terms (placeholder).

### Built to plug into Go7 (AeroCRS)
- Tiers → Levels; earning → Earning rules; rewards → Spending rules; members/FF number → Members; activity → Movements. Join form and account read from the Go7 form/API at launch — no custom loyalty backend.

### Tie-ins
- Added **White Nile Club** to primary nav + footer; **Sign in** in the utility bar.
- Homepage **Birds of the Sudd** teaser section.
- Optional **White Nile Club number** field on the booking widget (earn Nile Miles).
- Added club routes to sitemap.

---

## v1.0.0 — 21 June 2026
**First complete release — built, deployed and live.**

### Homepage
- Hero with national-livery photography, gradient scrim, and the flight-search widget (AeroCRS-ready scaffold).
- Two signature micro-interactions: search-widget focus underline + spring swap button; route-map aircraft arc-trace.
- Sections: Why fly us, route-map preview, fleet, destinations, press, footer.

### Phase 1 internal pages
- Routes & network (interactive SVG map), per-route detail pages, schedule/timetable.
- Book, Manage, Check-in (AeroCRS-ready placeholders).
- Cargo (oil-corridor map + tariff), About, Contact.
- Legal (terms, privacy, cookies), Press, Careers, Travel info, Destinations + guides.
- Branded 404, Arabic (RTL) placeholder, sitemap.xml, robots.txt, Airline structured data.

### Foundations
- Next.js 14 (App Router) + TypeScript + Tailwind + Framer Motion.
- Brand design system: Nile Blue + Papyrus Gold core, flag colours as accents, gold star of unity motif.
- Deployed to Vercel via GitHub (`Risefit/South-Sudan-Airlines`), auto-deploy on push.

---
<!-- Add new versions above this line, newest first. -->
