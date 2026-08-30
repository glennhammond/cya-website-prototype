import { Container, Section, Kicker } from "@/components/Primitives";
import { CtaLink } from "@/components/CtaLink";
import type { CTA } from "@/lib/types";

export function CTASection({
  kicker,
  heading,
  body,
  cta,
  secondaryCta,
}: {
  kicker: string;
  heading: string;
  body: string;
  cta: CTA;
  secondaryCta?: CTA;
}) {
  return (
    <Section tone="page">
      <Container>
        <div className="cya-panel grid gap-8 px-8 py-10 md:grid-cols-[1fr_auto] md:items-center lg:px-12">
          <div className="max-w-3xl">
            <Kicker>{kicker}</Kicker>
            <h2 className="mt-5 text-3xl font-semibold text-teal-dark lg:text-4xl">{heading}</h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-body">{body}</p>
          </div>
          <div className="cya-action-row md:justify-end">
            <CtaLink href={cta.href} variant={cta.variant ?? "primary"} external={cta.external}>
              {cta.label}
            </CtaLink>
            {secondaryCta && (
              <CtaLink href={secondaryCta.href} variant={secondaryCta.variant ?? "secondary"} external={secondaryCta.external}>
                {secondaryCta.label}
              </CtaLink>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
