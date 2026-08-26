# Corporate Yoga Australia — Phase 11.3 Search Architecture Authority v1.0

**Status:** decision-complete implementation authority  
**Scope:** public CYA website search architecture, canonical URLs, page search roles, migration, metadata, internal authority, structured data and launch SEO QA.  
**Figma authority:** CYA Website — Search Architecture Authority v1.0 (`Ze1CERgMietgrGtL70je2x`)

## 1. Authority and conflict resolution

This document adds a search-specific authority layer to the existing CYA website strategy and prototype governance.

Where this document conflicts with an older assumption about:

- canonical URLs;
- search intent ownership;
- redirect destinations;
- indexability;
- metadata;
- schema;
- sitemap inclusion; or
- internal search authority,

**Phase 11.3 governs.**

The existing Stage 2 / prototype v2 commercial and experience principles continue to govern buyer experience, including:

- one-off bookings are legitimate and welcomed;
- the website must not force a program sale;
- situation-led discovery and direct service discovery both matter;
- progression from one moment to recurring support is optional;
- CYA remains human-led and workplace-aware;
- Wellbeing Studio is the connected delivery and continuity layer, not the primary acquisition proposition;
- the site must not become a generic service catalogue, wellness template or SaaS dashboard.

Search supports these truths; it does not replace them.

---

## 2. Canonical commercial architecture

| URL | Search role | Experience role | Action |
|---|---|---|---|
| `/` | Brand/category + primary corporate-yoga authority | recognition, orientation, broad commercial routing | retain + rebuild |
| `/workplace-wellbeing-programs` | primary program/procurement destination | reduce organisational uncertainty; show planning, cadence, delivery and evidence | new canonical |
| `/movement` | secondary movement orientation | help buyers choose Yoga, Pilates or other real movement formats | retain + rewrite |
| `/workplace-yoga` | specialist workplace-yoga service intent | make a direct booking easy; reveal program possibilities without forcing them | new canonical |
| `/workplace-pilates` | specialist workplace/corporate Pilates intent | establish Pilates as a real workplace product | new canonical |
| `/meditation-mindfulness` | workplace mindfulness + meditation | practical, approachable workplace participation | retain + rebuild |
| `/workplace-wellbeing-workshops` | workshops + expert experiences | choose a credible topic, person and format | new canonical |
| `/online-wellbeing` | online/ongoing/hybrid workplace wellbeing | continuity across time/location; introduce Wellbeing Studio as service infrastructure | retain + rebuild |
| `/case-studies` | proof + commercial authority | help buyers validate and defend the decision internally | new canonical |
| `/blog` | editorial authority | Insights hub; preserve existing article namespace | retain URL, relabel UI as Insights |
| `/about-us` | entity + trust | people, history, capability | retain + improve |
| `/contact` | conversion utility | planning relationship / enquiry | retain |

### Core search ownership

- `corporate yoga` → **Home**
- `workplace wellbeing programs`, `corporate wellness programs`, `employee wellbeing programs`, `workplace wellness programs`, `corporate wellbeing programs` → **/workplace-wellbeing-programs**
- `workplace movement` → **/movement**
- `workplace yoga`, `workplace yoga classes`, `yoga at work` → **/workplace-yoga**
- `corporate pilates`, `workplace pilates` → **/workplace-pilates**
- `workplace mindfulness`, `workplace meditation` → **/meditation-mindfulness**
- `workplace wellbeing workshops`, `corporate wellbeing workshops` → **/workplace-wellbeing-workshops**
- `online workplace wellbeing`, `virtual wellbeing programs` → **/online-wellbeing**
- client proof/results → **/case-studies**

**Important:** Do not de-optimise Home in an attempt to force the broad `corporate yoga` ranking to `/workplace-yoga`. Home remains CYA's primary broad corporate-yoga authority page.

---

## 3. Navigation architecture

Recommended primary navigation:

`Programs | Services ▾ | Case Studies | Insights | About | [primary CTA]`

`Services` is a navigation grouping and does **not** require an indexable `/services` page.

Suggested Services menu destinations:

