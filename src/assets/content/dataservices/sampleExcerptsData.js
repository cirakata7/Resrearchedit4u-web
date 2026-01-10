export const SAMPLE_EXCERPTS = [
  {
    id: "starter",
    badge: "Starter excerpt",
    badgeDot: true,
    rightTag: "Clarity check",
    title: "Data Clarity Check — what you’ll see",
    desc:
      "A readiness snapshot, variable mapping to objectives, recommended test pathway, and an action list you can share internally.",
    preview: {
      modalTitle: "Starter excerpt — Data Clarity Check (Preview)",
      metaLeft: "Clarity check",
      metaRight: "Readiness snapshot",
      sections: [
        {
          label: "What’s included",
          items: [
            "Dataset readiness summary (missing, coding, outliers, duplicates)",
            "Variable map: objectives → variables → tests",
            "Recommended pathway (what to run, what to avoid, why)",
            "Action list to reach “analysis-ready”",
          ],
        },
        {
          label: "What you get",
          items: [
            "Clean change log (transparent edits)",
            "Short notes you can paste into your Methodology/Results",
            "QC checklist (what was checked)",
          ],
        },
      ],
      footerNote:
        "Integrity-first: we support analysis decisions and reporting. We do not fabricate data or results.",
    },
  },

  {
    id: "core",
    badge: "Core excerpt",
    badgeDot: true,
    rightTag: "Outputs + notes",
    title: "Analysis + Reporting Pack — what you’ll see",
    desc:
      "Editable tables/figures, interpretation notes, and “what-to-report” guidance—structured for easy explanation.",
    preview: {
      modalTitle: "Core excerpt — Analysis + Reporting Pack (Preview)",
      metaLeft: "Outputs + notes",
      metaRight: "Editable reporting",
      sections: [
        {
          label: "Outputs",
          items: [
            "Editable tables (publication-style formatting)",
            "Figures/plots with consistent labels and captions",
            "Assumption checks (where relevant)",
          ],
        },
        {
          label: "Interpretation notes",
          items: [
            "What the result means (plain-English + academic phrasing)",
            "What to report (and what not to claim)",
            "Quick prompts for the Results section",
          ],
        },
      ],
      footerNote:
        "All interpretations remain within what the data supports (no over-claiming).",
    },
  },

  {
    id: "premium",
    badge: "Premium excerpt",
    badgeDot: true,
    rightTag: "QC summary",
    title: "Supervisor/Committee-Ready Pack — what you’ll see",
    desc:
      "QC verification summary (checks performed), reporting consistency, and clarity polish highlights.",
    preview: {
      modalTitle: "Premium excerpt — Supervisor/Committee-Ready Pack (Preview)",
      metaLeft: "QC summary",
      metaRight: "Committee-ready",
      sections: [
        {
          label: "QC verification",
          items: [
            "Objectives ↔ variables ↔ tests alignment check",
            "Sanity checks: missing/outliers/coding consistency",
            "Table/figure consistency and labeling audit",
          ],
        },
        {
          label: "Clarity polish",
          items: [
            "Reporting flow improvements (what to show first/next)",
            "Terminology consistency across outputs",
            "Supervisor-facing summary: what was checked + outcomes",
          ],
        },
      ],
      footerNote:
        "Designed to reduce back-and-forth in review by making decisions and outputs explicit.",
    },
  },
];
