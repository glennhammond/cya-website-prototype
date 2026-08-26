# CYA Website — Phase 11.4 Production Migration Runbook

**Prepared:** 26 August 2026  
**Current status:** **LAUNCH-READY / PRODUCTION CUTOVER AUTHORISED / DNS NOT YET CHANGED**  
**Target Vercel project:** `cya-website-prototype` (`prj_nNwC7crwnAAqCEnvXYQRlVyA3ESo`)  
**Do not use:** separate Vercel `cya-site` project  
**Canonical host:** `https://www.corporateyoga.com.au`

## 1. Purpose

Move the decision-complete Phase 11.3 / qualified Phase 11.4 CYA website onto the production domain without sacrificing organic authority, email/DNS services, Wellbeing Studio, security or rollback capability.

All Phase 11.4 launch-blocking gates are now closed. This runbook governs the controlled merge, Vercel production deployment, DNS cutover and immediate post-cutover verification.

Case Studies remains deliberately `noindex,follow` and outside sitemap/navigation until client evidence and permission are publishable. That is a controlled non-blocking workstream.

## 2. Current qualified release state

The latest current head must remain green through the permanent GitHub Actions gate before merge/cutover.

Established qualified baseline:

- production dependency audit — **PASS / 0 high-severity production vulnerabilities**;
- Phase 11.4 source/search architecture QA — **PASS (316 checks)**;
- ESLint — **PASS**;
- Next.js `16.3.3` production build — **PASS**;
- rendered production HTTP smoke — **PASS (206 checks)**;
- final `npm run qa:launch` gate — **PASS**;
- photography publication approval — **PASS**;
- Workplace Pilates publication approval — **PASS**;
- legacy security verification — **PASS**;
- GSC Security Issues — **CLEAR**;
- GSC Manual Actions — **CLEAR**;
- hosted desktop/mobile browser QA — **PASS**;
- keyboard/focus qualification — **PASS**.

The rendered suite proves production-server behaviour for canonicals, indexability/noindex, governed one-hop redirects, query preservation, schema, sitemap, robots, genuine 404 behaviour, `/cp` retirement and production governance-payload suppression.

## 3. Closed launch gates and retained evidence

### A. Legacy security / Search Console — CLOSED

Authority: `CYA_Phase_11_4_Legacy_Security_Gate_Closure_2026-08-26.md`.

Verified 26 August 2026:

- authenticated GSC **Security Issues — No issues detected**;
- authenticated GSC **Manual Actions — No issues detected**;
- authoritative GoDaddy DNS zone captured;
- no `portal` DNS record and no wildcard DNS record;
- direct browser request to `portal.corporateyoga.com.au` returned `DNS_PROBE_FINISHED_NXDOMAIN`;
- replacement `/cp/` behaviour is governed: optional trailing-slash normalisation only, then genuine `404`; no soft redirect into legitimate CYA content;
- native pre-launch GSC Performance export retained.

The historical 2023 WordPress malware/phishing compromise remains documented as history. The gate is closed because the compromised environment is no longer active, Google is clear, the portal is dead at DNS level, and the replacement site explicitly refuses to legitimise the injected namespace.

### B. Hosted browser / human qualification — CLOSED

Authority: `CYA_Phase_11_4_Hosted_Browser_QA_Closure_2026-08-26.md`.

Desktop/mobile and keyboard checks passed. Human QA found a real mobile-menu clipping issue, which was fixed by portalling the open mobile menu to `document.body`, then re-tested successfully.

The corrected mobile flow passed:

- full menu visibility;
- service-child navigation;
- Workplace Yoga route;
- Yoga → Contact continuity;
- mobile form layout;
- keyboard activation;
- Escape close;
- visible focus and focus return.

### C. Search measurement — ACTIVE

Ahrefs project `Corporateyoga` (`10280255`) now contains the governed **40-keyword Australia / English** Rank Tracker portfolio.

GSC remains the source of truth for actual clicks, impressions, CTR, ranking URL and indexation. Ahrefs is a monitoring/competitive layer, not a content-production quota.

## 4. Merge and Vercel release sequence

