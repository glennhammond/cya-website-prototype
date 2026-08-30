"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { AttributionCapture } from "@/components/AttributionCapture";
import {
  ANALYTICS_PREFERENCES_EVENT,
  readAnalyticsConsent,
  writeAnalyticsConsent,
  type AnalyticsConsent,
} from "@/lib/analytics-consent";

export function AnalyticsConsentManager({ enabled }: { enabled: boolean }) {
  const [consent, setConsent] = useState<AnalyticsConsent | null>(null);
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    const initialisePreferences = window.setTimeout(() => {
      const stored = readAnalyticsConsent();
      setConsent(stored);
      setShowPanel(enabled && stored === null);
    }, 0);

    const openPreferences = () => {
      if (enabled) setShowPanel(true);
    };
    window.addEventListener(ANALYTICS_PREFERENCES_EVENT, openPreferences);
    return () => {
      window.clearTimeout(initialisePreferences);
      window.removeEventListener(ANALYTICS_PREFERENCES_EVENT, openPreferences);
    };
  }, [enabled]);

  function choose(value: AnalyticsConsent) {
    writeAnalyticsConsent(value);
    setConsent(value);
    setShowPanel(false);
  }

  return (
    <>
      {enabled && consent === "granted" ? (
        <>
          <GoogleTagManager gtmId="GTM-PXV5ZCLG" />
          <GoogleAnalytics gaId="G-7GY152D942" />
          <AttributionCapture />
        </>
      ) : null}

      {enabled && showPanel ? (
        <aside
          role="dialog"
          aria-labelledby="analytics-preferences-title"
          aria-describedby="analytics-preferences-description"
          className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl border border-[var(--cya-divider)] bg-white p-5 shadow-2xl sm:p-6"
        >
          <h2 id="analytics-preferences-title" className="text-xl font-bold text-[var(--cya-teal-dark)]">
            Analytics preferences
          </h2>
          <p id="analytics-preferences-description" className="mt-2 max-w-2xl text-sm leading-6 text-[var(--cya-body)]">
            We use Google analytics tools to understand how the website is used and how people find it. These tools stay off unless you allow analytics. Essential website functions remain available either way.
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--cya-body)]">
            See the <Link href="/privacy-policy" className="font-semibold underline underline-offset-4">Privacy Policy</Link> for the current review position.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => choose("granted")}
              className="min-h-12 rounded-[4px] bg-[var(--cya-teal)] px-6 text-sm font-bold text-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--cya-teal-dark)]"
            >
              Allow analytics
            </button>
            <button
              type="button"
              onClick={() => choose("denied")}
              className="min-h-12 rounded-[4px] border border-[var(--cya-divider)] bg-white px-6 text-sm font-bold text-[var(--cya-teal-dark)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--cya-teal-dark)]"
            >
              Essential only
            </button>
          </div>
        </aside>
      ) : null}
    </>
  );
}
