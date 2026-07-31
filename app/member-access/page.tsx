import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MemberAccessPanel } from "@/components/MemberAccessPanel";

export const metadata: Metadata = {
  title: "Member Access",
  description: "Sign in to Wellbeing Studio, kept separate from the CYA corporate consultation journey.",
};

export default function MemberAccessPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Member access" }]} />
      <MemberAccessPanel />
    </>
  );
}
