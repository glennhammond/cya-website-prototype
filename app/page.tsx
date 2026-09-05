import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeStructuredData } from "@/components/StructuredData";
import { HomepageProof } from "@/components/HomepageProof";
import { ExperiencePathway } from "@/components/ExperiencePathway";
import { ProductionAction, ProductionClosing, ProductionContainer, ProductionKicker } from "@/components/ProductionPrimitives";

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

const rightNowActions = [
  ["01", "Reset posture", "/movement"],
  ["02", "Clear the head", "/meditation-mindfulness"],
  ["03", "Ease something specific", "/contact"],
] as const;

const insights = [
  ["01", "Introducing yoga at work", "/blog"],
  ["02", "A simple chair stretch technique", "/blog"],
  ["03", "Latest expert field notes", "/blog"],
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
                <span className="hidden whitespace-nowrap lg:block">Work Wellness into</span>
                <span className="hidden whitespace-nowrap lg:block">Your Workday</span>
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

      <section id="needs" className="scroll-mt-24 bg-[var(--cya-surface-base)] py-20 lg:py-24">
        <ProductionContainer>
          <ProductionKicker>What would help you right now?</ProductionKicker>
          <h2 className="mt-5 text-4xl font-bold tracking-[-0.015em] lg:text-5xl">What are you planning for your workplace?</h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-[var(--cya-body)]">You do not need to choose a package first. Start with what needs to happen, who it is for and what working life looks like there.</p>
          <div className="mt-12 border-y border-[var(--cya-divider)]">
            {needs.map(([number, title, href]) => (
              <Link key={number} href={href} className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-b border-[var(--cya-divider)] px-1 py-6 transition-colors duration-200 last:border-b-0 hover:bg-[var(--cya-surface-page)] sm:grid-cols-[3rem_1fr_auto] sm:px-4">
                <span className="text-xs font-semibold text-[var(--cya-ochre-ink)]">{number}</span>
                <span className="text-lg font-semibold text-[var(--cya-charcoal)] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[var(--cya-teal-dark)] sm:text-xl">{title}</span>
                <span aria-hidden="true" className="text-xl text-[var(--cya-teal-dark)] transition-transform duration-200 group-hover:translate-x-1.5">→</span>
              </Link>
            ))}
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
      />

      <HomepageProof />

      <section className="bg-[var(--cya-surface-page)] py-20 lg:py-24">
        <ProductionContainer className="grid gap-10 lg:grid-cols-[minmax(0,0.94fr)_minmax(24rem,0.86fr)] lg:items-start lg:gap-16 xl:gap-20">
          <div className="lg:pt-3">
            <ProductionKicker>Work with the moment</ProductionKicker>
            <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-[-0.02em] lg:text-5xl">Take one useful thing with you</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--cya-body)]">Wellbeing does not need to become another task on the list. Sometimes one useful action is enough to interrupt the pattern and make the next part of the day easier.</p>
            <div className="mt-8"><ProductionAction href="/blog/what-is-work-wellness" style="secondary">Explore Work Wellness</ProductionAction></div>
          </div>

          <aside className="bg-[var(--cya-teal-dark)] px-7 py-8 text-white sm:px-9 sm:py-10">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--cya-ochre)]">What would help you right now?</p>
            <p className="mt-4 max-w-lg text-sm leading-6 text-white/75">Choose one small action. Come back when you need another.</p>
            <div className="mt-7 border-t border-white/20">
              {rightNowActions.map(([number, label, href]) => (
                <Link key={number} href={href} className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 border-b border-white/20 py-5">
                  <span className="text-[0.68rem] font-semibold text-[var(--cya-ochre)]">{number}</span>
                  <span className="font-semibold text-white transition-transform duration-200 group-hover:translate-x-1">{label}</span>
                  <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1.5">→</span>
                </Link>
              ))}
            </div>
          </aside>
        </ProductionContainer>
      </section>

      <section className="bg-[var(--cya-surface-warm)] py-20 lg:py-24">
        <ProductionContainer>
          <div className="max-w-4xl">
            <ProductionKicker>People, place and working life</ProductionKicker>
            <h2 className="mt-5 text-4xl font-bold tracking-[-0.02em] lg:text-5xl">Wellbeing should look like working life</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--cya-body)]">It fits naturally into real workplaces, teams, hybrid days and the spaces people already use. The experience should feel useful in context—not imported from somewhere else.</p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)] lg:items-stretch lg:gap-12">
            <figure className="relative min-h-[24rem] overflow-hidden bg-white sm:min-h-[30rem]">
              <Image src="/images/selected/cya-home-oneoff-desk-stretch.webp" alt="A workplace participant uses a simple movement practice in an everyday work setting." fill sizes="(min-width: 1280px) 720px, (min-width: 1024px) 58vw, 100vw" className="object-cover" />
            </figure>

            <div className="bg-white px-7 py-8 sm:px-9 sm:py-10">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--cya-ochre-ink)]">Insights</p>
              <h3 className="mt-5 text-2xl font-bold tracking-[-0.015em] text-[var(--cya-teal-dark)]">Useful thinking, connected to action</h3>
              <p className="mt-4 leading-7 text-[var(--cya-body)]">Practical ideas for bringing movement, mindfulness and useful wellbeing habits into the working day.</p>
              <div className="mt-7 border-t border-[var(--cya-divider)]">
                {insights.map(([number, label, href]) => (
                  <Link key={number} href={href} className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 border-b border-[var(--cya-divider)] py-5">
                    <span className="text-[0.68rem] font-semibold text-[var(--cya-ochre-ink)]">{number}</span>
                    <span className="font-semibold text-[var(--cya-teal-dark)] transition-transform duration-200 group-hover:translate-x-1">{label}</span>
                    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1.5">→</span>
                  </Link>
                ))}
              </div>
              <div className="mt-8"><ProductionAction href="/blog" style="secondary">View our articles</ProductionAction></div>
            </div>
          </div>
        </ProductionContainer>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <ProductionContainer>
          <ProductionKicker>Proof in practice</ProductionKicker>
          <div className="mt-8 grid border-y border-[var(--cya-divider)] md:grid-cols-3">
            <div className="py-7 md:pr-8">
              <p className="text-2xl font-bold tracking-[-0.02em] text-[var(--cya-teal-dark)]">Since 2014</p>
              <p className="mt-3 leading-7 text-[var(--cya-body)]">Workplace wellbeing experience built through ongoing delivery with Australian organisations.</p>
            </div>
            <div className="border-t border-[var(--cya-divider)] py-7 md:border-l md:border-t-0 md:px-8">
              <p className="text-2xl font-bold tracking-[-0.02em] text-[var(--cya-teal-dark)]">Multi-location delivery</p>
              <p className="mt-3 leading-7 text-[var(--cya-body)]">Onsite, online and across distributed workplaces, including coordinated delivery in multiple cities.</p>
            </div>
            <div className="border-t border-[var(--cya-divider)] py-7 md:border-l md:border-t-0 md:pl-8">
              <p className="text-2xl font-bold tracking-[-0.02em] text-[var(--cya-teal-dark)]">5.0 Google rating</p>
              <p className="mt-3 leading-7 text-[var(--cya-body)]">Public Google rating checked 25 July 2026. Review counts can change over time.</p>
            </div>
          </div>
          <div className="mt-8"><ProductionAction href="/case-studies" style="secondary">See our work</ProductionAction></div>
        </ProductionContainer>
      </section>

      <section className="bg-[var(--cya-surface-base)] py-20 lg:py-24">
        <ProductionContainer className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16">
          <div>
            <ProductionKicker>Wellbeing Studio by Corporate Yoga Australia</ProductionKicker>
            <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-[-0.02em] lg:text-5xl">Useful support between live experiences</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--cya-body)]">Live experiences create the human connection. For ongoing programs, Wellbeing Studio gives people practical support they can return to between scheduled sessions and across the working week.</p>
            <div className="mt-8"><ProductionAction href="/online-wellbeing" style="secondary">Explore online wellbeing</ProductionAction></div>
          </div>
          <figure className="relative aspect-[2048/970] overflow-hidden border border-[var(--cya-divider)] bg-[var(--cya-surface-page)]">
            <Image src="/images/selected/wellbeing-studio-placeholder.png" alt="Wellbeing Studio interface showing options for different moments in the working day." fill sizes="(min-width: 1024px) 54vw, 100vw" className="object-contain" />
          </figure>
        </ProductionContainer>
      </section>

      <section className="bg-[var(--cya-surface-page)] py-20 lg:py-24">
        <ProductionContainer className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-16 xl:gap-20">
          <figure className="relative aspect-[4/3] overflow-hidden bg-white">
            <Image src="/images/selected/cya-about-delivery-group-practice.webp" alt="A facilitator leads a workplace group through an accessible shared movement practice." fill sizes="(min-width: 1280px) 620px, (min-width: 1024px) 46vw, 100vw" className="object-cover" />
          </figure>
          <div>
            <ProductionKicker>Human service, real context</ProductionKicker>
            <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-[-0.02em] lg:text-5xl">The right experience depends on the people and the workplace</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--cya-body)]">That means responding to timing, capability, location and format rather than asking the workplace to adapt to us. We shape the experience around the people who will actually use it.</p>
            <div className="mt-8"><ProductionAction href="/contact" style="secondary">Meet the team</ProductionAction></div>
          </div>
        </ProductionContainer>
      </section>

      <ProductionClosing heading="What would help you right now?" body="One session, a campaign or something ongoing—we can start with what needs to happen and shape the right next step." />
    </>
  );
}
