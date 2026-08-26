# CYA Website — Phase 11.4 Current Authority

**Date:** 26 August 2026  
**Status:** repository/search architecture qualified; remaining gates are external/hosted  
**Branch:** `phase-11-3-search-authority`  
**PR:** #2 — Draft  

## Superseding authority

This document records the current Phase 11.4 state and supersedes any older statements in `CYA_Phase_11_4_Production_Integration_v1.0.md` that describe:

- Workplace Pilates as noindex, evidence-gated or awaiting image permission;
- CYA photography as awaiting publication permission;
- source/build/lint or rendered-server qualification as incomplete;
- Vercel preview availability as necessary to prove canonical, redirect, sitemap, robots or structured-data behaviour;
- Case Studies publication as a prerequisite for releasing the rest of the website.

The detailed historical document remains useful as an implementation record, but this file governs current status.

## Current canonical production architecture

| Route | Current authority |
|---|---|
| `/` | primary broad corporate-yoga authority |
| `/workplace-wellbeing-programs` | qualified program/procurement destination |
| `/movement` | qualified movement selection hub |
| `/workplace-yoga` | qualified specialist Yoga page |
| `/workplace-pilates` | **PUBLISH / INDEX-QUALIFIED** specialist Pilates page |
| `/meditation-mindfulness` | qualified service page |
| `/workplace-wellbeing-workshops` | qualified workshops/expert-experience page |
| `/online-wellbeing` | qualified online/hybrid continuity page |
| `/blog` | qualified Insights authority hub |
| `/about-us` | qualified founder/entity destination |
| `/contact` | qualified conversion destination |
| `/case-studies` | controlled `noindex,follow` until client evidence is publishable |

Home retains broad `corporate yoga` authority. Specialist pages complement rather than replace it.

## Publication decisions

### Photography — COMPLETE

Glenn Hammond confirmed all governed CYA website imagery is approved for website publication on 26 August 2026.

- every governed `media.*` asset is `approved`;
- `photographyPublicationApproved: true`;
- image-permission blockers are closed;
- internal production/evidence notes remain excluded from production client payloads.

### Workplace Pilates — COMPLETE FOR PUBLICATION

The Phase 11.4 Pilates publication decision records `/workplace-pilates` as **PUBLISH / INDEX-QUALIFIED**.

The page is:

- indexable;
- self-canonical;
- in sitemap.xml;
- linked through Services, Home and Movement;
- covered by Service + BreadcrumbList schema;
- included in source and rendered production QA.

Copy deliberately avoids invented individual credential strings, medical claims and guaranteed outcomes. Practitioner fit/relevant qualifications are verified for the actual booking.

### Case Studies — CONDITIONAL / NON-BLOCKING

Case Studies does not block release of the rest of the website.

Until sufficient client permission and delivery evidence exists:

- `/case-studies` remains `noindex,follow`;
- it remains outside sitemap/navigation;
- unapproved candidate stories do not render publicly;
- Home proof remains suppressed unless a story has an approved/safe publication status.

## Technical qualification — PASS

Permanent GitHub Actions currently verifies:

1. dependency installation;
2. high-severity production dependency audit;
3. Phase 11.4 source/search architecture harness;
4. ESLint;
5. Next.js production build with production environment semantics;
6. rendered HTTP behaviour against `next start`.

Current qualification baseline:

- production dependency audit — **PASS / 0 high-severity findings**;
- source/search QA — **PASS (314 checks)**;
- ESLint — **PASS**;
- Next.js 16.3.3 production build — **PASS**;
- rendered production HTTP smoke — **PASS (197 checks)**.

The rendered suite verifies actual canonicals, indexability/noindex, 301 responses, query preservation, structured data, sitemap/robots, 404 behaviour and production governance-payload suppression.

## Security/dependency baseline

- Next.js: `16.3.3`;
- eslint-config-next: `16.3.3`;
- nanoid: `3.3.18`;
- production dependency audit high-severity threshold: clean.

## Measurement baseline

Ahrefs project:

- name: `Corporateyoga`;
- project ID: `10280255`;
- verified: yes;
- current Rank Tracker keyword count: 0.

A locked **40-keyword Australian portfolio** is ready for configuration using:

- Australia location ID `2036`;
- English (`en`);
- import file `CYA_Phase_11_4_Ahrefs_Rank_Tracker_40_Keywords.txt`.

The connected Ahrefs integration exposes the project and Rank Tracker reads but not the keyword-add write action, so the final import is an Ahrefs UI action rather than a research decision.

## Remaining launch-blocking gates

### 1. Legacy security verification — OPEN

Still requires:

- direct DNS/HTTP verification of historical `portal.corporateyoga.com.au` state;
- representative `/cp/...` requests confirming genuine 404/410 behaviour;
- authenticated Google Search Console **Security Issues** check;
- authenticated Google Search Console **Manual Actions** check.

Public search on 26 August 2026 surfaced no indexed results for the historical portal host or `/cp/` namespace, but this is not sufficient to clear the gate.

Do not redirect hacked/spam URLs to legitimate CYA pages and do not automatically disavow links merely because they appear spammy.

### 2. Hosted browser / UX qualification — OPEN

Local production-server behaviour is qualified. A current hosted candidate still needs:

- responsive visual review across target breakpoints;
- desktop/mobile navigation interaction;
- keyboard and visible-focus review;
- content overflow/contrast inspection;
- contact/member-access interaction smoke;
- hosted asset/image/CDN behaviour;
- Core Web Vitals/performance smoke;
- final human visual sign-off.

This is a narrow environment/UX gate, not a general technical uncertainty.

## PR promotion rule

PR #2 should remain Draft until the two launch-blocking gates above are either passed or explicitly accepted for a controlled release.

Case Studies may remain withheld/noindexed without preventing release of the rest of the website.

## Decision principle

The Phase 11.4 job is now to protect the qualified architecture and execute the final external checks — not to reopen strategy, create more SEO pages or expand the keyword portfolio.
