import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container, Kicker, Section } from "@/components/Primitives";
import { CtaLink } from "@/components/CtaLink";
import { ImageMedia } from "@/components/ImageMedia";
import { FeatureGrid } from "@/components/FeatureGrid";
import { DividerList } from "@/components/DividerList";
import { EditorialFeature } from "@/components/EditorialFeature";
import { ProofNote } from "@/components/ProofNote";
import { CTASection } from "@/components/CTASection";
import { ServiceStructuredData } from "@/components/StructuredData";
import { media } from "@/content/media";
import {
  pilatesHero,
  sessionFormats,
  workplaceFit,
  equipmentAndSpace,
  deliveryModes,
  facilitatorGate,
  evidenceGate,
  relatedPaths,
  closingCTA,
} from "@/content/workplace-pilates";

export const metadata: Metadata = {
  title: "Workplace Pilates Classes Australia",
  description:
    "Mat-based workplace Pilates for Australian teams, available as one-off, recurring, onsite and online sessions tailored to the workplace setup.",
  alternates: {
    canonical: "/workplace-pilates",
  },
};

export default function WorkplacePilatesPage() {
  return (
    <>
      <ServiceStructuredData
        name="Workplace Pilates"
        description="Mat-based workplace Pilates for Australian teams, available as one-off, recurring, onsite and online sessions tailored to the workplace setup."
        path="/workplace-pilates"
        breadcrumbLabel="Workplace Pilates"
        breadcrumbs={[
          { name: "Movement", path: "/movement" },
          { name: "Workplace Pilates", path: "/workplace-pilates" },
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Movement", href: "/movement" },
          { label: "Workplace Pilates" },
        ]}
      />

      <Section tone="white">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Kicker>{pilatesHero.kicker}</Kicker>
              <h1 className="mt-4 text-[36px] font-bold leading-tight text-teal-dark sm:text-[52px]">
                {pilatesHero.heading}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-body">{pilatesHero.body}</p>
              {pilatesHero.meta && (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {pilatesHero.meta.map((item) => (
                    <li key={item} className="rounded-full border border-divider bg-mist px-3.5 py-1.5 text-sm font-bold text-teal-dark">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {pilatesHero.actions?.map((action) => (
                  <CtaLink key={action.label} href={action.href} variant={action.variant}>
                    {action.label}
                  </CtaLink>
                ))}
              </div>
            </div>
            <ImageMedia
              asset={media.programsHero}
              treatment="card"
              aspect="4/3"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
        </Container>
      </Section>

      <FeatureGrid
        kicker="Pilates session formats"
        heading="A distinct movement option for workplace teams."
        items={sessionFormats}
        tone="mist"
        columns={4}
        compact
      />

      <FeatureGrid
        kicker="Workplace fit"
        heading="When mat-based Pilates is a practical choice."
        items={workplaceFit}
        tone="white"
        columns={4}
        compact
      />

      <DividerList
        kicker="Equipment & space"
        heading="Confirm the room before confirming the class."
        items={equipmentAndSpace}
        tone="mist"
      />

      <DividerList
        kicker="Delivery modes"
        heading="Onsite, online or coordinated across locations."
        items={deliveryModes}
        tone="white"
      />

      <EditorialFeature
        kicker={facilitatorGate.kicker}
        heading={facilitatorGate.heading}
        body={facilitatorGate.body}
        tone="mist"
        image={media.aboutFacilitator}
        imageCaption="Representative CYA facilitator. Practitioner fit and relevant qualifications are confirmed for the booked Pilates brief."
      />

      <ProofNote
        tone="white"
        placeholderVariant="movement"
        placeholderCaption="Pilates-specific case evidence can be added when a suitable approved example is available."
        heading={evidenceGate.heading}
        body={evidenceGate.body}
      />

      <DividerList
        kicker="Related movement pathways"
        heading="Keep Pilates distinct while making the wider CYA offer easy to navigate."
        items={relatedPaths}
        tone="mist"
      />

      <CTASection
        kicker={closingCTA.kicker}
        heading={closingCTA.heading}
        body={closingCTA.body}
        cta={closingCTA.cta}
      />
    </>
  );
}
