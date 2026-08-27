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

async function request(pathname, options = {}) {
  return fetch(`${baseUrl}${pathname}`, {
    redirect: options.redirect ?? "manual",
    headers: { "user-agent": "CYA-Phase-11.5.4-QA" },
  });
}

async function waitForServer(timeoutMs = 30_000) {
  const startedAt = Date.now();
  while (Date.now() - startedAt < timeoutMs) {
    try {
      const response = await request("/");
      if (response.status === 200) return;
    } catch {
      // Server is still starting.
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
    "Approved for CYA website publication",
    "Evidence required",
    "Prototype build - not for public release",
    "publication consent not documented",
    "Prototype placeholder - not a publishable client story",
    "marketing-use consent not documented",
  ];
  return forbidden.find((phrase) => html.includes(phrase));
}

const indexableRoutes = [
  "/",
  "/workplace-wellbeing-programs",
  "/movement",
  "/workplace-yoga",
  "/workplace-pilates",
  "/meditation-mindfulness",
  "/workplace-wellbeing-workshops",
  "/expert-experiences",
  "/online-wellbeing",
  "/blog",
  "/about",
  "/contact",
];

const serviceRoutes = [
  "/workplace-wellbeing-programs",
  "/movement",
  "/workplace-yoga",
  "/workplace-pilates",
  "/meditation-mindfulness",
  "/workplace-wellbeing-workshops",
  "/expert-experiences",
  "/online-wellbeing",
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

const controlledNoindexRoutes = [
  "/case-studies",
  "/conferences-events",
  "/member-access",
  "/workplace-yoga-australia",
  "/online-wellbeing-1",
  "/online-wellbeing-2026",
  "/online-wellbeing-landing-page",
  "/online-wellbeing-learn-more-here",
  "/2026-wellbeing-program-1",
  "/program-registration",
  "/contact-thank-you",
  "/contact-thank-you-online",
  "/contact-thank-you-online-1",
];

const redirects = [
  ["/home", "/"],
  ["/getting-started", "/"],
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
  ["/about-us", "/about"],
  ["/old-about-2", "/about"],
  ["/old-bespoke-services", "/workplace-wellbeing-programs"],
  ["/old-services", "/workplace-wellbeing-programs"],
  ["/what-we-offer", "/workplace-wellbeing-programs"],
  ["/our-instructors", "/about"],
  ["/consultation", "/contact"],
  ["/contact-us", "/contact"],
  ["/services", "/movement"],
  ["/resources", "/blog"],
  ["/bespoke-services", "/workplace-wellbeing-programs"],
  ["/book-a-class", "/contact"],
];

const nextBin = path.join(root, "node_modules", "next", "dist", "bin", "next");
const server = spawn(process.execPath, [nextBin, "start", "-H", host, "-p", String(port)], {
  cwd: root,
  env: {
    ...process.env,
    NODE_ENV: "production",
    VERCEL_ENV: "production",
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

  for (const pathname of [...indexableRoutes, ...insightRoutes]) {
    const response = await request(pathname);
    const html = await response.text();
    check(response.status === 200, `200 response: ${pathname}`, `received ${response.status}`);
    check(hasCanonical(html, pathname), `self canonical: ${pathname}`, `expected ${canonicalHref(pathname)}`);
    check(!hasNoindex(html), `indexable route has no noindex: ${pathname}`);
    const leak = containsGovernanceLeak(html);
    check(!leak, `production HTML contains no governance leak: ${pathname}`, leak ?? "");
  }

  for (const pathname of controlledNoindexRoutes) {
    const response = await request(pathname);
    const html = await response.text();
    check(response.status === 200, `200 controlled route: ${pathname}`, `received ${response.status}`);
    check(hasCanonical(html, pathname), `controlled route self canonical: ${pathname}`);
    check(hasNoindex(html), `noindex rendered: ${pathname}`);
    const leak = containsGovernanceLeak(html);
    check(!leak, `controlled route contains no governance leak: ${pathname}`, leak ?? "");
  }

  for (const pathname of serviceRoutes) {
    const response = await request(pathname);
    const html = await response.text();
    check(hasSchemaType(html, "Service"), `Service schema renders: ${pathname}`);
    check(hasSchemaType(html, "BreadcrumbList"), `BreadcrumbList schema renders: ${pathname}`);
  }

  for (const pathname of insightRoutes) {
    const response = await request(pathname);
    const html = await response.text();
    check(hasSchemaType(html, "Article"), `Article schema renders: ${pathname}`);
    check(hasSchemaType(html, "BreadcrumbList"), `Insight BreadcrumbList schema renders: ${pathname}`);
  }

  const aboutResponse = await request("/about");
  const aboutHtml = await aboutResponse.text();
  check(hasSchemaType(aboutHtml, "Person"), "About renders founder Person schema");
  check(hasSchemaType(aboutHtml, "BreadcrumbList"), "About renders BreadcrumbList schema");

  const contactResponse = await request("/contact");
  const contactHtml = await contactResponse.text();
  check(hasSchemaType(contactHtml, "BreadcrumbList"), "Contact renders BreadcrumbList schema");

  const blogResponse = await request("/blog");
  const blogHtml = await blogResponse.text();
  check(hasSchemaType(blogHtml, "BreadcrumbList"), "Insights hub renders BreadcrumbList schema");

  for (const [source, destination] of redirects) {
    const response = await request(source);
    check(response.status === 301, `301 redirect: ${source}`, `received ${response.status}`);
    check(locationPath(response) === destination, `one-hop destination: ${source} -> ${destination}`, `received ${locationPath(response)}`);
  }

  const consultationQuery = await request("/consultation?interest=conference");
  check(consultationQuery.status === 301, "consultation query redirect returns 301", `received ${consultationQuery.status}`);
  check(
    locationPath(consultationQuery) === "/contact?interest=conference",
    "consultation redirect preserves interest query string",
    `received ${locationPath(consultationQuery)}`,
  );

  const unknown = await request("/phase-11-5-3-definitely-not-a-real-page");
  const unknownHtml = await unknown.text();
  check(unknown.status === 404, "unknown route returns genuine 404", `received ${unknown.status}`);
  check(unknownHtml.includes("Page not found"), "404 renders human not-found experience");

  const legacyCpSlash = await request("/cp/");
  check(legacyCpSlash.status === 308, "legacy /cp/ normalises trailing slash", `received ${legacyCpSlash.status}`);
  check(locationPath(legacyCpSlash) === "/cp", "legacy /cp/ normalises only to /cp", `received ${locationPath(legacyCpSlash)}`);

  const legacyCp = await request("/cp");
  const legacyCpHtml = await legacyCp.text();
  check(legacyCp.status === 404, "legacy /cp returns genuine 404", `received ${legacyCp.status}`);
  check(!legacyCp.headers.get("location"), "legacy /cp does not redirect into legitimate CYA content");
  check(legacyCpHtml.includes("Page not found"), "legacy /cp renders human not-found experience");

  const rootResponse = await request("/");
  const rootHtml = await rootResponse.text();
  check(
    rootHtml.includes("Corporate Yoga Australia | Workplace Wellbeing Programs"),
    "Home production title renders",
  );
  check(hasSchemaType(rootHtml, "Organization"), "Home renders Organization structured data");
  check(hasSchemaType(rootHtml, "WebSite"), "Home renders WebSite structured data");
  check(!rootHtml.includes("Prototype build - not for public release"), "production footer omits prototype warning");
  check(!rootHtml.includes("Approved for CYA website publication"), "Home client payload omits image approval notes");
  check(!rootHtml.includes("Temporary poster only"), "Home client payload omits internal hero production notes");
  check(rootHtml.includes("GTM-PXV5ZCLG"), "production HTML preserves the Google Tag Manager container");
  check(rootHtml.includes("G-7GY152D942"), "production HTML preserves the Google Analytics measurement ID");

  const registrationResponse = await request("/program-registration");
  const registrationHtml = await registrationResponse.text();
  check(registrationHtml.includes("Register for the Cromwell wellbeing program"), "Cromwell registration route preserves its operational purpose");
  check(registrationHtml.includes("Continue to Studio signup"), "Cromwell registration renders the Studio handoff action");

  const sitemapResponse = await request("/sitemap.xml");
  const sitemapXml = await sitemapResponse.text();
  check(sitemapResponse.status === 200, "sitemap.xml returns 200", `received ${sitemapResponse.status}`);
  check(sitemapXml.includes(productionOrigin), "sitemap contains Home");
  for (const pathname of indexableRoutes.filter((pathname) => pathname !== "/")) {
    check(sitemapXml.includes(canonicalHref(pathname)), `sitemap contains ${pathname}`);
  }
  for (const pathname of insightRoutes) {
    check(sitemapXml.includes(canonicalHref(pathname)), `sitemap contains protected Insight ${pathname}`);
  }
  for (const pathname of controlledNoindexRoutes) {
    check(!sitemapXml.includes(canonicalHref(pathname)), `sitemap excludes controlled noindex route ${pathname}`);
  }

  const robotsResponse = await request("/robots.txt");
  const robotsText = await robotsResponse.text();
  check(robotsResponse.status === 200, "robots.txt returns 200", `received ${robotsResponse.status}`);
  check(/Allow:\s*\//i.test(robotsText), "production robots allows crawling");
  check(!/Disallow:\s*\/$/im.test(robotsText), "production robots does not block the whole site");
  check(robotsText.includes(`${productionOrigin}/sitemap.xml`), "production robots declares canonical sitemap");

  if (errors.length > 0) {
    console.error(`\nPhase 11.5.4 rendered smoke FAILED (${errors.length}/${checks.length} checks failed):`);
    for (const error of errors) console.error(`- ${error}`);
    process.exitCode = 1;
  } else {
    console.log(`\nPhase 11.5.4 rendered production smoke PASS (${checks.length} checks).`);
  }
} catch (error) {
  console.error("\nPhase 11.5.4 rendered smoke could not complete:");
  console.error(error instanceof Error ? error.message : String(error));
  if (serverLog.trim()) {
    console.error("\nNext server output:\n" + serverLog.trim());
  }
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
