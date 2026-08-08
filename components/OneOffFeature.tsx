import { Container, Section, Kicker } from "@/components/Primitives";
import { CtaLink } from "@/components/CtaLink";
import { ImageMedia } from "@/components/ImageMedia";
import type { CTA, MediaAsset } from "@/lib/types";

/**
 * Dedicated one-off-session feature (brief §11). Demonstrates value through
 * concrete formats rather than asserting "one-off sessions are valuable".
 */
export function OneOffFeature({
  kicker,
  heading,
  body,
  formats,
  cta,
  image,
}: {
  kicker: string;
  heading: string;
  body: string;
  formats: string[];
  cta: CTA;
  image: MediaAsset;
}) {
  return (
    <Section tone="white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-[320px] overflow-hidden rounded-[var(--radius-card)] lg:h-[440px]">
            <ImageMedia asset={image} treatment="bleed" sizes="(min-width: 1024px) 45vw, 100vw" />
          </div>
          <div>
            <Kicker>{kicker}</Kicker>
            <h2 className="mt-3 text-heading-lg">{heading}</h2>
            <p className="mt-4 text-lg leading-relaxed text-body">{body}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {formats.map((format) => (
                <li
                  key={format}
                  className="rounded-full border border-divider bg-mist px-4 py-1.5 text-sm font-bold text-teal-dark"
                >
                  {format}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CtaLink href={cta.href} variant="primary">
                {cta.label}
              </CtaLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
