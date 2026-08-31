import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceStructuredData } from "@/components/StructuredData";
import { ProductionAction, ProductionCard, ProductionClosing, ProductionContainer, ProductionKicker } from "@/components/ProductionPrimitives";

export const metadata: Metadata = {
  title: { absolute: "Workplace Wellbeing Programs Australia | Corporate Yoga Australia" },
  description: "Tailored workplace wellbeing programs combining movement, mindfulness, workshops, expert experiences and ongoing support for Australian organisations.",
  alternates: { canonical: "/workplace-wellbeing-programs" },
};

export default function WorkplaceWellbeingProgramsPage() {
  return (
    <>
      <ServiceStructuredData name="Workplace Wellbeing Programs" description="Tailored workplace wellbeing programs combining human-led experiences, practical coordination and ongoing support for Australian teams." path="/workplace-wellbeing-programs" breadcrumbLabel="Workplace wellbeing programs" />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Workplace wellbeing programs" }]} />

      <section className="bg-[var(--cya-surface-page)] py-16 lg:py-20">
        <ProductionContainer className="grid max-w-[1440px] gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-14 xl:gap-16">
          <div>
            <ProductionKicker>Workplace wellbeing programs</ProductionKicker>
            <h1 className="mt-5 max-w-3xl text-[clamp(2.8rem,4.6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em]">Workplace wellbeing programs shaped around your organisation</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--cya-body)]">From regular movement and mindfulness to connected annual programs, we bring together the experiences, expertise and digital support that fit your people, priorities and working environment.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><ProductionAction href="/contact?interest=program">Start planning</ProductionAction><ProductionAction href="#program-structure" style="secondary">Explore what&apos;s possible</ProductionAction></div>
          </div>
          <figure className="relative aspect-[3/2] overflow-hidden border border-[var(--cya-divider)] bg-[var(--cya-surface-base)]">
            <Image
              src="/images/selected/cya-workplace-wellbeing-hero-warehouse-group.webp"
              alt="Employees take part in a facilitated workplace yoga session in a warehouse"
              fill
              priority
              sizes="(min-width: 1440px) 650px, (min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </figure>
        </ProductionContainer>
      </section>

      <section id="program-structure" className="bg-[var(--cya-surface-base)] py-20 lg:py-24">
        <ProductionContainer>
          <ProductionKicker>A flexible approach</ProductionKicker>
          <h2 className="mt-5 max-w-5xl text-4xl font-bold tracking-[-0.015em] lg:text-5xl">Start with what you want to make possible</h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-[var(--cya-body)]">No two workplaces need the same mix of experiences or support. We begin with your people, priorities, locations and internal capacity, then recommend a practical approach shaped around your organisation.</p>

          <div className="mt-12 overflow-hidden rounded-[var(--cya-radius-panel)] bg-[var(--cya-surface-page)] lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <figure className="relative min-h-[320px] overflow-hidden lg:min-h-full">
              <Image
                src="/images/selected/cya-programs-continuity-group-repeat.webp"
                alt="A facilitator leads employees through a shared workplace movement experience"
                fill
                sizes="(min-width: 1280px) 580px, (min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
            </figure>

            <div className="p-7 sm:p-9 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--cya-ochre-ink)]">A tailored approach, shaped with you</p>
              <h3 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-[var(--cya-teal-dark)] lg:text-4xl">The right mix, without forcing your organisation into a fixed package</h3>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--cya-body)]">Begin with one experience, establish a regular rhythm or connect workplace wellbeing across the year. We can bring together:</p>

              <ul className="mt-7 grid gap-x-8 sm:grid-cols-2">
                {[
                  "Workplace yoga, Pilates, movement and mindfulness",
                  "Workshops, campaigns and specialist experiences",
                  "Onsite, online and hybrid delivery",
                  "Participant communication and engagement support",
                  "Wellbeing Studio access between live experiences",
                  "Planning, coordination, review and adaptation",
                ].map((item) => (
                  <li key={item} className="flex gap-3 border-t border-[var(--cya-divider)] py-4 leading-7 text-[var(--cya-body)]">
                    <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-[var(--cya-ochre)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 grid gap-7 rounded-[var(--cya-radius-panel)] border-l-4 border-[var(--cya-ochre)] bg-[var(--cya-surface-warm)] px-8 py-8 md:grid-cols-[1fr_auto] md:items-center lg:px-10">
            <div>
              <h3 className="text-2xl font-bold text-[var(--cya-teal-dark)]">Every organisation starts somewhere different</h3>
              <p className="mt-3 max-w-4xl text-lg leading-8 text-[var(--cya-body)]">Tell us what you are trying to achieve. We will help you identify a useful starting point and shape the right mix of delivery and support around it.</p>
            </div>
            <ProductionAction href="/contact?interest=program">Talk through your needs</ProductionAction>
          </div>
        </ProductionContainer>
      </section>

      <section className="bg-[var(--cya-surface-page)] py-20 lg:py-24">
        <ProductionContainer>
          <ProductionKicker>Built around your workplace</ProductionKicker>
          <h2 className="mt-5 max-w-5xl text-4xl font-bold tracking-[-0.015em] lg:text-5xl">Designed for different workplaces and ways of working</h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-[var(--cya-body)]">Your program can be shaped around different locations, schedules, workforce needs and working environments.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="overflow-hidden border border-[var(--cya-divider)] bg-[var(--cya-surface-base)]">
              <figure className="relative aspect-[3/2]"><Image src="/images/selected/cya-home-oneoff-desk-stretch.webp" alt="A facilitator guides an employee through an accessible workplace movement session" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" /></figure>
              <div className="p-6"><h3 className="text-2xl font-semibold text-[var(--cya-teal-dark)]">Office-based teams</h3><p className="mt-3 leading-7 text-[var(--cya-body)]">Accessible sessions that fit meeting rooms, shared spaces and the working day.</p></div>
            </article>
            <article className="overflow-hidden border border-[var(--cya-divider)] bg-[var(--cya-surface-base)]">
              <figure className="relative aspect-[3/2]"><Image src="/images/selected/cya-movement-group-industrial.webp" alt="Employees pause together during a facilitated session in an industrial workplace" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" /></figure>
              <div className="p-6"><h3 className="text-2xl font-semibold text-[var(--cya-teal-dark)]">Operational workplaces</h3><p className="mt-3 leading-7 text-[var(--cya-body)]">Practical formats adapted to the environment, workforce and available space.</p></div>
            </article>
            <article className="overflow-hidden border border-[var(--cya-divider)] bg-[var(--cya-surface-base)]">
              <figure className="relative aspect-[3/2]"><Image src="/images/selected/cya-programs-multisite-outdoor.webp" alt="Employees in high-visibility workwear take part in an outdoor wellbeing session" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" /></figure>
              <div className="p-6"><h3 className="text-2xl font-semibold text-[var(--cya-teal-dark)]">Multi-site and distributed teams</h3><p className="mt-3 leading-7 text-[var(--cya-body)]">Coordinated delivery across locations, schedules and different ways of working.</p></div>
            </article>
            <article className="overflow-hidden border border-[var(--cya-divider)] bg-[var(--cya-surface-base)]">
              <figure className="relative aspect-[3/2]"><Image src="/images/selected/cya-conferences-studio-remote-grid.webp" alt="Employees join an online wellbeing session from different locations" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" /></figure>
              <div className="p-6"><h3 className="text-2xl font-semibold text-[var(--cya-teal-dark)]">Hybrid and online participation</h3><p className="mt-3 leading-7 text-[var(--cya-body)]">Live connection and Wellbeing Studio support between in-person sessions.</p></div>
            </article>
          </div>
        </ProductionContainer>
      </section>

      <section className="bg-[var(--cya-surface-base)] py-20 lg:py-24">
        <ProductionContainer>
          <ProductionKicker>What your organisation can expect</ProductionKicker>
          <h2 className="mt-5 max-w-4xl text-4xl font-bold lg:text-5xl">Clear planning, reliable delivery and useful review</h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-[var(--cya-body)]">Before your program begins, we agree what will be delivered, who it is for and how delivery and participation will be reviewed.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <ProductionCard number="01" title="Agreed scope" body="Audience, locations, schedule, delivery formats and access requirements confirmed before launch." tone="white" />
            <ProductionCard number="02" title="Facilitator and format fit" body="The right facilitator and experience matched to your workplace, participants and program goals." tone="white" />
            <ProductionCard number="03" title="Clear participant access" body="Practical communications, voluntary participation and appropriate wellbeing boundaries established from the start." tone="white" />
            <ProductionCard number="04" title="Proportionate review" body="Aggregate participation, delivery experience and voluntary feedback used to inform what continues or changes." tone="white" />
          </div>
        </ProductionContainer>
      </section>

      <section className="bg-[var(--cya-surface-base)] py-20 lg:py-24">
        <ProductionContainer>
          <ProductionKicker>Designed for participation</ProductionKicker>
          <h2 className="mt-5 text-4xl font-bold lg:text-5xl xl:whitespace-nowrap">Make workplace wellbeing practical to join</h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-[var(--cya-body)]">We plan delivery around your locations, schedules, access needs and the time people can realistically use. Participants receive clear information, choose whether to take part and are not individually <span className="whitespace-nowrap">monitored or assessed.</span></p>
          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-14">
            <div className="border-y border-[var(--cya-divider)]">
              <article className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-[var(--cya-divider)] py-6">
                <p className="pt-1 text-xs font-semibold text-[var(--cya-ochre-ink)]">01</p>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--cya-teal-dark)]">Fits the working day</h3>
                  <p className="mt-2 leading-7 text-[var(--cya-body)]">Choose times, formats and locations that reflect how your people work.</p>
                </div>
              </article>
              <article className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-[var(--cya-divider)] py-6">
                <p className="pt-1 text-xs font-semibold text-[var(--cya-ochre-ink)]">02</p>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--cya-teal-dark)]">Clear to participants</h3>
                  <p className="mt-2 leading-7 text-[var(--cya-body)]">Explain what the experience involves, who it is for and how people can join.</p>
                </div>
              </article>
              <article className="grid grid-cols-[2.5rem_1fr] gap-4 py-6">
                <p className="pt-1 text-xs font-semibold text-[var(--cya-ochre-ink)]">03</p>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--cya-teal-dark)]">Voluntary and privacy-aware</h3>
                  <p className="mt-2 leading-7 text-[var(--cya-body)]">Use aggregate participation and voluntary feedback to improve delivery without assessing individual wellbeing.</p>
                </div>
              </article>
            </div>
            <figure className="relative aspect-[3/2] overflow-hidden border border-[var(--cya-divider)] bg-[var(--cya-surface-base)]">
              <Image
                src="/images/selected/cya-programs-participation-outdoor-group.webp"
                alt="Employees take part in a facilitated outdoor workplace yoga session"
                fill
                sizes="(min-width: 1280px) 650px, (min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
            </figure>
          </div>
          <aside className="mt-10 border-l-4 border-[var(--cya-ochre)] bg-[var(--cya-surface-page)] px-7 py-6">
            <h3 className="text-2xl font-semibold text-[var(--cya-teal-dark)]">Keep the coordination role clearly bounded</h3>
            <p className="mt-3 max-w-4xl leading-7 text-[var(--cya-body)]">An internal sponsor or Wellbeing Champion can support awareness, practical coordination and feedback. They do not become responsible for colleagues&apos; wellbeing, complaints, HR, WHS or mental-health care.</p>
          </aside>
          <div className="mt-8"><ProductionAction href="/blog/the-nervous-system-solution-why-your-wellbeing-program-isnt-working-and-what-to-do-instead" style="secondary">Read the participation guide</ProductionAction></div>
        </ProductionContainer>
      </section>

      <section className="bg-[var(--cya-surface-page)] py-20 lg:py-24">
        <ProductionContainer className="grid gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-center lg:gap-14">
          <div>
            <ProductionKicker>Experience in practice</ProductionKicker>
            <h2 className="mt-5 max-w-3xl text-4xl font-bold lg:text-5xl">Workplace wellbeing delivered for established organisations</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--cya-body)]">Our client relationships include Cromwell Property Group. We bring the same careful planning, coordination and participant-focused delivery to every workplace program.</p>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-[var(--cya-body)]">Program details, results and client comments are only published when they have been verified and approved.</p>
            <div className="mt-8"><ProductionAction href="/contact?interest=program" style="secondary">Discuss a similar need</ProductionAction></div>
          </div>
          <figure className="overflow-hidden border border-[var(--cya-divider)] bg-[var(--cya-surface-base)]">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/selected/cya-workplace-wellbeing-lunch-learn-team.webp"
                alt="Employees take part in a facilitated movement session at work"
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="border-t border-[var(--cya-divider)] px-5 py-3 text-sm text-[var(--cya-body)]">Representative workplace delivery</figcaption>
          </figure>
        </ProductionContainer>
      </section>

      <section className="bg-[var(--cya-surface-base)] py-20 lg:py-24">
        <ProductionContainer>
          <ProductionKicker>Practical questions</ProductionKicker>
          <h2 className="mt-5 max-w-4xl text-4xl font-bold lg:text-5xl">Questions organisations ask before getting started</h2>
          <div className="mt-10 border-t border-[var(--cya-divider)]">
            {[
              ["What can a workplace wellbeing program include?", "A program can combine workplace yoga, Pilates, mindfulness, workshops, expert-led sessions and Wellbeing Studio support. The mix is shaped around your people, locations, schedules and goals."],
              ["Can we begin with one session or a pilot?", "Yes. You can begin with one experience, a short series or a focused pilot before deciding whether ongoing support would be useful."],
              ["Can programs support different locations, workforces and hybrid teams?", "Yes. We confirm the people, locations, access needs, available spaces and working patterns before recommending a mix of onsite delivery, live online sessions and Wellbeing Studio support."],
              ["How are facilitators selected?", "Facilitators are matched to the service, participant group, workplace setting and delivery requirements. Availability and suitability are confirmed before launch."],
              ["What participation and reporting information is available?", "This depends on the delivery model. We agree reporting expectations before launch and keep employer reporting aggregate, proportionate and privacy-aware."],
              ["How is program pricing determined?", "Pricing reflects the mix of services, delivery mode, frequency, locations, participant reach and the coordination or reporting required. We scope these factors before providing a proposal."],
              ["Does a wellbeing program replace psychosocial risk management?", "No. Workplace wellbeing activities can complement a broader organisational approach, but they do not replace identifying and controlling psychosocial hazards, consulting workers or obtaining appropriate WHS, clinical or legal advice."],
            ].map(([question, answer]) => (
              <details key={question} className="group border-b border-[var(--cya-divider)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-semibold text-[var(--cya-teal-dark)] [&::-webkit-details-marker]:hidden">
                  <span>{question}</span>
                  <span aria-hidden="true" className="text-2xl font-normal leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-4xl pb-6 pr-12 leading-7 text-[var(--cya-body)]">{answer}</p>
              </details>
            ))}
          </div>
        </ProductionContainer>
      </section>

      <ProductionClosing heading="Plan a workplace wellbeing program that fits" body="Tell us about your people, locations, schedules and goals. We’ll help shape a practical starting point, whether that is one session, a pilot or an ongoing program." />
    </>
  );
}
