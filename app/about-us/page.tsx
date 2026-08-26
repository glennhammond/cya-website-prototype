import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { EditorialFeature } from "@/components/EditorialFeature";
import { StatementList } from "@/components/StatementList";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, Container, Kicker } from "@/components/Primitives";
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
  title: "About Corporate Yoga Australia",
  description:
    "Corporate Yoga Australia grew from Debby Lewis's own workplace-wellbeing practice into a national business, founded in 2014.",
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutUsPage() {
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
        <Container className="studio-panel">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <ImageMedia asset={media.aboutDebbyPortrait} aspect="4/3" />
            <div>
              <Kicker>{originStory.kicker}</Kicker>
              <h2 className="mt-3 text-heading-lg">{originStory.heading}</h2>
              <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-body">{originStory.body}</p>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.08em] text-ochre-ink">
                Corporate Yoga Australia, founded 2014
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <StatementList
        kicker="How CYA works"
        heading="A consistent method, an adapted result."
        items={howCyaWorks}
        tone="mist"
        columns={2}
      />

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
              caption="Representative facilitator only - not a directory. Individual profiles publish once credentials, insurance and permissions are verified."
            />
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="studio-panel">
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="rounded-[var(--radius-card)] bg-mist p-8 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-ochre-ink">Every engagement</p>
              <ul className="mt-6 space-y-5">
                {["Insurance requirements", "Relevant facilitator credentials", "Safety procedures and clear delivery standards"].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-base font-bold text-teal-dark">
                    <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full bg-aqua" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Kicker>{professionalStandards.kicker}</Kicker>
              <h2 className="mt-3 text-heading-lg">{professionalStandards.heading}</h2>
              <p className="mt-4 text-lg leading-relaxed text-body">{professionalStandards.body}</p>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        kicker={closingCTA.kicker}
        heading={closingCTA.heading}
        body={closingCTA.body}
        cta={closingCTA.cta}
      />
    </>
  );
}
