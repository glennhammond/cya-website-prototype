import type { CaseStudy } from "@/lib/types";

const VARIANT_BY_ROLE = {
  "flagship-partnership": "workplace",
  "distributed-delivery": "conference",
  "smaller-organisation": "gathering",
  "one-off-event": "movement",
} as const;

/**
 * Summary card for a publishable case study. Phase 11.4 does not yet expose
 * individual case-study detail routes, so this deliberately renders as an
 * article rather than linking to a retired prototype detail route.
 */
export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const variant = VARIANT_BY_ROLE[study.storyRole];
  return (
    <article className="cya-card flex h-full flex-col overflow-hidden">
      <div className="relative flex h-36 items-center justify-center bg-mist">
        <svg viewBox="0 0 100 60" aria-hidden="true" className="h-16 w-28 text-teal opacity-70">
          {VariantMark(variant)}
        </svg>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <p className="text-xs font-bold uppercase tracking-wide text-ochre-ink">{study.clientLabel}</p>
        <h3 className="text-heading-sm text-teal-dark">{study.headline}</h3>
        <p className="flex-1 text-sm leading-relaxed text-body">{study.summary}</p>
        <p className="mt-2 text-xs font-bold uppercase tracking-[0.08em] text-body">Published case study</p>
      </div>
    </article>
  );
}

function VariantMark(variant: (typeof VARIANT_BY_ROLE)[keyof typeof VARIANT_BY_ROLE]) {
  if (variant === "conference") {
    return (
      <>
        <rect x="5" y="10" width="90" height="8" rx="3" fill="currentColor" />
        <rect x="5" y="26" width="70" height="8" rx="3" fill="currentColor" opacity="0.6" />
        <rect x="5" y="42" width="50" height="8" rx="3" fill="currentColor" opacity="0.35" />
      </>
    );
  }
  if (variant === "gathering") {
    return (
      <>
        <circle cx="25" cy="30" r="16" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="55" cy="30" r="16" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="85" cy="30" r="16" fill="none" stroke="currentColor" strokeWidth="3" />
      </>
    );
  }
  if (variant === "movement") {
    return <path d="M0 45 C 25 15, 55 55, 100 15" stroke="currentColor" strokeWidth="3" fill="none" />;
  }
  return (
    <>
      <rect x="10" y="30" width="14" height="25" fill="currentColor" opacity="0.4" />
      <rect x="35" y="15" width="14" height="40" fill="currentColor" opacity="0.7" />
      <rect x="60" y="25" width="14" height="30" fill="currentColor" />
      <rect x="85" y="5" width="10" height="50" fill="currentColor" opacity="0.5" />
    </>
  );
}
