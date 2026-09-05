import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BreadcrumbStructuredData } from "@/components/StructuredData";
import { ConsultationForm } from "@/components/ConsultationForm";
import {
  ProductionAction,
  ProductionContainer,
  ProductionKicker,
} from "@/components/ProductionPrimitives";
import { interestLabelByType } from "@/content/consultation";
import { enquirySubmissionEnabled } from "@/lib/release";

export const metadata: Metadata = {
  title: "Contact Corporate Yoga Australia",
  description:
    "Tell Corporate Yoga Australia what needs to happen and begin planning a useful workplace wellbeing experience.",
  alternates: { canonical: "/contact" },
};

const nextSteps = [
  ["01", "We review what you are planning", "We look at the workplace context, audience, timing and what you would like the experience to support."],
  ["02", "We clarify what matters", "If we need anything else, we will ask about the practical details that affect the right approach."],
  ["03", "We suggest a useful next step", "That may be a starting format, a conversation about scope or a recommendation for how to proceed."],
] as const;

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string }>;
}) {
  const { interest } = await searchParams;
  const contextualLabel = interest ? interestLabelByType[interest] : undefined;
  const submissionEnabled = enquirySubmissionEnabled();

  return (
    <>
      <BreadcrumbStructuredData items={[{ name: "Contact", path: "/contact" }]} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

      <section className="bg-[var(--cya-surface-page)] py-12 sm:py-14 lg:py-16">
        <ProductionContainer className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.65fr)] lg:items-end lg:gap-16">
          <div>
            <ProductionKicker>Start planning</ProductionKicker>
            <h1 className="mt-5 max-w-4xl text-[clamp(3rem,4.8vw,4.55rem)] font-bold leading-[1.03] tracking-[-0.025em] text-[var(--cya-teal-dark)]">
              {contextualLabel
                ? `Tell us about ${contextualLabel.toLowerCase()}`
                : "Tell us what would help your workplace"}
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-8 text-[var(--cya-body)]">
              You do not need to arrive with the service, format or package already worked out. Tell us what is happening and what you would like to make easier, better or more useful.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ProductionAction href="#planning-form">Start planning</ProductionAction>
              <ProductionAction href="mailto:info@corporateyoga.com.au" style="secondary">Email us</ProductionAction>
              <ProductionAction href="tel:1300373363" style="secondary">Call 1300 373 363</ProductionAction>
            </div>
          </div>

          <aside className="border-y border-[var(--cya-divider)] py-6">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--cya-ochre-ink)]">Useful to include</p>
            <div className="mt-5 divide-y divide-[var(--cya-divider)]">
              <p className="py-4 text-lg font-semibold text-[var(--cya-charcoal)]">Who it is for</p>
              <p className="py-4 text-lg font-semibold text-[var(--cya-charcoal)]">What is happening in the workplace</p>
              <p className="py-4 text-lg font-semibold text-[var(--cya-charcoal)]">What you would like to achieve</p>
            </div>
          </aside>
        </ProductionContainer>
      </section>

      <section id="planning-form" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
        <ProductionContainer className="grid gap-12 lg:grid-cols-[minmax(18rem,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
          <div>
            <ProductionKicker>Planning form</ProductionKicker>
            <h2 className="mt-5 max-w-xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">
              A few useful details are enough to begin
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--cya-body)]">
              Share what you know now. We can work through the rest with you rather than asking you to solve the delivery before you get in touch.
            </p>
          </div>
          <div className="border-t border-[var(--cya-divider)] pt-7">
            <ConsultationForm initialInterest={interest} submissionEnabled={submissionEnabled} />
          </div>
        </ProductionContainer>
      </section>

      <section className="bg-[var(--cya-surface-page)] py-16 lg:py-20">
        <ProductionContainer>
          <ProductionKicker>What happens next</ProductionKicker>
          <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
            <div>
              <h2 className="max-w-xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">A clear next step, shaped around your workplace</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--cya-body)]">We aim to respond within two business days and make the next step straightforward.</p>
            </div>
            <div className="border-t border-[var(--cya-divider)]">
              {nextSteps.map(([number, title, body]) => (
                <article key={number} className="grid gap-3 border-b border-[var(--cya-divider)] py-6 md:grid-cols-[3rem_0.85fr_1.15fr] md:gap-6">
                  <p className="text-xs font-semibold text-[var(--cya-ochre-ink)]">{number}</p>
                  <h3 className="text-xl font-semibold leading-7 text-[var(--cya-charcoal)]">{title}</h3>
                  <p className="leading-7 text-[var(--cya-body)]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </ProductionContainer>
      </section>
    </>
  );
}
