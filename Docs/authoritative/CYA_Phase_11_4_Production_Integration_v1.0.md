# CYA Website — Phase 11.4 Production Integration & Qualification v1.0

**Status:** substantive production integration complete; final evidence/security/deployment qualification remains open  
**Branch:** `phase-11-3-search-authority`  
**PR:** #2 — remain Draft until remaining publication and launch-QA gates pass  
**Governing search authority:** Phase 11.3 v1.0

## 1. 11.4.1 Current Prototype × Phase 11.3 Gap Audit

### KEEP

- Next.js 16 / App Router / TypeScript / Tailwind production foundation.
- Restrained editorial component system and approved CYA visual direction.
- `EvidenceStatus` governance and annotation mode.
- Human-led, workplace-aware service language.
- One-off work as a legitimate complete engagement.
- Optional progression from one useful moment to recurring rhythm / connected program / organised year.
- Documentary/human photography strategy and publication-permission controls.
- Conference/Event experience as a useful supporting buyer path, while remaining outside the core indexable canonical set.

### MODIFY — COMPLETED

- Home retains its emotive brand hero while broad corporate/workplace-Yoga relevance is explicit immediately below.
- Programs is now a procurement destination covering organisational need, planning, cadence, experience mix, implementation, communications, reporting, evidence and procurement questions.
- Movement now operates as the selection/orientation hub for Yoga, Pilates and workplace-friendly movement.
- Navigation points directly to substantive routes and no longer promotes evidence-gated Case Studies or the retired Resources page.
- Wellbeing Studio is positioned within Online Wellbeing as connected delivery/continuity infrastructure rather than the acquisition proposition.
- Internal authority has been moved off `/consultation`, `/programs`, `/workplace-wellbeing/movement`, `/about`, `/wellbeing-studio`, `/proof` and `/resources`.
- Technical search authority is centralised through explicit 301 redirects, metadata, sitemap, robots/indexability, structured data and error behaviour.

### REPLACE / RETIRE — COMPLETED WHERE A MEANINGFUL SUCCESSOR EXISTS

- `/workplace-wellbeing` → `/`
- `/wellbeing-studio` → `/online-wellbeing`
- `/programs` → `/workplace-wellbeing-programs`
- `/workplace-wellbeing/movement` → `/movement`
- `/proof` and `/proof/case-study` → `/case-studies`
- `/about` → `/about-us`
- `/consultation` → `/contact`
- `/resources` → `/blog`
- thin synonym pages, generic `/services` SEO page and legacy taxonomy/tag sprawl are not being recreated.

Page-level `permanentRedirect()` wrappers have been removed where the central redirect map already owns the migration, preventing hidden 308 fallbacks from competing with the required 301 behaviour.

## 2. Route qualification state

| Route | Phase 11.4 state | Production decision |
|---|---|---|
| `/` | materially qualified | Home remains broad corporate-yoga/category authority |
| `/workplace-wellbeing-programs` | materially qualified | Canonical procurement/program destination |
| `/movement` | materially qualified | Movement selection/orientation hub |
| `/workplace-yoga` | implemented | Specialist service acquisition; complements Home rather than taking its broad role |
| `/workplace-pilates` | **production draft implemented / noindex** | Real product; keep out of sitemap/nav until final practitioner/evidence gates clear |
| `/meditation-mindfulness` | implemented | Practical workplace service; clinical/treatment claims excluded |
| `/workplace-wellbeing-workshops` | implemented with claim gates | Real topics + visible human expertise; no unverified presenter assignment |
| `/online-wellbeing` | implemented | Service continuity first; Wellbeing Studio second |
| `/case-studies` | **noindex / evidence-dependent** | Candidate clients remain internal; only approved/safe stories render publicly |
| `/blog` | implemented | Insights hub with refreshed protected authority URLs |
| `/about-us` | materially qualified | Canonical About + founder entity destination |
| `/contact` | materially qualified | Canonical conversion destination |

## 3. Non-core / utility routes

### `/conferences-events`

