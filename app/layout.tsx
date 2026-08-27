import type { Metadata } from "next";
import { Urbanist, Open_Sans } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { AnnotationProvider } from "@/lib/annotation";
import { AnnotationToggle } from "@/components/AnnotationToggle";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/content/site";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
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
    <html lang="en-AU" className={`${urbanist.variable} ${openSans.variable} h-full`}>
      {enableProductionTracking ? <GoogleTagManager gtmId="GTM-PXV5ZCLG" /> : null}
      <body className="flex min-h-full flex-col font-[family-name:var(--font-body)] text-ink antialiased">
        <AnnotationProvider>
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
