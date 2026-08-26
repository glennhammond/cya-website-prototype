# CYA Website — Phase 11.4 Final Launch-Gate Handoff

**Prepared:** 26 August 2026  
**Status:** OPERATOR-READY / PRODUCTION CUTOVER NOT YET AUTHORISED  
**PR:** #2 — `phase-11-3-search-authority` → `feature/cya-prototype-v1`

## Executive state

Phase 11.4 search architecture, implementation, production build and rendered production-server behaviour are qualified.

Current technical baseline:

- production dependency audit: **PASS / 0 high-severity production vulnerabilities**;
- search/source architecture: **PASS — 314 checks**;
- ESLint: **PASS**;
- Next.js 16.3.3 production build: **PASS**;
- rendered production-server HTTP QA: **PASS — 197 checks**;
- current PR head remains green after security/migration documentation reconciliation.

The current hosted Vercel runtime candidate is commit `1430f67e008d6017020501391f674571aae679a8`, deployment `dpl_5tL21T9gpcDGubPrHQocP5TDLmCK`. All branch changes after that candidate through the preparation of this handoff are documentation-only, so the hosted runtime candidate remains representative of the current application code.

Vercel preview protection is active with `X-Robots-Tag: noindex` at the edge.

## Current production baseline

The public production website being replaced is currently **Squarespace**.

Verified public behaviour on 26 August 2026:

- the live site renders Squarespace/Squarespace-CDN assets;
- `https://corporateyoga.com.au/` resolves to the canonical `www` site;
- the HTTP `www` form resolves to the HTTPS `www` site;
- the current live content remains the existing CYA Squarespace website.

Retain Squarespace as the immediate rollback environment during the Vercel migration safety window.

## Historical security state — no longer ambiguous

The old security problem is documented rather than guessed:

- 2023 WordPress malware/spam injection was real;
- historical `portal/u9fkcn/...` content was malicious/injected, not legitimate CYA architecture;
- Google Safe Browsing/auDA identified phishing;
- the compromised HostGator-era WordPress environment was cleaned;
- a Google delisting request was included in the remediation engagement;
- the site was migrated to DigitalHost;
- DigitalHost confirmed that the site had been cleaned and the migration completed;
- later targeted mailbox review found no 2024–2025 email explicitly reporting a fresh `File appears to be malicious or unsafe` detection;
- no post-remediation Gmail message was found for a CYA Google Search Console/Safe Browsing security issue or manual action in the targeted search performed 26 August 2026;
- current production is Squarespace, so the compromised WordPress filesystem is not the application now serving the public site.

This evidence is strong supporting assurance, but the final **current-state** security gate still requires authenticated GSC and direct DNS/HTTP checks.

## The four remaining operator actions

### 1. Ahrefs Rank Tracker — configure now

**This is not a production launch blocker and can be completed immediately.**

Ahrefs project:

- project: `Corporateyoga`
- project ID: `10280255`
- location: Australia
- language: English
- governed portfolio: 40 keywords

Recommended UI path:

1. Open Ahrefs → Rank Tracker → `Corporateyoga`.
2. Open **Keywords**.
3. Choose **Add Keywords**.
4. Import/paste the governed list from `CYA_Phase_11_4_Ahrefs_Rank_Tracker_40_Keywords.txt`.
5. Set location to **Australia** (location ID `2036` where shown) and English.
6. Add the keywords; do not bulk-add Ahrefs suggestions.
7. Confirm the project shows 40 active tracked keywords rather than frozen/excess entries.

The metadata-rich reference file `Docs/measurement/CYA_Ahrefs_Rank_Tracker_AU_Import_2026-08-26.csv` explains each keyword's group, canonical and purpose.

After configuration, record the first Rank Tracker baseline date. The connected Ahrefs integration can then read and analyse the portfolio directly.

### 2. Google Search Console — close the security and native-freeze gate

Open the existing CYA Search Console property while authenticated.

#### Security Issues

- Open **Security Issues**.
- Required launch result: green/clear state with no unresolved security issue.
- Capture a screenshot or note the check date.

#### Manual Actions

- Open **Manual Actions**.
- Required launch result: green/clear state with no unresolved manual action.
- Capture a screenshot or note the check date.

