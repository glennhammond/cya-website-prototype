import { Kicker, Container } from "@/components/Primitives";
import { CtaLink } from "@/components/CtaLink";
import { ImageMedia } from "@/components/ImageMedia";
import type { MediaAsset, PageIntro } from "@/lib/types";

/**
 * Homepage hero: one full-bleed photograph with a Deep Teal gradient scrim,
 * text sitting directly on the image rather than beside it in a separate
 * panel. The scrim is opaque enough near the text that legibility doesn't
 * depend on how dark the underlying photo happens to be — direction flips
 * from bottom-up on mobile (no room for a side gradient at narrow widths)
 * to left-to-right on desktop. Text sits inside the shared `Container`, not
 * padded off the raw viewport edge, so it aligns with every section below.
 */
export function HeroEditorial({ intro, image }: { intro: PageIntro; image: MediaAsset }) {
  return (
    <section className="relative isolate min-h-[540px] overflow-hidden lg:min-h-[680px]">
      <ImageMedia asset={image} treatment="background" priority sizes="100vw" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-teal-dark via-teal-dark/65 to-transparent lg:bg-gradient-to-r lg:from-teal-dark lg:via-teal-dark/55 lg:to-transparent"
      />
      <div className="relative z-10 flex h-full min-h-[540px] items-end pb-10 lg:min-h-[680px] lg:items-center lg:pb-0">
        <Container>
          <div className="max-w-xl">
            <Kicker tone="pale">{intro.kicker}</Kicker>
            <h1 className="mt-4 text-display text-white">{intro.heading}</h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/90">{intro.body}</p>
            {intro.actions && intro.actions.length > 0 && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                {intro.actions.map((action) => (
                  <CtaLink key={action.label} href={action.href} variant={action.variant} className="w-full sm:w-auto">
                    {action.label}
                  </CtaLink>
                ))}
              </div>
            )}
          </div>
        </Container>
      </div>
    </section>
  );
}
