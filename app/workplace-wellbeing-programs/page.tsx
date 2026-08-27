import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceStructuredData } from "@/components/StructuredData";
import { ProductionAction, ProductionCard, ProductionClosing, ProductionContainer, ProductionKicker, ProductionPhoto } from "@/components/ProductionPrimitives";
import { media } from "@/content/media";

export const metadata: Metadata = {
  title: { absolute: "Workplace Wellbeing Programs Australia | Corporate Yoga Australia" },
  description: "Tailored workplace wellbeing programs combining movement, mindfulness, workshops, expert experiences and ongoing support for Australian organisations.",
  alternates: { canonical: "/workplace-wellbeing-programs" },
};

export default function WorkplaceWellbeingProgramsPage() {
  return (
    <>
      <ServiceStructuredData name="Workplace Wellbeing Programs" description="Tailored workplace wellbeing programs combining human-led experiences, practical coordination and ongoing support for Australian teams." path="/workplace-wellbeing-programs" breadcrumbLabel="Workplace wellbeing programs" />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Workplace wellbeing programs" }]} />

      <section className="bg-[var(--cya-teal-dark)] py-16 text-white lg:py-20">
        <ProductionContainer className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
          <div>
            <ProductionKicker light>Working rhythm · managed partnership</ProductionKicker>
            <h1 className="mt-5 max-w-3xl text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-white">A wellbeing program people can genuinely use.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">CYA plans the right mix, coordinates the people, connects live and digital experiences, and adapts the rhythm with you.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><ProductionAction href="/contact?interest=program" style="ochre">Plan a program</ProductionAction><ProductionAction href="#program-evidence" style="secondary">View program evidence</ProductionAction></div>
          </div>
          <aside className="bg-[var(--cya-paper)] p-8 text-[var(--cya-teal-dark)]">
            <ProductionKicker>What procurement needs to know</ProductionKicker>
            <ul className="mt-6 space-y-4 text-base"><li>Reach and delivery model</li><li>Facilitator fit and quality</li><li>Participation access</li><li>Reporting and governance</li></ul>
          </aside>
        </ProductionContainer>
      </section>

      <ProductionPhoto asset={media.programsHero} label="CYA photography · workshop" priority />

      <section className="bg-[var(--cya-canvas)] py-20 lg:py-24">
        <ProductionContainer>
          <ProductionKicker>Composed around your organisation</ProductionKicker>
          <h2 className="mt-5 text-4xl font-bold tracking-[-0.015em] lg:text-5xl">Recognisable experiences. One managed relationship.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <ProductionCard title="Start with useful access" body="A focused live or digital rhythm for a defined workforce need." tone="white" />
            <ProductionCard title="Build a connected rhythm" body="A curated mix of movement, mindfulness, experts and Studio continuity." tone="field" />
            <ProductionCard title="Shape a deeper partnership" body="A tailored program with coordination, reporting and review." tone="paper" />
          </div>
          <h2 className="mt-14 text-3xl font-bold lg:text-4xl">The program is credible because the operating model is visible.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <ProductionCard number="01" title="Human curation" body="Facilitator and format matched to context." />
            <ProductionCard number="02" title="Practical coordination" body="One accountable relationship and clear delivery plan." />
            <ProductionCard number="03" title="Useful reporting" body="Evidence that supports decisions without overstating impact." />
          </div>
        </ProductionContainer>
      </section>

      <section className="bg-[var(--cya-paper)] py-20 lg:py-24">
        <ProductionContainer>
          <ProductionKicker>Procurement confidence</ProductionKicker>
          <h2 className="mt-5 max-w-4xl text-4xl font-bold lg:text-5xl">Clear enough to approve. Human enough to work.</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <ProductionCard title="Scope" body="Audience, locations, cadence and delivery format agreed before launch." tone="field" />
            <ProductionCard title="Safeguards" body="Access, consent, facilitator fit and escalation boundaries made explicit." tone="field" />
            <ProductionCard title="Measurement" body="Useful signals agreed without turning wellbeing into surveillance." tone="field" />
            <ProductionCard title="Review" body="A visible rhythm for learning, adapting and deciding what continues." tone="field" />
          </div>
          <div id="program-evidence" className="mt-8 grid gap-6 bg-[var(--cya-teal-dark)] px-8 py-9 text-white md:grid-cols-[1fr_auto] md:items-center">
            <div><ProductionKicker light>Case study pathway</ProductionKicker><h3 className="mt-4 text-2xl font-semibold text-white">See how the shape of the program changes with the workplace.</h3></div>
            <ProductionAction href="/case-studies" style="secondary">View case studies</ProductionAction>
          </div>
        </ProductionContainer>
      </section>
      <ProductionClosing heading="Shape a program people can trust." body="Start with the organisational need, practical constraints and the change you need to support." />
    </>
  );
}
