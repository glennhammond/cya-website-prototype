import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { EditorialFeature } from "@/components/EditorialFeature";
import { FeatureGrid } from "@/components/FeatureGrid";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container, Section, Kicker } from "@/components/Primitives";
import { EvidencePlaceholder } from "@/components/EvidencePlaceholder";
import { CtaLink } from "@/components/CtaLink";
import { memberSignInHref } from "@/content/navigation";
import {
  studioHero,
  employeeValueFeature,
  employerValueFeature,
  memberExperience,
  liveOnDemandModel,
  implementation,
  privacyFeature,
  progressionLevels,
  closingCTA,
} from "@/content/wellbeing-studio";
import { media } from "@/content/media";

export const metadata: Metadata = {
  title: "Wellbeing Studio",
  description:
    "Wellbeing Studio by Corporate Yoga Australia gives employees practical digital wellbeing support beyond the scheduled live session, with privacy-safe aggregate reporting for employers.",
};

export default function WellbeingStudioPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Wellbeing Studio" }]} />
      <Hero
        intro={studioHero}
        placeholderVariant="studio"
        placeholderCaption="Product placeholder — Wellbeing Studio member screens."
      />

      <Section tone="mist">
        <Container className="flex justify-center">
          <CtaLink href={memberSignInHref} variant="secondary" external>
            Already a member? Sign in to Wellbeing Studio
          </CtaLink>
        </Container>
      </Section>

      <EditorialFeature
        kicker={employeeValueFeature.kicker}
        heading={employeeValueFeature.heading}
        body={employeeValueFeature.body}
        cta={employeeValueFeature.cta}
        tone="white"
        image={media.studioEmployeeHome}
      />
      <EditorialFeature
        kicker={employerValueFeature.kicker}
        heading={employerValueFeature.heading}
        body={employerValueFeature.body}
        cta={employerValueFeature.cta}
        tone="mist"
        reverse
        placeholderVariant="workplace"
        placeholderCaption="Photography placeholder — an employer dashboard walkthrough."
      />

      <div id="member-experience">
        <FeatureGrid kicker="Member walkthrough" heading="What's inside the member experience." items={memberExperience} tone="white" columns={4} />
      </div>
      <FeatureGrid kicker="Live and on-demand model" heading="How content reaches employees." items={liveOnDemandModel} tone="mist" columns={3} />
      <FeatureGrid kicker="Implementation" heading="Getting your organisation started." items={implementation} tone="white" columns={3} />

      <EditorialFeature
        kicker={privacyFeature.kicker}
        heading={privacyFeature.heading}
        body={privacyFeature.body}
        tone="mist"
        placeholderVariant="studio"
        placeholderCaption="Illustration placeholder — aggregate reporting, not individual activity."
      />

      <Section tone="white">
        <Container>
          <div className="max-w-2xl">
            <Kicker>Working direction</Kicker>
            <h2 className="mt-3 text-[28px] sm:text-[34px]">A conceptual progression, not a priced package.</h2>
            <p className="mt-4 text-lg leading-relaxed text-body">
              Access, Engage and Strategic partnership describe increasing coordination and support. Entitlements
              and pricing remain a commercial dependency and are not published here.
            </p>
          </div>
          <ol className="mt-10 grid gap-0 overflow-hidden rounded-[var(--radius-card)] border border-divider sm:grid-cols-3">
            {progressionLevels.map((level, index) => (
              <li key={level.title} className={`flex flex-col gap-3 p-6 ${index > 0 ? "border-t border-divider sm:border-t-0 sm:border-l" : ""}`}>
                <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-full bg-mist text-sm font-bold text-teal-dark">
                  {index + 1}
                </span>
                <h3 className="text-lg text-teal-dark">{level.title}</h3>
                <p className="text-sm leading-relaxed text-body">{level.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="mist">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <EvidencePlaceholder
              variant="studio"
              caption="Proof placeholder — pilot findings and verified reporting."
              status="evidence-required"
              note="Pilot findings, screenshots and verified schedule/reporting model required before publication."
            />
            <div>
              <Kicker>Proof</Kicker>
              <h2 className="mt-3 text-[28px] sm:text-[34px]">Current capability, not future ambition.</h2>
              <p className="mt-4 text-lg leading-relaxed text-body">
                Wellbeing Studio proof will describe verified current capability — pilot findings, product
                walkthroughs and approved member or client voice — not the 2027 launch ambition.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        kicker={closingCTA.kicker}
        heading={closingCTA.heading}
        body={closingCTA.body}
        cta={closingCTA.cta}
        secondaryCta={{ label: "Member sign-in", href: memberSignInHref, variant: "secondary", external: true }}
      />
    </>
  );
}
