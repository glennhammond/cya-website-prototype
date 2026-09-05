import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceStructuredData } from "@/components/StructuredData";
import { ProductionAction, ProductionClosing, ProductionContainer, ProductionKicker } from "@/components/ProductionPrimitives";

export const metadata: Metadata = {
  title: { absolute: "Workplace Movement Programs | Yoga, Pilates & Desk Sessions" },
  description: "Inclusive workplace movement including yoga, Pilates, mobility and desk-friendly sessions, adapted to real teams, spaces and levels of experience.",
  alternates: { canonical: "/movement" },
};

const movementOptions = [
  {
    number: "01",
    title: "Yoga",
    body: "Accessible movement, breathing and a calmer pause in the working day.",
    href: "/workplace-yoga",
    image: "/images/selected/cya-home-hero-debby-workplace-movement.jpg",
    alt: "A workplace yoga experience adapted to an office environment.",
  },
  {
    number: "02",
    title: "Pilates",
    body: "Practical strength, mobility and posture-focused movement for workplace teams.",
    href: "/workplace-pilates",
    image: "/images/selected/cya-programs-continuity-group-repeat.webp",
    alt: "A group taking part in an outdoor workplace movement session.",
  },
  {
    number: "03",
    title: "Desk & mobility",
    body: "Short, inclusive movement that works around everyday work and available space.",
    href: "/contact?interest=movement",
    image: "/images/selected/cya-movement-desk-stretch-office.webp",
    alt: "Employees taking part in desk-friendly workplace movement.",
  },
] as const;

const processSteps = [
  ["01", "Understand the people and setting"],
  ["02", "Choose the movement style"],
  ["03", "Plan delivery around the workday"],
  ["04", "Build a rhythm people can return to"],
] as const;

const faqs = [
  ["Do people need experience?", "No. Sessions can be adapted for mixed levels of experience, confidence and mobility. We shape the format around the group rather than expecting everyone to move in the same way."],
  ["Can sessions work in a meeting room?", "Yes. Many workplace movement formats can be adapted to meeting rooms, open spaces or other practical workplace settings. We confirm the available space before recommending the format."],
  ["Can we include remote team members?", "Yes. Movement can combine onsite and live online delivery where that helps distributed or hybrid teams take part."],
] as const;

