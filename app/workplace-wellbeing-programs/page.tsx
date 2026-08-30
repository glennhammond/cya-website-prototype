import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceStructuredData } from "@/components/StructuredData";
import { ProductionAction, ProductionCard, ProductionClosing, ProductionContainer, ProductionKicker } from "@/components/ProductionPrimitives";
import { ReviewImageDirection } from "@/components/ReviewImageDirection";

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

      <section className="bg-[var(--cya-surface-page)] py-16 lg:py-20">
        <ProductionContainer className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
          <div>
            <ProductionKicker>Working rhythm · managed partnership</ProductionKicker>
            <h1 className="mt-5 max-w-3xl text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em]">A wellbeing program people can genuinely use.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--cya-body)]">A wellbeing program should fit the organisation—not the other way around. CYA plans the right mix, coordinates the people, connects live and digital experiences, and adapts the rhythm with you.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><ProductionAction href="/contact?interest=program">Plan a program</ProductionAction><ProductionAction href="#program-structure" style="secondary">See how programs can work</ProductionAction></div>
          </div>
          <aside className="bg-[var(--cya-surface-warm)] p-8 text-[var(--cya-teal-dark)]">
            <ProductionKicker>What procurement needs to know</ProductionKicker>
            <ul className="mt-6 space-y-4 text-base"><li>Reach and delivery model</li><li>Facilitator fit and quality</li><li>Participation access</li><li>Reporting and governance</li></ul>
          </aside>
        </ProductionContainer>
      </section>

      <ReviewImageDirection id="IMAGE 07 · MANAGED WELLBEING PROGRAM" job="Human trust" subject="A genuine CYA planning or delivery moment that demonstrates human coordination across an organisation—not merely a single exercise class." treatment="Light-led 3:2 image with a clear relationship or planning cue. A second approved delivery image may be added later as evidence." format="3:2 desktop · adaptable to 4:3 mobile" avoid="Generic corporate meetings, unverified client branding, dashboards implying unavailable reporting or one activity representing the entire program." candidate="/images/selected/cya-programs-hero.webp" />

      <section id="program-structure" className="bg-[var(--cya-surface-page)] py-20 lg:py-24">
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

      <section className="bg-[var(--cya-surface-base)] py-20 lg:py-24">
        <ProductionContainer>
          <ProductionKicker>Procurement confidence</ProductionKicker>
          <h2 className="mt-5 max-w-4xl text-4xl font-bold lg:text-5xl">Clear enough to approve. Human enough to work.</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <ProductionCard title="Scope" body="Audience, locations, cadence and delivery format agreed before launch." tone="field" />
            <ProductionCard title="Safeguards" body="Access, consent, facilitator fit and escalation boundaries made explicit." tone="field" />
            <ProductionCard title="Measurement" body="Useful signals agreed without turning wellbeing into surveillance." tone="field" />
            <ProductionCard title="Review" body="A visible rhythm for learning, adapting and deciding what continues." tone="field" />
          </div>
          <div className="mt-8 grid gap-6 border border-[var(--cya-divider)] bg-[var(--cya-surface-subtle)] px-8 py-9 md:grid-cols-[1fr_auto] md:items-center">
            <div><ProductionKicker>A useful starting point</ProductionKicker><h3 className="mt-4 text-2xl font-semibold">A program does not have to begin as a year-long commitment.</h3><p className="mt-3 max-w-3xl text-[var(--cya-body)]">Start with a focused pilot, a recurring rhythm or a broader connected plan when that depth is appropriate.</p></div>
            <ProductionAction href="/contact?interest=program">Discuss the right starting point</ProductionAction>
          </div>
        </ProductionContainer>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <ProductionContainer>
          <ProductionKicker>Participation and scope</ProductionKicker>
          <h2 className="mt-5 max-w-4xl text-4xl font-bold lg:text-5xl">Make the program easier to use without making it carry the whole wellbeing system.</h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-[var(--cya-body)]">CYA can help plan accessible formats, practical communications, protected opportunities to participate and an aggregate review rhythm. An internal sponsor and a clearly bounded Wellbeing Champion can support awareness, logistics and feedback; they do not become responsible for colleagues&apos; wellbeing, complaints, HR, WHS or mental-health care.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <ProductionCard title="Fit the workday" body="Consider locations, schedules, operational demands, accessibility and the time people can realistically use." tone="paper" />
            <ProductionCard title="Keep participation voluntary" body="Give people clear information and more than one useful way to take part without monitoring individual wellbeing." tone="paper" />
            <ProductionCard title="Learn proportionately" body="Review access, delivery, aggregate participation and voluntary feedback without claiming health, productivity or compliance outcomes." tone="paper" />
          </div>
          <aside className="mt-10 border-l-4 border-[var(--cya-ochre)] bg-[var(--cya-surface-page)] px-7 py-6">
            <h3 className="text-2xl font-semibold text-[var(--cya-teal-dark)]">Where CYA fits alongside psychosocial risk management</h3>
            <p className="mt-3 max-w-4xl leading-7 text-[var(--cya-body)]">Wellbeing activities can complement a broader organisational approach, but they do not replace identifying psychosocial hazards, consulting workers, assessing and controlling risks, reviewing controls, changing harmful work conditions or obtaining appropriate WHS, clinical or legal advice. CYA is a workplace wellbeing provider, not an EAP or psychosocial-compliance service.</p>
          </aside>
          <div className="mt-8"><ProductionAction href="/blog/the-nervous-system-solution-why-your-wellbeing-program-isnt-working-and-what-to-do-instead" style="secondary">Read the participation guide</ProductionAction></div>
        </ProductionContainer>
      </section>
      <ProductionClosing heading="Shape a program people can trust." body="Start with the organisational need, practical constraints and the change you need to support." />
    </>
  );
}
