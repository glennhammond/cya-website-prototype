import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { AnnotationProvider } from "@/lib/annotation";
import { AnnotationToggle } from "@/components/AnnotationToggle";
import { AnalyticsConsentManager } from "@/components/AnalyticsConsentManager";
import { MotionController } from "@/components/MotionController";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/content/site";
import { analyticsTrackingEnabled, releaseIndexingEnabled } from "@/lib/release";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const allowIndexing = releaseIndexingEnabled();
const allowAnalytics = analyticsTrackingEnabled();

export const metadata: Metadata = {
  metadataBase: new URL("https://www.corporateyoga.com.au"),
  title: {
    default: "Corporate Yoga Australia | Workplace Yoga & Wellbeing",
    template: `%s | ${site.name}`,
  },
  description: site.description,
  robots: allowIndexing
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${instrumentSans.variable} h-full`}>
      <body className="flex min-h-full flex-col font-[family-name:var(--font-body)] text-ink antialiased">
        <AnnotationProvider>
          <AnalyticsConsentManager enabled={allowAnalytics} />
          <MotionController />
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <SiteHeader />
          <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
            {children}
          </main>
          <SiteFooter analyticsPreferencesEnabled={allowAnalytics} />
          <AnnotationToggle />
        </AnnotationProvider>
      </body>
    </html>
  );
}
