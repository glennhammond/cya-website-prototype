# CYA Website — Phase 11.4 Production Integration & Qualification v1.0

**Status:** active implementation authority  
**Branch:** `phase-11-3-search-authority`  
**PR:** #2 (remain Draft until substantive content + technical QA gates pass)  
**Governing search authority:** Phase 11.3 v1.0

## 1. 11.4.1 Current Prototype × Phase 11.3 Gap Audit

### KEEP

- Next.js 16 / App Router / TypeScript / Tailwind production foundation.
- Existing component system and restrained editorial page composition.
- `EvidenceStatus` governance contract and annotation mode.
- Human-led, workplace-aware service language.
- Legitimate one-off engagement principle and optional progression model.
- Governed Programs, Movement, About, Contact and Case Studies foundations where they align with Phase 11.3.
- Documentary/human photography strategy, with publication-permission statuses retained.
- Existing Conference/Event experience as a useful situation-led path while final non-core-route disposition is qualified.

### MODIFY

- Home: retain visual/brand hero, but restore explicit corporate/workplace Yoga category relevance immediately below it; add situation-led discovery, literal service language, Programs, proof, human delivery, online continuity and Insights authority.
- Programs: expand from a continuity proposition into a true procurement destination covering organisational need, planning, cadence, experience mix, delivery, communications, reporting, evidence and procurement questions.
- Movement: convert from a broad movement service page into the selection/orientation hub for Yoga, Pilates and workplace-friendly movement.
- Navigation: move from legacy prototype destinations to substantive canonical routes; do not expose evidence-gated routes before they are ready.
- Wellbeing Studio language: move from product-first acquisition to Online Wellbeing / service-continuity framing.
- Internal links: remove reliance on `/consultation`, `/programs`, `/workplace-wellbeing` and `/wellbeing-studio` where canonical destinations are already available.
- Technical search layer: centralise redirect authority, sitemap, robots, schema and launch QA.

### REPLACE

- `/wellbeing-studio` as the acquisition destination → `/online-wellbeing`.
- `/programs` → `/workplace-wellbeing-programs`.
- `/workplace-wellbeing/movement` → `/movement`.
- `/proof` → `/case-studies`.
- `/about` → `/about-us`.
- `/consultation` → `/contact` with query context retained.
- Legacy blanket/implicit search assumptions → machine-readable Phase 11.3 authority.

### RETIRE / DO NOT REBUILD

- Thin synonym pages for program keywords.
- Generic `/services` SEO page.
- Legacy taxonomy/tag archive sprawl.
- Any unrelated historical `/cp/` or portal spam/hacked-looking paths as redirect targets.
- Product-first “employee wellbeing platform” positioning for Wellbeing Studio.
- Unsupported health, productivity, resilience, injury-prevention or clinical outcome claims.

## 2. Route qualification state

| Route | Phase 11.4 state | Production decision |
|---|---|---|
| `/` | materially qualified | KEEP + MODIFY; Home remains broad corporate-yoga authority |
| `/workplace-wellbeing-programs` | materially qualified | KEEP + MODIFY; canonical procurement destination |
| `/movement` | materially qualified | KEEP + MODIFY; selection hub |
| `/workplace-yoga` | implemented | NEW canonical specialist service page; does not displace Home's broad role |
| `/workplace-pilates` | **WAITING — evidence gate** | Do not publish yet |
| `/meditation-mindfulness` | implemented | Rebuilt as practical workplace service; no clinical/treatment claims |
| `/workplace-wellbeing-workshops` | implemented with claim gates | Real topic families + named practitioners where public evidence supports them; no unverified presenter assignment |
| `/online-wellbeing` | implemented | Service continuity first; Wellbeing Studio is delivery layer |
| `/case-studies` | structurally ready, evidence-dependent | Keep evidence placeholders until client permission/facts are verified |
| `/blog` | **WAITING — editorial migration** | Do not create thin hub/articles; preserve protected URLs when real source content is migrated |
| `/about-us` | materially qualified | Keep; canonical links corrected |
| `/contact` | materially qualified | Keep canonical conversion utility |

