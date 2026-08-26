# CYA Website — Phase 11.4 Rendered Production Server QA

**Date:** 26 August 2026  
**Status:** PASS  
**Branch:** `phase-11-3-search-authority`

## Qualification result

Phase 11.4 is qualified beyond source inspection and compilation. The permanent GitHub Actions workflow builds the production Next.js application with `VERCEL_ENV=production`, starts the resulting app with `next start`, and runs an HTTP smoke suite against the actual rendered server.

Latest successful permanent QA run:

- production dependency audit — **PASS / 0 high-severity production vulnerabilities**;
- Phase 11.4 source/search architecture harness — **PASS (314 checks)**;
- ESLint — **PASS**;
- Next.js 16.3.3 production build — **PASS**;
- rendered production HTTP smoke — **PASS (197 checks)**.

## What the 197 rendered HTTP checks prove

### Canonical/indexable routes

The production server returns 200 responses and self-referencing canonicals for the qualified core routes and protected Insights URLs. Qualified commercial routes do not render `noindex`.

Core qualified routes include:

- `/`
- `/workplace-wellbeing-programs`
- `/movement`
- `/workplace-yoga`
- `/workplace-pilates`
- `/meditation-mindfulness`
- `/workplace-wellbeing-workshops`
- `/online-wellbeing`
- `/blog`
- `/about-us`
- `/contact`

The eight protected Insights slugs are also exercised as rendered pages.

### Controlled noindex routes

The production server confirms these supporting/evidence-gated routes remain reachable, self-canonical and `noindex`:

- `/case-studies`
- `/conferences-events`
- `/member-access`

The expanded suite caught a missing self-canonical on Member Access; that was corrected before this PASS was recorded.

### Redirect behaviour

The rendered production server verifies the Phase 11.4 migration map as actual **301** responses rather than merely checking configuration text.

The suite checks all 19 governed redirect mappings, including old Programs, Workplace Wellbeing, Yoga, Wellbeing Studio, Proof, About, Consultation, Resources and service aliases.

It also verifies that the legacy Consultation route preserves an `interest` query string when redirecting to Contact.

### Error behaviour

A deliberately unknown URL returns a genuine **404** and the human CYA not-found experience rather than a soft redirect.

### Structured data

Rendered HTML now verifies:

- Organization schema on Home;
- WebSite schema on Home;
- Service + BreadcrumbList schema on all seven qualified service destinations, including Workplace Pilates;
- Article + BreadcrumbList schema on all eight protected Insights articles;
- Person + BreadcrumbList schema on About;
- BreadcrumbList schema on Contact;
- BreadcrumbList schema on the Insights hub.

### Sitemap and robots

The production server confirms:

- `/sitemap.xml` returns 200;
- all qualified canonical service routes, including Workplace Pilates, are present;
- protected Insights URLs are present;
- controlled noindex routes are excluded;
- `/robots.txt` returns 200;
- production crawling is allowed;
- the canonical sitemap URL is declared;
- the production environment does not accidentally inherit preview-wide blocking.

### Production payload hygiene

The rendered suite verifies that production output does not contain internal governance material such as:

- image-approval notes;
- hero production notes;
- evidence-status annotations;
- prototype-only client-story warnings;
- historical image-permission language;
- the `Prototype build - not for public release` footer message.

This layer caught and resolved real issues before launch qualification:

1. production footer environment handling;
2. image-governance metadata crossing the Home hero client boundary;
3. dormant proof-route/annotation behaviour;
4. Member Access canonical omission.

## Workplace Pilates consequence

Workplace Pilates has crossed the Phase 11.4 publication threshold and is tested as a normal indexable canonical service:

- returns 200;
- self canonical `/workplace-pilates`;
- renders Service + BreadcrumbList structured data;
- does not render `noindex`;
- appears in the sitemap;
- is linked from Home, Movement and Services navigation.

The page deliberately does not invent individual practitioner qualification strings or health-outcome claims. Practitioner fit and relevant qualifications remain verified for an actual booking.

## What is now DONE

The following no longer depend on a Vercel preview for technical proof:

- source/search architecture integrity;
- dependency security gate;
- lint/TypeScript/build qualification;
- canonical rendering;
- indexability/noindex behaviour;
- one-hop 301 migration semantics;
- query-string preservation for governed redirects;
- sitemap membership/exclusion;
- production robots behaviour;
- structured-data rendering across qualified routes;
- genuine 404 behaviour;
- production governance-payload suppression.

## What remains hosted/browser-specific

A hosted candidate is still required for environment/UX qualification that a localhost production server does not prove:

- responsive visual inspection across target breakpoints;
- interactive navigation/menu behaviour in real browsers;
- keyboard/focus accessibility inspection;
- visual contrast and content-overflow inspection;
- hosted asset/CDN/image behaviour;
- Vercel-specific headers/auth/environment behaviour;
- Core Web Vitals / hosted performance smoke;
- final human visual sign-off.

This is now a narrow hosted UX/environment gate rather than a general technical uncertainty.
