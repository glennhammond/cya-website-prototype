import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceStructuredData } from "@/components/StructuredData";
import { SpecialistServiceProduction } from "@/components/SpecialistServiceProduction";
import { media } from "@/content/media";

export const metadata: Metadata = { title: { absolute: "Workplace Yoga Classes Australia | Corporate Yoga Australia" }, description: "Inclusive workplace yoga classes for Australian teams, delivered onsite, online or hybrid. Flexible sessions shaped around your people and workday.", alternates: { canonical: "/workplace-yoga" } };

export default function WorkplaceYogaPage() {
  return <>
    <ServiceStructuredData name="Workplace Yoga" description="Human-led workplace yoga sessions for Australian teams, adapted to real workplaces." path="/workplace-yoga" breadcrumbLabel="Workplace Yoga" breadcrumbs={[{ name: "Movement", path: "/movement" }, { name: "Workplace Yoga", path: "/workplace-yoga" }]} />
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Movement", href: "/movement" }, { label: "Workplace Yoga" }]} />
    <SpecialistServiceProduction
      kicker="Fit for here · Workplace Yoga"
      heading="Workplace Yoga that respects the room, the people and the working day"
      body="Practical sessions for offices, teams, conferences and hybrid work, with no assumed experience and a format adapted to the space, confidence and mobility in the room."
      primaryAction={{ label: "Plan workplace yoga", href: "/contact?interest=one-off" }}
      image={media.homeOneOff}
      imageLabel="IMAGE 02 · WORKPLACE YOGA PARTICIPATION"
      imageBrief={{
        job: "Participation",
        subject: "An approachable CYA yoga session in a genuine meeting room or workplace, with a visible facilitator and mixed levels of confidence.",
        treatment: "Light, contained 3:2 editorial image. Keep the room legible and allow clear space around the participants.",
        format: "3:2 desktop · adaptable to 4:3 mobile",
        avoid: "Extreme poses, studio settings, tightly cropped bodies, or an image that suggests prior yoga experience is required.",
      }}
      evidenceLine="No assumed experience. The format follows the people, room and working day."
      firstKicker="Designed around the room"
      firstHeading="Movement people can actually join."
      firstBody="Workplace yoga starts with practical reality: space, clothing, confidence, access and the shape of the working day."
      firstCards={[{ title: "In the room", body: "Chair-based, mat-based or standing formats selected for the space available." }, { title: "For mixed confidence", body: "Clear options and human facilitation make joining feel possible, not performative." }, { title: "Across the working day", body: "A useful reset before work, between meetings or as a regular team rhythm." }]}
      secondKicker="Practical examples"
      secondHeading="Workplace yoga can meet the room rather than imitate a studio."
      secondCards={[{ title: "A meeting room at lunch", body: "Chairs stayed in. The session met the room instead of pretending it was a studio." }, { title: "A regular team reset", body: "A small, repeatable session became part of the working week—not another initiative to remember." }, { title: "A broader Working Rhythm", body: "Keep it one-off, repeat it, or connect it only when useful.", href: "/workplace-wellbeing-programs" }]}
      closingHeading="Find the right yoga format for your workplace."
      closingBody="Tell us about the people, place and moment. We’ll recommend a useful starting point."
    />
  </>;
}
