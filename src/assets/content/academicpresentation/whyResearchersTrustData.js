/* =========================================
   1) DATA (separate)
   File: src/pages/Whyresearcherstrust/whyResearchersTrustData.js
========================================= */

export const WHY_RESEARCHERS_TRUST = {
  heading: "Why researchers trust RE4U",
  subheading:
    "Front: title + highlights + reviews + CTA. Flip: exactly what you get.",
  pill: "6-grid flip cards",

  note: "Update REVIEW_DATA with real review counts before publishing.",

  cards: [
    {
      key: "acc",
      icon: "🧠",
      title: "Accuracy checked by experts",
      chips: ["SME-reviewed", "Claims validated", "Labels consistent"],
      backTitle: "What you get",
      items: [
        "SME review for scientific accuracy",
        "Label/unit consistency check",
        "Mechanism & claim validation",
      ],
    },
    {
      key: "jrnl",
      icon: "🖨️",
      title: "Journal-ready and print-ready",
      chips: ["300 DPI ready", "Journal specs", "Color-safe"],
      backTitle: "What you get",
      items: [
        "Print-safe layout & spacing",
        "Resolution checks (e.g., 300 DPI)",
        "Color + grayscale readiness",
      ],
    },
    {
      key: "edit",
      icon: "✏️",
      title: "Editable files included",
      chips: ["Layered source", "Reusable parts", "Easy updates"],
      backTitle: "What you get",
      items: [
        "Layered source file included",
        "Reusable styles & components",
        "Easy future edits (no rework)",
      ],
    },
    {
      key: "samp",
      icon: "🧾",
      title: "Real samples you can review",
      chips: ["Before/after", "By discipline", "Style preview"],
      backTitle: "What you get",
      items: [
        "Real sample gallery access",
        "Before/after examples",
        "Discipline-wise samples",
      ],
    },
    {
      key: "rev",
      icon: "🔁",
      title: "Clear revisions until it’s right",
      chips: ["Clear rounds", "Fast changes", "Final QC"],
      backTitle: "What you get",
      items: [
        "Simple revision policy",
        "Fast change requests workflow",
        "Quality check after revisions",
      ],
    },
    {
      key: "priv",
      icon: "🔒",
      title: "Your unpublished work stays private",
      chips: ["Secure upload", "NDA option", "Delete on request"],
      backTitle: "What you get",
      items: ["Secure upload handling", "NDA option on request", "Delete-on-request available"],
    },
  ],

  REVIEW_DATA: {
    acc: { rating: 4.5, reviews: "TBD" },
    jrnl: { rating: 4.5, reviews: "TBD" },
    edit: { rating: 4.5, reviews: "TBD" },
    samp: { rating: 4.5, reviews: "TBD" },
    rev: { rating: 4.5, reviews: "TBD" },
    priv: { rating: 4.5, reviews: "TBD" },
  },
};
