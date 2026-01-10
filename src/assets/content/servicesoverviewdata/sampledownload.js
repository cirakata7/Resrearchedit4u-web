// src/data/samplesDownloads.data.js

export const HIGHLIGHTS = [
  { bold: "Non-technical", text: "language" },
  { bold: "Supervisor-ready", text: "formats" },
  { bold: "Confidential", text: "+ integrity-first" },
  { bold: "International", text: "terminology aligned" },
];

export const FILE_CONTENT = {
  "RE4U_Proposal_Structure_Map.txt": `RE4U - Proposal Structure Map (Supervisor-friendly)

1) Gap (1-2 sentences)
- What is known?
- What is missing?
- Why it matters (practical/clinical/policy/scientific value)

2) Objective(s) (3 max)
- Use measurable verbs: quantify, compare, evaluate, model, test, explore

3) Method fit
- Design: qual/quant/mixed
- Sampling/data source
- Primary outcome + key variables

4) Feasibility (12 weeks example)
- Week 1-2: finalize scope + instruments
- Week 3-6: data collection / experiments
- Week 7-9: analysis sequence
- Week 10-12: draft + revisions

5) Deliverables you can show your supervisor
- 1-page map + objective list + method fit + feasibility note
`,
  "RE4U_Method_Fit_Checklist.txt": `RE4U - Method-Fit Checklist

A) Question -> Design
- Is the question descriptive, comparative, or causal?
- Choose: qual / quant / mixed

B) Variables & Measures
- Primary outcome defined?
- Key predictors/covariates listed?
- Measurement method stated (instrument/lab/registry)

C) Sampling & Controls
- Inclusion/exclusion criteria?
- Sampling plan (and why it is feasible)?
- Controls/validation plan included?

D) Analysis Sequence
- Step 1: data cleaning/QA
- Step 2: descriptive summary
- Step 3: main test/model
- Step 4: robustness/validation

E) "Defensibility" sentence patterns
- "This design is appropriate because ..."
- "We mitigate bias by ..."
`,
  "RE4U_Feedback_Revision_Sheet.txt": `RE4U - Supervisor Feedback -> Revision Sheet

Columns:
1) Comment (verbatim)
2) What it means (plain English)
3) Action (specific change)
4) Evidence needed (citation/data/justification)
5) Priority (Fix first / Next / Optional)
6) Owner (You / RE4U)
7) Done?

Tip:
- Convert vague comments into 1 concrete change + 1 proof line.
- End with a 5-line "What changed" summary to send your supervisor.
`,
  "RE4U_Ethics_Feasibility_Readiness_Pack.txt": `RE4U - Ethics + Feasibility Readiness Pack

1) Feasibility checklist
- Data access confirmed?
- Time window realistic?
- Tools/software/resources available?
- Backup plan if delays occur?

2) Ethics / approvals (region-aware)
- US: IRB | Australia: HREC | UK: REC

3) Minimal, safe wording prompts
- Consent process (if applicable)
- Confidentiality and access controls
- Data storage and retention note

4) Risk notes
- Participant risk minimization
- Data anonymization/pseudonymization where relevant
`,
};

