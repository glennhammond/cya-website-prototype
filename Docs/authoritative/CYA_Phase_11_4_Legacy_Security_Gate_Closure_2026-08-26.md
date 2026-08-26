# CYA Website — Phase 11.4 Legacy Security Gate Closure

**Date:** 26 August 2026  
**Decision:** LEGACY SECURITY GATE — CLOSED  
**Launch flag:** `legacySecurityVerified: true`

## Evidence considered

The gate is closed based on the combined historical and current-state evidence below.

### Historical incident and remediation

- the 2023 HostGator-era WordPress installation experienced a real malware/spam compromise;
- Wordfence reported injected malicious files under `portal/u9fkcn/...` and other locations;
- auDA / Google Safe Browsing recorded an externally visible phishing incident;
- CYA commissioned paid clean-up and Google delisting work;
- the compromised environment was migrated away from HostGator;
- DigitalHost confirmed in writing that the site had been cleaned and the migration completed;
- current production is Squarespace, not that compromised WordPress application.

### Current Google status

Authenticated Google Search Console checks on the `https://www.corporateyoga.com.au/` property on 26 August 2026 returned:

- **Security Issues — No issues detected**;
- **Manual Actions — No issues detected**.

The native pre-launch GSC Performance export was also retained for the 28 May–25 August 2026 Australian web-search window.

### Current authoritative DNS state

The complete GoDaddy DNS-zone capture confirms:

- authoritative nameservers: `ns69.domaincontrol.com`, `ns70.domaincontrol.com`;
- no `portal` DNS record;
- no wildcard DNS record;
- current website records point the apex / `www` to Squarespace;
- Microsoft 365, Brevo, HubSpot and legitimate application/subdomain DNS records are separately represented and protected.

### Direct portal verification

A normal-browser request to `portal.corporateyoga.com.au` returned:

`DNS_PROBE_FINISHED_NXDOMAIN`

Therefore the historical compromised portal subdomain is currently dead at DNS level and does not serve content or redirects.

### Historical `/cp/` verification and replacement behaviour

The current Squarespace site soft-catches `https://www.corporateyoga.com.au/cp/` into the homepage. This is not desirable search behaviour, but it does not serve the historical malicious content.

Rather than modify the site being retired, Phase 11.4 now permanently enforces the replacement behaviour through rendered production QA:

- `/cp/` may perform the framework's single trailing-slash normalisation (`308` → `/cp`);
- `/cp` must then return a genuine `404`;
- `/cp` must not redirect into legitimate CYA content;
- the human `Page not found` experience must render.

GitHub Actions run 105 passed this explicit contract together with the production dependency audit, search/source QA, ESLint and Next.js production build.

## Decision

The historical compromise is not an active production application or DNS exposure, Google currently reports no Security Issue or Manual Action for the canonical `www` property, the portal subdomain is NXDOMAIN, and the replacement build explicitly retires `/cp` as a genuine not-found route.

The remaining Squarespace `/cp/` homepage fallback is therefore treated as a legacy-hosting behaviour that will disappear at the governed Vercel migration; it is not a reason to reconfigure the retiring Squarespace site.

`legacySecurityVerified` is set to **true**.

## Post-cutover verification still required

Immediately after production cutover, re-check:

1. `portal.corporateyoga.com.au` remains NXDOMAIN unless a future legitimate business requirement deliberately creates it;
2. `/cp/` normalises only to `/cp`, then returns genuine 404;
3. a sampled historical injected/spam URL does not redirect into legitimate CYA content;
4. GSC Security Issues and Manual Actions remain clear;
5. no unexpected legacy spam URLs enter the new sitemap or internal link graph.

---

**Principle:** close the security gate when current exposure is demonstrably safe and the replacement migration contract prevents re-legitimising compromised history — not by pretending the historical incident never happened.