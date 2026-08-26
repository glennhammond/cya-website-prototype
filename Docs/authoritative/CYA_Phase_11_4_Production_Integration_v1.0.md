# CYA Website — Phase 11.4 Production Integration & Qualification v1.0

**Status:** active implementation authority  
**Branch:** `phase-11-3-search-authority`  
**PR:** #2 — remain Draft until the remaining evidence, editorial and deployed-QA gates pass  
**Governing search authority:** Phase 11.3 v1.0

## 1. 11.4.1 Current Prototype × Phase 11.3 Gap Audit

### KEEP

- Next.js 16 / App Router / TypeScript / Tailwind production foundation.
- Existing restrained editorial component system and approved CYA visual direction.
- `EvidenceStatus` governance and annotation mode.
- Human-led, workplace-aware service language.
- One-off work as a legitimate complete engagement.
- Optional progression from one useful moment to recurring rhythm / connected program / organised year.
- Governed Programs, Movement, About, Contact and Case Studies foundations where compatible with Phase 11.3.
- Documentary/human photography strategy and publication-permission controls.
- Conference/Event experience as a useful supporting route while final non-core-route disposition is qualified.

### MODIFY

- Home: retain approved emotive hero; make broad corporate/workplace-Yoga category relevance explicit immediately below; add situation-led discovery, literal service paths, Programs, proof, human delivery, online continuity and Insights authority.
- Programs: expand into a true procurement destination covering organisational need, planning, cadence, experience mix, implementation, communications, reporting, evidence and procurement questions.
- Movement: operate as the selection/orientation hub for Yoga, Pilates and workplace-friendly movement.
- Navigation: point directly to substantive canonical routes; do not expose evidence-gated pages prematurely.
- Wellbeing Studio: position as the connected delivery/continuity layer inside Online Wellbeing rather than the primary acquisition proposition.
- Internal authority: remove reliance on `/consultation`, `/programs`, `/workplace-wellbeing/movement`, `/about` and `/wellbeing-studio` where final canonical destinations exist.
- Technical search layer: centralise redirects, sitemap, robots/indexability, schema and error behaviour.

### REPLACE

- `/wellbeing-studio` acquisition role → `/online-wellbeing`.
- `/programs` → `/workplace-wellbeing-programs`.
- `/workplace-wellbeing/movement` → `/movement`.
- `/proof` → `/case-studies`.
- `/about` → `/about-us`.
- `/consultation` → `/contact`, retaining query context.
- Blanket schema / implicit SEO assumptions → deliberate Phase 11.3 search authority.

### RETIRE / DO NOT REBUILD

- Thin synonym pages for wellbeing-program keyword variants.
- Generic `/services` SEO page.
- Legacy category/tag archive sprawl.
- Historical `/cp/` or portal spam/hacked-looking paths as redirect targets.
- Product-first “employee wellbeing platform” positioning for Wellbeing Studio.
- Unsupported health, clinical, productivity, resilience or guaranteed-outcome claims.

## 2. Route qualification state

| Route | Phase 11.4 state | Production decision |
|---|---|---|
| `/` | materially qualified | Home remains broad corporate-yoga/category authority |
| `/workplace-wellbeing-programs` | materially qualified | Canonical procurement/program destination |
| `/movement` | materially qualified | Movement selection/orientation hub |
| `/workplace-yoga` | implemented | Specialist service acquisition; complements Home rather than taking its broad role |
| `/workplace-pilates` | **WAITING — evidence gate** | Do not publish yet |
| `/meditation-mindfulness` | implemented | Practical workplace service; clinical/treatment claims excluded |
| `/workplace-wellbeing-workshops` | implemented with claim gates | Real topics + visible human expertise; no unverified presenter assignment |
| `/online-wellbeing` | implemented | Service continuity first; Wellbeing Studio second |
| `/case-studies` | structurally ready, evidence-dependent | Keep candidate stories gated until facts/permissions are verified |
| `/blog` | **WAITING — editorial migration** | Do not create thin replacements for protected URLs |
| `/about-us` | materially qualified | Canonical About destination |
| `/contact` | materially qualified | Canonical conversion destination |

## 3. Non-core / transitional prototype routes

### `/conferences-events`

**KEEP TEMPORARILY / QUALIFY FINAL DISPOSITION.** It represents a real buyer situation and genuine CYA service, but is outside the locked Phase 11.3 core commercial set. Keep functional during Draft integration and omit from the canonical sitemap until final reconciliation.

### `/resources`

