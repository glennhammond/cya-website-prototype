# CYA Website — Phase 11.4 Rendered Production Server QA

**Date:** 26 August 2026  
**Status:** PASS  
**Branch:** `phase-11-3-search-authority`

## Qualification result

Phase 11.4 is now qualified beyond source inspection and compilation. The permanent GitHub Actions workflow builds the production Next.js application, starts the resulting app with `next start` using production environment semantics, and runs an HTTP smoke suite against the actual rendered server.

Latest successful permanent QA run:

- production dependency audit — **PASS / 0 high-severity production vulnerabilities**;
- Phase 11.4 source/search architecture harness — **PASS (314 checks)**;
- ESLint — **PASS**;
- Next.js 16.3.3 production build — **PASS**;
- rendered production HTTP smoke — **PASS (162 checks)**.

## What the 162 rendered HTTP checks prove

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

The production server confirms that these supporting/evidence-gated routes remain reachable but render `noindex`:

- `/case-studies`
- `/conferences-events`
- `/member-access`

### Redirect behaviour

The rendered production server verifies the Phase 11.4 migration map as actual **301** responses rather than merely checking configuration text.

The suite checks all 19 governed redirect mappings, including old Programs, Workplace Wellbeing, Yoga, Wellbeing Studio, Proof, About, Consultation, Resources and service aliases.

It also verifies that the legacy Consultation route preserves an `interest` query string when redirecting to Contact.

### Error behaviour

A deliberately unknown URL returns a genuine **404** and the human CYA not-found experience rather than a soft redirect.

### Structured data

Rendered HTML confirms:

- Organization schema on Home;
- WebSite schema on Home;
- Service schema on Workplace Pilates as a newly qualified canonical service;
- corresponding canonical output on the tested routes.

### Sitemap and robots

The production server confirms:

- `/sitemap.xml` returns 200;
- qualified canonical service routes are present;
- protected Insights URLs are present;
- controlled noindex routes are excluded;
- `/robots.txt` returns 200;
- production crawling is allowed;
- the canonical sitemap URL is declared;
- the production environment does not accidentally inherit preview-wide blocking.

### Production payload hygiene

The rendered HTML suite verifies that production output does not contain internal governance material such as:

- image-approval notes;
- evidence-status annotations;
- prototype-only client-story warnings;
- the `Prototype build - not for public release` footer message.

This caught and resolved a real build-time environment bug in the footer before launch qualification was declared complete.

## Workplace Pilates consequence

Workplace Pilates has now crossed the Phase 11.4 publication threshold and is tested as a normal indexable canonical service:

- returns 200;
- self canonical `/workplace-pilates`;
- renders Service structured data;
- does not render `noindex`;
- appears in the sitemap;
- is linked from Home, Movement and the Services navigation.

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
- core structured-data rendering;
- genuine 404 behaviour;
- production governance-payload suppression.

## What remains hosted/browser-specific

A hosted candidate is still required for environment/UX qualification that a headless localhost production server does not prove:

- responsive visual inspection across target breakpoints;
- interactive navigation/menu behaviour in real browsers;
- keyboard/focus accessibility inspection;
- visual contrast and content-overflow inspection;
- hosted asset/CDN/image behaviour;
- Vercel-specific headers/auth/environment behaviour;
- Core Web Vitals / hosted performance smoke;
- final human visual sign-off.

This is a substantially narrower gate than the former generic “current-head deployment QA” blocker.
