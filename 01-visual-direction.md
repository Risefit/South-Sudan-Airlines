# South Sudan Airlines — Visual Direction Proposal
**Step 1 · Homepage design thinking · No code yet**

---

## The one-line concept

**"The pride of a new nation."** The livery already tells the story — a white aircraft carrying the full South Sudan flag on its tail and a single **gold star of unity** down its side, under the line *"The Pride of the New Nation."* The site extends that exactly: a national carrier rising with purpose, where **the star = unity, the flag = identity, the future = a global presence.** Beneath it runs the geographic anchor — South Sudan is the **source of the White Nile** — giving us an identity that is specific (not generic "Africa"), dignified, and quietly premium.

The brand line **"Unity · Pride · Future"** becomes a quiet throughline of the homepage.

The target feeling sits exactly where you asked: **Uganda Airlines' regional honesty + Qatar's institutional weight.** Photographic, serif-led, generous whitespace, the flag colours used with restraint. A national institution that happens to be beautifully made — not a tech product, not a budget carrier, not a safari brochure.

---

## Hero treatment

**Recommendation: full-bleed cinematic photography, not video at launch.** And we now have the perfect asset — **your livery render of the aircraft at sunset above the clouds** (`aircraft-sunset-hero.jpeg`) is a genuinely strong hero: warm light, the gold wordmark, the flag tail, the new nation literally rising. We lead with that; the on-ramp side profile and tail-detail shots feed the Fleet and About sections. Reasoning for still over video:

- **3G in Juba.** A hero video is the enemy of LCP <2.0s and of the brief's "works over 3G" requirement. A single AVIF still gives us the cinematic weight at a fraction of the payload. We can add an optional muted, lazy-loaded background loop on fast connections later (progressive enhancement), but it never blocks first paint.
- **Legibility guaranteed.** A fixed **Nile Blue → transparent gradient scrim** (left-anchored, ~55% opacity falling to 0) sits over the photo. This does two jobs: locks WCAG AA contrast for the headline regardless of which photo is loaded, and gives the brand colour a structural role rather than a decorative one.

**Hero layout.** Headline left-aligned in the lower-left third — *"South Sudan's wings to the world"* in the display serif, large. Subhead beneath in the humanist sans. The **flight-search widget is the hero's focal interactive element**, anchored at the bottom edge as a single horizontal bar on desktop (origin · destination · dates · pax · Search) and a stacked card on mobile. The search widget — not the imagery — is the thing your eye lands on and the thing you can act on within 2 seconds. That is the "super easy" promise made literal.

A thin **Papyrus Gold hairline** runs under the header, the only ornament above the fold.

---

## Typography pairing

**Display / headings: Tiempos Headline** (transitional serif — institutional, trustworthy, a little editorial). 
**Body / UI: Inter** (humanist sans, superb screen legibility, full Latin + Arabic-adjacent coverage, free).

This pairing reads "international flag carrier," renders fast, and Inter's huge weight range covers every UI need. If licensing budget allows an upgrade later, **GT Sectra** (display) + **Söhne** (body) is the premium swap — but Tiempos + Inter ships now and looks the part. **Editorial New** is the more expressive alternative for display if you want more drama in the headlines; I'd hold it in reserve.

Type rules: serif only for display and section titles; everything functional (nav, buttons, fares, tables, captions) is sans. Tight, confident heading sizes; generous line-height on body. One typographic flourish — **flight codes set in a mono/tabular treatment** (`JUB → NBO`) — see micro-detail #3.

---

## Colour application system

The livery uses the full national flag palette. I'm structuring it as a **two-tier system** so it feels like a flag carrier without ever feeling busy.

**Core (90% of every page) — the calm institutional base:**
- **Nile Blue `#0A4F75`** — structure and trust. Header, footer, hero scrim, primary buttons, links. The "institutional weight" — and it matches the deep blue of the flag triangle and the aircraft belly.
- **Papyrus Gold `#D4A845`** — earned accent only. The gold cheatline echoed as hairlines, the focus underline, active route arcs, the star mark, one CTA accent. Stays precious — once or twice per viewport.
- **Warm off-white `#FAF6EF`** — default page background. Paper, not screen-white; it also reads as the white fuselage. Separates us from generic SaaS in one move.
- **Charcoal `#1F1F1F` / Mid-grey `#595959`** — body and secondary text.

**Flag accents (the remaining 10% — used as precise punctuation, never as fills):**
- **Flag Red `#CE1126`, Flag Green `#078930`, Flag Black `#000000`**, separated by white — appear together only in flag-derived moments: a thin tri-band rule under section kickers (exactly like *"Unity · Pride · Future"* on your brand board), the route-map "live" indicators, category chips, and footer trim. They show up as a *set*, briefly, then recede — so the page stays Nile-Blue-and-gold calm but is unmistakably South Sudanese up close.

