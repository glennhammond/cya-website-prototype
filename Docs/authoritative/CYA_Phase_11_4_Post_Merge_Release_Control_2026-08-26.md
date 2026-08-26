# CYA Website — Phase 11.4 Post-Merge Release Control

**Date:** 26 August 2026  
**Status:** CODE MERGED / LAUNCH-QUALIFIED / PUBLIC DNS UNCHANGED / VERCEL PRODUCTION PROMOTION PENDING  
**Merged branch:** `feature/cya-prototype-v1`  
**Merge commit:** `6992eb8f62cdefdc6f881b730ae1456b6c947cd1`

## 1. Merge state

Phase 11.4 PR #2 has been merged from exact green head `02d2d84238bb4754d0b8650f585caca251efb60e`.

The pre-merge qualification baseline was:

- production dependency audit — PASS / 0 high-severity production vulnerabilities;
- search/source QA — PASS (316 checks);
- ESLint — PASS;
- Next.js 16.3.3 production build — PASS;
- rendered production HTTP smoke — PASS (206 checks);
- final `qa:launch` gate — PASS.

All Phase 11.4 launch-blocking publication, security/GSC and hosted-browser gates were recorded complete before merge. Case Studies remains safely withheld/noindex and non-blocking.

## 2. Vercel post-merge state

The GitHub merge correctly triggered the Vercel integration, but Vercel did **not** build a new deployment because the Hobby plan deployment build-rate limit was reached.

GitHub/Vercel status on merge commit:

> Deployment rate limited — retry in 24 hours.

This is a platform quota condition, not a failed Next.js build or failed Phase 11.4 QA result.

Public DNS remains unchanged and the current Squarespace site remains live/available for rollback.

## 3. Safe existing Vercel release candidate

The corrected READY preview is:

- deployment: `dpl_2FD3gkjf61iRqvNE3ZoEGviyh9WT`;
- runtime commit: `795079fac3171dac28046ac30b7b42c426dfe97f`;
- state: READY;
- source branch: `phase-11-3-search-authority`.

Human desktop/mobile/keyboard QA passed on this corrected deployment.

A GitHub compare from runtime commit `795079...` to merged production commit `6992eb8...` shows **no application/runtime delta** after the READY deployment.

The only files changed between the READY runtime and merged head are:

- `.github/workflows/phase-11-4-qa.yml`;
- launch/QA authority documentation;
- `config/launch-approvals.json`;
- `scripts/phase-11-4-launch-readiness.mjs`.

No `app/`, `components/`, `content/`, `next.config.ts`, dependency or other production-runtime file differs.

Therefore `dpl_2FD3gkjf61iRqvNE3ZoEGviyh9WT` is an acceptable production-code-equivalent release candidate for **promotion** without rebuilding.

## 4. Required Vercel action

Preferred action: **promote the existing READY deployment to Production**, rather than force another build during the Hobby rate-limit window.

Use Vercel project `cya-website-prototype` only.

In the Vercel UI:

1. open deployment `dpl_2FD3gkjf61iRqvNE3ZoEGviyh9WT`;
2. choose the deployment action to **Promote to Production**;
3. confirm the project is `cya-website-prototype`;
4. wait for production promotion/alias assignment to complete;
5. do not change GoDaddy DNS yet.

The connected Vercel toolset can inspect deployments but does not expose a production-promotion mutation, so this action cannot be performed safely through the current connector.

## 5. Gate after promotion

Before public DNS changes:

- confirm promoted deployment remains READY;
- inspect build/runtime status;
- confirm expected Vercel production alias serves the qualified site;
- confirm no unresolved Vercel toolbar feedback;
- only then proceed to the minimal GoDaddy apex/`www` website-routing change in the production migration runbook.

## 6. DNS remains a separate controlled action

No installed connector can edit the GoDaddy DNS zone.

When the Vercel production candidate is confirmed, change only the exact apex/`www` records Vercel specifies for this project. Preserve MX, SPF, DKIM, DMARC, Microsoft 365, Brevo, HubSpot, mail protection, Wellbeing Studio and all legitimate subdomain records.

Do not replace nameservers and do not cancel Squarespace during the migration safety window.

## 7. Search/measurement state

Ahrefs Rank Tracker project `Corporateyoga` (`10280255`) now contains all 40 governed keywords for Australia / English.

Phase 11.5 monitoring is ready but the public migration timestamp must not be recorded until DNS has actually cut over to the Vercel site.

---

**Release principle:** do not confuse platform build quota with application failure. Promote the already-qualified runtime-identical deployment, verify it, then execute the smallest possible DNS cutover.
