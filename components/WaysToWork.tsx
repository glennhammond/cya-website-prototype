import Link from "next/link";
import { Container, Section, Kicker } from "@/components/Primitives";
import { ImageMedia } from "@/components/ImageMedia";
import type { PathwayCard } from "@/lib/types";

/**
 * Three primary pathways, each a complete way to work with CYA on its own.
 * Image and typography each get independent space - photo above, text
 * below, no chrome, no text-over-photo - so this reads distinctly from the
 * single full-bleed text-over-media moment in HumanExperience further down
 * the page, and from PrincipalProof's documentary single-story treatment.
 */
export function WaysToWork({
  kicker,
  heading,
  body,
  pathways,
}: {
  kicker: string;
  heading: string;
  body: string;
  pathways: PathwayCard[];
}) {
  return (
    <Section tone="mist">
      <Container className="studio-panel">
        <div className="max-w-2xl">
          <Kicker>{kicker}</Kicker>
          <h2 className="mt-3 text-heading-lg">{heading}</h2>
          <p className="mt-4 text-lg leading-relaxed text-body">{body}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3 sm:gap-7">
          {pathways.map((pathway) => (
            <Link key={pathway.href} href={pathway.href} className="group flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-divider bg-white shadow-[0_12px_36px_rgba(16,63,69,0.06)] transition-transform duration-200 hover:-translate-y-1">
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageMedia asset={pathway.image} treatment="bleed" sizes="(min-width: 1024px) 33vw, 100vw" />
              </div>
              <h3 className="mx-6 mt-6 text-heading-sm text-teal-dark">{pathway.title}</h3>
              <p className="mx-6 mt-2 text-sm leading-relaxed text-body">{pathway.description}</p>
              <span className="mx-6 mt-4 mb-6 text-sm font-bold text-teal-dark underline decoration-2 underline-offset-4 group-hover:text-teal">
                {pathway.cta}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
