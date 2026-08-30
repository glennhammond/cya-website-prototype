export const ANALYTICS_CONSENT_STORAGE_KEY = "cya_analytics_consent_v1";
export const ANALYTICS_PREFERENCES_EVENT = "cya:analytics-preferences";
export const ANALYTICS_CONSENT_CHANGED_EVENT = "cya:analytics-consent-changed";

export type AnalyticsConsent = "granted" | "denied";

export function readAnalyticsConsent(): AnalyticsConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY);
    return stored === "granted" || stored === "denied" ? stored : null;
  } catch {
    return null;
  }
}

export function writeAnalyticsConsent(value: AnalyticsConsent) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, value);
    window.dispatchEvent(new Event(ANALYTICS_CONSENT_CHANGED_EVENT));
  } catch {
    // Storage restrictions must not block the site.
  }
}

export function subscribeAnalyticsConsent(listener: () => void) {
  if (typeof window === "undefined") return () => {};

  const handleStorage = (event: StorageEvent) => {
    if (!event.key || event.key === ANALYTICS_CONSENT_STORAGE_KEY) listener();
  };
  const handleLocalChange = () => listener();

  window.addEventListener("storage", handleStorage);
  window.addEventListener(ANALYTICS_CONSENT_CHANGED_EVENT, handleLocalChange);
  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(ANALYTICS_CONSENT_CHANGED_EVENT, handleLocalChange);
  };
}
