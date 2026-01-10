/* =========================================
   1) DATA (separate)
   File: src/sections/OutcomePicker/outcomePickerData.js
========================================= */

export const OUTCOME_PICKER = {
  heading: "Choose the right output in 10 seconds",
  subheading:
    "Answer 3 quick questions. We’ll recommend the best deliverable for your deadline, your use-case, and the file format you need (PPT, template, print-ready PDF, examples).",

  badge: "Smart recommendations",

  ctas: [
    { id: "quote", label: "Get a quote", href: "/get-quote", variant: "primary" },
    { id: "samples", label: "See examples", href: "/samples", variant: "ghost" },
  ],

  steps: [
    {
      id: "deadline",
      title: "1) What’s your deadline?",
      desc: "Helps us decide how much narrative + design polish we can include.",
      options: [
        { id: "48h", label: "48 hours" },
        { id: "week", label: "This week" },
        { id: "flex", label: "Flexible" },
      ],
      defaultValue: "week",
      labelMap: { "48h": "48 hours", week: "this week", flex: "flexible" },
    },
    {
      id: "use",
      title: "2) Where will it be used?",
      desc: "Different audiences need different story density.",
      options: [
        { id: "viva", label: "Viva / Defence" },
        { id: "conf", label: "Conference" },
        { id: "lab", label: "Lab update" },
        { id: "industry", label: "Industry R&D" },
      ],
      defaultValue: "viva",
      labelMap: {
        viva: "viva/defence",
        conf: "conference",
        lab: "lab update",
        industry: "industry R&D",
      },
    },
    {
      id: "have",
      title: "3) What do you have right now?",
      desc: "We’ll adapt the workflow based on your starting point.",
      options: [
        { id: "manuscript", label: "Manuscript" },
        { id: "draftppt", label: "Draft PPT" },
        { id: "figures", label: "Raw figures" },
      ],
      defaultValue: "manuscript",
      labelMap: { manuscript: "manuscript", draftppt: "draft PPT", figures: "raw figures" },
    },
  ],

  items: [
    {
      id: "defence",
      name: "Thesis Defence Presentation (PPT)",
      outcome:
        "A committee-ready story that makes your contribution obvious—without slide clutter.",
      format: "PPTX",
      tags: ["PhD viva", "Q&A-ready", "Slide template"],
      sampleHref: "/samples#defence",
    },
    {
      id: "poster",
      name: "Research Poster (A0/A1)",
      outcome:
        "A fast-reading poster format that gets your results understood in minutes.",
      format: "Print-ready",
      tags: ["A0/A1", "300 DPI", "Poster examples"],
      sampleHref: "/samples#poster",
    },
    {
      id: "talk",
      name: "Conference Talk Deck",
      outcome:
        "Story-first slides built to keep pace and land one key takeaway.",
      format: "PPTX",
      tags: ["Talk slides", "Timing flow", "Template"],
      sampleHref: "/samples#talk",
    },
    {
      id: "convert",
      name: "PPT-to-Poster Conversion",
      outcome:
        "Convert a draft PPT into a print-ready PDF without layout breaks or pixelation.",
      format: "PDF",
      tags: ["PPT → poster", "Print checks", "Format-safe"],
      sampleHref: "/samples#convert",
    },
    {
      id: "dataviz",
      name: "Charts & Data Visualization Cleanup",
      outcome:
        "Cleaner plots and labels so your data reads at first glance on screen or print.",
      format: "PPTX",
      tags: ["Figure format", "Consistent style", "Examples"],
      sampleHref: "/samples#dataviz",
    },
    {
      id: "pitch",
      name: "Industry R&D Pitch Deck",
      outcome:
        "Executive-readable slides that keep scientific credibility and decision clarity.",
      format: "PPTX",
      tags: ["Stakeholders", "Impact", "Template"],
      sampleHref: "/samples#pitch",
    },
  ],
};
