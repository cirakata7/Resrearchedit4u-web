export const DATA = [
  {
    id: "data-cleanup",
    group: "deliverables",
    pill: "Data readiness + cleanup",
    title: "Data readiness + cleanup",
    intro:
      "Built around data cleaning services—so your dataset is transparent, logged, and analysis-ready.",
    bullets: [
      "Missing values, duplicates, and outliers handled with a clear change log",
      "Variable labeling + coding support so it’s supervisor-readable",
      "A clean “analysis-ready” file + brief notes on what changed (and why)",
    ],
    preview: {
      badge: "Clean log",
      qc: true,
      rows: [
        { item: "Missing", status: "Handled" },
        { item: "Outliers", status: "Flagged" },
        { item: "Labels", status: "Mapped" },
      ],
      cards: [
        { icon: "doc", title: "Change log", desc: "What changed + why (transparent)" },
        { icon: "map", title: "Variable map", desc: "Questions → variables → outputs" },
      ],
    },
  },
  {
    id: "stats-interpretation",
    group: "deliverables",
    pill: "Statistical analysis + interpretation",
    title: "Statistical analysis + interpretation",
    intro:
      "Practical statistical analysis services that match your design—so you can defend choices in review.",
    bullets: [
      "Hypothesis testing help only when assumptions and design support it",
      "Regression analysis help (including multiple regression analysis) when appropriate",
      "Interpretation notes: what results mean, what to report, and what not to claim",
    ],
    preview: {
      badge: "Explainable",
      qc: true,
      rows: [
        { item: "Test", status: "Chosen" },
        { item: "p-value", status: "0.012" },
        { item: "CI", status: "95%" },
      ],
      cards: [
        { icon: "chart", title: "Model output", desc: "Tables/plots you can defend" },
        { icon: "note", title: "Interpretation", desc: "What’s supported vs what’s not" },
      ],
    },
  },
  {
    id: "reporting-support",
    group: "deliverables",
    pill: "Reporting support (tables, figures)",
    title: "Reporting support (tables, figures)",
    intro:
      "Readable outputs that travel well into theses and papers—plus data visualization support where needed.",
    bullets: [
      "Clear charts/figures + consistent labels that reviewers can follow",
      "Editable summary tables you can reuse in your report",
      "Structured “what-to-report” notes for Results writing",
    ],
    preview: {
      badge: "Report-ready",
      qc: true,
      rows: [
        { item: "Table", status: "Editable" },
        { item: "Figure", status: "Labeled" },
        { item: "Notes", status: "What-to-report" },
      ],
      cards: [
        { icon: "table", title: "Reusable tables", desc: "Copy into thesis/paper" },
        { icon: "note", title: "Reporting notes", desc: "Prompts for the Results section" },
      ],
    },
  },
  {
    id: "spss",
    group: "tools",
    pill: "SPSS",
    title: "SPSS",
    intro:
      "SPSS data analysis services plus SPSS-style outputs—so you can read and explain results confidently.",
    bullets: [
      "Clean tables + clear labels (built for academic reporting)",
      "Assumptions and cautions explained simply (no jargon dumps)",
      "Optional: syntax-style notes when your lab expects reproducibility",
    ],
    preview: {
      badge: "SPSS output",
      qc: true,
      rows: [
        { item: "Output", status: "Readable" },
        { item: "Labels", status: "Consistent" },
        { item: "Assumptions", status: "Checked" },
      ],
      cards: [
        { icon: "table", title: "Tables", desc: "Academic-style summaries" },
        { icon: "shield", title: "QC notes", desc: "Second-eye review checklist" },
      ],
    },
  },
  {
    id: "r-studio",
    group: "tools",
    pill: "R Studio",
    title: "R Studio",
    intro:
      "R studio data analysis with optional scripts when you request them—clean, reproducible, and easy to present.",
    bullets: [
      "Reproducible outputs and tidy data structures",
      "Plot-ready visuals for reporting and presentations",
      "Interpretation notes so your discussion stays defendable",
    ],
    preview: {
      badge: "Reproducible",
      qc: true,
      rows: [
        { item: "Script", status: "Optional" },
        { item: "Plots", status: "Ready" },
        { item: "Notes", status: "Explainable" },
      ],
      cards: [
        { icon: "chart", title: "Plots", desc: "Report-ready visuals" },
        { icon: "note", title: "Interpretation", desc: "What to report + how" },
      ],
    },
  },
  {
    id: "excel",
    group: "tools",
    pill: "Excel (when it fits)",
    title: "Excel (when it fits)",
    intro:
      "For smaller datasets and quick summaries—clean, readable, and consistent (we’ll tell you when Excel isn’t the right fit).",
    bullets: [
      "Quick sanity checks and structured summaries",
      "Tables/figures you can copy directly into reports",
      "Clear limits + when to move to SPSS/R for robust inference",
    ],
    preview: {
      badge: "Reusable",
      qc: true,
      rows: [
        { item: "Summary", status: "Structured" },
        { item: "Tables", status: "Reusable" },
        { item: "Notes", status: "Clear scope" },
      ],
      cards: [
        { icon: "table", title: "Tables", desc: "Copy-paste into reporting" },
        { icon: "shield", title: "QC checks", desc: "Consistency + sanity checks" },
      ],
    },
  },
];