export default function MovementPage() {
  return (
    <>
      <ServiceStructuredData name="Workplace Movement, Yoga & Pilates" description="Inclusive workplace movement including yoga, Pilates, mobility and desk-friendly sessions, adapted to real teams, spaces and levels of experience." path="/movement" breadcrumbLabel="Movement" />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Movement" }]} />

      <section className="bg-[var(--cya-surface-page)] py-12 sm:py-14 lg:py-16">
        <ProductionContainer className="grid max-w-[1440px] gap-10 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:items-center lg:gap-16">
          <div>
            <ProductionKicker>Movement for workplaces</ProductionKicker>
            <h1 className="mt-5 max-w-2xl text-[clamp(3rem,4.8vw,4.5rem)] font-bold leading-[1.03] tracking-[-0.025em] text-[var(--cya-teal-dark)]">Movement that works in the workday</h1>
            <p className="mt-7 max-w-xl text-xl leading-8 text-[var(--cya-charcoal)]">Inclusive yoga, Pilates and practical movement designed for real workplaces—onsite, online or across both.</p>
            <div className="mt-9"><ProductionAction href="/contact?interest=movement">Tell us what you’re planning</ProductionAction></div>
          </div>
          <figure className="relative aspect-[4/3] overflow-hidden bg-white">
            <Image src="/images/selected/cya-programs-continuity-group-repeat.webp" alt="A group taking part in an outdoor workplace movement session." fill priority sizes="(min-width: 1440px) 680px, (min-width: 1024px) 52vw, 100vw" className="object-cover" />
          </figure>
        </ProductionContainer>
        <ProductionContainer className="mt-9">
          <div className="grid gap-3 border-t border-[var(--cya-ochre)] pt-5 md:grid-cols-2 md:items-center">
            <p className="text-xl font-semibold text-[var(--cya-teal-dark)]">Wellbeing belongs in the workday</p>
            <p className="text-[var(--cya-body)] md:text-right">Practical, inclusive and shaped around working life.</p>
          </div>
        </ProductionContainer>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <ProductionContainer className="grid gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-center lg:gap-16">
          <figure className="relative min-h-[31rem] overflow-hidden bg-[var(--cya-surface-page)] lg:min-h-[36rem]">
            <Image src="/images/selected/cya-movement-desk-stretch-office.webp" alt="Employees taking part in accessible movement in a workplace setting." fill sizes="(min-width: 1280px) 650px, (min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </figure>
          <div>
            <ProductionKicker>Begin with the outcome</ProductionKicker>
            <h2 className="mt-5 max-w-2xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">Help people move in ways that feel possible</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--cya-body)]">From a short desk-friendly reset to a regular class, the format should suit the people, the space and the rhythm of the working day.</p>
            <div className="mt-8"><ProductionAction href="/contact?interest=movement" style="secondary">Discuss your workplace</ProductionAction></div>
          </div>
        </ProductionContainer>
      </section>

      <section id="movement-options" className="bg-[var(--cya-surface-page)] py-20 lg:py-24">
        <ProductionContainer>
          <ProductionKicker>Movement options</ProductionKicker>
          <h2 className="mt-5 max-w-4xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">Choose how you would like people to move</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--cya-body)]">Start with the setting and what would help people take part.</p>
          <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
            {movementOptions.map((option) => (
              <article key={option.number} className="min-w-[82%] snap-start border-t border-[var(--cya-divider)] pt-5 sm:min-w-[58%] md:min-w-0">
                <p className="text-xs font-semibold text-[var(--cya-ochre-ink)]">{option.number}</p>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--cya-teal-dark)]">{option.title}</h3>
                <figure className="relative mt-5 aspect-[4/3] overflow-hidden bg-white"><Image src={option.image} alt={option.alt} fill sizes="(min-width: 1024px) 31vw, 78vw" className="object-cover" /></figure>
                <p className="mt-4 leading-7 text-[var(--cya-body)]">{option.body}</p>
                <div className="mt-4"><ProductionAction href={option.href} style="secondary">Explore</ProductionAction></div>
              </article>
            ))}
          </div>
        </ProductionContainer>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <ProductionContainer className="grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-16">
          <div>
            <ProductionKicker>How we work with you</ProductionKicker>
            <h2 className="mt-5 max-w-xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">Choose the right format, then make it easy to join</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--cya-body)]">A clear process keeps movement useful for your people and workable for your organisation.</p>
          </div>
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 md:block md:overflow-visible md:pb-0">
            {processSteps.map(([number, title]) => (
              <div key={number} className="min-w-[80%] snap-start border-t border-[var(--cya-divider)] py-6 sm:min-w-[58%] md:grid md:min-w-0 md:grid-cols-[3rem_1fr] md:gap-5">
                <p className="text-xs font-semibold text-[var(--cya-ochre-ink)]">{number}</p>
                <p className="mt-3 text-xl font-semibold leading-7 text-[var(--cya-teal-dark)] md:mt-0">{title}</p>
              </div>
            ))}
          </div>
        </ProductionContainer>
      </section>

      <section className="bg-[var(--cya-surface-base)] py-20 lg:py-24">
        <ProductionContainer className="grid gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-center lg:gap-16">
          <div>
            <ProductionKicker>Connected support</ProductionKicker>
            <h2 className="mt-5 max-w-2xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">Movement for teams in more than one place</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--cya-body)]">Combine onsite moments with online delivery where that helps more people take part.</p>
            <div className="mt-8"><ProductionAction href="/online-wellbeing" style="secondary">Explore online wellbeing</ProductionAction></div>
          </div>
          <figure className="relative aspect-[16/9] overflow-hidden bg-white"><Image src="/images/selected/cya-programs-continuity-group-repeat.webp" alt="A workplace movement session that can form part of connected support for distributed teams." fill sizes="(min-width: 1280px) 760px, (min-width: 1024px) 58vw, 100vw" className="object-cover" /></figure>
        </ProductionContainer>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <ProductionContainer className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-16">
          <div><ProductionKicker>Practical questions</ProductionKicker><h2 className="mt-5 max-w-xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">Questions organisations often ask</h2></div>
          <div className="border-t border-[var(--cya-divider)]">{faqs.map(([question, answer]) => <details key={question} className="group border-b border-[var(--cya-divider)] py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-[var(--cya-teal-dark)]"><span>{question}</span><span aria-hidden="true" className="text-xl transition-transform group-open:rotate-45">+</span></summary><p className="mt-4 max-w-3xl pr-10 leading-7 text-[var(--cya-body)]">{answer}</p></details>)}</div>
        </ProductionContainer>
      </section>

      <ProductionClosing heading="What kind of movement would help your workplace?" body="Tell us about your team, setting and what you would like the experience to achieve." action="Start a conversation" href="/contact?interest=movement" />
    </>
  );
}
