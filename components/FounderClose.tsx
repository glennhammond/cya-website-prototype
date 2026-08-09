import { Container, Section, Kicker } from "@/components/Primitives";
import { CtaLink } from "@/components/CtaLink";
import { ImageMedia } from "@/components/ImageMedia";
import type { CTA, MediaAsset } from "@/lib/types";

/**
 * Leadership / CYA perspective. Deliberately quieter than the hero it
 * bookends the page with: the portrait sits in its own box beside generous
 * negative space, not under a full-bleed gradient wash, so the two moments
 * read as open and close rather than the same panel repeated.
 */
export function FounderClose({
  kicker,
  heading,
  body,
  cta,
  image,
}: {
  kicker: string;
  heading: string;
  body: string;
  cta: CTA;
  image: MediaAsset;
}) {
  return (
    <Section tone="mist">
      <Container className="studio-panel">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)]">
            <ImageMedia asset={image} treatment="bleed" sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
          <div>
            <Kicker>{kicker}</Kicker>
            <h2 className="mt-3 text-heading-xl text-teal-dark">{heading}</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-body">{body}</p>
            <div className="mt-7">
              <CtaLink href={cta.href} variant="secondary">
                {cta.label}
              </CtaLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
