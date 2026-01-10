export const RESOURCES_PAGE = {
  templates: {
    title: "Free templates to start your research proposal today",
    subtitle:
      "Use these to get moving. Want them aligned to your institute format? Upload your format and we’ll adapt it.",
    items: [
      {
        id: "tpl-outline",
        tag: "Template",
        title: "Research Proposal Outline (Word)",
        desc: "A clean outline structure aligned to common university expectations—ready to edit.",
        primaryCta: { label: "Download Free Template", href: "#", variant: "primary" },
      },
      {
        id: "tpl-checklist",
        tag: "Checklist",
        title: "Research Methodology Checklist (1-page)",
        desc: "Design, sampling, instrument, analysis direction—what reviewers/supervisors expect.",
        primaryCta: { label: "Download Checklist", href: "#", variant: "ghost" },
      },
      {
        id: "tpl-planner",
        tag: "Planner",
        title: "Timeline + Milestones Sheet (Gantt-ready)",
        desc: "Turn your plan into a realistic timeline with milestones and deliverables.",
        primaryCta: { label: "Download Planner", href: "#", variant: "ghost" },
      },
    ],
  },

  samples: {
    title: "Package samples (realistic excerpts)",
    subtitle:
      'Preview exactly what "Starter / Core / Premium" deliverables look like. These are short excerpts — enough to verify quality without giving away full work.',
    items: [
      {
        id: "sample-starter",
        tag: "Starter sample",
        meta: "2 pages • Clarity Check",
        title: "Proposal Clarity Check — Before → After",
        desc:
          "Shows how we fix: problem statement + research gap, objectives/RQ alignment, and methodology red flags — with a prioritized action list.",
        actions: [
          { id: "preview", label: "Preview", variant: "primary", href: "#" },
          { id: "download", label: "Download PDF", variant: "link", href: "#" },
        ],
      },
      {
        id: "sample-core",
        tag: "Core sample",
        meta: "2–3 pages • Blueprint",
        title: "Proposal Blueprint — Outline + Methods Map + Timeline",
        desc:
          "Shows a paste-ready outline, logic chain mapping (gap→objective→RQ→method), methods mapping, and a milestone timeline (Gantt-ready).",
        actions: [
          { id: "preview", label: "Preview", variant: "primary", href: "#" },
          { id: "download", label: "Download PDF", variant: "link", href: "#" },
        ],
      },
      {
        id: "sample-premium",
        tag: "Premium sample",
        meta: "2–3 pages • Supervisor-ready",
        title: "Supervisor-Ready Pack — Format + QC Summary",
        desc:
          "Shows format compliance excerpt, academic tone polish (before/after), QC checklist summary, and supervisor-ready response notes.",
        actions: [
          { id: "preview", label: "Preview", variant: "primary", href: "#" },
          { id: "download", label: "Download PDF", variant: "link", href: "#" },
        ],
      },
    ],
  },
};
