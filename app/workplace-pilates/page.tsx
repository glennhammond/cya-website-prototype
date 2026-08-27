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
      heroTone="field"
      kicker="Fit for here · Workplace Pilates"
      heading="Workplace Pilates for strength, posture and useful movement."
      body="Practical sessions shaped for desks, teams, conferences and hybrid work—with options for the space and confidence in the room."
      primaryAction={{ label: "Plan workplace Pilates", href: "/contact?interest=one-off" }}
      image={media.movementGroupIndustrial}
      imageLabel="CYA photography · movement"
      evidenceLine="Real workplace evidence required: desk-based, mat-based and standing formats must be shown in genuine context."
      firstKicker="Strength without studio assumptions"
      firstHeading="A specialist service designed around real workplaces."
      firstBody="The page makes Pilates recognisable while resolving the practical questions that determine whether people can join."
      firstCards={[{ title: "Desk and chair formats", body: "Useful strength and mobility without requiring mats or changing clothes." }, { title: "Mat-based sessions", body: "A more complete movement format where the room and participation context support it." }, { title: "Conference and event formats", body: "Focused movement shaped for larger groups, limited time and mixed confidence." }]}
      secondKicker="Field Notes carry the proof"
      secondHeading="Field Notes carry the proof"
      secondCards={[{ title: "Place", body: "A genuine workplace—not a generic fitness studio." }, { title: "Adaptation", body: "What changed because of the room or group." }, { title: "Permission", body: "What people could choose, modify or decline." }]}
      closingHeading="Plan Pilates around the people and place."
      closingBody="Start with the room, group and moment—we’ll recommend a practical format."
    />
  </>;
}