**SUPPORTING UX ROUTE / NOINDEX.** It represents a real buyer situation and genuine CYA service, but is outside the locked Phase 11.3 core commercial set. It remains available for situation-led discovery, uses canonical internal links and is intentionally absent from the sitemap.

### `/member-access`

**UTILITY / NOINDEX.** Member sign-in remains separate from public acquisition and uses `noindex,follow`.

### `/resources`

**RETIRED.** The meaningful editorial successor now exists. `/resources` 301s one-hop to `/blog`; the duplicate Resources page/content has been removed.

### `/workplace-wellbeing`

**RETIRED.** Its former broad role is now distributed deliberately across Home, Movement, Yoga, Pilates, Mindfulness, Workshops, Programs and Online Wellbeing. The old route 301s one-hop to Home and the duplicate implementation/content has been removed.

## 4. 11.4.2 Home qualification — IMPLEMENTED

- Approved emotive hero retained.
- Explicit Workplace Yoga / Pilates / Mindfulness / Workshops / Programs proposition follows immediately.
- Situation-led discovery added alongside literal service discovery.
- One-off work remains a complete and valid engagement.
- Direct authority paths to Yoga, Mindfulness, Workshops, Programs, Online Wellbeing and Insights.
- Pilates remains routed through Movement in public navigation while the dedicated page stays noindex.
- Founder/human delivery proposition retained.
- Wellbeing Studio is framed through Online Wellbeing continuity.
- Protected Insights links now resolve to substantive pages.
- Candidate client proof no longer renders publicly. The Home proof module renders only when a case story has an `approved` or `safe-working-copy` publication status.

**Boundary retained:** Home remains CYA's broad `corporate yoga` authority page. `/workplace-yoga` is the specialist service destination.

## 5. 11.4.3 Workplace Yoga — IMPLEMENTED

`/workplace-yoga` covers:

1. workplace-Yoga proposition;
2. one-off / short-series / recurring / event fit;
3. participation reassurance;
4. tailoring by audience, space, time and purpose;
5. onsite / online / multi-location delivery;
6. facilitator-fit model with credential publication gate;
7. practical logistics;
8. contextual evidence guardrails;
9. preserved Yoga-at-Work authority resource;
10. direct Yoga enquiry plus optional broader-program path.

Service + BreadcrumbList structured data is rendered, with the visible and structured breadcrumb hierarchy aligned as `Home → Movement → Workplace Yoga`.

## 6. 11.4.4 Pilates qualification — PRODUCT CONFIRMED / NOINDEX DRAFT IMPLEMENTED

CYA's current public and owned material confirms:

- Pilates is a genuine CYA workplace movement service;
- mat-based Pilates is offered;
- one-off, recurring and mixed Yoga/Pilates delivery are genuine formats;
- onsite and online delivery are real service modes;
- mat/towel and usable floor-space requirements are genuine practical considerations;
- Pilates instructors form part of the wider practitioner network.

A distinct `/workplace-pilates` production page now exists rather than cloning Yoga. It covers session formats, workplace fit, equipment/space, delivery modes, practitioner qualification and evidence gates.

The page is deliberately:

- `noindex,follow`;
- absent from the sitemap;
- absent from public navigation;
- using Pilates-specific photography and named-practitioner placeholders rather than pretending those publication assets are ready.

Remaining publication gates:

- verify current Pilates practitioners, qualifications and availability suitable for public display;
- confirm location/mode availability;
- obtain permissioned Pilates-specific imagery;
- confirm final equipment guidance;
- add credible Pilates-specific delivery evidence or explicitly approve publication without a case example.

Unsupported injury-prevention, posture-correction or health-outcome promises are excluded.

## 7. 11.4.5 Mindfulness & Meditation — IMPLEMENTED

`/meditation-mindfulness` uses genuine CYA formats including guided meditation, mindfulness workshops, breathwork, longer rest/sound experiences and office/chair-friendly sessions.

Guardrails:

- no clinical/treatment positioning;
- no guaranteed stress, productivity or resilience outcomes;
- practitioner credentials only where verified;
- the Check-In-With-Yourself resource now resolves to a refreshed protected Insight.

Service + BreadcrumbList structured data is rendered.