- Workplace Yoga
- Workplace Pilates
- Movement
- Mindfulness & Meditation
- Workshops & Expert Experiences
- Online Wellbeing

The experience should remain situation-led as well as taxonomy-led. Literal service language must remain visible for high-intent buyers.

---

## 4. Page-family structure authority

### Home `/`

1. Category proposition + primary planning CTA
2. Situation-led entry
3. Recognisable experiences with explicit Yoga / Pilates / Mindfulness / Workshops language
4. Workplace Wellbeing Programs pathway
5. Client/proof evidence
6. Human/facilitator proposition
7. Online continuity / Wellbeing Studio
8. Selected case studies
9. Insights
10. Contextual CTA

Guardrail: preserve meaningful corporate-yoga prominence without turning Home into a keyword catalogue.

### Workplace Wellbeing Programs

1. Procurement-oriented hero
2. Organisational need / situation entry
3. How CYA plans with the organisation
4. Program structure / cadence
5. Experience mix
6. Onsite / online / hybrid / multi-site delivery
7. Engagement and communication support
8. Reporting / evidence
9. Illustrative program or year view
10. Case-study proof
11. Procurement FAQ
12. Plan with CYA

Guardrail: one-off and shorter engagements remain valid outcomes.

### Workplace Yoga

1. Workplace Yoga hero
2. Session-fit selector
3. Participation reassurance / suitability
4. How CYA tailors the experience
5. Onsite / online / hybrid
6. Facilitator credibility
7. Practical logistics
8. Client/case proof
9. Yoga-at-Work authority resource
10. Service-specific enquiry + optional program pathway

Guardrail: do not block a simple one-session enquiry to sell a program.

### Workplace Pilates

1. Pilates hero
2. Genuine session formats
3. Workplace contexts / suitability
4. Facilitator qualifications
5. Equipment and space
6. Delivery modes
7. Proof
8. Movement / Programs relationships
9. Enquiry

Guardrail: this page must not be a Yoga template with nouns replaced.

### Mindfulness & Meditation

1. Practical workplace hero
2. Context selector
3. Session types
4. Short formats / breathwork where genuinely offered
5. Facilitator expertise
6. Delivery modes
7. Proof
8. Check-In-With-Yourself authority resource
9. Program / workshop pathways
10. Enquiry

Guardrail: no clinical or treatment claims.

### Workshops & Expert Experiences

1. Human-led expertise hero
2. Situation/topic selector
3. Featured real sessions
4. Named experts + credentials
5. Formats (workshop / Lunch & Learn / expert conversation / conference)
6. Organisational use cases
7. Delivery modes
8. Evidence
9. Program/campaign continuity
10. Enquiry

Guardrail: no anonymous training catalogue. Publish a child topic page only when **product + expert + demand** all exist.

### Online Wellbeing

1. Continuity proposition
2. Hybrid/distributed-team situation entry
3. Live experiences
4. On-demand practice/resources
5. Expert/program/campaign continuity
6. Wellbeing Studio journey
7. Employee experience
8. Organisation experience
9. Evidence/reporting
10. Case study
11. Plan with CYA

Guardrail: sell the connected human-led service relationship, not a generic employee wellbeing platform.

### Movement

1. Movement hero
2. Workplace-fit question
3. Yoga vs Pilates vs stretch/mobility selection
4. Context cards
5. Inclusion/accessibility
6. Delivery modes
7. Evidence
8. Direct service routes
9. Program option

Guardrail: do not repeat whole Yoga/Pilates pages.

### Case Studies

Hub:

1. Proof proposition
2. Featured substantive case
3. Buyer-useful filters (do not automatically index filter states)
4. Case collection
5. Client evidence
6. Relevant service/program routes
7. Planning CTA

Individual case structure:

`Context → Need → CYA response → Delivery → Evidence → What happened next`

Guardrail: no fabricated ROI, location-doorway stories or logo-wall-only page.

---

## 5. Reusable module system

Shared modules may include:

- Situation Selector
- Experience Card
- Service Fit Module
- Delivery Mode Module
- Facilitator / Expert Card
- Evidence Strip
- Case Study Module
- Program Pathway
- Studio Continuity Module
- Related Insight Module
- Practical FAQ
- Contextual CTA

