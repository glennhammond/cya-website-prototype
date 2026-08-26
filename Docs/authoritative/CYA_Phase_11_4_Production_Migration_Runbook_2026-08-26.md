# CYA Website — Phase 11.4 Production Migration Runbook

**Prepared:** 26 August 2026  
**Status:** RELEASE CANDIDATE READY / PRODUCTION CUTOVER NOT YET AUTHORISED  
**Target project:** Vercel `cya-website-prototype` (`prj_nNwC7crwnAAqCEnvXYQRlVyA3ESo`)  
**Do not use:** separate Vercel `cya-site` project  
**Canonical host:** `https://www.corporateyoga.com.au`

## 1. Purpose

Move the decision-complete Phase 11.3 / qualified Phase 11.4 CYA website onto the production domain without sacrificing existing organic authority, email/DNS services or rollback capability.

The repository is technically qualified. The cutover remains blocked only by the explicit external launch gates below.

## 2. Current technical release candidate

The current Phase 11.4 branch has passed the permanent qualification gate covering:

- production dependency audit — 0 high-severity production vulnerabilities;
- Phase 11.4 source/search architecture QA — 314 checks;
- ESLint;
- Next.js 16.3.3 production build;
- rendered production HTTP smoke — 197 checks.

The rendered suite proves actual production-server behaviour for canonicals, indexability/noindex, 19 governed one-hop redirects, query preservation, schema, sitemap, robots, genuine 404 behaviour and production governance-payload suppression.

## 3. Hard preconditions — all must be true before cutover

### A. Legacy security / Search Console

- [ ] Representative historical `/cp/` paths have been checked directly and do not serve hacked/spam/unsafe content. Expected treatment is genuine 404/410/not-served where no legitimate resource exists; do not soft-redirect unrelated historical paths to Home.
- [ ] `portal.corporateyoga.com.au` DNS and HTTP/application state has been checked directly and is understood/retired safely.
- [ ] Google Search Console **Security Issues** checked while authenticated: no unresolved issue.
- [ ] Google Search Console **Manual Actions** checked while authenticated: no unresolved action.
- [ ] Native GSC Performance export for the pre-launch period has been saved outside the application repository or referenced in the launch record.

Public-search and Ahrefs absence of `/cp/` or portal visibility is supporting evidence only; it does not satisfy these checks.

### B. Current release candidate

- [ ] PR #2 current head still passes the permanent Phase 11.4 Production QA workflow.
- [ ] Current hosted Vercel preview corresponds to the same or intentionally approved head SHA.
- [ ] No unreviewed code/content changes have landed after final qualification.

### C. Hosted browser / human sign-off

Using the current hosted candidate:

- [ ] Home desktop visual check.
- [ ] Home mobile visual check.
- [ ] Programs, Yoga, Pilates, Mindfulness, Workshops, Online Wellbeing, Insights, About and Contact spot-check.
- [ ] Desktop navigation/dropdown behaviour.
- [ ] Mobile navigation behaviour.
- [ ] Keyboard-only navigation and visible focus check.
- [ ] Obvious colour-contrast/content-overflow check.
- [ ] Images/fonts/hosted assets load correctly through Vercel/CDN.
- [ ] Contact/planning journey works through its intended handoff.
- [ ] Basic hosted performance/Core Web Vitals smoke is acceptable; investigate severe regressions rather than chasing perfect lab scores.
- [ ] Final human visual sign-off recorded.

### D. Domain / operational readiness

- [ ] Registrar/DNS provider confirmed from the live account rather than inferred only from public DNS.
- [ ] Current DNS zone exported/screenshoted before changes.
- [ ] Existing MX, SPF, DKIM, DMARC and other TXT records documented and protected.
- [ ] `studio.corporateyoga.com.au` and any other legitimate subdomains documented and protected.
- [ ] Old Squarespace site/settings/content retained for rollback during the migration safety window; do not cancel hosting first.
- [ ] Rollback owner/process is clear.

## 4. Vercel domain cutover

Use **Vercel project `cya-website-prototype`**, not `cya-site`.

In Vercel Project Settings → Domains:

1. Add `www.corporateyoga.com.au`.
2. Add `corporateyoga.com.au`.
3. Preserve `www` as the canonical production host to match the repository's current canonical authority.
4. Configure the apex/non-www hostname to permanently redirect to the canonical `www` hostname.
5. Use the **exact DNS records Vercel displays for this project at cutover time**. Do not rely on remembered/example CNAME targets.
6. Where the DNS zone is managed externally, update only the website-routing records required for the apex/www cutover unless another change is explicitly justified.
7. Do **not** replace nameservers or delete unrelated records merely to move the website.
8. Wait for Vercel domain verification/SSL provisioning and verify both HTTPS hosts.

Vercel commonly directs apex domains through an A record and `www` through a project-specific CNAME, but the dashboard's current project-specific instructions are authoritative.

## 5. DNS safety rules

The website migration must not interrupt CYA email or Wellbeing Studio.

Do not alter without explicit need:

- MX records;
- SPF TXT;
- DKIM records;
- DMARC record;
- mail/autodiscover records;
- HubSpot/other verification TXT/CNAME records;
- `studio.corporateyoga.com.au`;
- any currently required application/service subdomains.

Change the smallest possible set of apex/www records.

## 6. Immediately after DNS cutover

Record the cutover timestamp and release SHA, then verify from the public production host:

### Host behaviour

