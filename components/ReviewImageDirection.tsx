interface ReviewImageDirectionProps {
  id: string;
  job: "Context" | "Participation" | "Human trust" | "Evidence";
  subject: string;
  treatment: string;
  format: string;
  avoid: string;
  candidate?: string;
}

function reviewBriefsEnabled() {
  return (
    process.env.CYA_REVIEW_IMAGE_BRIEFS === "true" ||
    process.env.VERCEL_ENV === "preview"
  );
}

/**
 * Review-only image direction. Vercel previews display the brief automatically;
 * production builds omit the entire slot until an approved image replaces it.
 */
export function ReviewImageDirection({
  id,
  job,
  subject,
  treatment,
  format,
  avoid,
  candidate,
}: ReviewImageDirectionProps) {
  if (!reviewBriefsEnabled()) return null;

  return (
    <section
      aria-label={`Review-only image direction: ${id}`}
      className="border-y border-[var(--cya-divider)] bg-[var(--cya-canvas)] py-10 lg:py-12"
      data-review-only="image-direction"
    >
      <div className="mx-auto grid w-full max-w-[1280px] gap-7 px-6 sm:px-10 lg:grid-cols-[1.35fr_1fr] lg:px-12">
        <div className="flex min-h-[300px] items-center justify-center border border-dashed border-[var(--cya-body)] bg-[var(--cya-paper)] px-8 text-center lg:min-h-[390px]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--cya-body)]">
              Review-only image position
            </p>
            <p className="mt-3 text-2xl font-semibold text-[var(--cya-teal-dark)]">{id}</p>
            <p className="mt-2 text-sm text-[var(--cya-body)]">{format}</p>
          </div>
        </div>
        <div className="self-center border-l-4 border-[var(--cya-ochre)] bg-white px-6 py-6">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--cya-ochre-ink)]">
            Recommended image direction
          </p>
          <dl className="mt-5 space-y-4 text-sm leading-6">
            <div><dt className="font-semibold text-[var(--cya-teal-dark)]">Job</dt><dd className="text-[var(--cya-body)]">{job}</dd></div>
            <div><dt className="font-semibold text-[var(--cya-teal-dark)]">Show</dt><dd className="text-[var(--cya-body)]">{subject}</dd></div>
            <div><dt className="font-semibold text-[var(--cya-teal-dark)]">Treatment</dt><dd className="text-[var(--cya-body)]">{treatment}</dd></div>
            <div><dt className="font-semibold text-[var(--cya-teal-dark)]">Avoid</dt><dd className="text-[var(--cya-body)]">{avoid}</dd></div>
            {candidate && <div><dt className="font-semibold text-[var(--cya-teal-dark)]">Current candidate to review</dt><dd className="break-all text-[var(--cya-body)]">{candidate}</dd></div>}
          </dl>
        </div>
      </div>
    </section>
  );
}
