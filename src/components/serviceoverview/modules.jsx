// src/components/modulesByStage/ModulesByStage.jsx
import React, { useEffect, useMemo, useState } from "react";
import "../../assets/style/style.css";
import { MODULES, STAGES, STAGE_HINT, stagePlaceholder } from "../../assets/content/servicesoverviewdata/module";

const LS_STAGE = "re4u_stage";
const LS_MODULE = "re4u_module";

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function Icon({ kind }) {
  // Minimal inline SVGs (same idea as your HTML)
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none" };
  switch (kind) {
    case "doc":
      return (
        <svg {...common}>
          <path d="M6 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2" />
          <path d="M8 7h8M8 11h6M8 15h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "lines":
      return (
        <svg {...common}>
          <path d="M4 6h16M4 12h10M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M7 3h10v18H7z" stroke="currentColor" strokeWidth="2" />
          <path d="M7 7h10M7 11h10M7 15h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M9 12l2 2 4-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "flask":
      return (
        <svg {...common}>
          <path d="M9 3v6l-5 8a3 3 0 0 0 2.6 4.5h10.8A3 3 0 0 0 20 17l-5-8V3" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M8 9h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14" stroke="currentColor" strokeWidth="2" />
          <path d="M8 17v-4M12 17v-8M16 17v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "pen":
      return (
        <svg {...common}>
          <path d="M4 20h4l10-10a2.8 2.8 0 0 0-4-4L4 16v4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M13 7l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "checkdoc":
      return (
        <svg {...common}>
          <path d="M6 3h9l3 3v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2" />
          <path d="M9 13l2 2 4-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path d="M4 5h16v11a2 2 0 0 1-2 2H9l-5 4v-4H6a2 2 0 0 1-2-2V5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M8 9h8M8 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ModulesByStage() {
  const [stage, setStage] = useState("Planning");
  const [selectedModule, setSelectedModule] = useState(null);
  const [flippedKey, setFlippedKey] = useState(null);

  // modal
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", query: "" });
  const [errs, setErrs] = useState({ name: false, email: false, phone: false, query: false });
  const [submitted, setSubmitted] = useState(false);

  const items = useMemo(() => MODULES[stage] || [], [stage]);

  useEffect(() => {
    const lastStage = localStorage.getItem(LS_STAGE);
    const lastModule = localStorage.getItem(LS_MODULE);
    if (lastStage && MODULES[lastStage]) setStage(lastStage);
    if (lastModule) setSelectedModule(lastModule);
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_STAGE, stage);

    // when switching stage, enforce selection belongs to stage
    if (selectedModule) {
      const exists = (MODULES[stage] || []).some((m) => m.key === selectedModule);
      if (!exists) setSelectedModule(null);
    }
    // also reset flips
    setFlippedKey(null);
  }, [stage]);

  function showToast(msg) {
    setToast(msg);
    window.clearTimeout(window.__re4u_toast);
    window.__re4u_toast = window.setTimeout(() => setToast(""), 1100);
  }

  function selectModule(key) {
    setSelectedModule(key);
    localStorage.setItem(LS_MODULE, key);
    setFlippedKey(null);
    showToast(`Selected: ${key}`);
  }

  function openModal() {
    if (!selectedModule) return;
    setOpen(true);
    setSubmitted(false);
    setErrs({ name: false, email: false, phone: false, query: false });

    // auto placeholder per stage, but keep user text if already typed
    setForm((p) => ({ ...p, query: p.query || "" }));
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setOpen(false);
    document.body.style.overflow = "";
  }

  function onSubmit(e) {
    e.preventDefault();
    const okName = !!form.name.trim();
    const okEmail = isEmail(form.email.trim());
    const okPhone = !!form.phone.trim();
    const okQuery = !!form.query.trim();

    setErrs({ name: !okName, email: !okEmail, phone: !okPhone, query: !okQuery });
    if (!(okName && okEmail && okPhone && okQuery)) return;

    // Demo success (connect backend later)
    setSubmitted(true);
  }

  return (
    <div className="mbs-wrap">
      <div className="mbs-shell">
        <section className="mbs-section" aria-label="RE4U Modules by Stage">
          <div className="mbs-kicker">
            <span className="mbs-dot" />
            MODULES
          </div>

          <h2 className="mbs-h2">Pick your stage — then choose one module</h2>
          <p className="mbs-sub">
            Tap a module to see <b>what you’ll get</b>. When ready, use one CTA to send your details and query.
          </p>

          <div className="mbs-tabsRow">
            <div className="mbs-tabs" role="tablist" aria-label="Stages">
              {STAGES.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`mbs-tab ${s === stage ? "is-active" : ""}`}
                  role="tab"
                  aria-selected={s === stage ? "true" : "false"}
                  onClick={() => setStage(s)}
                >
                  <span className="mbs-pillDot" />
                  {s}
                </button>
              ))}
            </div>

            <div className="mbs-hint">{STAGE_HINT[stage]}</div>
          </div>

          <div className="mbs-grid" role="list">
            {items.map((m) => {
              const selected = selectedModule === m.key;
              const flipped = flippedKey === m.key;

              return (
                <div
                  key={m.key}
                  className={`mbs-flip ${selected ? "is-selected" : ""} ${flipped ? "is-flipped" : ""}`}
                  role="listitem"
                >
                  <div className="mbs-flipInner">
                    {/* FRONT */}
                    <div className="mbs-face mbs-front" aria-label={m.key}>
                      <div className="mbs-top">
                        <div className="mbs-icon" aria-hidden="true">
                          <Icon kind={m.icon} />
                        </div>
                        <div>
                          <p className="mbs-title">{m.key}</p>
                          <p className="mbs-desc">{m.desc}</p>
                        </div>
                      </div>

                      <div className="mbs-chips">
                        <span className="mbs-chip is-stage">
                          <span className="mbs-cdot" />
                          {m.chips.stage}
                        </span>
                        <span className="mbs-chip is-depth">
                          <span className="mbs-cdot" />
                          {m.chips.depth}
                        </span>
                      </div>

                      <div className="mbs-actions">
                        <button type="button" className="mbs-miniBtn" onClick={() => selectModule(m.key)}>
                          <span className="mbs-miniIco">✓</span> Select
                        </button>
                        <button type="button" className="mbs-miniBtn" onClick={() => setFlippedKey(m.key)}>
                          <span className="mbs-miniIco">↻</span> What you get
                        </button>
                      </div>
                    </div>

                    {/* BACK */}
                    <div className="mbs-face mbs-back" aria-label={`What you get for ${m.key}`}>
                      <p className="mbs-backTitle">What you get</p>
                      <ul className="mbs-list">
                        {m.get.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ul>

                      <div className="mbs-actions">
                        <button type="button" className="mbs-miniBtn" onClick={() => setFlippedKey(null)}>
                          <span className="mbs-miniIco">←</span> Back
                        </button>
                        <button type="button" className="mbs-miniBtn" onClick={() => selectModule(m.key)}>
                          <span className="mbs-miniIco">✓</span> Select
                        </button>
                      </div>

                      <p className="mbs-note">Next: one form (prefilled) → we reply with price range + timeline.</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA BAR */}
          <div className="mbs-ctaBar" role="region" aria-label="Continue">
            <div className="mbs-barLeft">
              <div className="mbs-barK">Selected</div>
              <div className="mbs-barV">
                Stage: {stage} · Module: {selectedModule || "(choose one)"}
              </div>
              <div className="mbs-barHint">
                {selectedModule ? "Click the CTA to open the prefilled form." : "Select a module to enable the form."}
              </div>
            </div>

            <button className="mbs-btn mbs-btnPrimary" type="button" onClick={openModal} disabled={!selectedModule}>
              <span className="mbs-btnIcon">↗</span> Request pricing &amp; scope
            </button>
          </div>

          {toast ? <div className="mbs-toast">{toast}</div> : null}
        </section>
      </div>

      {/* MODAL */}
      {open ? (
        <div className="mbs-modalBack" role="presentation" onClick={(e) => e.target.classList.contains("mbs-modalBack") && closeModal()}>
          <div className="mbs-modal" role="dialog" aria-modal="true" aria-label="Request pricing and scope">
            <div className="mbs-modalHead">
              <h3 className="mbs-modalTitle">Request pricing &amp; scope</h3>
              <button type="button" className="mbs-close" onClick={closeModal} aria-label="Close">
                ×
              </button>
            </div>

            <div className="mbs-modalBody">
              <div className="mbs-meta">
                <span className="mbs-metaPill is-stage">
                  <span className="mbs-mdot" />
                  {stage}
                </span>
                <span className="mbs-metaPill is-module">
                  <span className="mbs-mdot" />
                  {selectedModule || "—"}
                </span>
              </div>

              <p className="mbs-sub2">
                Tell us what help you need. We’ll reply with module-fit, price range, and timeline.
              </p>

              <form className="mbs-form" onSubmit={onSubmit} noValidate>
                <div className="mbs-split">
                  <div>
                    <label className="mbs-label">Name</label>
                    <input
                      className={`mbs-field ${errs.name ? "is-error" : ""}`}
                      value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mbs-label">Email</label>
                    <input
                      className={`mbs-field ${errs.email ? "is-error" : ""}`}
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      placeholder="name@email.com"
                    />
                  </div>
                </div>

                <div className="mbs-split">
                  <div>
                    <label className="mbs-label">Phone / WhatsApp</label>
                    <input
                      className={`mbs-field ${errs.phone ? "is-error" : ""}`}
                      value={form.phone}
                      onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                      placeholder="+91…"
                    />
                  </div>
                  <div>
                    <label className="mbs-label">Upload (optional)</label>
                    <input className="mbs-field" type="file" />
                  </div>
                </div>

                <label className="mbs-label">What help do you need? (1–3 lines)</label>
                <textarea
                  className={`mbs-field mbs-textarea ${errs.query ? "is-error" : ""}`}
                  rows={4}
                  value={form.query}
                  onChange={(e) => setForm((p) => ({ ...p, query: e.target.value }))}
                  placeholder={stagePlaceholder(stage)}
                />

                {submitted ? (
                  <div className="mbs-success">
                    <b>Submitted.</b> Thanks — your request is received. We’ll reply with module-fit, price range, and timeline.
                  </div>
                ) : null}

                <div className="mbs-modalFoot">
                  <button className="mbs-btn mbs-btnPrimary" type="submit">
                    <span className="mbs-btnIcon">✓</span> Submit
                  </button>
                  <p className="mbs-micro">Confidential • Integrity-first • No obligation</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
