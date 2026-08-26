import { ServiceStructuredData } from "@/components/StructuredData";

export default function MeditationMindfulnessLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ServiceStructuredData
        name="Workplace Mindfulness & Meditation"
        description="Practical workplace mindfulness, guided meditation and breathwork for Australian teams, delivered onsite, online or as part of a wider wellbeing program."
        path="/meditation-mindfulness"
        breadcrumbLabel="Mindfulness & Meditation"
      />
    </>
  );
}
