import { Kicker, Container } from "@/components/Primitives";
import { CtaLink } from "@/components/CtaLink";
import { ImageMedia } from "@/components/ImageMedia";
import type { MediaAsset, PageIntro } from "@/lib/types";

/** Shared internal-page hero using the approved surface/page entry treatment. */
export function PageHero({
  intro,
  image,
  imagePosition = "right",
}: {
  intro: PageIntro;
  image: MediaAsset;
  imagePosition?: "left" | "right";
}) {
  const imageFirst = imagePosition === "left";

  return (
    <section className="cya-page-hero">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className={imageFirst ? "lg:order-2" : ""}>
            <Kicker>{intro.kicker}</Kicker>
            <h1 className="cya-page-title mt-5">{intro.heading}</h1>
            <p className="cya-lead mt-6">{intro.body}</p>
            {intro.meta && intro.meta.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {intro.meta.map((item) => (
                  <li key={item} className="rounded-full border border-[var(--cya-divider)] bg-[var(--cya-surface-base)] px-3.5 py-1.5 text-sm font-bold text-[var(--cya-text-primary)]">
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {intro.actions && intro.actions.length > 0 && (
              <div className="cya-action-row mt-8">
                {intro.actions.map((action) => (
                  <CtaLink key={action.label} href={action.href} variant={action.variant} className="w-full sm:w-auto">
                    {action.label}
                  </CtaLink>
                ))}
              </div>
            )}
          </div>
          <ImageMedia
            asset={image}
            priority
            aspect="3/2"
            sizes="(min-width: 1024px) 44vw, 100vw"
            className={imageFirst ? "lg:order-1" : ""}
          />
        </div>
      </Container>
    </section>
  );
}
