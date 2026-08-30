import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import {
  ProductionAction,
  ProductionCard,
  ProductionClosing,
  ProductionContainer,
  ProductionKicker,
} from "@/components/ProductionPrimitives";
import { ReviewImageDirection } from "@/components/ReviewImageDirection";
import { caseStudies } from "@/content/proof";

const publishableStatuses = new Set(["approved", "safe-working-copy"]);

export const metadata: Metadata = {
  title: "Workplace Wellbeing Case Studies",
  description:
    "Selected Corporate Yoga Australia client stories showing the context, decisions, delivery and evidence behind workplace wellbeing engagements.",
  alternates: { canonical: "/case-studies" },
  robots: { index: false, follow: true },
};

export default function CaseStudiesPage() {
  const publishableStories = caseStudies.filter((study) =>
    publishableStatuses.has(study.status),
  );

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case studies" }]} />
      <section className="bg-[var(--cya-surface-page)] py-16 lg:py-20">
        <ProductionContainer className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
          <div>
            <ProductionKicker>Work shown in context</ProductionKicker>
            <h1 className="mt-5 max-w-4xl text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-[1.05]">
              The situation matters as much as the session
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--cya-body)]">
              Corporate Yoga Australia case studies connect a workplace need with the choices made, the way the
              experience was delivered and what the organisation learned from it.
            </p>
            <div className="mt-8 flex gap-3">
              <ProductionAction href="#stories">
                Explore the approach
              </ProductionAction>
              <ProductionAction href="/contact" style="secondary">
                Start planning
              </ProductionAction>
            </div>
          </div>
          <aside className="border border-[var(--cya-divider)] bg-white p-8 text-[var(--cya-teal-dark)]">
            <ProductionKicker>What a useful story shows</ProductionKicker>
            <ul className="mt-6 space-y-4">
              <li>The workplace context and need</li>
              <li>Why the format and approach fitted</li>
              <li>The evidence available after delivery</li>
            </ul>
          </aside>
        </ProductionContainer>
      </section>

      <ReviewImageDirection
        id="IMAGE 12"
        job="Evidence"
        subject="A genuine facilitated Corporate Yoga Australia workplace moment with visible context and natural participation."
        treatment="Documentary rather than posed; enough environmental detail to distinguish the workplace setting."
        format="Wide landscape crop with a clear focal point; allow for responsive cropping."
        avoid="Client logos without permission, testimonial-style portraits, staged applause or generic stock wellbeing imagery."
        candidate="/images/cya-collage-event.jpg"
      />

      <section id="stories" className="bg-[var(--cya-surface-base)] py-20 lg:py-24">
        <ProductionContainer>
          <ProductionKicker>Decisions in context</ProductionKicker>
          <h2 className="mt-5 max-w-5xl text-4xl font-bold lg:text-5xl">
            Look for the workplace situation closest to yours
          </h2>
          <p className="mt-5 max-w-4xl text-lg text-[var(--cya-body)]">
            The most useful comparison may be the need, the delivery setting or the scale of
            the organisation—not an identical program.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <ProductionCard
              title="By workplace need"
              body="Movement, focus, recovery, connection, an expert conversation or an ongoing rhythm."
            />
            <ProductionCard
              title="By delivery context"
              body="An office, conference, hybrid workforce, multiple locations or connected program."
            />
            <ProductionCard
              title="By type of support"
              body="A single experience, recurring sessions, Workshops, Programs or Online Wellbeing."
            />
          </div>

          {publishableStories.length > 0 ? (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {publishableStories.map((study) => (
                <CaseStudyCard key={study.slug} study={study} />
              ))}
            </div>
          ) : (
            <div className="mt-12 max-w-3xl border-l-4 border-[var(--cya-coral)] bg-white p-7">
              <h3 className="text-2xl font-bold text-[var(--cya-teal-dark)]">
                Detailed client stories are being prepared
              </h3>
              <p className="mt-3 text-[var(--cya-body)]">
                In the meantime, tell us the situation you are working with. We can talk
                through relevant experience without publishing a client story before it is
                ready.
              </p>
              <div className="mt-6">
                <ProductionAction href="/contact">Discuss your situation</ProductionAction>
              </div>
            </div>
          )}
        </ProductionContainer>
      </section>

      <ProductionClosing
        heading="Start with the situation you need to solve"
        body="Corporate Yoga Australia can help shape the format, delivery and next step around your workplace."
      />
    </>
  );
}
