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

export default function WorkplaceWellbeingProgramsPage() {
  return (
    <>
      <ServiceStructuredData name="Workplace Wellbeing Programs" description="Tailored workplace wellbeing programs combining human-led experiences, practical coordination and ongoing support for Australian teams." path="/workplace-wellbeing-programs" breadcrumbLabel="Workplace wellbeing programs" />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Workplace wellbeing programs" }]} />

      <section className="bg-[var(--cya-surface-page)] py-16 lg:py-20">
        <ProductionContainer className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
          <div>
            <ProductionKicker>Workplace wellbeing programs</ProductionKicker>
            <h1 className="mt-5 text-[clamp(2.8rem,4.6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-[var(--cya-teal-dark)]">Workplace wellbeing that works with the way your organisation works</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--cya-body)]">Bring together workplace yoga, Pilates, mindfulness, workshops and Wellbeing Studio support in a program shaped around your people, locations, schedules and goals.</p>
            <div className="mt-8 flex gap-3"><ProductionAction href="/contact?interest=program">Start planning</ProductionAction><ProductionAction href="#program-mix" style="secondary">See how programs work</ProductionAction></div>
          </div>
          <figure className="relative aspect-[4/3] overflow-hidden bg-white"><Image src="/images/selected/cya-workplace-wellbeing-hero-warehouse-group.webp" alt="Employees take part in a facilitated workplace wellbeing session" fill priority className="object-cover" /></figure>
        </ProductionContainer>
      </section>

      <section id="program-mix" className="bg-[var(--cya-surface-page)] py-20 lg:py-24">
        <ProductionContainer>
          <ProductionKicker>What a program can include</ProductionKicker>
          <h2 className="mt-5 text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:whitespace-nowrap lg:text-[2.7rem] xl:text-5xl">The mix depends on what the workplace needs</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--cya-body)]">Familiar wellbeing experiences can work on their own or combine into a longer program. The value is in choosing what fits and connecting it deliberately.</p>
          <div className="mt-11 grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch lg:gap-14">
            <div className="border-y border-[var(--cya-divider)]">
              {ingredients.map(([number,title,body]) => (
                <article key={number} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-[var(--cya-divider)] py-5 last:border-b-0">
                  <p className="pt-1 text-xs font-semibold text-[var(--cya-ochre-ink)]">{number}</p>
                  <div><h3 className="text-lg font-semibold text-[var(--cya-teal-dark)]">{title}</h3><p className="mt-2 leading-7 text-[var(--cya-body)]">{body}</p></div>
                </article>
              ))}
            </div>
            <figure className="relative min-h-[28rem] overflow-hidden bg-white"><Image src="/images/cya-library/IMG_5701.JPG" alt="Employees in high-visibility workwear take part in an outdoor workplace wellbeing session" fill className="object-cover" /></figure>
          </div>
        </ProductionContainer>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <ProductionContainer className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch lg:gap-16">
          <figure className="relative min-h-[30rem] overflow-hidden bg-white"><Image src="/images/selected/cya-movement-group-industrial.webp" alt="Employees take part in a facilitated wellbeing session in an industrial workplace" fill className="object-cover" /></figure>
          <div className="flex flex-col justify-center">
            <ProductionKicker>Different workplaces, different rhythms</ProductionKicker>
            <h2 className="mt-5 text-4xl font-bold text-[var(--cya-teal-dark)] lg:text-5xl">The program changes with the workplace</h2>
            <p className="mt-6 text-lg leading-8 text-[var(--cya-body)]">The same wellbeing idea can need a different delivery approach depending on the environment, workforce and way the day is structured.</p>
            <div className="mt-8 border-y border-[var(--cya-divider)]">
              {workplaceRhythms.map(([title,body],index) => (
                <article key={title} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-[var(--cya-divider)] py-4 last:border-b-0">
                  <p className="pt-1 text-xs font-semibold text-[var(--cya-ochre-ink)]">{String(index+1).padStart(2,"0")}</p>
                  <div><h3 className="text-lg font-semibold text-[var(--cya-teal-dark)]">{title}</h3><p className="mt-1.5 leading-6 text-[var(--cya-body)]">{body}</p></div>
                </article>
              ))}
            </div>
          </div>
        </ProductionContainer>
      </section>

      <section className="bg-[var(--cya-surface-page)] py-20 lg:py-24">
        <ProductionContainer className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <div><ProductionKicker>Wellbeing Studio by Corporate Yoga Australia</ProductionKicker><h2 className="mt-5 text-4xl font-bold text-[var(--cya-teal-dark)] lg:text-5xl">Support does not have to stop when the live session ends</h2><p className="mt-6 text-lg leading-8 text-[var(--cya-body)]">For ongoing programs, Wellbeing Studio gives participants practical ways to return to wellbeing between scheduled experiences.</p><div className="mt-8"><ProductionAction href="/online-wellbeing" style="secondary">Explore online wellbeing</ProductionAction></div></div>
          <figure className="relative aspect-[2048/970] overflow-hidden border border-[var(--cya-divider)] bg-white"><Image src="/images/selected/wellbeing-studio-placeholder.png" alt="Wellbeing Studio interface" fill className="object-contain" /></figure>
        </ProductionContainer>
      </section>

      <ProductionClosing heading="Start with your workplace, not a package" body="Tell us what needs to happen, who it is for and how your organisation works. We’ll help shape a practical starting point and the right level of continuity." />
    </>
  );
}