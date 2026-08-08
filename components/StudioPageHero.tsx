import { Container, Kicker } from "@/components/Primitives";
import { CtaLink } from "@/components/CtaLink";
import { ImageMedia } from "@/components/ImageMedia";
import type { CTA, MediaAsset } from "@/lib/types";

/**
 * Wellbeing Studio hero (brief §16 E). Denser and card-based rather than
 * full-bleed editorial — the shadowed, rounded product thumbnail is a
 * deliberate departure from the CYA pages' card-free treatment, signalling
 * Studio's utility character (brief §17) while sharing the same tokens.
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
    <section className="bg-mist py-12 sm:py-16 lg:py-20">
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
            <div className="absolute inset-0 flex items-center justify-center bg-teal-dark/10">
              <span
                aria-hidden="true"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-[var(--shadow-card)]"
              >
                <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
                  <path d="M2 2 L18 12 L2 22 Z" fill="#103F45" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
