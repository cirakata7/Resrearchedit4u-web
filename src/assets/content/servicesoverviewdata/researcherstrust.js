// src/data/testimonials.data.js

export const TRUST_PILLS = [
  "Confidential",
  "Integrity-first",
  "No misconduct support",
  "IRB/HREC/REC aware",
];

export const COMMON_WINS = [
  {
    icon: "✓",
    title: "Clear research gap",
    desc: "So supervisors see what’s new — fast.",
  },
  {
    icon: "✓",
    title: "Feasible methods",
    desc: "Defendable design without overcomplicating.",
  },
  {
    icon: "✓",
    title: "Submission readiness",
    desc: "Cleaner packs, fewer preventable rejections.",
  },
];

export const FOOT_BADGES = [
  "Ethical",
  "Supervisor-ready clarity",
  "International formats",
];

export const STAGES = ["Planning", "Mid-stage", "Submitting"];

export const TESTIMONIALS = [
  {
    id: "t1",
    initials: "RK",
    author: "Doctoral Candidate (Engineering)",
    role: "Planning stage",
    country: "India",
    flag: "🇮🇳",
    chips: [
      { label: "Stage:", value: "Planning" },
      { label: "Category:", value: "topic selection" },
      { label: "Service:", value: "Topic + gap mapping" },
    ],
    quote:
      "“I had too many ideas and kept rewriting. RE4U helped me pick one defensible direction, define measurable objectives, and build a plan I could actually follow.”",
    outcome: "clear direction + feasibility",
    details: {
      before:
        "multiple questions, no primary outcome, unclear scope boundaries.",
      after:
        "one primary question + method-fit check + realistic timeline.",
      bullets: [
        { k: "Common blocker:", v: "“Too many ideas, no direction.”" },
        { k: "Typical fix researchers miss:", v: "choosing ONE primary dependent variable/outcome." },
        { k: "Modules used:", v: "Scope narrowing, Objective alignment, Feasibility planning." },
      ],
    },
    prefill: {
      stage: "Planning",
      problem: "Too many ideas, no clear direction",
    },
    defaultExpanded: true,
  },
  {
    id: "t2",
    initials: "PS",
    author: "PhD Scholar (Life Sciences)",
    role: "Mid-stage",
    country: "Australia",
    flag: "🇦🇺",
    chips: [
      { label: "Stage:", value: "Mid-stage" },
      { label: "Category:", value: "method misalignment" },
      { label: "Service:", value: "Methodology alignment" },
    ],
    quote:
      "“My supervisor’s feedback stayed vague until we made the methods defendable. The alignment notes helped me justify sampling, controls, and a simple reporting sequence.”",
    outcome: "fewer revisions + clearer defense",
    details: {
      before:
        "method choices felt “random”; revisions kept looping.",
      after:
        "objective → method mapping + justification lines + feasible sampling.",
      bullets: [
        { k: "Common blocker:", v: "mismatch between question and design." },
        { k: "Typical fix researchers miss:", v: "defining 2–3 evaluation metrics upfront." },
        { k: "Modules used:", v: "Method-fit check, Analysis plan, Clarity editing." },
      ],
    },
    prefill: {
      stage: "Mid-stage",
      problem: "Methods don’t match the research question",
    },
    defaultExpanded: false,
  },
  {
    id: "t3",
    initials: "JM",
    author: "Postdoc (Health Sciences)",
    role: "Submitting stage",
    country: "USA",
    flag: "🇺🇸",
    chips: [
      { label: "Stage:", value: "Submitting" },
      { label: "Category:", value: "desk rejection" },
      { label: "Category:", value: "predatory publishing" },
      { label: "Service:", value: "Journal selection + submission" },
    ],
    quote:
      "“I was scared of desk rejection and worried about predatory journals. The shortlist + checklist helped me stop guessing and submit with confidence.”",
    outcome: "safer targets + clean submission pack",
    details: {
      before:
        "unclear scope match; formatting gaps; risky journal signals ignored.",
      after:
        "scope-fit shortlist + compliance checklist + submission-ready pack.",
      bullets: [
        { k: "Common blocker:", v: "journal mismatch → rapid desk rejection." },
        { k: "Typical fix researchers miss:", v: "matching aims/scope language to journal pages." },
        { k: "Modules used:", v: "Journal selection, Formatting check, Submission guidance." },
      ],
    },
    prefill: {
      stage: "Submitting",
      problem: "Desk rejection / journal mismatch",
    },
    defaultExpanded: false,
  },
];
