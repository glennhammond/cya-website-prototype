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
  heroTone = "paper",
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
  heroTone?: "paper" | "field" | "white";
}) {
  const heroSurface = heroTone === "field" ? "bg-[var(--cya-field-note)]" : heroTone === "white" ? "bg-white" : "bg-[var(--cya-paper)]";
  return (
    <>
      <section className={`${heroSurface} py-16 lg:py-20`}>
        <ProductionContainer>
          <ProductionKicker>{kicker}</ProductionKicker>
          <h1 className="mt-5 max-w-5xl text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em]">{heading}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--cya-body)]">{body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><ProductionAction href={primaryAction.href}>{primaryAction.label}</ProductionAction><ProductionAction href="/movement" style="secondary">Compare movement options</ProductionAction></div>
          <p className="mt-8 border border-[var(--cya-divider)] bg-white px-5 py-4 text-sm font-medium text-[var(--cya-teal-dark)]">{evidenceLine}</p>
        </ProductionContainer>
      </section>

      <ReviewImageDirection id={imageLabel} {...imageBrief} candidate={image.src} />

      <section className="bg-[var(--cya-field-note)] py-20 lg:py-24">
        <ProductionContainer>
          <ProductionKicker>{firstKicker}</ProductionKicker>
          <h2 className="mt-5 max-w-5xl text-4xl font-bold lg:text-5xl">{firstHeading}</h2>
          {firstBody && <p className="mt-5 max-w-4xl text-lg leading-8 text-[var(--cya-body)]">{firstBody}</p>}
          <div className={`mt-10 grid gap-5 ${firstCards.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"}`}>
            {firstCards.map((card) => <ProductionCard key={card.title} {...card} />)}
          </div>
        </ProductionContainer>
      </section>

      <section className="bg-[var(--cya-canvas)] py-20 lg:py-24">
        <ProductionContainer>
          <ProductionKicker>{secondKicker}</ProductionKicker>
          <h2 className="mt-5 max-w-5xl text-4xl font-bold lg:text-5xl">{secondHeading}</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {secondCards.map((card) => <ProductionCard key={card.title} {...card} tone="paper" />)}
          </div>
        </ProductionContainer>
      </section>
      <ProductionClosing tone="teal" heading={closingHeading} body={closingBody} href={primaryAction.href} action={primaryAction.label} />
    </>
  );
}
