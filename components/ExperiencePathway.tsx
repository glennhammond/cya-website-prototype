import Image from "next/image";
import Link from "next/link";
import { ProductionContainer, ProductionKicker } from "@/components/ProductionPrimitives";

type ExperiencePathwayItem = {
  label: string;
  href: string;
};

type ExperiencePathwayProps = {
  kicker: string;
  heading: string;
  body: string;
  items: ExperiencePathwayItem[];
  image: {
    src: string;
    alt: string;
  };
  detailLabel?: string;
  detailHeading?: string;
  detailBody?: string;
};

/**
 * A familiar, direct service route paired with one purposeful workplace image.
 * The image is intentionally left clean: no caption, label, inset or decorative edge.
 */
export function ExperiencePathway({
  kicker,
  heading,
  body,
  items,
  image,
}: ExperiencePathwayProps) {
  const isHomepageExperienceImage = image.src === "/images/selected/cya-home-hero-workplace-session.webp";
  const imageSrc = isHomepageExperienceImage ? "/images/cya-library/IMG_5701.JPG" : image.src;
  const imageAlt = isHomepageExperienceImage
    ? "Workplace participants take part in an outdoor guided movement session on a grassy workplace campus."
    : image.alt;

  return (
    <section className="bg-[var(--cya-surface-page)] py-20 lg:py-24">
      <ProductionContainer className="grid max-w-[1440px] gap-10 lg:grid-cols-[minmax(0,0.96fr)_minmax(24rem,0.84fr)] lg:items-start lg:gap-16">
        <div>
          <ProductionKicker>{kicker}</ProductionKicker>
          <h2 className="mt-5 max-w-2xl text-4xl font-bold tracking-[-0.02em] text-[var(--cya-teal-dark)] lg:text-5xl">{heading}</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--cya-body)]">{body}</p>
          <nav aria-label="Choose an experience" className="mt-10 border-t border-[var(--cya-divider)]">
            {items.map((item, index) => (
              <Link key={item.href} href={item.href} className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-x border-b border-[var(--cya-divider)] bg-white px-5 py-4 transition-colors hover:bg-[var(--cya-surface-subtle)] sm:px-6">
                <span className="text-xs font-semibold text-[var(--cya-ochre-ink)]">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-base font-semibold text-[var(--cya-teal-dark)] sm:text-lg">{item.label}</span>
                <span aria-hidden="true" className="text-xl leading-none text-[var(--cya-teal-dark)] transition-transform group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </nav>
        </div>

        <figure className="relative aspect-[4/3] overflow-hidden bg-white">
          <Image src={imageSrc} alt={imageAlt} fill sizes="(min-width: 1440px) 580px, (min-width: 1024px) 44vw, 100vw" className="object-cover" />
        </figure>
      </ProductionContainer>
    </section>
  );
}