## 8. 11.4.6 Workshops & Expert Experiences — IMPLEMENTED

`/workplace-wellbeing-workshops` presents real CYA topic families including stress management, sleep, nutrition, mindfulness, breathwork and financial wellbeing.

Human expertise is visible where current evidence supports it. The page does not make unverified topic-to-presenter assignments.

Guardrails:

- practitioner fit, credentials and availability must be confirmed for the actual session;
- credential-sensitive content stays inside verified professional scope;
- no faceless training-catalogue presentation;
- no stress-management child page merely because demand exists;
- case evidence should connect practitioner + topic + workplace context.

Service + BreadcrumbList structured data is rendered.

## 9. 11.4.7 Online Wellbeing / Wellbeing Studio — IMPLEMENTED

`/online-wellbeing` leads with:

- remote / hybrid / distributed-team needs;
- live human experiences;
- on-demand practices/resources;
- expert and program continuity;
- Wellbeing Studio as connected delivery infrastructure;
- employee and organisation experience;
- privacy-aware aggregate reporting;
- current-capability evidence gates.

`/wellbeing-studio` is a one-hop 301 legacy route to `/online-wellbeing`.

Service + BreadcrumbList structured data is rendered.

## 10. 11.4.8 Insights / Editorial Authority — IMPLEMENTED

The protected CYA article URLs were recovered from the live CYA site and preserved as substantive routes rather than recreated as thin placeholders.

The editorial migration deliberately separates **URL/topic authority preservation** from **claim preservation**. Older articles contained health, physiological and productivity assertions that conflict with the current evidence standard. Their practical value and historical slugs have therefore been retained while the copy has been refreshed to remove or qualify unsupported claims.

Implemented protected URLs include:

- `/blog/8-tips-to-successfully-introduce-yoga-at-work`
- `/blog/check-in-with-yourself-with-this-simple-technique`
- `/blog/3-steps-to-reduce-workplace-stress-with-mindfulness`
- `/blog/harnessing-the-power-of-the-breath`
- `/blog/mindfulness-everyday`
- `/blog/sleep-and-workplace-productivity-corporate-yoga-australia`
- `/blog/the-nervous-system-solution-why-your-wellbeing-program-isnt-working-and-what-to-do-instead`
- `/blog/5-pillars-of-corporate-wellbeing-to-boost-your-teams-productivity`

`/blog` is presented to users as **Insights**, is now in primary navigation and is included in the sitemap together with the protected article URLs.

Each migrated article provides:

- preserved canonical slug;
- substantive refreshed content;
- visible original publication date and refresh date;
- contextual links to relevant commercial pages;
- Article + BreadcrumbList structured data;
- a clear general-information / no-medical-advice boundary where appropriate.

## 11. 11.4.9 Technical Search Layer — SUBSTANTIALLY IMPLEMENTED

Implemented:

- canonical metadata for substantive canonical routes;
- central one-hop **301** migration authority in `next.config.ts`;
- removal of redundant page-level 308 redirect wrappers;
- canonical-only `sitemap.xml` containing only index-qualified core pages and substantive Insights URLs;
- preview-environment `robots.txt` protection;
- `noindex,follow` on Member Access, supporting Conferences, evidence-gated Pilates and evidence-gated Case Studies;
- canonical internal-link cleanup across the production architecture;
- Organization + WebSite structured data on Home;
- Service + BreadcrumbList structured data rendered on qualified service pages;
- Person structured data for founder Debby Lewis on About;
- BreadcrumbList structured data on About, Contact and Insights;
- Article + BreadcrumbList structured data on migrated Insights;
- no blanket LocalBusiness schema;
- human 404 experience instead of unrelated fallback redirects;
- candidate client names/evidence are prevented from public rendering until their evidence status is publishable.

Still to complete before launch:

- validate latest structured data and rendered pages against a successful current-head deployment;
- recover/verify any remaining exact migration-manifest legacy URL families not yet represented in the repo;
- explicit HTTP/DNS verification for historical `/cp/` and portal locations;
- authenticated Google Search Console Security Issues + Manual Actions checks;
- final internal-link/canonical/indexability QA on the deployed candidate.