**TRANSITIONAL / NOINDEX / MERGE ROLE INTO INSIGHTS.** The prototype resource inventory is not yet substantive enough to become a second editorial system. `/blog` remains the locked editorial authority.

### `/member-access`

**UTILITY / NOINDEX.** Keep sign-in separate from acquisition. Use `noindex,follow`.

### `/workplace-wellbeing`

**TRANSITIONAL / NOINDEX / RETIRE AFTER FINAL MIGRATION DECISION.** Its former broad role is now distributed across Home, Movement, Yoga, Mindfulness, Workshops, Programs and Online Wellbeing. All links on the route have been canonicalised; the route itself is `noindex,follow` so it does not compete while final redirect/disposition is resolved.

## 4. 11.4.2 Home qualification — IMPLEMENTED

- Approved emotive hero retained.
- Explicit Workplace Yoga / Pilates / Mindfulness / Workshops / Programs proposition follows immediately.
- Situation-led discovery added.
- Literal service pathways visible without keyword stuffing.
- One-off work remains a complete and valid engagement.
- Direct canonical links to Yoga, Mindfulness, Workshops, Programs and Online Wellbeing.
- Pilates routes through Movement until its dedicated page passes evidence gates.
- Case Studies, founder/human proposition and online continuity are distributed through the page.
- Insights signpost is prepared but remains dependent on protected editorial migration.

## 5. 11.4.3 Workplace Yoga — IMPLEMENTED

The new specialist `/workplace-yoga` page covers:

1. workplace-Yoga proposition;
2. one-off / short-series / recurring / event fit;
3. participation reassurance;
4. tailoring by audience, space, time and purpose;
5. onsite / online / multi-location delivery;
6. facilitator-fit model with credential publication gate;
7. practical logistics;
8. contextual evidence placeholder and claim guardrails;
9. protected Yoga-at-Work authority path;
10. direct Yoga enquiry plus optional broader-program path.

**Boundary retained:** Home remains the broad `corporate yoga` authority page.

## 6. 11.4.4 Pilates qualification — PRODUCT CONFIRMED, PAGE WAITING

Current CYA public/owned material confirms Pilates is a genuine modality, including mat-style delivery and use within blended movement/program offers. Current team material also identifies Pilates among practitioner specialisms.

The dedicated `/workplace-pilates` page remains withheld pending:

- Pilates-specific qualifications/credentials suitable for publication;
- current practitioner/location/mode availability;
- exact workplace equipment and space requirements;
- Pilates-specific permissioned imagery;
- credible Pilates-specific delivery/proof or an explicit decision to publish without case proof;
- substantive differentiation from the Yoga page beyond modality naming.

**Decision:** real product, not yet publication-qualified as a dedicated acquisition page. Continue exposing Pilates through `/movement` and direct enquiry.

## 7. 11.4.5 Mindfulness & Meditation — IMPLEMENTED

`/meditation-mindfulness` now uses genuine CYA formats including guided meditation, mindfulness workshops, breathwork, longer rest/sound experiences and office/chair-friendly sessions.

Guardrails:

- no clinical/treatment positioning;
- no guaranteed stress, productivity or resilience outcomes;
- practitioner credentials only when verified;
- protected Check-In-With-Yourself editorial path retained as a migration dependency.

## 8. 11.4.6 Workshops & Expert Experiences — IMPLEMENTED

`/workplace-wellbeing-workshops` now presents real CYA topic families including stress management, sleep, nutrition, mindfulness, breathwork and financial wellbeing.

Human expertise is visible where current evidence supports it, including practitioner specialisms already published by CYA. The page does not make unverified topic-to-presenter assignments.

Guardrails:

- practitioner fit, credentials and availability must be confirmed for the actual session;
- credential-sensitive content remains inside verified professional scope;
- no faceless training-catalogue presentation;
- no stress-management child page yet — demand alone is insufficient;
- case evidence should connect practitioner + topic + workplace context.

## 9. 11.4.7 Online Wellbeing / Wellbeing Studio — IMPLEMENTED

`/online-wellbeing` now leads with:

- remote / hybrid / distributed-team needs;
- live human experiences;
- on-demand practices/resources;
- expert and program continuity;
- Wellbeing Studio as connected delivery infrastructure;
- employee and organisation experience;
- privacy-aware aggregate reporting;
- current-capability evidence gates.

`/wellbeing-studio` is now a legacy acquisition route to `/online-wellbeing`.

## 10. 11.4.8 Insights / Editorial Authority — WAITING

Protected URLs are known, but their substantive article source content is not present in the Next.js repository. Connected Drive searches recovered historic CYA-owned Yoga and website-copy material, but not the exact protected article source copy required to publish those canonical URLs without rewriting history.

