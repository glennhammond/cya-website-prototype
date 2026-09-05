import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceStructuredData } from "@/components/StructuredData";
import { ProductionAction, ProductionContainer, ProductionKicker } from "@/components/ProductionPrimitives";

export const metadata: Metadata = {
  title: { absolute: "Workplace Wellbeing Workshops Australia | Corporate Yoga Australia" },
  description: "Expert-led workplace wellbeing workshops, Lunch & Learns and facilitated experiences for Australian teams, shaped around the audience and workplace context.",
  alternates: { canonical: "/workplace-wellbeing-workshops" },
};

const formats = [
  ["01", "Lunch & Learns", "Accessible expert-led sessions that fit naturally into the working day."],
  ["02", "Workshops", "More space for participation, discussion and practical application around a useful topic."],
  ["03", "Events & campaigns", "A focused experience for wellbeing days, workplace campaigns, conferences and team moments."],
] as const;

const process = [
  ["01", "Understand the audience and context"],
  ["02", "Choose the topic and right expert"],
  ["03", "Shape the format for participation"],
  ["04", "Create a useful next step"],
] as const;

const faqs = [
  ["Can you recommend a topic for our workplace?", "Yes. Start with the audience, context and what you would like the experience to support. We can then help shape a relevant topic and format rather than asking you to choose from a generic speaker catalogue."],
  ["How long can a workshop or Lunch & Learn run?", "The length depends on the topic, audience and level of participation required. A concise Lunch & Learn and a more participatory workshop serve different purposes, so we confirm the right format during planning."],
  ["Can sessions be delivered online or across multiple locations?", "Yes. Expert experiences can be delivered onsite or live online, and the format can be shaped for distributed teams where that makes participation easier."],
  ["Are workshops clinical or therapeutic?", "No. Workplace wellbeing workshops are educational and experiential rather than clinical care. Where a topic touches mental health or psychosocial wellbeing, the scope and facilitator boundaries are made clear."],
] as const;

