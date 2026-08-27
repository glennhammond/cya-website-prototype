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
};

