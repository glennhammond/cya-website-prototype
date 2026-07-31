"use client";

import { useAnnotation } from "@/lib/annotation";
import type { EvidenceStatus } from "@/lib/types";

const STATUS_LABEL: Record<EvidenceStatus, string> = {
  approved: "Approved",
  "safe-working-copy": "Safe working copy",
  "evidence-required": "Evidence required",
  "commercial-dependency": "Commercial dependency",
  "legal-review": "Legal review",
  placeholder: "Placeholder",
};

const STATUS_CLASS: Record<EvidenceStatus, string> = {
  approved: "bg-[#DCEFE3] text-[#1E5B3A]",
  "safe-working-copy": "bg-[#E3EEF6] text-[#1E4E75]",
  "evidence-required": "bg-[#FBE9D6] text-[#8A5A1E]",
  "commercial-dependency": "bg-[#F3E4E4] text-[#7A2E2E]",
  "legal-review": "bg-[#F1E4F3] text-[#6A2E75]",
  placeholder: "bg-[#E9E9E9] text-[#4A4A4A]",
};

export function EvidenceBadge({ status, note }: { status: EvidenceStatus; note?: string }) {
  const { enabled } = useAnnotation();
  if (!enabled) return null;
  return (
    <span
      title={note}
      className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${STATUS_CLASS[status]}`}
    >
      {STATUS_LABEL[status]}
    </span>
  );
}

export function AnnotationToggle() {
  const { available, enabled, toggle } = useAnnotation();
  if (!available) return null;
  return (
    <button
      type="button"
      onClick={toggle}
      className="fixed bottom-4 right-4 z-50 min-h-11 rounded-full border border-divider bg-white px-4 text-xs font-bold uppercase tracking-wide text-teal-dark shadow-[var(--shadow-card)]"
    >
      {enabled ? "Hide evidence status" : "Show evidence status"}
    </button>
  );
}
