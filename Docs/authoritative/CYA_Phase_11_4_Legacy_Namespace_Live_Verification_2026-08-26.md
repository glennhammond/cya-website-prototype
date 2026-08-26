# CYA Website — Phase 11.4 Legacy Namespace Live Verification

**Date:** 26 August 2026  
**Status:** live verification captured; replacement `/cp/` behaviour now enforced by production QA  
**Scope:** `portal.corporateyoga.com.au`, historical `/cp/` namespace, current Squarespace behaviour, migration requirement

## Current live results

### `portal.corporateyoga.com.au`

Direct browser request returned:

- **This site can’t be reached**
- `DNS_PROBE_FINISHED_NXDOMAIN`

The complete current GoDaddy DNS zone contains no `portal` record and no wildcard record.

**Conclusion:** the historical compromised portal subdomain is currently dead at DNS level. It is not serving an application, redirect or CYA content.

### `https://www.corporateyoga.com.au/cp/`

Direct browser request on the current Squarespace production site resolves/redirects to the Squarespace homepage rather than returning a genuine 404/410.

This is **not evidence of current malware**: the path does not serve the historical compromised content. However, it is not the desired migration/search treatment because it effectively soft-catches an illegitimate historical namespace into legitimate CYA content.

**Conclusion:** do not preserve the current Squarespace `/cp/` fallback behaviour.

## Replacement-site requirement

The new Vercel/Next.js production application must treat `/cp/` as a genuine unknown route:

- HTTP **404** (or explicit 410 if deliberately implemented later);
- no redirect/location header into Home or another CYA page;
- normal human Page Not Found experience;
- absent from sitemap/navigation/internal links;
- no content manufactured for historical injected/spam topics.

The permanent rendered-production QA suite has been extended to test the exact `/cp/` route for:

1. genuine 404 status;
2. no redirect into legitimate CYA content;
3. human `Page not found` rendering.

This turns the observed Squarespace weakness into an explicit migration contract rather than requiring repair work on the site being retired.

## Security interpretation

Combined evidence now shows:

- historical `portal` compromise was real and remediated;
- portal is currently NXDOMAIN;
- no portal DNS record exists in the authoritative GoDaddy zone;
- current authenticated GSC Security Issues for the `https://www.corporateyoga.com.au/` property is clear;
- current authenticated GSC Manual Actions for the same property is clear;
- `/cp/` on Squarespace soft-redirects to Home but does not expose malicious content;
- replacement Vercel behaviour is contractually required to return a genuine 404.

Therefore the remaining question is not whether the old compromise remains live. It is whether the replacement production build proves the correct `/cp/` retirement behaviour. Once the explicit rendered QA check passes, the legacy-security migration gate can be treated as satisfied.

---

**Decision:** do not spend effort reconfiguring Squarespace solely to repair `/cp/` immediately before replacement. Enforce the correct behaviour in the replacement application and verify it again immediately after production cutover.