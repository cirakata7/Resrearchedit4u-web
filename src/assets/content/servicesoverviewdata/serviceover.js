// src/data/serviceCategories.data.js

export const TRUST_BADGES = ["Confidential", "Integrity-first", "Higher-ed focus"];

export const SERVICE_CATEGORIES = [
  {
    key: "planning",
    title: "Research Planning",
    short: "topic • proposal • ethics",
    desc:
      "Turn a broad idea into a supervisor-ready plan: topic direction, proposal structure, defensible methods, and ethics-ready feasibility.",
    cards: [
      {
        name: "Topic Selection",
        tag: "Best for: early stage",
        bullets: ["Gap mapping + novelty angle", "Focused objectives + questions", "1-page direction map"],
        price: "₹2,999",
      },
      {
        name: "Proposal Support",
        tag: "Best for: drafts",
        bullets: ["Structure + flow clean-up", "Problem statement refinement", "Supervisor-ready language"],
        price: "₹4,999",
      },
      {
        name: "Research Design",
        tag: "Best for: methods",
        bullets: ["Method fit to objective", "Sampling/variables clarity", "Defensibility notes"],
        price: "₹4,999",
      },
      {
        name: "Ethics & Feasibility",
        tag: "Best for: IRB/HREC",
        bullets: ["Feasibility + timeline plan", "Ethics form guidance", "Risk notes + checklist"],
        price: "₹3,999",
      },
    ],
  },

  {
    key: "data",
    title: "Data Services",
    short: "analysis • cleaning • interpretation",
    desc:
      "From clean datasets to clear interpretation: analysis support that’s easy to explain in your thesis, paper, or proposal.",
    cards: [
      {
        name: "Statistical Analysis",
        tag: "SPSS/R/Python",
        bullets: ["Test selection + execution", "Tables/graphs setup", "Result summary notes"],
        price: "₹6,999",
      },
      {
        name: "Data Cleaning",
        tag: "Pre-analysis",
        bullets: ["Missing/outlier checks", "Coding + transformations", "Clean dataset delivery"],
        price: "₹4,999",
      },
      {
        name: "ML Modelling",
        tag: "Applied ML",
        bullets: ["Model choice + setup", "Evaluation metrics clarity", "Outputs + explanation"],
        price: "₹7,999",
      },
      {
        name: "Interpretation Help",
        tag: "Write-ready",
        bullets: ["Explain findings simply", "Decision-ready insights", "Academic result wording"],
        price: "₹5,999",
      },
    ],
  },

  {
    key: "editorial",
    title: "Editorial Support",
    short: "editing • formatting • clarity",
    desc:
      "Clarity without changing meaning: editing, formatting, and structure improvements aligned to your target journal or university style.",
    cards: [
      {
        name: "Substantive Editing",
        tag: "Flow + logic",
        bullets: ["Content restructuring", "Coherence improvements", "Tracked suggestions"],
        price: "₹4,999",
      },
      {
        name: "Language Polishing",
        tag: "Grammar + tone",
        bullets: ["Grammar + punctuation", "Academic tone refinement", "Clarity smoothing"],
        price: "₹4,000",
      },
      {
        name: "Formatting Help",
        tag: "APA/IEEE/Journal",
        bullets: ["Style alignment", "References + citations", "Tables/figures consistency"],
        price: "₹3,999",
      },
      {
        name: "AI + Plagiarism Fix",
        tag: "Integrity-first",
        bullets: ["Humanized rewriting", "Originality improvements", "Proof summary"],
        price: "₹2,500",
      },
    ],
  },

  {
    key: "pub",
    title: "Publication Support",
    short: "journal • submission • response",
    desc:
      "Submission-ready support: pre-submission review, journal selection shortlist, and clear response-to-reviewers guidance.",
    cards: [
      {
        name: "Pre-Submission Review",
        tag: "Reviewer-style",
        bullets: ["Quality + logic feedback", "Strengthen arguments", "Compliance checks"],
        price: "₹5,999",
      },
      {
        name: "Manuscript Editing",
        tag: "Submission-ready",
        bullets: ["Language + structure polish", "Reference verification", "Final format checks"],
        price: "₹6,999",
      },
      {
        name: "Journal Selection",
        tag: "Scope-match",
        bullets: ["3–5 journal shortlist", "Avoid predatory outlets", "Submission notes"],
        price: "₹4,999",
      },
      {
        name: "Submission Guidance",
        tag: "Process support",
        bullets: ["Portal + checklist", "Cover letter help", "Final accuracy review"],
        price: "₹5,999",
      },
    ],
  },

  {
    key: "slides",
    title: "Academic Presentations",
    short: "slides • posters • visuals",
    desc:
      "Professional slides and posters: clean story flow, strong visuals, and speaker-ready delivery materials.",
    cards: [
      {
        name: "PhD Presentations",
        tag: "Synopsis/Viva",
        bullets: ["University format fit", "Slide story structure", "Compliance checks"],
        price: "₹3,999",
      },
      {
        name: "Conference Posters",
        tag: "Print-ready",
        bullets: ["Layout + hierarchy", "Concise copy design", "High-res export"],
        price: "₹3,999",
      },
      {
        name: "Oral Slides",
        tag: "Talk-ready",
        bullets: ["Content-to-slide mapping", "Visual highlights", "Optional speaker notes"],
        price: "₹4,999",
      },
      {
        name: "Visual Enhancements",
        tag: "Diagrams",
        bullets: ["Custom visuals", "Data charts/graphs", "Polish + consistency"],
        price: "₹2,999",
      },
    ],
  },
];
