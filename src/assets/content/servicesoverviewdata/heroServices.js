// src/components/re4uHeroData.jsx
import hero1 from "../../images/ai.webp";
import hero2 from "../../images/ai.webp";
import hero3 from "../../images/ai.webp";
import hero4 from "../../images/ai.webp";
import hero5 from "../../images/ai.webp";

export const RE4U_HERO_INTERVAL_MS = 9000;

export const RE4U_HERO_SLIDES = [
  {
    stage: "Planning",
    toolkit: "proposal",
    chips: ["Planning", "research proposal support", "research gap analysis"],
    h1: "Struggling to turn your research idea into an approved proposal?",
    h2: "Build a supervisor-ready structure with clear objectives and a defensible research gap.",
    p: "Get expert-led {{kw:research proposal support}} with {{kw:research gap analysis}}, research questions, feasibility, and ethics-aware framing—confidential and integrity-first.",
    modalCtx: "Proposal approval",
    micro: ["Confidential", "Typical reply 24–72h", "Scope-based pricing"],
    img: hero1,
    imgAlt: "Proposal support workspace",
  },
  {
    stage: "Planning",
    toolkit: "methods",
    chips: ["Planning", "research design & methodology support", "IRB/HREC/REC"],
    h1: "Methodology not matching objectives? That’s the #1 approval blocker.",
    h2: "Align design, sampling, tools, and analysis—so supervisors see feasibility and rigor.",
    p: "Get {{kw:research design & methodology support}} for sampling logic, instruments/tools, and an analysis pathway that fits your research questions and ethics requirements.",
    modalCtx: "Methodology alignment",
    micro: ["Confidential", "Clear scope reply", "Timeline estimate"],
    img: hero2,
    imgAlt: "Methodology planning desk",
  },
  {
    stage: "Mid-stage",
    toolkit: "data",
    chips: ["Mid-stage", "research data analysis services", "statistical analysis help"],
    h1: "Results messy or hard to explain? Make reporting publication-ready.",
    h2: "Turn raw outputs into clear tables, figures, and an analysis narrative reviewers understand.",
    p: "Use {{kw:research data analysis services}} and {{kw:statistical analysis help}} plus {{kw:tables and figures formatting}} so your findings are communicated with clarity and structure.",
    modalCtx: "Data & reporting",
    micro: ["Confidential", "Scope-based pricing", "Actionable next steps"],
    img: hero3,
    imgAlt: "Data analysis setup",
  },
  {
    stage: "Submitting",
    toolkit: "editing",
    chips: ["Submitting", "academic editing services", "manuscript editing service"],
    h1: "“Unclear writing” comments even when the science is solid?",
    h2: "Improve clarity, flow, and academic tone—without changing meaning.",
    p: "Use {{kw:academic editing services}} / {{kw:manuscript editing service}} to strengthen logic, coherence, and readability while keeping your research voice intact.",
    modalCtx: "Editing & clarity",
    micro: ["Integrity-first", "No meaning change", "Revision-ready plan"],
    img: hero4,
    imgAlt: "Editing workspace",
  },
  {
    stage: "Submitting",
    toolkit: "journal",
    chips: ["Submitting", "journal selection service", "response to reviewers support"],
    h1: "Not sure which journal fits—or tired of desk rejections?",
    h2: "Choose journals with scope-fit and prepare a submission-ready package and revision plan.",
    p: "Get {{kw:journal selection service}}, {{kw:publication support services}}, and {{kw:response to reviewers support}} to improve fit, readiness, and revision confidence.",
    modalCtx: "Journal fit & revisions",
    micro: ["Scope-fit first", "Submission checklist", "Revision-ready reply"],
    img: hero5,
    imgAlt: "Journal selection desk",
  },
];
