import React, { useEffect, useMemo, useRef, useState } from "react";
import "../../assets/style/style.css";
import { DATA } from "../../assets/content/dataservices/whatYouGetContent";

function Icon({ name }) {
  // Minimal icon system (no deps)
  const common = { className: "ic", "aria-hidden": true };
  switch (name) {
    case "shield":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M12 2l8 4v6c0 5-3.4 9.7-8 10-4.6-.3-8-5-8-10V6l8-4z" fill="currentColor" opacity=".15"/>
          <path d="M12 2l8 4v6c0 5-3.4 9.7-8 10-4.6-.3-8-5-8-10V6l8-4z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
          <path d="M8.2 12.2l2.2 2.2 5.4-5.4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "chart":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M5 19V5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          <path d="M5 19h14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          <path d="M8 16l3-4 3 2 4-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "table":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <rect x="4" y="6" width="16" height="12" rx="2.2" fill="currentColor" opacity=".12"/>
          <rect x="4" y="6" width="16" height="12" rx="2.2" fill="none" stroke="currentColor" strokeWidth="1.6"/>
          <path d="M4 10h16M8 6v12M14 6v12" fill="none" stroke="currentColor" strokeWidth="1.2" opacity=".9"/>
        </svg>
      );
    case "doc":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" fill="currentColor" opacity=".12"/>
          <path d="M14 3v4a2 2 0 0 0 2 2h4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
          <path d="M7 3h7l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
          <path d="M8 13h8M8 16h7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      );
    case "map":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M9 18l-5 2V6l5-2 6 2 5-2v14l-5 2-6-2z" fill="currentColor" opacity=".12"/>
          <path d="M9 18l-5 2V6l5-2 6 2 5-2v14l-5 2-6-2z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
          <path d="M9 4v14M15 6v14" fill="none" stroke="currentColor" strokeWidth="1.2"/>
        </svg>
      );
    case "note":
    default:
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M6 4h12a2 2 0 0 1 2 2v14l-4-3H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" fill="currentColor" opacity=".12"/>
          <path d="M6 4h12a2 2 0 0 1 2 2v14l-4-3H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
          <path d="M8 9h8M8 12h7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      );
  }
}

function Modal({ open, title, children, onClose }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "Tab") {
        // simple focus trap
        const panel = panelRef.current;
        if (!panel) return;
        const focusables = panel.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    // focus first action
    setTimeout(() => {
      const panel = panelRef.current;
      const focusable = panel?.querySelector("button, input, select, textarea, [href], [tabindex]:not([tabindex='-1'])");
      focusable?.focus?.();
    }, 50);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modalOverlay" role="dialog" aria-modal="true" aria-label={title} onMouseDown={onClose}>
      <div className="modalPanel" ref={panelRef} onMouseDown={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <div className="modalTitle">{title}</div>
          <button className="iconBtn" onClick={onClose} aria-label="Close modal">
            <span aria-hidden>×</span>
          </button>
        </div>
        <div className="modalBody">{children}</div>
      </div>
    </div>
  );
}

