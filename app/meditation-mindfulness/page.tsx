import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceStructuredData } from "@/components/StructuredData";
import { SpecialistServiceProduction } from "@/components/SpecialistServiceProduction";
import { media } from "@/content/media";

export const metadata: Metadata = { title: { absolute: "Workplace Meditation & Corporate Mindfulness Workshops | CYA" }, description: "Practical workplace meditation, mindfulness and breathwork that help Australian teams pause, reset and manage pressure.", alternates: { canonical: "/meditation-mindfulness" } };

export default function MeditationMindfulnessPage() {
  return <>
    <ServiceStructuredData name="Workplace Mindfulness & Meditation" description="Practical workplace mindfulness, guided meditation and breathwork for Australian teams." path="/meditation-mindfulness" breadcrumbLabel="Mindfulness & Meditation" />
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Mindfulness & Meditation" }]} />
    <SpecialistServiceProduction
      heroTone="white"
      kicker="Mindfulness without performance"
      heading="A useful pause in the working day."
      body="Guided meditation and mindfulness experiences that respect different levels of confidence, attention and comfort."
      primaryAction={{ label: "Plan a session", href: "/contact?interest=one-off" }}
      image={media.aboutWorldview}
      imageLabel="CYA photography · varied access"
      evidenceLine="Eyes open or closed. Seated or standing. Joining should never depend on prior experience."
      firstKicker="Start with what the need supports"
      firstHeading="Calm, focus and connection are different jobs."
      firstBody="The experience begins with the workplace need, then selects an appropriate format and facilitator approach."
      firstCards={[{ title: "A reset in a demanding day", body: "Short guided practices that help people pause without pretending work has disappeared." }, { title: "Focus before important work", body: "Attention practices framed for preparation, transition and clarity." }, { title: "Connection without pressure", body: "Shared moments that create permission and presence without forced disclosure." }]}
      secondKicker="Psychological safety is part of the format"
      secondHeading="Psychological safety is part of the format"
      secondCards={[{ title: "Choice", body: "Eyes open or closed; seated, standing or simply listening." }, { title: "Language", body: "Invitational, culturally aware and free from therapeutic claims." }, { title: "Boundaries", body: "Clear distinction between workplace wellbeing and clinical support." }]}
      closingHeading="Create a useful pause without pressure."
      closingBody="Tell us what the workplace needs to support and how people will join."
    />
  </>;
}
