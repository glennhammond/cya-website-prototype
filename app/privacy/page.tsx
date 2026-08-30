import type { Metadata } from "next";
import { Container, Section, Kicker } from "@/components/Primitives";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EvidenceBadge } from "@/components/AnnotationToggle";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Corporate Yoga Australia handles personal information - pending final legal review.",
};

const sections = [
  { title: "What CYA collects", body: "Contact and organisational details submitted through the consultation form, and aggregate Wellbeing Studio participation data described on the Wellbeing Studio page." },
  { title: "What CYA does not collect", body: "The public consultation form does not collect health, medical or other sensitive personal information." },
  { title: "How data is used", body: "To respond to enquiries, coordinate delivery, and - where consented - send occasional planning content." },
  { title: "Wellbeing Studio data boundary", body: "Employer reporting is aggregate only. CYA does not share individual member activity, names or inferred wellbeing status with employers." },
  { title: "Data storage and access", body: "Enquiry data is intended to route to HubSpot; access control and retention detail are finalised as part of legal review." },
  { title: "Your rights", body: "Detail on access, correction and complaint pathways is finalised as part of legal review." },
];

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy" }]} />
      <Section tone="page">
        <Container>
          <div className="flex flex-wrap items-center gap-3">
            <Kicker>Privacy</Kicker>
            <EvidenceBadge status="legal-review" note="Full privacy policy requires legal review before publication (Strategic Source of Truth, Section E)." />
          </div>
          <h1 className="cya-page-title mt-5">Privacy policy</h1>
          <p className="cya-lead mt-6 max-w-2xl">
            This page sets out the structure CYA&rsquo;s privacy policy will follow. The wording below is a
            working outline, not the final, legally reviewed policy.
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
            Legal entity: {site.legalEntity}. Full contact and complaints-handling detail will be published once
            approved.
          </p>
        </Container>
      </Section>
    </>
  );
}
