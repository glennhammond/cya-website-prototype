import Image from "next/image";
import { ProductionAction, ProductionContainer, ProductionKicker } from "@/components/ProductionPrimitives";

export function HomepageProof() {
  return (
    <section aria-labelledby="homepage-proof-heading" className="bg-white py-20 lg:py-24">
      <ProductionContainer className="grid gap-10 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:items-center lg:gap-16 xl:gap-20">
        <figure className="relative aspect-[4/3] overflow-hidden bg-[var(--cya-surface-page)] lg:aspect-[1.05/1]">
          <Image
            src="/images/selected/cya-proof-hero-group-practice.webp"
            alt="A Corporate Yoga Australia facilitator guides a group through a shared workplace movement practice."
            fill
            sizes="(min-width: 1280px) 620px, (min-width: 1024px) 48vw, 100vw"
            className="object-cover object-center"
          />
        </figure>

        <div>
          <ProductionKicker>From interruption to rhythm</ProductionKicker>
          <h2 id="homepage-proof-heading" className="mt-5 max-w-3xl text-4xl font-bold tracking-[-0.02em] text-[var(--cya-teal-dark)] lg:text-5xl">
            One useful moment can become part of how the week works
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--cya-body)]">
            A single session may be enough. Where it helps, we can connect useful experiences into an ongoing workplace wellbeing program with clear planning and continuity.
          </p>

          <div className="mt-8">
            <ProductionAction href="/workplace-wellbeing-programs" style="secondary">Explore programs</ProductionAction>
          </div>

          <div className="mt-10 bg-[var(--cya-surface-warm)] px-6 py-6 sm:px-7">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--cya-ochre-ink)]">Interruption → Return → Rhythm</p>
            <div className="mt-4 flex flex-col gap-3 text-base font-semibold text-[var(--cya-teal-dark)] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4">
              <span>One useful session</span>
              <span aria-hidden="true">→</span>
              <span>a repeatable cue</span>
              <span aria-hidden="true">→</span>
              <span>ongoing support</span>
            </div>
          </div>
        </div>
      </ProductionContainer>
    </section>
  );
}
