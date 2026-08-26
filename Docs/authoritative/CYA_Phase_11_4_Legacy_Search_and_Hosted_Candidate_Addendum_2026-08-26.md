# CYA Website — Phase 11.4 Legacy Search Exposure + Hosted Candidate Addendum

**Prepared:** 26 August 2026  
**Status:** SUPPORTING ASSURANCE COMPLETE / OPERATOR-ONLY SECURITY + HUMAN BROWSER GATES REMAIN  
**Scope:** current search/backlink exposure of historical compromised namespaces, current public DNS/reputation signals, and verification of the current Vercel preview candidate

## 1. Executive conclusion

The connected evidence now supports a stronger, more precise conclusion than "legacy risk unknown".

There is clear historical evidence that the old `portal.corporateyoga.com.au/u9fkcn/...` and `/cp/...` namespaces were associated with compromised/spam content. There is **no current Ahrefs or public-search evidence that those namespaces retain live search/backlink exposure**.

A fresh third-party domain snapshot also reports current nameservers `ns69.domaincontrol.com` and `ns70.domaincontrol.com`, which is consistent with GoDaddy-hosted DNS and materially narrows the likely authoritative DNS control surface. The live DNS zone must still be opened and captured before cutover; a third-party snapshot is not a substitute for the source account.

The same current reputation snapshot still carries residual malware/phishing flags attributed to Gridinsoft/IPQS while simultaneously reporting the live site as Squarespace, HTTP 200, valid SSL and DNSFilter-safe. Given CYA's documented 2023 compromise, stale reputation residue is plausible, but it must not be assumed. Authenticated Google Search Console remains the authoritative Google security/manual-action gate; third-party reputation residue should be checked and, if the Google/current-site state is clean, submitted for reclassification where still present.

That evidence does **not** justify setting `legacySecurityVerified: true`. Exact current DNS/HTTP behaviour and authenticated Google Search Console Security Issues / Manual Actions still require operator verification before production cutover.

Separately, the current Vercel preview is a valid runtime representative of the application code in PR #2. Application changes after that deployment have not occurred; later branch changes are documentation/governance only.

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

## 6. Current public DNS + hosting signal — GODADDY DNS / SQUARESPACE SITE LIKELY

A current third-party domain reputation/technical snapshot checked on 26 August 2026 reports:

- live website HTTP status: **200**;
- hosting/ISP: **Squarespace Inc.**;
- website IP observed: `198.49.23.144`;
- nameserver: `ns69.domaincontrol.com`;
- nameserver: `ns70.domaincontrol.com`.

The `domaincontrol.com` nameservers are consistent with GoDaddy DNS and align with the separately confirmed GoDaddy registrar relationship.

This materially narrows the likely operator route for the DNS snapshot: start in the GoDaddy domain/DNS account.

However:

- do not infer the full current zone from this snapshot;
- do not assume all service records are visible through a single public summary;
- do not alter nameservers;
- capture the complete source-of-truth zone before any website record change.

The full-zone evidence remains necessary because CYA has mail, `studio.corporateyoga.com.au`, HubSpot/service verification and historical DigitalHost mail-protection dependencies that must not be disrupted.

## 7. Current external reputation residue — INVESTIGATE, DO NOT PANIC OR IGNORE

The same current third-party snapshot reports a trust score of 0 and attributes negative reputation signals to:

- Gridinsoft — possible malware;
- IPQS — phishing;
- IPQS — suspicious.

At the same time it reports:

- the current live host as Squarespace;
- HTTP 200;
- a valid SSL certificate;
- DNSFilter as safe.

This mixed pattern is compatible with stale domain-level reputation residue after the documented 2023 compromise, but it is not proof that the flags are stale.

### Required treatment

1. Keep authenticated GSC **Security Issues** and **Manual Actions** as the authoritative Google launch checks.
2. If GSC is clear and the exact legacy namespaces are safely dead/not-served, record the third-party reputation flags as a separate remediation item rather than silently ignoring them.
3. Where the underlying provider still reports the domain as unsafe, submit the current clean-site evidence for review/reclassification.
4. Do not let an unverified aggregator flag override direct current security evidence, but do not assume enterprise/customer security filters have forgotten the old incident either.
5. Re-check reputation after production cutover because changing the application host to Vercel does not automatically clear domain-level reputation databases.

