# CYA Website — Phase 11.4 Production Integration & Qualification v1.0

**Status:** substantive production integration and repository qualification complete; final evidence, legacy-security and rendered-deployment qualification remain open  
**Branch:** `phase-11-3-search-authority`  
**PR:** #2 — remain Draft until remaining publication and launch-QA gates pass  
**Governing search authority:** Phase 11.3 v1.0

## 1. Phase 11.4 outcome

Phase 11.4 has converted the decision-complete Phase 11.3 search architecture into the substantive CYA website production architecture without reopening the approved business, brand or experience strategy.

The implementation preserves the governing commercial truths:

- Home remains CYA's primary broad `corporate yoga` authority page.
- `/workplace-yoga` serves specialist workplace-Yoga acquisition intent without trying to force a ranking transfer from Home.
- One-off work remains a legitimate complete engagement.
- Progression from one useful moment to recurring support or an organised year remains optional.
- CYA remains human-led, responsive, workplace-aware and expert-supported.
- Wellbeing Studio is connected delivery/continuity infrastructure, not a generic SaaS proposition.
- Search demand is not sufficient reason to publish an unevidenced service page.
- `EvidenceStatus` governance remains authoritative.

## 2. 11.4.1 Current Prototype × Phase 11.3 gap audit

### KEEP

- Next.js App Router / React / TypeScript / Tailwind production foundation.
- Restrained editorial component system and approved CYA visual direction.
- `EvidenceStatus` governance and annotation mode.
- Human-led, workplace-aware service language.
- Documentary/human photography strategy and publication-permission controls.
- Situation-led discovery alongside literal service discovery.

### MODIFY — COMPLETE

- **Home:** retained its emotive brand hero while restoring explicit Yoga, Pilates, mindfulness, workshops and wellbeing-program category relevance immediately below.
- **Programs:** expanded into a procurement destination covering organisational need, planning, cadence, experience mix, implementation, communications, reporting, evidence and procurement questions.
- **Movement:** converted into the selection/orientation hub for Yoga, Pilates and workplace-friendly movement.
- **Navigation:** points directly to substantive canonical destinations and does not promote evidence-gated proof or Pilates pages.
- **Wellbeing Studio:** repositioned inside Online Wellbeing as connected delivery and continuity infrastructure.
- **Internal authority:** moved off legacy `/consultation`, `/programs`, `/workplace-wellbeing/movement`, `/about`, `/wellbeing-studio`, `/proof` and `/resources` paths.
- **Technical search layer:** centralised through explicit 301 redirects, canonical metadata, sitemap, robots/indexability, structured data and error behaviour.

### REPLACE / RETIRE — COMPLETE WHERE A MEANINGFUL SUCCESSOR EXISTS

- `/workplace-wellbeing` → `/`
- `/wellbeing-studio` → `/online-wellbeing`
- `/programs` → `/workplace-wellbeing-programs`
- `/workplace-wellbeing/movement` → `/movement`
- `/proof` and `/proof/case-study` → `/case-studies`
- `/about` → `/about-us`
- `/consultation` → `/contact`
- `/resources` → `/blog`
- thin synonym pages, generic `/services` SEO pages and legacy taxonomy/tag sprawl are not recreated.

Page-level `permanentRedirect()` wrappers have been removed wherever the central migration map owns the route, preventing hidden 308 responses from competing with the required 301 behaviour.

## 3. Route qualification state

| Route | Phase 11.4 state | Production decision |
|---|---|---|
| `/` | qualified | Home remains broad corporate-yoga/category authority |
| `/workplace-wellbeing-programs` | qualified | canonical procurement/program destination |
| `/movement` | qualified | movement selection/orientation hub |
| `/workplace-yoga` | qualified | specialist service acquisition; complements Home |
| `/workplace-pilates` | production draft / `noindex,follow` | real product; keep out of sitemap/nav until practitioner/evidence gates clear |
| `/meditation-mindfulness` | qualified | practical workplace service; clinical/treatment claims excluded |
| `/workplace-wellbeing-workshops` | qualified with claim gates | real topics + visible human expertise; no unverified presenter assignment |
| `/online-wellbeing` | qualified | service continuity first; Wellbeing Studio second |
| `/case-studies` | `noindex,follow` / evidence-dependent | only approved/safe stories may render publicly |
| `/blog` | qualified | Insights hub with refreshed protected authority URLs |
| `/about-us` | qualified | canonical About + founder entity destination |
| `/contact` | qualified | canonical conversion destination |

