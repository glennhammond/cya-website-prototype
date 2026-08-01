import Link from "next/link";
import { Container, Section, Kicker } from "@/components/Primitives";
import { claimGuardrails } from "@/content/site";
import type { YearMonthEntry } from "@/lib/types";

/**
 * Concise home-page stand-in for the full Example Wellbeing Year: four
 * selected quarterly moments as a plain, semantic list — not a 12-month
 * disclosure grid. The full version lives on /programs.
 */
export function YearGlance({ quarters }: { quarters: YearMonthEntry[] }) {
  return (
    <Section tone="mist" ariaLabel="Example Wellbeing Year">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Kicker>Example Wellbeing Year</Kicker>
            <h2 className="mt-3 text-[28px] sm:text-[34px]">A connected year, at a glance.</h2>
            <p className="mt-4 text-lg leading-relaxed text-body">{claimGuardrails.yearViewLabel}</p>
          </div>
          <Link
            href="/programs#example-year"
            className="text-sm font-bold text-teal-dark underline decoration-2 underline-offset-4 hover:text-teal"
          >
            See the full example year
          </Link>
        </div>

        <ol className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {quarters.map((entry) => (
            <li key={entry.month} className="border-t-2 border-gold pt-4">
              <span className="block text-xs font-bold uppercase tracking-wide text-gold">{entry.month}</span>
              <span className="mt-1 block text-lg font-bold text-teal-dark">{entry.theme}</span>
              <span className="mt-2 block text-sm leading-relaxed text-body">{entry.formats.join(" · ")}</span>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-sm text-body">
          This example does not imply a minimum commitment, price or guaranteed schedule.
        </p>
      </Container>
    </Section>
  );
}
