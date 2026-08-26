import type { Metadata } from "next";
import { Container, Section, Kicker } from "@/components/Primitives";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BreadcrumbStructuredData } from "@/components/StructuredData";
import { ConsultationForm } from "@/components/ConsultationForm";
import { consultationHero, interestLabelByType } from "@/content/consultation";
import { responseCommitment } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Corporate Yoga Australia",
  description:
    "Tell Corporate Yoga Australia whether you are considering one session, a conference, online wellbeing, a recurring series or a broader workplace wellbeing program.",
  alternates: {
    canonical: "/contact",
  },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string }>;
}) {
  const { interest } = await searchParams;
  const contextualLabel = interest ? interestLabelByType[interest] : undefined;

  return (
    <>
      <BreadcrumbStructuredData items={[{ name: "Contact", path: "/contact" }]} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <Section tone="white" className="pb-0">
        <Container>
          <Kicker>{consultationHero.kicker}</Kicker>
          <h1 className="mt-4 text-[32px] sm:text-[42px]">
            {contextualLabel ? `Let's talk about ${contextualLabel.toLowerCase()}.` : consultationHero.heading}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-body">{consultationHero.body}</p>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <div className="rounded-[var(--radius-card)] border border-divider bg-mist p-6">
                <h2 className="text-lg text-teal-dark">What happens next</h2>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  Your enquiry is acknowledged and routed to the appropriate owner. {responseCommitment.value}
                </p>
              </div>
              <div className="mt-6 rounded-[var(--radius-card)] border border-divider bg-white p-6">
                <h2 className="text-lg text-teal-dark">This form is not for</h2>
                <ul className="mt-2 space-y-2 text-sm leading-relaxed text-body">
                  <li>Wellbeing Studio member sign-in or account support</li>
                  <li>Facilitator or employment enquiries</li>
                  <li>Health, medical or crisis support - CYA is not an EAP or clinical service</li>
                </ul>
              </div>
            </div>
            <ConsultationForm initialInterest={interest} />
          </div>
        </Container>
      </Section>
    </>
  );
}
