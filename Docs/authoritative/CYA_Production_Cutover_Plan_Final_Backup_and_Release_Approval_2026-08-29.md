# CYA Website — Production Cutover Plan, Final Backup and Release Approval

**Prepared:** 29 August 2026  
**Status:** **DORMANT DEVELOPMENT SAFEGUARD / NO PUBLIC RELEASE APPROVAL REQUESTED**
**Authoritative repository:** `glennhammond/cya-website-prototype`  
**Release branch:** `phase-15-production-cutover-control`  
**Vercel project:** `cya-website-prototype` (`prj_nNwC7crwnAAqCEnvXYQRlVyA3ESo`)  
**Canonical public host:** `https://www.corporateyoga.com.au`

## 1. Release authority

> **Development hold:** The CYA redesign remains in active development and is
> not content-complete, design-complete or approved for public release. This
> document preserves an earlier technical baseline, backup and future cutover
> method only. It is not an active launch instruction or pending approval
> request.

PR #4 was merged on 28 August 2026. At the start of this phase, both `main` and
`phase-14-integrated-production-candidate` pointed to verified merge commit
`78105045f3293100ffbd829807e7ce331a3731a0`.

This phase found and removed the remaining preview-only footer statement
`Prototype build - not for public release.` The source QA now requires that
statement to be absent from every release artifact.

The preserved technical runtime baseline is remote commit
`f193e357237bf197d8cde3f1527713523dd458fe`. It is preserved on both the release
branch and the dedicated pre-cutover backup branch recorded in section 11.

Any later design, content, Insights or application change supersedes its runtime
qualification. A new complete qualification must be performed against the
eventual content-complete head before public release is reconsidered.

## 2. Current public-host baseline and rollback authority

The public website remains Squarespace. Read-only checks on 29 August 2026
confirmed:

- `https://www.corporateyoga.com.au/` returns `200` from `server: Squarespace`;
- `https://corporateyoga.com.au/` returns a permanent redirect to the canonical
  `www` host;
- no Vercel production cutover has occurred.

The authenticated GoDaddy baseline in
`CYA_Phase_11_4_Current_DNS_Baseline_2026-08-26.md` remains the rollback source.
The website-routing records are:

- apex A `198.185.159.144`;
- apex A `198.185.159.145`;
- apex A `198.49.23.144`;
- apex A `198.49.23.145`;
- `www` CNAME `ext-cust.squarespace.com.`

Do not cancel, unpublish or materially edit Squarespace during the migration
safety window. Restoring these five website-routing records is the primary
rollback path if the new public host fails.

## 3. Protected DNS scope

GoDaddy remains authoritative DNS. Do not replace nameservers.

At cutover, change only the exact apex and `www` website records Vercel displays
for this project. Preserve all other records, especially:

- MX, SPF, DKIM and DMARC;
- Microsoft 365 and autodiscover;
- HubSpot and Brevo verification/mail records;
- `studio.corporateyoga.com.au`;
- `wellbeing.corporateyoga.com.au`;
- `dev`, `oldstudio`, `staging-academy` and `wsdev`;
- every unrelated legitimate service or verification record.

## 4. Vercel state and deployment rule

The project currently reports `live: false` and has no CYA custom production
domain attached. The READY deployment for merged commit `78105045` is preview
deployment `dpl_7D3grD3NznuVUADeMjheyPGbhytn`.

**Do not promote that preview artifact to production.** Preview builds bake a
crawl-blocking `/robots.txt` because `VERCEL_ENV` is `preview`. Promotion would
reuse the preview artifact and could carry that output into production.

The release must be built as a genuine Vercel **Production** deployment from the
exact approved release SHA. This ensures:

- `VERCEL_ENV=production`;
- production `robots.txt` allows crawling and advertises the canonical sitemap;
- GTM/GA production loading follows the qualified environment contract;
- the deployment is recorded as the production rollback target.

## 5. Production domain sequence

In Vercel project `cya-website-prototype` only:

1. deploy the exact approved release SHA to the Production environment;
2. confirm the production deployment is READY and has no build/runtime errors;
3. add `www.corporateyoga.com.au` and make it canonical;
4. add `corporateyoga.com.au` and configure a permanent redirect to `www`;
5. copy the exact DNS values Vercel displays at that moment;
6. in GoDaddy, replace only the four Squarespace apex A records and the
   Squarespace `www` CNAME with Vercel's displayed apex/`www` values;
7. wait for Vercel domain verification and TLS issuance;
8. do not alter any protected record listed in section 3.

The connected deployment service can qualify Vercel but does not expose the
GoDaddy DNS mutation. Glenn must perform or explicitly supervise the five-record
GoDaddy change.

## 6. Conversion and campaign controls

The production contract remains:

- authorised HubSpot form: `CYA - Plan with CYA - Website planning enquiry`;
- HubSpot portal: `14575795`;
- HubSpot form GUID: `746ef219-510f-4faa-a7a3-40288155d936`;
- notification recipient: Deb only;
- general success route: `/contact-thank-you`;
- online success route: `/contact-thank-you-online`;
- Google Ads campaign owner decision: paused;
- `/workplace-yoga-australia` preserved as the paid landing route;
- campaign, registration and thank-you routes remain governed/noindex as
  qualified;
- Google Ads enhanced-conversion setup warning remains non-blocking.

## 7. Final technical gate

The release branch must pass all of the following at its final SHA:

