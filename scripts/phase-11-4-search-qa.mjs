import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];
const checks = [];

function file(relativePath) {
  return path.join(root, relativePath);
}

function exists(relativePath) {
  return fs.existsSync(file(relativePath));
}

function read(relativePath) {
  return fs.readFileSync(file(relativePath), "utf8");
}

function check(condition, message) {
  checks.push(message);
  if (!condition) errors.push(message);
}

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    return [fullPath];
  });
}

const indexQualifiedPages = [
  "app/page.tsx",
  "app/workplace-wellbeing-programs/page.tsx",
  "app/movement/page.tsx",
  "app/workplace-yoga/page.tsx",
  "app/meditation-mindfulness/page.tsx",
  "app/workplace-wellbeing-workshops/page.tsx",
  "app/online-wellbeing/page.tsx",
  "app/blog/page.tsx",
  "app/about-us/page.tsx",
  "app/contact/page.tsx",
];

for (const routeFile of indexQualifiedPages) {
  check(exists(routeFile), `index-qualified page exists: ${routeFile}`);
}

const retiredPageFiles = [
  "app/about/page.tsx",
  "app/consultation/page.tsx",
  "app/programs/page.tsx",
  "app/proof/page.tsx",
  "app/proof/case-study/page.tsx",
  "app/resources/page.tsx",
  "app/wellbeing-studio/page.tsx",
  "app/workplace-wellbeing/page.tsx",
  "app/workplace-wellbeing/movement/page.tsx",
];

for (const retiredFile of retiredPageFiles) {
  check(!exists(retiredFile), `retired page file removed: ${retiredFile}`);
}

const sitemap = read("app/sitemap.ts");
for (const canonicalPath of [
  "/workplace-wellbeing-programs",
  "/movement",
  "/workplace-yoga",
  "/meditation-mindfulness",
  "/workplace-wellbeing-workshops",
  "/online-wellbeing",
  "/blog",
  "/about-us",
  "/contact",
]) {
  check(sitemap.includes(`\"${canonicalPath}\"`), `sitemap contains ${canonicalPath}`);
}

for (const blockedPath of ["/workplace-pilates", "/case-studies", "/member-access", "/conferences-events"]) {
  check(!sitemap.includes(`\"${blockedPath}\"`), `sitemap excludes ${blockedPath}`);
}
check(sitemap.includes("insightArticles.map"), "sitemap includes protected Insights collection");

const noindexPages = [
  "app/workplace-pilates/page.tsx",
  "app/case-studies/page.tsx",
  "app/member-access/page.tsx",
  "app/conferences-events/page.tsx",
];
for (const noindexFile of noindexPages) {
  check(exists(noindexFile), `controlled noindex route exists: ${noindexFile}`);
  if (exists(noindexFile)) {
    const source = read(noindexFile);
    check(source.includes("index: false"), `noindex is explicit: ${noindexFile}`);
    check(source.includes("follow: true"), `follow remains enabled: ${noindexFile}`);
  }
}

const serviceSchemaPages = [
  "app/workplace-wellbeing-programs/page.tsx",
  "app/movement/page.tsx",
  "app/workplace-yoga/page.tsx",
  "app/workplace-pilates/page.tsx",
  "app/meditation-mindfulness/page.tsx",
  "app/workplace-wellbeing-workshops/page.tsx",
  "app/online-wellbeing/page.tsx",
];
for (const schemaFile of serviceSchemaPages) {
  const source = read(schemaFile);
  check(source.includes("ServiceStructuredData"), `service schema rendered: ${schemaFile}`);
}

const insights = read("content/insights.ts");
for (const slug of [
  "8-tips-to-successfully-introduce-yoga-at-work",
  "check-in-with-yourself-with-this-simple-technique",
  "3-steps-to-reduce-workplace-stress-with-mindfulness",
  "harnessing-the-power-of-the-breath",
  "mindfulness-everyday",
  "sleep-and-workplace-productivity-corporate-yoga-australia",
  "the-nervous-system-solution-why-your-wellbeing-program-isnt-working-and-what-to-do-instead",
  "5-pillars-of-corporate-wellbeing-to-boost-your-teams-productivity",
]) {
  check(insights.includes(`slug: \"${slug}\"`), `protected Insight preserved: ${slug}`);
}

const nextConfig = read("next.config.ts");
const requiredRedirects = [
  ["/home", "/"],
  ["/workplace-wellbeing", "/"],
  ["/programs", "/workplace-wellbeing-programs"],
  ["/workplace-wellbeing/movement", "/movement"],
  ["/workplace-yoga-australia", "/workplace-yoga"],
  ["/wellbeing-studio", "/online-wellbeing"],
  ["/proof", "/case-studies"],
  ["/about", "/about-us"],
  ["/consultation", "/contact"],
  ["/resources", "/blog"],
];
for (const [source, destination] of requiredRedirects) {
  const fragment = `{ source: \"${source}\", destination: \"${destination}\", statusCode: 301 }`;
  check(nextConfig.includes(fragment), `301 redirect ${source} -> ${destination}`);
}

const productionSourceFiles = ["app", "components", "content"]
  .flatMap((dir) => walk(file(dir)))
  .filter((sourceFile) => /\.(tsx?|mjs|js)$/.test(sourceFile));

const legacyHref = /(?:href\s*=\s*|href:\s*)["']\/(?:consultation|programs|proof|wellbeing-studio|resources|workplace-wellbeing(?:\/movement)?)(?:[?\/#"']|$)/;
for (const sourceFile of productionSourceFiles) {
  const source = fs.readFileSync(sourceFile, "utf8");
  const relative = path.relative(root, sourceFile);
  check(!legacyHref.test(source), `no legacy internal href in ${relative}`);
  check(!source.includes("permanentRedirect("), `no page-level permanentRedirect in ${relative}`);
  check(!source.includes('"@type": "LocalBusiness"'), `no LocalBusiness schema in ${relative}`);
}

const proofNote = read("components/ProofNote.tsx");
check(
  proofNote.includes('process.env.NODE_ENV !== "production"'),
  "production hides internal proof placeholders",
);

const principalProof = read("components/PrincipalProof.tsx");
check(
  principalProof.includes("publishableStatuses") && principalProof.includes("if (!publishablePrincipal) return null"),
  "Home proof is gated by publication status",
);

const caseStudies = read("app/case-studies/page.tsx");
check(
  caseStudies.includes("publishableStories") && caseStudies.includes("publishableStatuses"),
  "Case Studies hides unapproved candidate stories",
);

const robots = read("app/robots.ts");
check(robots.includes("VERCEL_ENV"), "robots distinguishes preview from production");
check(robots.includes('disallow: "/"'), "preview robots blocks crawling");

if (errors.length > 0) {
  console.error(`\nPhase 11.4 search QA FAILED (${errors.length}/${checks.length} checks failed):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Phase 11.4 search QA PASS (${checks.length} checks).`);
