import { Container, Section, Kicker } from "@/components/Primitives";
import { claimGuardrails } from "@/content/site";
import type { YearMonthEntry } from "@/lib/types";

/**
 * Built as native <details>/<summary> disclosures: keyboard-operable and fully
 * functional with no JavaScript (Docs build prompt, "Make it keyboard
 * accessible and provide a static fallback").
 */
export function ExampleYearView({ months }: { months: YearMonthEntry[] }) {
  return (
    <Section tone="mist" ariaLabel="Example Wellbeing Year" id="example-year">
      <Container>
        <div className="max-w-2xl">
          <Kicker>Example Wellbeing Year</Kicker>
          <h2 className="mt-3 text-[28px] sm:text-[34px]">Explore an example year in action.</h2>
          <p className="mt-4 text-lg leading-relaxed text-body">{claimGuardrails.yearViewLabel}</p>
        </div>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {months.map((entry) => (
            <li key={entry.month}>
              <details className="group h-full rounded-[var(--radius-card)] border border-divider bg-white open:shadow-[var(--shadow-card)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-[var(--radius-card)] px-5 py-4 [&::-webkit-details-marker]:hidden">
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wide text-gold">{entry.month}</span>
                    <span className="mt-1 block text-base font-bold text-teal-dark">{entry.theme}</span>
                  </span>
                  <span aria-hidden="true" className="text-body transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="border-t border-divider px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-body/70">Illustrative formats</p>
                  <ul className="mt-2 space-y-1 text-sm text-body">
                    {entry.formats.map((format) => (
                      <li key={format}>{format}</li>
                    ))}
                  </ul>
                </div>
              </details>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-body">
          This example does not imply a minimum commitment, price or guaranteed schedule.
        </p>
      </Container>
    </Section>
  );
}
