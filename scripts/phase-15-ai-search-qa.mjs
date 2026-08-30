import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];
const checks = [];

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function check(condition, message) {
  checks.push(message);
  if (!condition) errors.push(message);
}

function json(relativePath) {
  return JSON.parse(read(relativePath));
}

const promptSet = json("config/ai-visibility-prompts.json");
const pageMap = json("config/ai-visibility-page-map.json");

check(promptSet.version === "1.0.0", "governed AI-visibility prompt set is versioned");
check(promptSet.locale === "Australia / en-AU", "prompt set preserves Australian locale");
check(promptSet.reviewCadence === "monthly", "prompt set has a monthly review cadence");
check(
  Array.isArray(promptSet.prompts) && promptSet.prompts.length >= 30 && promptSet.prompts.length <= 40,
  "prompt set contains the governed 30–40 prompt portfolio",
);

const promptIds = promptSet.prompts.map((prompt) => prompt.id);
const promptTexts = promptSet.prompts.map((prompt) => prompt.prompt.trim().toLowerCase());
check(new Set(promptIds).size === promptIds.length, "prompt IDs are unique");
check(new Set(promptTexts).size === promptTexts.length, "prompt texts are unique");

for (const category of [
  "entity",
  "service discovery",
  "program procurement",
  "engagement and authority",
  "campaigns and events",
  "decision support",
]) {
  check(
    promptSet.prompts.some((prompt) => prompt.category === category),
    `prompt portfolio covers ${category}`,
  );
}

for (const prompt of promptSet.prompts) {
  check(Boolean(prompt.targetOwner), `prompt ${prompt.id} has a declared page owner`);
  check(Boolean(prompt.intent), `prompt ${prompt.id} has a declared intent`);
  check(Boolean(prompt.commercialValue), `prompt ${prompt.id} has a commercial-value classification`);
  check(Boolean(prompt.evidenceRisk), `prompt ${prompt.id} has an evidence-risk classification`);
}

const indexQualifiedPaths = [
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

for (const route of indexQualifiedPaths) {
  const page = pageMap.pages.find((candidate) => candidate.path === route);
  check(Boolean(page), `answer-intent map covers ${route}`);
  if (!page) continue;
  check(page.status === "index-qualified", `${route} retains index-qualified status`);
  check(Boolean(page.centralQuestion), `${route} has a central buyer question`);
  check(page.directAnswerContract.length >= 2, `${route} has a direct-answer contract`);
  check(page.evidenceRequired.length >= 1, `${route} has an evidence requirement`);
}

for (const gatedRoute of ["/case-studies", "/conferences-events"]) {
  const page = pageMap.pages.find((candidate) => candidate.path === gatedRoute);
  check(Boolean(page), `answer-intent map covers governed gated route ${gatedRoute}`);
  check(page?.status.startsWith("noindex") === true, `${gatedRoute} remains explicitly noindex-gated`);
}

const structuredData = read("components/StructuredData.tsx");
for (const signal of [
  '"@id": organisationId',
  'legalName: "Deborah Gail Lewis trading as Corporate Yoga Australia"',
  '"https://au.linkedin.com/company/corporate-yoga-australia"',
  '"https://www.instagram.com/corporateyoga_australia/"',
  '"@id": founderId',
  '"https://au.linkedin.com/in/lewisdebby"',
]) {
  check(structuredData.includes(signal), `entity graph includes ${signal}`);
}
check(
  (structuredData.match(/organisationNode,/g) ?? []).length >= 3,
  "Organisation entity is connected on home, service and article graphs",
);

const robots = read("app/robots.ts");
check(robots.includes('userAgent: "*", allow: "/"'), "production robots policy permits public search crawlers");
check(!robots.includes("OAI-SearchBot") || !robots.includes('userAgent: "OAI-SearchBot", disallow: "/"'), "OAI-SearchBot is not blocked");
check(!fs.existsSync(path.join(root, "public/llms.txt")), "no unsupported llms.txt dependency has been introduced");

const attribution = `${read("lib/attribution.ts")}\n${read("components/AttributionCapture.tsx")}\n${read("app/api/enquiries/route.ts")}`;
for (const signal of [
  '"chatgpt.com": "ChatGPT"',
  '"perplexity.ai": "Perplexity"',
  '"copilot.microsoft.com": "Microsoft Copilot"',
  'discoveryChannel: "ai-search"',
  "initialReferrer",
  "Discovery source:",
]) {
  check(attribution.includes(signal), `AI-assisted discovery attribution includes ${signal}`);
}

console.log(`\nCYA Search Visibility Foundation 01 QA: ${checks.length} checks`);

if (errors.length > 0) {
  console.error(`\nFAIL (${errors.length} issue${errors.length === 1 ? "" : "s"}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("PASS: governed prompts, answer-intent ownership, entity clarity, crawler eligibility and AI-discovery attribution are qualified.");
