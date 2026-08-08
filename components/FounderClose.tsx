import { Kicker, Container } from "@/components/Primitives";
import { CtaLink } from "@/components/CtaLink";
import { ImageMedia } from "@/components/ImageMedia";
import type { CTA, MediaAsset } from "@/lib/types";

/**
 * Homepage-ending relational close (brief §15): a substantial founder image
 * with a Deep Teal gradient scrim, matching the hero's visual language
 * rather than sitting the photo beside a flat panel. The CTA is relational,
 * not a repeat of the header's "Book a wellbeing consultation". Text sits
 * inside the shared `Container`, aligned to the same grid as the rest of
 * the page rather than padded off the raw viewport edge.
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
    <section className="relative isolate min-h-[460px] overflow-hidden lg:min-h-[560px]">
      <ImageMedia asset={image} treatment="background" sizes="100vw" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-teal-dark via-teal-dark/60 to-transparent lg:bg-gradient-to-l lg:from-teal-dark lg:via-teal-dark/50 lg:to-transparent"
      />
      <div className="relative z-10 flex h-full min-h-[460px] items-end pb-10 lg:min-h-[560px] lg:items-center lg:pb-0">
        <Container className="lg:flex lg:justify-end">
          <div className="max-w-lg">
            <Kicker tone="pale">{kicker}</Kicker>
            <h2 className="mt-3 text-heading-lg text-white">{heading}</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/90">{body}</p>
            <div className="mt-7">
              <CtaLink href={cta.href} variant="primary">
                {cta.label}
              </CtaLink>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
