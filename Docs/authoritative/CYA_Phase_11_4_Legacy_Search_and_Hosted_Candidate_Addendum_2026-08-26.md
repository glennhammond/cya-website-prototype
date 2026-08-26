# CYA Website — Phase 11.4 Legacy Search Exposure + Hosted Candidate Addendum

**Prepared:** 26 August 2026  
**Status:** SUPPORTING ASSURANCE COMPLETE / OPERATOR-ONLY SECURITY + HUMAN BROWSER GATES REMAIN  
**Scope:** current search/backlink exposure of historical compromised namespaces and verification of the current Vercel preview candidate

## 1. Executive conclusion

The connected evidence now supports a stronger, more precise conclusion than "legacy risk unknown".

There is clear historical evidence that the old `portal.corporateyoga.com.au/u9fkcn/...` and `/cp/...` namespaces were associated with compromised/spam content. There is **no current Ahrefs or public-search evidence that those namespaces retain live search/backlink exposure**.

That does **not** justify setting `legacySecurityVerified: true`. Exact current DNS/HTTP behaviour and authenticated Google Search Console Security Issues / Manual Actions still require operator verification before production cutover.

Separately, the current Vercel preview is a valid runtime representative of the application code in PR #2. The branch commits after that deployment are documentation-only.

## 2. Current public-search evidence — NO INDEXED LEGACY RESULT SURFACED

Fresh public searches on 26 August 2026 for:

- `portal.corporateyoga.com.au`;
- `portal.corporateyoga.com.au/u9fkcn`;
- `corporateyoga.com.au/cp/`;

returned no matching indexed result.

This is supporting evidence only. Search absence is not equivalent to DNS removal, HTTP 404/410 confirmation or authenticated GSC security clearance.

## 3. Ahrefs current-crawl evidence — ZERO MATCHING PAGES

A fresh Ahrefs **Crawled Pages** query across `corporateyoga.com.au` with `mode=subdomains` and filters for either:

- `portal.corporateyoga.com.au`, or
- `/cp/`

returned **0 pages**.

This means Ahrefs currently has no crawled page record matching either legacy compromised family.

## 4. Ahrefs live-backlink evidence — ZERO LIVE MATCHING BACKLINKS

A fresh Ahrefs **All Backlinks** query was run with:

- target: `corporateyoga.com.au`;
- scope: `subdomains`;
- protocol: both;
- history: `live`;
- aggregation: `all`;
- filter: target URL contains either `portal.corporateyoga.com.au` or `/cp/`.

Result: **0 live backlinks**.

This is a materially stronger current-state signal than checking broken backlinks alone: Ahrefs does not currently record any live backlink in its live backlink index targeting either historical compromised family.

## 5. Ahrefs all-time history — HISTORICAL COMPROMISE FOOTPRINT CORROBORATED

The all-time backlink corpus does contain historical links to the compromised namespaces.

Representative pattern:

- many links target `http://portal.corporateyoga.com.au/u9fkcn/<spam-topic>.html`;
- the sampled portal links are marked `is_lost: true`;
- most sampled portal links were first/last verified in April–May 2023;
- the corpus also contains a historical backlink to `http://corporateyoga.com.au/cp/images/hd-sex-movies.html`, also marked lost, with its last live verification in March 2022 and loss recorded in April 2022.

The historical backlink topics are unrelated to Corporate Yoga Australia and are consistent with the already documented malware/spam compromise.

**Interpretation:** the all-time Ahrefs data strengthens the historical incident record while the live Ahrefs data supports the conclusion that this legacy backlink footprint is no longer active in Ahrefs' current index.

Do not redirect these historical URLs into legitimate CYA pages to "preserve" this junk equity.

## 6. Current production boundary remains cleanly separated from the compromised application

The public site currently serving `www.corporateyoga.com.au` is the existing Squarespace website, not the compromised historical WordPress/PHP filesystem.

The planned Vercel application likewise does not contain the historical WordPress filesystem or the `portal/u9fkcn` / `/cp/` content families.

This creates a strong application-layer separation from the historical compromise, but DNS and GSC remain independent controls that must still be checked.

