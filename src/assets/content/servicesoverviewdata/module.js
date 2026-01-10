// src/components/modulesByStage/modulesByStageData.js

export const STAGES = ["Planning", "Mid-stage", "Submitting"];

export const STAGE_HINT = {
  "Planning": "Planning modules: choose direction, structure, and ethics readiness.",
  "Mid-stage": "Mid-stage modules: fix methodology, feasibility, and coherence.",
  "Submitting": "Submitting modules: polish, final checks, and response strategy.",
};

export const MODULES = {
  "Planning": [
    {
      key: "Topic & Research Gap Clarity",
      desc: "Turn a broad idea into a defensible gap, objectives, and scope.",
      get: [
        "Gap + objectives (clear & defendable)",
        "Scope boundaries (what to include/exclude)",
        "1-page direction brief for supervisor",
      ],
      chips: { stage: "Planning", depth: "Fast scope" },
      icon: "doc",
    },
    {
      key: "Proposal Structure & Storyline",
      desc: "Build a supervisor-friendly structure from problem → plan.",
      get: [
        "Section-by-section outline",
        "Logical flow (problem → plan → value)",
        "Checklist to keep the draft coherent",
      ],
      chips: { stage: "Planning", depth: "Fast scope" },
      icon: "lines",
    },
    {
      key: "Literature Mapping & Justification",
      desc: "Organise literature into themes that justify your gap and approach.",
      get: [
        "Theme map (what exists vs what’s missing)",
        "Justification paragraph blocks",
        "Key terms to keep consistency",
      ],
      chips: { stage: "Planning", depth: "Deep support" },
      icon: "book",
    },
    {
      key: "Ethics & Approval Support (IRB/HREC/REC)",
      desc: "Prepare ethics-ready language, risks, mitigation, and key components.",
      get: [
        "Ethics-ready wording & structure",
        "Risk/mitigation + participant notes",
        "Approval-aligned terminology",
      ],
      chips: { stage: "Planning", depth: "Fast scope" },
      icon: "shield",
    },
  ],

  "Mid-stage": [
    {
      key: "Methodology Design & Feasibility",
      desc: "Align design, sampling, tools, and feasibility to your question.",
      get: [
        "Method alignment (Q → method)",
        "Feasibility + limitations statement",
        "Defendable design narrative",
      ],
      chips: { stage: "Mid-stage", depth: "Deep support" },
      icon: "flask",
    },
    {
      key: "Instrument/Protocol & Data Plan",
      desc: "Clarify what you measure, how you collect it, and how you analyse it.",
      get: [
        "Variables/constructs & collection plan",
        "Data analysis plan (clear steps)",
        "Protocol checklist to avoid gaps",
      ],
      chips: { stage: "Mid-stage", depth: "Deep support" },
      icon: "chart",
    },
    {
      key: "Proposal Structure & Storyline",
      desc: "Fix flow so chapters connect cleanly and read convincingly.",
      get: [
        "Re-ordered outline (clean logic)",
        "Bridge sentences + coherence fixes",
        "Revision plan (what to change first)",
      ],
      chips: { stage: "Mid-stage", depth: "Fast scope" },
      icon: "lines",
    },
    {
      key: "Ethics & Approval Support (IRB/HREC/REC)",
      desc: "Make your ethics section complete, consistent, and approval-friendly.",
      get: [
        "Approval-aligned components",
        "Consent/risk language suggestions",
        "Feasibility + safeguards summary",
      ],
      chips: { stage: "Mid-stage", depth: "Fast scope" },
      icon: "shield",
    },
  ],

  "Submitting": [
    {
      key: "Proposal Editing & Academic Language",
      desc: "Improve clarity and flow while keeping your voice and meaning intact.",
      get: [
        "Line-level clarity improvements",
        "Academic tone & readability",
        "Consistency (terms, tense, structure)",
      ],
      chips: { stage: "Submitting", depth: "Fast scope" },
      icon: "pen",
    },
    {
      key: "Submission Readiness Pack",
      desc: "Final checks: coherence, formatting, references, and revision-ready version.",
      get: [
        "Final QA checklist pass",
        "Formatting + references consistency",
        "Submission-ready clean file",
      ],
      chips: { stage: "Submitting", depth: "Fast scope" },
      icon: "checkdoc",
    },
    {
      key: "Supervisor/Reviewer Response Support",
      desc: "Convert comments into a revision plan + response strategy (polite, precise).",
      get: [
        "Comment-to-action revision map",
        "Response wording guidance",
        "Priority list (what matters most)",
      ],
      chips: { stage: "Submitting", depth: "Deep support" },
      icon: "chat",
    },
    {
      key: "Methodology / Analysis Clarity Tune-up",
      desc: "Make methods/analysis sections defensible and easy to follow.",
      get: [
        "Method/analysis clarity rewrite",
        "Feasibility + limitation phrasing",
        "What-to-justify checklist",
      ],
      chips: { stage: "Submitting", depth: "Deep support" },
      icon: "chart",
    },
  ],
};

export function stagePlaceholder(stage) {
  if (stage === "Planning")
    return "Example: I have multiple ideas. I need a clear research gap + objectives and a supervisor-ready direction.";
  if (stage === "Mid-stage")
    return "Example: My methodology feels weak. I need feasibility + a defendable design and analysis plan.";
  return "Example: I’m close to submission. I need clarity edits + final checks (and help responding to supervisor comments).";
}
