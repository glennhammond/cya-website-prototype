"use client";

import { useEffect } from "react";
import {
  ATTRIBUTION_KEYS,
  ATTRIBUTION_STORAGE_KEY,
  type AttributionData,
} from "@/lib/attribution";

export function AttributionCapture() {
  useEffect(() => {
    try {
      const existing = JSON.parse(
        window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY) ?? "{}",
      ) as AttributionData;
      const search = new URLSearchParams(window.location.search);
      const captured: AttributionData = { ...existing };

      for (const key of ATTRIBUTION_KEYS) {
        const value = search.get(key)?.trim();
        if (value) captured[key] = value.slice(0, 500);
      }

      if (!captured.landingPage) captured.landingPage = window.location.href.slice(0, 2000);
      if (!captured.capturedAt) captured.capturedAt = new Date().toISOString();
      window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(captured));
    } catch {
      // Attribution is supplementary; storage restrictions must never block the site.
    }
  }, []);

  return null;
}

