import { spawn } from "node:child_process";
import path from "node:path";

const root = process.cwd();
const host = "127.0.0.1";
const port = 3100;
const baseUrl = `http://${host}:${port}`;
const productionOrigin = "https://www.corporateyoga.com.au";
const checks = [];
const errors = [];
let serverLog = "";

function check(condition, message, detail = "") {
  checks.push(message);
  if (!condition) errors.push(detail ? `${message} — ${detail}` : message);
}

function canonicalHref(pathname) {
  return pathname === "/" ? productionOrigin : `${productionOrigin}${pathname}`;
}

function sitemapHref(pathname) {
  return pathname === "/" ? `${productionOrigin}/` : `${productionOrigin}${pathname}`;
}

async function request(pathname, options = {}) {
  return fetch(`${baseUrl}${pathname}`, {
    redirect: options.redirect ?? "manual",
    method: options.method ?? "GET",
    headers: { "user-agent": "Corporate-Yoga-Australia-release-QA", ...(options.headers ?? {}) },
    body: options.body,
  });
}

async function waitForServer(timeoutMs = 30_000) {
  const startedAt = Date.now();
  while (Date.now() - startedAt < timeoutMs) {
    try {
      if ((await request("/")).status === 200) return;
    } catch {
      // The production server is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 300));
  }
  throw new Error(`Next production server did not become ready within ${timeoutMs}ms.`);
}

function locationPath(response) {
  const location = response.headers.get("location");
  if (!location) return null;
  const resolved = new URL(location, baseUrl);
  return `${resolved.pathname}${resolved.search}`;
}

function hasCanonical(html, pathname) {
  const expected = canonicalHref(pathname);
  return html.includes(`rel="canonical" href="${expected}"`) || html.includes(`href="${expected}" rel="canonical"`);
}

function hasNoindex(html) {
  return /<meta[^>]+(?:name="robots"[^>]+content="[^"]*noindex|content="[^"]*noindex[^>]+name="robots")/i.test(html);
}

function hasSchemaType(html, type) {
  return html.includes(`"@type":"${type}"`) || html.includes(`&quot;@type&quot;:&quot;${type}&quot;`);
}

function containsGovernanceLeak(html) {
  const forbidden = [
    "Evidence required",
    "Prototype build - not for public release",
    "publication consent not documented",
    "Prototype placeholder - not a publishable client story",
    "marketing-use consent not documented",
  ];
  return forbidden.find((phrase) => html.includes(phrase));
}

function headingsEndingWithFullStop(html) {
  return [...html.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi)]
    .map((match) => match[1].replace(/<[^>]+>/g, "").replace(/&[^;]+;/g, " ").trim())
    .filter((heading) => heading.endsWith("."));
}

const canonicalRoutes = [
  "/",
  "/workplace-wellbeing-programs",
  "/movement",
  "/workplace-yoga",
  "/workplace-pilates",
  "/meditation-mindfulness",
  "/workplace-wellbeing-workshops",
  "/online-wellbeing",
  "/blog",
  "/about-us",
  "/contact",
];

const serviceRoutes = [
  "/workplace-wellbeing-programs",
  "/movement",
  "/workplace-yoga",
  "/workplace-pilates",
  "/meditation-mindfulness",
  "/workplace-wellbeing-workshops",
  "/online-wellbeing",
];

const supportingRoutes = [
  "/case-studies",
  "/conferences-events",
  "/expert-experiences",
  "/member-access",
  "/privacy-policy",
  "/terms",
];

const insightRoutes = [
  "/blog/8-tips-to-successfully-introduce-yoga-at-work",
  "/blog/check-in-with-yourself-with-this-simple-technique",
  "/blog/3-steps-to-reduce-workplace-stress-with-mindfulness",
  "/blog/harnessing-the-power-of-the-breath",
  "/blog/mindfulness-everyday",
  "/blog/sleep-and-workplace-productivity-corporate-yoga-australia",
  "/blog/the-nervous-system-solution-why-your-wellbeing-program-isnt-working-and-what-to-do-instead",
  "/blog/5-pillars-of-corporate-wellbeing-to-boost-your-teams-productivity",
];

