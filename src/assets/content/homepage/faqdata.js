const FILTERS = [
  "All",
  "Ethics",
  "Process & timelines",
  "Journal selection",
  "AI & similarity",
  "Pricing",
  "Confidentiality",
];

const FAQS = [
  {
    id: "guarantee",
    q: "Do you guarantee publication in a specific journal?",
    tags: ["Ethics", "Journal selection"],
    a: "No ethical editing or publication partner can guarantee acceptance. What we do provide is rigorous editorial work, transparent journal-matching, and clear readiness feedback for your target list.",
  },
  {
    id: "howlong",
    q: "How long does the process usually take?",
    tags: ["Process & timelines", "Pricing"],
    a: "Turnaround depends on manuscript length, service scope, and journal requirements. We confirm timelines upfront and keep updates clear throughout the workflow.",
  },
  {
    id: "jsr",
    q: "Can you help with journal selection and submission?",
    tags: ["Journal selection", "Process & timelines"],
    a: "Yes. We can shortlist safer targets (scope + indexing checks) and help prepare the submission pack aligned to author guidelines.",
  },
  {
    id: "ai-sim",
    q: "What if my similarity score or AI flags are high?",
    tags: ["AI & similarity", "Ethics"],
    a: "We focus on meaning-preserving rewrites, improve clarity and citations where needed, and provide practical guidance to reduce avoidable similarity and AI-risk signals.",
  },
  {
    id: "pricing",
    q: "How do you price the work?",
    tags: ["Pricing"],
    a: "Pricing typically depends on word count, complexity, turnaround, and the exact deliverables. You receive a transparent quote and scope breakdown before work begins.",
  },
  {
    id: "confidential",
    q: "Do you keep manuscripts confidential?",
    tags: ["Confidentiality"],
    a: "Yes. We follow confidentiality-first handling and can support NDAs where needed. Your manuscript remains author-owned, and we do not resell or republish content.",
  },
];
export { FILTERS, FAQS };