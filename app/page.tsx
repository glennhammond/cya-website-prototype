import type { Metadata } from "next";
import Link from "next/link";
import { HomeStructuredData } from "@/components/StructuredData";
import { ProductionAction, ProductionCard, ProductionClosing, ProductionContainer, ProductionKicker } from "@/components/ProductionPrimitives";
import { ReviewImageDirection } from "@/components/ReviewImageDirection";

export const metadata: Metadata = {
  title: { absolute: "Corporate Yoga Australia | Workplace Wellbeing Programs" },
  description: "Work wellness into your workday with workplace Yoga, Pilates, mindfulness and tailored wellbeing programs delivered across Australia.",
  alternates: { canonical: "/" },
};

const needs = [
  ["01", "Plan a useful wellbeing session", "/movement"],
  ["02", "Add a reset or energiser to an event", "/conferences-events"],
  ["03", "Create a meaningful campaign moment", "/contact?interest=one-off"],
  ["04", "Build an ongoing wellbeing rhythm", "/workplace-wellbeing-programs"],
  ["05", "Bring in a workshop or expert experience", "/workplace-wellbeing-workshops"],
  ["06", "Start planning without choosing a package", "/contact"],
] as const;

export default function Home() {
  return (
    <>
      <HomeStructuredData />
      <section className="bg-[var(--cya-canvas)] py-16 sm:py-20 lg:py-24">
        <ProductionContainer className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">
          <div>
            <h1 className="max-w-3xl text-[clamp(3rem,4.2vw,4.5rem)] font-bold leading-[1.07] tracking-[-0.02em] text-[var(--cya-ink)]">Work Wellness into Your Workday</h1>
            <p className="mt-6 max-w-3xl text-[clamp(1.6rem,2.4vw,2.25rem)] font-semibold leading-[1.2] tracking-[-0.015em] text-[var(--cya-teal)]">Useful wellbeing, built around real work.</p>
            <p className="mt-7 max-w-3xl text-[clamp(1.15rem,1.6vw,1.4rem)] leading-[1.55] text-[var(--cya-body)]">From corporate yoga and Pilates to workshops, campaign moments and recurring wellbeing, CYA helps organisations shape practical workplace wellbeing around their people, context and working day.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ProductionAction href="/contact">Plan with CYA</ProductionAction>
              <ProductionAction href="/movement" style="secondary">Explore movement</ProductionAction>
            </div>
          </div>
          <div className="relative aspect-[3/2] min-h-[300px] border border-[var(--cya-divider)] bg-gradient-to-br from-[var(--cya-field-note)] via-white to-white" aria-label="Image placeholder: genuine CYA workplace wellbeing experience">
            <span aria-hidden="true" className="absolute left-8 top-8 h-12 w-12 border-l-4 border-t-4 border-[var(--cya-teal)] sm:left-10 sm:top-10" />
          </div>
        </ProductionContainer>
      </section>

      <ReviewImageDirection
        id="IMAGE 01 · HOME WORKPLACE CONTEXT"
        job="Context"
        subject="CYA delivering an approachable wellbeing experience in a real Australian workplace, with the facilitator and working environment both visible."
        treatment="Light, contained 3:2 editorial image. Keep the image separate from the hero text and preserve generous white space."
        format="3:2 desktop · adaptable to 4:3 mobile"
        avoid="A dark full-width hero, studio Yoga, extreme poses, a single warehouse dominating the brand, or text placed over busy faces."
        candidate="/images/selected/cya-workplace-wellbeing-hero-warehouse-group.webp"
      />

      <section id="needs" className="bg-[var(--cya-canvas)] py-20 lg:py-24">
        <ProductionContainer>
          <ProductionKicker>Start with what you are planning</ProductionKicker>
          <h2 className="mt-5 text-4xl font-bold tracking-[-0.015em] lg:text-5xl">What needs to happen?</h2>
          <div className="mt-10 border-t border-[var(--cya-divider)]">
            {needs.map(([number, title, href]) => <Link key={number} href={href} className="grid grid-cols-[auto_1fr_auto] gap-5 border-x border-b border-[var(--cya-divider)] bg-white px-6 py-5 hover:bg-[var(--cya-paper)]"><span className="text-xs font-semibold text-[var(--cya-ochre-ink)]">{number}</span><span className="text-xl font-semibold">{title}</span><span aria-hidden="true">→</span></Link>)}
          </div>
          <div className="mt-14"><ProductionKicker>Recognisable experiences</ProductionKicker></div>
          <h2 className="mt-5 text-3xl font-bold lg:text-4xl">Start with something people already understand.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <ProductionCard number="01" title="Workplace Yoga" body="Calm, mobility and reset, adapted to the room and confidence of the group." href="/workplace-yoga" />
            <ProductionCard number="02" title="Workplace Pilates" body="Strength, posture and focused movement shaped around a practical workplace set-up." href="/workplace-pilates" />
            <ProductionCard number="03" title="Mindfulness & Meditation" body="Approachable moments of attention, calm and guided pause without pressure to perform." href="/meditation-mindfulness" />
            <ProductionCard number="04" title="Movement" body="Compare Yoga, Pilates and adaptable movement through the people, place and moment." href="/movement" />
            <ProductionCard number="05" title="Workshops & Expert Experiences" body="Practical learning, relevant expertise and useful workplace conversation." href="/workplace-wellbeing-workshops" />
            <ProductionCard number="06" title="Online Wellbeing" body="Human-led continuity for hybrid, remote and distributed teams." href="/online-wellbeing" />
          </div>
        </ProductionContainer>
      </section>

      <section className="bg-[var(--cya-field-note)] py-20 lg:py-24">
        <ProductionContainer>
          <ProductionKicker>Start with what is useful now</ProductionKicker>
          <h2 className="mt-5 max-w-4xl text-4xl font-bold lg:text-5xl">One session can stay one session.</h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-[var(--cya-body)]">If the need grows, CYA can repeat what works, connect experiences into a useful rhythm or extend support between live moments. Nothing is forced.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <ProductionCard number="01" title="One useful experience" body="Start with a moment people can recognise." tone="paper" />
            <ProductionCard number="02" title="A repeatable rhythm" body="Build continuity around changing work." tone="paper" />
            <ProductionCard number="03" title="Connected support" body="Use Online Wellbeing where access or scale needs it." tone="paper" />
          </div>
        </ProductionContainer>
      </section>
      <ProductionClosing heading="Plan something that fits." body="Tell us what needs to happen, who it is for and what working life looks like there." />
    </>
  );
}