const redirects = [
  ["/home", "/"],
  ["/getting-started", "/contact"],
  ["/workplace-wellbeing", "/"],
  ["/programs", "/workplace-wellbeing-programs"],
  ["/personalised-wellbeing-programs", "/workplace-wellbeing-programs"],
  ["/workplace-wellbeing/movement", "/movement"],
  ["/our-classes", "/movement"],
  ["/wellbeing-studio", "/online-wellbeing"],
  ["/proof", "/case-studies"],
  ["/proof/case-study", "/case-studies"],
  ["/reviews", "/case-studies"],
  ["/testimonials", "/case-studies"],
  ["/about", "/about-us"],
  ["/old-about-2", "/about-us"],
  ["/old-bespoke-services", "/workplace-wellbeing-programs"],
  ["/old-services", "/workplace-wellbeing-programs"],
  ["/what-we-offer", "/workplace-wellbeing-programs"],
  ["/our-instructors", "/about-us"],
  ["/consultation", "/contact"],
  ["/contact-us", "/contact"],
  ["/services", "/movement"],
  ["/resources", "/blog"],
  ["/bespoke-services", "/workplace-wellbeing-programs"],
  ["/book-a-class", "/contact"],
  ["/privacy", "/privacy-policy"],
  ["/workplace-yoga-australia", "/workplace-yoga"],
  ["/online-wellbeing-2026", "/online-wellbeing"],
  ["/online-wellbeing-1", "/online-wellbeing"],
  ["/online-wellbeing-landing-page", "/online-wellbeing"],
  ["/online-wellbeing-learn-more-here", "/online-wellbeing"],
  ["/2026-wellbeing-program", "/workplace-wellbeing-programs"],
  ["/2026-wellbeing-program-1", "/workplace-wellbeing-programs"],
  ["/2026-wellbeing-program-1-1", "/workplace-wellbeing-programs"],
  ["/blog/wrc3ipsjxi1x5i5ppiiol3vilpm4xy", "/blog/sleep-and-workplace-productivity-corporate-yoga-australia"],
  ["/blog/6-ways-to-embrace-winter-wellbeing", "/blog/sleep-and-workplace-productivity-corporate-yoga-australia"],
  ["/blog/12-ways-to-bring-positive-and-lasting-change-to-your-day", "/blog/mindfulness-everyday"],
  ["/blog/6-essential-strategies-for-thriving-in-a-demanding-world", "/blog/mindfulness-everyday"],
  ["/blog/5-tips-to-help-keep-your-emotions-from-controlling-you", "/blog/3-steps-to-reduce-workplace-stress-with-mindfulness"],
  ["/blog/summer-retreat-3d55t", "/blog/3-steps-to-reduce-workplace-stress-with-mindfulness"],
];

const retiredRoutes = [
  "/program-registration",
  "/contact-thank-you",
  "/contact-thank-you-online",
  "/contact-thank-you-online-1",
  "/google-ads-lander",
  "/cart",
  "/blog/category/Wellbeing",
  "/blog/tag/Corporate%20Wellbeing",
];

const nextBin = path.join(root, "node_modules", "next", "dist", "bin", "next");
const server = spawn(process.execPath, [nextBin, "start", "-H", host, "-p", String(port)], {
  cwd: root,
  env: {
    ...process.env,
    NODE_ENV: "production",
    VERCEL_ENV: "production",
    CYA_PRIVACY_POLICY_APPROVED: "false",
    CYA_TERMS_APPROVED: "false",
    CYA_HOSTING_DPA_CONFIRMED: "false",
    CYA_INDEXING_ENABLED: "false",
    CYA_ANALYTICS_ENABLED: "false",
    CYA_ENQUIRY_SUBMISSION_ENABLED: "false",
  },
  stdio: ["ignore", "pipe", "pipe"],
});

