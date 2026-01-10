const CATS = [
  "All",
  "Series",
  "Standalone",
  "Journal choice",
  "AI & similarity",
  "Peer review",
];

const POSTS = [
  {
    id: "p1",
    type: "Guide",
    category: "Journal choice",
    title: "How to choose the right journal.",
    excerpt: "A simple framework to reduce scope mismatch and desk rejection risk.",
    tags: ["fit", "scope", "indexing"],
    href: "/re-minds/how-to-choose-the-right-journal",
  },
  {
    id: "p2",
    type: "Guide",
    category: "AI & similarity",
    title: "Understanding plagiarism & AI flags.",
    excerpt: "What similarity scores mean — and how journals interpret them.",
    tags: ["similarity", "ai", "ethics"],
    href: "/re-minds/understanding-plagiarism-ai-flags",
  },
  {
    id: "p3",
    type: "Series",
    category: "Peer review",
    title: "Reviewer responses without defensiveness.",
    excerpt: "A point-by-point rebuttal structure that keeps the editor on your side.",
    tags: ["rebuttal", "tone", "revision"],
    href: "/re-minds/reviewer-responses-without-defensiveness",
  },
];

const SERIES_HIGHLIGHTS = [
  {
    id: "s1",
    title: "Desk rejection: the 30-second scan",
    desc: "What editors check first — and how to align quickly.",
    href: "/re-minds/desk-rejection-30-second-scan",
  },
  {
    id: "s2",
    title: "Methods clarity: minimum viable detail",
    desc: "Avoid reviewer confusion with crisp methods reporting.",
    href: "/re-minds/methods-clarity-minimum-viable-detail",
  },
];

const STANDALONE_GUIDES = [
  {
    id: "g1",
    title: "Submission pack essentials",
    desc: "Cover letter, forms, and common avoidable gaps.",
    href: "/re-minds/submission-pack-essentials",
  },
  {
    id: "g2",
    title: "Predatory risk: a practical screen",
    desc: "Red flags before you lose time, trust, or APC fees.",
    href: "/re-minds/predatory-risk-practical-screen",
  },
];
export { CATS, POSTS, SERIES_HIGHLIGHTS, STANDALONE_GUIDES };