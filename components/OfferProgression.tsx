import { Container, Section, Kicker } from "@/components/Primitives";
import type { OfferLevel } from "@/lib/types";

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
    <Section tone="white">
      <Container>
        <div className="max-w-2xl">
          <Kicker>{kicker}</Kicker>
          <h2 className="mt-3 text-[28px] sm:text-[34px]">{heading}</h2>
          <p className="mt-4 text-lg leading-relaxed text-body">{body}</p>
        </div>
        <ol className="mt-10 grid gap-0 overflow-hidden rounded-[var(--radius-card)] border border-divider sm:grid-cols-2 lg:grid-cols-4">
          {levels.map((level, index) => (
            <li
              key={level.title}
              className={`flex flex-col gap-3 p-6 ${index > 0 ? "border-t border-divider sm:border-t-0 sm:border-l" : ""} ${index === 2 ? "sm:border-t sm:border-l lg:border-t-0" : ""}`}
            >
              <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-full bg-mist text-sm font-bold text-teal-dark">
                {index + 1}
              </span>
              <h3 className="text-lg text-teal-dark">{level.title}</h3>
              <p className="text-sm leading-relaxed text-body">{level.description}</p>
              <p className="mt-auto text-xs font-semibold uppercase tracking-wide text-body/70">
                Proof needed: {level.proofNeed}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-2xl text-sm text-body">
          This is optional progression, not a compulsory sales ladder. One-off sessions are legitimate offers in their own right.
        </p>
      </Container>
    </Section>
  );
}
