# CYA Website — Phase 11.4 Legacy Security Evidence Register

**Prepared:** 26 August 2026  
**Status:** historical incident/remediation evidence substantially established; final current-state HTTP/DNS + authenticated GSC clearance still required before launch  
**Scope:** historical compromise, portal/spam namespaces, hosting migration, registrar/DNS control history, current launch implications

## 1. Why this register exists

Phase 11.4 deliberately refused to redirect unexplained historical `/portal`, `/cp/` or hacked-looking URL families into legitimate CYA pages.

The underlying incident history is now evidenced from CYA-owned account correspondence rather than inferred from stale search results.

## 2. Historical compromise — CONFIRMED

### April 2023 — Wordfence malicious-file detection

A Wordfence scan on 19 April 2023 reported a large collection of files as **malicious or unsafe** within the CYA WordPress filesystem.

The affected namespace included:

`portal/u9fkcn/`

with many generated spam-style PHP pages beneath `portal/u9fkcn/index/` plus additional malicious files elsewhere.

Representative examples included irrelevant software, travel, health, gaming and other spam-topic filenames that had no legitimate relationship to Corporate Yoga Australia.

**Conclusion:** the historical `portal` namespace was associated with a real compromise/spam injection and must not be treated as legitimate CYA information architecture.

### July 2023 — auDA / Google Safe Browsing phishing incident

On 5 July 2023, GoDaddy forwarded an auDA compliance notice stating that `corporateyoga.com.au` may have been compromised by DNS abuse including phishing/malware/spam.

The notice recorded a Google Safe Browsing detection of a phishing URL on the CYA domain and described it as an apparent Microsoft-login phishing attack.

auDA required remediation within 72 hours to avoid suspension.

**Conclusion:** the legacy security concern was material and externally observed, not merely a Wordfence false-positive pattern.

## 3. Remediation — CONFIRMED HISTORICALLY

### Hosting state before remediation

CYA correspondence from July 2023 records that the WordPress site was hosted with **HostGator** and had been affected by malware.

A prior SiteLock clean-up had been purchased, but confidence in the old installation remained low.

### DigitalHost clean-up + migration

CYA then purchased DigitalHost business hosting and commissioned a separate paid website clean-up/migration engagement.

DigitalHost's written scope explicitly included:

- assigning a developer for clean-up;
- website clean-up work;
- submitting a request to Google for delisting;
- migration work.

On 12 July 2023, DigitalHost confirmed in writing:

> The site has been cleaned and the migration is complete.

A subsequent paid invoice/receipt identifies the engagement as **website cleanup and migration**.

**Conclusion:** there is direct evidence that the compromised HostGator-era WordPress environment was cleaned and migrated to DigitalHost rather than simply left in place without remediation.

## 4. Later security evidence

### 2024–2025 Wordfence pattern

Later Wordfence emails continue to show normal internet attack activity, login lockouts and plugin/security maintenance findings.

Examples reviewed include:

- Elementor update findings;
- LiteSpeed Cache security-related upgrade requirement;
- HubSpot plugin update;
- Yoast SEO update;
- increased attack-rate/login-lockout notifications.

A Gmail evidence search for the exact Wordfence phrase **“File appears to be malicious or unsafe”** after the 2023 incident surfaced later matching alerts only through July 2023; no matching 2024–2025 email was found in the searched mailbox.

This is useful supporting evidence, but does not prove that every historical filesystem artefact or security issue was absent at all later points. Some later scan emails refer to recurring “existing issues” without reproducing their details.

## 5. Registrar / hosting / DNS control evidence

### Registrar — CONFIRMED

`corporateyoga.com.au` is registered through **GoDaddy**.

A successful GoDaddy renewal receipt dated October 2025 records a two-year `.COM.AU` domain renewal for `CORPORATEYOGA.COM.AU`.

### Hosting / operational DNS history — CONFIRMED HISTORICALLY

DigitalHost has actively managed CYA website hosting and DNS changes.

In June 2025:

- DigitalHost identified the apex and `www` hosts as pointing to different servers;
- the `www` record was shown as a CNAME to HubSpot sites infrastructure (`14575795.group45.sites.hubspot.net`);
- DigitalHost stated it could update the `www` record;
- DigitalHost subsequently confirmed it had changed the `www` DNS record to point to its server.

The CYA WordPress installation continued sending Wordfence/cPanel monitoring mail through at least August 2025.

### Email/DNS safety dependency

DigitalHost correspondence also confirms a paid **Premium Email Protection** service for `corporateyoga.com.au`.

Therefore the production website cutover must not casually replace nameservers or delete unrelated DNS records. MX, SPF, DKIM, DMARC, mail protection and other verification/service records require preservation.

## 6. Portal and `/cp/` current search evidence

As at 26 August 2026:

- public web searches surfaced no indexed result for `portal.corporateyoga.com.au`;
- public web searches surfaced no indexed result for the historical `/cp/` namespace;
- Ahrefs Organic Keywords returned zero keywords for the `/cp/` prefix;
- Ahrefs Organic Keywords returned zero keywords for `portal.corporateyoga.com.au`;
- Ahrefs Crawled Pages returned no pages for the `/cp/` prefix;
- Ahrefs Crawled Pages returned no pages for the portal host.

This strongly supports retirement/non-preservation of these namespaces, but is **not** equivalent to direct DNS/HTTP or authenticated GSC security clearance.

## 7. Required migration treatment

Historical compromise/spam routes must **not** be redirected to Home, Programs, Yoga, Insights or any other legitimate CYA page merely to avoid a 404.

For non-legitimate historical paths:

- prefer genuine **404** or **410** / not-served behaviour;
- do not include them in sitemap/navigation/internal links;
- do not create replacement content for spam-generated terms;
- do not bulk-map them into commercial pages;
- preserve only a URL that can be independently shown to have been a legitimate CYA resource.

The new Vercel application does not contain the legacy WordPress filesystem or `portal/u9fkcn` content, which materially reduces the risk of carrying the compromised application layer into the new site.

## 8. What this evidence closes

The following questions are now substantially answered:

- Was there a real historical compromise? **Yes.**
- Was the `portal` namespace associated with injected malicious/spam content? **Yes.**
- Was phishing externally detected? **Yes.**
- Was a clean-up/remediation commissioned? **Yes.**
- Was the site migrated off the compromised HostGator environment? **Yes.**
- Did DigitalHost confirm the site had been cleaned and migration completed? **Yes.**
- Is there later mailbox evidence of fresh malicious-file detections in 2024–25? **None surfaced in the targeted search performed 26 August 2026.**

## 9. What remains launch-blocking

Do **not** set `legacySecurityVerified: true` yet.

Before production cutover, complete and record:

1. direct current DNS lookup/state for `portal.corporateyoga.com.au`;
2. direct current HTTP behaviour for representative historical `portal/...` and `/cp/...` paths;
3. confirmation that suspicious historical routes do not soft-redirect into legitimate CYA content;
4. authenticated Google Search Console **Security Issues** check — no unresolved issue;
5. authenticated Google Search Console **Manual Actions** check — no unresolved action;
6. current live DNS-zone export/screenshot before website routing changes.

The remaining security gate is therefore a **current-state verification gate**, not an unresolved question about whether the historical incident occurred or whether remediation was attempted.

## 10. Production implication

The planned Vercel migration provides a clean application boundary away from the legacy WordPress/PHP filesystem. That is positive, but the cutover must still preserve DNS/email services and leave hacked historical namespaces dead rather than legitimising them through redirects.

---

**Security principle:** preserve legitimate search equity, not compromised URL history. Historical spam has no migration entitlement.
