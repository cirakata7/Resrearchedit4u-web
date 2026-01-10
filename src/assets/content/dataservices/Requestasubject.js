export const FIELDS = [
  { id: "stem", label: "STEM / Lab & experiments" },
  { id: "biotech", label: "Biotech / Clinical / Public health" },
  { id: "eng", label: "Engineering / Optimization" },
  { id: "social", label: "Social sciences / Education" },
  { id: "biz", label: "Business / Management" },
  { id: "hum", label: "Humanities / Qualitative" },
  { id: "unsure", label: "Not sure" },
];

export const QUESTIONS = [
  { id: "compare", label: "Compare groups" },
  { id: "beforeAfter", label: "Before–after change" },
  { id: "relationship", label: "Relationship (X with Y)" },
  { id: "prediction", label: "Prediction / drivers" },
  { id: "survey", label: "Survey scales (Likert)" },
  { id: "text", label: "Text / interviews" },
  { id: "mixed", label: "Mixed methods" },
];

export const CONTENT = {
  text: {
    kicker: "Recommended path",
    title: "Text / interviews (themes you can stand behind)",
    blurb:
      "Use this when your data is interviews, documents, or open-ended responses.",
    cards: [
      {
        title: "Best-fit analysis family",
        body:
          "Interpretive family—qualitative data analysis services with an auditable codebook and clear themes.",
      },
      {
        title: "When to use",
        body:
          "Your goal is explanation, meaning, experiences, or context—not numeric significance.",
      },
      {
        title: "What you'll report",
        body:
          "Theme table + exemplar quotes + traceability to your research questions.",
      },
      {
        title: "Reviewer watch-out",
        body:
          "Vague themes without evidence. Keep a coding audit trail. Justifying model choice, interaction effects, and avoiding cherry-picked significance.",
      },
    ],
    examplesByField: {
      eng: "Maintenance logs or incident notes coded for root causes.",
      stem: "Lab notes coded for failure modes; operator narratives about anomalies.",
      biotech: "Patient/clinician interviews; open-ended survey responses; adherence narratives.",
      social: "Student/teacher interviews; classroom observation notes; reflective journals.",
      biz: "Customer interviews; support tickets coded into drivers; stakeholder transcripts.",
      hum: "Textual analysis with a clear codebook and defensible themes.",
      unsure: "If you have interviews/open-text, use coding + an audit trail for defensible themes.",
    },
  },

  compare: {
    kicker: "Recommended path",
    title: "Group comparison (2 groups vs 3+ groups)",
    blurb:
      "Use this when your outcome is measured across conditions and you need a defendable comparison.",
    cards: [
      { title: "Best-fit analysis family", body: "Comparison family (two-group / multi-group) with assumptions checking." },
      { title: "When to use", body: "Your groups are clearly defined (e.g., control vs treatment)." },
      { title: "What you'll report", body: "A clean table + one clear plot + interpretation beyond p-values." },
      { title: "Reviewer watch-out", body: "Paired vs independent confusion; outliers; multiple testing without a plan." },
    ],
    examplesByField: {
      eng: "Algorithm performance across variants; defect rate across settings.",
      stem: "Cell viability across doses; assay readings across conditions.",
      biotech: "Outcomes across treatment arms; biomarker differences across cohorts.",
      social: "Learning outcomes across classes; intervention vs control comparisons.",
      biz: "Segment differences in satisfaction; campaign conversion comparisons.",
      hum: "Compare themes across contexts (avoid forced numeric claims).",
      unsure: "Start by clarifying whether samples are paired or independent.",
    },
  },

  relationship: {
    kicker: "Recommended path",
    title: "Relationship / association (X with Y)",
    blurb: "Use this when you want to see whether two variables move together.",
    cards: [
      { title: "Best-fit analysis family", body: "Association family—clear interpretation boundaries and visuals." },
      { title: "When to use", body: "Two variables (X and Y) and the question is “are they related?”" },
      { title: "What you'll report", body: "Relationship plot + direction/strength + limitations in plain language." },
      { title: "Reviewer watch-out", body: "Association ≠ causation. Define design + variables before test choice." },
    ],
    examplesByField: {
      eng: "Load vs deflection; speed vs energy use; input vs output error.",
      stem: "Dose vs response; time vs degradation; temperature vs yield.",
      biotech: "Biomarker vs outcome; exposure vs risk score; lab value vs endpoint.",
      social: "Time-on-task vs achievement; SES vs outcomes; feedback vs engagement.",
      biz: "Price vs demand; ad spend vs conversions; satisfaction vs churn risk.",
      hum: "If the question is “does X move with Y?”, it’s relationship/association.",
      unsure: "If you want to show a link between two measures, start here.",
    },
  },

  beforeAfter: {
    kicker: "Recommended path",
    title: "Before–after change (paired / repeated measures)",
    blurb:
      "Use this when the same subjects are measured over time or before vs after an intervention.",
    cards: [
      { title: "Best-fit analysis family", body: "Change family—paired comparisons and repeated measures." },
      { title: "When to use", body: "Same participants/entities measured at two or more time points." },
      { title: "What you'll report", body: "Pre/post table + change plot + effect interpretation." },
      { title: "Reviewer watch-out", body: "Missingness, time confounding, regression to the mean, incorrect pairing." },
    ],
    examplesByField: {
      eng: "Before/after process change throughput; maintenance impact on defects.",
      stem: "Pre/post treatment readings; baseline vs follow-up measures.",
      biotech: "Baseline vs follow-up outcomes; pre/post intervention responses.",
      social: "Pre/post test scores; program evaluation before/after.",
      biz: "Before/after conversion rate; policy change impact on KPIs.",
      hum: "Before/after intervention reflections (qual + quant if present).",
      unsure: "If the same cases are measured twice, use a before–after approach.",
    },
  },

  prediction: {
    kicker: "Recommended path",
    title: "Prediction / drivers (what explains Y?)",
    blurb:
      "Use this when you want to estimate which factors best predict an outcome.",
    cards: [
      { title: "Best-fit analysis family", body: "Predictive family—driver analysis with diagnostics and guardrails." },
      { title: "When to use", body: "Multiple inputs (X’s) and one outcome (Y), and you need ranked drivers." },
      { title: "What you'll report", body: "Model summary + driver importance + implications + limitations." },
      { title: "Reviewer watch-out", body: "Overfitting, leakage, collinearity, causal language without design support." },
    ],
    examplesByField: {
      eng: "Drivers of defects; predictors of downtime; throughput drivers.",
      stem: "Predictors of yield; drivers of failure; response predictors.",
      biotech: "Risk factor predictors; response prediction drivers.",
      social: "Predictors of achievement; engagement drivers.",
      biz: "Churn drivers; purchase intent predictors; revenue drivers.",
      hum: "Ensure design supports driver claims; avoid causal framing.",
      unsure: "If your question is “what drives Y?”, use prediction with strong guardrails.",
    },
  },

  survey: {
    kicker: "Recommended path",
    title: "Survey scales (Likert and composites)",
    blurb:
      "Use this when your data comes from survey items, Likert scales, or index scores.",
    cards: [
      { title: "Best-fit analysis family", body: "Measurement family—reliability checks + defensible composites." },
      { title: "When to use", body: "Variables come from multi-item scales and need interpretable summaries." },
      { title: "What you'll report", body: "Scale summary + reliability note + key comparisons/associations." },
      { title: "Reviewer watch-out", body: "Ordinal handling; unclear composites; missing reliability evidence." },
    ],
    examplesByField: {
      eng: "Operator usability ratings; tool satisfaction indices.",
      stem: "Protocol usability/experience scales.",
      biotech: "Patient-reported outcome measures; experience scales.",
      social: "Attitude/engagement scales; classroom climate instruments.",
      biz: "CSAT/NPS; brand perception scales; employee engagement surveys.",
      hum: "If you quantify attitudes with Likert items, document scale construction carefully.",
      unsure: "If your data is Likert items, define composites and interpretation clearly.",
    },
  },

  mixed: {
    kicker: "Recommended path",
    title: "Mixed methods (numbers + narratives aligned)",
    blurb:
      "Use this when you have both quantitative and qualitative data and need them to tell one coherent story.",
    cards: [
      { title: "Best-fit analysis family", body: "Integration family—mixed methods with an explicit integration plan." },
      { title: "When to use", body: "You need breadth (numbers) and depth (themes), or validation across sources." },
      { title: "What you'll report", body: "A joint display + convergence/divergence notes aligned to RQs." },
      { title: "Reviewer watch-out", body: "Two analyses without integration; weak linkage to research questions." },
    ],
    examplesByField: {
      eng: "Performance metrics + operator feedback mapped to outcomes.",
      stem: "Quant outcomes + lab narratives explaining anomalies.",
      biotech: "Clinical outcomes + interview insights triangulated.",
      social: "Scores + interviews/observations explaining the “why”.",
      biz: "KPIs + customer interviews connecting drivers to results.",
      hum: "Themes supported by light structured counts where justified.",
      unsure: "If you have numbers and text, integrate them explicitly (not separately).",
    },
  },
};