## 3. Non-core prototype routes

### `/conferences-events`

**Classification: KEEP TEMPORARILY / QUALIFY FINAL DISPOSITION.**

It represents a real CYA service situation and is actively useful for conference buyers, but it is not part of the locked Phase 11.3 canonical commercial set. Keep it functional and linked as a supporting experience route during the Draft PR. Do not add it to the Phase 11.4 canonical sitemap until final disposition is reconciled with the locked IA.

### `/resources`

**Classification: KEEP TEMPORARILY / MERGE ROLE INTO INSIGHTS.**

Useful resource concepts exist, but `/blog` is the locked editorial authority. Do not create duplicate editorial systems. Keep the current prototype utility available during migration, then reconcile genuine resources into Insights or other appropriate canonical pages.

### `/member-access`

**Classification: KEEP AS UTILITY.**

Not an acquisition/search destination. Member sign-in remains separate from the public sales journey.

### `/workplace-wellbeing`

**Classification: RETIRE AFTER INTERNAL-LINK CLEANUP AND MIGRATION DECISION.**

Its broad service role is now distributed more deliberately across Home, Movement, Yoga, Mindfulness, Workshops, Programs and Online Wellbeing. It should not remain a competing generic commercial search destination.

## 4. 11.4.2 Home qualification

Implemented:

- emotive approved hero retained;
- explicit Workplace Yoga / Pilates / Mindfulness / Workshops / Programs proposition immediately below;
- situation-led discovery restored;
- recognisable service language visible without keyword stuffing;
- one-off booking remains legitimate;
- direct canonical links to Programs, Yoga, Mindfulness and Online Wellbeing;
- Case Studies proof system retained with evidence gates;
- founder/human proposition retained;
- Online Wellbeing now frames Wellbeing Studio as continuity infrastructure;
- Insights signpost prepared, pending editorial route migration.

## 5. 11.4.3 Workplace Yoga

Implemented as a specialist service destination covering:

1. workplace-Yoga proposition;
2. one-off / series / recurring / event fit;
3. participation reassurance;
4. tailoring by audience, space, time and purpose;
5. onsite / online / multi-location delivery;
6. facilitator-fit model with credential publication gate;
7. practical logistics;
8. evidence placeholder / claim guardrail;
9. protected Yoga-at-Work authority path;
10. direct Yoga enquiry + optional Programs pathway.

Home remains the broad `corporate yoga` authority page.

## 6. 11.4.4 Pilates qualification

### Confirmed product reality

Existing CYA public material confirms Pilates is a genuine movement modality, including mat-based/on-demand and blended movement-program use. CYA's current team information also identifies Pilates within practitioner specialisms.

### Publication blockers

The dedicated `/workplace-pilates` page remains withheld until these are verified in production evidence:

- Pilates-specific facilitator qualifications/credentials suitable for publication;
- which practitioners are currently available for workplace Pilates and in which locations/modes;
- exact equipment/space requirements for CYA's workplace Pilates formats;
- Pilates-specific imagery with publication permission;
- at least one credible Pilates delivery/proof example or an explicit decision to publish without case proof;
- substantive differentiation from Yoga beyond modality naming.

**Decision:** real product, not yet publication-qualified as a dedicated acquisition page. Continue exposing Pilates through `/movement` and direct enquiry rather than manufacturing a thin SEO page.

## 7. 11.4.5 Mindfulness & Meditation

Implemented on `/meditation-mindfulness` using genuine CYA formats including guided meditation, mindfulness workshops, breathwork, deep-rest/sound experiences and office/chair-friendly sessions.

Guardrails:

- no clinical/treatment claims;
- no guaranteed stress/productivity/resilience outcomes;
- practitioner credentials visible only when verified;
- protected Check-In-With-Yourself editorial path retained as a required migration dependency.

## 8. 11.4.6 Workshops & Expert Experiences

Implemented on `/workplace-wellbeing-workshops`.

