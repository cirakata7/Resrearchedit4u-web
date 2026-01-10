import React, { useEffect, useMemo, useRef, useState } from "react";
import "../../assets/style/style.css";
import { RE4U_HERO_INTERVAL_MS, RE4U_HERO_SLIDES } from "../../assets/content/servicesoverviewdata/heroServices";

// ---------- Toolkit download helpers ----------
function toolkitPayload(kind) {
  const map = {
    proposal: {
      name: "RE4U_Proposal_Readiness_Toolkit.txt",
      title: "RE4U Proposal Readiness Toolkit (Demo)",
      bullets: [
        "Proposal readiness checklist (gap → objectives → methods)",
        "Supervisor revision checklist",
        "Ethics readiness prompts (IRB/HREC/REC)",
        "Timeline & feasibility mini-planner",
      ],
    },
    methods: {
      name: "RE4U_Methodology_Alignment_Toolkit.txt",
      title: "RE4U Methodology Alignment Toolkit (Demo)",
      bullets: [
        "RQs → variables → design mapping worksheet",
        "Sampling logic checklist",
        "Instrument/tool selection prompts",
        "Analysis plan outline",
      ],
    },
    data: {
      name: "RE4U_Data_Reporting_Toolkit.txt",
      title: "RE4U Data Reporting Toolkit (Demo)",
      bullets: [
        "Results reporting checklist",
        "Tables & figures formatting rules",
        "Common statistics reporting checklist",
        "Narrative results template",
      ],
    },
    editing: {
      name: "RE4U_Academic_Editing_Toolkit.txt",
      title: "RE4U Academic Editing Toolkit (Demo)",
      bullets: [
        "Clarity & coherence checklist",
        "Academic tone quick guide",
        "Common reviewer language fixes",
        "Self-edit pass checklist",
      ],
    },
    journal: {
      name: "RE4U_Journal_Fit_and_Revisions_Toolkit.txt",
      title: "RE4U Journal Fit & Revisions Toolkit (Demo)",
      bullets: [
        "Journal fit scorecard",
        "Submission readiness checklist",
        "Response-to-reviewers template",
        "Desk rejection prevention checklist",
      ],
    },
  };
  return map[kind] || map.proposal;
}

function downloadToolkit(kind) {
  const p = toolkitPayload(kind);
  const content = [
    p.title,
    "",
    "This is a demo downloadable file. Replace with your PDF links later.",
    "",
    "Included:",
    ...p.bullets.map((b) => "- " + b),
    "",
    "Integrity-first. No misconduct support.",
  ].join("\n");

  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = p.name;
  document.body.appendChild(a);
  a.click();
  a.remove();

  setTimeout(() => URL.revokeObjectURL(url), 700);
}

function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

