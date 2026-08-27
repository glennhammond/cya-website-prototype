"use client";

import { useEffect } from "react";
import { PENDING_LEAD_STORAGE_KEY } from "@/lib/attribution";

export function LeadConversionSignal({ successRoute }: { successRoute: string }) {
  useEffect(() => {
    try {
      const pending = JSON.parse(
        window.sessionStorage.getItem(PENDING_LEAD_STORAGE_KEY) ?? "null",
      ) as { successRoute?: string; submissionId?: string } | null;

      if (!pending || pending.successRoute !== successRoute) return;

      window.dataLayer = window.dataLayer ?? [];
      window.dataLayer.push({
        event: "cya_lead_submission",
        form_id: "746ef219-510f-4faa-a7a3-40288155d936",
        success_route: successRoute,
        submission_id: pending.submissionId,
      });
      window.sessionStorage.removeItem(PENDING_LEAD_STORAGE_KEY);
    } catch {
      // The HubSpot submission has already succeeded; analytics must not affect UX.
    }
  }, [successRoute]);

  return null;
}
