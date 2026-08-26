# CYA Website — Phase 11.4 Final Launch-Ready State

**Date:** 26 August 2026  
**Status:** LAUNCH-READY / PRODUCTION CUTOVER NOT YET EXECUTED  
**PR:** #2 — `phase-11-3-search-authority` → `feature/cya-prototype-v1`

## Final qualification state

All Phase 11.4 launch-blocking gates are now closed:

- photography publication approval — PASS;
- Workplace Pilates publication approval — PASS;
- rendered production-server QA — PASS;
- historical legacy security verification — PASS;
- Google Search Console Security Issues — CLEAR;
- Google Search Console Manual Actions — CLEAR;
- hosted desktop/mobile/browser QA — PASS;
- keyboard/focus qualification — PASS.

Case Studies remains intentionally withheld from search as a controlled non-blocking publication gate until client evidence/permission is ready.

## Final CI contract

The permanent Phase 11.4 production workflow now executes:

1. dependency installation;
2. high-severity production dependency audit;
3. Phase 11.4 search architecture QA;
4. ESLint;
5. Next.js production build;
6. rendered production HTTP smoke;
7. final `npm run qa:launch` launch-readiness gate.

Final qualified run after correcting the launch media scanner:

- production dependency audit — PASS / 0 high-severity production vulnerabilities;
- search architecture — PASS (316 checks);
- lint — PASS;
- Next.js 16.3.3 production build — PASS;
- rendered production HTTP smoke — PASS (206 checks);
- final Phase 11.4 launch-readiness gate — PASS.

The launch media scanner was corrected so only files that actually import the governed `media` registry from `@/content/media` are treated as registry references. Local component props such as `media.poster` and comments mentioning `content/media.ts` no longer produce false publication-clearance failures.

## Hosted browser qualification

The mobile browser review identified one genuine blocker: the mobile menu panel was clipped because a fixed panel was being contained by the sticky header's backdrop-filter containing block.

The menu was repaired by portalling the open panel to `document.body`, restoring true viewport-fixed behaviour.

Corrected runtime commit:

- `795079fac3171dac28046ac30b7b42c426dfe97f`

Corrected READY Vercel preview:

- `dpl_2FD3gkjf61iRqvNE3ZoEGviyh9WT`

Human re-check confirmed:

- desktop Home and Services navigation — PASS;
- mobile Home — PASS;
- full mobile navigation — PASS;
- Workplace Yoga mobile route — PASS;
- Yoga → Contact journey — PASS;
- mobile consultation form layout — PASS;
- visible focus and keyboard navigation — PASS;
- keyboard menu activation and Escape/focus return — PASS.

## Security and migration baseline

Current production remains Squarespace and is retained as the rollback environment during cutover.

GoDaddy is confirmed as both registrar and authoritative DNS provider. The pre-cutover DNS zone is captured and includes Microsoft 365 mail, Brevo/HubSpot/Microsoft authentication records, Studio and other legitimate subdomains.

Historical security verification is closed on the following evidence:

- 2023 WordPress compromise and phishing incident documented;
- paid clean-up, Google delisting work and migration documented;
- DigitalHost written clean/migration confirmation documented;
- current production is no longer the compromised WordPress application;
- `portal.corporateyoga.com.au` returns NXDOMAIN and has no current DNS record;
- current GSC Security Issues and Manual Actions are both clear;
- replacement site treats the historical `/cp/` family safely: optional trailing-slash normalisation only, then genuine 404 with no redirect into legitimate CYA content.

## Measurement readiness

- Ahrefs Rank Tracker: 40 governed AU/English keywords active;
- native Google Search Console pre-launch export retained for 28 May–25 August 2026, Web, Australia;
- native GSC export is the authoritative Ground Zero performance baseline;
- Phase 11.5 post-launch monitoring model is ready;
- Phase 11.5 authority/backlink growth programme is ready and begins with preservation/reclamation after migration safety.

## Launch boundary

Phase 11.4 qualification is complete. The website is authorised to proceed into the governed production migration sequence.

This document does **not** mean production DNS has already changed. The next actions are:

1. merge PR #2 from a green/current head;
2. follow `CYA_Phase_11_4_Production_Migration_Runbook_2026-08-26.md`;
3. change only the governed website DNS records while preserving mail, Studio and other service records;
4. immediately perform public-host technical verification;
5. refresh/submit sitemap in GSC;
6. activate the Phase 11.5 monitoring cadence.

Do not cancel Squarespace until the migration safety window is complete.

---

**Decision:** CYA Website Phase 11.4 is launch-ready. Production cutover is the next controlled phase, not an unresolved qualification task.
