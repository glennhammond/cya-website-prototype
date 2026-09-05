import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceStructuredData } from "@/components/StructuredData";
import { ProductionAction, ProductionClosing, ProductionContainer, ProductionKicker } from "@/components/ProductionPrimitives";

export const metadata: Metadata = {
  title: { absolute: "Workplace Wellbeing Programs Australia | Corporate Yoga Australia" },
  description: "Tailored workplace wellbeing programs combining movement, mindfulness, workshops, expert experiences and ongoing support for Australian organisations.",
  alternates: { canonical: "/workplace-wellbeing-programs" },
};

const programSteps = [
  ["01", "Understand the workplace", "People, locations, schedules, working patterns and what needs to happen."],
  ["02", "Shape the right mix", "Choose useful experiences around the people, context and goals rather than a fixed package."],
  ["03", "Create a useful rhythm", "Build a cadence people can realistically participate in and return to across the working week."],
  ["04", "Learn and evolve", "Use aggregate participation, delivery experience and voluntary feedback to refine what continues."],
] as const;

const ingredients = [
  ["01", "Movement", "Yoga, Pilates, mobility and accessible movement for different workplace settings."],
  ["02", "Mindfulness and reset", "Meditation, breathing and short practices that help people pause, reset and return."],
  ["03", "Workplace moments", "Events, campaigns, wellbeing days and team activations built around a specific need."],
  ["04", "Ongoing support", "Regular live experiences with Wellbeing Studio support between scheduled moments."],
] as const;

const workplaceRhythms = [
  ["Office and professional environments", "Fit around meetings, shared spaces and desk-based working patterns."],
  ["Operational and industrial workplaces", "Adapt to shifts, environments, clothing, access and the space available."],
  ["Multi-site and distributed teams", "Coordinate a shared program while allowing delivery to work differently in each location."],
  ["Hybrid workforces", "Combine live and digital support without assuming everyone works in the same place or way."],
] as const;

const faqs = [
  ["What can a workplace wellbeing program include?", "A program can combine workplace yoga, Pilates, mindfulness, workshops, specialist sessions, campaigns, live online experiences and Wellbeing Studio support. The mix is shaped around your people, locations, schedules and goals rather than a fixed package."],
  ["Can programs support different locations, workforces and hybrid teams?", "Yes. We confirm the people, locations, access needs, available spaces and working patterns before recommending a mix of onsite delivery, live online sessions and ongoing digital support."],
  ["How do you decide how often sessions should run?", "Cadence depends on what the program is trying to support, the time people can realistically use and the working patterns of the organisation. A focused pilot, short series or regular rhythm can all be appropriate starting points."],
  ["How are facilitators and formats selected?", "Facilitators and formats are matched to the experience, participant group, workplace setting and program goals. The aim is to make delivery appropriate to the people and context rather than use one standard format everywhere."],
  ["How is participation reviewed?", "We use proportionate, privacy-aware measures such as aggregate participation, delivery experience and voluntary feedback. Individual wellbeing is not monitored or assessed."],
  ["Can we start small before committing to an ongoing program?", "Yes. A one-off experience, focused pilot or short series can be a useful way to learn what fits before deciding whether greater continuity would help."],
] as const;