## 7. Vercel hosted candidate — VERIFIED READY

Current runtime candidate:

- project: `cya-website-prototype`;
- deployment: `dpl_5tL21T9gpcDGubPrHQocP5TDLmCK`;
- commit: `1430f67e008d6017020501391f674571aae679a8`;
- branch: `phase-11-3-search-authority`;
- deployment state: **READY**.

A GitHub compare from that deployed commit to PR head `77e3ec83aacdeb5768ef841fa8ea6eac431cfa7d` shows exactly four later commits and changes only to:

- `Docs/authoritative/CYA_Phase_11_4_Final_Launch_Gate_Handoff_2026-08-26.md`;
- `Docs/authoritative/CYA_Phase_11_4_Legacy_Security_Evidence_Register_2026-08-26.md`;
- `Docs/authoritative/CYA_Phase_11_4_Production_Migration_Runbook_2026-08-26.md`.

No application/runtime file differs between the READY deployment and that PR head.

Therefore the READY deployment is a valid hosted runtime representative of the application code currently proposed by PR #2.

## 8. Hosted protection and runtime health

The Vercel preview is protected by Vercel authentication. A direct preview edge request returns the SSO redirect and includes:

`X-Robots-Tag: noindex`

This confirms preview search protection is active at the edge.

Vercel build-log review for the current candidate found no build failure; the deployment completed successfully.

A 24-hour runtime-log query scoped to the deployment for `error` and `fatal` levels returned **no matching runtime error/fatal logs**.

The build log contains an `npm allow-scripts` warning for `unrs-resolver@1.12.2`, but the build completes successfully and the repository's production dependency audit is already governed separately by CI. This warning is not currently treated as a launch blocker.

## 9. Hosted browser limitation — DO NOT OVERCLAIM

Because the preview is protected by Vercel SSO, the connected fetch surface can verify deployment state, edge protection, build health and runtime logs but cannot render the authenticated application body for visual inspection.

Accordingly:

- `renderedServerQaPassed: true` remains justified from the permanent production `next start` smoke suite;
- `hostedBrowserQaPassed` must remain **false** until a human/browser pass checks the protected preview;
- no claim of responsive/visual/keyboard sign-off is made in this addendum.

## 10. Remaining operator-only launch gates

### Legacy security / DNS

Before setting `legacySecurityVerified: true`:

1. capture the current authoritative DNS zone / nameservers;
2. record whether `portal.corporateyoga.com.au` currently resolves;
3. from a normal browser/network, record exact behaviour for the portal root and at least one representative historical `portal/u9fkcn/...` URL;
4. record exact behaviour for at least one representative historical `/cp/...` URL;
5. confirm suspicious historical URLs do not soft-redirect to legitimate CYA content.

### Google Search Console

Before setting the GSC approval flags:

1. open **Security Issues** while authenticated and confirm no unresolved issue;
2. open **Manual Actions** while authenticated and confirm no unresolved action;
3. retain the native pre-launch Performance export as governed launch evidence.

### Hosted human/browser QA

Before setting `hostedBrowserQaPassed: true`, inspect the protected Vercel preview for:

- desktop + mobile Home;
- Programs, Yoga, Pilates, Mindfulness, Workshops, Online Wellbeing, Insights, About, Contact;
- desktop and mobile navigation;
- keyboard-only navigation and visible focus;
- obvious contrast or overflow failures;
- fonts, imagery and other hosted assets;
- contact/planning journey;
- basic hosted performance feel.

## 11. Launch implication

The external launch blocker is now narrow and well defined.

The application/search architecture is not waiting on more keyword research or more code-level SEO design. It is waiting on three operator controls that connected tooling cannot safely substitute for:

1. authenticated GSC security/manual-action clearance;
2. authoritative DNS + exact historical-route HTTP verification;
3. human/browser hosted-preview sign-off.

Until those are recorded, PR #2 should remain Draft and production DNS must not be changed.

---

**Decision principle:** historical spam is evidence to retire safely, not authority to preserve. A green application build does not replace DNS, GSC or human browser controls.