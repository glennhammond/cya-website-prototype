import type { Metadata } from "next";
import { Container, Section, Kicker } from "@/components/Primitives";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EvidenceBadge } from "@/components/AnnotationToggle";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the Corporate Yoga Australia website - pending final legal review.",
};

const sections = [
  { title: "Using this website", body: "This website is provided to help organisations understand and enquire about CYA's services. It is not a booking platform or a Wellbeing Studio member environment." },
  { title: "Wellbeing Studio member terms", body: "Member terms for Wellbeing Studio are presented separately at studio.corporateyoga.com.au and are not duplicated here." },
  { title: "No medical or crisis advice", body: "Content on this site is general workplace wellbeing information. It does not replace medical advice, clinical care or crisis support, and CYA is not an Employee Assistance Program." },
  { title: "Intellectual property", body: "Site content, brand assets and logos remain the property of Corporate Yoga Australia unless stated otherwise." },
  { title: "Liability", body: "Full liability, warranty and dispute-resolution wording is finalised as part of legal review." },
];

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms" }]} />
      <Section tone="page">
        <Container>
          <div className="flex flex-wrap items-center gap-3">
            <Kicker>Terms</Kicker>
            <EvidenceBadge status="legal-review" note="Full terms of use require legal review before publication." />
          </div>
          <h1 className="cya-page-title mt-5">Website terms</h1>
          <p className="cya-lead mt-6 max-w-2xl">
            This page sets out the structure CYA&rsquo;s website terms will follow. The wording below is a working
            outline, not the final, legally reviewed terms.
          </p>

          <div className="mt-10 max-w-3xl space-y-8">
            {sections.map((section) => (
              <div key={section.title} className="border-t border-divider pt-6 first:border-t-0 first:pt-0">
                <h2 className="text-lg text-teal-dark">{section.title}</h2>
                <p className="mt-2 text-base leading-relaxed text-body">{section.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-3xl border-t border-divider pt-6 text-sm text-body">
            Legal entity: {site.legalEntity}.
          </p>
        </Container>
      </Section>
    </>
  );
}
