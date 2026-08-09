import { Container, Kicker } from "@/components/Primitives";
import { CtaLink } from "@/components/CtaLink";
import { ImageMedia } from "@/components/ImageMedia";
import type { CTA, MediaAsset } from "@/lib/types";

/**
 * The homepage's one other text-over-media moment besides the hero (see
 * creative direction: "use text over media for the hero and at most one
 * other important homepage moment"). Full-bleed single image with a
 * localised scrim, matching the hero's contrast language but at page scale
 * rather than viewport scale. Format chips sit in their own strip below the
 * photo rather than on top of it, so the image itself stays uncluttered.
 */
export function HumanExperience({
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
    <section className="bg-white">
      <div className="relative isolate min-h-[440px] overflow-hidden lg:min-h-[560px]">
        <ImageMedia asset={image} treatment="background" sizes="100vw" />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(120%_90%_at_20%_100%,rgb(var(--cya-scrim)/0.72)_0%,rgb(var(--cya-scrim)/0.36)_42%,rgb(var(--cya-scrim)/0.08)_72%)] lg:bg-[radial-gradient(55%_85%_at_14%_50%,rgb(var(--cya-scrim)/0.68)_0%,rgb(var(--cya-scrim)/0.3)_48%,rgb(var(--cya-scrim)/0.06)_78%)]"
        />
        <div className="relative z-10 flex h-full min-h-[440px] items-end pb-10 lg:min-h-[560px] lg:items-center lg:pb-0">
          <Container>
            <div className="max-w-lg">
              <Kicker tone="pale">{kicker}</Kicker>
              <h2 className="mt-3 text-heading-xl text-white">{heading}</h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-white/90">{body}</p>
            </div>
          </Container>
        </div>
      </div>
      <Container className="py-8 sm:py-10">
        <ul className="flex flex-wrap gap-2">
          {formats.map((format) => (
            <li
              key={format}
              className="rounded-full border border-divider bg-mist px-4 py-1.5 text-sm font-bold text-teal-dark"
            >
              {format}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <CtaLink href={cta.href} variant="secondary">
            {cta.label}
          </CtaLink>
        </div>
      </Container>
    </section>
  );
}