Discipline rule: the three flag colours never appear as large area fills (that's "budget airline"); they earn their place as fine punctuation. Whitespace does the heavy lifting.

---

## Section sequence (homepage, top to bottom)

1. **Header** — transparent over hero, solidifies to Nile Blue on scroll.
2. **Hero** — photo + headline + the search widget (focal point).
3. **Search widget** — lives in the hero on desktop; becomes its own first section on mobile so it's never buried.
4. **Why fly us** — the four brand promises (punctuality, international-standard safety, dignified service, national platform) as four restrained cards with simple line icons. No clutter, lots of air.
5. **Route map preview** — a calm map of South Sudan + the region, the four Phase-1 routes drawn from the Juba hub, planned routes ghosted. Interactive teaser; "Explore the network →" to the full Routes page.
6. **Fleet** — lead with the Dash 8-300 (passenger). Large photo/render, two or three specs, ticket-stub card styling. AN-26 gets a single line + link to Cargo.
7. **Destinations** — editorial strip of the five cities (Juba, Malakal, Wau, Bentiu, Nairobi), Turkish-Airlines-style photographic tiles with a short line each. Drives the future SEO destination guides.
8. **Press / News** — three-card preview, CMS-ready, gracefully empty at launch ("News coming soon").
9. **Footer** — Nile Blue, full sitemap, the contact emails, social placeholders, language switch, ©2026.

---

## Navigation IA

Lean, airline-conventional so it's instantly legible, with a single mega-menu for the network cluster.

**Primary:** `Book` · `Where we fly` ▾ · `Cargo` · `Travel info` · `About` · `Contact` 
**`Where we fly` mega-menu:** Routes / Network · Schedule · Destinations 
**Utility bar (top-right):** `Manage booking` · `Check-in` · phone number · **EN / ع** language toggle

`Book` is visually distinct (the one solid Nile-Blue button in the nav) — the primary conversion path is never ambiguous. On mobile this collapses to a full-screen overlay menu with the same order; `Book` and the search widget stay one tap away. Everything resolves to the 2-second rule.

---

## Three micro-detail moves that distinguish the site

1. **The gold star + hairline as connective tissue.** A single 1px Papyrus-Gold rule recurs as the site's signature — under the header, as the draw-in focus underline on form fields, as a short rule above each section title — and where it terminates or marks a kicker it resolves into the **gold star of unity** lifted straight from the livery. The star becomes the favicon, the loading mark, the scroll-to-top button, and the bullet on the brand-promise list. It's the cheapest possible ornament, it carries real meaning (unity), and it makes the whole site feel authored. Restraint *is* the premium signal.

2. **The White Nile flow-line.** A subtle meandering line, derived from the actual course of the river, used as a section-transition motif and as the visual spine of the route map. It quietly reinforces "source of the river" without a single literal water cliché. Ownable, geographic, specific to South Sudan — exactly what the brief asks for instead of generic Africa imagery.

3. **Boarding-pass detail language.** Cards (fleet, fares, destinations) borrow honest aviation cues — a perforated/ticket-stub edge, tabular-figure flight codes (`JUB → MAK`), and time-formatted block times (`1h 10m`). Aviation-native, not gimmicky, and it makes the product feel like it's *made by an airline* rather than decorated to look like one.

---

## Two micro-interactions I'll implement

**1 — Search widget focus + swap.**
On focusing any field, the Papyrus-Gold hairline draws in left-to-right under it over ~200ms (ease-out). The origin/destination **swap button** rotates 180° with a small spring and the two city values cross-fade as they exchange. Tiny, tasteful, and it makes the most important component on the page feel crafted. Honors `prefers-reduced-motion` (underline appears instantly, no rotation).

**2 — Route map arc trace.**
On hovering or tapping a city in the route-map preview, an aircraft glyph traces the great-circle arc from Juba to that city; the arc draws in with a Nile-Blue→Gold gradient and the city label rises a few pixels. Planned (Phase 2/3) routes render as a dashed ghost arc with a "Planned" chip — no dates promised. Reduced-motion fallback: the arc and label appear statically, fully highlighted, no animation.

---

## Built-in guarantees (carried from the brief)

- **Mobile-first**, 360 / 768 / 1280 / 1920 breakpoints; the search widget is reachable without scrolling on every size.
- **Performance:** still hero in AVIF/WebP, no blocking video, lazy media below the fold — protecting LCP <2.0s and CLS <0.05 on 3G.
- **Accessibility WCAG 2.1 AA:** the gradient scrim guarantees hero contrast; gold is never the sole carrier of meaning; full keyboard nav and reduced-motion paths on both interactions.
- **i18n-ready:** layout built logical-property-first so the Arabic `dir="rtl"` flip in Step 5 is structural, not a retrofit.

---

## Confirmed direction (signed off)

- **Hero:** still photography at launch — using your **sunset livery render**. ✅
- **Type:** Tiempos Headline + Inter. ✅
- **Micro-details:** all three (gold star + hairline, White Nile flow-line, boarding-pass detailing). ✅
- **Palette:** Nile Blue + Papyrus Gold core, full flag colours (red/green/black) as fine punctuation, gold star of unity as the signature mark. ✅
- **Theme:** *Unity · Pride · Future* / "The Pride of the New Nation" as a quiet throughline. ✅

## Your livery assets — where each goes

Staged in `assets/livery/` for the build:
- `aircraft-sunset-hero.jpeg` → **homepage hero**
- `dash8-ramp-side.jpeg` → **Fleet section** (clean side profile)
- `tail-flag-detail.jpeg` → **About / "the flag" story** and brand moments
- `brand-board-identity.jpeg` → reference for the *Unity · Pride · Future* treatment (internal, not published as-is)

All ready. Next: **Step 2 — the full runnable homepage in code.**
