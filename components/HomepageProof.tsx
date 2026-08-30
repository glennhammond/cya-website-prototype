import Image from "next/image";
import { ProductionContainer, ProductionKicker } from "@/components/ProductionPrimitives";

const organisations = ["Cromwell Property Group", "Hostplus", "Shell Energy", "Link-Up (Qld)"] as const;

const proofPoints = [
  {
    label: "Since 2014",
    body: "More than a decade of workplace wellbeing delivery.",
  },
  {
    label: "National reach",
    body: "In-person delivery in established capital-city locations, with online support available more broadly.",
  },
  {
    label: "Flexible scope",
    body: "One session, an event or an ongoing program shaped around the workplace.",
  },
] as const;

export function HomepageProof() {
  return (
    <section aria-labelledby="homepage-proof-heading" className="bg-[var(--cya-surface-base)] py-20 lg:py-24">
      <ProductionContainer>
        <div className="max-w-5xl">
          <ProductionKicker>Proven in real workplaces</ProductionKicker>
          <h2 id="homepage-proof-heading" className="mt-5 text-4xl font-bold tracking-[-0.015em] lg:text-5xl">
            Real workplaces. Practical wellbeing. More than a decade of delivery.
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-[var(--cya-body)]">
            Since 2014, Corporate Yoga Australia has helped organisations bring practical movement, mindfulness, workshops and wider wellbeing experiences into working life — onsite, online and across locations.
          </p>
        </div>

        <div className="mt-12 grid border border-[var(--cya-divider)] lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)]">
          <figure className="relative aspect-[4/3] overflow-hidden bg-[var(--cya-surface-page)] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[30rem]">
            <Image
              src="/images/selected/cya-proof-hero-group-practice.webp"
              alt="A CYA facilitator guides a group through a shared movement practice."
              fill
              sizes="(min-width: 1280px) 720px, (min-width: 1024px) 58vw, 100vw"
              className="object-cover object-center"
            />
          </figure>

          <div className="bg-[var(--cya-surface-warm)] px-7 py-9 sm:px-10 sm:py-11 lg:border-l lg:border-[var(--cya-divider)] lg:px-12 lg:py-14">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--cya-ochre-ink)]">
              Organisations CYA has supported
            </p>
            <ul className="mt-8 border-t border-[var(--cya-mid-neutral)]/50">
              {organisations.map((organisation) => (
                <li
                  key={organisation}
                  className="border-b border-[var(--cya-mid-neutral)]/50 py-5 text-xl font-semibold leading-snug text-[var(--cya-teal-dark)] sm:text-2xl"
                >
                  {organisation}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <dl className="grid border-x border-b border-[var(--cya-divider)] md:grid-cols-3">
          {proofPoints.map((point, index) => (
            <div
              key={point.label}
              className={"bg-[var(--cya-surface-page)] px-7 py-8 sm:px-9 " + (index > 0 ? "border-t border-[var(--cya-divider)] md:border-l md:border-t-0" : "")}
            >
              <dt className="text-xl font-bold text-[var(--cya-teal-dark)]">{point.label}</dt>
              <dd className="mt-2 leading-7 text-[var(--cya-body)]">{point.body}</dd>
            </div>
          ))}
        </dl>
      </ProductionContainer>
    </section>
  );
}
