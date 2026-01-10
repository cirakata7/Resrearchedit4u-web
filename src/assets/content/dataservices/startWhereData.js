export const START_WHERE = {
  title: "Start where you are",
  subtitle:
    "Choose the closest match. We’ll respond with the simplest route and the right package—without making this feel complicated.",

  tabs: [
    {
      key: "thesis",
      label: "Thesis / Dissertation / PhD data support",
      pill: "Best for",
      heading: "Thesis / dissertation / PhD data analysis support",
      intro:
        "Ideal for thesis data analysis services, dissertation data analysis services, and PhD data analysis services where you must defend your choices and interpretation.",
      ctaPrimary: { label: "Check my thesis analysis plan", href: "/booknow" },
      ctaSecondary: { label: "See packages", href: "/services" },
      cols: [
        {
          title: "What we’ll do",
          bullets: [
            "Map objectives/RQs → variables → analysis test pathway",
            "Improve dataset readiness (labels, coding, missing/outliers logged)",
            "Structure outputs so they’re readable in reviews",
          ],
        },
        {
          title: "What you receive",
          bullets: [
            "Interpretation notes + “what-to-report” guidance",
            "Editable tables/figures + short QC notes",
            "Clear next-step checklist for revisions",
          ],
        },
      ],
    },

    {
      key: "survey",
      label: "Survey / Questionnaire analysis (Likert + reliability)",
      pill: "Best for",
      heading: "Survey & questionnaire analysis support",
      intro:
        "Built for questionnaire data analysis, survey data analysis services, and Likert scale analysis where reliability and reporting clarity matter.",
      ctaPrimary: { label: "Validate and interpret my survey", href: "/booknow" },
      ctaSecondary: { label: "See packages", href: "/services" },
      cols: [
        {
          title: "What we’ll do",
          bullets: [
            "Data cleaning support + coding/scale structure checks",
            "Reliability checks including Cronbach alpha",
            "Help you interpret outputs without overclaiming",
          ],
        },
        {
          title: "What you receive",
          bullets: [
            "Editable outputs + “what-to-report” notes",
            "Scale check summary (simple, supervisor-readable)",
            "Next-step plan (what to improve / what to keep)",
          ],
        },
      ],
    },

    {
      key: "clinical",
      label: "Clinical / Public Health / Biostatistics",
      pill: "Best for",
      heading: "Clinical / public health / biostatistics projects",
      intro:
        "For clinical research data analysis, public health data analysis, and biostatistics consulting where disciplined reporting is non-negotiable.",
      ctaPrimary: { label: "Request a biostat review", href: "/booknow" },
      ctaSecondary: { label: "See packages", href: "/services" },
      cols: [
        {
          title: "What we’ll do",
          bullets: [
            "Confirm feasibility + test pathway aligned to design",
            "Interpretation discipline (avoid overstating findings)",
            "Reporting consistency checks across tables/figures",
          ],
        },
        {
          title: "What you receive",
          bullets: [
            "Analysis plan + editable outputs",
            "QC notes (what was checked + what changed)",
            "Short explanation notes for committee/sponsor queries",
          ],
        },
      ],
    },
  ],
};
