# CYA Website — Privacy Operational Approval Register

Status: **PRE-PUBLICATION REVIEW — do not publish policy as final**

Source authority: `CYA-Privacy-Policy-working-draft.md` dated 29 August 2026.

Proposed public destination: `/privacy-policy`.

## Closed from current website implementation evidence

- Legal identity used by the working draft: Deborah Gail Lewis, ABN 59 474 451 715, trading as Corporate Yoga Australia.
- Public contact email: `info@corporateyoga.com.au`.
- Public telephone: `1300 373 363`.
- Plan with CYA is a service enquiry and does not subscribe the person to marketing.
- The Plan with CYA client-side form requires name, work email, intended outcome and privacy acknowledgement; organisation, location and timing are optional.
- The form instructs people not to include health, medical or other sensitive personal information in the general enquiry.
- The submission endpoint is fail-closed unless privacy approval, hosting/DPA confirmation and the enquiry release flag are all true.
- HubSpot destination is the governed CYA planning form in portal `14575795`, form `746ef219-510f-4faa-a7a3-40288155d936`.
- Request IP and `hubspotutk` are not forwarded by the hardened website endpoint.
- Source/referrer URLs are reduced to origin + pathname before submission; query strings are excluded.
- Attribution is collected/sent only after analytics permission.
- Production GTM/GA4 is fail-closed behind both release approval and an explicit visitor analytics preference.
- Current Google identifiers in the redesign: GTM `GTM-PXV5ZCLG`; GA4 `G-7GY152D942`.
- Visitor analytics choice: `Allow analytics` or `Essential only`; analytics stays off until allowed.
- Successful validated enquiries generate the conversion event directly; legacy thank-you-page visits are no longer conversion authority.
- Honeypot submissions do not create HubSpot records or conversion-eligible events.
- Vercel team `Glenn's projects` is confirmed on **Pro** as of 30 August 2026. The hosting/DPA commercial-plan gate is recorded closed.
- Pre-launch indexing remains fail-closed.
- `/privacy` redirects one hop to `/privacy-policy`; form, footer and analytics preferences link directly to `/privacy-policy`.
- `/privacy-policy` is intentionally `noindex, nofollow` while approval is pending.

## Still requiring operational/privacy/legal approval

These items come from the working draft's pre-publication checklist and must not be guessed or silently completed from general knowledge.

1. Decide whether a publishable postal or street address should be added.
2. Confirm practical retention periods for website enquiries, client records, participant records, analytics data and marketing data.
3. Confirm the configured GA4 retention period and review the GTM container for any additional production tags/tracking beyond the currently identified Google analytics integration.
4. Identify all service providers that handle personal information across the wider CYA service, not only this website, and assess likely overseas processing/disclosure and relevant countries.
5. Confirm whether CYA collects or holds health information in a way that affects Privacy Act coverage, including whether CYA may be a health service provider for Privacy Act purposes.
6. Confirm the privacy-complaint owner and internal handling process.
7. Confirm the final wording describing Wellbeing Studio participant data, employer reporting and any participant-data boundary used in the public policy.
8. Confirm website terms/contracting references if the appointed reviewer requires them to be cross-linked.
9. Obtain final approval from Debby Lewis and the appointed privacy/legal reviewer.
10. Set the effective date, remove review-only status, switch the policy to its approved search treatment, and verify every form-level policy link before enabling the enquiry.

## Release controls

Do not set any of the following to true merely because the review page exists:

- `CYA_PRIVACY_POLICY_APPROVED`
- `CYA_ANALYTICS_ENABLED`
- `CYA_ENQUIRY_SUBMISSION_ENABLED`
- `CYA_INDEXING_ENABLED`

The production enquiry remains disabled until the policy approval gate is closed and a controlled staging submission proves HubSpot fields, Discovery Context, Deb-only notification, no marketing subscription, error/success behaviour and conversion measurement.
