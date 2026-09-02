import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceStructuredData } from "@/components/StructuredData";
import { ProductionAction, ProductionCard, ProductionClosing, ProductionContainer, ProductionKicker } from "@/components/ProductionPrimitives";

export const metadata: Metadata = { title: { absolute: "Workplace Wellbeing Workshops Australia | Corporate Yoga Australia" }, description: "Expert-led workplace wellbeing workshops and Lunch & Learns for Australian teams.", alternates: { canonical: "/workplace-wellbeing-workshops" } };

export default function WorkplaceWellbeingWorkshopsPage() {
  return <>
    <ServiceStructuredData name="Workplace Wellbeing Workshops & Expert Experiences" description="Expert-led workplace wellbeing workshops and Lunch & Learns for Australian teams." path="/workplace-wellbeing-workshops" breadcrumbLabel="Workplace Wellbeing Workshops" />
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Workplace Wellbeing Workshops" }]} />
    <section className="bg-[var(--cya-surface-page)] py-16 lg:py-20">
      <ProductionContainer className="grid gap-10 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] lg:items-center lg:gap-14 xl:gap-16">
        <div>
          <ProductionKicker>Workshops · talks · facilitated experiences</ProductionKicker>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-[1.05]">Expert-led experiences that create useful workplace conversation</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--cya-body)]">Credible people, relevant topics and formats shaped around the organisation—not a generic speaker catalogue.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><ProductionAction href="/contact?interest=workshop">Plan an expert experience</ProductionAction><ProductionAction href="#topics" style="secondary">Explore topics</ProductionAction></div>
        </div>
        <figure className="overflow-hidden border border-[var(--cya-divider)] bg-white">
          <div className="relative aspect-[3/2]">
            <Image src="/images/selected/cya-workplace-wellbeing-lunch-learn-team.webp" alt="A small workplace team takes part in a facilitator-led wellbeing session in an office breakout space." fill priority sizes="(min-width: 1440px) 610px, (min-width: 1024px) 46vw, 100vw" className="object-cover object-center" />
          </div>
          <figcaption className="grid gap-3 border-t border-[var(--cya-divider)] bg-[var(--cya-surface-subtle)] px-5 py-4 sm:grid-cols-[auto_1fr] sm:items-baseline sm:gap-5">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[var(--cya-ochre-ink)]">In the working day</span>
            <span className="text-base font-semibold leading-6 text-[var(--cya-teal-dark)]">A useful conversation, with somewhere to go next</span>
          </figcaption>
        </figure>
      </ProductionContainer>
    </section>
    <section className="bg-[var(--cya-surface-subtle)] py-16 lg:py-20">
      <ProductionContainer className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-14">
        <div><ProductionKicker>What makes it credible</ProductionKicker><h2 className="mt-5 max-w-2xl text-3xl font-bold lg:text-4xl">The expert matters. So does the way the session fits the room</h2></div>
        <div className="border-y border-[var(--cya-divider)]">
          <div className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-[var(--cya-divider)] py-5"><span className="pt-1 text-xs font-semibold text-[var(--cya-ochre-ink)]">01</span><div><h3 className="text-xl font-semibold text-[var(--cya-teal-dark)]">Topic relevance</h3><p className="mt-2 leading-7 text-[var(--cya-body)]">Begin with the workplace conversation, audience and context rather than a generic catalogue.</p></div></div>
          <div className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-[var(--cya-divider)] py-5"><span className="pt-1 text-xs font-semibold text-[var(--cya-ochre-ink)]">02</span><div><h3 className="text-xl font-semibold text-[var(--cya-teal-dark)]">Expert authority</h3><p className="mt-2 leading-7 text-[var(--cya-body)]">Relevant knowledge, clear boundaries and an expert whose experience matches the topic.</p></div></div>
          <div className="grid grid-cols-[2.5rem_1fr] gap-4 py-5"><span className="pt-1 text-xs font-semibold text-[var(--cya-ochre-ink)]">03</span><div><h3 className="text-xl font-semibold text-[var(--cya-teal-dark)]">Participation design</h3><p className="mt-2 leading-7 text-[var(--cya-body)]">A format that makes attention, discussion and useful application possible without forcing participation.</p></div></div>
        </div>
      </ProductionContainer>
    </section>
    <section id="topics" className="bg-white py-20 lg:py-24"><ProductionContainer><ProductionKicker>Topic-led discovery</ProductionKicker><h2 className="mt-5 text-4xl font-bold lg:text-5xl">Begin with the conversation the workplace needs</h2><p className="mt-5 max-w-4xl text-lg text-[var(--cya-body)]">Expert Experiences are selected by relevance, credibility and participation design—not speaker celebrity alone.</p><div className="mt-10 grid gap-5 md:grid-cols-3"><ProductionCard title="Mental fitness and sustainable performance" body="Practical ways to think about attention, pressure, recovery and working rhythm." /><ProductionCard title="Communication and connection" body="Useful conversations about trust, listening, boundaries and team relationships." /><ProductionCard title="Sleep, energy and everyday wellbeing" body="Credible expertise translated into actions people can use beyond the session." /></div></ProductionContainer></section>
    <section className="bg-[var(--cya-surface-page)] py-20 lg:py-24"><ProductionContainer><ProductionKicker>From interruption to return</ProductionKicker><h2 className="mt-5 text-4xl font-bold lg:text-5xl">Relevant expertise, thoughtful facilitation and a useful next step</h2><p className="mt-5 max-w-4xl text-lg leading-8 text-[var(--cya-body)]">The session is the interruption, not the destination. Where useful, the conversation can lead back into the workday through a practical action, shared language or a resource people can return to.</p><div className="mt-10 grid gap-5 md:grid-cols-3"><ProductionCard title="Expert authority" body="Relevant professional knowledge and clear boundaries." tone="paper" /><ProductionCard title="Facilitation" body="A format designed for participation, not a one-way lecture." tone="paper" /><ProductionCard title="Continuation" body="Insights or Online Wellbeing resources can extend the useful moment." tone="paper" /></div></ProductionContainer></section>
    <ProductionClosing heading="Bring the right expertise into the room" body="Start with the topic, audience and conversation the organisation needs." href="/contact?interest=workshop" action="Plan an expert experience" />
  </>;
}
