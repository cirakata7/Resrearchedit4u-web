// src/assets/content/pricing/supportLevelData.js

export const SUPPORT_LEVELS = [
  {
    id: "starter",
    tier: "STARTER",
    name: "Proposal Clarity Check",
    priceLabel: "Starting at ₹2,499",
    subNote: "Final quote after brief review",
    bestFor:
      "You already have a draft but need research proposal writing help to fix clarity, gap, and methodology.",
    bullets: [
      "Problem statement + gap critique (what’s missing + what to fix)",
      "Objectives ↔ research questions alignment corrections",
      "Methodology red-flag check (design, sampling method, feasibility)",
      "Action list: exactly what to change and why",
    ],
    ctas: [
      { id: "starter-primary", label: "Send My Draft → Get Quote", variant: "primary" },
      { id: "starter-secondary", label: "Book a 10-min Call", variant: "ghost" },
    ],
    footnote: "We strengthen logic + structure. We don’t invent your study.",
    highlight: false,
    badge: null,
  },

  {
    id: "core",
    tier: "CORE",
    name: "Proposal Blueprint",
    priceLabel: "Starting at ₹6,999",
    subNote: "Final quote after brief review",
    bestFor:
      "You want a complete research plan before writing—ideal when comparing research proposal writing services.",
    bullets: [
      "Full proposal outline aligned to your university/funder format",
      "Gap + objectives + research questions (cleanly connected)",
      "Research methodology + research design plan",
      "Data collection + data analysis direction",
      "Timeline + milestones (Gantt-ready)",
      "1 revision round",
    ],
    ctas: [
      { id: "core-primary", label: "Get My Blueprint Plan →", variant: "primary" },
      { id: "core-secondary", label: "Talk to an Expert", variant: "ghost" },
    ],
    footnote: "Built from your topic + constraints—not generic templates.",
    highlight: true,
    badge: "Most Popular",
  },

  {
    id: "premium",
    tier: "PREMIUM",
    name: "Supervisor-Ready Proposal Pack",
    priceLabel: "Starting at ₹11,999",
    subNote: "Final quote after brief review",
    bestFor:
      "Strict format, tight deadline, or you want revisions from expert research proposal writers.",
    bullets: [
      "Everything in Core + format compliance (institute/funder template)",
      "Stronger academic tone + coherence across sections",
      "Ethics/risk readiness checklist (basic)",
      "Submission-ready final review",
      "2 revision rounds + priority handling",
    ],
    ctas: [
      { id: "premium-primary", label: "Talk to an Expert → Get Final Quote", variant: "primary" },
      { id: "premium-secondary", label: "Upload Format + Topic", variant: "ghost" },
    ],
    footnote: "No fabricated data/results/citations. Integrity-first, always.",
    highlight: false,
    badge: null,
  },
];

export const SUPPORT_SECTION_META = {
  title: "Choose your support level (pricing starts here)",
  subtitle:
    "Final quote depends on discipline, format complexity, and deadline urgency. You approve the quote before work starts.",
  bottomCta: "Get Your Quote & Next Steps (30 minutes) →",
};
