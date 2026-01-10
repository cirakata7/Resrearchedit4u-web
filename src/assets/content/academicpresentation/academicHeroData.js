import slide4 from '../../images/slide4.webp';


export const ACADEMIC_HERO = {
  kicker: "ACADEMIC PRESENTATIONS",
  title: "Academic presentations & research posters — plus grant/proposal decks",
  subtitle:
    "Designed for clarity, credibility, and confidence: thesis defence slides, conference posters, and proposal presentations that persuade.",

  ctas: {
    primary: { label: "Get a Quote", href: "/get-quote" },
    secondary: { label: "View samples", href: "/samples" },
  },

  chips: [
    {
      id: "thesis",
      label: "Thesis defence PPT",
      topBadge: "Designed by experts",
      bottomPills: ["Deck", "Editable"],
      // set your real image path here
      imageSrc: "/img/academic/thesis-preview.jpg",
      imageAlt: "Thesis defence slides preview",
    },
    {
      id: "poster",
      label: "Research posters",
      topBadge: "Real-world outputs",
      bottomPills: ["Poster", "A0/A1"],
      imageSrc: "/img/academic/poster-preview.jpg",
      imageAlt: "Research poster preview",
    },
    {
      id: "proposal",
      label: "Grant / proposal decks",
      topBadge: "Real-world outputs",
      bottomPills: ["Proposal", "Pitch"],
      imageSrc: "/img/academic/proposal-preview.jpg",
      imageAlt: "Grant proposal deck preview",
    },
  ],

  trustPills: [{ id: "noghost", label: "No ghostwriting" }],

  features: [
    { id: "secure", left: "Secure file handling", right: "NDA available" },
    { id: "print", left: "Print-safe outputs", right: "A0/A1 • 36×48" },
  ],

  // fallback image if chip image missing
  fallbackImage: {
    src: slide4,
    alt: "Academic design preview",
  },
};
