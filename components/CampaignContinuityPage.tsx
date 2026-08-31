import {
  ProductionAction,
  ProductionCard,
  ProductionContainer,
  ProductionKicker,
} from "@/components/ProductionPrimitives";

interface CampaignContinuityPageProps {
  kicker: string;
  heading: string;
  body: string;
  benefits: readonly string[];
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CampaignContinuityPage({
  kicker,
  heading,
  body,
  benefits,
  ctaLabel = "Book a free consultation",
  ctaHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: CampaignContinuityPageProps) {
  return (
    <>
      <section className="bg-[var(--cya-surface-page)] py-16 lg:py-24">
        <ProductionContainer>
          <div className="max-w-5xl">
            <ProductionKicker>{kicker}</ProductionKicker>
            <h1 className="mt-5 max-w-4xl text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-[1.05] text-[var(--cya-teal-dark)]">
              {heading}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--cya-body)]">{body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ProductionAction href={ctaHref}>{ctaLabel}</ProductionAction>
              {secondaryLabel && secondaryHref ? (
                <ProductionAction href={secondaryHref} style="secondary">
                  {secondaryLabel}
                </ProductionAction>
              ) : null}
            </div>
          </div>
        </ProductionContainer>
      </section>

      <section className="bg-[var(--cya-surface-subtle)] py-16 lg:py-20">
        <ProductionContainer>
          <div className="max-w-6xl">
            <ProductionKicker>Designed around the workplace</ProductionKicker>
            <h2 className="mt-5 text-3xl font-bold text-[var(--cya-teal-dark)] lg:text-5xl">
              A practical fit for real workplaces
            </h2>
            <ul className="mt-10 grid gap-5 md:grid-cols-3">
              {benefits.map((benefit) => (
                <li key={benefit}>
                  <ProductionCard title={benefit} body="Corporate Yoga Australia will shape the detail around your people, timing and delivery context." />
                </li>
              ))}
            </ul>
          </div>
        </ProductionContainer>
      </section>
    </>
  );
}