Required migration set begins with:

- `/blog/8-tips-to-successfully-introduce-yoga-at-work`
- `/blog/check-in-with-yourself-with-this-simple-technique`
- workplace stress/mindfulness article;
- breathwork article;
- sleep/workplace-productivity article;
- wellbeing-program delivery article;
- workplace wellbeing pillars article.

Until substantive source content is migrated, `/blog` and protected article URLs stay out of the sitemap and PR #2 remains Draft.

## 11. 11.4.9 Technical Search Layer — SUBSTANTIALLY IMPLEMENTED

Implemented:

- canonical metadata for substantive canonical routes;
- central one-hop **301** migration redirects for qualified legacy/prototype paths;
- canonical-only `sitemap.xml`, deliberately excluding Pilates and unmigrated editorial URLs;
- preview-environment `robots.txt` protection;
- `noindex,follow` on Member Access, transitional Resources and legacy generic Workplace Wellbeing;
- canonical internal-link cleanup across Home, Programs, Movement, About, Conferences, Case Studies and transitional Workplace Wellbeing;
- Organization + WebSite structured data on Home;
- Service + BreadcrumbList structured data on qualified service pages;
- no blanket LocalBusiness schema;
- human 404 experience rather than unrelated fallback redirects.

Still to complete before launch:

- validate all structured data against a deployable current-head candidate;
- recover and implement remaining exact migration-manifest URL families;
- final `/workplace-wellbeing` redirect/retirement decision;
- protected editorial migration + `/blog` sitemap inclusion;
- verify all production-facing internal links after editorial migration;
- explicit HTTP/DNS verification for historical `/cp/` and portal locations;
- authenticated Google Search Console Security Issues + Manual Actions checks;
- canonical/indexability/rendered-link QA against a deployed production candidate.

## 12. Legacy security / hygiene status

Fresh public-search checks on 26 August 2026 did not surface indexed results for the historical `portal.corporateyoga.com.au` or `/cp/` spam families.

This is **not sufficient to clear the gate**. Public search visibility does not prove DNS, server/application removal or correct 404/410 behaviour.

Required before launch:

- verify portal DNS/subdomain state;
- request representative legacy `/cp/...` and portal URLs and confirm genuine 404/410 behaviour;
- remove any residual files/apps if discovered;
- check Google Search Console Security Issues;
- check Google Search Console Manual Actions;
- do not redirect hacked/spam URLs to legitimate CYA pages;
- do not automatically disavow links solely because they appear spammy.

## 13. Build / deployment qualification status

Earlier Phase 11.4 commits on this branch, including the Workplace Yoga page, produced successful Vercel preview deployments.

The current PR head has **not** received a fresh Vercel build because the connected Hobby project hit Vercel's deployment-rate limit. GitHub reports: `Deployment rate limited — retry in 24 hours.`

This is an external deployment-capacity block, **not evidence of a code/build failure**. Equally, the older green preview must not be treated as proof that the latest schema, redirect, workshops, noindex and 404 changes build successfully.

Current-head build/lint/rendered QA therefore remains open.

## 14. Current blocker register

### B1 — Pilates publication evidence

Need: practitioner credentials, exact workplace format/logistics, permissioned imagery, Pilates-specific proof/differentiation.

### B2 — Protected editorial source migration

Need: substantive source content for protected article URLs and final Insights inventory.

### B3 — Case-study publication evidence

Need: verified context, delivery facts, evidence, quotes/metrics where used and client permission.

### B4 — Conference / Resources / generic Workplace Wellbeing final disposition

Need: final reconciliation after editorial migration and rendered internal-link QA. Transitional pages must not compete with locked canonical roles.

### B5 — Legacy security verification

Need: `/cp/` HTTP behaviour, portal DNS/application state, GSC Security Issues and Manual Actions.

### B6 — Current-head deployment QA

Need: successful current-head build/lint and deployed candidate after Vercel rate-limit capacity is available.

## 15. PR promotion rule

PR #2 remains **Draft** until at minimum:

- current-head build and lint pass;
- protected editorial paths are substantively migrated or removed from production-facing links pending migration;
- no substantive internal link returns 404;
- sitemap contains only canonical indexable URLs;
- redirects are one-hop and correct;
- structured data validates against visible content;
- preview/staging remains non-indexable;
- evidence-gated Pilates is not accidentally published/indexed;
- legacy security checks are completed;
- Phase 11.3 launch QA is run against a deployed production candidate.
