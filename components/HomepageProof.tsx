import Image from "next/image";
import { ProductionContainer, ProductionKicker } from "@/components/ProductionPrimitives";

const proofPoints = [
  {
    label: "National delivery",
    body: "Onsite in major Australian cities and online wherever teams work.",
  },
  {
    label: "One-off to ongoing",
    body: "From a single session or event to a recurring workplace wellbeing program.",
  },
  {
    label: "Planned around the workplace",
    body: "Facilitator, format and practical delivery shaped around the people, setting and purpose.",
  },
] as const;

export function HomepageProof() {
  return (
    <section aria-labelledby="homepage-proof-heading" className="bg-[var(--cya-surface-base)] py-20 lg:py-24">
      <ProductionContainer>
        <div className="max-w-5xl">
          <ProductionKicker>Workplace experience since 2014</ProductionKicker>
          <h2 id="homepage-proof-heading" className="mt-5 text-4xl font-bold tracking-[-0.015em] lg:text-5xl">
            Real workplaces. Practical wellbeing. Built around working life.
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-[var(--cya-body)]">
            Corporate Yoga Australia plans and delivers workplace yoga, Pilates, mindfulness, workshops and wellbeing programs for Australian organisations — onsite, online and across multiple locations.
          </p>
        </div>

        <div className="mt-12 grid border border-[var(--cya-divider)] lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)]">
          <figure className="relative aspect-[4/3] overflow-hidden bg-[var(--cya-surface-page)] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[30rem]">
            <Image
              src="/images/selected/cya-proof-hero-group-practice.webp"
              alt="A Corporate Yoga Australia facilitator guides a group through a shared movement practice."
              fill
              sizes="(min-width: 1280px) 720px, (min-width: 1024px) 58vw, 100vw"
              className="object-cover object-center"
            />
          </figure>

          <div className="bg-[var(--cya-surface-warm)] px-7 py-9 sm:px-10 sm:py-11 lg:border-l lg:border-[var(--cya-divider)] lg:px-12 lg:py-14">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--cya-ochre-ink)]">
              Our approach in practice
            </p>
            <dl className="mt-8 border-t border-[var(--cya-mid-neutral)]/50">
              {proofPoints.map((point) => (
                <div key={point.label} className="border-b border-[var(--cya-mid-neutral)]/50 py-6">
                  <dt className="text-xl font-bold leading-snug text-[var(--cya-teal-dark)] sm:text-2xl">{point.label}</dt>
                  <dd className="mt-2 leading-7 text-[var(--cya-body)]">{point.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </ProductionContainer>
    </section>
  );
}
