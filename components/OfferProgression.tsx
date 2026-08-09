import { Container, Section, Kicker } from "@/components/Primitives";
import type { OfferLevel } from "@/lib/types";

/**
 * A connected sequence rather than a card grid: one horizontal (desktop) or
 * vertical (mobile) line with numbered nodes. Typography and spacing carry
 * the hierarchy - no borders or card backgrounds per node.
 */
export function OfferProgression({
  kicker,
  heading,
  body,
  levels,
}: {
  kicker: string;
  heading: string;
  body: string;
  levels: OfferLevel[];
}) {
  return (
    <Section tone="mist">
      <Container className="studio-panel">
        <div className="max-w-2xl">
          <Kicker>{kicker}</Kicker>
          <h2 className="mt-3 text-heading-lg">{heading}</h2>
          <p className="mt-4 text-lg leading-relaxed text-body">{body}</p>
        </div>

        <ol className="relative mt-14 sm:grid sm:grid-cols-4 sm:gap-8">
          <div
            aria-hidden="true"
            className="absolute top-4 right-0 left-0 hidden h-px bg-divider sm:block"
          />
          {levels.map((level, index) => (
            <li key={level.title} className="relative pb-10 pl-12 last:pb-0 sm:pb-0 sm:pl-0">
              {index > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute top-2 bottom-2 left-4 w-px bg-divider sm:hidden"
                />
              )}
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gold bg-white text-sm font-bold text-teal-dark sm:static sm:mb-4"
              >
                {index + 1}
              </span>
              <h3 className="text-heading-sm text-teal-dark">{level.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{level.description}</p>
            </li>
          ))}
        </ol>

        <p className="mt-10 max-w-2xl text-sm text-body">
          This is optional progression, not a compulsory sales ladder. One-off sessions are legitimate offers in their own right.
        </p>
      </Container>
    </Section>
  );
}
