import type { Metadata } from "next";
import { ThankYouPage } from "@/components/ThankYouPage";

export const metadata: Metadata = {
  title: "Thank You",
  alternates: { canonical: "/contact-thank-you" },
  robots: { index: false, follow: true },
};

export default function ContactThankYouPage() {
  return <ThankYouPage />;
}