### Supporting / utility routes

- `/conferences-events` — genuine supporting buyer route, deliberately `noindex,follow` because it sits outside the locked core commercial set.
- `/member-access` — utility route, `noindex,follow`.
- `/resources` — retired to `/blog`.
- `/workplace-wellbeing` — retired to Home.

## 4. 11.4.2 Home — IMPLEMENTED

Home now provides:

1. retained approved emotive hero;
2. explicit Workplace Yoga / Pilates / Mindfulness / Workshops / Programs proposition;
3. situation-led discovery;
4. recognisable service routes without keyword stuffing;
5. optional program pathway;
6. governed proof that renders only after publication status is approved/safe;
7. human/founder proposition;
8. Online Wellbeing / Wellbeing Studio continuity;
9. substantive Insights pathways;
10. contextual planning CTA.

**Boundary retained:** Home remains the broad `corporate yoga` authority. `/workplace-yoga` remains the specialist service destination.

## 5. 11.4.3 Workplace Yoga — IMPLEMENTED

`/workplace-yoga` covers:

- one-off, short-series, recurring and event fit;
- participation reassurance;
- tailoring by audience, space, time and purpose;
- onsite, online and multi-location delivery;
- facilitator-fit model with credential publication gate;
- practical logistics;
- evidence/claim guardrails;
- preserved Yoga-at-Work editorial authority;
- direct Yoga enquiry plus optional program path.

Service + BreadcrumbList structured data is rendered, with the visible and structured hierarchy aligned as `Home → Movement → Workplace Yoga`.

## 6. 11.4.4 Workplace Pilates — PRODUCT CONFIRMED / NOINDEX DRAFT IMPLEMENTED

Current public and CYA-owned material confirms that Pilates is a genuine CYA service, including:

- mat-based Pilates;
- one-off, recurring and mixed Yoga/Pilates formats;
- onsite and online delivery;
- workplace mat/towel and floor-space considerations;
- Pilates instructors as part of the wider practitioner network.

A distinct `/workplace-pilates` page now exists rather than cloning Yoga. It covers session formats, workplace fit, equipment/space, delivery modes, practitioner qualification and evidence gates.

It remains deliberately:

- `noindex,follow`;
- absent from public navigation;
- absent from the sitemap.

Remaining publication gates:

- verify current named practitioners, qualifications and availability for public display;
- confirm current location/mode availability;
- obtain permissioned Pilates-specific imagery;
- confirm final equipment guidance;
- add Pilates-specific delivery evidence or explicitly approve publication without a case example.

Unsupported injury-prevention, posture-correction and health-outcome promises are excluded.

## 7. 11.4.5 Mindfulness & Meditation — IMPLEMENTED

`/meditation-mindfulness` uses genuine CYA formats including guided meditation, mindfulness workshops, breathwork, longer rest/sound experiences and office/chair-friendly sessions.

Guardrails:

- no clinical/treatment positioning;
- no guaranteed stress, productivity or resilience outcomes;
- practitioner credentials only where verified;
- the protected Check-In-With-Yourself authority URL is preserved as a refreshed Insight.

Service + BreadcrumbList structured data is rendered.

## 8. 11.4.6 Workshops & Expert Experiences — IMPLEMENTED

`/workplace-wellbeing-workshops` presents genuine CYA topic families including stress management, sleep, nutrition, mindfulness, breathwork and financial wellbeing.

Human expertise is visible where current evidence supports it, while exact topic-to-presenter assignments remain subject to practitioner fit, credentials and availability.

Guardrails:

- credential-sensitive content remains inside verified professional scope;
- no faceless training-catalogue presentation;
- no stress-management child page merely because demand exists;
- case evidence should connect practitioner + topic + workplace context.

Service + BreadcrumbList structured data is rendered.

## 9. 11.4.7 Online Wellbeing / Wellbeing Studio — IMPLEMENTED

`/online-wellbeing` leads with:

- remote, hybrid and distributed-team needs;
- live human experiences;
- on-demand practices/resources;
- expert and program continuity;
- Wellbeing Studio as connected delivery infrastructure;
- employee and organisation experience;
- privacy-aware aggregate reporting;
- current-capability evidence gates.

`/wellbeing-studio` is a one-hop 301 to `/online-wellbeing`.

Service + BreadcrumbList structured data is rendered.

## 10. 11.4.8 Insights / Editorial Authority — IMPLEMENTED

