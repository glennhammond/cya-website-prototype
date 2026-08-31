export const ATTRIBUTION_STORAGE_KEY = "cya_attribution_v1";
export const PENDING_LEAD_STORAGE_KEY = "cya_pending_lead_v1";

export const ATTRIBUTION_KEYS = [
  "gclid",
  "gbraid",
  "wbraid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export type AttributionKey = (typeof ATTRIBUTION_KEYS)[number];
export type AttributionData = Partial<Record<AttributionKey, string>> & {
  landingPage?: string;
  capturedAt?: string;
  initialReferrer?: string;
  discoveryChannel?: string;
  discoverySource?: string;
};

const AI_REFERRERS: Record<string, string> = {
  "chatgpt.com": "ChatGPT",
  "www.chatgpt.com": "ChatGPT",
  "perplexity.ai": "Perplexity",
  "www.perplexity.ai": "Perplexity",
  "claude.ai": "Claude",
  "gemini.google.com": "Google Gemini",
  "copilot.microsoft.com": "Microsoft Copilot",
};

export function classifyDiscovery(
  referrer: string,
  utmSource?: string,
): Pick<AttributionData, "discoveryChannel" | "discoverySource"> {
  if (utmSource?.toLowerCase() === "chatgpt.com") {
    return { discoveryChannel: "ai-search", discoverySource: "ChatGPT" };
  }

  if (!referrer) return {};

  try {
    const hostname = new URL(referrer).hostname.toLowerCase();
    const aiSource = AI_REFERRERS[hostname];
    if (aiSource) {
      return { discoveryChannel: "ai-search", discoverySource: aiSource };
    }
  } catch {
    return {};
  }

  return {};
}