1. Confirm PR #2 is **Ready for Review**, mergeable and has no unresolved review threads.
2. Confirm the latest PR head passes the complete Phase 11.4 Production QA workflow, including `qa:launch`.
3. Merge PR #2 into `feature/cya-prototype-v1` from the exact expected green head.
4. Allow/confirm the Vercel production deployment for project `cya-website-prototype` reaches **READY**.
5. Verify the Vercel production candidate before changing public DNS.
6. Keep the existing Squarespace site intact as the immediate rollback environment.

A repository merge or Vercel deployment is **not** itself the public website cutover while `corporateyoga.com.au` / `www` still route to Squarespace.

## 5. DNS and domain safety

Current authoritative DNS is GoDaddy. Website hosting, registrar, DNS, email and application subdomains must be treated as separate control surfaces.

Protect and do not alter without explicit need:

- MX records;
- SPF TXT;
- DKIM;
- DMARC;
- mail/autodiscover records;
- Microsoft 365 records;
- Brevo records;
- HubSpot verification/integration records;
- any current DigitalHost mail-protection records;
- `studio.corporateyoga.com.au`;
- all other legitimate application/service subdomains.

Do **not** replace nameservers merely to move the website.

Change the smallest possible set of apex/www website-routing records.

Before changing DNS, retain the captured zone and current Squarespace configuration for rollback.

## 6. Vercel domain cutover

Use Vercel project **`cya-website-prototype`** only.

In Vercel Project Settings → Domains:

1. Add/verify `www.corporateyoga.com.au`.
2. Add/verify `corporateyoga.com.au`.
3. Keep `www` as canonical production host.
4. Configure apex/non-www to permanently redirect to canonical `www`.
5. Use the **exact project-specific DNS records Vercel displays at cutover time**.
6. Update only the required apex/www website-routing records in GoDaddy.
7. Do not alter mail, Studio or unrelated verification records.
8. Confirm Vercel domain verification and SSL provisioning.

Do not rely on remembered example CNAME/A-record values; the Vercel dashboard at cutover is authoritative.

## 7. Immediate public-host verification after DNS change

Record cutover timestamp and release SHA.

### Host behaviour

- [ ] `https://www.corporateyoga.com.au/` = 200.
- [ ] `https://corporateyoga.com.au/` permanently redirects one hop to `https://www.corporateyoga.com.au/`.
- [ ] HTTP variants resolve permanently to HTTPS canonical without unnecessary chains.
- [ ] SSL certificate is valid.
- [ ] email remains operational.
- [ ] `studio.corporateyoga.com.au` remains operational.

### Canonical/search layer

- [ ] Home canonical exactly `https://www.corporateyoga.com.au`.
- [ ] priority routes self-canonical correctly.
- [ ] `/robots.txt` = 200 and production crawling allowed.
- [ ] `/sitemap.xml` = 200 and contains canonical/indexable routes only.
- [ ] Case Studies/member/controlled utility routes remain excluded/noindex as governed.
- [ ] Organization + WebSite schema on Home.
- [ ] Service + BreadcrumbList schema on commercial services.
- [ ] Article + BreadcrumbList on protected Insights.

### Governed migration redirects

Systematically verify the configured one-hop 301 map, including:

- `/home` → `/`;
- `/workplace-wellbeing` → `/`;
- `/getting-started` → `/`;
- `/programs` and `/personalised-wellbeing-programs` → `/workplace-wellbeing-programs`;
- `/workplace-wellbeing/movement` and `/our-classes` → `/movement`;
- `/workplace-yoga-australia` → `/workplace-yoga`;
- `/online-wellbeing-2026` and `/wellbeing-studio` → `/online-wellbeing`;
- `/proof`, `/proof/case-study`, `/reviews`, `/testimonials` → `/case-studies`;
- `/about` → `/about-us`;
- `/consultation`, `/contact-us` → `/contact`;
- `/services` → `/movement`;
- `/resources` → `/blog`;
- `/bespoke-services` → `/workplace-wellbeing-programs`;
- `/book-a-class` → `/contact`.

Preserve approved query parameters where specified by the Phase 11.4 contract.

