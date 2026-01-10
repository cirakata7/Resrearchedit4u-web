const CATS = ["All", "Editing", "Journal Selection", "AI/Plagiarism", "Data/Stats", "Response to Reviewers"];

const STORIES = [
  {
    id: "s1",
    cat: "Editing",
    title: "Clearer structure and tighter language for journal-ready readability", 
    excerpt:
      "The edits improved flow and clarity without changing the meaning. Reviewers focused on the science, not the sentences.",
    badges: ["Problem: Dense structure", "Fix: Clarity edit", "Result: Reviewer-ready"],
    metaLine: "Senior Lecturer  •  Engineering  •  India  •  Pre-submission  •  Turnaround: 72 hours",
    rows: [
      { k: "Manuscript type", v: "Original research article" },
      { k: "What improved", v: "Structure, academic tone, consistency" },
      { k: "Support delivered", v: "Tracked edits + formatting alignment + submission-ready checks" },
    ],
    listPills: ["Pre-submission"],
    tags: ["structure", "clarity", "tone", "tracked changes", "engineering"],
    region: "India",
    field: "Engineering",
 
  },
  
  {
    id: "s2",
    cat: "Journal Selection",
    title: "Safer shortlist with scope-fit and realistic decision timelines",
    excerpt:
      "We screened indexing and scope-fit, reduced risk of desk rejection, and built a shortlist aligned to the paper’s methods and claims.",
    badges: ["Problem: Target uncertainty", "Fix: Scope & indexing checks", "Result: Safer shortlist"],
    metaLine: "Research Team  •  Management  •  Middle East  •  Pre-submission",
    rows: [
      { k: "Manuscript type", v: "Review article" },
      { k: "What improved", v: "Target fit, scope alignment, decision expectations" },
      { k: "Support delivered", v: "Shortlist + rationale + submission guidance" },
    ],
    listPills: ["Pre-submission"],
    tags: ["journal selection", "scope", "indexing", "desk rejection"],
    region: "Middle East",
    field: "Management",
  },
  {
    id: "s3",
    cat: "AI/Plagiarism",
    title: "Reduced similarity concerns while preserving the author’s scientific voice",
    excerpt:
      "We rewrote flagged areas without changing meaning, improved citations, and helped reduce avoidable similarity and AI-risk signals.",
    badges: ["Problem: High similarity", "Fix: Meaning-preserving rewrite", "Result: Cleaner report"],
    metaLine: "PhD Scholar  •  Life Sciences  •  UK/EU  •  Revision",
    rows: [
      { k: "Manuscript type", v: "Original research article" },
      { k: "What improved", v: "Paraphrasing quality, citation clarity, coherence" },
      { k: "Support delivered", v: "Rewrite + guidance notes + integrity checklist" },
    ],
    listPills: ["Revision"],
    tags: ["similarity", "ai", "rewrite", "plagiarism", "citations"],
    region: "UK/EU",
    field: "Life Sciences",
  },
  {
    id: "s4",
    cat: "Data/Stats",
    title: "Methods and statistics aligned to reporting expectations",
    excerpt:
      "We improved reporting structure, clarified assumptions, and aligned outputs to discipline norms for stronger reviewer confidence.",
    badges: ["Problem: Reporting gaps", "Fix: Analysis + reporting", "Result: Clearer methods"],
    metaLine: "Clinician  •  Medical  •  Australia  •  Pre-submission",
    rows: [
      { k: "Manuscript type", v: "Clinical study" },
      { k: "What improved", v: "Methods clarity, results structure, reporting completeness" },
      { k: "Support delivered", v: "Analysis checks + reporting rewrite + table cleanup" },
    ],
    listPills: ["Pre-submission"],
    tags: ["spss", "statistics", "methods", "reporting", "tables"],
    region: "Australia",
    field: "Medical",
  },
  {
    id: "s5",
    cat: "Response to Reviewers",
    title: "A stronger response-to-reviewers pack that reduced back-and-forth",
    excerpt:
      "We structured the rebuttal, clarified what changed, and mapped revisions to reviewer points for faster editorial decisions.",
    badges: ["Problem: Unclear rebuttal", "Fix: Structured response", "Result: Reduced back-and-forth"],
    metaLine: "Assistant Professor  •  Chemistry  •  India  •  Revision",
    rows: [
      { k: "Manuscript type", v: "Original research article" },
      { k: "What improved", v: "Rebuttal clarity, traceability, tone" },
      { k: "Support delivered", v: "Point-by-point response + revision mapping + tone polish" },
    ],
    listPills: ["Revision"],
    tags: ["rebuttal", "reviewers", "response", "revision"],
    region: "India",
    field: "Chemistry",
  },
];
export { CATS, STORIES };