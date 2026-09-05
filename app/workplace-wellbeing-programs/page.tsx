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
  ["03", "Workshops and specialist experiences", "Lunch & Learns, expert-led sessions and practical workplace wellbeing education."],
  ["04", "Workplace moments", "Events, campaigns, wellbeing days and team activations built around a specific need."],
  ["05", "Ongoing support", "Regular live experiences with Wellbeing Studio support between scheduled moments."],
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
      <ServiceStructuredData
        name="Workplace Wellbeing Programs"
        description="Tailored workplace wellbeing programs combining human-led experiences, practical coordination and ongoing support for Australian teams."
        path="/workplace-wellbeing-programs"
        breadcrumbLabel="Workplace wellbeing programs"
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Workplace wellbeing programs" }]} />

      <section className="bg-[var(--cya-surface-page)] py-12 sm:py-14 lg:py-16">
        <ProductionContainer className="grid max-w-[1440px] gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-start lg:gap-14 xl:gap-16">
          <div className="pt-1 lg:pt-2">
            <ProductionKicker>Workplace wellbeing programs</ProductionKicker>
            <h1 className="mt-5 max-w-3xl text-[clamp(2.9rem,4.5vw,4.35rem)] font-bold leading-[1.03] tracking-[-0.025em] text-[var(--cya-teal-dark)]">
              Workplace wellbeing that works with the way your organisation works
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-[var(--cya-charcoal)]">
              Workplace yoga, Pilates, mindfulness, workshops and ongoing wellbeing support for Australian organisations.
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--cya-body)]">
              From one useful experience to an ongoing program, we help shape workplace wellbeing around your people, locations, schedules and the realities of the working day.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ProductionAction href="/contact?interest=program">Plan your program</ProductionAction>
              <ProductionAction href="#program-shape" style="secondary">See how programs take shape</ProductionAction>
            </div>
          </div>

          <figure className="relative aspect-[1.08/1] overflow-hidden bg-white">
            <Image
              src="/images/selected/cya-workplace-wellbeing-hero-warehouse-group.webp"
              alt="Employees take part in a facilitated workplace wellbeing session in an operational workplace."
              fill
              priority
              sizes="(min-width: 1440px) 620px, (min-width: 1024px) 44vw, 100vw"
              className="object-cover"
            />
          </figure>
        </ProductionContainer>

        <ProductionContainer className="mt-8">
          <div className="grid border border-[var(--cya-divider)] bg-white md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
            <div className="px-5 py-4 sm:px-6">
              <p className="text-[0.64rem] font-bold uppercase tracking-[0.12em] text-[var(--cya-ochre-ink)]">Working context</p>
              <p className="mt-1.5 text-sm font-semibold text-[var(--cya-teal-dark)]">People, place and pace</p>
            </div>
            <span aria-hidden="true" className="hidden self-center px-2 text-xl text-[var(--cya-ochre-ink)] md:block">→</span>
            <div className="border-t border-[var(--cya-divider)] px-5 py-4 sm:px-6 md:border-t-0">
              <p className="text-[0.64rem] font-bold uppercase tracking-[0.12em] text-[var(--cya-ochre-ink)]">Useful program</p>
              <p className="mt-1.5 text-sm font-semibold text-[var(--cya-teal-dark)]">The right mix and rhythm</p>
            </div>
            <span aria-hidden="true" className="hidden self-center px-2 text-xl text-[var(--cya-ochre-ink)] md:block">→</span>
            <div className="border-t border-[var(--cya-divider)] px-5 py-4 sm:px-6 md:border-t-0">
              <p className="text-[0.64rem] font-bold uppercase tracking-[0.12em] text-[var(--cya-ochre-ink)]">Continuity</p>
              <p className="mt-1.5 text-sm font-semibold text-[var(--cya-teal-dark)]">Support people can return to</p>
            </div>
          </div>
        </ProductionContainer>
      </section>

      <section id="program-shape" className="bg-white py-20 lg:py-24">
        <ProductionContainer>
          <ProductionKicker>How a program takes shape</ProductionKicker>
          <h2 className="mt-5 max-w-5xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">
            Start with the workplace, then build the rhythm around it
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-[var(--cya-body)]">
            A useful program is not assembled from a fixed package. We start with how work happens, shape the right mix of experiences and create a rhythm people can realistically use.
          </p>

          <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-4 md:gap-0 md:overflow-visible md:pb-0">
            {programSteps.map(([number, title, body]) => (
              <article key={number} className="min-w-[82%] snap-start border-y border-r border-[var(--cya-divider)] bg-[var(--cya-surface-page)] px-6 py-8 first:border-l sm:min-w-[60%] md:min-w-0">
                <p className="text-xs font-semibold text-[var(--cya-ochre-ink)]">{number}</p>
                <h3 className="mt-5 text-xl font-semibold leading-7 text-[var(--cya-teal-dark)]">{title}</h3>
                <p className="mt-3 leading-7 text-[var(--cya-body)]">{body}</p>
              </article>
            ))}
          </div>
          <p className="mt-3 text-sm text-[var(--cya-body)] md:hidden">Swipe to see each step →</p>
        </ProductionContainer>
      </section>

      <section className="bg-[var(--cya-surface-page)] py-20 lg:py-24">
        <ProductionContainer className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-16">
          <div>
            <ProductionKicker>What a program can include</ProductionKicker>
            <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">The mix depends on what the workplace needs</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--cya-body)]">
              Familiar wellbeing experiences can work on their own or combine into a longer program. The value is in choosing what fits and connecting it deliberately.
            </p>
            <div className="mt-9 border-y border-[var(--cya-divider)]">
              {ingredients.map(([number, title, body]) => (
                <article key={number} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-[var(--cya-divider)] py-5 last:border-b-0">
                  <p className="pt-1 text-xs font-semibold text-[var(--cya-ochre-ink)]">{number}</p>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--cya-teal-dark)]">{title}</h3>
                    <p className="mt-2 leading-7 text-[var(--cya-body)]">{body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <figure className="relative aspect-[4/3] overflow-hidden bg-white">
            <Image
              src="/images/cya-library/IMG_5701.JPG"
              alt="Employees in high-visibility workwear take part in an outdoor workplace wellbeing session."
              fill
              sizes="(min-width: 1280px) 650px, (min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </figure>
        </ProductionContainer>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <ProductionContainer className="grid gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-center lg:gap-16">
          <figure className="relative aspect-[4/3] overflow-hidden bg-[var(--cya-surface-page)]">
            <Image
              src="/images/selected/cya-programs-continuity-group-repeat.webp"
              alt="Participants stretch together during a facilitator-led workplace wellbeing session."
              fill
              sizes="(min-width: 1280px) 620px, (min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
          </figure>
          <div>
            <ProductionKicker>Designed for participation</ProductionKicker>
            <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">A useful program has to work for the people using it</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--cya-body)]">
              Good intentions are not enough. Timing, location, access, communication and choice all affect whether people can realistically take part.
            </p>
            <div className="mt-9 border-y border-[var(--cya-divider)]">
              <article className="border-b border-[var(--cya-divider)] py-5">
                <h3 className="text-xl font-semibold text-[var(--cya-teal-dark)]">Fits the working day</h3>
                <p className="mt-2 leading-7 text-[var(--cya-body)]">Choose times, formats and locations that reflect how your people actually work.</p>
              </article>
              <article className="border-b border-[var(--cya-divider)] py-5">
                <h3 className="text-xl font-semibold text-[var(--cya-teal-dark)]">Clear to participants</h3>
                <p className="mt-2 leading-7 text-[var(--cya-body)]">Explain what the experience involves, who it is for and how people can join.</p>
              </article>
              <article className="py-5">
                <h3 className="text-xl font-semibold text-[var(--cya-teal-dark)]">Voluntary and privacy-aware</h3>
                <p className="mt-2 leading-7 text-[var(--cya-body)]">Use aggregate participation and voluntary feedback without assessing individual wellbeing.</p>
              </article>
            </div>
          </div>
        </ProductionContainer>
      </section>

      <section className="bg-[var(--cya-surface-base)] py-20 lg:py-24">
        <ProductionContainer className="grid gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-center lg:gap-16">
          <div>
            <ProductionKicker>Different workplaces, different rhythms</ProductionKicker>
            <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">The program changes with the workplace</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--cya-body)]">
              The same wellbeing idea can need a very different delivery approach depending on the environment, workforce and way the day is structured.
            </p>
            <div className="mt-9 border-y border-[var(--cya-divider)]">
              {workplaceRhythms.map(([title, body], index) => (
                <article key={title} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-[var(--cya-divider)] py-5 last:border-b-0">
                  <p className="pt-1 text-xs font-semibold text-[var(--cya-ochre-ink)]">{String(index + 1).padStart(2, "0")}</p>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--cya-teal-dark)]">{title}</h3>
                    <p className="mt-2 leading-7 text-[var(--cya-body)]">{body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <figure className="relative aspect-[4/3] overflow-hidden bg-white">
            <Image
              src="/images/selected/cya-movement-group-industrial.webp"
              alt="Employees take part in a facilitated wellbeing session in an industrial workplace."
              fill
              sizes="(min-width: 1280px) 650px, (min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
          </figure>
        </ProductionContainer>
      </section>

      <section className="bg-[var(--cya-surface-page)] py-20 lg:py-24">
        <ProductionContainer className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-16">
          <div>
            <ProductionKicker>Wellbeing Studio by Corporate Yoga Australia</ProductionKicker>
            <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">Support does not have to stop when the live session ends</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--cya-body)]">
              For ongoing programs, Wellbeing Studio gives participants practical ways to return to wellbeing between scheduled experiences. It extends the human-led program rather than replacing it.
            </p>
            <div className="mt-8"><ProductionAction href="/online-wellbeing" style="secondary">Explore online wellbeing</ProductionAction></div>
          </div>
          <figure className="relative aspect-[2048/970] overflow-hidden border border-[var(--cya-divider)] bg-white">
            <Image
              src="/images/selected/wellbeing-studio-placeholder.png"
              alt="Wellbeing Studio interface showing practical wellbeing support for different moments in the working day."
              fill
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-contain"
            />
          </figure>
        </ProductionContainer>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <ProductionContainer>
          <div className="max-w-4xl">
            <ProductionKicker>Program experience in practice</ProductionKicker>
            <h2 className="mt-5 text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">One relationship. Different needs over time</h2>
            <p className="mt-6 text-lg leading-8 text-[var(--cya-body)]">
              Our work with Cromwell Property Group shows how an ongoing program can connect different experiences, locations and periods of support without relying on one fixed format.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(22rem,0.9fr)] lg:items-stretch lg:gap-12">
            <figure className="relative min-h-[28rem] overflow-hidden bg-[var(--cya-surface-page)]">
              <Image
                src="/images/selected/cya-workplace-wellbeing-lunch-learn-team.webp"
                alt="Employees take part in a facilitated workplace wellbeing experience."
                fill
                sizes="(min-width: 1280px) 720px, (min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </figure>
            <div className="bg-[var(--cya-surface-warm)] px-7 py-8 sm:px-9 lg:px-10 lg:py-10">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--cya-ochre-ink)]">Cromwell Property Group</p>
              <div className="mt-6 border-y border-[var(--cya-mid-neutral)]/50">
                {["Recurring workplace yoga and Pilates", "10- and 20-week programs", "Workplace activations and Lunch & Learns", "Digital wellbeing support", "Delivery across Queensland, New South Wales and Victoria"].map((item, index) => (
                  <div key={item} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-[var(--cya-mid-neutral)]/50 py-4 last:border-b-0">
                    <span className="text-xs font-semibold text-[var(--cya-ochre-ink)]">{String(index + 1).padStart(2, "0")}</span>
                    <p className="font-semibold leading-6 text-[var(--cya-teal-dark)]">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-6 text-[var(--cya-body)]">Program details are included only where facts and permissions have been confirmed.</p>
              <div className="mt-7"><ProductionAction href="/case-studies" style="secondary">View case studies</ProductionAction></div>
            </div>
          </div>
        </ProductionContainer>
      </section>

      <section className="bg-[var(--cya-surface-base)] py-20 lg:py-24">
        <ProductionContainer>
          <ProductionKicker>Clear delivery and review</ProductionKicker>
          <h2 className="mt-5 max-w-4xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">Enough structure to make the program easy to run</h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-[var(--cya-body)]">
            We agree the practical details before launch, keep participation clear and use proportionate review to understand what should continue or change.
          </p>
          <div className="mt-10 grid border-y border-[var(--cya-divider)] md:grid-cols-4">
            {[
              ["01", "Scope", "Who, where, what and when."],
              ["02", "Participation", "Clear information and voluntary access."],
              ["03", "Delivery", "Appropriate facilitators and formats."],
              ["04", "Review", "Aggregate participation and useful feedback."],
            ].map(([number, title, body]) => (
              <article key={number} className="border-b border-[var(--cya-divider)] px-6 py-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
                <p className="text-xs font-semibold text-[var(--cya-ochre-ink)]">{number}</p>
                <h3 className="mt-4 text-xl font-semibold text-[var(--cya-teal-dark)]">{title}</h3>
                <p className="mt-2 leading-7 text-[var(--cya-body)]">{body}</p>
              </article>
            ))}
          </div>
        </ProductionContainer>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <ProductionContainer>
          <ProductionKicker>Practical questions</ProductionKicker>
          <h2 className="mt-5 max-w-4xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">Questions organisations ask before getting started</h2>
          <div className="mt-10 border-t border-[var(--cya-divider)]">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group border-b border-[var(--cya-divider)] py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-[var(--cya-teal-dark)] sm:text-xl">
                  <span>{question}</span>
                  <span aria-hidden="true" className="text-xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-4xl pr-10 leading-7 text-[var(--cya-body)]">{answer}</p>
              </details>
            ))}
          </div>
        </ProductionContainer>
      </section>

      <ProductionClosing
        heading="Start with your workplace, not a package"
        body="Tell us what needs to happen, who it is for and how your organisation works. We’ll help shape a practical starting point and the right level of continuity."
      />
    </>
  );
}
