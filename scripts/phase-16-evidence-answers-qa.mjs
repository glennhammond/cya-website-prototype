import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];
const checks = [];

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function json(relativePath) {
  return JSON.parse(read(relativePath));
}

function check(condition, message) {
  checks.push(message);
  if (!condition) errors.push(message);
}

const insights = read("content/insights.ts");
const articlePage = read("app/blog/[slug]/page.tsx");
const programsPage = read("app/workplace-wellbeing-programs/page.tsx");
const structuredData = read("components/StructuredData.tsx");
const editorial = json("config/insights-editorial-authority.json");
const champion = json("config/wellbeing-champion-evidence-route.json");
const corroboration = json("config/external-corroboration-register.json");

check(editorial.version === "1.0.0", "editorial authority register is versioned");
check(editorial.articles.length === 8, "editorial register covers all eight protected Insights");
check(!insights.includes('author: "Glenn Hammond"'), "Glenn is not presented as practitioner authority");
check((insights.match(/editor: "Glenn Hammond"/g) ?? []).length === 4, "Glenn is accurately separated as editorial producer");
check((insights.match(/evidenceStatus:/g) ?? []).length === 9, "every Insight has a governed evidence status plus its interface contract");

const insightSlugs = [...insights.matchAll(/slug: "([^"]+)"/g)].map((match) => match[1]);
const registeredSlugs = editorial.articles.map((article) => article.slug);
check(new Set(insightSlugs).size === 8, "Insight source contains eight unique protected slugs");
check(new Set(registeredSlugs).size === 8, "editorial register contains eight unique slugs");
check(insightSlugs.every((slug) => registeredSlugs.includes(slug)), "every protected Insight has an editorial authority record");

for (const article of editorial.articles) {
  check(article.publicAuthor === "Corporate Yoga Australia", `${article.slug} uses organisational public authorship`);
  check(Boolean(article.status), `${article.slug} has a review status`);
  check(Boolean(article.releaseGate), `${article.slug} has a truthful release gate`);
  check(!article.releaseGate.toLowerCase().includes("approved by debby"), `${article.slug} does not invent Debby approval`);
}

for (const signal of [
  "editorName={article.editor}",
  "reviewerName={article.expertReviewer?.name}",
  "Editorial production:",
  "Expert review:",
  "Sources and scope",
  "do not turn Corporate Yoga Australia services into WHS advice or controls",
]) {
  check(articlePage.includes(signal), `Insight template exposes governed authority signal: ${signal}`);
}

for (const signal of [
  "editorName?: string",
  "reviewerName?: string",
  "editor:",
  "reviewedBy:",
]) {
  check(structuredData.includes(signal), `Article schema supports truthful optional attribution: ${signal}`);
}

for (const signal of [
  "Begin with fit, access and permission",
  "Design for more than one doorway",
  "Give the program an internal sponsor and a practical contact",
  "Use continuity without creating a compulsory ladder",
  "Keep wellbeing activity and psychosocial risk management distinct",
  "Measure what is genuinely available",
  "must not be presented as the control for the hazard",
  "privacy-aware",
]) {
  check(insights.includes(signal), `program-engagement guide includes ${signal}`);
}

for (const source of [
  "Workplace Health and Safety Queensland",
  "Safe Work Australia",
  "work-health-and-wellbeing-toolkit",
  "managing-the-risk-of-psychosocial-hazards-at-work-code-of-practice-2022",
]) {
  check(insights.includes(source), `program-engagement guide cites primary authority: ${source}`);
}

for (const signal of [
  "Designed for participation",
  "Participants receive clear information",
  "not individually",
  "Voluntary and privacy-aware",
  "do not replace identifying and controlling psychosocial hazards",
  "appropriate WHS, clinical or legal advice",
]) {
  check(programsPage.includes(signal), `program page states ${signal}`);
}

check(champion.version === "1.0.0", "Wellbeing Champion evidence route is versioned");
check(champion.objectives.length === 2, "Champion pilot keeps two objectives distinct");
check(champion.objectives[0].owner === "Corporate Yoga Australia", "CYA participation objective has a declared owner");
check(champion.objectives[1].owner === "Emerging eLearning Studio", "eLearning validation objective has a distinct owner");
check(champion.pilotShape.deliveryWeeks === 12, "preferred Champion pilot retains 12 delivery weeks");
check(champion.pilotShape.readinessAndBaselineWeeks === "2–4", "preferred pilot retains the 2–4 week readiness and baseline period");
check(champion.pilotShape.cyaCheckIns === 4, "preferred pilot retains four CYA check-ins");
check(champion.minimumEntryConditions.length >= 7, "paid-pilot entry conditions are explicit");
check(champion.championRole.does.length >= 5, "Champion activation responsibilities are explicit");
check(champion.championRole.doesNot.length >= 6, "Champion exclusions are explicit");
check(champion.evaluation.allowedMeasures.length >= 6, "pilot has proportionate allowed measures");
check(champion.evaluation.prohibitedInferences.length >= 5, "pilot prohibits unsupported inferences");
check(champion.publicAuthorityRoute.newLandingPage === "not-authorised-before-pilot-evidence", "no premature Champion landing page is authorised");
check(champion.publicAuthorityRoute.publicationGates.length >= 6, "future Champion authority assets remain evidence-gated");

for (const exclusion of ["psychosocial hazards", "complaints", "HR", "WHS", "mental-health-care", "statutory duties"]) {
  check(champion.championRole.doesNot.some((item) => item.includes(exclusion)), `Champion role excludes ${exclusion}`);
}

check(corroboration.version === "1.0.0", "external corroboration register is versioned");
check(corroboration.protectedExistingAuthority.length === 4, "four known authority relationships are protected");
check(corroboration.firstRelationshipTargets.length === 4, "first four relationship-led corroboration targets are governed");
check(corroboration.ownedEntityPresence.length === 3, "owned entity presences are separated from independent corroboration");

for (const item of corroboration.protectedExistingAuthority) {
  check(item.status === "verified-live-in-authority-audit-2026-08-26", `${item.id} retains its evidence date and verified status`);
  check(Boolean(item.destination), `${item.id} has a canonical destination`);
  check(/protect|preserve/.test(item.nextAction.toLowerCase()), `${item.id} prioritises authority preservation`);
}

for (const target of corroboration.firstRelationshipTargets) {
  check(Boolean(target.gate), `${target.id} is permission or evidence gated`);
  check(Boolean(target.destination), `${target.id} has a declared CYA authority owner`);
}

for (const exclusion of [
  "Bulk directories",
  "Paid dofollow placements",
  "Reciprocal-link quotas",
  "Invented awards, research or statistics",
]) {
  check(corroboration.excluded.includes(exclusion), `corroboration plan excludes ${exclusion}`);
}

check(!fs.existsSync(path.join(root, "app/wellbeing-champion")), "no thin Wellbeing Champion landing page has been created");
check(!programsPage.includes("compliant with psychosocial"), "program page makes no psychosocial compliance claim");
check(!insights.includes("guarantees improved"), "Insight copy makes no affirmative guarantee claim");

console.log(`\nCYA Search Visibility Evidence, Answers & Corroboration 02 QA: ${checks.length} checks`);

if (errors.length > 0) {
  console.error(`\nFAIL (${errors.length} issue${errors.length === 1 ? "" : "s"}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("PASS: editorial authority, program answers, psychosocial boundaries, Champion evidence design and corroboration gates are qualified.");
