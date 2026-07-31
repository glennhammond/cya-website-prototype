import { Container, Section, Kicker } from "@/components/Primitives";
import { CtaLink } from "@/components/CtaLink";
import { EvidencePlaceholder } from "@/components/EvidencePlaceholder";
import type { CTA } from "@/lib/types";

export function EditorialFeature({
  kicker,
  heading,
  body,
  cta,
  tone = "white",
  reverse = false,
  placeholderVariant = "workplace",
  placeholderCaption = "Photography placeholder.",
  children,
}: {
  kicker: string;
  heading: string;
  body: string;
  cta?: CTA;
  tone?: "white" | "mist";
  reverse?: boolean;
  placeholderVariant?: "movement" | "conference" | "studio" | "workplace" | "portrait" | "gathering";
  placeholderCaption?: string;
  children?: React.ReactNode;
}) {
  return (
    <Section tone={tone}>
      <Container>
        <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div>
            <Kicker>{kicker}</Kicker>
            <h2 className="mt-3 text-[28px] sm:text-[34px]">{heading}</h2>
            <p className="mt-4 text-lg leading-relaxed text-body">{body}</p>
            {children}
            {cta && (
              <div className="mt-6">
                <CtaLink href={cta.href} variant={cta.variant ?? "secondary"}>
                  {cta.label}
                </CtaLink>
              </div>
            )}
          </div>
          <EvidencePlaceholder variant={placeholderVariant} caption={placeholderCaption} aspect="4/3" />
        </div>
      </Container>
    </Section>
  );
}
