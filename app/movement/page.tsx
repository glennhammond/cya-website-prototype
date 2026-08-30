import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceStructuredData } from "@/components/StructuredData";
import { ProductionAction, ProductionCard, ProductionClosing, ProductionContainer, ProductionKicker } from "@/components/ProductionPrimitives";
import { ReviewImageDirection } from "@/components/ReviewImageDirection";

export const metadata: Metadata = {
  title: { absolute: "Workplace Movement Programs | Yoga, Pilates & Desk Sessions" },
  description: "Workplace movement including yoga, Pilates, mobility and desk movement, adapted to real teams, spaces and levels of experience.",
  alternates: { canonical: "/movement" },
};

export default function MovementPage() {
  return (
    <>
      <ServiceStructuredData name="Workplace Movement, Yoga & Pilates" description="Workplace movement including yoga, Pilates, mobility and desk movement, adapted to real teams, spaces and levels of experience." path="/movement" breadcrumbLabel="Movement" />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Movement" }]} />

      <section className="cya-page-hero">
        <ProductionContainer className="grid gap-10 lg:grid-cols-[1.5fr_0.8fr] lg:items-center">
          <div>
            <ProductionKicker>Movement for workplaces</ProductionKicker>
            <h1 className="cya-page-title mt-5">Find the kind of movement that fits the people, setting and moment.</h1>
            <p className="cya-lead mt-6">Compare workplace yoga, Pilates and adaptable movement through the group, available space and what the working day needs to support.</p>
            <div className="cya-action-row mt-8"><ProductionAction href="#movement-options">Compare movement options</ProductionAction><ProductionAction href="/contact" style="secondary">Start planning</ProductionAction></div>
          </div>
          <aside className="cya-panel bg-[var(--cya-surface-base)]">
            <ProductionKicker>Start with context</ProductionKicker>
            <ul className="mt-6 space-y-5 text-lg font-semibold"><li>People and confidence</li><li>Space and environment</li><li>Moment in the working day</li></ul>
          </aside>
        </ProductionContainer>
      </section>

      <ReviewImageDirection
        id="IMAGE 05 · MOVEMENT IN CONTEXT"
        job="Context"
        subject="A genuine CYA movement experience showing varied participation and enough of the workplace to understand how the format fits."
        treatment="Light, contained landscape image with a clear facilitator and natural participation."
        format="3:2 desktop · adaptable to 4:3 mobile"
        avoid="Generic fitness imagery, a studio setting, uniform advanced movement or another dominant full-width warehouse band."
        candidate="/images/selected/cya-workplace-wellbeing-hero-warehouse-group.webp"
      />

      <section id="movement-options" className="cya-section scroll-mt-24 bg-[var(--cya-surface-base)]">
        <ProductionContainer>
          <ProductionKicker>Compare the movement options</ProductionKicker>
          <h2 className="cya-section-title mt-5">Different formats solve different workplace needs.</h2>
          <p className="cya-lead mt-5 max-w-4xl">Each format has its own practical strengths. Start with the group, room and purpose rather than assuming one option will suit every workplace.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <ProductionCard title="Workplace Yoga" body="Calm, mobility and reset—adapted to the room and confidence of the group." href="/workplace-yoga" />
            <ProductionCard title="Workplace Pilates" body="Strength, posture and focused movement with practical workplace modifications." href="/workplace-pilates" />
            <ProductionCard title="Adaptable movement" body="Short resets, mobility and energising formats selected around the moment." href="/contact?interest=movement" />
          </div>
        </ProductionContainer>
      </section>

      <section className="cya-section bg-[var(--cya-surface-page)]">
        <ProductionContainer>
          <ProductionKicker>Choose through context</ProductionKicker>
          <h2 className="cya-section-title mt-5">People, place and moment shape the right format.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <ProductionCard title="People" body="Confidence, access and participation range." tone="paper" />
            <ProductionCard title="Place" body="Room, equipment, clothing and delivery environment." tone="paper" />
            <ProductionCard title="Moment" body="Reset, connection, energy or an ongoing rhythm." tone="paper" />
          </div>
        </ProductionContainer>
      </section>
      <ProductionClosing heading="Not sure which movement experience fits?" body="Tell CYA about the group, space and purpose and we will recommend a useful starting point." action="Start planning" href="/contact?interest=movement" />
    </>
  );
}
