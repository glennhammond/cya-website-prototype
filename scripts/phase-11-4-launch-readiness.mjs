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
const requiredApprovals = [
  ["photographyPublicationApproved", "Photography publication clearance has not been recorded."],
  ["pilatesPublicationApproved", "Workplace Pilates publication approval has not been recorded."],
  ["caseStudiesPublicationApproved", "Case-study publication approval has not been recorded."],
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

const proofSource = read("content/proof.ts");
const publishableCaseStudy = /^    status: "(?:approved|safe-working-copy)",/m.test(proofSource);
if (!publishableCaseStudy) {
  block("No case study currently has an approved or safe-working-copy top-level publication status.");
}

const pilatesSource = read("app/workplace-pilates/page.tsx");
if (pilatesSource.includes("index: false")) {
  warnings.push("/workplace-pilates remains noindex; launch approval should only be recorded after evidence qualification.");
}

const caseStudiesSource = read("app/case-studies/page.tsx");
if (caseStudiesSource.includes("index: false")) {
  warnings.push("/case-studies remains noindex; launch approval should only be recorded after client evidence qualification.");
}

console.log("\nCYA Phase 11.4 launch-readiness gate");
if (warnings.length > 0) {
  console.log("\nControlled warnings:");
  for (const warning of warnings) console.log(`- ${warning}`);
}

if (blockers.length > 0) {
  console.error(`\nNOT LAUNCH-READY (${blockers.length} blocking condition${blockers.length === 1 ? "" : "s"}):`);
  for (const blocker of blockers) console.error(`- ${blocker}`);
  process.exit(1);
}

console.log("\nLAUNCH-READY: all Phase 11.4 publication, security, evidence and rendered-QA gates are recorded as complete.");