// ✅ Render text with {{kw:...}} markers into <b class="re4u-kw">
function renderKwText(text) {
  const parts = String(text || "").split(/(\{\{kw:[^}]+\}\})/g);

  return parts.map((part, i) => {
    const m = part.match(/^\{\{kw:([^}]+)\}\}$/);
    if (m) {
      return (
        <b key={i} className="re4u-kw">
          {m[1]}
        </b>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

export default function HeroSlider({ variant = "banner" }) {
  const SLIDES = RE4U_HERO_SLIDES;
  const INTERVAL_MS = RE4U_HERO_INTERVAL_MS;

  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(true);

  // modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Drop a Query");
  const [modalSub, setModalSub] = useState(
    "Tell us your stage and question. We’ll reply with the best next step, deliverables, price range, and timeline."
  );
  const [ctxStage, setCtxStage] = useState("");
  const [ctxSlide, setCtxSlide] = useState("");

  // form state
  const [query, setQuery] = useState("");
  const [subject, setSubject] = useState("");
  const [stage, setStage] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [fileName, setFileName] = useState("No file selected.");
  const [errors, setErrors] = useState({
    query: false,
    subject: false,
    stage: false,
    email: false,
  });
  const [success, setSuccess] = useState(false);

  const sliderRef = useRef(null);
  const timerRef = useRef(null);
  const touchStartXRef = useRef(null);

  const slide = useMemo(() => SLIDES[idx], [SLIDES, idx]);

  const goTo = (i) => setIdx((i + SLIDES.length) % SLIDES.length);
  const next = () => goTo(idx + 1);
  const prev = () => goTo(idx - 1);

  const pause = () => setPlaying(false);
  const togglePlay = () => setPlaying((p) => !p);

  // reduced motion = pause
  useEffect(() => {
    const reduce =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) setPlaying(false);
  }, []);

  // autoplay
  useEffect(() => {
    window.clearInterval(timerRef.current);
    if (playing) {
      timerRef.current = window.setInterval(() => {
        setIdx((p) => (p + 1) % SLIDES.length);
      }, INTERVAL_MS);
    }
    return () => window.clearInterval(timerRef.current);
  }, [playing, INTERVAL_MS, SLIDES.length]);

  // keyboard arrows (when modal closed)
  useEffect(() => {
    const onKey = (e) => {
      if (modalOpen) return;
      if (e.key === "ArrowLeft") {
        prev();
        pause();
      }
      if (e.key === "ArrowRight") {
        next();
        pause();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalOpen, idx]);

  // ESC closes modal
  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape" && modalOpen) closeModal();
    };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [modalOpen]);

  // lock scroll when modal open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  // touch swipe
  const onTouchStart = (e) => {
    touchStartXRef.current = e.touches?.[0]?.clientX ?? null;
  };
  const onTouchEnd = (e) => {
    const sx = touchStartXRef.current;
    if (sx == null) return;
    const ex = e.changedTouches?.[0]?.clientX ?? sx;
    const dx = ex - sx;
    if (Math.abs(dx) > 38) {
      dx > 0 ? prev() : next();
      pause();
    }
    touchStartXRef.current = null;
  };

  function openModalWithContext(stageLabel, ctx) {
    setModalTitle(`Drop a Query — ${stageLabel}`);
    setModalSub(
      `Context: ${ctx}. Tell us your stage and question. We’ll reply with deliverables, price range, and timeline.`
    );
    setCtxStage(stageLabel);
    setCtxSlide(ctx);
    setModalOpen(true);

    window.setTimeout(() => {
      const el = document.getElementById("re4u_query");
      if (el) el.focus();
    }, 30);
  }

  function closeModal() {
    setModalOpen(false);
  }

  function resetForm() {
    setQuery("");
    setSubject("");
    setStage("");
    setCountry("");
    setEmail("");
    setFileName("No file selected.");
    setErrors({ query: false, subject: false, stage: false, email: false });
    setSuccess(false);
  }

  function onSubmit(e) {
    e.preventDefault();
    const qOk = query.trim().length >= 12;
    const sOk = !!subject.trim();
    const stOk = !!stage.trim();
    const eOk = !!email.trim() && isValidEmail(email.trim());

    setErrors({ query: !qOk, subject: !sOk, stage: !stOk, email: !eOk });

    if (qOk && sOk && stOk && eOk) {
      setSuccess(true);
      // connect API/email later here
    }
  }

  function closeAfterSuccess() {
    resetForm();
    closeModal();
  }

  return (
    <div className="re4u-wrap" data-hero={variant === "fullscreen" ? "fullscreen" : "banner"}>
      <section className="re4u-shell" aria-label="RE4U 5-slide hero">
        <div className="re4u-frame">
          <div className="re4u-top">
            <div className="re4u-kicker">
              <span className="re4u-kdot" />
              SERVICE OVERVIEW
            </div>

            <div className="re4u-trust" aria-label="Trust strip">
              <span>
                <span className="re4u-tdot" />
                Trusted by <b>4,051+</b> researchers
              </span>
              <span>·</span>
              <span>
                <span className="re4u-tdot re4u-tdot-dark" />
                <b>200+</b> accepted papers supported
              </span>
              <span>·</span>
              <span>
                <span className="re4u-tdot re4u-tdot-gold" />
                <b>95%</b> satisfaction
              </span>
            </div>
          </div>

          <div
            className="re4u-slider"
            ref={sliderRef}
            aria-label="Hero slider with 5 slides"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {SLIDES.map((s, i) => {
              const active = i === idx;
              return (
                <div
                  key={i}
                  className={`re4u-slide ${active ? "is-active" : ""}`}
                  aria-hidden={active ? "false" : "true"}
                >
                  <div className="re4u-left">
                    <div className="re4u-chips">
                      <span className="re4u-chip is-soft">{s.chips[0]}</span>
                      <span className="re4u-chip">
                        <b className="re4u-kw">{s.chips[1]}</b>
                      </span>
                      <span className="re4u-chip">
                        <b className="re4u-kw">{s.chips[2]}</b>
                      </span>
                    </div>

                    <h1 className="re4u-h1">{s.h1}</h1>
                    <h2 className="re4u-h2">{s.h2}</h2>

                    {/* ✅ data is plain text, component renders keywords */}
                    <p className="re4u-p">{renderKwText(s.p)}</p>

                    <div className="re4u-cta">
                      <button
                        className="re4u-btn is-primary"
                        type="button"
                        onClick={() => openModalWithContext(s.stage, s.modalCtx)}
                      >
                        Drop a Query
                      </button>

                      <button
                        className="re4u-btn is-ghost"
                        type="button"
                        onClick={() => downloadToolkit(s.toolkit)}
                      >
                        Download Toolkit
                      </button>
                    </div>

                    <div className="re4u-micro">
                      {s.micro.map((m, mi) => (
                        <span key={mi} className={`re4u-chip ${mi === 0 ? "is-soft" : ""}`}>
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT SIDE IMAGE */}
                  <div className="re4u-right">
                    <div className="re4u-media" aria-label={`${s.stage} image`}>
                      <img
                        className="re4u-mediaImg"
                        src={s.img}
                        alt={s.imgAlt || `${s.stage} image`}
                        loading="lazy"
                        draggable="false"
                      />
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="re4u-controls" aria-label="Slider controls">
              <div className="re4u-controlsLeft">
                <button
                  className="re4u-btn is-ghost is-icon"
                  type="button"
                  aria-label="Previous slide"
                  onClick={() => {
                    prev();
                    pause();
                  }}
                >
                  ‹
                </button>

                <button
                  className="re4u-btn is-ghost is-icon"
                  type="button"
                  aria-label="Next slide"
                  onClick={() => {
                    next();
                    pause();
                  }}
                >
                  ›
                </button>

                <button
                  className="re4u-btn is-ghost"
                  type="button"
                  aria-pressed={playing ? "true" : "false"}
                  onClick={togglePlay}
                >
                  {playing ? "Pause" : "Play"}
                </button>
              </div>

              <div className="re4u-controlsRight">
                <div className="re4u-dots" aria-label="Slide selector">
                  {SLIDES.map((_, i) => (
                    <button
                      key={i}
                      className="re4u-dot"
                      type="button"
                      aria-label={`Go to slide ${i + 1}`}
                      aria-pressed={i === idx ? "true" : "false"}
                      onClick={() => {
                        goTo(i);
                        pause();
                      }}
                    />
                  ))}
                </div>

                <div className="re4u-count">{`Slide ${idx + 1}/${SLIDES.length}`}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <div
        className="re4u-modal"
        role="dialog"
        aria-modal="true"
        aria-hidden={modalOpen ? "false" : "true"}
        aria-label="Drop a query modal"
      >
        {modalOpen && (
          <>
            <div className="re4u-backdrop" onClick={closeModal} />

            <div className="re4u-modalPanel" role="document">
              <div className="re4u-modalHead">
                <h3>{modalTitle}</h3>
                <button className="re4u-x" type="button" aria-label="Close" onClick={closeModal}>
                  ✕
                </button>
              </div>

              <div className="re4u-modalBody">
                <p className="re4u-sub">{modalSub}</p>

                <div className="re4u-modalGrid">
                  <div className="re4u-panel">
                    <form onSubmit={onSubmit} noValidate>
                      <input type="hidden" value={ctxStage} readOnly />
                      <input type="hidden" value={ctxSlide} readOnly />

                      <label className="re4u-label" htmlFor="re4u_query">
                        Your query (required)
                      </label>
                      <textarea
                        id="re4u_query"
                        className="re4u-textarea"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Topic + level (PhD/Master’s) + stage (idea/draft/revision) + what’s blocking you (methods/gap/analysis/editing/journal)."
                      />
                      {errors.query && (
                        <div className="re4u-error">Please write your query (at least 12 characters).</div>
                      )}

                      <div className="re4u-formGrid">
                        <div>
                          <label className="re4u-label" htmlFor="re4u_subject">
                            Subject area (required)
                          </label>
                          <select
                            id="re4u_subject"
                            className="re4u-select"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                          >
                            <option value="">Select</option>
                            <option>Medicine & Health Sciences</option>
                            <option>Life Sciences & Biotechnology</option>
                            <option>Engineering & Technology</option>
                            <option>Computer Science & AI</option>
                            <option>Social Sciences & Education</option>
                            <option>Business, Economics & Management</option>
                            <option>Chemistry & Materials Science</option>
                            <option>Environmental & Earth Sciences</option>
                            <option>Arts & Humanities</option>
                          </select>
                          {errors.subject && (
                            <div className="re4u-error">Please choose a subject area.</div>
                          )}
                        </div>

                        <div>
                          <label className="re4u-label" htmlFor="re4u_stage">
                            Stage (required)
                          </label>
                          <select
                            id="re4u_stage"
                            className="re4u-select"
                            value={stage}
                            onChange={(e) => setStage(e.target.value)}
                          >
                            <option value="">Select</option>
                            <option>Idea only</option>
                            <option>Draft ready</option>
                            <option>Supervisor revision</option>
                            <option>Reviewer revision</option>
                            <option>Final submission</option>
                          </select>
                          {errors.stage && <div className="re4u-error">Please select your stage.</div>}
                        </div>

                        <div>
                          <label className="re4u-label" htmlFor="re4u_country">
                            Country/Region (optional)
                          </label>
                          <select
                            id="re4u_country"
                            className="re4u-select"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                          >
                            <option value="">Select</option>
                            <option>India</option>
                            <option>United States</option>
                            <option>United Kingdom</option>
                            <option>Australia</option>
                            <option>Other</option>
                          </select>
                          <div className="re4u-help">
                            Helps us align terminology: IRB/HREC/REC and higher-ed formats.
                          </div>
                        </div>

                        <div>
                          <label className="re4u-label" htmlFor="re4u_email">
                            Email (required)
                          </label>
                          <input
                            id="re4u_email"
                            className="re4u-input"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@university.edu"
                            autoComplete="email"
                          />
                          {errors.email && <div className="re4u-error">Please enter a valid email.</div>}
                        </div>

                        <div className="re4u-fieldFull">
                          <label className="re4u-label" htmlFor="re4u_file">
                            Upload draft (optional)
                          </label>
                          <div className="re4u-file">
                            <input
                              id="re4u_file"
                              type="file"
                              accept=".pdf,.doc,.docx,.rtf,.txt"
                              onChange={(e) => {
                                const f = e.target.files?.[0];
                                setFileName(f ? f.name : "No file selected.");
                              }}
                            />
                          </div>
                          <div className="re4u-fileName">{fileName}</div>
                          <div className="re4u-help">
                            Only used to estimate scope. We don’t support misconduct.
                          </div>
                        </div>
                      </div>

                      <div className="re4u-cta" style={{ marginTop: 12 }}>
                        <button className="re4u-btn is-primary" type="submit">
                          Submit Query
                        </button>
                        <button className="re4u-btn is-ghost" type="button" onClick={closeModal}>
                          Cancel
                        </button>
                      </div>

                      <div className="re4u-micro">
                        <span className="re4u-chip is-soft">Confidential</span>
                        <span className="re4u-chip">Typical reply 24–72h</span>
                        <span className="re4u-chip">Scope-based pricing</span>
                      </div>

                      {success && (
                        <div className="re4u-success">
                          <h4>✅ Query submitted</h4>
                          <p>
                            Thanks—your query is received. We’ll reply with the best next step,
                            deliverables, price range, and timeline. Reply time varies by workload
                            (typically 24–72h).
                          </p>
                          <div className="re4u-cta" style={{ marginTop: 10 }}>
                            <button
                              className="re4u-btn is-primary"
                              type="button"
                              onClick={closeAfterSuccess}
                            >
                              Close
                            </button>
                            <button
                              className="re4u-btn is-ghost"
                              type="button"
                              onClick={() => downloadToolkit(slide.toolkit)}
                            >
                              Download Toolkit
                            </button>
                          </div>
                        </div>
                      )}
                    </form>
                  </div>

                  <div className="re4u-panel">
                    <h4 className="re4u-sideTitle">What you’ll receive in our reply</h4>
                    <ul className="re4u-sideList">
                      <li>Best-fit module based on your query</li>
                      <li>3–5 deliverables (scope bullets)</li>
                      <li>Price range (scope-based) + international guidance</li>
                      <li>Timeline estimate + revision plan</li>
                      <li>Next step: start work or book a paid call (if urgent)</li>
                    </ul>
                    <div className="re4u-micro" style={{ marginTop: 12 }}>
                      <span className="re4u-chip">Integrity-first</span>
                      <span className="re4u-chip">No misconduct support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
