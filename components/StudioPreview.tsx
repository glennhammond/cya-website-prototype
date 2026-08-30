import { Container, Section, Kicker } from "@/components/Primitives";
import { CtaLink } from "@/components/CtaLink";
import { ImageMedia } from "@/components/ImageMedia";
import { memberSignInHref } from "@/content/navigation";
import type { CTA, MediaAsset } from "@/lib/types";

/**
 * No decorative play button: a real Studio preview clip isn't confirmed yet
 * (see content/media.ts homeHeroMedia comment for the equivalent hero
 * situation). A play affordance only belongs here once genuinely playable
 * media exists - until then this is a still, presented as a still, on the
 * light field-note ground that differentiates it from the surrounding white
 * sections while preserving the approved light-led website direction.
 */
export function StudioPreview({
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
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Kicker>{kicker}</Kicker>
            <h2 className="mt-3 text-heading-lg text-teal-dark">{heading}</h2>
            <p className="mt-4 text-lg leading-relaxed text-body">{body}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaLink href={cta.href} variant="primary">
                {cta.label}
              </CtaLink>
              <CtaLink href={memberSignInHref} variant="secondary" external>
                Member sign-in
              </CtaLink>
            </div>
          </div>
          <div className="relative h-[280px] overflow-hidden rounded-[var(--radius-card)] sm:h-[360px] lg:h-[420px]">
            <ImageMedia asset={image} treatment="bleed" sizes="(min-width: 1024px) 45vw, 100vw" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