- `npm run lint`;
- `npm run qa:search`;
- `VERCEL_ENV=production npm run build`;
- `npm run qa:rendered-smoke`;
- `npm run qa:launch`;
- `npm audit --omit=dev`;
- fixed Vercel preview reaches READY;
- hosted Home, Contact, Workplace Yoga, `/workplace-yoga-australia`, robots,
  sitemap and key redirects match the release contract;
- no application-origin browser console error or Vercel runtime error is found.

Final evidence for runtime SHA `f193e357`:

- ESLint — **PASS**;
- source/search QA — **PASS, 488 checks**;
- Next.js 16.3.3 production build and TypeScript — **PASS, 41 static pages**;
- rendered production smoke — **PASS, 275 checks**;
- launch-readiness gate — **PASS / LAUNCH-READY**;
- production dependency audit — **PASS, 0 vulnerabilities**;
- Vercel preview build — **READY**;
- hosted Home, Contact, Workplace Yoga, paid landing, About redirect and both
  thank-you routes — **PASS**;
- hosted canonicals, H1 count, governed noindex, overflow and prototype-label
  checks — **PASS**;
- Vercel application errors/fatals — **none found**;
- observed preview runtime responses — **98 × 200 and 3 × 204**.

Browser console messages were limited to the browser-control extension and were
not emitted by the CYA application.

## 8. Immediate public-host verification

Start the release clock only after public DNS resolves to Vercel. Record the UTC
and Brisbane timestamps and the exact production deployment ID.

Within the first 30 minutes verify:

- `www` Home returns 200 over valid HTTPS;
- apex redirects once to canonical `www`;
- `/robots.txt` allows crawling and names the canonical sitemap;
- `/sitemap.xml` contains canonical indexable routes only;
- Home and priority routes self-canonical to `www`;
- `/about` redirects to `/about-us`;
- campaign and thank-you routes remain reachable/noindex as governed;
- `/cp` remains a genuine 404 and is not redirected to a commercial page;
- desktop and mobile navigation work;
- Plan with CYA reaches the short authorised form;
- one non-submitting form validation check works;
- mail flow and `studio.corporateyoga.com.au` remain operational;
- Google Ads campaign remains paused.

Do not send another live HubSpot lead merely to repeat the already completed
controlled submission unless Glenn separately authorises it.

## 9. Rollback trigger and action

Rollback is warranted for a material production failure such as widespread 5xx,
DNS/TLS failure, mail or Studio disruption caused by the DNS change, production
robots/noindex failure, catastrophic canonical error, missing governed redirects
or a serious security incident.

Rollback procedure:

1. restore the five Squarespace website-routing records in section 2;
2. confirm Squarespace Home and apex canonical redirect are public again;
3. verify mail and Studio;
4. leave the failed Vercel deployment and logs intact for diagnosis;
5. record incident timestamps and do not attempt a second cutover until the root
   cause is qualified.

Normal short-term ranking movement is not, by itself, a rollback trigger.

## 10. Post-cutover control windows

- **+24 hours:** HTTP, redirects, canonicals, robots, sitemap, TLS, forms, mail,
  Studio and runtime errors.
- **+3 days:** GSC indexation/canonical signals and crawl errors.
- **+7 days:** ranking URL consolidation and lead-flow health.
- **+14 days:** first meaningful migration safety review; broad authority work
  remains held until this review passes.
- **+28 days:** decision-level GSC/Ahrefs performance review.

Keep Squarespace available through at least the +14 day safety review. Cancel it
only after a separate explicit decision.

## 11. Final release record

- Pre-phase authority SHA: `78105045f3293100ffbd829807e7ce331a3731a0`
- Final runtime release SHA: `f193e357237bf197d8cde3f1527713523dd458fe`
- Final runtime Git tree: `0a5339dd67938ab80058bb7b25d55cd3c118df17`
- Immutable backup branch: `backup/cya-pre-cutover-2026-08-29` — **CREATED**
- Fixed READY preview deployment: `dpl_C194qSUm5HwBiRBUfumqsZWxVbpd`
- Fixed preview URL: `https://cya-website-prototype-k6np8m8f9-glenns-projects-ae671c7f.vercel.app`
- Public production deployment: **NOT YET CREATED**
- Public DNS changed: **NO**
- Squarespace retained: **YES**

## 12. Reactivation and future release approval

There is no outstanding public-release approval request. Do not ask Glenn to
approve this preserved runtime while the redesign remains in development.

Reactivate cutover planning only after Glenn explicitly confirms that the
redesign is content-complete and ready for final release qualification. At that
point:

1. identify the new authoritative head;
2. re-run the full source, production-build, rendered, hosted desktop/mobile,
   conversion and runtime gates;
3. capture a new backup and rollback record;
4. replace or supersede this dormant plan with the current evidence; and
5. present a new exact-SHA public-release decision.

Any future approval must identify the newly qualified exact release SHA and
authorise all three actions:

1. deploy that SHA to Vercel Production;
2. attach the apex and `www` production domains;
3. replace only the five Squarespace apex/`www` website-routing records in
   GoDaddy with the exact Vercel values.

No earlier approval to push, merge, preview, plan or preserve this dormant
baseline should be interpreted as permission for these public release actions.

---

**Release principle:** one immutable source, one genuine production build, five
website DNS records only, immediate public verification and a tested Squarespace
rollback.
