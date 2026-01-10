export const HOW_WE_WORK = {
  heading: "How we work (quote → payment → work starts, with QC)",
  subtext:
    "Simple and transparent: we review your brief, share a quotation and timeline, and start work only after your approval and payment. Every deliverable passes a QC checklist so your plan is coherent end-to-end.",
  footerChips: [
    "Work starts after quote approval + payment",
    "QC checklist on every delivery",
    "Integrity-first (no fabricated claims)",
  ],
  steps: [
    {
      id: "share",
      num: 1,
      tab: "Share brief",
      title: "Share brief",
      desc:
        "Send your topic, institute/funder format, deadline, and constraints. Even if you’re unsure, share what you have.",
      bullets: [
        "Topic/area + keywords (optional)",
        "Required format/template (if available)",
        "Deadline + expected length (if known)",
      ],
      ctas: [
        { id: "upload", label: "Upload Your Brief", variant: "primary" },
        { id: "call", label: "Get a Free Planning Call", variant: "ghost" },
      ],
    },
    {
      id: "review",
      num: 2,
      tab: "Review + quotation",
      title: "Review + quotation",
      desc:
        "We quickly assess scope and complexity, then share a transparent quotation and timeline.",
      bullets: [
        "Recommended package (Starter / Core / Premium)",
        "Fixed deliverables + turnaround time",
        "Any clarifying questions (only if needed)",
      ],
      ctas: [
        { id: "pricing", label: "See packages", variant: "ghost" },
        { id: "quote", label: "Get a quote", variant: "primary" },
      ],
    },
    {
      id: "approve",
      num: 3,
      tab: "Approve + pay",
      title: "Approve + pay",
      desc:
        "You approve the scope and quote. Work starts after approval and payment confirmation.",
      bullets: [
        "Clear scope + deliverables (no surprises)",
        "Payment confirmation before work begins",
        "Timeline locked for delivery",
      ],
      ctas: [
        { id: "approvepay", label: "Approve & proceed", variant: "primary" },
        { id: "questions", label: "Ask a question", variant: "ghost" },
      ],
    },
    {
      id: "blueprint",
      num: 4,
      tab: "Blueprint build",
      title: "Blueprint build",
      desc:
        "We build the working plan and structure: objectives → methodology → feasibility → timeline.",
      bullets: [
        "Proposal outline aligned to your template",
        "Methodology + design (defensible)",
        "Timeline + milestones (realistic)",
      ],
      ctas: [
        { id: "preview", label: "See a sample blueprint", variant: "ghost" },
        { id: "start", label: "Start blueprint", variant: "primary" },
      ],
    },
    {
      id: "qc",
      num: 5,
      tab: "QC pass",
      title: "QC pass",
      desc:
        "Each delivery is checked against a QC checklist to ensure logical consistency and clarity.",
      bullets: [
        "Logic chain: gap → objectives → RQs → method → timeline",
        "Format compliance (if applicable)",
        "Clarity + coherence across sections",
      ],
      ctas: [
        { id: "qc", label: "View QC checklist", variant: "ghost" },
        { id: "deliver", label: "Proceed to delivery", variant: "primary" },
      ],
    },
    {
      id: "delivery",
      num: 6,
      tab: "Delivery + revisions",
      title: "Delivery + revisions",
      desc:
        "You receive the deliverables in draft form. Revisions follow your package (1–2 rounds).",
      bullets: [
        "Delivery + checklist summary",
        "Revision as per package scope",
        "Support for supervisor feedback incorporation",
      ],
      ctas: [
        { id: "next", label: "Get Your Quote", variant: "primary" },
        { id: "talk", label: "Talk to an expert", variant: "ghost" },
      ],
    },
  ],
};
