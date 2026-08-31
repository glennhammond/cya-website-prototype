import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceStructuredData } from "@/components/StructuredData";
import { SpecialistServiceProduction } from "@/components/SpecialistServiceProduction";
import { media } from "@/content/media";

export const metadata: Metadata = { title: { absolute: "Workplace Pilates Classes Australia | Corporate Yoga Australia" }, description: "Accessible workplace Pilates classes for stronger, more comfortable teams. Onsite and online sessions designed to fit Australian workdays.", alternates: { canonical: "/workplace-pilates" } };

export default function WorkplacePilatesPage() {
  return <>
    <ServiceStructuredData name="Workplace Pilates" description="Mat-based workplace Pilates for Australian teams, available as one-off, recurring, onsite and online sessions tailored to the workplace setup." path="/workplace-pilates" breadcrumbLabel="Workplace Pilates" breadcrumbs={[{ name: "Movement", path: "/movement" }, { name: "Workplace Pilates", path: "/workplace-pilates" }]} />
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Movement", href: "/movement" }, { label: "Workplace Pilates" }]} />
    <SpecialistServiceProduction
      kicker="Fit for here · Workplace Pilates"
      heading="Workplace Pilates for strength, posture and useful movement"
      body="Practical Pilates sessions shaped around the team, available space, equipment, timing and confidence in the room."
      primaryAction={{ label: "Plan workplace Pilates", href: "/contact?interest=one-off" }}
      image={media.movementGroupIndustrial}
      imageLabel="IMAGE 03 · WORKPLACE PILATES"
      imageBrief={{
        job: "Participation",
        subject: "A genuine Corporate Yoga Australia Pilates session showing the confirmed format, equipment, available space and facilitator interaction.",
        treatment: "Bright, service-specific 3:2 image with enough workplace context to distinguish it from a fitness studio.",
        format: "3:2 desktop · adaptable to 4:3 mobile",
        avoid: "Yoga imagery substituted for Pilates, generic stretching, unsupported desk or standing formats, or a studio fitness aesthetic.",
      }}
      evidenceLine="The session format, equipment and room set-up are confirmed around the people, place and purpose."
      firstKicker="Strength without studio assumptions"
      firstHeading="A specialist service designed around real workplaces"
      firstBody="Corporate Yoga Australia makes Pilates recognisable while resolving the practical questions that determine whether a session will fit."
      firstCards={[{ title: "One-off session", body: "A complete Pilates experience for a team or particular workplace moment." }, { title: "Short series or recurring class", body: "A repeatable format where the room, schedule and participation context support it." }, { title: "Practical set-up", body: "Space, equipment, clothing and preparation are confirmed before the session." }]}
      secondKicker="Plan around the context"
      secondHeading="Start with the room, group and moment"
      secondCards={[{ title: "People", body: "Experience, confidence and participation needs inform the brief." }, { title: "Place", body: "The available workplace space and equipment shape the suitable format." }, { title: "Purpose", body: "One useful class, a short series or an ongoing rhythm can each be a valid choice." }]}
      closingHeading="Plan Pilates around the people and place"
      closingBody="Start with the room, group and moment—we’ll recommend a practical format."
    />
  </>;
}
