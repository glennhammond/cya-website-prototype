import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ReviewImageDirection } from "@/components/ReviewImageDirection";
import {
  ProductionAction,
  ProductionCard,
  ProductionClosing,
  ProductionContainer,
  ProductionKicker,
} from "@/components/ProductionPrimitives";
import { activationFormats, agendaMoments, logistics } from "@/content/conferences";

export const metadata: Metadata = {
  title: "Conferences and Events",
  description:
    "Workplace wellbeing activations, movement, mindfulness and practical sessions designed around the audience, venue and event run sheet.",
  alternates: { canonical: "/conferences-events" },
  robots: { index: false, follow: true },
};

export default function ConferencesEventsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Conferences and events" }]} />
      <section className="cya-page-hero">
        <ProductionContainer className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
          <div>
            <ProductionKicker>Conferences and events</ProductionKicker>
            <h1 className="cya-page-title mt-5">
              Build energy, calm and connection into the agenda.
            </h1>
            <p className="cya-lead mt-6">
              From a short activation to morning movement, mindfulness or a practical wellbeing session, CYA designs around the audience, venue and run sheet.
            </p>
            <div className="cya-action-row mt-8">
              <ProductionAction href="/contact?interest=conference">Discuss your conference</ProductionAction>
              <ProductionAction href="#formats" style="secondary">Explore activation formats</ProductionAction>
            </div>
          </div>
          <aside className="cya-panel bg-[var(--cya-surface-base)]">
            <ProductionKicker>Start with the agenda</ProductionKicker>
            <ul className="mt-6 space-y-4 text-lg font-semibold"><li>Audience and participation</li><li>Moment in the run sheet</li><li>Venue and practical set-up</li></ul>
          </aside>
        </ProductionContainer>
      </section>
      <ReviewImageDirection id="IMAGE 11 · EVENT OR CONFERENCE ACTIVATION" job="Context" subject="A genuine CYA activation within a conference or event, showing how the experience fits the venue, audience and agenda." treatment="Contained 3:2 image with event context and natural participation. Preserve the light-led page rather than turning the photograph into a hero background." format="3:2 desktop · adaptable to 4:3 mobile" avoid="Generic keynote imagery, empty stages, unreadable screens, unapproved event branding or an image that implies an official partnership." candidate="/images/selected/cya-conferences-events-hero.webp" />
      <section className="cya-section bg-[var(--cya-surface-base)]">
        <ProductionContainer>
          <ProductionKicker>Where CYA fits into the agenda</ProductionKicker>
          <h2 className="cya-section-title mt-5">Support the moment the agenda needs.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">{agendaMoments.map((item) => <ProductionCard key={item.title} title={item.title} body={item.body} />)}</div>
        </ProductionContainer>
      </section>
      <section id="formats" className="cya-section scroll-mt-24 bg-[var(--cya-surface-subtle)]">
        <ProductionContainer>
          <ProductionKicker>Activation formats</ProductionKicker>
          <h2 className="cya-section-title mt-5">From a short reset to a broader wellbeing stream.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">{activationFormats.map((item) => <ProductionCard key={item.title} title={item.title} body={item.body} tone="paper" />)}</div>
        </ProductionContainer>
      </section>
      <section className="cya-section bg-[var(--cya-surface-page)]">
        <ProductionContainer>
          <ProductionKicker>Delivery logistics</ProductionKicker>
          <h2 className="cya-section-title mt-5">What CYA confirms before the day.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-4">{logistics.map((item) => <ProductionCard key={item.title} title={item.title} body={item.body} tone="paper" />)}</div>
        </ProductionContainer>
      </section>
      <ProductionClosing heading="One activation or a connected event experience." body="Start with the audience, agenda and venue. CYA can shape one useful moment or coordinate several experiences when that helps." href="/contact?interest=conference" action="Discuss your conference" />
    </>
  );
}
