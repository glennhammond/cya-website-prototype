import { Kicker, Container } from "@/components/Primitives";
import { CtaLink } from "@/components/CtaLink";
import { ImageMedia } from "@/components/ImageMedia";
import type { MediaAsset, PageIntro } from "@/lib/types";

/**
 * Shared internal-page hero archetype (brief §16 A, B, C, D, G). Same
 * gradient-over-image language as the homepage hero, for one coherent visual
 * system across the site — composition still varies per page through the
 * photograph itself, `imagePosition` (which side the text/gradient sits on)
 * and meta chips, rather than every page looking identical. Text sits inside
 * the shared `Container`, never padded directly off the viewport edge, so
 * it lines up with page headings and body copy below it.
 */
export function PageHero({
  intro,
  image,
  imagePosition = "right",
}: {
  intro: PageIntro;
  image: MediaAsset;
  imagePosition?: "left" | "right";
}) {
  const textRight = imagePosition === "left";

  return (
    <section className="relative isolate min-h-[420px] overflow-hidden lg:min-h-[520px]">
      <ImageMedia asset={image} treatment="background" priority sizes="100vw" />
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-gradient-to-t from-teal-dark via-teal-dark/60 to-transparent ${
          textRight ? "lg:bg-gradient-to-l" : "lg:bg-gradient-to-r"
        } lg:from-teal-dark lg:via-teal-dark/50 lg:to-transparent`}
      />
      <div className="relative z-10 flex h-full min-h-[420px] items-end pb-8 lg:min-h-[520px] lg:items-center lg:pb-0">
        <Container className={textRight ? "lg:flex lg:justify-end" : ""}>
          <div className="max-w-xl">
            <Kicker tone="pale">{intro.kicker}</Kicker>
            <h1 className="mt-4 text-heading-lg text-white">{intro.heading}</h1>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/90">{intro.body}</p>
            {intro.meta && intro.meta.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {intro.meta.map((item) => (
                  <li key={item} className="rounded-full border border-white/30 px-3.5 py-1.5 text-sm font-bold text-white">
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {intro.actions && intro.actions.length > 0 && (
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
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
