import type { MediaAsset } from "@/lib/types";
import { ProductionAction, ProductionCard, ProductionClosing, ProductionContainer, ProductionKicker } from "@/components/ProductionPrimitives";
import { ReviewImageDirection } from "@/components/ReviewImageDirection";

type ServiceCard = { title: string; body: string; href?: string };

export function SpecialistServiceProduction({
  kicker,
  heading,
  body,
  primaryAction,
  image,
  imageLabel,
  imageBrief,
  evidenceLine,
  firstKicker,
  firstHeading,
  firstBody,
  firstCards,
  secondKicker,
  secondHeading,
  secondCards,
  closingHeading,
  closingBody,
}: {
  kicker: string;
  heading: string;
  body: string;
  primaryAction: { label: string; href: string };
  image: MediaAsset;
  imageLabel: string;
  imageBrief: {
    job: "Context" | "Participation" | "Human trust" | "Evidence";
    subject: string;
    treatment: string;
    format: string;
    avoid: string;
  };
  evidenceLine: string;
  firstKicker: string;
  firstHeading: string;
  firstBody?: string;
  firstCards: ServiceCard[];
  secondKicker: string;
  secondHeading: string;
  secondCards: ServiceCard[];
  closingHeading: string;
  closingBody: string;
}) {
  return (
    <>
      <section className="cya-page-hero">
        <ProductionContainer>
          <ProductionKicker>{kicker}</ProductionKicker>
          <h1 className="cya-page-title mt-5">{heading}</h1>
          <p className="cya-lead mt-6">{body}</p>
          <div className="cya-action-row mt-8"><ProductionAction href={primaryAction.href}>{primaryAction.label}</ProductionAction><ProductionAction href="/movement" style="secondary">Compare movement options</ProductionAction></div>
          <p className="cya-reading-surface mt-8 max-w-3xl px-5 py-4 text-sm font-medium text-[var(--cya-teal-dark)]">{evidenceLine}</p>
        </ProductionContainer>
      </section>

      <ReviewImageDirection id={imageLabel} {...imageBrief} candidate={image.src} />

      <section className="cya-section bg-[var(--cya-surface-subtle)]">
        <ProductionContainer>
          <ProductionKicker>{firstKicker}</ProductionKicker>
          <h2 className="cya-section-title mt-5">{firstHeading}</h2>
          {firstBody && <p className="cya-lead mt-5 max-w-4xl">{firstBody}</p>}
          <div className={`mt-10 grid gap-5 ${firstCards.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"}`}>
            {firstCards.map((card) => <ProductionCard key={card.title} {...card} />)}
          </div>
        </ProductionContainer>
      </section>

      <section className="cya-section bg-[var(--cya-surface-page)]">
        <ProductionContainer>
          <ProductionKicker>{secondKicker}</ProductionKicker>
          <h2 className="cya-section-title mt-5">{secondHeading}</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {secondCards.map((card) => <ProductionCard key={card.title} {...card} tone="paper" />)}
          </div>
        </ProductionContainer>
      </section>
      <ProductionClosing heading={closingHeading} body={closingBody} href={primaryAction.href} action={primaryAction.label} />
    </>
  );
}