`/blog` is presented to users as **Insights** and is a first-class primary-navigation destination.

Protected legacy article URLs were recovered from the live CYA site and preserved as substantive refreshed routes rather than thin placeholders:

- `/blog/8-tips-to-successfully-introduce-yoga-at-work`
- `/blog/check-in-with-yourself-with-this-simple-technique`
- `/blog/3-steps-to-reduce-workplace-stress-with-mindfulness`
- `/blog/harnessing-the-power-of-the-breath`
- `/blog/mindfulness-everyday`
- `/blog/sleep-and-workplace-productivity-corporate-yoga-australia`
- `/blog/the-nervous-system-solution-why-your-wellbeing-program-isnt-working-and-what-to-do-instead`
- `/blog/5-pillars-of-corporate-wellbeing-to-boost-your-teams-productivity`

The editorial migration separates **URL/topic authority preservation** from **claim preservation**. Older unsupported health, physiology and productivity assertions were not blindly carried forward.

Each migrated article provides:

- preserved canonical slug;
- substantive refreshed copy;
- original publication date plus refresh date;
- contextual commercial links;
- Article + BreadcrumbList structured data;
- general-information / no-medical-advice boundary where appropriate.

Insights and protected articles are included in the sitemap.

## 11. 11.4.9 Technical Search Layer — IMPLEMENTED / REPOSITORY-QUALIFIED

Implemented:

- canonical metadata for substantive canonical routes;
- central one-hop **301** migration authority in `next.config.ts`;
- redundant page-level 308 redirect wrappers removed;
- canonical-only sitemap containing index-qualified core routes and substantive Insights URLs;
- preview-environment robots protection;
- `noindex,follow` on Member Access, supporting Conferences, evidence-gated Pilates and evidence-gated Case Studies;
- canonical internal-link cleanup;
- Organization + WebSite schema on Home;
- Service + BreadcrumbList schema on qualified service pages;
- Person schema for Debby Lewis on About;
- BreadcrumbList schema on About, Contact and Insights;
- Article + BreadcrumbList schema on Insights;
- no blanket LocalBusiness schema;
- human 404 behaviour;
- candidate client names/evidence suppressed from public rendering until publication status permits them;
- production-safe footer behaviour with prototype warning restricted to non-production environments;
- unverified one-business-day response-time promise removed;
- site-wide copy no longer implies one-off work is merely a feeder into an annual program.

### Dependency / security qualification

During Phase 11.4 qualification, the repository's former Next.js `16.2.12` dependency was identified as falling below the current critical-security patch level. The branch has been upgraded and pinned to:

- `next 16.3.3`;
- `eslint-config-next 16.3.3`.

A subsequent production dependency audit identified `nanoid <3.3.18`; the lockfile was updated through a compatible npm audit fix and now resolves `nanoid 3.3.18`.

The permanent Phase 11.4 QA workflow now includes a high-severity production dependency gate using:

`npm audit --omit=dev --audit-level=high`

No uncontrolled `--force` dependency upgrade was used.

## 12. Executable Phase 11.4 QA — PASS

A permanent read-only GitHub Actions workflow now runs on PR changes using Node 24 and executes:

1. `npm ci`
2. production dependency audit (`high` threshold)
3. `npm run qa:search`
4. ESLint
5. Next.js production build

The clean branch head has passed all five stages.

The search/architecture harness currently enforces more than 300 implementation invariants, including:

- index-qualified routes exist;
- retired route files are removed;
- noindex routes remain excluded from sitemap;
- all protected Insights slugs are preserved;
- central 301 mappings exist;
- no legacy internal hrefs remain in production source;
- no page-level `permanentRedirect()` remains;
- no LocalBusiness schema is reintroduced;
- service schema is actually rendered on qualified pages;
- proof placeholders and candidate stories cannot leak into production;
- preview robots protection exists;
- patched Next.js security floor is enforced;
- prototype-only footer warning is environment-gated.

Current repository qualification result:

- production dependency audit — **PASS**;
- Phase 11.4 search architecture QA — **PASS**;
- ESLint — **PASS**;
- TypeScript / Next production build — **PASS**.

The Vercel Hobby deployment-rate limit therefore no longer represents a **build qualification** blocker. It remains only a blocker to reviewing the newest head as a rendered browser deployment.

## 13. Legacy security / hygiene — PARTIALLY QUALIFIED

Fresh public-search checks on 26 August 2026 did not surface indexed results for the historical `portal.corporateyoga.com.au` or `/cp/` spam families.

