import type { Metadata } from "next";
import { StudioPageHero } from "@/components/StudioPageHero";
import { EditorialFeature } from "@/components/EditorialFeature";
import { FeatureGrid } from "@/components/FeatureGrid";
import { DividerList } from "@/components/DividerList";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container, Section, Kicker } from "@/components/Primitives";
import { ProofNote } from "@/components/ProofNote";
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
      <StudioPageHero
        kicker={studioHero.kicker}
        heading={studioHero.heading}
        body={studioHero.body}
        actions={studioHero.actions}
        image={media.studioEmployeeHome}
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
        placeholderVariant="studio"
        placeholderCaption="Photography placeholder — a Wellbeing Studio member session in progress."
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
        <FeatureGrid kicker="Member walkthrough" heading="What's inside the member experience." items={memberExperience} tone="white" compact columns={4} />
      </div>
      <DividerList kicker="Live and on-demand model" heading="How content reaches employees." items={liveOnDemandModel} tone="mist" />
      <DividerList kicker="Implementation" heading="Getting your organisation started." items={implementation} tone="white" />

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
            <h2 className="mt-3 text-heading-lg">A conceptual progression, not a priced package.</h2>
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
                <h3 className="text-heading-sm text-teal-dark">{level.title}</h3>
                <p className="text-sm leading-relaxed text-body">{level.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <ProofNote
        placeholderVariant="studio"
        placeholderCaption="Proof placeholder — pilot findings and verified reporting."
        note="Pilot findings, screenshots and verified schedule/reporting model required before publication."
        heading="Current capability, not future ambition."
        body="Wellbeing Studio proof will describe verified current capability — pilot findings, product walkthroughs and approved member or client voice — not the 2027 launch ambition."
      />

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