Reuse modules, not entire page templates. Module order must reflect the page's buyer/search job.

---

## 6. Migration authority

### Primary routes

| Current URL | Treatment | Destination |
|---|---|---|
| `/` | retain + rebuild | `/` |
| `/home` | 301 | `/` |
| `/personalised-wellbeing-programs` | merge + 301 | `/workplace-wellbeing-programs` |
| `/movement` | retain + rewrite | `/movement` |
| `/workplace-yoga-australia` | merge + 301 | `/workplace-yoga` |
| `/meditation-mindfulness` | retain + rebuild | same |
| `/online-wellbeing` | retain + rebuild | same |
| `/online-wellbeing-2026` | merge + 301 | `/online-wellbeing` |
| `/about-us` | retain + improve | same |
| `/contact` | retain | same |
| `/contact-us` | 301 one-hop | `/contact` |
| `/services` | 301 | `/movement` |
| `/blog` | retain | `/blog` |
| `/cart` | noindex or retire if unused | — |
| `/program-registration` | noindex while operational | same |
| `/contact-thank-you*` | noindex + consolidate utility route | — |

### Legacy route families

- old workplace-yoga nested URLs → `/workplace-yoga`
- old meditation/mindfulness nested URLs → `/meditation-mindfulness`
- old workplace-wellness-class URLs → `/workplace-wellbeing-programs`
- old online/course URLs → `/online-wellbeing`
- `/bespoke-services` → `/workplace-wellbeing-programs`
- `/book-a-class` → `/contact`
- `/about` → `/about-us`
- `/reviews`, `/testimonials` → `/case-studies`
- old 2026 wellbeing-program marketing pages → `/workplace-wellbeing-programs`

All redirects must be **one hop** to the final HTTPS canonical URL.

Do not redirect unrelated historical spam/hacked-looking `/cp/` or legacy `portal` paths into legitimate CYA pages. Verify they are not served; return proper 404/410 where appropriate and check GSC Security Issues / Manual Actions.

### Editorial archives

Preserve substantive editorial assets. Do **not** reproduce legacy tag/category archive sprawl merely because it exists today.

Legacy archive URLs should normally be removed from internal linking and sitemap, and retired where no genuine equivalent exists. Do not bulk-redirect all archive URLs to `/blog`.

Protected authority assets include:

- `/blog/8-tips-to-successfully-introduce-yoga-at-work`
- `/blog/check-in-with-yourself-with-this-simple-technique`
- `/blog/3-steps-to-reduce-workplace-stress-with-mindfulness`
- `/blog/harnessing-the-power-of-the-breath`
- `/blog/mindfulness-everyday`
- `/blog/sleep-and-workplace-productivity-corporate-yoga-australia`
- `/blog/the-nervous-system-solution-why-your-wellbeing-program-isnt-working-and-what-to-do-instead`
- `/blog/5-pillars-of-corporate-wellbeing-to-boost-your-teams-productivity`

---

## 7. Metadata / SERP system

Page titles should generally follow:

`Specific buyer intent → useful distinction → brand`

Avoid long repeated suffixes and keyword stacking.

Indicative title directions:

- Home: `Corporate Yoga Australia | Workplace Yoga & Wellbeing`
- Programs: `Workplace Wellbeing Programs Australia | Corporate Yoga Australia`
- Yoga: `Workplace Yoga Classes Australia | Corporate Yoga Australia`
- Pilates: `Workplace Pilates Classes | Corporate Yoga Australia`
- Mindfulness: `Workplace Mindfulness & Meditation | Corporate Yoga Australia`
- Workshops: `Workplace Wellbeing Workshops | Corporate Yoga Australia`
- Online: `Online Workplace Wellbeing | Corporate Yoga Australia`
- Movement: `Workplace Movement, Yoga & Pilates | Corporate Yoga Australia`
- Case Studies: `Workplace Wellbeing Case Studies | Corporate Yoga Australia`

Descriptions should explain what is offered, who it is for, how it is delivered and why CYA is credible. Avoid unsupported productivity/stress claims.

CTR optimisation is a strategic priority for existing page-one visibility; do not judge title changes on short-term ranking volatility alone.

