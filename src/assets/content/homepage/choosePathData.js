export const CHOOSE_PATH = {
  kicker: "WHAT DO YOU NEED HELP WITH?",
  title: "Choose your path in one click.",
  tip:
    "Not sure where to start? Use these quick routes to jump straight to the services that match your current research stage.",
  cards: [
    {
      id: "edit",
      title: "I need editing & language polish.",
      desc: "English editing, formatting, and final checks so reviewers focus on your science.",
      more:
        "Comprehensive English editing, formatting to journal style, and final checks so reviewers focus on your science — not your sentences.",
      cta: { label: "Go to Editorial Support", href: "/services/editorial-support" },
      tag: "Fastest route",
      icon: "📝",
      defaultOpen: true,
    },
    {
      id: "data",
      title: "I need help with data & statistics.",
      desc: "Data cleaning, analysis, and reporting across SPSS, R, Python and more.",
      more:
        "End-to-end support for data cleaning, statistical analysis, interpretation, and reporting, with clear deliverables you can defend.",
      cta: { label: "Go to Data Services", href: "/services/data-services" },
      tag: "Analysis route",
      icon: "📊",
      defaultOpen: false,
    },
    {
      id: "pub",
      title: "I need publication support & journal selection.",
      desc: "Match with suitable Scopus/SCI journals and prepare a complete submission pack.",
      more:
        "Journal shortlisting, scope alignment, formatting, and submission-ready checks — plus help on cover letters and responses.",
      cta: { label: "Go to Publication Support & JSR", href: "/services/publication-support" },
      tag: "Strategy route",
      icon: "🧾",
      defaultOpen: false,
    },
  ],
};
