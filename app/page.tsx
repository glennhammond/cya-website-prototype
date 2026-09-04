import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeStructuredData } from "@/components/StructuredData";
import { HomepageProof } from "@/components/HomepageProof";
import { ExperiencePathway } from "@/components/ExperiencePathway";
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
      <section className="bg-[var(--cya-surface-page)] py-10 sm:py-12 lg:py-14">
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-start lg:gap-x-12 xl:gap-x-16">
            <div className="pt-1 lg:pt-2">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[var(--cya-ochre-ink)]">Workday moment</p>
              <h1 className="mt-4 text-[clamp(2.9rem,3.7vw,4.1rem)] font-bold leading-[1.02] tracking-[-0.028em] text-[var(--cya-teal)]">
                <span className="hidden lg:block whitespace-nowrap">Work Wellness into</span>
                <span className="hidden lg:block whitespace-nowrap">Your Workday</span>
                <span className="lg:hidden">Work Wellness into Your Workday</span>
              </h1>
              <p className="mt-7 max-w-[39rem] text-[clamp(1rem,1.25vw,1.16rem)] leading-[1.55] text-[var(--cya-charcoal)]">Workplace yoga, Pilates, mindfulness and tailored wellbeing programs for Australian organisations.</p>
              <p className="mt-5 max-w-[39rem] text-[clamp(0.96rem,1.1vw,1.06rem)] leading-[1.6] text-[var(--cya-body)]">We help organisations make wellbeing part of working life—through useful experiences designed around the people, pace and realities of the workday.</p>
              <div className="mt-11 flex flex-col gap-3 sm:flex-row">
                <ProductionAction href="/workplace-wellbeing-programs">Explore workplace wellbeing programs</ProductionAction>
                <div className="hidden sm:block"><ProductionAction href="/contact" style="secondary">Start planning</ProductionAction></div>
              </div>
            </div>

            <figure className="relative aspect-[1.08/1] w-full overflow-hidden bg-white lg:mt-0">
              <Image src="/images/selected/cya-home-hero-debby-workplace-movement.jpg" alt="A Corporate Yoga Australia facilitator leads an approachable movement session with a workplace participant." fill priority sizes="(min-width: 1536px) 620px, (min-width: 1280px) 43vw, (min-width: 1024px) 42vw, 100vw" className="object-cover object-[center_52%]" />
            </figure>
          </div>

          <div className="mt-8 grid border border-[var(--cya-divider)] bg-white md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
            <div className="px-5 py-4 sm:px-6">
              <p className="text-[0.64rem] font-bold uppercase tracking-[0.12em] text-[var(--cya-ochre-ink)]">Working moment</p>
              <p className="mt-1.5 text-sm font-semibold text-[var(--cya-teal-dark)]">Back-to-back meetings</p>
            </div>
            <span aria-hidden="true" className="hidden self-center px-2 text-xl text-[var(--cya-ochre-ink)] md:block">→</span>
            <div className="border-t border-[var(--cya-divider)] px-5 py-4 sm:px-6 md:border-t-0">
              <p className="text-[0.64rem] font-bold uppercase tracking-[0.12em] text-[var(--cya-ochre-ink)]">Useful interruption</p>
              <p className="mt-1.5 text-sm font-semibold text-[var(--cya-teal-dark)]">Short, accessible movement</p>
            </div>
            <span aria-hidden="true" className="hidden self-center px-2 text-xl text-[var(--cya-ochre-ink)] md:block">→</span>
            <div className="border-t border-[var(--cya-divider)] px-5 py-4 sm:px-6 md:border-t-0">
              <p className="text-[0.64rem] font-bold uppercase tracking-[0.12em] text-[var(--cya-ochre-ink)]">Return</p>
              <p className="mt-1.5 text-sm font-semibold text-[var(--cya-teal-dark)]">Back to the workday</p>
            </div>
          </div>
        </div>
      </section>

      <section id="needs" className="scroll-mt-24 bg-[var(--cya-surface-subtle)] py-20 lg:py-24">
        <ProductionContainer>
          <ProductionKicker>What would help you right now?</ProductionKicker>
          <h2 className="mt-5 text-4xl font-bold tracking-[-0.015em] lg:text-5xl">What are you planning for your workplace?</h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-[var(--cya-body)]">You do not need to choose a package first. Start with what needs to happen, who it is for and what working life looks like there.</p>
          <div className="mt-10 border-t border-[var(--cya-divider)]">
            {needs.map(([number, title, href]) => <Link key={number} href={href} className="grid grid-cols-[auto_1fr_auto] gap-5 border-x border-b border-[var(--cya-divider)] bg-white px-6 py-5 hover:bg-[var(--cya-surface-page)]"><span className="text-xs font-semibold text-[var(--cya-ochre-ink)]">{number}</span><span className="text-xl font-semibold">{title}</span><span aria-hidden="true">→</span></Link>)}
          </div>
        </ProductionContainer>
      </section>

      <ExperiencePathway
        kicker="Familiar enough to find fast"
        heading="Choose an experience directly"
        body="If you know the kind of experience you are looking for, start there. We can then shape it around your people, place and working day."
        items={[
          { label: "Movement", href: "/movement" },
          { label: "Workplace Yoga", href: "/workplace-yoga" },
          { label: "Workplace Pilates", href: "/workplace-pilates" },
          { label: "Meditation & Mindfulness", href: "/meditation-mindfulness" },
          { label: "Workshops & Expert Experiences", href: "/workplace-wellbeing-workshops" },
        ]}
        image={{
          src: "/images/selected/cya-home-hero-workplace-session.webp",
          alt: "Workplace participants take part in a guided seated wellbeing session in a meeting room.",
        }}
        detailLabel="Human signal detail · Between meetings"
        detailHeading="The meeting room was already there"
        detailBody="Movement fits the setting instead of asking people to leave working life behind."
      />

      <HomepageProof />

      <section className="bg-[var(--cya-surface-subtle)] py-20 lg:py-24">
        <ProductionContainer className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.72fr)] lg:items-start lg:gap-16">
          <div>
            <ProductionKicker>What we mean by Work Wellness</ProductionKicker>
            <h2 className="mt-5 max-w-4xl text-4xl font-bold tracking-[-0.015em] lg:text-5xl">Wellbeing that can become part of working life</h2>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-[var(--cya-body)]">Work Wellness is the connective idea behind the different ways we support workplaces: useful opportunities to move, pause, reset, connect and learn in ways that fit the reality of the working day.</p>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-[var(--cya-body)]">It does not replace workplace wellbeing. Workplace wellbeing is broader and includes work design, leadership, culture, psychosocial safety and working conditions. Work Wellness describes the part we help organisations make tangible and usable in everyday working life.</p>
            <div className="mt-8"><ProductionAction href="/blog/what-is-work-wellness" style="secondary">What is Work Wellness?</ProductionAction></div>
          </div>
          <aside className="border border-[var(--cya-divider)] bg-white px-7 py-8">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--cya-ochre-ink)]">A useful boundary</p>
            <p className="mt-5 text-xl font-semibold leading-8 text-[var(--cya-teal-dark)]">Work Wellness complements good work design. It does not substitute for it.</p>
          </aside>
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
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--cya-body)]">As part of ongoing support, Wellbeing Studio gives people practical actions, live connection and useful wellbeing resources they can return to across the working week. It extends our human-led support rather than replacing the human experience.</p>
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
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--cya-body)]">After a mindfulness, breathing and seated-yoga session for the Australian Veterinary Association, Corporate Yoga Australia received feedback that employees were already using some of the practices the following day, including during their commute and at home.</p>
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
