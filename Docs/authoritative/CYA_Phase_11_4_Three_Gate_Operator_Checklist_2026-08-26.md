# CYA Website — Phase 11.4 Three-Gate Operator Checklist

**Prepared:** 26 August 2026  
**Purpose:** close the only remaining external launch gates without reopening qualified SEO/search architecture  
**PR:** #2 — `phase-11-3-search-authority` → `feature/cya-prototype-v1`

## Current state before operator action

Already qualified:

- production dependency audit — PASS;
- source/search architecture — PASS (314 checks);
- ESLint — PASS;
- Next.js 16.3.3 production build — PASS;
- rendered production HTTP QA — PASS (197 checks);
- `renderedServerQaPassed: true`;
- Workplace Pilates — publication/index qualified;
- photography — publication approved;
- Case Studies — safely withheld / non-blocking;
- current Vercel runtime candidate — READY;
- preview edge protection — `X-Robots-Tag: noindex`;
- current Ahrefs legacy exposure — 0 live portal/`/cp/` backlinks and 0 matching crawled pages;
- PR remains Draft.

Current approvals that must remain false until the checks below are completed:

```json
{
  "legacySecurityVerified": false,
  "gscSecurityIssuesChecked": false,
  "gscManualActionsChecked": false,
  "hostedBrowserQaPassed": false
}
```

---

# Gate 1 — Google Search Console security clearance

## A. Security Issues

1. Sign into Google Search Console for the CYA property.
2. Open **Security Issues**.
3. Required result: no unresolved issue / clear state.
4. Capture a screenshot or record the exact checked date and result.

### STOP condition

If any unresolved security issue is shown:

- do **not** merge PR #2;
- do **not** change production DNS;
- retain the issue details as evidence and remediate first.

## B. Manual Actions

1. Open **Manual Actions**.
2. Required result: no unresolved manual action / clear state.
3. Capture a screenshot or record the exact checked date and result.

### STOP condition

If any manual action is shown:

- do **not** merge PR #2;
- do **not** change production DNS;
- record the action and resolve it before launch.

## C. Native pre-launch Performance export

In **Performance → Search results**:

- date range: **28 May 2026 – 25 August 2026**;
- search type: Web;
- country: Australia;
- export via Search Console's native Export control to CSV, Excel or Google Sheets.

Retain the export as launch evidence. The connected analytical freeze already exists; this is the native evidence copy.

## Gate 1 PASS condition

Only after both security screens are clear:

- `gscSecurityIssuesChecked: true`;
- `gscManualActionsChecked: true`.

---

# Gate 2 — Authoritative DNS + legacy namespace verification

## A. Snapshot DNS before changing anything

1. Open the GoDaddy record for `corporateyoga.com.au`.
2. Record the delegated **nameservers**.
3. Identify the control panel that is authoritative for the live DNS zone.
4. Export or screenshot the **complete current DNS zone**.

Preserve and explicitly identify:

- apex website record;
- `www` website record;
- MX;
- SPF;
- DKIM;
- DMARC;
- mail/autodiscover;
- `studio.corporateyoga.com.au`;
- HubSpot/service verification records;
- any DigitalHost mail-protection records still current;
- any other deliberate service records.

### STOP condition

If the authoritative DNS location is uncertain, or if the zone cannot be safely captured:

- do not change nameservers;
- do not point the public domain to Vercel;
- resolve DNS ownership/control first.

## B. Verify the old portal host

From a normal browser/network, check:

- `https://portal.corporateyoga.com.au/`
- one representative historical `portal/u9fkcn/...` URL from the security evidence register.

Record:

- whether DNS resolves;
- exact visible result;
- exact HTTP status where available;
- whether any redirect occurs and its destination.

### Required safe state

The historical malicious/spam namespace must be dead/not-served or otherwise safely retired. It must **not** soft-redirect to Home, Programs, Yoga, Insights or another legitimate commercial page.

## C. Verify a representative `/cp/` legacy path

From a normal browser/network, test one representative historical `/cp/...` URL from the evidence register.

Record:

- exact visible result;
- exact HTTP status where available;
- whether any redirect occurs and its destination.

### Required safe state

A known compromised/spam path should be genuinely not served (for example 404/410) rather than legitimised through a commercial redirect.

## Gate 2 PASS condition

Only after:

- the full DNS snapshot is captured;
- current portal state is known;
- representative portal + `/cp/` HTTP behaviour is safe;
- no hacked route soft-redirects to legitimate CYA content;

set:

`legacySecurityVerified: true`

---

# Gate 3 — Hosted Vercel human/browser sign-off

Use the protected branch preview for `phase-11-3-search-authority`.

Current verified runtime candidate:

- deployment: `dpl_5tL21T9gpcDGubPrHQocP5TDLmCK`;
- commit: `1430f67e008d6017020501391f674571aae679a8`;
- state: READY;
- later PR changes are documentation-only;
- preview remains protected and noindexed.

## A. Page sweep

Check desktop and mobile as relevant:

- Home;
- Workplace Wellbeing Programs;
- Movement;
- Workplace Yoga;
- Workplace Pilates;
- Mindfulness & Meditation;
- Workshops & Expert Experiences;
- Online Wellbeing;
- Insights;
- About;
- Contact.

## B. Navigation

Check:

- desktop Services menu;
- mobile menu open/close;
- all visible primary-navigation destinations;
- footer destinations;
- no dead primary links.

## C. Accessibility sanity pass

Keyboard only:

- Tab through header/navigation;
- open/use dropdown/menu controls;
- confirm visible focus states;
- reach primary CTAs and Contact;
- confirm no obvious keyboard trap.

Also look for:

- obvious text/background contrast failure;
- horizontal overflow;
- clipped text/buttons;
- unreadable mobile typography;
- overlapping sticky/navigation elements.

This is a human/browser qualification pass, not a replacement for the automated technical QA already completed.

## D. Hosted asset + journey pass

Check:

- images load;
- fonts load;
- no obvious broken assets;
- Contact/planning journey works as intended;
- pages feel acceptably responsive on a normal connection.

### STOP condition

If a material navigation, accessibility, rendering, asset or contact-flow defect is found:

- keep `hostedBrowserQaPassed: false`;
- fix the runtime issue;
- redeploy and repeat this gate.

## Gate 3 PASS condition

When the protected preview is visually and interactively clean:

`hostedBrowserQaPassed: true`

---

# Final launch-authorisation sequence

When **all three gates pass**:

1. update `config/launch-approvals.json` with the verified true states;
2. run the repository launch gate / current production QA;
3. confirm the PR head is current and green;
4. mark PR #2 **Ready for Review**;
5. merge only from that green/current head;
6. follow `CYA_Phase_11_4_Production_Migration_Runbook_2026-08-26.md` for cutover;
7. retain Squarespace as the immediate rollback environment during the migration safety window;
8. do not change nameservers casually—preserve non-web DNS services;
9. activate the Phase 11.5 post-launch monitoring cadence immediately after cutover.

## Do not substitute

Do not use any of the following as a substitute for the three gates:

- a green GitHub build instead of GSC security clearance;
- absence of Google results instead of direct legacy DNS/HTTP checks;
- server-side smoke tests instead of the protected-preview human/browser pass;
- historical DNS emails instead of the current authoritative DNS zone;
- generic redirects instead of legitimate legacy-route retirement.

---

**Launch rule:** the application is ready to be judged for cutover; the cutover is not authorised until the three external controls are explicitly cleared.