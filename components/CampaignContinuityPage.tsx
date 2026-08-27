import { Container, Kicker, Section } from "@/components/Primitives";
import { CtaLink } from "@/components/CtaLink";

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
      <Section tone="white">
        <Container>
          <div className="mx-auto max-w-4xl py-8 sm:py-14">
            <Kicker>{kicker}</Kicker>
            <h1 className="mt-5 max-w-3xl text-[40px] sm:text-[56px]">{heading}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body">{body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink href={ctaHref}>{ctaLabel}</CtaLink>
              {secondaryLabel && secondaryHref ? (
                <CtaLink href={secondaryHref} variant="secondary">
                  {secondaryLabel}
                </CtaLink>
              ) : null}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="mist">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl">A practical fit for real workplaces</h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="rounded-[var(--radius-card)] border border-divider bg-white p-6 text-base leading-relaxed text-body shadow-[var(--cya-shadow-card)]"
                >
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