#### Native performance export

In **Performance → Search results**:

- date: **28 May 2026 – 25 August 2026**;
- search type: Web;
- country filter: Australia;
- export using Search Console's Export control to CSV, Excel or Google Sheets.

The connected-data analytical freeze is already recorded in `CYA_Phase_11_4_Prelaunch_GSC_Freeze_2026-08-26.md`; the native export is retained as launch evidence rather than replacing that analysis.

Do not set `gscSecurityIssuesChecked` or `gscManualActionsChecked` to true until these authenticated checks are completed.

### 3. DNS / historical namespace — snapshot, do not change yet

Known:

- registrar: **GoDaddy**;
- current live website: **Squarespace**;
- historical DNS/hosting operations: DigitalHost / HubSpot layers existed in 2023–25;
- historical DigitalHost email protection existed and may still imply current DNS/email dependencies.

Before touching website routing:

1. Open the GoDaddy domain record for `corporateyoga.com.au`.
2. Note the currently delegated **nameservers**.
3. Identify the control panel that is actually authoritative for the live DNS zone.
4. Export or screenshot the complete current DNS zone.
5. Specifically preserve/document:
   - apex and `www` website records;
   - MX;
   - SPF;
   - DKIM;
   - DMARC;
   - mail/autodiscover;
   - `studio.corporateyoga.com.au`;
   - HubSpot/service-verification records;
   - any DigitalHost mail-protection records that remain current.
6. Check whether `portal.corporateyoga.com.au` has a current DNS record and record the result.
7. From a normal browser/network, test:
   - `https://portal.corporateyoga.com.au/`
   - a representative historical `/cp/` URL/path.
8. Record the exact result/status. Suspicious historical routes must not resolve/soft-redirect to legitimate CYA content.

At this stage **do not change DNS**. This action is evidence capture only.

### 4. Current Vercel preview — short human browser sign-off

Use the current `phase-11-3-search-authority` Vercel preview. The runtime candidate is already technically qualified; this is a UX/environment check.

Check:

- Home desktop and mobile;
- Programs;
- Workplace Yoga;
- Workplace Pilates;
- Mindfulness & Meditation;
- Workshops & Expert Experiences;
- Online Wellbeing;
- Insights;
- About;
- Contact;
- desktop Services menu;
- mobile menu;
- keyboard-only navigation and visible focus;
- obvious contrast/overflow problems;
- images/fonts/assets;
- consultation/contact journey.

The preview already carries edge `noindex` protection. Do not remove preview protection.

If the visual/interaction check is clean, record `hostedBrowserQaPassed: true` only then.

## Launch-authorisation state after those actions

Once actions 2–4 are clear and recorded:

- set `legacySecurityVerified: true` only if the direct historical namespace checks are safe;
- set `gscSecurityIssuesChecked: true`;
- set `gscManualActionsChecked: true`;
- set `hostedBrowserQaPassed: true`;
- run the repository launch gate;
- mark PR #2 Ready for Review;
- merge only from a green/current head;
- proceed through `CYA_Phase_11_4_Production_Migration_Runbook_2026-08-26.md` rather than improvising the DNS cutover.

## What happens immediately after production cutover

1. Public-host technical verification.
2. Sitemap refresh/submission in GSC.
3. Representative URL inspection and redirect checks.
4. Activate Phase 11.5 post-launch monitoring:
   - +24h technical safety;
   - +3d index/canonical safety;
   - +7d early ranking-URL alignment;
   - +14d meaningful GSC comparison;
   - +28d decision review;
   - +8–12 weeks strategy review.
5. After the +14-day migration safety gate, begin the authority/backlink programme with preservation/reclamation first, not bulk outreach.

## Do not do yet

- do not point the production domain to Vercel;
- do not cancel Squarespace;
- do not change nameservers;
- do not alter mail DNS casually;
- do not merge PR #2 while external launch gates remain open;
- do not redirect historical compromised/spam paths to Home;
- do not react to normal migration ranking volatility as a launch failure.

---

**Current verdict:** the website is technically qualified and the search operating system is ready. The remaining work is a controlled operator verification sequence, not further SEO research or architecture design.