## 12. Legacy security / hygiene status

Fresh public-search checks on 26 August 2026 did not surface indexed results for the historical `portal.corporateyoga.com.au` or `/cp/` spam families.

This is **not sufficient to clear the gate**. Public search visibility does not prove DNS, server/application removal or correct 404/410 behaviour.

Required before launch:

- verify portal DNS/subdomain state;
- request representative legacy `/cp/...` and portal URLs and confirm genuine 404/410 behaviour;
- remove residual files/apps if discovered;
- check Google Search Console Security Issues;
- check Google Search Console Manual Actions;
- do not redirect hacked/spam URLs to legitimate CYA pages;
- do not automatically disavow links solely because they appear spammy.

## 13. Build / deployment qualification status

Earlier Phase 11.4 commits, including Workplace Yoga, produced successful Vercel preview deployments.

The latest substantive branch head has not yet received a fresh build qualification because the connected Vercel Hobby project reached its deployment-rate limit. GitHub reported: `Deployment rate limited — retry in 24 hours.`

This is an external deployment-capacity block, **not evidence of a code/build failure**. Equally, an older green preview is not evidence that the latest Insights, schema, redirects, Pilates draft and evidence-visibility changes compile/render correctly.

Current-head build, lint and rendered QA therefore remain open until a current deployment can execute.

## 14. Current blocker register

### B1 — Pilates publication evidence

Need: current named practitioner credentials/availability, permissioned Pilates imagery and final service-specific proof/evidence qualification.

The page itself is implemented and safely noindexed.

### B2 — Case-study publication evidence

Need: verified context, delivery facts, evidence, quotations/metrics where used and client permission.

Candidate stories remain in governed source data but no longer render publicly. `/case-studies` remains noindex and out of the sitemap until substantive approved proof exists.

### B3 — Legacy security verification

Need: `/cp/` HTTP behaviour, portal DNS/application state, GSC Security Issues and Manual Actions.

### B4 — Current-head deployment QA

Need: successful current-head build/lint and deployed launch candidate after Vercel build capacity permits it.

## 15. 11.4.10 Static Production Search + UX Qualification

### PASS / materially aligned

- Home broad corporate-yoga ownership preserved.
- Specialist Yoga page does not attempt to force a ranking transfer.
- Synonym-program sprawl avoided.
- One-off work remains legitimate across commercial journeys.
- Service selection and situation-led routes coexist.
- Wellbeing Studio remains service infrastructure, not SaaS positioning.
- Pilates is real but evidence-gated rather than thin-published.
- Workshops visibly retain human expertise.
- protected editorial authority is preserved without carrying forward unsupported legacy claims.
- sitemap excludes noindex/evidence-gated routes.
- important redirects are explicit 301 and one-hop.
- duplicate filesystem redirect implementations have been removed.
- no blanket LocalBusiness schema.
- structured breadcrumb hierarchy aligns with visible navigation on Yoga/Pilates.
- candidate client names no longer leak into public Home/Case Study surfaces.
- old Resources and generic Workplace Wellbeing implementations no longer compete with canonical architecture.

### DEPLOYED QA STILL REQUIRED

- TypeScript/build/lint on the latest head;
- rendered metadata/canonical/robots inspection;
- schema validation against final rendered HTML;
- redirect response-code and query-string verification;
- responsive/accessibility visual qualification for new Insights and Pilates routes;
- broken-link crawl;
- final sitemap fetch and indexability check;
- Core Web Vitals/performance smoke test;
- security/historical-path verification.

## 16. PR promotion rule

PR #2 remains **Draft** until at minimum:

- current-head build and lint pass;
- no substantive internal link returns 404;
- sitemap contains only canonical indexable URLs;
- redirects are one-hop and correct in the deployed environment;
- structured data validates against visible content;
- preview/staging remains non-indexable;
- evidence-gated Pilates remains excluded from index/nav/sitemap until publication approval;
- Case Studies remains excluded from index/nav/sitemap until client evidence is approved;
- legacy security checks are completed;
- Phase 11.3 launch QA is run against a deployed production candidate.
