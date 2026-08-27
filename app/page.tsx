import type { Metadata } from "next";
import Link from "next/link";
import { HomeStructuredData } from "@/components/StructuredData";
import { ProductionAction, ProductionCard, ProductionClosing, ProductionContainer, ProductionKicker, ProductionPhoto } from "@/components/ProductionPrimitives";
import { media } from "@/content/media";

export const metadata: Metadata = {
  title: { absolute: "Corporate Yoga Australia | Workplace Wellbeing Programs" },
  description: "Work wellness into your workday with workplace Yoga, Pilates, mindfulness and tailored wellbeing programs delivered across Australia.",
  alternates: { canonical: "/" },
};

const needs = [
  ["01", "Help people reset during a demanding day", "/meditation-mindfulness"],
  ["02", "Create more movement in the working week", "/movement"],
  ["03", "Support focus, calm and connection", "/meditation-mindfulness"],
  ["04", "Bring people together around a useful experience", "/workplace-wellbeing-workshops"],
] as const;

export default function Home() {
  return (
    <>
      <HomeStructuredData />
      <section className="bg-[var(--cya-paper)] py-14 lg:py-16">
        <ProductionContainer>
          <div className="grid overflow-hidden rounded-[18px] border-2 border-[var(--cya-teal-dark)] lg:grid-cols-[2fr_1fr]">
            <div className="p-8 sm:p-10 lg:p-12">
              <ProductionKicker>For this place</ProductionKicker>
              <h1 className="mt-5 max-w-3xl text-[clamp(2.7rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-[var(--cya-teal-dark)]">Work wellness into your workday.</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--cya-body)]">Start with what needs to happen. CYA shapes the right experience around your people, moment and environment.</p>
            </div>
            <div className="border-t-2 border-[var(--cya-teal-dark)] p-8 lg:border-l-2 lg:border-t-0 lg:p-10">
              <ProductionKicker>Your context</ProductionKicker>
              <dl className="mt-7 space-y-7">
                <div><dt className="text-xs font-semibold uppercase text-[var(--cya-ochre-ink)]">People</dt><dd className="mt-2 text-lg">Your people and participation range</dd></div>
                <div><dt className="text-xs font-semibold uppercase text-[var(--cya-ochre-ink)]">Moment</dt><dd className="mt-2 text-lg">What needs to happen now</dd></div>
                <div><dt className="text-xs font-semibold uppercase text-[var(--cya-ochre-ink)]">Environment</dt><dd className="mt-2 text-lg">Where and how work is happening</dd></div>
              </dl>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row"><ProductionAction href="/contact">Plan with CYA</ProductionAction><ProductionAction href="#needs" style="secondary">Explore by need</ProductionAction></div>
        </ProductionContainer>
      </section>

      <ProductionPhoto asset={media.workplaceWellbeingHero} label="CYA photography · field note" priority />

      <section id="needs" className="bg-[var(--cya-canvas)] py-20 lg:py-24">
        <ProductionContainer>
          <ProductionKicker>Situation-led entry</ProductionKicker>
          <h2 className="mt-5 text-4xl font-bold tracking-[-0.015em] lg:text-5xl">What needs to happen?</h2>
          <div className="mt-10 border-t border-[var(--cya-divider)]">
            {needs.map(([number, title, href]) => <Link key={number} href={href} className="grid grid-cols-[auto_1fr_auto] gap-5 border-x border-b border-[var(--cya-divider)] bg-white px-6 py-5 hover:bg-[var(--cya-paper)]"><span className="text-xs font-semibold text-[var(--cya-ochre-ink)]">{number}</span><span className="text-xl font-semibold">{title}</span><span aria-hidden="true">→</span></Link>)}
          </div>
          <div className="mt-14"><ProductionKicker>Direct one-off experiences</ProductionKicker></div>
          <h2 className="mt-5 text-3xl font-bold lg:text-4xl">Choose an experience directly.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <ProductionCard number="01" title="Movement" body="Find the most suitable format by context." href="/movement" />
            <ProductionCard number="02" title="Workplace Yoga" body="Calm, mobility and reset." href="/workplace-yoga" />
            <ProductionCard number="03" title="Workplace Pilates" body="Strength, posture and focused movement." href="/workplace-pilates" />
          </div>
        </ProductionContainer>
      </section>

      <section className="bg-[var(--cya-teal-dark)] py-20 text-white lg:py-24">
        <ProductionContainer>
          <ProductionKicker light>Working rhythm</ProductionKicker>
          <h2 className="mt-5 max-w-4xl text-4xl font-bold text-white lg:text-5xl">Begin with the need. Build a rhythm only when it helps.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <ProductionCard number="01" title="One useful experience" body="Start with a moment people can recognise." tone="paper" />
            <ProductionCard number="02" title="A repeatable rhythm" body="Build continuity around changing work." tone="paper" />
            <ProductionCard number="03" title="Connected support" body="Use Online Wellbeing where access or scale needs it." tone="paper" />
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <ProductionCard title="Field Notes, not generic claims." body="Real place, real working moment, clear permission status. Photography remains an explicit production dependency." tone="field" />
            <ProductionCard title="Case studies carry the outcome." body="Evidence is distributed through the journey and has a governed destination at /case-studies." href="/case-studies" tone="paper" />
          </div>
        </ProductionContainer>
      </section>
      <ProductionClosing heading="Plan something that fits." body="Tell us what needs to happen, who it is for and what working life looks like there." />
    </>
  );
}
