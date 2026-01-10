import React, { useEffect, useMemo, useState } from "react";
import "../style/style.css";

const POSTS = [
  {
    id: "p1",
    kind: "Guide",
    type: "Checklist",
    stage: "Idea → Proposal",
    problem: "Clarity & Scope",
    title: "Abstracts that survive an editor skim",
    desc: "A practical checklist to tighten aim, methods, and results in 150–250 words—without overselling.",
    author: "RE4U Editorial",
    date: "2025-11-30",
    tags: ["abstract", "scope", "clarity"],
    href: "#",
  },
  {
    id: "p2",
    kind: "Guide",
    type: "Framework",
    stage: "Journal Selection",
    problem: "Journal Fit",
    title: "How to choose the right journal (without wasting months)",
    desc: "A fit-first framework: scope alignment, indexing, audience, and review timelines—plus red flags to avoid.",
    author: "RE4U Editorial",
    date: "2025-10-18",
    tags: ["journal", "fit", "indexing"],
    href: "#",
  },
  {
    id: "p3",
    kind: "Series",
    type: "Clarity",
    stage: "Submission",
    problem: "Similarity / Plagiarism",
    title: "Similarity scores explained (and what editors actually check)",
    desc: "Interpret similarity the right way: overlap sources, thresholds, exclusions, and how to reduce risk ethically.",
    author: "RE4U Integrity Team",
    date: "2025-12-05",
    tags: ["similarity", "plagiarism", "ethics"],
    href: "#",
  },
  {
    id: "p4",
    kind: "Download",
    type: "Template",
    stage: "Peer Review",
    problem: "Response to Reviewers",
    title: "Rebuttal letters that don’t sound defensive (with examples)",
    desc: "Download-ready structure for point-by-point responses, tone control, and evidence-led revisions.",
    author: "RE4U Editorial",
    date: "2025-11-12",
    tags: ["rebuttal", "peer review", "template"],
    href: "#",
  },
  {
    id: "p5",
    kind: "Guide",
    type: "Guide",
    stage: "Submission",
    problem: "Desk Rejection",
    title: "Desk rejection: 6 common reasons and how to fix them",
    desc: "From scope mismatch to novelty claims—diagnose quickly, revise efficiently, and resubmit strategically.",
    author: "RE4U Editorial",
    date: "2025-09-02",
    tags: ["desk rejection", "scope", "strategy"],
    href: "#",
  },
  {
    id: "p6",
    kind: "Guide",
    type: "Policy",
    stage: "Ethics & Declarations",
    problem: "AI Disclosure",
    title: "AI disclosure: what to write and where (simple language)",
    desc: "Practical disclosure templates aligned to common journal policies, plus what not to claim.",
    author: "RE4U Integrity Team",
    date: "2025-12-10",
    tags: ["ai", "disclosure", "ethics"],
    href: "#",
  },
  {
    id: "p7",
    kind: "Guide",
    type: "Checklist",
    stage: "Pre-Submission Checks",
    problem: "Formatting / Compliance",
    title: "Formatting & technical checks before submitting",
    desc: "A short preflight list: journal template compliance, figure resolution, references, and metadata.",
    author: "RE4U Editorial",
    date: "2025-08-21",
    tags: ["formatting", "figures", "references"],
    href: "#",
  },
  {
    id: "p8",
    kind: "Series",
    type: "Methods",
    stage: "Writing Methods",
    problem: "Reproducibility",
    title: "Methods section: write so others can reproduce your work",
    desc: "A series starter on structure, materials, parameters, and reporting checklists (CONSORT/PRISMA/STROBE).",
    author: "RE4U Editorial",
    date: "2025-07-10",
    tags: ["methods", "reporting", "reproducibility"],
    href: "#",
  },
  {
    id: "p9",
    kind: "Download",
    type: "Template",
    stage: "Peer Review",
    problem: "Revision Planning",
    title: "Revision tracker template (Excel/Sheets layout)",
    desc: "Track comments, decisions, changes, and evidence. Keeps co-authors aligned and reviewers satisfied.",
    author: "RE4U Editorial",
    date: "2025-10-30",
    tags: ["revision", "tracker", "workflow"],
    href: "#",
  },
  {
    id: "p10",
    kind: "Guide",
    type: "Clarity",
    stage: "Discussion & Conclusion",
    problem: "Overclaiming",
    title: "Discussion writing: avoid overclaiming while still sounding strong",
    desc: "Language patterns that communicate confidence without exaggeration, plus limitation framing.",
    author: "RE4U Editorial",
    date: "2025-06-14",
    tags: ["discussion", "claims", "limitations"],
    href: "#",
  },
  {
    id: "p11",
    kind: "Series",
    type: "Career",
    stage: "Research Career",
    problem: "Time Management",
    title: "PhD weekly writing system (realistic, not motivational)",
    desc: "A low-friction routine to keep momentum: goals, buffers, and quick wins—built for busy schedules.",
    author: "RE4U Editorial",
    date: "2025-12-01",
    tags: ["phd", "writing", "productivity"],
    href: "#",
  },
  {
    id: "p12",
    kind: "Download",
    type: "Checklist",
    stage: "Journal Selection",
    problem: "Predatory Journals",
    title: "Predatory journal screening checklist",
    desc: "A fast way to assess legitimacy: indexing checks, editorial transparency, APC signals, and scams.",
    author: "RE4U Integrity Team",
    date: "2025-11-22",
    tags: ["predatory", "journals", "checklist"],
    href: "#",
  },
];

