import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceStructuredData } from "@/components/StructuredData";
import { ProductionAction, ProductionCard, ProductionClosing, ProductionContainer, ProductionKicker } from "@/components/ProductionPrimitives";

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
        <ProductionContainer className="grid max-w-[1440px] gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-14 xl:gap-16">
          <div>
            <ProductionKicker>Workplace wellbeing programs</ProductionKicker>
            <h1 className="mt-5 max-w-3xl text-[clamp(2.8rem,4.6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em]">A workplace wellbeing program built around how your people work</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--cya-body)]">Bring together workplace yoga, Pilates, mindfulness, workshops and Wellbeing Studio support in a program shaped around your people, locations, schedules and goals.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><ProductionAction href="/contact?interest=program">Start planning</ProductionAction><ProductionAction href="#program-structure" style="secondary">See how programs work</ProductionAction></div>
          </div>
          <figure className="relative aspect-[3/2] overflow-hidden border border-[var(--cya-divider)] bg-[var(--cya-surface-base)]">
            <Image
              src="/images/selected/cya-workplace-wellbeing-hero-warehouse-group.webp"
              alt="Employees take part in a facilitated workplace yoga session in a warehouse"
              fill
              priority
              sizes="(min-width: 1440px) 650px, (min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </figure>
        </ProductionContainer>
      </section>

      <section id="program-structure" className="bg-[var(--cya-surface-page)] py-20 lg:py-24">
        <ProductionContainer>
          <ProductionKicker>Built around your workplace</ProductionKicker>
          <h2 className="mt-5 max-w-5xl text-4xl font-bold tracking-[-0.015em] lg:text-5xl">A program that fits different people, places and working patterns</h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-[var(--cya-body)]">Workplace wellbeing programs can combine yoga, Pilates, mindfulness, workshops and Wellbeing Studio support in ways that suit your locations, schedules and workforce.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="overflow-hidden border border-[var(--cya-divider)] bg-[var(--cya-surface-base)]">
              <figure className="relative aspect-[3/2]"><Image src="/images/selected/cya-home-oneoff-desk-stretch.webp" alt="A facilitator guides an employee through an accessible workplace movement session" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" /></figure>
              <div className="p-6"><h3 className="text-2xl font-semibold text-[var(--cya-teal-dark)]">Office-based teams</h3><p className="mt-3 leading-7 text-[var(--cya-body)]">Accessible sessions that fit meeting rooms, shared spaces and the working day.</p></div>
            </article>
            <article className="overflow-hidden border border-[var(--cya-divider)] bg-[var(--cya-surface-base)]">
              <figure className="relative aspect-[3/2]"><Image src="/images/selected/cya-movement-group-industrial.webp" alt="Employees pause together during a facilitated session in an industrial workplace" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" /></figure>
              <div className="p-6"><h3 className="text-2xl font-semibold text-[var(--cya-teal-dark)]">Operational workplaces</h3><p className="mt-3 leading-7 text-[var(--cya-body)]">Practical formats adapted to the environment, workforce and available space.</p></div>
            </article>
            <article className="overflow-hidden border border-[var(--cya-divider)] bg-[var(--cya-surface-base)]">
              <figure className="relative aspect-[3/2]"><Image src="/images/selected/cya-programs-multisite-outdoor.webp" alt="Employees in high-visibility workwear take part in an outdoor wellbeing session" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" /></figure>
              <div className="p-6"><h3 className="text-2xl font-semibold text-[var(--cya-teal-dark)]">Multi-site and distributed teams</h3><p className="mt-3 leading-7 text-[var(--cya-body)]">Coordinated delivery across locations, schedules and different ways of working.</p></div>
            </article>
            <article className="overflow-hidden border border-[var(--cya-divider)] bg-[var(--cya-surface-base)]">
              <figure className="relative aspect-[3/2]"><Image src="/images/selected/cya-conferences-studio-remote-grid.webp" alt="Employees join an online wellbeing session from different locations" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" /></figure>
              <div className="p-6"><h3 className="text-2xl font-semibold text-[var(--cya-teal-dark)]">Hybrid and online participation</h3><p className="mt-3 leading-7 text-[var(--cya-body)]">Live connection and Wellbeing Studio support between in-person sessions.</p></div>
            </article>
          </div>
          <div className="mt-20 bg-[var(--cya-surface-subtle)] px-8 py-10 lg:px-12 lg:py-12">
            <ProductionKicker>How we make it work</ProductionKicker>
            <h2 className="mt-5 max-w-4xl text-3xl font-bold lg:text-4xl">One program, planned and managed with you</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <ProductionCard number="01" title="Plan around your workplace" body="Agree the audience, locations, schedule, access needs and program goals." />
              <ProductionCard number="02" title="Coordinate delivery" body="Match facilitators and formats, organise sessions and support participant communications." />
              <ProductionCard number="03" title="Review and adapt" body="Use participation, feedback and delivery experience to decide what should continue or change." />
            </div>
          </div>
        </ProductionContainer>
      </section>

      <section className="bg-[var(--cya-surface-base)] py-20 lg:py-24">
        <ProductionContainer>
          <ProductionKicker>What your organisation can expect</ProductionKicker>
          <h2 className="mt-5 max-w-4xl text-4xl font-bold lg:text-5xl">Clear planning, reliable delivery and useful review</h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-[var(--cya-body)]">Before your program begins, we agree what will be delivered, who it is for and how participation and progress will be reviewed.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <ProductionCard number="01" title="Agreed scope" body="Audience, locations, schedule, delivery formats and access requirements confirmed before launch." tone="field" />
            <ProductionCard number="02" title="Facilitator and format fit" body="The right facilitator and experience matched to your workplace, participants and program goals." tone="field" />
            <ProductionCard number="03" title="Clear participant access" body="Practical communications, voluntary participation and appropriate wellbeing boundaries established from the start." tone="field" />
            <ProductionCard number="04" title="Proportionate review" body="Aggregate participation, delivery experience and voluntary feedback used to inform what continues or changes." tone="field" />
          </div>
          <div className="mt-8 grid gap-6 border border-[var(--cya-divider)] bg-[var(--cya-surface-subtle)] px-8 py-9 md:grid-cols-[1fr_auto] md:items-center">
            <div><ProductionKicker>Flexible starting points</ProductionKicker><h3 className="mt-4 text-2xl font-semibold">Start with the level of support your organisation needs</h3><p className="mt-3 max-w-3xl text-[var(--cya-body)]">Begin with a focused pilot, a regular session schedule or a broader ongoing program. We will help you define a practical starting point.</p></div>
            <ProductionAction href="/contact?interest=program">Start planning</ProductionAction>
          </div>
        </ProductionContainer>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <ProductionContainer>
          <ProductionKicker>Participation and scope</ProductionKicker>
          <h2 className="mt-5 max-w-4xl text-4xl font-bold lg:text-5xl">Make the program easier to use without making it carry the whole wellbeing system</h2>
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
      <ProductionClosing heading="Shape a program people can trust" body="Start with the organisational need, practical constraints and the change you need to support." />
    </>
  );
}
