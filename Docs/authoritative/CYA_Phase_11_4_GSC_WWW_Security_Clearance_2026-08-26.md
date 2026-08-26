# CYA Website — Phase 11.4 GSC WWW Security Clearance

**Checked:** 26 August 2026  
**Property:** `https://www.corporateyoga.com.au/`  
**Property type:** URL-prefix  
**Status:** WWW PROPERTY CLEAR; full-domain current-state security gate remains open

## Authenticated Google Search Console results

Glenn completed authenticated checks in Google Search Console for the existing URL-prefix property `https://www.corporateyoga.com.au/`.

Results:

- **Manual actions:** `No issues detected`
- **Security issues:** `No issues detected`

These checks materially strengthen launch assurance for the current canonical `www` site.

## Scope limitation

This is a **URL-prefix property**, not a Domain property. It does not by itself provide full-property coverage for other protocols/subdomains such as the historical `portal.corporateyoga.com.au` namespace.

Because the historical compromise evidence specifically includes injected content associated with a `portal` namespace, the broader Phase 11.4 security gate should not be marked fully complete solely from these two WWW-property screens.

## What this closes

- authenticated GSC Manual Actions check for the canonical WWW property — **CLEAR**;
- authenticated GSC Security Issues check for the canonical WWW property — **CLEAR**.

## What remains

Before setting the repository's full-domain launch-security flags to complete, obtain either:

1. a verified Search Console **Domain property** for `corporateyoga.com.au` and confirm Security Issues / Manual Actions are clear there; and/or
2. the direct current DNS/HTTP checks already required for `portal.corporateyoga.com.au` and representative historical compromised paths, with no unsafe content or soft redirects into legitimate CYA pages.

A native GSC pre-launch Performance export also remains to be retained as launch evidence.

---

**Decision:** WWW Search Console security state is clean. Do not overstate this as full-domain clearance until the historical subdomain/current-DNS boundary is verified.