const MODES = {
  stages: { label: "Stages", chipKey: "stage" },
  problems: { label: "Problems", chipKey: "problem" },
  downloads: { label: "Downloads", chipKey: "type" },
  latest: { label: "Latest", chipKey: "tag" },
};

function uniq(arr) {
  return Array.from(new Set(arr)).filter(Boolean);
}
function norm(s) {
  return (s || "").toString().toLowerCase();
}

export default function Remind() {
  const [mode, setMode] = useState("stages");
  const [chip, setChip] = useState("All");
  const [q, setQ] = useState("");
  const [format, setFormat] = useState("All");

  useEffect(() => setChip("All"), [mode]);

  const chips = useMemo(() => {
    if (mode === "latest") {
      const tags = uniq(POSTS.flatMap((p) => p.tags || []));
      return ["All", ...tags.slice(0, 12)];
    }
    const key = MODES[mode].chipKey;
    return ["All", ...uniq(POSTS.map((p) => p[key]))];
  }, [mode]);

  const filtered = useMemo(() => {
    const byMode = (p) => {
      if (mode === "downloads") return p.kind === "Download";
      if (mode === "latest") return true;
      if (mode === "stages") return Boolean(p.stage);
      if (mode === "problems") return Boolean(p.problem);
      return true;
    };

    const byChip = (p) => {
      if (chip === "All") return true;
      if (mode === "latest") return (p.tags || []).includes(chip);
      const key = MODES[mode].chipKey;
      return p[key] === chip;
    };

    const byFormat = (p) => (format === "All" ? true : p.kind === format);

    const byQuery = (p) => {
      const needle = norm(q).trim();
      if (!needle) return true;
      const hay = [
        p.title,
        p.desc,
        p.author,
        p.kind,
        p.type,
        p.stage,
        p.problem,
        ...(p.tags || []),
      ]
        .map(norm)
        .join(" ");
      return hay.includes(needle);
    };

    return POSTS.filter(byMode)
      .filter(byChip)
      .filter(byFormat)
      .filter(byQuery)
      .slice()
      .sort((a, b) => norm(b.date).localeCompare(norm(a.date)));
  }, [mode, chip, format, q]);

  const onBrandClick = () => {
    setQ("");
    setFormat("All");
    setMode("stages");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onSearchKeyDown = (e) => {
    if (e.key === "Escape") setQ("");
  };

  const [checkMsg, setCheckMsg] = useState("");
  const [newsMsg, setNewsMsg] = useState("");
  const [reqMsg, setReqMsg] = useState("");

  const submitFreeCheck = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = (fd.get("name") || "").toString().trim();
    const email = (fd.get("email") || "").toString().trim();
    if (!name || !email.includes("@")) {
      setCheckMsg("Please enter a valid name and email.");
      return;
    }
    setCheckMsg("Request received. We will contact you shortly.");
    e.currentTarget.reset();
  };

  const submitNewsletter = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = (fd.get("email") || "").toString().trim();
    if (!email.includes("@")) {
      setNewsMsg("Please enter a valid email.");
      return;
    }
    setNewsMsg("Subscribed. Please check your inbox.");
    e.currentTarget.reset();
  };

  const submitRequest = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const type = (fd.get("type") || "").toString().trim();
    const email = (fd.get("email") || "").toString().trim();
    const text = (fd.get("text") || "").toString().trim();
    if (!type || !email.includes("@") || text.length < 3) {
      setReqMsg("Please complete all fields (valid email).");
      return;
    }
    setReqMsg("Request sent. Thank you.");
    e.currentTarget.reset();
  };

  return (
    <div className="rmHub__page">
      {/* Navbar */}
      <header className="rmHub__navbar" role="banner">
        <div className="rmHub__wrap">
          <div className="rmHub__navrow">
            <button
              className="rmHub__brand"
              onClick={onBrandClick}
              type="button"
              aria-label="ResearchEdit4U Knowledge Hub"
            >
              <span className="rmHub__logo">R</span>
              <span className="rmHub__brandText">
                ResearchEdit4U <small>Knowledge Hub</small>
              </span>
            </button>

            <nav className="rmHub__navlinks" aria-label="Primary navigation">
              <button type="button" className={mode === "stages" ? "isActive" : ""} onClick={() => setMode("stages")}>
                Stages
              </button>
              <button type="button" className={mode === "problems" ? "isActive" : ""} onClick={() => setMode("problems")}>
                Problems
              </button>
              <button type="button" className={mode === "downloads" ? "isActive" : ""} onClick={() => setMode("downloads")}>
                Downloads
              </button>
              <button type="button" className={mode === "latest" ? "isActive" : ""} onClick={() => setMode("latest")}>
                Latest
              </button>
            </nav>

            <div className="rmHub__actions">
              <button
                className="rmHub__iconbtn"
                type="button"
                aria-label="Search"
                onClick={() => document.getElementById("rmHub_q")?.focus()}
              >
                🔎
              </button>
              <button className="rmHub__cta" type="button" onClick={() => document.getElementById("rmHub_checkName")?.focus()}>
                Get Free Check
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="rmHub__hero">
        <div className="rmHub__wrap">
          <div className="rmHub__heroShell">
            <div className="rmHub__heroGrid">
              <div className="rmHub__heroLeft">
                <div>
                  <div className="rmHub__kicker">
                    <span className="rmHub__dot" /> PUBLICATION ROADMAP
                  </div>
                  <h1>Your publication roadmap — from idea to acceptance.</h1>
                  <p>
                    Clear guides, templates, and problem-solvers for each step. Choose <b>Stages</b>, <b>Problems</b>,{" "}
                    <b>Downloads</b>, or <b>Latest</b> — then filter below.
                  </p>

                  <div className="rmHub__roadmapImg" aria-hidden="true">
                    <div className="rmHub__heroArt" />
                  </div>
                </div>

                <div className="rmHub__smallnote">
                  Tip: Use the search bar to find “desk rejection”, “rebuttal”, “journal fit”.
                </div>
              </div>

              <div className="rmHub__heroRight">
                <h3>Get a free 5-minute “fit” check</h3>
                <ul className="rmHub__bullets">
                  <li>Scope alignment + journal fit signals</li>
                  <li>Top 3 reasons for desk rejection risk</li>
                  <li>Quick fixes you can implement today</li>
                </ul>

                <form onSubmit={submitFreeCheck} noValidate>
                  <div className="rmHub__field">
                    <label htmlFor="rmHub_checkName">Full name</label>
                    <input className="rmHub__input" id="rmHub_checkName" name="name" placeholder="Your name" required />
                  </div>
                  <div className="rmHub__field">
                    <label htmlFor="rmHub_checkEmail">Email</label>
                    <input className="rmHub__input" id="rmHub_checkEmail" name="email" type="email" placeholder="you@example.com" required />
                  </div>
                  <div className="rmHub__field">
                    <label htmlFor="rmHub_checkLink">Paper / draft link (optional)</label>
                    <input className="rmHub__input" id="rmHub_checkLink" name="link" placeholder="Google Drive / Dropbox / URL" />
                  </div>
                  <button className="rmHub__primaryBtn" type="submit">
                    Request Free Check
                  </button>
                  <div className="rmHub__msg" aria-live="polite">
                    {checkMsg}
                  </div>
                </form>
              </div>
            </div>

            {/* Mode buttons */}
            <div className="rmHub__modeRow">
              <div className="rmHub__modeBtns" aria-label="Mode selection">
                <button type="button" className={mode === "stages" ? "isActive" : ""} onClick={() => setMode("stages")}>
                  🧭 Browse by Stages
                </button>
                <button type="button" className={mode === "problems" ? "isActive" : ""} onClick={() => setMode("problems")}>
                  🛠 Solve a Problem
                </button>
                <button type="button" className={mode === "downloads" ? "isActive" : ""} onClick={() => setMode("downloads")}>
                  📥 Download Templates
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className="rmHub__filterbar" role="region" aria-label="Filters and search">
              <div className="rmHub__chips" aria-label="Chips">
                {chips.map((c) => (
                  <button
                    key={c}
                    type="button"
                    className={`rmHub__chip ${chip === c ? "isActive" : ""}`}
                    onClick={() => setChip(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>

              <div className="rmHub__tools">
                <div className="rmHub__pill" role="search" aria-label="Search">
                  <span>🔎</span>
                  <input
                    id="rmHub_q"
                    type="search"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    onKeyDown={onSearchKeyDown}
                    placeholder="Search (e.g., desk reject, rebuttal, journal)"
                  />
                </div>

                <select value={format} onChange={(e) => setFormat(e.target.value)} aria-label="Format filter">
                  <option value="All">Format: All</option>
                  <option value="Guide">Format: Guides</option>
                  <option value="Series">Format: Series</option>
                  <option value="Download">Format: Downloads</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="rmHub__content" aria-label="Content">
        <div className="rmHub__wrap">
          <div className="rmHub__meta">
            Showing <b>{filtered.length}</b> items • Mode: <b>{MODES[mode].label}</b>
          </div>

          <div className="rmHub__grid">
            {filtered.length === 0 ? (
              <div className="rmHub__empty">No matches. Try clearing filters or using broader search terms.</div>
            ) : (
              filtered.map((p) => (
                <a className="rmHub__card" key={p.id} href={p.href} aria-label={p.title}>
                  <div className="rmHub__thumb" aria-hidden="true" />
                  <div className="rmHub__body">
                    <span className={`rmHub__badge ${p.kind === "Series" ? "isSeries" : ""}`}>
                      <span className="rmHub__dot" />
                      {p.kind}
                    </span>

                    <div className="rmHub__title">{p.title}</div>
                    <p className="rmHub__desc">{p.desc}</p>

                    <div className="rmHub__kv">
                      {p.stage ? <span>{p.stage}</span> : null}
                      {p.problem ? <span>{p.problem}</span> : null}
                      {p.type ? <span>{p.type}</span> : null}
                    </div>

                    <div className="rmHub__bottom">
                      <span>
                        {p.author} • {p.date}
                      </span>
                      <span className="rmHub__open">
                        <span className="rmHub__pillbtn">↗</span>Open
                      </span>
                    </div>
                  </div>
                </a>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="rmHub__footer">
        <div className="rmHub__footerAction">
          <form className="rmHub__fcard" onSubmit={submitNewsletter} noValidate>
            <h3>Stay updated</h3>
            <p>Publishing rules, reviews & templates — no spam.</p>
            <input type="email" name="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
            <small className="rmHub__fmsg" aria-live="polite">
              {newsMsg}
            </small>
          </form>

          <form className="rmHub__fcard" onSubmit={submitRequest} noValidate>
            <h3>Can’t find what you need?</h3>
            <p>Request a webinar, template, or guide.</p>
            <select name="type" required defaultValue="">
              <option value="">Request type</option>
              <option value="Guide">Guide</option>
              <option value="Template">Template</option>
              <option value="Webinar">Webinar</option>
              <option value="Other">Other</option>
            </select>
            <input type="email" name="email" placeholder="Your email" required />
            <input type="text" name="text" placeholder="What do you need (1–2 lines)?" required />
            <button type="submit">Send request</button>
            <small className="rmHub__fmsg" aria-live="polite">
              {reqMsg}
            </small>
          </form>
        </div>

        <div className="rmHub__footerMid">
          <div className="rmHub__fbrand">
            <div className="rmHub__flogo">R</div>
            <div>
              <div className="rmHub__fbrandTitle">ResearchEdit4U</div>
              <div className="rmHub__smallnote">Ethics-first editing, formatting, and publication support.</div>
            </div>
            <div className="rmHub__socials" aria-label="Social links">
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Twitter / X">x</a>
              <a href="#" aria-label="Email">@</a>
            </div>
          </div>

          <div className="rmHub__quickNav" aria-label="Quick links">
            <button type="button" onClick={() => setMode("stages")}>Stages</button>
            <button type="button" onClick={() => setMode("problems")}>Problems</button>
            <button type="button" onClick={() => setMode("downloads")}>Downloads</button>
          </div>
        </div>

        <div className="rmHub__footerBottom">© 2026 ResearchEdit4U • Confidential • Ethics-first • Privacy • Terms</div>
      </footer>
    </div>
  );
}
