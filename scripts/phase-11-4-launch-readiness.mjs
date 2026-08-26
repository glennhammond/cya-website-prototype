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

const approvals = JSON.parse(read("config/launch-approvals.json"));

// Phase 11.4 launch-blocking approvals. Pilates and Case Studies may remain
// safely withheld/noindexed at launch; they are conditional publication gates,
// not prerequisites for releasing the rest of the website.
const requiredApprovals = [
  ["photographyPublicationApproved", "Photography publication clearance has not been recorded."],
  ["legacySecurityVerified", "Historical /cp/ and portal DNS/HTTP verification has not been recorded."],
  ["gscSecurityIssuesChecked", "Google Search Console Security Issues check has not been recorded."],
  ["gscManualActionsChecked", "Google Search Console Manual Actions check has not been recorded."],
  ["renderedDeploymentQaPassed", "Current-head rendered deployment QA has not been recorded."],
];

for (const [key, message] of requiredApprovals) {
  if (approvals[key] !== true) block(message);
}

const mediaSource = read("content/media.ts");
const mediaLines = mediaSource.split(/\r?\n/);
const mediaStatuses = [];
let currentMediaKey = null;
for (const line of mediaLines) {
  const keyMatch = line.match(/^  ([A-Za-z0-9_]+): \{$/);
  if (keyMatch) currentMediaKey = keyMatch[1];
  const statusMatch = line.match(/^    status: "([^"]+)",/);
  if (statusMatch && currentMediaKey) {
    mediaStatuses.push({ key: currentMediaKey, status: statusMatch[1] });
  }
}

const unclearedMedia = mediaStatuses.filter((asset) => asset.status !== "approved");
if (unclearedMedia.length > 0) {
  block(
    `Media clearance remains open for ${unclearedMedia.length} governed asset(s): ${unclearedMedia
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
  warnings.push("Workplace Pilates remains safely withheld from search pending practitioner/evidence qualification.");
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

console.log("\nCYA Phase 11.4 launch-readiness gate");
if (warnings.length > 0) {
  console.log("\nControlled non-blocking publication gates:");
  for (const warning of warnings) console.log(`- ${warning}`);
}

if (blockers.length > 0) {
  console.error(`\nNOT LAUNCH-READY (${blockers.length} blocking condition${blockers.length === 1 ? "" : "s"}):`);
  for (const blocker of blockers) console.error(`- ${blocker}`);
  process.exit(1);
}

console.log("\nLAUNCH-READY: all Phase 11.4 launch-blocking publication, security and rendered-QA gates are recorded as complete.");
