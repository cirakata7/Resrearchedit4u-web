/* =========================================
   1) DATA (separate)
   File: src/sections/AudienceStrip/audienceStripData.js
========================================= */

export const AUDIENCE_STRIP = {
  heading: "Made for your next milestone",
  subheading:
    "Select what describes you right now. We’ll bring the most relevant service options to the top.",

  personas: [
    { id: "phd", label: "PhD / Viva" },
    { id: "conference", label: "Conference Presenter" },
    { id: "lab", label: "Lab / Team Update" },
    { id: "industry", label: "Industry R&D" },
  ],

  metaRight: ["Click to reorder below"],

  servicesHeadingPrefix: "Recommended services (reordered for ",

  tiles: [
    {
      id: "thesis",
      kickerPills: ["Best for", "Defence narrative"],
      title: "Thesis Defence Presentation",
      desc:
        "Turn chapters into a clean story: problem, method, results, and your core contribution—ready for viva questions.",
      leftFoot: "Editable PPTX + PDF",
      ctaLabel: "Get a quote →",
      ctaHref: "/get-quote",
      scores: { phd: 100, conference: 55, lab: 70, industry: 40 },
    },
    {
      id: "poster",
      kickerPills: ["Best for", "Conference poster"],
      title: "Research Poster Design",
      desc:
        "A0/A1 print-ready layout with readable figures and a clear flow—so your results land fast in a busy hall.",
      leftFoot: "300 DPI, printer-safe",
      ctaLabel: "Get a quote →",
      ctaHref: "/get-quote",
      scores: { phd: 85, conference: 100, lab: 50, industry: 60 },
    },
    {
      id: "talk",
      kickerPills: ["Best for", "Talk slides"],
      title: "Conference Deck (Talk)",
      desc:
        "Story-first slides with clean data visuals, speaker notes, and time-safe pacing—built for global audiences.",
      leftFoot: "Slide flow + visuals",
      ctaLabel: "Get a quote →",
      ctaHref: "/get-quote",
      scores: { phd: 70, conference: 95, lab: 60, industry: 65 },
    },
    {
      id: "labupdate",
      kickerPills: ["Best for", "Weekly updates"],
      title: "Lab / Team Update Deck",
      desc:
        "Consistent template system for weekly results, milestones, blockers, and next steps—fast to maintain.",
      leftFoot: "Reusable template",
      ctaLabel: "Get a quote →",
      ctaHref: "/get-quote",
      scores: { phd: 60, conference: 50, lab: 100, industry: 70 },
    },
    {
      id: "pitch",
      kickerPills: ["Best for", "Stakeholder pitch"],
      title: "Industry R&D Pitch Deck",
      desc:
        "Problem → evidence → solution → impact, with executive readability and disciplined scientific credibility.",
      leftFoot: "Exec-friendly",
      ctaLabel: "Get a quote →",
      ctaHref: "/get-quote",
      scores: { phd: 45, conference: 40, lab: 65, industry: 100 },
    },
    {
      id: "dataviz",
      kickerPills: ["Best for", "Figure cleanup"],
      title: "Charts & Data Visualization",
      desc:
        "Fix cluttered plots, improve labeling, and create consistent figure styles—so your data is instantly readable.",
      leftFoot: "Clean labels",
      ctaLabel: "Get a quote →",
      ctaHref: "/get-quote",
      scores: { phd: 75, conference: 80, lab: 85, industry: 90 },
    },
  ],
};
