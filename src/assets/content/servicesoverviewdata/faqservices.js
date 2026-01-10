// src/data/faq.data.js

export const FAQ_CATEGORIES = [
  { key: "all", label: "All" },
  { key: "timeline", label: "Timeline" },
  { key: "confidentiality", label: "Confidentiality" },
  { key: "revisions", label: "Revisions" },
  { key: "inputs", label: "What we need" },
  { key: "ethics", label: "Ethics" },
];

export const FAQ_ITEMS = [
  {
    id: "faq1",
    cat: "timeline",
    q: "How fast can you deliver — and what affects the timeline?",
    a:
      "We share a realistic timeline after scoping your stage, deadline, and complexity — so you don’t get surprised later.",
    bullets: [
      { strong: "Faster", text: " when your goal is clear and you have a draft/notes." },
      { strong: "Slower", text: " when methods need redesign or multiple formats are required (IRB/HREC/REC)." },
      { strong: "Best practice:", text: " share your deadline + current stage so we can plan cleanly." },
    ],
    note:
      "If you leave deadline blank, we’ll suggest a timeline that’s feasible — not rushed.",
  },
  {
    id: "faq2",
    cat: "confidentiality",
    q: "Is my proposal / data confidential? Do you share it with anyone?",
    a:
      "Yes — your materials are used only for scoping and delivery. We don’t publish, resell, or “reuse” content.",
    bullets: [
      { strong: "", text: "Only the assigned team works on your files." },
      { strong: "", text: "You can upload optionally — a short query is enough to start scoping." },
      { strong: "", text: "We focus on clarity and defensible planning — you remain the author." },
    ],
    note:
      "If needed, you can remove identifiers (names, IDs) before uploading — we can still scope accurately.",
  },
  {
    id: "faq3",
    cat: "revisions",
    q: "Do you support revisions if my supervisor asks for changes?",
    a:
      "Yes — revisions are supported within the agreed scope, so feedback doesn’t derail you.",
    bullets: [
      { strong: "", text: "We help you interpret comments and prioritize what matters." },
      { strong: "", text: "We refine structure, methods language, and justification — without changing your research ownership." },
      { strong: "", text: "If the scope changes significantly, we’ll propose the next best module (transparent)." },
    ],
    note:
      "A “revision plan” is included in the scope reply, so you know what happens next.",
  },
  {
    id: "faq4",
    cat: "inputs",
    q: "What do you need from me to start? Do I need a full draft?",
    a:
      "You don’t need a full draft. A 1–2 line query + your stage is enough to recommend the next step.",
    bullets: [
      { strong: "", text: "Goal (topic/gap, proposal drafting, methodology, ethics/feasibility)." },
      { strong: "", text: "Your stage (planning / mid-stage / submitting) and any deadline." },
      { strong: "", text: "Optional: draft, outline, supervisor comments, university format." },
    ],
    note:
      "Uploads are optional — share only what you’re comfortable sharing.",
  },
  {
    id: "faq5",
    cat: "ethics",
    q: "Do you “write it for me”? What ethical support do you provide?",
    a:
      "We provide planning, structure, clarity, and defensibility support — so your proposal is stronger, while you remain the author.",
    bullets: [
      { strong: "", text: "We don’t support misconduct or deceptive authorship." },
      { strong: "", text: "We help you express your own work clearly (academic tone, justification, feasibility)." },
      { strong: "", text: "We align terminology to your region (IRB/HREC/REC) and institution formats." },
    ],
    note:
      "If you have an ethics committee or supervisor checklist, share it — we’ll align to it.",
  },
];
