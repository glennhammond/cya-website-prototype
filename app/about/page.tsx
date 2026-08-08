import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { EditorialFeature } from "@/components/EditorialFeature";
import { StatementList } from "@/components/StatementList";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, Container, Kicker } from "@/components/Primitives";
import { EvidencePlaceholder } from "@/components/EvidencePlaceholder";
import { ImageMedia } from "@/components/ImageMedia";
import { media } from "@/content/media";
import {
  aboutHero,
  worldviewFeature,
  originStory,
  howCyaWorks,
  deliveryPhilosophy,
  facilitatorNetwork,
  professionalStandards,
  closingCTA,
} from "@/content/about";

export const metadata: Metadata = {
  title: "About CYA",
  description:
    "Corporate Yoga Australia grew from Debby Lewis's own workplace-wellbeing practice into a national business, founded in 2014.",
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <PageHero intro={aboutHero} image={media.aboutHero} imagePosition="right" />
      <EditorialFeature
        kicker={worldviewFeature.kicker}
        heading={worldviewFeature.heading}
        body={worldviewFeature.body}
        cta={worldviewFeature.cta}
        tone="mist"
        image={media.aboutWorldview}
      />

      <Section tone="white" id="origin">
        <Container>
          <div className="max-w-2xl rounded-[var(--radius-card)] border border-divider bg-mist p-8">
            <Kicker>{originStory.kicker}</Kicker>
            <h2 className="mt-3 text-heading-lg">{originStory.heading}</h2>
            <p className="mt-4 text-lg leading-relaxed text-body">{originStory.body}</p>
            <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-divider pt-6 text-sm">
              <div>
                <dt className="font-bold text-teal-dark">2001</dt>
                <dd className="text-body">Debby&rsquo;s personal origin story — not the company founding date.</dd>
              </div>
              <div>
                <dt className="font-bold text-teal-dark">2014</dt>
                <dd className="text-body">Corporate Yoga Australia founded.</dd>
              </div>
            </dl>
          </div>
        </Container>
      </Section>

      <StatementList kicker="How CYA works" heading="A consistent method, an adapted result." items={howCyaWorks} tone="mist" columns={2} />

      <EditorialFeature
        kicker={deliveryPhilosophy.kicker}
        heading={deliveryPhilosophy.heading}
        body={deliveryPhilosophy.body}
        tone="white"
        reverse
        image={media.aboutDelivery}
      />

      <Section tone="mist">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <Kicker>{facilitatorNetwork.kicker}</Kicker>
              <h2 className="mt-3 text-heading-lg">{facilitatorNetwork.heading}</h2>
              <p className="mt-4 text-lg leading-relaxed text-body">{facilitatorNetwork.body}</p>
            </div>
            <ImageMedia
              asset={media.aboutFacilitator}
              caption="Representative facilitator only — not a directory. Individual profiles publish once credentials, insurance and permissions are verified."
            />
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <EvidencePlaceholder
              variant="portrait"
              caption="Professional standards placeholder."
              status="legal-review"
              note="Insurance certificates and credential framework require legal review before publication."
            />
            <div>
              <Kicker>{professionalStandards.kicker}</Kicker>
              <h2 className="mt-3 text-heading-lg">{professionalStandards.heading}</h2>
              <p className="mt-4 text-lg leading-relaxed text-body">{professionalStandards.body}</p>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection kicker={closingCTA.kicker} heading={closingCTA.heading} body={closingCTA.body} cta={closingCTA.cta} />
    </>
  );
}
