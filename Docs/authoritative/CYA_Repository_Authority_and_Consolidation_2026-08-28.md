# CYA Website 2027 — Repository Authority and Consolidation

Status: **implementation authority locked / consolidation in qualification / no production cutover authorised**

## 1. Sole implementation authority

The only implementation repository for the CYA Website 2027 is:

`glennhammond/cya-website-prototype`

The qualified consolidation base is Phase 14 head:

`1db06a2d2ebe26c51ad40e01ef6dc0e56fde02ed`

The live public website remains the current Squarespace site. No repository consolidation action authorises a production promotion, Squarespace replacement or DNS change.

## 2. Deprecated repository

`glennhammond/cya-site` began as a small Vite recreation of the live Squarespace site. Later Next.js redesign work was mistakenly layered onto feature and release branches in that repository, creating a second divergent implementation.

`cya-site` is now historical evidence only. It must not be used as:

- a development base;
- a merge target;
- a Vercel deployment source;
- a production candidate; or
- authority for resolving a conflict with this repository.

Do not delete or archive `cya-site` until this consolidation branch passes source, build, rendered and hosted qualification and all useful deltas listed below are confirmed present here.

## 3. Valid work recovered from `cya-site`

Only later decisions supported by governing authority were recovered:

1. grouped primary navigation: Services, Programs, Why CYA, Insights and Plan with CYA;
2. footer exposure of the locked canonical destinations;
3. `/about-us` restored as the canonical About destination, with `/about` treated as a legacy redirect;
4. the exact HubSpot planning-field contract: full name, work email and planning intention required; organisation, timing and location optional;
5. full name preserved as entered in `cya_planning_name` without inferred splitting;
6. current public alternative contact details: `1300 373 363` and `info@corporateyoga.com.au`;
7. safe migration sequencing for paid, campaign, registration and conversion routes; and
8. runtime-overridable HubSpot portal/form identifiers while preserving the already qualified form destination.

The duplicate visual implementation, old Vite application, disabled duplicate form flow and layered release-branch structure were not transferred.

## 4. Governing authority order

1. CYA Website 2027 — Authoritative Site Architecture v1.0
2. CYA Website — Search Architecture Authority v1.0
3. current CYA brand and visual-identity authority
4. approved Phase 07 direction and subsequent qualified production work
5. Wellbeing Studio continuity decisions
6. supporting historical evidence

## 5. Release control

Before `cya-site` is archived or removed:

- source/search QA must pass;
- ESLint and TypeScript/Next.js production build must pass;
- rendered route, redirect, navigation, responsive and noindex checks must pass;
- the authorised HubSpot form flow and governed thank-you routes must remain intact;
- a Vercel Preview from this repository must reach READY; and
- Glenn must be given the final comparison and deletion recommendation.

Deletion, production promotion and DNS cutover remain separate actions.
