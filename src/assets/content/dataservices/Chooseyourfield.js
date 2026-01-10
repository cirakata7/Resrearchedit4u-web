
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
  compare: {
    kicker: "Recommended path",
    title: "Group comparison (2 groups vs 3+ groups)",
    blurb:
      "Use this when your outcome is measured across conditions and you need a defendable comparison.",
    cards: [
      {
        title: "Best-fit analysis family",
        body:
          "A comparison family (two-group / multi-group). Often paired with hypothesis testing help when assumptions are met.",
      },
      {
        title: "When to use",
        body:
          "Your groups are clearly defined (e.g., control vs treatment), and the outcome is comparable across groups.",
      },
      {
        title: "What you’ll report",
        body:
          "A clean table + one clear plot. Explain what differs and how meaningful it is (not just p-values).",
      },
      {
        title: "Reviewer watch-out",
        body:
          "Don’t mix up paired vs independent samples. Avoid running many tests without a plan. Design clarity (paired vs independent), outliers, and assumptions must be checked.",
      },
    ],
    examplesByField: {
      stem:
        "ELISA concentrations across treatments; qPCR ΔΔCt across conditions; cell viability across doses.",
      biotech:
        "Outcomes across treatment arms; biomarker differences across cohorts; response rates across protocols.",
      eng:
        "Algorithm performance across variants; cycle time across process settings; error rates across conditions.",
      social:
        "Learning outcomes across classes; intervention vs control comparisons; group differences in engagement.",
      biz:
        "Segment differences in satisfaction; branch comparisons on KPIs; conversion differences across campaigns.",
      hum:
        "Comparing themes across texts/contexts (without forcing numeric claims).",
      unsure:
        "Start by stating what you’re comparing and how the samples are related (paired vs independent).",
    },
  },

  relationship: {
    kicker: "Recommended path",
    title: "Relationship / association (X with Y)",
    blurb: "Use this when you want to see whether two variables move together.",
    cards: [
      {
        title: "Best-fit analysis family",
        body:
          "Association family—part of quantitative data analysis services with clear interpretation boundaries.",
      },
      {
        title: "When to use",
        body:
          "You have two measured variables (X and Y) and your question is “are they related?”",
      },
      {
        title: "What you’ll report",
        body:
          "A relationship plot + plain-English statement of direction/strength + limits.",
      },
      {
        title: "Reviewer watch-out",
        body:
          "Association is not causation—especially in cross-sectional or observational designs. Clarity first: define design + variables before choosing tests.",
      },
    ],
    examplesByField: {
      stem: "Dose vs response; temperature vs yield; time vs degradation rate.",
      biotech:
        "Biomarker vs outcome; exposure vs risk score; lab value vs clinical endpoint.",
      eng: "Load vs deflection; input vs output error; speed vs energy use.",
      social:
        "Time-on-task vs achievement; SES vs outcomes; teacher feedback vs engagement.",
      biz: "Price vs demand; ad spend vs conversions; churn risk vs satisfaction.",
      hum:
        "If you’re asking “does X move with Y?”, it’s relationship/association.",
      unsure:
        "If the question is “are these linked?”, start here and define variables clearly.",
    },
  },

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
        title: "What you’ll report",
        body:
          "Theme table + exemplar quotes + traceability to your research questions.",
      },
      {
        title: "Reviewer watch-out",
        body:
          "Vague themes without evidence. Keep a coding audit trail. Clarity first: define design + variables before choosing tests.",
      },
    ],
    examplesByField: {
      stem:
        "Lab notes or incident reports coded for root causes; operator narratives about failure modes.",
      biotech:
        "Patient/clinician interview themes; open-ended survey responses; protocol adherence narratives.",
      eng:
        "Maintenance logs coded to categories; incident narratives mapped to causes and mitigations.",
      social:
        "Student/teacher interviews; classroom observation notes; reflective journals.",
      biz:
        "Customer interviews; support tickets coded into drivers; stakeholder transcripts.",
      hum:
        "Textual analysis and interview coding using a clear framework and themes.",
      unsure:
        "If you have interviews/open-text, use a coding framework and defensible themes.",
    },
  },

  mixed: {
    kicker: "Recommended path",
    title: "Mixed methods (numbers + narratives aligned)",
    blurb:
      "Use this when you have both quantitative and qualitative data and need them to tell one coherent story.",
    cards: [
      {
        title: "Best-fit analysis family",
        body:
          "Integration family—mixed methods data analysis with a clear integration plan.",
      },
      {
        title: "When to use",
        body:
          "You need both breadth (numbers) and depth (themes), or you’re validating across sources.",
      },
      {
        title: "What you’ll report",
        body:
          "A joint display (side-by-side table) + short integration notes (converge/diverge).",
      },
      {
        title: "Reviewer watch-out",
        body:
          "Two analyses without integration. Reviewers want one storyline. Clarity first: define design + variables before choosing tests.",
      },
    ],
    examplesByField: {
      stem:
        "Quant outcomes + lab narratives; integrate results to explain anomalies and mechanisms.",
      biotech:
        "Clinical outcomes + interview insights; triangulate to explain adherence and effects.",
      eng:
        "Performance metrics + operator feedback; align themes to measured results.",
      social:
        "Scores + interviews/observations; explain “why” behind measured differences.",
      biz:
        "KPIs + customer interviews; connect drivers (themes) to outcomes (metrics).",
      hum:
        "Textual themes supported by structured counts (where appropriate) and a clear rationale.",
      unsure:
        "If you have both numbers and narratives, align them to the same RQs and integrate explicitly.",
    },
  },

  beforeAfter: {
    kicker: "Recommended path",
    title: "Before–after change (paired or repeated measures)",
    blurb:
      "Use this when the same subjects are measured over time or before vs after an intervention.",
    cards: [
      {
        title: "Best-fit analysis family",
        body:
          "Change family—paired comparisons and repeated-measures approaches.",
      },
      {
        title: "When to use",
        body:
          "Same participants/entities measured at two or more time points.",
      },
      {
        title: "What you’ll report",
        body:
          "Change table + pre/post plot + effect interpretation.",
      },
      {
        title: "Reviewer watch-out",
        body:
          "Regression to the mean; missingness; time confounders; incorrect pairing.",
      },
    ],
    examplesByField: {
      stem: "Before/after treatment readings; pre/post exposure assays.",
      biotech: "Baseline vs follow-up; pre/post intervention outcomes.",
      eng: "Before/after process change metrics; maintenance impact.",
      social: "Pre/post test scores; before/after program evaluation.",
      biz: "Before/after conversion rate; policy change impact.",
      hum: "Before/after intervention reflections (qual + quant if present).",
      unsure: "If the same cases are measured twice, this is a before–after setup.",
    },
  },

  prediction: {
    kicker: "Recommended path",
    title: "Prediction / drivers (what explains Y?)",
    blurb:
      "Use this when you want to estimate which factors best predict an outcome.",
    cards: [
      {
        title: "Best-fit analysis family",
        body:
          "Predictive family—driver analysis with model diagnostics and guardrails.",
      },
      {
        title: "When to use",
        body:
          "Multiple inputs (X’s) and one outcome (Y), and you need ranked drivers.",
      },
      {
        title: "What you’ll report",
        body:
          "Model summary + driver importance + plain-English implications + limits.",
      },
      {
        title: "Reviewer watch-out",
        body:
          "Overfitting; leakage; collinearity; causal language without design support.",
      },
    ],
    examplesByField: {
      stem: "Drivers of yield; predictors of failure.",
      biotech: "Risk factors predicting outcomes; predictors of response.",
      eng: "Predictors of defects; drivers of throughput.",
      social: "Predictors of achievement; drivers of engagement.",
      biz: "Drivers of churn; predictors of purchase intent.",
      hum: "Structured prediction is rare; ensure the design supports driver claims.",
      unsure: "If your question is “what drives Y?”, use prediction/driver analysis with strong guardrails.",
    },
  },

  survey: {
    kicker: "Recommended path",
    title: "Survey scales (Likert and composites)",
    blurb:
      "Use this when your data comes from survey items, Likert scales, or index scores.",
    cards: [
      {
        title: "Best-fit analysis family",
        body:
          "Measurement family—scale handling, reliability checks, and defensible comparisons.",
      },
      {
        title: "When to use",
        body:
          "Your variables come from multi-item scales and you need interpretable summaries.",
      },
      {
        title: "What you’ll report",
        body:
          "Scale summary + reliability note + key comparisons/associations.",
      },
      {
        title: "Reviewer watch-out",
        body:
          "Treating ordinal items incorrectly; unclear composite construction; missing reliability evidence.",
      },
    ],
    examplesByField: {
      stem: "Usability/experience scales for protocols or tools.",
      biotech: "Patient-reported outcome measures; experience scales.",
      eng: "Operator usability ratings; satisfaction indices.",
      social: "Attitude/engagement scales; classroom climate instruments.",
      biz: "NPS/CSAT; brand perception scales; employee engagement surveys.",
      hum: "If you quantify attitudes with Likert items, document scale construction carefully.",
      unsure: "If you used Likert items, define composites and interpretation up front.",
    },
  },
};
