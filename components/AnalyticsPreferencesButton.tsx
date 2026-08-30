"use client";

import { ANALYTICS_PREFERENCES_EVENT } from "@/lib/analytics-consent";

export function AnalyticsPreferencesButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(ANALYTICS_PREFERENCES_EVENT))}
      className="text-left text-sm text-white/85 underline-offset-4 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
    >
      Analytics preferences
    </button>
  );
}
