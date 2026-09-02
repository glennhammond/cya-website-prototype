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
  detailLabel: string;
  detailHeading: string;
  detailBody: string;
};

/**
 * A familiar, direct service route paired with one purposeful workday image.
 * The image and observed detail are deliberately configurable so this pattern
 * can carry a service, program or proof story without becoming a homepage-only layout.
 */
export function ExperiencePathway({
  kicker,
  heading,
  body,
  items,
  image,
  detailLabel,
  detailHeading,
  detailBody,
}: ExperiencePathwayProps) {
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

        <figure className="overflow-hidden border border-[var(--cya-divider)] bg-white">
          <div className="relative aspect-[4/3]">
            <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1440px) 580px, (min-width: 1024px) 44vw, 100vw" className="object-cover" />
          </div>
          <figcaption className="border-l-4 border-[var(--cya-ochre)] px-6 py-6 sm:px-7">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[var(--cya-ochre-ink)]">{detailLabel}</p>
            <p className="mt-3 text-2xl font-semibold leading-8 tracking-[-0.015em] text-[var(--cya-teal-dark)]">{detailHeading}</p>
            <p className="mt-3 max-w-lg text-sm leading-6 text-[var(--cya-body)]">{detailBody}</p>
          </figcaption>
        </figure>
      </ProductionContainer>
    </section>
  );
}
