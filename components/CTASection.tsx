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
    <Section tone="mist">
      <Container className="studio-panel text-center">
        <div className="mx-auto max-w-2xl">
          <Kicker>{kicker}</Kicker>
          <h2 className="mt-3 text-heading-lg">{heading}</h2>
          <p className="mt-4 text-lg leading-relaxed text-body">{body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
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
