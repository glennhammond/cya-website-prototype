import type { Metadata } from "next";
import { Urbanist, Open_Sans } from "next/font/google";
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
  metadataBase: new URL("https://corporateyoga.com.au"),
  title: {
    default: `${site.name} — Workplace wellbeing that fits real work`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${urbanist.variable} ${openSans.variable} h-full`}>
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
    </html>
  );
}
