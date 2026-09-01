import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeStructuredData } from "@/components/StructuredData";
import { HomepageProof } from "@/components/HomepageProof";
import { ProductionAction, ProductionCard, ProductionClosing, ProductionContainer, ProductionKicker } from "@/components/ProductionPrimitives";

export const metadata: Metadata = {
  title: { absolute: "Corporate Yoga Australia | Workplace Wellbeing Programs" },
  description: "Work wellness into your workday with workplace yoga, Pilates, mindfulness and tailored wellbeing programs delivered across Australia.",
  alternates: { canonical: "/" },
};

const needs = [
  ["01", "Arrange a one-off workplace yoga, Pilates or mindfulness session", "/contact?interest=one-off"],
  ["02", "Add movement or mindfulness to a conference or event", "/conferences-events"],
  ["03", "Plan a wellbeing day or workplace campaign", "/contact?interest=one-off"],
  ["04", "Create an ongoing workplace wellbeing program", "/workplace-wellbeing-programs"],
  ["05", "Plan a wellbeing workshop or specialist session", "/workplace-wellbeing-workshops"],
  ["06", "Discuss what would work for your organisation", "/contact"],
] as const;

export default function Home() {
  return (
    <>
      <HomeStructuredData />
      <section className="bg-[var(--cya-surface-page)] py-16 sm:py-20 lg:py-24">
        <ProductionContainer className="grid max-w-[1440px] lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-x-14 xl:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] xl:gap-x-16">
          <h1 className="max-w-3xl text-[clamp(3rem,4.2vw,4.5rem)] font-bold leading-[1.07] tracking-[-0.02em] text-[var(--cya-teal)] lg:col-start-1 lg:row-start-1">Work Wellness into Your Workday</h1>
          <p className="mt-7 max-w-3xl text-[clamp(1.15rem,1.6vw,1.4rem)] leading-[1.55] text-[var(--cya-body)] lg:col-start-1 lg:row-start-2">From workplace yoga and Pilates to workshops, conferences, events and ongoing wellbeing programs, we help organisations make wellbeing part of working life in ways that fit their people, context and working day.</p>
          <figure className="relative mt-10 aspect-[3/2] overflow-hidden border border-[var(--cya-divider)] bg-white lg:col-start-2 lg:row-start-1 lg:row-span-3 lg:mt-0 lg:self-start">
            <Image src="/images/selected/cya-home-hero-debby-workplace-movement.jpg" alt="A Corporate Yoga Australia facilitator leads an approachable movement session with a workplace participant." fill priority sizes="(min-width: 1536px) 672px, (min-width: 1280px) 46vw, (min-width: 1024px) 44vw, 100vw" className="object-cover object-[center_52%]" />
          </figure>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:col-start-1 lg:row-start-3">
            <ProductionAction href="/contact">Start planning</ProductionAction>
            <ProductionAction href="/workplace-wellbeing-programs" style="secondary">Explore workplace wellbeing programs</ProductionAction>
          </div>
        </ProductionContainer>
      </section>

      <section id="needs" className="bg-[var(--cya-surface-subtle)] py-20 lg:py-24">
        <ProductionContainer>
          <ProductionKicker>Start with your goal</ProductionKicker>
          <h2 className="mt-5 text-4xl font-bold tracking-[-0.015em] lg:text-5xl">What are you planning for your workplace?</h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-[var(--cya-body)]">You do not need to choose a package first. Start with what needs to happen, who it is for and what working life looks like there.</p>
          <div className="mt-10 border-t border-[var(--cya-divider)]">
            {needs.map(([number, title, href]) => <Link key={number} href={href} className="grid grid-cols-[auto_1fr_auto] gap-5 border-x border-b border-[var(--cya-divider)] bg-white px-6 py-5 hover:bg-[var(--cya-surface-page)]"><span className="text-xs font-semibold text-[var(--cya-ochre-ink)]">{number}</span><span className="text-xl font-semibold">{title}</span><span aria-hidden="true">→</span></Link>)}
          </div>
        </ProductionContainer>
      </section>

      <HomepageProof />

      <section className="bg-[var(--cya-surface-page)] py-20 lg:py-24">
        <ProductionContainer>
          <ProductionKicker>What we offer</ProductionKicker>
          <h2 className="mt-5 text-3xl font-bold lg:text-4xl">Explore our workplace wellbeing services</h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-[var(--cya-body)]">Choose a familiar starting point or talk to us about the workplace situation first. These services can stand alone or connect where continuity would be useful.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <ProductionCard number="01" title="Workplace Yoga" body="Calm, mobility and reset, adapted to the room and confidence of the group." href="/workplace-yoga" />
            <ProductionCard number="02" title="Workplace Pilates" body="Strength, posture and focused movement shaped around a practical workplace set-up." href="/workplace-pilates" />
            <ProductionCard number="03" title="Mindfulness & Meditation" body="Approachable moments of attention, calm and guided pause without pressure to perform." href="/meditation-mindfulness" />
            <ProductionCard number="04" title="Movement" body="Compare yoga, Pilates and adaptable movement through the people, place and moment." href="/movement" />
            <ProductionCard number="05" title="Workshops & Expert Experiences" body="Practical learning, relevant expertise and useful workplace conversation." href="/workplace-wellbeing-workshops" />
            <ProductionCard number="06" title="Online Wellbeing" body="Human-led continuity for hybrid, remote and distributed teams." href="/online-wellbeing" />
          </div>
        </ProductionContainer>
      </section>

      <section className="bg-[var(--cya-surface-subtle)] py-20 lg:py-24">
        <ProductionContainer>
          <ProductionKicker>One-off or ongoing</ProductionKicker>
          <h2 className="mt-5 max-w-4xl text-4xl font-bold lg:text-5xl">Start with what helps now. Add continuity where it helps</h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-[var(--cya-body)]">One useful experience can be enough. When repeating or connecting support would make it easier for people to take part and return, we can build that continuity around your workplace.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <ProductionCard title="One useful experience" body="Workplace yoga, Pilates, mindfulness, a workshop or an event session for a particular team, moment or need." />
            <ProductionCard title="Repeat what works" body="Keep a useful live experience available through a regular rhythm or short series shaped around your people and workplace." />
            <ProductionCard title="Support between live moments" body="For ongoing programs, Wellbeing Studio can give participants useful support they can return to between scheduled sessions and throughout the working week." />
          </div>
        </ProductionContainer>
      </section>

      <section className="bg-[var(--cya-surface-base)] py-20 lg:py-24">
        <ProductionContainer className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-center lg:gap-16">
          <div>
            <ProductionKicker>Wellbeing Studio by Corporate Yoga Australia</ProductionKicker>
            <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-[-0.015em] lg:text-5xl">Useful wellbeing support between live moments</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--cya-body)]">As part of ongoing support, Wellbeing Studio gives people practical actions, live connection and useful wellbeing resources they can return to across the working week. It extends the CYA relationship rather than replacing the human experience.</p>
            <div className="mt-8"><ProductionAction href="/online-wellbeing" style="secondary">Explore online wellbeing</ProductionAction></div>
          </div>
          <figure className="relative aspect-[2048/970] overflow-hidden border border-[var(--cya-divider)] bg-[var(--cya-surface-page)]">
            <Image src="/images/selected/wellbeing-studio-placeholder.png" alt="Wellbeing Studio interface showing options for different moments in the working day." fill sizes="(min-width: 1024px) 54vw, 100vw" className="object-contain" />
          </figure>
        </ProductionContainer>
      </section>

      <section className="bg-[var(--cya-surface-page)] py-20 lg:py-24">
        <ProductionContainer className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-16">
          <div>
            <ProductionKicker>Experience in practice</ProductionKicker>
            <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-[-0.015em] lg:text-5xl">Useful enough to take back into the day</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--cya-body)]">After a mindfulness, breathing and seated-yoga session for the Australian Veterinary Association, CYA received feedback that employees were already using some of the practices the following day, including during their commute and at home.</p>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-[var(--cya-body)]">This is client-reported feedback from a specific engagement, not a claim that every session produces the same result.</p>
          </div>
          <div className="border border-[var(--cya-divider)] bg-[var(--cya-surface-warm)] px-7 py-8 sm:px-9">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--cya-ochre-ink)]">Different work proves different things</p>
            <dl className="mt-7 border-t border-[var(--cya-mid-neutral)]/50">
              <div className="border-b border-[var(--cya-mid-neutral)]/50 py-5"><dt className="text-lg font-semibold text-[var(--cya-teal-dark)]">Around 1,000 participants</dt><dd className="mt-2 leading-7 text-[var(--cya-body)]">Virtual conference delivery for Optometry Australia, followed by repeat engagement.</dd></div>
              <div className="border-b border-[var(--cya-mid-neutral)]/50 py-5"><dt className="text-lg font-semibold text-[var(--cya-teal-dark)]">Three cities on one day</dt><dd className="mt-2 leading-7 text-[var(--cya-body)]">Coordinated sessions for Valiant Furniture in Brisbane, Melbourne and Sydney.</dd></div>
              <div className="py-5"><dt className="text-lg font-semibold text-[var(--cya-teal-dark)]">Multi-state continuity</dt><dd className="mt-2 leading-7 text-[var(--cya-body)]">Cromwell Property Group experience spanning Queensland, New South Wales and Victoria, alongside digital support.</dd></div>
            </dl>
          </div>
        </ProductionContainer>
      </section>

      <ProductionClosing heading="Plan something that fits" body="Tell us what needs to happen, who it is for and what working life looks like there. We’ll help shape a practical next step." />
    </>
  );
}