---

## 8. Internal authority architecture

Home must link prominently to:

- Workplace Wellbeing Programs
- Workplace Yoga
- Workplace Pilates
- Movement
- Mindfulness & Meditation
- Workshops & Expert Experiences
- Online Wellbeing
- Case Studies

Programs must link to all genuine delivery components and relevant evidence.

Movement must link strongly to Yoga and Pilates.

Service pages should link upward to Programs where appropriate and to relevant proof/editorial support.

Case studies must link to the service/program delivered.

Substantive articles should link contextually to one or two relevant commercial destinations; avoid exact-match link stuffing.

---

## 9. Structured data

| Page/entity | Recommended schema |
|---|---|
| Home | `Organization`, `WebSite` |
| Commercial service/program | `Service`, `BreadcrumbList` |
| Article | `Article`, `BreadcrumbList` |
| Case study | `Article`, `BreadcrumbList` |
| Genuine expert/founder profile | `Person` |
| Genuine dated public event | `Event` |

Do not reproduce the legacy blanket `LocalBusiness` implementation. Use `LocalBusiness` only if the underlying entity genuinely qualifies.

Schema must reflect visible, true page content.

---

## 10. Content/evidence dependencies

Do not write pages from keywords first.

Production order per page:

`recover useful existing content → verify product reality → inventory evidence → identify factual gaps → gather missing CYA inputs → write/design`

Higher evidence-dependency pages:

- Workplace Wellbeing Programs — real program/cadence/reporting examples
- Workplace Pilates — confirmed product + facilitator evidence
- Workshops & Expert Experiences — named experts + real session catalogue
- Online Wellbeing — current vs near-future Studio capability must be clear
- Case Studies — permissions, context, delivery and real evidence

Use the existing `EvidenceStatus` governance contract for any claim or asset not yet publishable.

---

## 11. Search QA — launch blockers

A production release must not ship with any of these unresolved:

- `/home` still returning a live duplicate 200 page;
- redirect chains or temporary redirects in canonical migration paths;
- incorrect or missing canonicals;
- utility/thank-you/client registration pages indexed;
- legacy archive/tag/category index explosion;
- accidental production `noindex`;
- malformed sitemap or non-canonical URLs in sitemap;
- important orphan pages;
- blanket legacy `LocalBusiness` schema;
- staging indexable;
- soft-404 redirects to Home;
- analytics/conversion tracking not verified;
- historical spam paths still served;
- priority pages missing required evidence placeholders/status.

Post-launch, protect existing corporate-yoga equity before reacting to normal ranking volatility.

---

## 12. Measurement source hierarchy

1. **Google Search Console** — source of truth for actual Google performance: clicks, impressions, CTR, queries, pages, positions, indexing/canonicals.
2. **Ahrefs** — competitive intelligence: keyword/SERP movement, competitor visibility, referring domains, share of voice.
3. **Analytics / HubSpot** — conversion and commercial outcomes.

The formal pre-launch baseline should be frozen using a native GSC export immediately before deployment.

---

## 13. Implementation priority

### P0

- canonical route/navigation shell
- one-hop redirects and indexability rules
- shared modules
- Home
- Workplace Wellbeing Programs
- Workplace Yoga
- migration + technical QA

### P1

- Workshops & Expert Experiences
- Workplace Pilates (only after product/evidence qualification)
- Mindfulness & Meditation
- Online Wellbeing

### P2

- Movement refinement
- Case Studies hub + additional substantive cases

Case-study evidence gathering should run in parallel from the beginning.

---

## 14. Do not build

Do not create:

- separate pages for corporate wellness programs / workplace wellbeing programs / employee wellbeing programs / workplace wellness programs / corporate wellbeing programs;
- `/services` solely because the nav has a Services label;
- multiple thin workshop-topic pages;
- separate mindfulness and meditation acquisition pages;
- a generic employee wellbeing platform page for Wellbeing Studio;
- city/service doorway pages without genuine differentiated local evidence;
- indexable tag-cloud/filter sprawl;
- SEO-only copy blocks that weaken the buyer experience.

This restraint is part of the search strategy.