for (const stream of [server.stdout, server.stderr]) {
  stream.on("data", (chunk) => {
    serverLog += chunk.toString();
    if (serverLog.length > 12_000) serverLog = serverLog.slice(-12_000);
  });
}

try {
  await waitForServer();

  for (const pathname of [...canonicalRoutes, ...insightRoutes]) {
    const response = await request(pathname);
    const html = await response.text();
    check(response.status === 200, `200 response: ${pathname}`, `received ${response.status}`);
    check(hasCanonical(html, pathname), `self canonical: ${pathname}`, `expected ${canonicalHref(pathname)}`);
    check(hasNoindex(html), `fail-closed noindex: ${pathname}`);
    check(!containsGovernanceLeak(html), `no governance leak: ${pathname}`, containsGovernanceLeak(html) ?? "");
    check(!/\bCYA\b/.test(html), `no public acronym: ${pathname}`);
    const invalidHeadings = headingsEndingWithFullStop(html);
    check(invalidHeadings.length === 0, `headings have no full stops: ${pathname}`, invalidHeadings.join(" | "));
  }

  for (const pathname of supportingRoutes) {
    const response = await request(pathname);
    const html = await response.text();
    check(response.status === 200, `200 supporting response: ${pathname}`, `received ${response.status}`);
    check(hasCanonical(html, pathname), `supporting self canonical: ${pathname}`, `expected ${canonicalHref(pathname)}`);
    check(hasNoindex(html), `supporting fail-closed noindex: ${pathname}`);
    check(!containsGovernanceLeak(html), `supporting route has no governance leak: ${pathname}`, containsGovernanceLeak(html) ?? "");
    check(!/\bCYA\b/.test(html), `supporting route has no public acronym: ${pathname}`);
    const invalidHeadings = headingsEndingWithFullStop(html);
    check(invalidHeadings.length === 0, `supporting headings have no full stops: ${pathname}`, invalidHeadings.join(" | "));
  }

  for (const pathname of serviceRoutes) {
    const html = await (await request(pathname)).text();
    check(hasSchemaType(html, "Service"), `Service schema: ${pathname}`);
    check(hasSchemaType(html, "BreadcrumbList"), `BreadcrumbList schema: ${pathname}`);
  }

  for (const pathname of insightRoutes) {
    const html = await (await request(pathname)).text();
    check(hasSchemaType(html, "Article"), `Article schema: ${pathname}`);
    check(hasSchemaType(html, "BreadcrumbList"), `Insight BreadcrumbList schema: ${pathname}`);
  }

  const aboutHtml = await (await request("/about-us")).text();
  check(hasSchemaType(aboutHtml, "Person"), "About founder Person schema");
  const rootHtml = await (await request("/")).text();
  check(hasSchemaType(rootHtml, "Organization"), "Home Organization schema");
  check(hasSchemaType(rootHtml, "WebSite"), "Home WebSite schema");
  check(!rootHtml.includes("GTM-PXV5ZCLG"), "analytics container absent while disabled");
  check(!rootHtml.includes("G-7GY152D942"), "analytics measurement absent while disabled");

  const contactHtml = await (await request("/contact")).text();
  check(hasSchemaType(contactHtml, "BreadcrumbList"), "Contact BreadcrumbList schema");
  check(contactHtml.includes("Online submission is not yet enabled on this pre-launch build"), "contact form explains fail-closed state");
  check(/<button[^>]+disabled[^>]*>/.test(contactHtml), "contact submit button is disabled");
  const enquiry = await request("/api/enquiries", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({}) });
  check(enquiry.status === 503, "enquiry API is fail-closed", `received ${enquiry.status}`);

  for (const [source, destination] of redirects) {
    const response = await request(source);
    check(response.status === 301, `301 redirect: ${source}`, `received ${response.status}`);
    check(locationPath(response) === destination, `one-hop destination: ${source} -> ${destination}`, `received ${locationPath(response)}`);
    const destinationResponse = await request(destination);
    check(destinationResponse.status === 200, `redirect destination is healthy: ${destination}`, `received ${destinationResponse.status}`);
    check(!destinationResponse.headers.get("location"), `redirect destination is final: ${destination}`);
  }

  const consultationQuery = await request("/consultation?interest=conference");
  check(consultationQuery.status === 301, "consultation query redirect returns 301", `received ${consultationQuery.status}`);
  check(locationPath(consultationQuery) === "/contact?interest=conference", "consultation redirect preserves query", `received ${locationPath(consultationQuery)}`);

  for (const pathname of retiredRoutes) {
    for (const method of ["GET", "HEAD"]) {
      const response = await request(pathname, { method });
      check(response.status === 410, `${method} 410 retirement: ${pathname}`, `received ${response.status}`);
      check(response.headers.get("x-robots-tag") === "noindex, nofollow", `${method} retirement noindex header: ${pathname}`);
      check(!response.headers.get("location"), `${method} retirement has no redirect: ${pathname}`);
    }
  }

  const unknown = await request("/release-qualification-definitely-not-a-real-page");
  const unknownHtml = await unknown.text();
  check(unknown.status === 404, "unknown route returns genuine 404", `received ${unknown.status}`);
  check(unknownHtml.includes("Page not found"), "404 renders human not-found experience");
  check(!/\bCYA\b/.test(unknownHtml), "404 contains no public acronym");
  const legacyCpSlash = await request("/cp/");
  check(legacyCpSlash.status === 308, "legacy /cp/ normalises trailing slash", `received ${legacyCpSlash.status}`);
  check(locationPath(legacyCpSlash) === "/cp", "legacy /cp/ normalises only to /cp", `received ${locationPath(legacyCpSlash)}`);
  const legacyCp = await request("/cp");
  check(legacyCp.status === 404, "legacy /cp returns genuine 404", `received ${legacyCp.status}`);
  check(!legacyCp.headers.get("location"), "legacy /cp does not soft-redirect");

  const sitemapResponse = await request("/sitemap.xml");
  const sitemapXml = await sitemapResponse.text();
  const sitemapLocations = new Set([...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]));
  check(sitemapResponse.status === 200, "sitemap.xml returns 200", `received ${sitemapResponse.status}`);
  for (const pathname of [...canonicalRoutes, ...insightRoutes]) check(sitemapLocations.has(sitemapHref(pathname)), `sitemap contains ${pathname}`);
  for (const [source] of redirects) check(!sitemapLocations.has(sitemapHref(source)), `sitemap excludes redirect source ${source}`);
  for (const pathname of retiredRoutes) check(!sitemapLocations.has(sitemapHref(pathname)), `sitemap excludes retired route ${pathname}`);

  const robotsResponse = await request("/robots.txt");
  const robotsText = await robotsResponse.text();
  check(robotsResponse.status === 200, "robots.txt returns 200", `received ${robotsResponse.status}`);
  check(/Disallow:\s*\/$/im.test(robotsText), "robots blocks crawling while release is unapproved");
  check(robotsText.includes(`${productionOrigin}/sitemap.xml`), "robots declares canonical sitemap");

  if (errors.length > 0) {
    console.error(`\nRendered release smoke FAILED (${errors.length}/${checks.length} checks failed):`);
    for (const error of errors) console.error(`- ${error}`);
    process.exitCode = 1;
  } else {
    console.log(`\nRendered release smoke PASS (${checks.length} checks).`);
  }
} catch (error) {
  console.error("\nRendered release smoke could not complete:");
  console.error(error instanceof Error ? error.message : String(error));
  if (serverLog.trim()) console.error("\nNext server output:\n" + serverLog.trim());
  process.exitCode = 1;
} finally {
  server.kill("SIGTERM");
  await new Promise((resolve) => {
    const timer = setTimeout(resolve, 2_000);
    server.once("exit", () => {
      clearTimeout(timer);
      resolve();
    });
  });
}
