import type { CTA, NavItem } from "@/lib/types";

export const primaryNav: NavItem[] = [
  { label: "Programs", href: "/workplace-wellbeing-programs" },
  {
    label: "Services",
    href: "/movement",
    children: [
      {
        label: "Movement",
        href: "/movement",
        description: "Compare Yoga, Pilates, mobility and other workplace movement formats.",
      },
      {
        label: "Workplace Yoga",
        href: "/workplace-yoga",
        description: "One-off, recurring, onsite and online Yoga adapted to real workplaces.",
      },
      {
        label: "Workplace Pilates",
        href: "/workplace-pilates",
        description: "Mat-based Pilates for one-off, recurring, onsite and online workplace sessions.",
      },
      {
        label: "Mindfulness & Meditation",
        href: "/meditation-mindfulness",
        description: "Guided meditation, mindfulness, breathwork and related workplace practices.",
      },
      {
        label: "Workshops & Expert Experiences",
        href: "/workplace-wellbeing-workshops",
        description: "Expert-led Lunch & Learns and workshops for practical workplace wellbeing topics.",
      },
      {
        label: "Online Wellbeing",
        href: "/online-wellbeing",
        description: "Live and on-demand continuity for remote, hybrid and distributed teams.",
      },
      {
        label: "Conferences and events",
        href: "/conferences-events",
        description: "Short activations and wellbeing streams built around the event, venue and agenda.",
      },
    ],
  },
  { label: "Insights", href: "/blog" },
  { label: "About", href: "/about-us" },
];

export const utilityNav: NavItem[] = [
  { label: "Member access", href: "/member-access" },
];

export const memberSignInHref = "https://studio.corporateyoga.com.au";

export const primaryCTA: CTA = {
  label: "Book a wellbeing consultation",
  href: "/contact",
  variant: "primary",
};

/** Shorter form for the fixed-width header bar; full phrase is used everywhere else. */
export const primaryCTAShort = "Book now";

export const footerLegalNav: NavItem[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Member access", href: "/member-access" },
];

/** Matches current-page convention. Exact match or descendant route. */
export function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