export default function WorkplaceWellbeingWorkshopsPage() {
  return (
    <>
      <ServiceStructuredData name="Workplace Wellbeing Workshops & Expert Experiences" description="Expert-led workplace wellbeing workshops, Lunch & Learns and facilitated experiences for Australian teams." path="/workplace-wellbeing-workshops" breadcrumbLabel="Workplace Wellbeing Workshops" />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Workplace Wellbeing Workshops" }]} />

      <section className="bg-[var(--cya-surface-page)] py-12 sm:py-14 lg:py-16">
        <ProductionContainer className="grid max-w-[1440px] gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-14 xl:gap-16">
          <div><ProductionKicker>Workshops & expert experiences</ProductionKicker><h1 className="mt-5 max-w-3xl text-[clamp(3rem,4.8vw,4.55rem)] font-bold leading-[1.03] tracking-[-0.025em] text-[var(--cya-teal-dark)]">Useful workplace conversations, led by the right expertise</h1><p className="mt-7 max-w-2xl text-xl leading-8 text-[var(--cya-body)]">Workshops, Lunch & Learns and expert-led experiences shaped around the audience, the workplace and what would be useful now.</p><div className="mt-9"><ProductionAction href="/contact?interest=workshop">Tell us what you’re planning</ProductionAction></div></div>
          <figure className="relative aspect-[4/3] overflow-hidden bg-white"><Image src="/images/selected/cya-workplace-wellbeing-lunch-learn-team.webp" alt="A small workplace team takes part in a facilitator-led wellbeing experience in an office breakout space." fill priority sizes="(min-width: 1280px) 620px, (min-width: 1024px) 48vw, 100vw" className="object-cover" /></figure>
        </ProductionContainer>
        <ProductionContainer className="mt-10"><div className="grid border-t border-[var(--cya-ochre)] pt-6 md:grid-cols-2 md:items-center"><h2 className="text-2xl font-semibold tracking-[-0.015em] text-[var(--cya-teal-dark)]">Wellbeing belongs in the workday</h2><p className="mt-3 text-base text-[var(--cya-teal-dark)] md:mt-0 md:text-right">Relevant expertise, thoughtful facilitation and somewhere useful to go next.</p></div></ProductionContainer>
      </section>

      <section className="bg-white py-20 lg:py-24"><ProductionContainer className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16"><figure className="relative aspect-[4/3] overflow-hidden bg-[var(--cya-surface-page)]"><Image src="/images/selected/cya-conferences-hero-facilitator-led-group.webp" alt="A facilitator leads a group through an engaging workplace wellbeing experience." fill sizes="(min-width: 1280px) 620px, (min-width: 1024px) 50vw, 100vw" className="object-cover" /></figure><div><ProductionKicker>Begin with the conversation</ProductionKicker><h2 className="mt-5 max-w-2xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">The topic matters. So does how people experience it</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--cya-body)]">We start with the workplace need, then match the topic, expert and format. The aim is not simply to fill a speaking slot, but to create a useful experience people can engage with and take something from.</p><div className="mt-8"><ProductionAction href="/contact?interest=workshop" style="secondary">Discuss your workplace</ProductionAction></div></div></ProductionContainer></section>

      <section className="bg-[var(--cya-surface-page)] py-20 lg:py-24"><ProductionContainer><ProductionKicker>Ways to bring expertise in</ProductionKicker><h2 className="mt-5 max-w-4xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">Choose a format that fits the moment</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--cya-body)]">Start with the audience, time available and the kind of participation that would be useful.</p><div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">{formats.map(([number,title,body]) => <article key={number} className="min-w-[84%] snap-start border-y border-[var(--cya-divider)] bg-white px-1 py-7 sm:min-w-[60%] md:min-w-0 md:px-6"><p className="text-xs font-semibold text-[var(--cya-ochre-ink)]">{number}</p><h3 className="mt-4 text-2xl font-semibold text-[var(--cya-teal-dark)]">{title}</h3><p className="mt-4 leading-7 text-[var(--cya-body)]">{body}</p></article>)}</div><p className="mt-2 text-sm text-[var(--cya-body)] md:hidden">Swipe to explore →</p></ProductionContainer></section>

      <section className="bg-white py-20 lg:py-24"><ProductionContainer className="grid gap-12 lg:grid-cols-[minmax(18rem,0.75fr)_minmax(0,1.25fr)] lg:gap-20"><div><ProductionKicker>How we work with you</ProductionKicker><h2 className="mt-5 max-w-xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">Bring the right expertise into the room</h2><p className="mt-6 max-w-xl text-lg leading-8 text-[var(--cya-body)]">A clear brief helps the experience feel relevant to your people and workable for the organisation.</p></div><div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:block md:overflow-visible md:pb-0">{process.map(([number,title]) => <article key={number} className="min-w-[78%] snap-start border-y border-[var(--cya-divider)] px-2 py-7 md:grid md:min-w-0 md:grid-cols-[3rem_1fr] md:border-t-0 md:border-b md:px-0 md:first:border-t"><p className="text-xs font-semibold text-[var(--cya-ochre-ink)]">{number}</p><h3 className="mt-3 text-xl font-semibold leading-7 text-[var(--cya-charcoal)] md:mt-0">{title}</h3></article>)}</div><p className="text-sm text-[var(--cya-body)] md:hidden lg:col-start-2">Swipe to continue →</p></ProductionContainer></section>

      <section className="bg-[var(--cya-surface-base)] py-20 lg:py-24"><ProductionContainer className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16"><div><ProductionKicker>From interruption to return</ProductionKicker><h2 className="mt-5 max-w-2xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">Give the conversation somewhere useful to go next</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--cya-body)]">A workshop or expert experience can be a useful interruption in the day. Where it helps, practical actions, shared language, resources or ongoing wellbeing support can make the moment easier to return to afterwards.</p><div className="mt-8"><ProductionAction href="/workplace-wellbeing-programs">Explore ongoing programs</ProductionAction></div></div><figure className="relative aspect-[16/9] overflow-hidden bg-white"><Image src="/images/selected/cya-conferences-studio-remote-grid.webp" alt="Colleagues connect remotely as part of a workplace wellbeing experience." fill sizes="(min-width: 1024px) 56vw, 100vw" className="object-cover" /></figure></ProductionContainer></section>

      <section className="bg-white py-20 lg:py-24"><ProductionContainer className="grid gap-10 lg:grid-cols-[minmax(16rem,0.65fr)_minmax(0,1.35fr)] lg:gap-20"><div><ProductionKicker>Practical questions</ProductionKicker><h2 className="mt-5 text-4xl font-bold tracking-[-0.018em] text-[var(--cya-charcoal)] lg:text-5xl">Questions organisations often ask</h2></div><div className="border-t border-[var(--cya-divider)]">{faqs.map(([question,answer]) => <details key={question} className="group border-b border-[var(--cya-divider)] py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-[var(--cya-charcoal)]"><span>{question}</span><span aria-hidden="true" className="text-xl transition-transform group-open:rotate-45">+</span></summary><p className="mt-4 max-w-3xl pr-10 leading-7 text-[var(--cya-body)]">{answer}</p></details>)}</div></ProductionContainer></section>

      <section className="border-t border-[var(--cya-ochre)] bg-[var(--cya-surface-page)] py-16 lg:py-20"><ProductionContainer className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center"><div><h2 className="max-w-3xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">What conversation would be useful for your workplace?</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--cya-teal-dark)]">Tell us about the audience, context and what you would like the experience to support.</p></div><ProductionAction href="/contact?interest=workshop">Start a conversation</ProductionAction></ProductionContainer></section>
    </>
  );
}
