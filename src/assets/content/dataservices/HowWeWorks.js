// howWeWorkData.js
export const HOW_WE_WORK_STEPS = [
  {
    id: 1,
    key: "share-brief",
    label: "Share brief",
    icon: "upload",
    title: "Send what you have (even if it’s incomplete)",
    desc:
      "Dataset + objectives/RQs + deadline + any institute/sponsor template. If you’re unsure, share context—we’ll guide what’s needed.",
    bullets: [
      "Dataset (Excel/CSV/SPSS/R output)",
      "Research questions / objectives",
      "Constraints (format, timeline, required tool)",
    ],
  },
  {
    id: 2,
    key: "review-quote",
    label: "Review + quote",
    icon: "doc",
    title: "We review feasibility and share a clear quotation",
    desc:
      "We check what’s realistic, what’s risky, and what needs cleaning—then propose the simplest pathway.",
    bullets: [
      "Feasibility check + recommended pathway",
      "Deliverables list (so expectations are clear)",
      "Quote + turnaround options",
    ],
  },
  {
    id: 3,
    key: "approve-pay",
    label: "Approve + pay",
    icon: "card",
    title: "Work begins after approval + payment",
    desc:
      "Once you’re comfortable with the plan and quote, you approve and we start. This keeps the process clean and professional—especially for B2B.",
    bullets: [
      "Scope confirmation",
      "Secure handling + confidentiality",
      "Kickoff message with next steps",
    ],
  },
  {
    id: 4,
    key: "build-report",
    label: "Build + report",
    icon: "chart",
    title: "Analysis build + reporting structure",
    desc:
      "We structure outputs so they’re readable and defensible—not just “run tests and export tables.”",
    bullets: [
      "Cleaning log + variable mapping",
      "Outputs (tables/figures) + interpretation notes",
      "“What-to-report” guidance",
    ],
  },
  {
    id: 5,
    key: "qc-pass",
    label: "QC pass",
    icon: "shield",
    title: "QC pass (our differentiator)",
    desc:
      "A second set of eyes checks logic and reporting consistency—so you don’t get caught in review with avoidable issues.",
    bullets: [
      "Objectives ↔ variables ↔ test alignment",
      "Sanity checks (missing/outliers handled transparently)",
      "Interpretation discipline (no overclaiming)",
      "Table/figure consistency + labeling",
    ],
    rightCards: [
      { icon: "link", title: "Alignment", sub: "Objectives ↔ variables ↔ tests" },
      { icon: "check", title: "Sanity checks", sub: "Missing, outliers, coding" },
      { icon: "flag", title: "Interpretation", sub: "No overclaiming" },
      { icon: "grid", title: "Consistency", sub: "Tables, figures, labels" },
    ],
  },
  {
    id: 6,
    key: "deliver-revise",
    label: "Deliver + revise",
    icon: "refresh",
    title: "Delivery + revisions (within scope)",
    desc:
      "You receive the outputs and reporting notes. If you need tweaks within the agreed scope, we revise quickly and keep everything consistent.",
    bullets: [
      "Delivery pack: outputs + notes + QC checklist",
      "Revision window for scope-aligned changes",
      "Final handover in your requested format",
    ],
  },
];