This does **not** fully clear the gate. Public search visibility does not prove DNS/application removal or correct HTTP 404/410 behaviour, and no Search Console connector is available in the current toolset.

Still required before launch:

- verify portal DNS/subdomain state through an environment with DNS/HTTP access;
- request representative legacy `/cp/...` and portal URLs and confirm genuine 404/410 behaviour;
- remove residual files/apps if discovered;
- check authenticated Google Search Console **Security Issues**;
- check authenticated Google Search Console **Manual Actions**;
- do not redirect hacked/spam URLs to legitimate CYA pages;
- do not automatically disavow links solely because they appear spammy.

## 14. Case-study evidence status

A connected Drive search independently confirms that CYA-owned website copy names **Cromwell Property Group** among organisations CYA has partnered with. This supports the existence of a client relationship only.

It does **not** establish:

- case-study publication permission;
- exact delivery scope or dates;
- outcomes or metrics;
- client quotations;
- renewal or participation evidence.

No sufficient Drive evidence was recovered for the current Shell Energy or Link-Up candidate records.

Therefore:

- no candidate is promoted to publishable case-study status;
- `/case-studies` remains `noindex,follow` and absent from sitemap/nav;
- candidate client details remain governed internal data until permission and facts are verified.

## 15. Remaining blocker register

### B1 — Pilates publication evidence

Need: current named practitioner credentials/availability, permissioned Pilates imagery and final service-specific proof/evidence qualification.

The page itself is implemented and safely noindexed.

### B2 — Case-study publication evidence

Need: client permission plus verified context, delivery facts, evidence and any quotations/metrics.

The architecture is ready; the evidence is not.

### B3 — Legacy security verification

Need: representative `/cp/` HTTP behaviour, portal DNS/application state, GSC Security Issues and Manual Actions.

### B4 — Rendered deployment QA

Repository build/lint/security/search QA is complete and green. What remains is browser-level qualification on the **current** branch head once Vercel can produce a fresh preview:

- rendered metadata/canonical/robots inspection;
- schema validation against actual HTML;
- redirect response-code and query-string verification;
- responsive/accessibility visual qualification for Home, Yoga, Pilates draft, Workshops, Online and Insights;
- broken-link crawl;
- sitemap fetch and indexability check;
- Core Web Vitals/performance smoke test.

## 16. 11.4.10 Production Search + UX Qualification

### PASS / materially aligned

- Home broad corporate-yoga ownership preserved.
- Specialist Yoga page does not attempt to force a ranking transfer.
- synonym-program sprawl avoided.
- one-off work remains legitimate across commercial journeys.
- situation-led and service-led discovery coexist.
- Wellbeing Studio remains service infrastructure, not SaaS positioning.
- Pilates is a real product with a substantive controlled draft rather than a thin published page.
- Workshops visibly retain human expertise.
- protected editorial authority is preserved without carrying forward unsupported legacy claims.
- sitemap excludes noindex/evidence-gated routes.
- redirects are explicit 301 and one-hop at configuration level.
- duplicate filesystem redirect implementations are removed.
- no blanket LocalBusiness schema.
- structured breadcrumb hierarchy aligns with visible navigation.
- candidate client names do not leak into public Home/Case Study surfaces.
- Resources and generic Workplace Wellbeing no longer compete with canonical architecture.
- production footer and service-response copy are launch-safe.
- Next.js meets the current critical-security patch floor.
- high-severity production dependency audit is clean.
- automated search QA, lint and production build pass.

### RENDERED / EXTERNAL QA STILL REQUIRED

- current-head Vercel/browser rendering;
- live redirect/header verification;
- final accessibility/visual inspection;
- rendered structured-data validation;
- historical-host/path HTTP verification;
- authenticated GSC Security Issues / Manual Actions.

## 17. PR promotion rule

PR #2 remains **Draft** until the remaining launch gates are resolved or explicitly accepted:

- no substantive internal link returns 404 on the rendered candidate;
- redirects return the intended one-hop response in the deployed environment;
- structured data validates against rendered visible content;
- preview/staging remains non-indexable;
- evidence-gated Pilates remains excluded from index/nav/sitemap until publication approval;
- Case Studies remains excluded from index/nav/sitemap until client evidence is approved;
- legacy security/GSC checks are completed;
- Phase 11.3 launch QA is run against the deployed production candidate.

Repository-level search, lint, build and high-severity production-dependency qualification are **already PASS** and are no longer reasons to keep the PR Draft.
