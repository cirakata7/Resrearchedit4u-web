export const QUOTE_NEXT_STEPS = {
  title: "Get Your Quote & Next Steps (30 minutes)",
  closeAria: "Close dialog",

  fields: {
    selectedOption: {
      label: "Selected option",
      placeholder: "Select",
      options: [
        { value: "free_call", label: "Free Planning Call" },
        { value: "starter", label: "Starter — Clarity Check" },
        { value: "core", label: "Core — Proposal Blueprint" },
        { value: "premium", label: "Premium — Supervisor-Ready Pack" },
      ],
    },

    academicLevel: {
      label: "Academic level",
      placeholder: "Select",
      options: [
        { value: "ug", label: "UG" },
        { value: "pg", label: "PG" },
        { value: "phd", label: "PhD" },
        { value: "postdoc", label: "Postdoc" },
        { value: "grant", label: "Grant" },
      ],
    },

    fullName: { label: "Full name", placeholder: "Full Name" },

    discipline: {
      label: "Discipline / subject",
      placeholder: "e.g., Chemistry, Management, Public Health",
    },

    helpWith: {
      label: "What do you need help with?",
      items: [
        { id: "proposal_outline", label: "Proposal outline" },
        { id: "objectives_rq", label: "Objectives & research questions" },
        { id: "research_design", label: "Research design" },
        { id: "proposal_editing", label: "Proposal editing" },
        { id: "problem_gap", label: "Problem statement + gap" },
        { id: "methodology", label: "Research methodology" },
        { id: "timeline", label: "Timeline / work plan" },
        { id: "other", label: "Other" },
      ],
    },

    formatAvailable: {
      label: "Institute/funder format available?",
      placeholder: "Select",
      options: [
        { value: "no", label: "No" },
        { value: "yes", label: "Yes (I can upload)" },
        { value: "not_sure", label: "Not sure" },
      ],
    },

    notes: {
      label: "Notes (optional)",
      placeholder:
        "Any supervisor comments, constraints, or special instructions…",
    },
  },

  actions: {
    primary: "Get My Quote & Plan",
    secondary: "Cancel",
  },

  footerNote:
    "You’ll receive: recommended package + transparent quote + timeline + next steps.\nIntegrity promise: No fabricated data/results/citations. Your authorship stays yours.",
};
