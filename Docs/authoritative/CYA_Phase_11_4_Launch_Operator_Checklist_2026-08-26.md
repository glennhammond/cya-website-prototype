# CYA Website — Phase 11.4 Launch Operator Checklist

**Purpose:** one short operational checklist for the remaining external launch work.  
**Current state:** repository/search architecture qualified; photography and Workplace Pilates publication complete; Case Studies safely non-blocking/noindexed.

## A. Legacy security gate

Complete before launch:

- [ ] Verify DNS/application state for `portal.corporateyoga.com.au`.
- [ ] Request representative historical `portal.corporateyoga.com.au/...` URLs and confirm they do not serve legacy/spam content.
- [ ] Request representative historical `https://www.corporateyoga.com.au/cp/...` URLs and confirm genuine **404 or 410** responses.
- [ ] Confirm hacked/spam URL families are **not** redirected to Home or other legitimate CYA pages.
- [ ] Open Google Search Console → Security Issues and record **no unresolved issue**, or document remediation if one exists.
- [ ] Open Google Search Console → Manual Actions and record **no unresolved action**, or document remediation if one exists.
- [ ] Set `legacySecurityVerified`, `gscSecurityIssuesChecked` and `gscManualActionsChecked` to `true` only after the checks above are genuinely completed.

Public search finding already recorded: no indexed portal/`/cp/` results surfaced on 26 August 2026. This is supporting evidence only, not clearance.

## B. Hosted browser / UX gate

Use a **current branch-head hosted preview**, not an older green deployment.

### Desktop

- [ ] Home at approximately 1440px width: hero, navigation, content hierarchy, images and CTAs visually sound.
- [ ] Services dropdown opens/closes correctly and links to Movement, Yoga, Pilates, Mindfulness, Workshops, Online and Conferences.
- [ ] Programs, Insights, About and Contact are reachable from primary navigation.
- [ ] No internal governance annotations or prototype language appear.
- [ ] No obvious layout shift, clipping or horizontal overflow.

### Mobile

- [ ] Review around 390px width.
- [ ] Mobile menu opens/closes, focus remains usable and all canonical destinations are reachable.
- [ ] Hero text/CTA remains readable and does not obscure critical image content.
- [ ] Cards, article layouts, tables/lists and footer do not overflow horizontally.
- [ ] Touch targets remain comfortably usable.

### Keyboard/accessibility

- [ ] Skip link works.
- [ ] Every interactive control is reachable by keyboard.
- [ ] Visible focus is present and not obscured by the sticky header.
- [ ] Dropdown/mobile navigation can be operated without a pointer.
- [ ] External member sign-in communication is announced appropriately.
- [ ] No obvious contrast failures in text, buttons or focus states.

### Conversion / utility

- [ ] Contact route loads with and without `?interest=` context.
- [ ] Contact form labels, required fields, error summary and keyboard order behave correctly.
- [ ] Member Access is reachable, self-canonical and noindex.
- [ ] External Wellbeing Studio sign-in opens the intended destination.

### Search/hosted environment

Repository HTTP tests already prove canonical/robots/sitemap/redirect semantics locally. On the hosted candidate, smoke-check:

- [ ] preview carries noindex protection;
- [ ] canonical URLs still point at `https://www.corporateyoga.com.au/...`;
- [ ] no host-specific redirect loop;
- [ ] images/fonts/assets load through the hosted CDN;
- [ ] no 4xx/5xx application/runtime errors on core routes.

### Performance

- [ ] Run a hosted Lighthouse/PageSpeed/Core Web Vitals smoke on Home.
- [ ] Run a second smoke on one substantive service page such as Workplace Yoga or Pilates.
- [ ] Investigate material LCP/CLS/INP regressions before launch; do not chase score perfection at the expense of the approved experience.

When complete, set `hostedBrowserQaPassed: true` in `config/launch-approvals.json`.

## C. Measurement setup — does not block technical launch

### Ahrefs Rank Tracker

- [ ] Open project `Corporateyoga` / ID `10280255`.
- [ ] Add the exact contents of `CYA_Phase_11_4_Ahrefs_Rank_Tracker_40_Keywords.txt`.
- [ ] Use Australia location ID `2036` / English.
- [ ] Do not add suggested synonyms/cities merely because the Ahrefs UI offers them.
- [ ] Confirm keyword count is 40 after import.

### GSC baseline

Immediately before production deployment:

- [ ] Export/save a native GSC pre-launch baseline.
- [ ] Record production launch date/time.
- [ ] Record canonical migration date/time.

Immediately after deployment:

- [ ] Fetch production `robots.txt` and `sitemap.xml`.
- [ ] Submit/refresh sitemap in GSC if appropriate.
- [ ] Inspect Home, Workplace Yoga, Workplace Pilates, Programs and one Insight URL in URL Inspection.
- [ ] Monitor ranking URL as well as position during migration.
- [ ] Prioritise GSC clicks/impressions/CTR/indexation over Ahrefs estimated traffic.

## D. Case Studies — parallel post-launch-capable workstream

Case Studies does **not** need to delay launch while safely withheld.

- [ ] Obtain client permission for the first publishable story.
- [ ] Verify exact workplace context and delivery facts.
- [ ] Verify any metrics or quotation wording before publication.
- [ ] Move the story to an approved/safe publication status.
- [ ] Only then remove Case Studies noindex/add sitemap and navigation exposure through the governed publication decision.

## E. Final release decision

Run:

`npm run qa:launch`

The command should remain red until legacy security/GSC and hosted-browser gates are formally recorded as complete. Case Studies may remain safely withheld.

Only after the launch gate is green should PR #2 be promoted from Draft for final release integration.