- [ ] `https://www.corporateyoga.com.au/` = 200.
- [ ] `https://corporateyoga.com.au/` permanently redirects one hop to `https://www.corporateyoga.com.au/`.
- [ ] HTTP variants permanently resolve to the HTTPS canonical without redirect chains.
- [ ] SSL certificate valid.

### Canonical/search layer

- [ ] Home canonical exactly `https://www.corporateyoga.com.au`.
- [ ] Priority routes self-canonical correctly.
- [ ] `/robots.txt` = 200 and production crawling allowed.
- [ ] `/sitemap.xml` = 200 and contains canonical/indexable routes only.
- [ ] Preview Vercel deployments remain non-indexable.
- [ ] no utility/member/case-study route accidentally becomes indexable.
- [ ] Organization/WebSite schema on Home.
- [ ] Service/Breadcrumb schema on commercial service pages.
- [ ] protected Insights render Article/Breadcrumb schema.

### Migration redirects

Spot-check, then systematically verify all governed mappings, including:

- `/home` → `/`
- `/personalised-wellbeing-programs` → `/workplace-wellbeing-programs`
- `/programs` → `/workplace-wellbeing-programs`
- `/workplace-yoga-australia` → `/workplace-yoga`
- `/online-wellbeing-2026` → `/online-wellbeing`
- `/wellbeing-studio` → `/online-wellbeing`
- `/reviews` and `/testimonials` → `/case-studies`
- `/about` → `/about-us`
- `/consultation` and `/contact-us` → `/contact`
- `/services` → `/movement`
- `/resources` → `/blog`
- `/book-a-class` → `/contact`

Each governed redirect should be one-hop permanent and preserve approved query parameters where specified by the Phase 11.4 contract.

### Human/product smoke

- [ ] Main navigation works.
- [ ] primary CTA/contact journey works.
- [ ] Member Access routes correctly to Wellbeing Studio.
- [ ] key images/assets load.
- [ ] no internal prototype/evidence-governance labels are visible.

## 7. Google Search Console cutover actions

After the production host is confirmed healthy:

1. Verify ownership/property remains valid.
2. Submit/refresh the canonical sitemap.
3. Inspect representative URLs:
   - Home
   - `/workplace-wellbeing-programs`
   - `/workplace-yoga`
   - `/workplace-pilates`
   - `/meditation-mindfulness`
   - `/workplace-wellbeing-workshops`
   - `/online-wellbeing`
   - one protected Insight
4. Inspect representative retired URLs to confirm redirects are understood.
5. Reconfirm Security Issues / Manual Actions remain clear.
6. Record the migration date in the SEO operating record.

Do not request manual indexing for dozens of URLs as a substitute for correct crawling, redirects and sitemap discovery.

## 8. Ahrefs / measurement activation

After the production host is stable:

1. Import `Docs/measurement/CYA_Ahrefs_Rank_Tracker_AU_Import_2026-08-26.csv` into Ahrefs project `Corporateyoga` (project ID `10280255`) for Australia/English.
2. Use the governed 40-keyword set rather than bulk-adding suggestions.
3. Record the first successful Rank Tracker baseline date.
4. Begin `CYA_Phase_11_5_Postlaunch_Search_Monitoring_v1.0.md` cadence.
5. Compare against `CYA_Phase_11_4_Prelaunch_GSC_Freeze_2026-08-26.md`.

Rank Tracker is a monitoring instrument, not a content-production backlog.

## 9. Migration watch windows

### First 24 hours

Technical safety only: status codes, redirects, canonicals, robots, sitemap, DNS/SSL, contact journey.

### +3 days

Indexation/canonical safety, crawl errors, Home impressions, legacy URL decline.

### +7 days

Early ranking-URL consolidation: especially Home `corporate yoga`, `/workplace-yoga`, Programs, Pilates and Mindfulness.

### +14 days

First meaningful GSC query/page comparison.

### +28 days

First decision-level performance review.

### +8–12 weeks

Strategy-level evaluation and first mature authority/content changes.

## 10. Rollback criteria

Consider rollback/urgent remediation only for a material production failure such as:

- production site unavailable;
- widespread 5xx/errors;
- DNS/SSL failure;
- email or critical subdomain disruption caused by DNS change;
- production-wide accidental `noindex`/robots block;
- canonical host catastrophically wrong across the site;
- governed redirects broadly absent/broken;
- serious security issue.

Do **not** roll back solely because rankings fluctuate during normal migration.

If rollback is required:

1. restore the prior website-routing DNS records from the captured zone state;
2. keep the incident timeline and cause;
3. verify email/subdomains remain intact;
4. restore public site availability;
5. diagnose before attempting a second cutover.

## 11. Authority/backlink handoff

Do not begin broad authority outreach during migration turbulence.

Once the +14 day migration safety review is satisfactory, activate `CYA_Phase_11_5_Authority_and_Backlink_Growth_Programme_v1.0.md`, starting with:

- preserving/reclaiming existing quality external references;
- Business Events Australia / Tourism Australia;
- Brisbane Business Hub;
- BESydney/business-events relationships;
- real clients/venues/property/workplace partners;
- expert authority pages;
- strengthening existing reference-worthy CYA resources.

## 12. Launch authorisation rule

**A technically green branch is necessary but not sufficient.**

Production cutover is authorised only when the explicit external security/GSC and hosted human/browser gates above have been checked and recorded. Case-study publication is a parallel evidence workstream and does not block release while `/case-studies` remains safely withheld/noindex.

---

**Migration principle:** preserve what CYA has already earned, move only the records that need moving, verify the public result immediately, and judge search performance over evidence-appropriate windows rather than launch-day volatility.
