// src/data/howItWorks.data.js

export const HOW_IT_WORKS = {
  kicker: "HOW IT WORKS",
  title: "Clear roles, no confusion",
  sub: 'Click any "You" step — the "We" card opens right beside it (no cut-off).',
  hint: {
    text: 'Tap a "You" row → see "We".',
    youLabel: "You",
    weLabel: "We",
  },
  trust: {
    text: "Integrity-first support — you remain the author.",
    chips: [
      { tone: "blue", label: "Confidential" },
      { tone: "teal", label: "Ethical" },
      { tone: "gold", label: "Supervisor-ready clarity" },
    ],
  },
  steps: [
    {
      id: "s1",
      no: "1",
      label: "Share",
      youTitle: "Choose your stage + module",
      youText: "Write a 1–3 line query. Upload is optional.",
      weTitle: "Confirm what you need",
      weText: "We ask only essential follow-ups so we scope correctly.",
    },
    {
      id: "s2",
      no: "2",
      label: "Scope",
      youTitle: "Approve the scope",
      youText: "Confirm timeline + deliverables before anything starts.",
      weTitle: "Send a clear plan",
      weText: "Best-fit module, price range, timeline, and concrete deliverables.",
    },
    {
      id: "s3",
      no: "3",
      label: "Deliver",
      youTitle: "Review the deliverables",
      youText: "Use the draft/structure/plan to move forward immediately.",
      weTitle: "Deliver supervisor-ready clarity",
      weText: "Clean writing, logical flow, and defensible methodology language.",
    },
    {
      id: "s4",
      no: "4",
      label: "Support revisions",
      youTitle: "Share comments (if any)",
      youText: "Forward supervisor/reviewer feedback for the next iteration.",
      weTitle: "Help you implement feedback",
      weText: "Revisions within agreed scope — calm, clear, and defensible.",
    },
  ],
};
