import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { AnnotationProvider } from "@/lib/annotation";
import { AnnotationToggle } from "@/components/AnnotationToggle";
import { AttributionCapture } from "@/components/AttributionCapture";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/content/site";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.corporateyoga.com.au"),
  title: {
    default: "Corporate Yoga Australia | Workplace Yoga & Wellbeing",
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const enableProductionTracking = process.env.VERCEL_ENV === "production";

  return (
    <html lang="en-AU" className={`${instrumentSans.variable} h-full`}>
      {enableProductionTracking ? <GoogleTagManager gtmId="GTM-PXV5ZCLG" /> : null}
      <body className="flex min-h-full flex-col font-[family-name:var(--font-body)] text-ink antialiased">
        <AnnotationProvider>
          <AttributionCapture />
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <SiteHeader />
          <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
            {children}
          </main>
          <SiteFooter />
          <AnnotationToggle />
        </AnnotationProvider>
      </body>
      {enableProductionTracking ? <GoogleAnalytics gaId="G-7GY152D942" /> : null}
    </html>
  );
}
