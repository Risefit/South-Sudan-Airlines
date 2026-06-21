# South Sudan Airlines — White Nile Club
**Frequent flyer programme · design proposal · built to plug into the Go7 (AeroCRS) loyalty module**

> **Name:** White Nile Club · **Points currency:** Nile Miles

---

## 1. How the Go7 / AeroCRS loyalty engine works (so we design to fit)

Go7's **Frequent Passenger** module is the engine; our website is the storefront and the member's front door. Five back-office pieces:

| Go7 piece | What it does | Our design maps to |
|---|---|---|
| **Levels** | Tiers, defined by *status-point* intervals | White Nile Club tiers |
| **Earning rules** | Points earned, set per route × cabin × tier × date | How members earn Miles (incl. tier bonuses) |
| **Spending rules** | Cost of an award flight in points, per route × cabin × tier | The reward chart |
| **Members** | Member records; **FF number auto-generated** | Profile + membership card |
| **Movements** | The earn/spend ledger, tied to each PNR | "Recent activity" in My Account |

**Three point types** (we keep these exact concepts, renamed to Miles):
1. **Awarded points → Award Miles** — spent on award flights; never expire.
2. **Status points → Status Miles** — drive tier level; can expire (Go7-configured).
3. **Bonus points → Bonus Miles** — like Award Miles, but can expire (promotions).

**Earning** happens automatically when a member's FF number is on the booking. **Redeeming** happens *inside the booking flow* — an "Award Flights" discount pays the fare with Miles; the passenger pays only taxes/charges. Points post a set interval **after** the flight. Comms go out via Go7 email/SMS templates with merge fields (`{ffnumber}`, points balance, name).

**Two ready-made integration hooks for the website:**
- A **Frequent Passenger registration form** we can embed → issues the FF number.
- The **AeroCRS API** (docs.aerocrs.com) → powers a live "My Account" dashboard (balance, tier, activity).

*Design consequence:* we don't build a points engine. We build (a) the marketing pages, (b) a join form that feeds Go7, and (c) a member dashboard that reads from Go7.

---

## 2. The concept

**White Nile Club** grows straight out of the airline's identity — South Sudan as the **source of the White Nile**, under the gold star of unity. Members **earn Miles** on every flight and **rise through the tiers** as they fly, redeeming Miles for award flights across the network. Tagline candidate: **"Follow the river."**

---

## 3. The tiers — explained in full (your decision)

Four tiers, free to join, rising on **Status Miles** earned each year. Below are the themes in depth so you can choose. The *structure* (4 tiers, what they unlock) stays the same whichever names we pick — so this is purely the naming/storytelling layer.

### Option A — Source to River *(recommended for this name)*
**Source → Stream → Confluence → White Nile**

- **Source** — the spring where the White Nile begins, in South Sudan. Where membership begins. *Entry.*
- **Stream** — the water gathering pace and momentum. A regular flyer building up. *Frequent.*
- **Confluence** — where South Sudan's tributaries (the Sobat, Bahr el Ghazal, Bahr el Jebel) meet to form the great river. A high-value flyer where everything comes together. *Priority.*
- **White Nile** — the mighty river itself: the culmination. The top tier *is* the club's namesake — you've become the river. *Top.*

*Why it's the strongest fit:* it's one coherent story, and the summit tier literally is the **White Nile**, matching the club name. Clean, dignified, unmistakably South Sudanese.

### Option B — River, crowned by the star
**Source → Current → Confluence → Guiding Star**

Same river ascent, but the top tier is the **Guiding Star** — the gold star of unity from the flag and livery, "a symbol of unity, guidance and a bright future." *Why consider it:* ties the pinnacle back to the airline's signature mark. *Trade-off:* mixes river + star imagery rather than staying pure-river.

### Option C — Through the sky
**Dawn → Horizon → Zenith → North Star**

- **Dawn** — the new nation's sunrise; a fresh start. *Entry.*
- **Horizon** — reaching outward to new places. *Frequent.*
- **Zenith** — the sun at its highest point. *Priority.*
- **North Star** — the guiding star travellers steer by; unity and direction. *Top.*

*Why consider it:* a clean "rise through the sky" arc, and the star summit echoes the flag even though the club is river-named. *Trade-off:* less tied to the specific White Nile identity.

### Option D — The real rivers of South Sudan
**Sobat → Bahr el Ghazal → Bahr el Jebel → White Nile**

Each tier is an actual South Sudanese river that feeds the Nile, building to the White Nile at the top. *Why consider it:* the deepest, most authentic geography — every name is a real water of the homeland. *Trade-off:* longer names, ranking real rivers is somewhat arbitrary, and it's harder to brief/translate internationally.

### (Also possible) Option E — Classic, lightly tinted
**Blue → Silver → Gold → Star** — internationally instant to understand, least culturally specific; the "Gold" tier could use our Papyrus Gold. A safe fallback if you want maximum familiarity.

### Option F — Birds of the Sudd *(flight & soaring)*
**Weaver → Crowned Crane → Shoebill → Fish Eagle**

- **Weaver** — small, industrious, everywhere; the welcoming start. *Entry.*
- **Crowned Crane** — the elegant grey crowned crane; graceful and regal. *Frequent.*
- **Shoebill** — the rare, prehistoric icon of the Sudd wetlands; a prized sighting. *Priority.*
- **Fish Eagle** — the African fish eagle, apex of the river skies; its call *is* African water. *Top.*

*Why consider it:* birds = flight, and a ladder of rarer, higher-soaring birds is a perfect airline metaphor — plus gorgeous tier icons. The Sudd is one of the world's great bird habitats, uniquely South Sudanese. *Trade-off:* some travellers won't know the species.