export default function WhatYouGetContent() {
  const [activeGroup, setActiveGroup] = useState("all"); // all | deliverables | tools
  const [activeId, setActiveId] = useState(DATA[0].id);

  const [openReview, setOpenReview] = useState(false);
  const [openSamples, setOpenSamples] = useState(false);
  const [openPackages, setOpenPackages] = useState(false);

  const [form, setForm] = useState({ name: "", email: "", datasetLink: "", notes: "" });
  const [touched, setTouched] = useState({});

  const filteredTabs = useMemo(() => {
    if (activeGroup === "all") return DATA;
    return DATA.filter((t) => t.group === activeGroup);
  }, [activeGroup]);

  // ensure active tab exists in filtered view
  useEffect(() => {
    const exists = filteredTabs.some((t) => t.id === activeId);
    if (!exists) setActiveId(filteredTabs[0]?.id ?? DATA[0].id);
  }, [filteredTabs, activeId]);

  const active = useMemo(() => DATA.find((t) => t.id === activeId) ?? DATA[0], [activeId]);

  const errors = useMemo(() => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) e.email = "Enter a valid email.";
    if (!form.datasetLink.trim()) e.datasetLink = "Dataset link is required.";
    return e;
  }, [form]);

  const canSubmit = Object.keys(errors).length === 0;

  const submit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, datasetLink: true, notes: true });
    if (!canSubmit) return;

    // demo submit action
    alert("Submitted. (Demo) In production, send this payload to your backend/API.");
    setOpenReview(false);
    setForm({ name: "", email: "", datasetLink: "", notes: "" });
    setTouched({});
  };

  const pillKeyDown = (e, id) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveId(id);
    }
  };

  return (
    <section className="wrap">
      <div className="shell">
        <div className="topRow">
          <div>
            <h2 className="pageTitle">What you get (and how we deliver it)</h2>
          </div>
          <div className="topHint">
            Pick one to preview the exact deliverables. Same page, same clarity—no clutter.
          </div>
        </div>

        <div className="panel">
          <div className="panelTop">
            <div className="segWrap" role="tablist" aria-label="Deliverables or tools">
              <button
                className={`segBtn ${activeGroup === "deliverables" ? "isActive" : ""}`}
                onClick={() => setActiveGroup("deliverables")}
                type="button"
              >
                Deliverables
              </button>
              <div className="segWord">and</div>
              <button
                className={`segBtn ${activeGroup === "tools" ? "isActive" : ""}`}
                onClick={() => setActiveGroup("tools")}
                type="button"
              >
                Tools
              </button>
              <div className="segWord">—in one row</div>

              <button
                className={`segMini ${activeGroup === "all" ? "isActive" : ""}`}
                onClick={() => setActiveGroup("all")}
                type="button"
                aria-label="Show all"
              >
                All
              </button>
            </div>

            <div className="ctaRow">
              <button className="btnPrimary" type="button" onClick={() => setOpenReview(true)}>
                Get a Data Review + Quote
              </button>
              <button className="btnSecondary" type="button" onClick={() => setOpenPackages(true)}>
                See packages
              </button>
            </div>
          </div>

          <div className="pills" role="navigation" aria-label="Deliverables and tools list">
            {filteredTabs.map((t) => (
              <button
                key={t.id}
                className={`pill ${t.id === activeId ? "isActive" : ""}`}
                onClick={() => setActiveId(t.id)}
                onKeyDown={(e) => pillKeyDown(e, t.id)}
                type="button"
              >
                {t.pill}
              </button>
            ))}
          </div>

          <div className="contentGrid">
            {/* Left content */}
            <div className="leftCard">
              <div className="miniTag">{active.group === "tools" ? "Tools" : "Deliverables"}</div>

              <div className="leftTitle">{active.title}</div>
              <div className="leftIntro">{active.intro}</div>

              <ul className="bullets">
                {active.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>

              <div className="leftActions">
                <button className="btnPrimary" type="button" onClick={() => setOpenReview(true)}>
                  Send my dataset for review
                </button>
                <button className="btnSecondary" type="button" onClick={() => setOpenSamples(true)}>
                  See sample outputs
                </button>
              </div>

              <div className="benefits">
                <div className="benefit">
                  <span className="dot" aria-hidden />
                  <span>QC-backed outputs</span>
                </div>
                <div className="benefit">
                  <span className="dot" aria-hidden />
                  <span>Clear “what-to-report” notes</span>
                </div>
                <div className="benefit">
                  <span className="dot" aria-hidden />
                  <span>Built for academic review</span>
                </div>
              </div>
            </div>

            {/* Right preview */}
            <div className="rightCard">
              <div className="infoBar">
                <strong>Integrity-first:</strong> We help you understand and present your results. We don’t fabricate data,
                results, or claims.
              </div>

              <div className="previewCard">
                <div className="previewTop">
                  <div className="previewTitle">Preview (what you’ll receive)</div>
                  <div className="qc">
                    <span className="qcDot" aria-hidden />
                    <span>QC checked</span>
                  </div>
                </div>

                <div className="previewBadgeRow">
                  <span className="badge">{active.preview.badge}</span>
                </div>

                <div className="tableWrap" role="table" aria-label="Preview table">
                  <div className="tHead" role="rowgroup">
                    <div className="tRow tHeadRow" role="row">
                      <div className="tCell" role="columnheader">Item</div>
                      <div className="tCell" role="columnheader">Status</div>
                    </div>
                  </div>
                  <div className="tBody" role="rowgroup">
                    {active.preview.rows.map((r, idx) => (
                      <div className="tRow" role="row" key={idx}>
                        <div className="tCell" role="cell">{r.item}</div>
                        <div className="tCell" role="cell">{r.status}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="miniCards">
                  {active.preview.cards.map((c, idx) => (
                    <div className="miniCard" key={idx}>
                      <div className="miniIcon">
                        <Icon name={c.icon} />
                      </div>
                      <div className="miniText">
                        <div className="miniTitle">{c.title}</div>
                        <div className="miniDesc">{c.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Modals */}
          <Modal open={openReview} title="Send dataset for review" onClose={() => setOpenReview(false)}>
            <form className="form" onSubmit={submit}>
              <div className="formGrid">
                <label className="field">
                  <span className="label">Your name</span>
                  <input
                    className={`input ${touched.name && errors.name ? "hasError" : ""}`}
                    value={form.name}
                    onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                    onBlur={() => setTouched((s) => ({ ...s, name: true }))}
                    placeholder="e.g., Basant Kumar"
                  />
                  {touched.name && errors.name ? <span className="err">{errors.name}</span> : null}
                </label>

                <label className="field">
                  <span className="label">Email</span>
                  <input
                    className={`input ${touched.email && errors.email ? "hasError" : ""}`}
                    value={form.email}
                    onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                    onBlur={() => setTouched((s) => ({ ...s, email: true }))}
                    placeholder="e.g., you@university.edu"
                  />
                  {touched.email && errors.email ? <span className="err">{errors.email}</span> : null}
                </label>

                <label className="field span2">
                  <span className="label">Dataset link</span>
                  <input
                    className={`input ${touched.datasetLink && errors.datasetLink ? "hasError" : ""}`}
                    value={form.datasetLink}
                    onChange={(e) => setForm((s) => ({ ...s, datasetLink: e.target.value }))}
                    onBlur={() => setTouched((s) => ({ ...s, datasetLink: true }))}
                    placeholder="Google Drive/Dropbox link (or describe how you will share)"
                  />
                  {touched.datasetLink && errors.datasetLink ? <span className="err">{errors.datasetLink}</span> : null}
                </label>

                <label className="field span2">
                  <span className="label">Notes (optional)</span>
                  <textarea
                    className="input textarea"
                    value={form.notes}
                    onChange={(e) => setForm((s) => ({ ...s, notes: e.target.value }))}
                    onBlur={() => setTouched((s) => ({ ...s, notes: true }))}
                    placeholder="Study design, variables, hypothesis, deadline, journal requirements, etc."
                  />
                  <span className="helper">We reply with next-step options and a quote after review.</span>
                </label>
              </div>

              <div className="formActions">
                <button type="button" className="btnSecondary" onClick={() => setOpenReview(false)}>
                  Cancel
                </button>
                <button type="submit" className="btnPrimary" disabled={!canSubmit} aria-disabled={!canSubmit}>
                  Submit for review
                </button>
              </div>
            </form>
          </Modal>

          <Modal open={openSamples} title="Sample outputs (preview)" onClose={() => setOpenSamples(false)}>
            <div className="samples">
              <div className="sampleGrid">
                <div className="sampleCard">
                  <div className="sampleTop">
                    <span className="badge">Clean log</span>
                    <span className="miniLabel">Card text (13px)</span>
                  </div>
                  <div className="sampleBody">
                    Example: “Removed duplicates (n=12), recoded missing as NA, flagged outliers via IQR (k=1.5).”
                  </div>
                  <button className="btnMini" type="button">
                    View example
                  </button>
                </div>

                <div className="sampleCard">
                  <div className="sampleTop">
                    <span className="badge">Report-ready</span>
                    <span className="miniLabel">Reusable table</span>
                  </div>
                  <div className="sampleBody">
                    Example: A publication-style summary table with consistent labels, notes, and copy-ready formatting.
                  </div>
                  <button className="btnMini" type="button">
                    View example
                  </button>
                </div>

                <div className="sampleCard">
                  <div className="sampleTop">
                    <span className="badge">Explainable</span>
                    <span className="miniLabel">Interpretation notes</span>
                  </div>
                  <div className="sampleBody">
                    Example: “What the coefficient implies, assumptions checked, what you can claim vs cannot claim.”
                  </div>
                  <button className="btnMini" type="button">
                    View example
                  </button>
                </div>
              </div>

              <div className="hintBox">
                Tip: Replace these placeholders with real PDFs/images. The UI already supports scalable cards and modal layout.
              </div>
            </div>
          </Modal>

          <Modal open={openPackages} title="Packages" onClose={() => setOpenPackages(false)}>
            <div className="packages">
              <div className="pkgGrid">
                <div className="pkgCard">
                  <div className="pkgName">Starter</div>
                  <div className="pkgDesc">Data readiness + quick checks</div>
                  <ul className="pkgList">
                    <li>Cleanup + variable map</li>
                    <li>Basic summaries</li>
                    <li>QC checklist</li>
                  </ul>
                  <button className="btnPrimary" type="button" onClick={() => setOpenReview(true)}>
                    Request quote
                  </button>
                </div>

                <div className="pkgCard">
                  <div className="pkgName">Standard</div>
                  <div className="pkgDesc">Analysis + reporting outputs</div>
                  <ul className="pkgList">
                    <li>Model outputs (tables/plots)</li>
                    <li>Reporting notes</li>
                    <li>QC checked</li>
                  </ul>
                  <button className="btnPrimary" type="button" onClick={() => setOpenReview(true)}>
                    Request quote
                  </button>
                </div>

                <div className="pkgCard">
                  <div className="pkgName">Premium</div>
                  <div className="pkgDesc">End-to-end + interpretation</div>
                  <ul className="pkgList">
                    <li>Design-aligned analysis</li>
                    <li>Interpretation guidance</li>
                    <li>Reusable outputs</li>
                  </ul>
                  <button className="btnPrimary" type="button" onClick={() => setOpenReview(true)}>
                    Request quote
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </section>
  );
}
