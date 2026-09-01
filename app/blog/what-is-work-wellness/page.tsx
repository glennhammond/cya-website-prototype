import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArticleStructuredData, WorkWellnessStructuredData } from "@/components/StructuredData";
import { ProductionAction, ProductionCard, ProductionClosing, ProductionContainer, ProductionKicker } from "@/components/ProductionPrimitives";

const title = "What is Work Wellness? Making wellbeing part of the workday";
const description = "Corporate Yoga Australia explains Work Wellness, how it relates to workplace wellbeing, and what it means to make useful wellbeing part of everyday working life.";
const path = "/blog/what-is-work-wellness";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
};

export default function WorkWellnessInsightPage() {
  return (
    <>
      <ArticleStructuredData
        headline={title}
        description={description}
        path={path}
        authorName="Corporate Yoga Australia"
        editorName="Glenn Hammond"
        datePublished="2026-09-01"
        dateModified="2026-09-01"
      />
      <WorkWellnessStructuredData />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/blog" },
          { label: "What is Work Wellness?" },
        ]}
      />

      <article>
        <section className="bg-[var(--cya-surface-page)] py-16 lg:py-20">
          <ProductionContainer>
            <div className="max-w-4xl">
              <ProductionKicker>Work Wellness</ProductionKicker>
              <h1 className="mt-5 text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-[var(--cya-teal)]">
                What is Work Wellness?
              </h1>
              <p className="mt-6 max-w-3xl text-[clamp(1.2rem,1.8vw,1.5rem)] leading-[1.55] text-[var(--cya-body)]">
                At Corporate Yoga Australia, we use <strong>Work Wellness</strong> to describe a simple idea: useful wellbeing should be possible within working life, not only outside it.
              </p>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--cya-body)]">
                It means creating practical opportunities for people to move, pause, reset, connect, learn or access support in ways that fit the reality of the working day.
              </p>
            </div>
          </ProductionContainer>
        </section>

        <section className="bg-[var(--cya-surface-subtle)] py-20 lg:py-24">
          <ProductionContainer>
            <ProductionKicker>The important distinction</ProductionKicker>
            <h2 className="mt-5 max-w-4xl text-4xl font-bold lg:text-5xl">Work Wellness is not another name for workplace wellbeing</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <ProductionCard
                title="Workplace wellbeing"
                body="The broader organisational field. It includes work design, leadership, culture, psychosocial safety, workload, systems of work, working conditions and the wider experience of work."
                tone="paper"
              />
              <ProductionCard
                title="Work Wellness"
                body="CYA's lens on making useful wellbeing tangible during working life: movement, mindfulness, learning, connection, moments of recovery and practical support people can genuinely use."
                tone="paper"
              />
            </div>
            <div className="mt-8 max-w-4xl border-l-4 border-[var(--cya-ochre)] bg-white px-7 py-6 text-lg leading-8 text-[var(--cya-body)]">
              <strong>Our guardrail:</strong> Work Wellness complements good work design; it does not substitute for it.
            </div>
          </ProductionContainer>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <ProductionContainer>
            <ProductionKicker>Why the workday matters</ProductionKicker>
            <h2 className="mt-5 max-w-4xl text-4xl font-bold lg:text-5xl">Wellbeing is easier to use when it fits the life people are already living</h2>
            <div className="mt-7 max-w-4xl space-y-5 text-lg leading-8 text-[var(--cya-body)]">
              <p>
                Workplace wellbeing initiatives can become another thing employees are expected to find time for. A class before work, a long resource library or a one-off awareness event may still be useful, but only if people can realistically engage with it.
              </p>
              <p>
                CYA's approach starts with the working context: who the people are, where they work, what the day feels like and what kind of support would be useful in that moment. Sometimes that means a live yoga or Pilates session. Sometimes it is a short mindfulness practice, a workplace campaign, an expert conversation or something people can return to through Wellbeing Studio.
              </p>
              <p>
                The aim is not to make employees responsible for solving organisational problems through self-care. It is to make appropriate wellbeing experiences easier to access and more relevant to everyday working life.
              </p>
            </div>
          </ProductionContainer>
        </section>

        <section className="bg-[var(--cya-surface-page)] py-20 lg:py-24">
          <ProductionContainer>
            <ProductionKicker>What it can look like</ProductionKicker>
            <h2 className="mt-5 max-w-4xl text-4xl font-bold lg:text-5xl">Different moments call for different forms of support</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <ProductionCard title="Move" body="A workplace yoga, Pilates or movement session that fits the space, confidence and time available." />
              <ProductionCard title="Pause" body="Mindfulness, breathing or guided reset practices that create a deliberate change of pace during the working day." />
              <ProductionCard title="Learn" body="Workshops, expert experiences and practical resources that help people understand a wellbeing topic and decide what is useful next." />
              <ProductionCard title="Connect" body="Campaigns, live experiences and shared moments that make wellbeing visible without forcing participation." />
              <ProductionCard title="Return" body="Wellbeing Studio gives people practical support they can revisit between scheduled sessions and across the working week." />
              <ProductionCard title="Adapt" body="The useful format depends on the people, place, moment and organisational context rather than a single packaged solution." />
            </div>
          </ProductionContainer>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <ProductionContainer className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <ProductionKicker>The CYA perspective</ProductionKicker>
              <h2 className="mt-5 text-4xl font-bold lg:text-5xl">Work Wellness into Your Workday</h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-[var(--cya-body)]">
                <p>
                  For CYA, Work Wellness is not a new service category. It is the connective idea behind the different ways we help organisations make wellbeing part of working life.
                </p>
                <p>
                  Workplace yoga, Pilates, mindfulness, workshops, events, campaigns and Wellbeing Studio are different expressions of that idea. The useful question is not which wellbeing activity an organisation should buy first. It is what would genuinely help its people in the context of their working day.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <ProductionAction href="/workplace-wellbeing-programs">Explore workplace wellbeing programs</ProductionAction>
                <ProductionAction href="/contact" style="secondary">Plan with CYA</ProductionAction>
              </div>
            </div>
            <aside className="border border-[var(--cya-divider)] bg-[var(--cya-surface-subtle)] p-8">
              <ProductionKicker>In one sentence</ProductionKicker>
              <p className="mt-6 text-2xl font-semibold leading-9 text-[var(--cya-teal-dark)]">
                Work Wellness is CYA's way of describing useful wellbeing that becomes part of working life rather than sitting outside it.
              </p>
              <p className="mt-6 text-sm leading-6 text-[var(--cya-body)]">
                The phrase is used by other organisations and is not presented by CYA as a proprietary or academically settled category.
              </p>
            </aside>
          </ProductionContainer>
        </section>

        <section className="bg-[var(--cya-surface-subtle)] py-16 lg:py-20">
          <ProductionContainer>
            <h2 className="text-2xl font-bold">Continue exploring workplace wellbeing</h2>
            <ul className="mt-6 space-y-3 text-base leading-7">
              <li><Link className="font-semibold underline underline-offset-4" href="/blog/the-nervous-system-solution-why-your-wellbeing-program-isnt-working-and-what-to-do-instead">Why workplace wellbeing programs can miss the moment</Link></li>
              <li><Link className="font-semibold underline underline-offset-4" href="/workplace-wellbeing-programs">Workplace wellbeing programs</Link></li>
              <li><Link className="font-semibold underline underline-offset-4" href="/movement">Compare workplace movement options</Link></li>
              <li><Link className="font-semibold underline underline-offset-4" href="/online-wellbeing">Explore online wellbeing and Wellbeing Studio</Link></li>
            </ul>
            <div className="mt-8 border-t border-[var(--cya-divider)] pt-6 text-sm leading-6 text-[var(--cya-body)]">
              This article is general workplace wellbeing information. Workplace wellbeing initiatives such as yoga, movement and mindfulness do not replace an organisation's obligations to identify and manage psychosocial hazards or other workplace health and safety risks.
            </div>
          </ProductionContainer>
        </section>
      </article>

      <ProductionClosing
        heading="What would help your workplace right now?"
        body="Start with the people, the working context and what needs to happen. We’ll help shape a useful next step."
        href="/contact"
        action="Start planning"
      />
    </>
  );
}
