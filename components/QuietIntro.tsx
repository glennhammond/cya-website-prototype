import { Container } from "@/components/Primitives";
import { ImageMedia } from "@/components/ImageMedia";
import type { MediaAsset } from "@/lib/types";

/**
 * An editorial introduction that pairs the core proposition with a warm,
 * representative Corporate Yoga Australia session image. The asymmetric split follows the Studio
 * system while keeping the message clear and readable before the pathways.
 */
export function QuietIntro({ heading, body, image }: { heading: string; body: string; image: MediaAsset }) {
  return (
    <section className="bg-mist py-10 sm:py-14 lg:py-16">
      <Container className="studio-panel">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-ochre-ink">
              Flexible by design
            </p>
            <h2 className="mt-6 max-w-[17ch] text-heading-lg text-teal-dark">{heading}</h2>
            <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-body">{body}</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] shadow-[0_16px_40px_rgba(14,67,74,0.1)]">
            <ImageMedia asset={image} treatment="bleed" sizes="(min-width: 1024px) 42vw, 100vw" />
          </div>
        </div>
      </Container>
    </section>
  );
}