### Option G — The land rising to the peak *(real geography, low → high)*
**Sudd → Boma → Imatong → Kinyeti**

- **Sudd** — the vast wetland where the waters (and your journey) begin. *Entry.*
- **Boma** — the highland plateau and national park, home to one of Earth's greatest wildlife migrations. *Frequent.*
- **Imatong** — South Sudan's mountain range, rising green and high. *Priority.*
- **Kinyeti** — Mount Kinyeti, the **highest peak in South Sudan**: the summit. *Top.*

*Why consider it:* a literal climb from the wetlands to the nation's highest point — the cleanest possible "rise through the tiers" story, every name a real place of the homeland. *Trade-off:* the place names are less globally familiar.

### Option H — Sun over the Nile *(warm, golden, new-nation dawn)*
**First Light → Sunrise → Zenith → Golden Hour**

- **First Light** — the first glow before dawn; a new nation, a new member. *Entry.*
- **Sunrise** — the sun breaking the horizon. *Frequent.*
- **Zenith** — the sun at its highest. *Priority.*
- **Golden Hour** — the rich golden light photographers chase; the premium summit, tied to our **Papyrus Gold**. *Top.*

*Why consider it:* warm, aspirational and universally understood, with a beautiful colour gradient for the tier cards and a direct link to the brand gold and the "new nation rising" story. *Trade-off:* a sun arc, conceptually adjacent to the sky option (C).

**My recommendation:** **Option A** (Source → Stream → Confluence → White Nile) for tightest coherence with the club name; **Option G** (Sudd → Boma → Imatong → Kinyeti) is the strongest of the new three — a real, dignified ascent of South Sudan itself.

**Tier benefits** (all deliverable by a regional carrier; richer ones marked "as available"):

| Benefit | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
|---|---|---|---|---|
| Earn Miles on every flight | ✓ | ✓ | ✓ | ✓ |
| Tier earning bonus | — | +25% | +50% | +100% |
| Priority check-in | — | ✓ | ✓ | ✓ |
| Extra checked baggage | — | +5 kg | +10 kg | +15 kg |
| Priority boarding | — | — | ✓ | ✓ |
| Waitlist / standby priority | — | — | ✓ | ✓ |
| Dedicated support line | — | — | — | ✓ |
| Lounge access (as available) | — | — | — | ✓ |

All implemented via Go7 **Levels** + **Earning rules** per level.

---

## 4. Earn & redeem (mapped to Go7's three point types)

- **Earn Miles** on every SSA flight — amount varies by route and cabin (Go7 *Earning rules*), plus your **tier bonus**.
- **Award Miles** = what you spend on free flights (never expire). **Status Miles** = what lifts you up the tiers each year. **Bonus Miles** = promotions (may expire).
- **Redeem** Award Miles for **award flights anywhere on the network** — you pay only taxes and charges. Handled by the **Award Flights** option in the booking flow (Go7 *Spending rules*).

| Award flight | Award Miles (one way) |
|---|---|
| Domestic (e.g. Juba–Malakal) | from ~X,XXX |
| International (Juba–Nairobi) | from ~XX,XXX |

(Real numbers published once Go7 spending rules are set — the page reads them, never hard-codes.)

---

## 5. What we add to the website (the "aspects", with full functionality)

1. **Programme landing page** — `/white-nile-club`
   Hero (river/star motif), "how it works" (earn → rise → redeem in 3 steps), the tier ladder + benefits table, reward examples, FAQ, strong **Join** CTA.

2. **Join / enrol** — `/white-nile-club/join`
   Hosts the **Go7 Frequent Passenger registration form** (embed, white-labelled), which issues the FF number. Pre-launch: styled-placeholder pattern, swapped for the live form when provisioned.

3. **Sign in + My Account** — `/white-nile-club/account`
   Membership card (name + FF number), current tier with a **progress bar to the next tier** (Status Miles), **Award Miles balance**, and **recent activity** (Movements). Reads the **AeroCRS API**; ships first as a branded scaffold with mock data.

4. **Booking touchpoints** — FF number field in the search/booking widget (earn automatically), "Pay with Miles / Award flight" surfaced, and a "you'll earn ~N Miles" estimate on results.

5. **Navigation & footer** — add **White Nile Club** to the nav and **Sign in / Join** to the header utility; a club column in the footer.

6. **Programme terms** — `/legal/white-nile-club-terms` (placeholder, reviewed before launch).

7. **Member comms** — branded Go7 email/SMS templates (welcome + FF number, tier-up, statements, award confirmations).

8. **i18n** — English now; Arabic (RTL) in Step 5.

---

## 6. Integration summary

```
Website (ours)                            Go7 / AeroCRS (engine)
─────────────────                         ───────────────────────
/white-nile-club          ── markets ──▶  (pure content)
/white-nile-club/join     ── embeds ──▶   Registration form → Members (FF number)
/white-nile-club/account  ── reads  ──▶   API: tier (Levels), balance, activity (Movements)
/book  (FF number)        ── feeds  ──▶   Earning rules  → Status + Award Miles post after flight
/book  (Award flight)     ── calls  ──▶   Spending rules → award booking, pay taxes only
Email/SMS                 ── uses   ──▶   Go7 templates + merge fields
```

No custom loyalty backend. Build against the Go7 **sandbox**, switch to production at launch.

---

## 7. Decisions

1. **Name** — ✅ **White Nile Club** (points = **Miles**).
2. **Tier theme** — *pending your pick from §3* (recommended: Option A, Source → Stream → Confluence → White Nile).
3. **Build scope** — pages 1–3 + booking tie-in + nav, placeholders where Go7 isn't live yet, shipping as **website v1.1.0**.
