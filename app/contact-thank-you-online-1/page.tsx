import type { Metadata } from "next";
import { ThankYouPage } from "@/components/ThankYouPage";

export const metadata: Metadata = {
  title: "Thank You for Your Online Wellbeing Enquiry",
  alternates: { canonical: "/contact-thank-you-online-1" },
  robots: { index: false, follow: true },
};

export default function ContactThankYouOnlineVariantPage() {
  return <ThankYouPage online />;
}
