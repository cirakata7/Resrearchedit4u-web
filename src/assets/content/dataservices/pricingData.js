// src/data/pricingData.js
export const PRICING_PLANS = [
  {
    id: "starter",
    badge: "Starter",
    badgeDot: true,
    cornerTag: "Best for a quick direction",
    title: "Data Clarity Check",
    desc:
      "Best if you have data but you’re unsure what analysis route is defensible.",
    bullets: [
      "Dataset readiness check (documented)",
      "Objective → variable mapping",
      "Recommended test pathway + rationale",
      "Action list (next steps)",
    ],
    quickFit: {
      title: "Quick fit guide (so you pick the right level)",
      best: [
        "Your dataset is modest and your question is descriptive / exploratory",
        "You need clean summaries + readable tables/figures fast",
        "Your supervisor expects simple reporting (not heavy inference)",
      ],
      notIdeal: [
        "You need robust inference (regression, multilevel, survival, etc.)",
        "Assumptions matter (normality, independence, complex sampling)",
        "Your committee expects SPSS/R outputs for defensibility",
      ],
      footers: [
        "We’ll tell you if Excel is the right fit",
        "And when to move to SPSS / R Studio",
      ],
    },
    ctas: [
      { id: "starterPrimary", label: "Start Starter Review", variant: "primary" },
      { id: "starterSecondary", label: "See sample excerpts", variant: "ghost" },
    ],
    isFeatured: false,
  },

  {
    id: "core",
    badge: "Core",
    badgeDot: true,
    cornerTag: "Most Popular",
    title: "Analysis + Reporting Pack",
    desc:
      "Best if you want a complete workflow + clean reporting outputs you can explain confidently.",
    bullets: [
      "Cleaning support + structured analysis execution",
      "Editable tables/figures + interpretation notes",
      "“What-to-report” guidance",
      "1 revision round",
    ],
    quickFit: {
      title: "Quick fit guide (Core)",
      best: [
        "You need defensible tests + interpretation notes (not just outputs)",
        "You want report-ready tables/figures you can explain confidently",
        "You want 1 revision round included",
      ],
      notIdeal: [
        "Strict committee format/QC documentation is mandatory",
        "Deadline is tight and you want an extra revision buffer",
      ],
      footers: ["Includes what-to-report notes", "Plus 1 revision round"],
    },
    ctas: [
      { id: "corePrimary", label: "Get Core Support", variant: "primary" },
      { id: "coreSecondary", label: "How we work", variant: "ghost" },
    ],
    isFeatured: true,
  },

  {
    id: "premium",
    badge: "Premium",
    badgeDot: true,
    cornerTag: "Deadline-safe",
    title: "Integrity-first:",
    desc:
      "We help you understand and present your results. We don’t fabricate data, results, or claims.",
    bullets: [
      "Everything in Core",
      "Stronger reporting structure + clarity polish",
      "QC verification summary (what was checked + what changed)",
      "2 revision rounds",
    ],
    quickFit: {
      title: "Quick fit guide (Premium)",
      best: [
        "You’re ready to submit (defensibility + consistency)",
        "You want a QC verification summary (what was checked + what changed)",
        "You need 2 revision rounds for safer iteration",
      ],
      notIdeal: ["You only need quick direction or basic reporting", "No formal review/committee requirement"],
      footers: ["Includes QC summary", "Plus 2 revision rounds"],
    },
    ctas: [
      { id: "premiumPrimary", label: "Build My Review Pack", variant: "primary" },
      { id: "premiumSecondary", label: "Talk to an Analyst", variant: "ghost" },
    ],
    isFeatured: false,
  },
];