export default function WorkplaceWellbeingProgramsPage() {
  return (
    <>
      <ServiceStructuredData name="Workplace Wellbeing Programs" description="Tailored workplace wellbeing programs combining human-led experiences, practical coordination and ongoing support for Australian teams." path="/workplace-wellbeing-programs" breadcrumbLabel="Workplace wellbeing programs" />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Workplace wellbeing programs" }]} />

      <section className="bg-[var(--cya-surface-page)] py-12 sm:py-14 lg:py-16">
        <ProductionContainer className="grid max-w-[1440px] gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-start lg:gap-14 xl:gap-16">
          <div className="pt-1 lg:pt-2">
            <ProductionKicker>Workplace wellbeing programs</ProductionKicker>
            <h1 className="mt-5 max-w-3xl text-[clamp(2.9rem,4.5vw,4.35rem)] font-bold leading-[1.03] tracking-[-0.025em] text-[var(--cya-teal-dark)]">Workplace wellbeing that works with the way your organisation works</h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-[var(--cya-charcoal)]">Workplace yoga, Pilates, mindfulness, workshops and ongoing wellbeing support for Australian organisations.</p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--cya-body)]">From one useful experience to an ongoing program, we help shape workplace wellbeing around your people, locations, schedules and the realities of the working day.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><ProductionAction href="/contact?interest=program">Plan your program</ProductionAction><ProductionAction href="#program-shape" style="secondary">See how programs take shape</ProductionAction></div>
          </div>
          <figure className="relative aspect-[1.08/1] overflow-hidden bg-white"><Image src="/images/selected/cya-workplace-wellbeing-hero-warehouse-group.webp" alt="Employees take part in a facilitated workplace wellbeing session in an operational workplace." fill priority sizes="(min-width: 1440px) 620px, (min-width: 1024px) 44vw, 100vw" className="object-cover" /></figure>
        </ProductionContainer>
        <ProductionContainer className="mt-8">
          <div className="grid border border-[var(--cya-divider)] bg-white md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
            <div className="px-5 py-4 sm:px-6"><p className="text-[0.64rem] font-bold uppercase tracking-[0.12em] text-[var(--cya-ochre-ink)]">Working context</p><p className="mt-1.5 text-sm font-semibold text-[var(--cya-teal-dark)]">People, place and pace</p></div><span aria-hidden="true" className="hidden self-center px-2 text-xl text-[var(--cya-ochre-ink)] md:block">→</span>
            <div className="border-t border-[var(--cya-divider)] px-5 py-4 sm:px-6 md:border-t-0"><p className="text-[0.64rem] font-bold uppercase tracking-[0.12em] text-[var(--cya-ochre-ink)]">Useful program</p><p className="mt-1.5 text-sm font-semibold text-[var(--cya-teal-dark)]">The right mix and rhythm</p></div><span aria-hidden="true" className="hidden self-center px-2 text-xl text-[var(--cya-ochre-ink)] md:block">→</span>
            <div className="border-t border-[var(--cya-divider)] px-5 py-4 sm:px-6 md:border-t-0"><p className="text-[0.64rem] font-bold uppercase tracking-[0.12em] text-[var(--cya-ochre-ink)]">Continuity</p><p className="mt-1.5 text-sm font-semibold text-[var(--cya-teal-dark)]">Support people can return to</p></div>
          </div>
        </ProductionContainer>
      </section>

      <section id="program-shape" className="bg-white py-20 lg:py-24"><ProductionContainer><ProductionKicker>How a program takes shape</ProductionKicker><h2 className="mt-5 max-w-5xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">Start with the workplace, then build the rhythm around it</h2><p className="mt-6 max-w-4xl text-lg leading-8 text-[var(--cya-body)]">A useful program is not assembled from a fixed package. We start with how work happens, shape the right mix of experiences and create a rhythm people can realistically use.</p><div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-4 md:gap-0 md:overflow-visible md:pb-0">{programSteps.map(([number,title,body])=><article key={number} className="min-w-[82%] snap-start border-y border-r border-[var(--cya-divider)] bg-[var(--cya-surface-page)] px-6 py-8 first:border-l sm:min-w-[60%] md:min-w-0"><p className="text-xs font-semibold text-[var(--cya-ochre-ink)]">{number}</p><h3 className="mt-5 text-xl font-semibold leading-7 text-[var(--cya-teal-dark)]">{title}</h3><p className="mt-3 leading-7 text-[var(--cya-body)]">{body}</p></article>)}</div><p className="mt-3 text-sm text-[var(--cya-body)] md:hidden">Swipe to see each step →</p></ProductionContainer></section>

      <section className="bg-[var(--cya-surface-page)] py-20 lg:py-24">
        <ProductionContainer>
          <ProductionKicker>What a program can include</ProductionKicker>
          <h2 className="mt-5 text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:whitespace-nowrap lg:text-[2.7rem] xl:text-5xl">The mix depends on what the workplace needs</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--cya-body)]">Familiar wellbeing experiences can work on their own or combine into a longer program. The value is in choosing what fits and connecting it deliberately.</p>
          <div className="mt-11 grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-stretch lg:gap-14">
            <div className="grid border-y border-[var(--cya-divider)] sm:grid-cols-2 lg:grid-cols-1">
              {ingredients.map(([number,title,body])=><article key={number} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-[var(--cya-divider)] py-5 last:border-b-0 sm:px-5 sm:first:pl-0 sm:nth-[2]:border-l sm:nth-[2]:pl-5 lg:border-l-0 lg:px-0 lg:nth-[2]:border-l-0 lg:nth-[2]:pl-0"><p className="pt-1 text-xs font-semibold text-[var(--cya-ochre-ink)]">{number}</p><div><h3 className="text-lg font-semibold text-[var(--cya-teal-dark)]">{title}</h3><p className="mt-2 leading-7 text-[var(--cya-body)]">{body}</p></div></article>)}
            </div>
            <figure className="relative min-h-[28rem] overflow-hidden bg-white"><Image src="/images/cya-library/IMG_5701.JPG" alt="Employees in high-visibility workwear take part in an outdoor workplace wellbeing session." fill sizes="(min-width: 1280px) 700px, (min-width: 1024px) 54vw, 100vw" className="object-cover" /></figure>
          </div>
        </ProductionContainer>
      </section>

      <section className="bg-white py-20 lg:py-24"><ProductionContainer className="grid gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-center lg:gap-16"><figure className="relative aspect-[4/3] overflow-hidden bg-[var(--cya-surface-page)]"><Image src="/images/selected/cya-programs-continuity-group-repeat.webp" alt="Participants stretch together during a facilitator-led workplace wellbeing session." fill sizes="(min-width: 1280px) 620px, (min-width: 1024px) 48vw, 100vw" className="object-cover" /></figure><div><ProductionKicker>Designed for participation</ProductionKicker><h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">A useful program has to work for the people using it</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--cya-body)]">Good intentions are not enough. Timing, location, access, communication and choice all affect whether people can realistically take part.</p><div className="mt-9 border-y border-[var(--cya-divider)]"><article className="border-b border-[var(--cya-divider)] py-5"><h3 className="text-xl font-semibold text-[var(--cya-teal-dark)]">Fits the working day</h3><p className="mt-2 leading-7 text-[var(--cya-body)]">Choose times, formats and locations that reflect how your people actually work.</p></article><article className="border-b border-[var(--cya-divider)] py-5"><h3 className="text-xl font-semibold text-[var(--cya-teal-dark)]">Clear to participants</h3><p className="mt-2 leading-7 text-[var(--cya-body)]">Explain what the experience involves, who it is for and how people can join.</p></article><article className="py-5"><h3 className="text-xl font-semibold text-[var(--cya-teal-dark)]">Voluntary and privacy-aware</h3><p className="mt-2 leading-7 text-[var(--cya-body)]">Use aggregate participation and voluntary feedback without assessing individual wellbeing.</p></article></div></div></ProductionContainer></section>

      <section className="bg-[var(--cya-surface-base)] py-20 lg:py-24"><ProductionContainer className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-stretch lg:gap-16"><figure className="relative min-h-[26rem] overflow-hidden bg-white lg:min-h-[34rem]"><Image src="/images/selected/cya-movement-group-industrial.webp" alt="Employees take part in a facilitated wellbeing session in an industrial workplace." fill sizes="(min-width: 1280px) 720px, (min-width: 1024px) 55vw, 100vw" className="object-cover" /></figure><div className="flex flex-col justify-center"><ProductionKicker>Different workplaces, different rhythms</ProductionKicker><h2 className="mt-5 max-w-2xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">The program changes with the workplace</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--cya-body)]">The same wellbeing idea can need a different delivery approach depending on the environment, workforce and way the day is structured.</p><div className="mt-8 border-y border-[var(--cya-divider)]">{workplaceRhythms.map(([title,body],index)=><article key={title} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-[var(--cya-divider)] py-4 last:border-b-0"><p className="pt-1 text-xs font-semibold text-[var(--cya-ochre-ink)]">{String(index+1).padStart(2,"0")}</p><div><h3 className="text-lg font-semibold text-[var(--cya-teal-dark)]">{title}</h3><p className="mt-1.5 leading-6 text-[var(--cya-body)]">{body}</p></div></article>)}</div></div></ProductionContainer></section>

      <section className="bg-[var(--cya-surface-page)] py-20 lg