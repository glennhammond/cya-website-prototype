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
  approved: "bg-[var(--cya-surface-subtle)] text-[var(--cya-teal-dark)]",
  "safe-working-copy": "bg-[var(--cya-paper)] text-[var(--cya-teal-dark)]",
  "evidence-required": "bg-[var(--cya-warm-neutral)] text-[var(--cya-ochre-ink)]",
  "commercial-dependency": "bg-[var(--cya-pale-highlight)] text-[var(--cya-error)]",
  "legal-review": "bg-[var(--cya-paper)] text-[var(--cya-ink)]",
  placeholder: "bg-[var(--cya-surface-subtle)] text-[var(--cya-ink)]",
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
