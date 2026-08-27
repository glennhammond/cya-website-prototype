import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceStructuredData } from "@/components/StructuredData";
import { ProductionAction, ProductionCard, ProductionClosing, ProductionContainer, ProductionKicker, ProductionPhoto } from "@/components/ProductionPrimitives";
import { media } from "@/content/media";

export const metadata: Metadata = {
  title: { absolute: "Workplace Movement Programs | Yoga, Pilates & Desk Sessions" },
  description: "Workplace movement including Yoga, Pilates, mobility and desk movement, adapted to real teams, spaces and levels of experience.",
  alternates: { canonical: "/movement" },
};

export default function MovementPage() {
  return (
    <>
      <ServiceStructuredData name="Workplace Movement, Yoga & Pilates" description="Workplace movement including Yoga, Pilates, mobility and desk movement, adapted to real teams, spaces and levels of experience." path="/movement" breadcrumbLabel="Movement" />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Movement" }]} />

      <section className="bg-[var(--cya-paper)] py-16 lg:py-20">
        <ProductionContainer className="grid gap-10 lg:grid-cols-[1.5fr_0.8fr] lg:items-center">
          <div>
            <ProductionKicker>Movement · selection by fit</ProductionKicker>
            <h1 className="mt-5 max-w-4xl text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em]">Choose movement by the working context—not by fitness confidence.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--cya-body)]">Compare Yoga, Pilates and adaptable movement formats through the people, place and moment they need to support.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><ProductionAction href="#movement-options">Compare movement options</ProductionAction><ProductionAction href="/contact" style="secondary">Plan with CYA</ProductionAction></div>
          </div>
          <aside className="border border-[var(--cya-divider)] bg-white p-8">
            <ProductionKicker>Start with context</ProductionKicker>
            <ul className="mt-6 space-y-5 text-lg font-semibold"><li>People and confidence</li><li>Space and environment</li><li>Moment in the working day</li></ul>
          </aside>
        </ProductionContainer>
      </section>

      <ProductionPhoto asset={media.movementGroupIndustrial} label="CYA photography · movement" priority />

      <section id="movement-options" className="bg-white py-20 lg:py-24">
        <ProductionContainer>
          <ProductionKicker>Compare the movement options</ProductionKicker>
          <h2 className="mt-5 text-4xl font-bold tracking-[-0.015em] lg:text-5xl">Different formats solve different workplace needs.</h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-[var(--cya-body)]">Movement is the canonical selection hub. It helps buyers decide without turning the experience into a catalogue.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <ProductionCard title="Workplace Yoga" body="Calm, mobility and reset—adapted to the room and confidence of the group." href="/workplace-yoga" />
            <ProductionCard title="Workplace Pilates" body="Strength, posture and focused movement with practical workplace modifications." href="/workplace-pilates" />
            <ProductionCard title="Adaptable movement" body="Short resets, mobility and energising formats selected around the moment." href="/contact?interest=movement" />
          </div>
        </ProductionContainer>
      </section>

      <section className="bg-[var(--cya-canvas)] py-20 lg:py-24">
        <ProductionContainer>
          <ProductionKicker>Choose through context</ProductionKicker>
          <h2 className="mt-5 text-4xl font-bold lg:text-5xl">Choose through context</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <ProductionCard title="People" body="Confidence, access and participation range." tone="paper" />
            <ProductionCard title="Place" body="Room, equipment, clothing and delivery environment." tone="paper" />
            <ProductionCard title="Moment" body="Reset, connection, energy or an ongoing rhythm." tone="paper" />
          </div>
        </ProductionContainer>
      </section>
      <ProductionClosing tone="teal" heading="Choose the movement experience that fits." body="Compare the options or tell us about the workplace context." action="Compare movement options" href="/contact?interest=movement" />
    </>
  );
}
