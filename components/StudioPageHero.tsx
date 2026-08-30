import { Container, Kicker } from "@/components/Primitives";
import { CtaLink } from "@/components/CtaLink";
import { ImageMedia } from "@/components/ImageMedia";
import type { CTA, MediaAsset } from "@/lib/types";

/**
 * Wellbeing Studio hero. Denser and card-based rather than full-bleed
 * editorial - the shadowed, rounded product thumbnail is a deliberate
 * departure from the Corporate Yoga Australia pages' card-free treatment, signalling Studio's
 * utility character while sharing the same tokens. No play affordance is
 * shown: no genuinely playable Studio preview clip is confirmed yet, and a
 * decorative play button that doesn't play anything reads as broken next to
 * the rest of the site's honest media-availability handling.
 */
export function StudioPageHero({
  kicker,
  heading,
  body,
  actions,
  image,
}: {
  kicker: string;
  heading: string;
  body: string;
  actions?: CTA[];
  image: MediaAsset;
}) {
  return (
    <section className="bg-[var(--cya-surface-page)] py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <Kicker>{kicker}</Kicker>
            <h1 className="mt-4 text-heading-lg">{heading}</h1>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-body">{body}</p>
            {actions && actions.length > 0 && (
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                {actions.map((action) => (
                  <CtaLink key={action.label} href={action.href} variant={action.variant} className="w-full sm:w-auto">
                    {action.label}
                  </CtaLink>
                ))}
              </div>
            )}
          </div>
          <div className="relative h-[280px] overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)] sm:h-[360px]">
            <ImageMedia asset={image} treatment="bleed" priority sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        </div>
      </Container>
    </section>
  );
}