Qualified current topic families include stress management, sleep, nutrition, mindfulness, breathwork and financial wellbeing. Current public team information supports named visibility for relevant practitioners including Val (Wellness Facilitator / qualified Nutritionist), Chantal (Yoga / Mindfulness / Breathwork) and founder Debby Lewis.

Guardrails:

- exact topic-to-presenter assignment requires fit, credentials and availability confirmation;
- credential-sensitive content stays within verified professional scope;
- no anonymous catalogue presentation;
- no stress-management child page yet: demand alone is insufficient without a qualified product/expert/evidence package;
- evidence should connect person + topic + workplace context.

## 9. 11.4.7 Online Wellbeing / Wellbeing Studio

Implemented on `/online-wellbeing`.

The page now leads with:

- remote / hybrid / distributed-team situations;
- live human experiences;
- on-demand practice/resources;
- expert and program continuity;
- Wellbeing Studio as connected delivery infrastructure;
- employee experience;
- organisation experience;
- privacy-aware aggregate reporting;
- current-capability evidence gate.

`/wellbeing-studio` is treated as a legacy acquisition route and redirects to `/online-wellbeing`.

## 10. 11.4.8 Insights / editorial authority

**WAITING — source-content migration dependency.**

Protected URLs are known and must be preserved, but the substantive article source content is not present in this Next.js repository. Do not invent replacement articles or publish thin placeholders solely to satisfy URL coverage.

Required migration set begins with:

- `/blog/8-tips-to-successfully-introduce-yoga-at-work`
- `/blog/check-in-with-yourself-with-this-simple-technique`
- workplace stress/mindfulness article;
- breathwork article;
- sleep/workplace productivity article;
- wellbeing-program delivery article;
- workplace wellbeing pillars article.

Until migrated, `/blog` and article URLs stay out of the sitemap and the PR remains Draft.

## 11. 11.4.9 Technical search layer

Implemented so far:

- canonical metadata on substantive canonical pages;
- central one-hop **301** redirect foundation for known legacy/prototype routes;
- canonical-only `sitemap.xml` foundation that intentionally omits evidence-gated/unmigrated destinations;
- preview-environment `robots.txt` protection;
- canonical internal-link cleanup across newly qualified pages and key legacy content;
- `/wellbeing-studio` acquisition route migrated to `/online-wellbeing`.

Still to complete before launch:

- structured-data implementation and validation;
- remaining migration-manifest URL families once exact source paths are recovered;
- `/workplace-wellbeing` final redirect/retirement decision;
- editorial migration + `/blog` sitemap inclusion;
- utility-page noindex verification where applicable;
- explicit 404/410 verification for historical spam paths;
- portal DNS/subdomain security check;
- GSC Security Issues + Manual Actions check;
- canonical/indexability/rendered-link QA on deployed production candidate.

## 12. Current blocker register

### B1 — Pilates publication evidence

Owner: CYA / Debby + production team  
Need: practitioner credentials, exact workplace format/logistics, permissioned imagery, proof/differentiation.

### B2 — Protected editorial source migration

Owner: website/content migration  
Need: substantive source content for protected article URLs and final Insights hub inventory.

### B3 — Case-study publication evidence

Owner: CYA + client permissions  
Need: verified context, delivery facts, evidence, quotations/metrics where used, client permission.

### B4 — Conference/Resources non-core route disposition

Owner: Phase 11.4 implementation authority  
Need: final reconciliation after editorial migration and internal-link QA; do not allow either route to compete with locked canonical search roles.

### B5 — Legacy security verification

Owner: technical launch QA  
Need: `/cp/` behaviour, portal DNS/application state, GSC Security Issues and Manual Actions.

## 13. PR promotion rule

PR #2 remains **Draft** until at minimum:

- build and lint pass;
- protected editorial paths are migrated or removed from production-facing links pending migration;
- no substantive internal link returns 404;
- sitemap contains only canonical indexable URLs;
- redirects are one-hop and correct;
- structured data validates against visible content;
- preview/staging is not indexable;
- evidence-gated Pilates is not accidentally published/indexed;
- launch QA has been run against a deployed candidate.
