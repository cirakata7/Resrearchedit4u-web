const SUBJECTS = [
    {
        key: "eng",
        icon: "🛠️",
        nameLines: ["Engineering", "& Technology"],
        sideNote: "Applied & technical manuscripts",
        title: "Engineering & Technology",
        blurb:
            "Clear technical writing, methods transparency, and journal-aligned formatting for engineering and applied science manuscripts.",
        stats: [
            { label: "EDITED", value: "980+", sub: "Manuscripts refined" },
            { label: "JOURNAL MATCHES", value: "260+", sub: "Shortlists delivered" },
            { label: "ACCEPTANCES SUPPORTED", value: "48+", sub: "Submission outcomes" },
        ],
        improve: [
            "Technical clarity (methods, results, units, nomenclature).",
            "Structure & logic for faster reviewer comprehension.",
            "Figures/tables captions and journal formatting alignment.",
        ],
        subfields: ["Mechanical", "Civil", "Electrical", "Electronics", "Chemical", "Materials", "Energy", "Robotics"],
        downloadTitle: "Download a Engineering & Technology sample",
        downloadDesc:
            "Download an anonymised sample preview for this subject, illustrating editing depth, structure, and formatting standards (demo).",
    },
    {
        key: "med",
        icon: "🩺",
        nameLines: ["Medical &", "Health Sciences"],
        sideNote: "Clinical & health reporting",
        title: "Medical & Health Sciences",
        blurb:
            "Clinical writing and reporting clarity aligned with common journal expectations (checklists, structure, and consistency).",
        stats: [
            { label: "EDITED", value: "760+", sub: "Clinical manuscripts" },
            { label: "JOURNAL MATCHES", value: "210+", sub: "Scope-fit lists" },
            { label: "ACCEPTANCES SUPPORTED", value: "44+", sub: "Submission outcomes" },
        ],
        improve: [
            "Clarity of methods and outcomes reporting.",
            "Consistency in terminology, abbreviations, and tables.",
            "Submission readiness (formatting + cover-letter polishing).",
        ],
        subfields: ["Public Health", "Clinical Trials", "Epidemiology", "Nursing", "Pharmacy", "Epidemiology", "Radiology"],
        downloadTitle: "Download a Medical & Health Sciences sample",
        downloadDesc:
            "Download an anonymised sample preview for this subject, illustrating editing depth, structure, and formatting standards (demo).",
    },
    {
        key: "life",
        icon: "🧬",
        nameLines: ["Life Sciences", "& Biosciences"],
        sideNote: "Experimental & lab studies",
        title: "Life Sciences & Biosciences",
        blurb:
            "Precision in experimental descriptions, results interpretation, and figure/table clarity for bioscience manuscripts.",
        stats: [
            { label: "EDITED", value: "620+", sub: "Bioscience papers" },
            { label: "JOURNAL MATCHES", value: "170+", sub: "Target lists" },
            { label: "ACCEPTANCES SUPPORTED", value: "35+", sub: "Submission outcomes" },
        ],
        improve: [
            "Methods precision (reagents, conditions, reproducibility).",
            "Results narrative + discussion coherence.",
            "Figure/table captions and supplementary clarity.",
        ],
        subfields: ["Biotech", "Microbiology", "Genetics", "Molecular Biology", "Ecology", "Plant Science", "Zoology", "Bioinformatics"],
        downloadTitle: "Download a Life Sciences & Biosciences sample",
        downloadDesc:
            "Download an anonymised sample preview for this subject, illustrating editing depth, structure, and formatting standards (demo).",
    },
    {
        key: "cs",
        icon: "💻",
        nameLines: ["Computer", "Science, Data & AI"],
        sideNote: "Models, experiments, evaluation",
        title: "Computer Science, Data & AI",
        blurb:
            "Clarity for models, experiments, and evaluation reporting across CS / AI manuscripts and conference-style submissions.",
        stats: [
            { label: "EDITED", value: "410+", sub: "AI/CS papers" },
            { label: "JOURNAL MATCHES", value: "120+", sub: "Conference/journal fit" },
            { label: "ACCEPTANCES SUPPORTED", value: "18+", sub: "Submission outcomes" },
        ],
        improve: [
            "Experiment reporting and reproducibility clarity.",
            "Model + dataset descriptions and evaluation framing.",
            "Language polish without changing technical meaning.",
        ],
        subfields: ["Machine Learning", "Data Science", "Algorithms", "Cybersecurity", "Software Engg", "Networks", "HCL", "NLP"],
        downloadTitle: "Download a Computer Science, Data & AI sample",
        downloadDesc:
            "Download an anonymised sample preview for this subject, illustrating editing depth, structure, and formatting standards (demo).",
    },
    {
        key: "chem",
        icon: "⚗️",
        nameLines: ["Chemistry &", "Chemical Sciences"],
        sideNote: "Synthesis, analysis, spectroscopy",
        title: "Chemistry & Chemical Sciences",
        blurb:
            "Precision in methods and characterisation, strong results discussion, and formatting aligned with chemistry journal norms.",
        stats: [
            { label: "EDITED", value: "330+", sub: "SS/H papers" },
            { label: "JOURNAL MATCHES", value: "95+", sub: "Scope-fit lists" },
            { label: "ACCEPTANCES SUPPORTED", value: "16+", sub: "Submission outcomes" },
        ],
        improve: [
            "Argument structure and logical transitions.",
            "Methods/analysis clarity for qualitative or mixed designs.",
            "Language tone refinement and citation consistency.",
        ],
        subfields: ["Analytical", "Organic", "Inorganic", "Physical", "Polymer", "Materials Chemistry", "Spectroscopy"],
        downloadTitle: "Download a Social Sciences & Humanities sample",
        downloadDesc:
            "Download an anonymised sample preview for this subject, illustrating editing depth, structure, and formatting standards (demo).",
    },
    {
        key: "env",
        icon: "🌱",
        nameLines: ["Environmental &", "Earth Sciences"],
        sideNote: "Field + lab + modelling studies",
        title: "Environmental & Earth Sciences",
        blurb:
            "Clear methods and site descriptions, robust reporting of uncertainty, and clean structure for interdisciplinary environmental work.",
        stats: [
            { label: "EDITED", value: "290+", sub: "SS/H papers" },
            { label: "JOURNAL MATCHES", value: "85+", sub: "Scope-fit lists" },
            { label: "ACCEPTANCES SUPPORTED", value: "14+", sub: "Submission outcomes" },
        ],
        improve: [
            "Argument structure and logical transitions.",
            "Methods/analysis clarity for qualitative or mixed designs.",
            "Language tone refinement and citation consistency.",
        ],
        subfields: ["Environmental Science", "Earth Systems", "Hydrology", "Climate", "Geochemistry", "GIS/Remote Sensing"],
        downloadTitle: "Download a Social Sciences & Humanities sample",
        downloadDesc:
            "Download an anonymised sample preview for this subject, illustrating editing depth, structure, and formatting standards (demo).",
    },
    {
        key: "bus",
        icon: "📊",
        nameLines: ["Business, Management &", "Economics"],
        sideNote: "Theory, models, reporting",
        title: "Business Management & Economics",
        blurb:
            "Sharper theoretical framing, stronger results reporting, and journal fit for business and economics manuscripts.",
        stats: [
            { label: "EDITED", value: "210+", sub: "SS/H papers" },
            { label: "JOURNAL MATCHES", value: "70+", sub: "Scope-fit lists" },
            { label: "ACCEPTANCES SUPPORTED", value: "10+", sub: "Submission outcomes" },
        ],
        improve: [
            "Argument structure and logical transitions.",
            "Methods/analysis clarity for qualitative or mixed designs.",
            "Language tone refinement and citation consistency.",
        ],
        subfields: ["Management", "Finance", "Marketing", "Strategy", "Operations", "Econometrics", "Policy"],
        downloadTitle: "Download a Social Sciences & Humanities sample",
        downloadDesc:
            "Download an anonymised sample preview for this subject, illustrating editing depth, structure, and formatting standards (demo).",
    },
    {
        key: "soc",
        icon: "🧠",
        nameLines: ["Social Sciences &", "Education"],
        sideNote: "Methods clarity + argument flow",
        title: "Social Sciences & Humanities",
        blurb:
            "Methods clarity, argument structure, and improved coherence for qualitative and mixed-methods social science research.",
        stats: [
            { label: "EDITED", value: "190+", sub: "SS/H papers" },
            { label: "JOURNAL MATCHES", value: "60+", sub: "Scope-fit lists" },
            { label: "ACCEPTANCES SUPPORTED", value: "9+", sub: "Submission outcomes" },
        ],
        improve: [
            "Argument structure and logical transitions.",
            "Methods/analysis clarity for qualitative or mixed designs.",
            "Language tone refinement and citation consistency.",
        ],
        subfields: ["Psychology", "Education", "Sociology", "Economics", "Communication", "Law", "Policy", "Media Studies"],
        downloadTitle: "Download a Social Sciences & Humanities sample",
        downloadDesc:
            "Download an anonymised sample preview for this subject, illustrating editing depth, structure, and formatting standards (demo).",
    },
    {
        key: "art",
        icon: "🎭",
        nameLines: ["Art &", "Humanities"],
        sideNote: "Qualitative writing + critical framing",
        title: "Art & Humanities",
        blurb:
            "Clean argumentation, critical framing, and language refinement aligned with humanities expectations and reviewer preferences.",
        stats: [
            { label: "EDITED", value: "120+", sub: "SS/H papers" },
            { label: "JOURNAL MATCHES", value: "40+", sub: "Scope-fit lists" },
            { label: "ACCEPTANCES SUPPORTED", value: "6+", sub: "Submission outcomes" },
        ],
        improve: [
            "Argument structure and logical transitions.",
            "Methods/analysis clarity for qualitative or mixed designs.",
            "Language tone refinement and citation consistency.",
        ],
        subfields: ["Linguistics", "Literature", "Philosophy", "History", "Cultural Studies", "Ethics",],
        downloadTitle: "Download a Social Sciences & Humanities sample",
        downloadDesc:
            "Download an anonymised sample preview for this subject, illustrating editing depth, structure, and formatting standards (demo).",
    },
];
export default SUBJECTS;