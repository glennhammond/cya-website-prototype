import { spawn } from "node:child_process";
import path from "node:path";

const root = process.cwd();
const host = "127.0.0.1";
const port = 3101;
const baseUrl = `http://${host}:${port}`;
const checks = [];
const errors = [];
let serverLog = "";

function check(condition, message) {
  checks.push(message);
  if (!condition) errors.push(message);
}

function hasNoindex(html) {
  return /<meta[^>]+(?:name="robots"[^>]+content="[^"]*noindex|content="[^"]*noindex[^>]+name="robots")/i.test(html);
}

async function request(pathname) {
  return fetch(`${baseUrl}${pathname}`, { redirect: "manual", headers: { "user-agent": "CYA-Phase-16-QA" } });
}

async function waitForServer(timeoutMs = 30_000) {
  const startedAt = Date.now();
  while (Date.now() - startedAt < timeoutMs) {
    try {
      if ((await request("/")).status === 200) return;
    } catch {
      // Production server is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 300));
  }
  throw new Error(`Next production server did not become ready within ${timeoutMs}ms.`);
}

const nextBin = path.join(root, "node_modules", "next", "dist", "bin", "next");
const server = spawn(process.execPath, [nextBin, "start", "-H", host, "-p", String(port)], {
  cwd: root,
  env: { ...process.env, NODE_ENV: "production", VERCEL_ENV: "production" },
  stdio: ["ignore", "pipe", "pipe"],
});

for (const stream of [server.stdout, server.stderr]) {
  stream.on("data", (chunk) => {
    serverLog += chunk.toString();
    if (serverLog.length > 8_000) serverLog = serverLog.slice(-8_000);
  });
}

try {
  await waitForServer();

  const programsResponse = await request("/workplace-wellbeing-programs");
  const programsHtml = await programsResponse.text();
  check(programsResponse.status === 200, "program commercial owner renders successfully");
  check(programsHtml.includes("Designed for participation"), "program owner renders the participation answer module");
  check(programsHtml.includes("Wellbeing Champion"), "program owner renders the bounded Champion role");
  check(programsHtml.includes("do not replace identifying and controlling psychosocial hazards"), "program owner renders the psychosocial scope boundary");
  check(programsHtml.includes("Read the participation guide"), "program owner links to the supporting participation guide");
  check(hasNoindex(programsHtml), "program owner remains fail-closed before release approval");

  const guidePath = "/blog/the-nervous-system-solution-why-your-wellbeing-program-isnt-working-and-what-to-do-instead";
  const guideResponse = await request(guidePath);
  const guideHtml = await guideResponse.text();
  check(guideResponse.status === 200, "program-engagement guide renders successfully");
  check(guideHtml.includes("Keep wellbeing activity and psychosocial risk management distinct"), "guide renders the psychosocial boundary section");
  check(guideHtml.includes("must not be presented as the control for the hazard"), "guide rejects activity-as-control framing");
  check(guideHtml.includes("Sources and scope"), "guide renders its source note");
  check(guideHtml.includes("Workplace Health and Safety Queensland"), "guide renders Queensland primary authority");
  check(guideHtml.includes("Safe Work Australia"), "guide renders national primary authority");
  check(guideHtml.includes("Editorial production:"), "guide distinguishes editorial production from authorship");
  check(guideHtml.includes('&quot;editor&quot;:{&quot;@type&quot;:&quot;Person&quot;,&quot;name&quot;:&quot;Glenn Hammond&quot;}') || guideHtml.includes('"editor":{"@type":"Person","name":"Glenn Hammond"}'), "Article schema identifies Glenn only as editor");
  check(!guideHtml.includes('"reviewedBy"'), "Article schema does not invent an expert reviewer");
  check(hasNoindex(guideHtml), "protected guide remains fail-closed before release approval");

  const championResponse = await request("/wellbeing-champion");
  check(championResponse.status === 404, "no premature Wellbeing Champion landing page is public");

  console.log(`\nCYA Search Visibility Evidence, Answers & Corroboration 02 rendered QA: ${checks.length} checks`);
  if (errors.length > 0) {
    console.error(`\nFAIL (${errors.length} issue${errors.length === 1 ? "" : "s"}):`);
    for (const error of errors) console.error(`- ${error}`);
    process.exitCode = 1;
  } else {
    console.log("PASS: program scope, source-backed guidance, truthful attribution and the Champion publication gate render correctly.");
  }
} catch (error) {
  console.error(error instanceof Error ? error.stack : String(error));
  if (serverLog.trim()) console.error(`\nServer output:\n${serverLog}`);
  process.exitCode = 1;
} finally {
  server.kill("SIGTERM");
  await new Promise((resolve) => {
    if (server.exitCode !== null) return resolve();
    server.once("exit", resolve);
    setTimeout(() => {
      if (server.exitCode === null) server.kill("SIGKILL");
      resolve();
    }, 5_000).unref();
  });
}
