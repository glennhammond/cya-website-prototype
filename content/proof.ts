import type { CaseStudy, PageIntro } from "@/lib/types";

export const proofHero: PageIntro = {
  kicker: "Case studies",
  heading: "Work shown in context",
  body: "Explore the situation, decisions, delivery and evidence behind selected Corporate Yoga Australia engagements. These draft stories remain unpublished until client permission, dates and facts are confirmed.",
};

export const proofPrinciples = [
  "Every published story is tied to permission, evidence, context and an approver.",
  "Client names, quotations, metrics and photographs require recorded approval.",
  "Every result includes its source, period and limitations.",
  "Context matters more than an unexplained wall of client logos.",
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "flagship-partnership",
    storyRole: "flagship-partnership",
    clientLabel: "Flagship partnership - candidate: Cromwell Property Group",
    headline: "A long-term, multi-location partnership (placeholder)",
    summary: "Illustrates coordinated delivery across several sites and formats over an extended relationship.",
    sector: "Property",
    status: "evidence-required",
    context: {
      value: "Placeholder - organisational context, prior approach and constraints to be confirmed with the client.",
      status: "evidence-required",
      note: "Requires client permission and verified delivery facts before publication.",
    },
    objectives: {
      value: "Placeholder - client objective and success criteria to be recorded before delivery began, where available.",
      status: "evidence-required",
    },
    insightAndDecision: {
      value: "Placeholder - why these formats were selected, tailoring and facilitator match.",
      status: "evidence-required",
    },
    delivery: {
      value: "Placeholder - duration, cadence, locations, modes and participant groups.",
      status: "evidence-required",
    },
    evidence: {
      value: "Placeholder - attendance, repeat participation, satisfaction and renewal, with source, denominator, period and limitations.",
      status: "evidence-required",
    },
    clientVoice: {
      value: "No quotation is published without an approved, attributed record.",
      status: "evidence-required",
    },
    cyaReflection: {
      value: "Placeholder - what Corporate Yoga Australia learned and how it applies to a similar buyer.",
      status: "evidence-required",
    },
    nextStep: { label: "Discuss a similar need", href: "/contact" },
  },
  {
    slug: "distributed-delivery",
    storyRole: "distributed-delivery",
    clientLabel: "Distributed delivery - candidate: Shell Energy",
    headline: "Virtual and distributed participation at scale (placeholder)",
    summary: "Illustrates how Corporate Yoga Australia can support a distributed or remote workforce without onsite delivery.",
    sector: "Energy",
    status: "evidence-required",
    context: {
      value: "Placeholder - organisational context and previous approach to be confirmed.",
      status: "evidence-required",
    },
    objectives: {
      value: "Placeholder - client objective and success criteria.",
      status: "evidence-required",
    },
    insightAndDecision: {
      value: "Placeholder - why a virtual or blended format was selected.",
      status: "evidence-required",
    },
    delivery: {
      value: "Placeholder - cadence, platforms, participant groups and responsibilities.",
      status: "evidence-required",
    },
    evidence: {
      value: "Placeholder - registrations, attendance, qualitative themes and limitations.",
      status: "evidence-required",
    },
    clientVoice: {
      value: "No quotation is published without an approved, attributed record.",
      status: "evidence-required",
    },
    cyaReflection: {
      value: "Placeholder - what Corporate Yoga Australia learned about distributed delivery.",
      status: "evidence-required",
    },
    nextStep: { label: "Ask about distributed delivery", href: "/contact?interest=studio" },
  },
  {
    slug: "smaller-organisation",
    storyRole: "smaller-organisation",
    clientLabel: "Smaller organisation - candidate: Link-Up (Qld)",
    headline: "Flexible, proportionate support for a smaller context (placeholder)",
    summary: "Illustrates a scaled, not-for-profit-appropriate engagement without enterprise overhead.",
    sector: "Not-for-profit",
    status: "evidence-required",
    context: {
      value: "Placeholder - organisational context and constraints to be confirmed.",
      status: "evidence-required",
    },
    objectives: {
      value: "Placeholder - client objective and success criteria.",
      status: "evidence-required",
    },
    insightAndDecision: {
      value: "Placeholder - how the engagement was scaled to fit.",
      status: "evidence-required",
    },
    delivery: {
      value: "Placeholder - duration, cadence and delivery mode.",
      status: "evidence-required",
    },
    evidence: {
      value: "Placeholder - attendance, feedback themes and limitations.",
      status: "evidence-required",
    },
    clientVoice: {
      value: "No quotation is published without an approved, attributed record.",
      status: "evidence-required",
    },
    cyaReflection: {
      value: "Placeholder - what Corporate Yoga Australia learned about smaller-organisation delivery.",
      status: "evidence-required",
    },
    nextStep: { label: "Discuss a proportionate program", href: "/contact?interest=recurring" },
  },
  {
    slug: "one-off-event",
    storyRole: "one-off-event",
    clientLabel: "One-off event case study - candidate to be identified",
    headline: "Reliable, agenda-aware delivery of a focused experience (placeholder)",
    summary: "Illustrates a single conference or event activation delivered against a fixed run sheet.",
    sector: "Conference and events",
    status: "placeholder",
    context: {
      value: "Candidate story not yet identified.",
      status: "placeholder",
    },
    objectives: {
      value: "Placeholder pending candidate selection.",
      status: "placeholder",
    },
    insightAndDecision: {
      value: "Placeholder pending candidate selection.",
      status: "placeholder",
    },
    delivery: {
      value: "Placeholder pending candidate selection.",
      status: "placeholder",
    },
    evidence: {
      value: "Placeholder pending candidate selection.",
      status: "placeholder",
    },
    clientVoice: {
      value: "No quotation is published without an approved, attributed record.",
      status: "placeholder",
    },
    cyaReflection: {
      value: "Placeholder pending candidate selection.",
      status: "placeholder",
    },
    nextStep: { label: "Discuss your conference", href: "/contact?interest=conference" },
  },
];

export const proofStandards = [
  "Founded in 2014; national delivery; evidence-informed; practical and inclusive - usable within their verified boundaries.",
  "“Australia’s leading”, “proven outcomes” and guaranteed stress, resilience or productivity claims are not used.",
  "Google rating and review counts are dated and carry a maintenance owner before publication.",
  "“Thousands of employees supported” remains blocked until method, period and deduplication are documented.",
];
