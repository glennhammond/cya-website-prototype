import type { CTA, NavItem } from "@/lib/types";

export const primaryNav: NavItem[] = [
  {
    label: "Services",
    href: "/movement",
    children: [
      {
        label: "Movement",
        href: "/movement",
        description: "Compare yoga, Pilates, mobility and other workplace movement formats.",
      },
      {
        label: "Workplace Yoga",
        href: "/workplace-yoga",
        description: "One-off, recurring, onsite and online yoga adapted to real workplaces.",
      },
      {
        label: "Workplace Pilates",
        href: "/workplace-pilates",
        description: "Mat-based Pilates for one-off, recurring, onsite and online workplace sessions.",
      },
      {
        label: "Meditation & Mindfulness",
        href: "/meditation-mindfulness",
        description: "Guided meditation, mindfulness, breathwork and related workplace practices.",
      },
      {
        label: "Workshops & Expert Experiences",
        href: "/workplace-wellbeing-workshops",
        description: "Practical workshops and Lunch & Learns for workplace wellbeing topics.",
      },
    ],
  },
  {
    label: "Programs",
    href: "/workplace-wellbeing-programs",
    children: [
      {
        label: "Workplace Wellbeing Programs",
        href: "/workplace-wellbeing-programs",
        description: "Plan a useful rhythm of workplace wellbeing.",
      },
      {
        label: "Online Wellbeing",
        href: "/online-wellbeing",
        description: "Extend live experiences across hybrid, remote and ongoing work.",
      },
    ],
  },
  {
    label: "Why CYA",
    href: "/about-us",
    children: [
      {
        label: "About CYA",
        href: "/about-us",
        description: "Meet the people and principles behind Corporate Yoga Australia.",
      },
      {
        label: "Case Studies",
        href: "/case-studies",
        description: "See how workplace needs, delivery choices and outcomes connect.",
      },
    ],
  },
  { label: "Insights", href: "/blog" },
];

export const utilityNav: NavItem[] = [
  { label: "Member access", href: "/member-access" },
];

export const memberSignInHref = "https://studio.corporateyoga.com.au";

export const primaryCTA: CTA = {
  label: "Plan with CYA",
  href: "/contact",
  variant: "primary",
};

/** Shorter form for the fixed-width header bar; full phrase is used everywhere else. */
export const primaryCTAShort = "Plan with CYA";

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