This remains part of **Gate 1 security assurance**, not a new fourth launch gate.

## 8. Current production boundary remains cleanly separated from the compromised application

The public site currently serving `www.corporateyoga.com.au` is the existing Squarespace website, not the compromised historical WordPress/PHP filesystem.

The planned Vercel application likewise does not contain the historical WordPress filesystem or the `portal/u9fkcn` / `/cp/` content families.

This creates a strong application-layer separation from the historical compromise, but DNS and GSC remain independent controls that must still be checked.

## 9. Vercel hosted candidate — VERIFIED READY

Current runtime candidate:

- project: `cya-website-prototype`;
- deployment: `dpl_5tL21T9gpcDGubPrHQocP5TDLmCK`;
- commit: `1430f67e008d6017020501391f674571aae679a8`;
- branch: `phase-11-3-search-authority`;
- deployment state: **READY**.

A GitHub compare from that deployed commit to the later application baseline shows no application/runtime file changes after deployment. Subsequent branch changes have been authority/checklist documentation only.

Therefore the READY deployment remains a valid hosted runtime representative of the application code currently proposed by PR #2.

## 10. Hosted protection and runtime health

The Vercel preview is protected by Vercel authentication. A direct preview edge request returns the SSO redirect and includes:

`X-Robots-Tag: noindex`

This confirms preview search protection is active at the edge.

Vercel build-log review for the current candidate found no build failure; the deployment completed successfully on Next.js 16.3.3.

A 24-hour runtime-log query scoped to the deployment for `error` and `fatal` levels returned **no matching runtime error/fatal logs**.

The build log contains an `npm allow-scripts` warning for `unrs-resolver@1.12.2`, but the build completes successfully and the repository's production dependency audit is governed separately by CI. This warning is not currently treated as a launch blocker.

## 11. Hosted browser limitation — DO NOT OVERCLAIM

Because the preview is protected by Vercel SSO, the connected fetch surface can verify deployment state, edge protection, build health and runtime logs but cannot render the authenticated application body for visual inspection.

Accordingly:

- `renderedServerQaPassed: true` remains justified from the permanent production `next start` smoke suite;
- `hostedBrowserQaPassed` must remain **false** until a human/browser pass checks the protected preview;
- no claim of responsive/visual/keyboard sign-off is made in this addendum.

## 12. Remaining operator-only launch gates

### Google Search Console + reputation assurance

Before setting the GSC approval flags:

1. open **Security Issues** while authenticated and confirm no unresolved issue;
2. open **Manual Actions** while authenticated and confirm no unresolved action;
3. retain the native pre-launch Performance export as governed launch evidence;
4. record the residual third-party reputation signal and, if GSC/current-site checks are clean, queue reclassification with any provider still marking the domain unsafe.

### Legacy security / DNS

Before setting `legacySecurityVerified: true`:

1. open the GoDaddy domain/DNS account first, consistent with the current `domaincontrol.com` NS signal;
2. capture the complete current authoritative DNS zone / nameservers;
3. record whether `portal.corporateyoga.com.au` currently resolves;
4. from a normal browser/network, record exact behaviour for the portal root and at least one representative historical `portal/u9fkcn/...` URL;
5. record exact behaviour for at least one representative historical `/cp/...` URL;
6. confirm suspicious historical URLs do not soft-redirect to legitimate CYA content.

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

## 13. Launch implication

The external launch blocker remains narrow and well defined.

The application/search architecture is not waiting on more keyword research or more code-level SEO design. It is waiting on three operator controls that connected tooling cannot safely substitute for:

1. authenticated GSC security/manual-action clearance, with residual reputation flags recorded and handled;
2. authoritative DNS + exact historical-route HTTP verification;
3. human/browser hosted-preview sign-off.

Until those are recorded, PR #2 should remain Draft and production DNS must not be changed.

---

**Decision principle:** historical spam is evidence to retire safely, not authority to preserve. A green application build does not replace DNS, GSC or human browser controls; a third-party reputation flag is evidence to investigate, not evidence to panic.