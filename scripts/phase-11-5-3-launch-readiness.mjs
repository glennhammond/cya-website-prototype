import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const blockers = [];
const warnings = [];

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function block(message) {
  blockers.push(message);
}

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    return [fullPath];
  });
}

const approvals = JSON.parse(read("config/launch-approvals.json"));
const routeDecisions = JSON.parse(read("config/phase-11-5-3-route-decisions.json"));

// Launch-blocking approvals. Case Studies is a conditional publication gate:
// the website may launch while Case Studies remains safely noindexed/withheld.
const requiredApprovals = [
  ["photographyPublicationApproved", "Photography publication clearance has not been recorded."],
  ["pilatesPublicationApproved", "Workplace Pilates publication approval has not been recorded."],
  ["renderedServerQaPassed", "Rendered production server QA has not been recorded."],
  ["legacySecurityVerified", "Historical /cp/ and portal DNS/HTTP verification has not been recorded."],
  ["gscSecurityIssuesChecked", "Google Search Console Security Issues check has not been recorded."],
  ["gscManualActionsChecked", "Google Search Console Manual Actions check has not been recorded."],
  ["hostedBrowserQaPassed", "Hosted browser/UX qualification has not been recorded."],
];

for (const [key, message] of requiredApprovals) {
  if (approvals[key] !== true) block(message);
}

const unresolvedCampaignRoutes = routeDecisions.campaignRoutes.filter((route) => route.ownerConfirmed !== true);
if (unresolvedCampaignRoutes.length > 0) {
  block(
    `Campaign/registration ownership remains unconfirmed for: ${unresolvedCampaignRoutes
      .map((route) => route.path)
      .join(", ")}`,
  );
}

const mediaSource = read("content/media.ts");
const mediaLines = mediaSource.split(/\r?\n/);
const mediaStatuses = new Map();
let currentMediaKey = null;
for (const line of mediaLines) {
  const keyMatch = line.match(/^  ([A-Za-z0-9_]+): \{$/);
  if (keyMatch) currentMediaKey = keyMatch[1];
  const statusMatch = line.match(/^    status: "([^"]+)",/);
  if (statusMatch && currentMediaKey) {
    mediaStatuses.set(currentMediaKey, statusMatch[1]);
  }
}

const usedMediaKeys = new Set(["homeHero"]);
for (const sourceFile of ["app", "components", "content"]
  .flatMap((dir) => walk(path.join(root, dir)))
  .filter((sourceFile) => /\.(tsx?|mjs|js)$/.test(sourceFile) && !sourceFile.endsWith("content/media.ts"))) {
  const source = fs.readFileSync(sourceFile, "utf8");

  // Only treat `media.<key>` as a governed registry reference when this file
  // actually imports the `media` registry from content/media. Components may
  // legitimately have local props named `media` (for example HeroVideo), and
  // comments may mention `content/media.ts`; neither should be interpreted as
  // publication-registry keys.
  const importsGovernedMediaRegistry = /import\s*\{[^}]*\bmedia\b[^}]*\}\s*from\s*["']@\/content\/media["']/s.test(source);
  if (!importsGovernedMediaRegistry) continue;

  for (const match of source.matchAll(/\bmedia\.([A-Za-z0-9_]+)/g)) {
    usedMediaKeys.add(match[1]);
  }
}

// proofHero only becomes renderable once a publishable case study exists.
if (approvals.caseStudiesPublicationApproved !== true) {
  usedMediaKeys.delete("proofHero");
}

const unclearedUsedMedia = [...usedMediaKeys]
  .map((key) => ({ key, status: mediaStatuses.get(key) ?? "missing-status" }))
  .filter((asset) => asset.status !== "approved")
  .sort((a, b) => a.key.localeCompare(b.key));

if (unclearedUsedMedia.length > 0) {
  block(
    `Publication clearance remains open for ${unclearedUsedMedia.length} renderable media asset(s): ${unclearedUsedMedia
      .map((asset) => `${asset.key} (${asset.status})`)
      .join(", ")}`,
  );
}

const sitemapSource = read("app/sitemap.ts");
const pilatesSource = read("app/workplace-pilates/page.tsx");
const caseStudiesSource = read("app/case-studies/page.tsx");
const proofSource = read("content/proof.ts");

const pilatesIsNoindex = pilatesSource.includes("index: false");
const pilatesInSitemap = sitemapSource.includes('"/workplace-pilates"');
if (approvals.pilatesPublicationApproved === true) {
  if (pilatesIsNoindex) block("Pilates is marked publication-approved but /workplace-pilates is still noindex.");
  if (!pilatesInSitemap) block("Pilates is marked publication-approved but /workplace-pilates is still absent from the sitemap.");
} else {
  if (!pilatesIsNoindex) block("Unapproved Workplace Pilates must remain noindex.");
  if (pilatesInSitemap) block("Unapproved Workplace Pilates must remain absent from the sitemap.");
}

const publishableCaseStudy = /^    status: "(?:approved|safe-working-copy)",/m.test(proofSource);
const caseStudiesIsNoindex = caseStudiesSource.includes("index: false");
const caseStudiesInSitemap = sitemapSource.includes('"/case-studies"');
if (approvals.caseStudiesPublicationApproved === true) {
  if (!publishableCaseStudy) block("Case Studies is marked publication-approved but no case study has a publishable top-level status.");
  if (caseStudiesIsNoindex) block("Case Studies is marked publication-approved but /case-studies is still noindex.");
  if (!caseStudiesInSitemap) block("Case Studies is marked publication-approved but /case-studies is still absent from the sitemap.");
} else {
  if (!caseStudiesIsNoindex) block("Unapproved Case Studies must remain noindex.");
  if (caseStudiesInSitemap) block("Unapproved Case Studies must remain absent from the sitemap.");
  warnings.push("Case Studies remains safely withheld from search while client evidence/permission work continues.");
}

console.log("\nCYA Phase 11.5.3 launch-readiness gate");
if (warnings.length > 0) {
  console.log("\nControlled non-blocking publication gates:");
  for (const warning of warnings) console.log(`- ${warning}`);
}

if (blockers.length > 0) {
  console.error(`\nNOT LAUNCH-READY (${blockers.length} blocking condition${blockers.length === 1 ? "" : "s"}):`);
  for (const blocker of blockers) console.error(`- ${blocker}`);
  process.exit(1);
}

console.log("\nLAUNCH-READY: all Phase 11.5.3 integration, campaign-route, publication, security and browser gates are recorded as complete.");
