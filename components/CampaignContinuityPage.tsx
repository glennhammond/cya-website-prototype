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
      <section className="cya-page-hero">
        <ProductionContainer>
          <div className="max-w-5xl">
            <ProductionKicker>{kicker}</ProductionKicker>
            <h1 className="cya-page-title mt-5">
              {heading}
            </h1>
            <p className="cya-lead mt-6">{body}</p>
            <div className="cya-action-row mt-8">
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

      <section className="cya-section bg-[var(--cya-surface-subtle)]">
        <ProductionContainer>
          <div className="max-w-6xl">
            <ProductionKicker>Designed around the workplace</ProductionKicker>
            <h2 className="cya-section-title mt-5">
              A practical fit for real workplaces
            </h2>
            <ul className="mt-10 grid gap-5 md:grid-cols-3">
              {benefits.map((benefit) => (
                <li key={benefit}>
                  <ProductionCard title={benefit} body="CYA will shape the detail around your people, timing and delivery context." />
                </li>
              ))}
            </ul>
          </div>
        </ProductionContainer>
      </section>
    </>
  );
}
