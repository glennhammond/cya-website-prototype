# CYA Website — Phase 11.4 Current DNS Baseline

**Captured:** 26 August 2026  
**Source:** authenticated GoDaddy DNS management screen for `corporateyoga.com.au`  
**Status:** PRE-CUTOVER SNAPSHOT / NO DNS CHANGES AUTHORISED

## Authoritative DNS

Current nameservers:

- `ns69.domaincontrol.com`
- `ns70.domaincontrol.com`

**Conclusion:** GoDaddy is both the registrar and the current authoritative DNS provider/control surface for `corporateyoga.com.au`.

## Current website routing

### Apex `@`

Four A records are present:

- `198.185.159.144`
- `198.185.159.145`
- `198.49.23.144`
- `198.49.23.145`

These are the current Squarespace website-routing records.

### `www`

- CNAME `www` → `ext-cust.squarespace.com.`

**Conclusion:** the current public site remains routed to Squarespace. Retain the Squarespace site/settings during the Vercel migration rollback window.

## Legitimate subdomains visible in the zone

A records:

- `dev` → `54.206.198.199`
- `oldstudio` → `13.238.83.108`
- `staging-academy` → `3.107.217.8`
- `studio` → `13.236.14.226`
- `wsdev` → `3.105.47.41`

CNAME:

- `wellbeing` → `2584ad1b08e77dd5.vercel-dns-017.com.`

These records are independent of the apex/`www` website migration and must not be altered casually.

## Email / verification records that must be preserved

### Microsoft 365

- MX `@` → `corporateyoga-com-au.mail.protection.outlook.com.`
- CNAME `autodiscover` → `autodiscover.outlook.com.`
- Microsoft DKIM selector CNAMEs are present.

### SPF

The apex SPF TXT record includes Microsoft 365 and HubSpot mail infrastructure.

### DMARC

A `_dmarc` TXT record is present.

### Brevo

- Brevo verification TXT is present.
- `brevo1._domainkey` and `brevo2._domainkey` DKIM CNAMEs are present.

### HubSpot

- HubSpot DKIM CNAMEs are present.
- HubSpot is included in SPF.

**Migration rule:** website cutover must modify only the minimum apex/`www` routing records required by Vercel. Do not replace nameservers and do not remove mail, DKIM, SPF, DMARC, HubSpot, Brevo or service-subdomain records.

## Historical `portal` namespace

The complete authenticated zone view contains **no `portal` DNS record**.

There is also no wildcard DNS record visible in the 26-record zone.

This materially supports the conclusion that `portal.corporateyoga.com.au` is retired and is not a current legitimate CYA service. It aligns with the documented 2023 malware/phishing history in which the historical `portal` namespace was associated with injected malicious content.

This does not by itself prove an exact browser/HTTP result for every historical URL. A final direct browser check remains appropriate before setting `legacySecurityVerified: true`.

## `/cp/` namespace

`/cp/` is a URL path on the main host rather than a DNS record, so it cannot be qualified from the DNS zone. A representative direct browser request is still required to confirm it returns genuine not-found/not-served behaviour and is not soft-redirected into legitimate CYA content.

## Migration implications

At Vercel cutover:

1. preserve these nameservers;
2. preserve the complete existing DNS zone as the rollback baseline;
3. update only the records Vercel explicitly requires for `@` and `www`;
4. preserve `studio`, `wellbeing`, development/staging subdomains and all email/security records;
5. verify Microsoft 365 email after cutover;
6. verify `studio.corporateyoga.com.au` and other legitimate service subdomains after cutover;
7. do not create or redirect the historical `portal` namespace;
8. do not bulk-redirect `/cp/` or other compromised/spam paths into commercial pages.

---

**DNS principle:** move the website, not the domain ecosystem.