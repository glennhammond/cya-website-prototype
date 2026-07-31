import { Container, Kicker } from "@/components/Primitives";
import { CtaLink } from "@/components/CtaLink";
import { EvidencePlaceholder } from "@/components/EvidencePlaceholder";
import type { PageIntro } from "@/lib/types";

export function Hero({
  intro,
  placeholderVariant = "workplace",
  placeholderCaption = "Photography placeholder — real workplaces, real people, real work.",
}: {
  intro: PageIntro;
  placeholderVariant?: "movement" | "conference" | "studio" | "workplace" | "portrait" | "gathering";
  placeholderCaption?: string;
}) {
  return (
    <Container className="grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
      <div>
        <Kicker>{intro.kicker}</Kicker>
        <h1 className="mt-4 text-[34px] leading-[1.12] sm:text-[44px] lg:text-[52px]">{intro.heading}</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-body">{intro.body}</p>
        {intro.actions && intro.actions.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-4">
            {intro.actions.map((action) => (
              <CtaLink key={action.label} href={action.href} variant={action.variant}>
                {action.label}
              </CtaLink>
            ))}
          </div>
        )}
      </div>
      <EvidencePlaceholder
        variant={placeholderVariant}
        caption={placeholderCaption}
        aspect="4/3"
        status="placeholder"
        note="A targeted photo shoot follows prototype review (blueprint §33)."
      />
    </Container>
  );
}
