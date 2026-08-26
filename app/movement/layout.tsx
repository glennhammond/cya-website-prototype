import { ServiceStructuredData } from "@/components/StructuredData";

export default function MovementLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ServiceStructuredData
        name="Workplace Movement, Yoga & Pilates"
        description="Workplace movement including Yoga, Pilates, mobility and desk movement, adapted to real teams, spaces and levels of experience."
        path="/movement"
        breadcrumbLabel="Movement"
      />
    </>
  );
}
