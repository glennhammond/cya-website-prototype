import Link from "next/link";
import { Container, Section, Kicker } from "@/components/Primitives";
import { ImageMedia } from "@/components/ImageMedia";
import type { PathwayCard } from "@/lib/types";

/**
 * Three primary pathways (brief §10) as equal, image-led cards — each
 * pathway is a complete way to work with CYA on its own, so none is sized
 * to imply it matters more than the others.
 */
export function PathwayPanels({
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
      <Container>
        <div className="max-w-2xl">
          <Kicker>{kicker}</Kicker>
          <h2 className="mt-3 text-heading-lg">{heading}</h2>
          <p className="mt-4 text-lg leading-relaxed text-body">{body}</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {pathways.map((pathway) => (
            <Link
              key={pathway.href}
              href={pathway.href}
              className="group flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-white"
            >
              <div className="relative h-[220px]">
                <ImageMedia asset={pathway.image} treatment="bleed" sizes="(min-width: 1024px) 33vw, 100vw" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-heading-sm text-teal-dark">{pathway.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{pathway.description}</p>
                <span className="mt-4 text-sm font-bold text-teal-dark underline decoration-2 underline-offset-4 group-hover:text-teal">
                  {pathway.cta}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
