import type { Metadata } from "next";
import { Container, Section, Kicker } from "@/components/Primitives";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConsultationForm } from "@/components/ConsultationForm";
import { consultationHero, interestLabelByType } from "@/content/consultation";
import { responseCommitment } from "@/content/site";

export const metadata: Metadata = {
  title: "Book a Wellbeing Consultation",
  description:
    "Tell us whether you are considering one session, a conference, Wellbeing Studio, a recurring series or a broader program.",
};

export default async function ConsultationPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string }>;
}) {
  const { interest } = await searchParams;
  const contextualLabel = interest ? interestLabelByType[interest] : undefined;

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Consultation" }]} />
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
                  <li>Health, medical or crisis support — CYA is not an EAP or clinical service</li>
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
