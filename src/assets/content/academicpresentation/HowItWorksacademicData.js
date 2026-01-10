/* =========================================
   1) DATA (separate)
   Folder: src/pages/HowItWorksacademic/
   File: HowItWorksacademicData.js
========================================= */

export const HOW_IT_WORKS_ACADEMIC = {
  heading: "Related services",
  subheading:
    "Quick links to adjacent support—kept minimal so the page stays focused.",

  topCta: {
    label: "Browse all services",
    href: "/services",
  },

  cards: [
    {
      id: "visuals",
      title: "Scientific Illustration & Research Visuals",
      badge: "Visual-first",
      desc:
        "Figures, graphical abstracts, and publication-ready visuals for journals and promotion.",
      primary: { label: "Explore visuals →", href: "/services/visuals" },
      secondary: { label: "View samples", href: "/samples#visuals" },
      icon: {
        type: "doc-lines",
        accent: "accent",
      },
    },
    {
      id: "editing",
      title: "Editing & Language Support",
      badge: "Clarity",
      desc:
        "Improve readability, academic tone, and consistency—without changing your meaning.",
      primary: { label: "Explore editing →", href: "/services/editing" },
      secondary: { label: "See pricing", href: "/pricing#editing" },
      icon: {
        type: "page-topline",
        accent: "muted",
      },
    },
    {
      id: "formatting",
      title: "Journal Formatting",
      badge: "Compliance",
      desc:
        "Template-accurate formatting for submission—layout, references, and file-ready checks.",
      primary: { label: "Explore formatting →", href: "/services/formatting" },
      secondary: { label: "Turnaround", href: "/turnaround" },
      icon: {
        type: "clipboard",
        accent: "accent",
      },
    },
  ],
};