Do **not** add catch-all redirects for historical compromised `portal`, `/cp/` or injected spam paths. `/cp` must remain a genuine not-found route.

### Human/product smoke

- [ ] desktop navigation works;
- [ ] mobile navigation works;
- [ ] main CTA/contact journey works;
- [ ] Member Access reaches Wellbeing Studio as intended;
- [ ] key images/fonts/assets load;
- [ ] no prototype/evidence-governance labels are visible.

## 8. Google Search Console cutover actions

After the public host is confirmed healthy:

1. Confirm ownership/property remains valid.
2. Submit/refresh the canonical sitemap.
3. Inspect representative canonical URLs: Home, Programs, Yoga, Pilates, Mindfulness, Workshops, Online Wellbeing and one protected Insight.
4. Inspect representative retired legitimate URLs to confirm redirects.
5. Inspect `/cp` and one representative historical spam/injected URL to confirm no soft redirect.
6. Reconfirm Security Issues and Manual Actions remain clear.
7. Record migration date in the SEO operating record.

Do not request manual indexing for dozens of URLs as a substitute for correct crawling, redirects and sitemap discovery.

## 9. Ahrefs / Phase 11.5 monitoring activation

The governed 40-keyword AU/English portfolio is already active in Rank Tracker.

After production cutover:

1. record the first post-cutover Rank Tracker baseline date;
2. compare against `CYA_Phase_11_4_Prelaunch_GSC_Freeze_2026-08-26.md`;
3. begin `CYA_Phase_11_5_Postlaunch_Search_Monitoring_v1.0.md` cadence;
4. monitor ranking URL as well as position;
5. prioritise Home `corporate yoga` defence, `/workplace-yoga` consolidation, Programs, Pilates, Mindfulness and CTR/indexation behaviour.

## 10. Migration watch windows

### First 24 hours

Technical safety: status codes, redirects, canonicals, robots, sitemap, DNS/SSL, email/Studio safety and contact journey.

### +3 days

Indexation/canonical safety, crawl errors, Home impressions and legacy URL decline.

### +7 days

Early ranking-URL consolidation, especially Home `corporate yoga`, Workplace Yoga, Programs, Pilates and Mindfulness.

### +14 days

First meaningful GSC query/page comparison and decision whether migration safety is stable enough to begin broader authority activity.

### +28 days

First decision-level search performance review.

### +8–12 weeks

Strategy-level evaluation and first mature authority/content adjustments.

## 11. Rollback criteria

Rollback/urgent remediation is justified for material production failure such as:

- site unavailable or widespread 5xx;
- DNS/SSL failure;
- email or critical subdomain disruption caused by DNS change;
- production-wide accidental `noindex`/robots block;
- canonical host catastrophically wrong across the site;
- governed redirects broadly absent/broken;
- serious security issue.

Do **not** roll back solely because rankings fluctuate during a normal migration.

If rollback is required:

1. restore the prior website-routing DNS records from the captured GoDaddy zone state;
2. retain/restore Squarespace as public site;
3. verify email and legitimate subdomains remain intact;
4. record incident timeline/cause;
5. diagnose before attempting a second cutover.

Do not cancel Squarespace until the migration safety window is complete.

## 12. Phase 11.5 authority handoff

Broad authority outreach should not begin during migration turbulence.

Once the +14 day migration review is satisfactory, activate `CYA_Phase_11_5_Authority_and_Backlink_Growth_Programme_v1.0.md`, beginning with preservation/reclamation of genuine existing authority and relationship-led opportunities rather than bulk link acquisition.

Existing priority relationships already identified include Business Events Australia / Tourism Australia, Brisbane Business Hub, BESydney and Alsco.

## 13. Launch authorisation

**Phase 11.4 production cutover is authorised.**

All explicit launch-blocking publication, security/GSC, rendered-server and hosted-browser gates are recorded complete and enforced by the final CI launch-readiness gate.

The remaining work is controlled execution of merge → Vercel production candidate → minimal DNS change → immediate public-host verification → Phase 11.5 monitoring.

---

**Migration principle:** preserve what CYA has already earned, change only what must change, verify the public result immediately, and judge search performance over evidence-appropriate windows rather than launch-day volatility.