export const ASSETS = [
  {
    id: "structure-map",
    tagLeft: { icon: "▦", label: "Sample structure" },
    tagRight: { icon: "⏱", label: "2-page" },
    title: "Proposal Structure Map (Supervisor-friendly)",
    desc: "Turn a broad idea into a clean flow: gap -> objective -> method -> feasibility.",
    before: {
      title: "Before",
      text: `"I will study heavy metals in water and use biochar to remove them."

Issue: topic-only statement - no clear gap, novelty, or measurable plan.`,
    },
    after: {
      title: "After",
      text: `Gap: "Existing low-cost adsorbents show inconsistent performance at field pH."
Objective: "Quantify removal at pH 5-9 and model kinetics."
Method: "Batch design + validation plan in 12 weeks."`,
    },
    inside: [
      'A one-page flow that supervisors scan in "60 seconds"',
      "Gap + novelty sentence patterns (safe, defensible)",
      "Objective templates (measurable, aligned to methods)",
      "Mini feasibility checklist (time, data, tools)",
    ],
    file: "RE4U_Proposal_Structure_Map.txt",
    micro:
      "Instant .txt download (swap to PDF link later). Email option captures lead without blocking download.",
  },
  {
    id: "method-fit",
    tagLeft: { icon: "⚑", label: "Methodology" },
    tagRight: { icon: "✓", label: "Checklist" },
    title: "Method-Fit Checklist (Defensible methods)",
    desc: 'Stop "methods don\'t match the question" feedback - fast alignment.',
    before: {
      title: "Before",
      text: `"We will collect data and analyze it."

Issue: no design fit, no variables, no validation plan.`,
    },
    after: {
      title: "After",
      text: `Design: "Cross-sectional survey with stratified sampling."
Variables: "Primary outcome + covariates defined."
Validation: "Pilot + reliability checks + analysis sequence."`,
    },
    inside: [
      "Question -> design mapping (qual/quant/mixed)",
      "Variables + measures checklist (avoid missing variables)",
      "Analysis sequence template (so reporting looks clean)",
      "Validation plan prompts (reviewer-safe)",
    ],
    file: "RE4U_Method_Fit_Checklist.txt",
    micro: "Best for mid-stage: methods, sampling, variables, and analysis plan clarity.",
  },
  {
    id: "revision-sheet",
    tagLeft: { icon: "✎", label: "Revision" },
    tagRight: { icon: "↺", label: "Response plan" },
    title: "Supervisor Feedback -> Revision Sheet",
    desc: "Convert vague comments into a calm, trackable next-draft plan.",
    before: {
      title: "Before",
      text: `"Your objectives are unclear."

Result: confusion -> rewriting everything -> more anxiety.`,
    },
    after: {
      title: "After",
      text: `Comment: "Objectives unclear" -> Action: rewrite 3 objectives using measurable verbs.
Evidence: add 1-2 citations for feasibility.
Owner: student + timeline.`,
    },
    inside: [
      "Comment -> action translation columns",
      "Priority tagging (fix first / optional / ignore)",
      'Revision timeline + "what changed" summary',
      "Ready-to-send supervisor response phrasing",
    ],
    file: "RE4U_Feedback_Revision_Sheet.txt",
    micro: "Best for submitting stage: revisions, resubmissions, and clean response planning.",
  },
  {
    id: "ethics-pack",
    tagLeft: { icon: "⚖", label: "Ethics" },
    tagRight: { icon: "🌍", label: "IRB / HREC / REC" },
    title: "Ethics + Feasibility Readiness Pack",
    desc: "A simple pack to reduce back-and-forth on feasibility and ethics language.",
    before: {
      title: "Before",
      text: `"Ethics approval will be taken."

Issue: incomplete risk, consent, and confidentiality language.`,
    },
    after: {
      title: "After",
      text: `Minimal, safe phrasing:
"We will obtain approval where applicable and follow confidentiality and consent processes. Data handling will be documented and access-limited."`,
    },
    inside: [
      "Feasibility checklist: timeline + resources + access",
      "Ethics wording prompts (non-legal, safe)",
      "Country terminology map: IRB / HREC / REC",
      "Risk notes: data handling + consent + confidentiality",
    ],
    file: "RE4U_Ethics_Feasibility_Readiness_Pack.txt",
    micro:
      'Designed to prevent "missing ethics details" delays - without heavy legal jargon.',
  },
];

export const TRUST_STRIP = [
  { bold: "No obligation", text: "- download anytime" },
  { bold: "Integrity-first", text: "- you remain the author" },
  { bold: "Confidential", text: "- handled securely" },
];

export const REGIONS = ["India", "United States", "United Kingdom", "Australia", "Other"];
