// src/components/Testimonials/Testimonials.jsx

import React, { useMemo, useState } from "react";
import "../../assets/style/style.css";
import {
  TESTIMONIALS,
  TRUST_PILLS,
  COMMON_WINS,
  FOOT_BADGES,
  STAGES,
} from "../../assets/content/servicesoverviewdata/researcherstrust";

function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v || "").trim());
}

export default function ResearcherTrust() {
  // Expanded state per card
  const initialExpanded = useMemo(() => {
    const m = {};
    TESTIMONIALS.forEach((t) => (m[t.id] = !!t.defaultExpanded));
    return m;
  }, []);
  const [expanded, setExpanded] = useState(initialExpanded);

  // Modal state
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [emailErr, setEmailErr] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    stage: "",
    problem: "",
    query: "",
    file: null,
  });

  function toggleCard(id) {
    setExpanded((p) => ({ ...p, [id]: !p[id] }));
  }

  function openModal(prefill) {
    setOpen(true);
    setStatus("");
    setEmailErr(false);

    setForm((p) => ({
      ...p,
      stage: prefill?.stage || p.stage,
      problem: prefill?.problem || p.problem,
    }));

    document.body.style.overflow = "hidden";
    setTimeout(() => {
      const el = document.getElementById("tName");
      if (el) el.focus();
    }, 60);
  }

  function closeModal() {
    setOpen(false);
    document.body.style.overflow = "";
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!isValidEmail(form.email)) {
      setEmailErr(true);
      setStatus("Please enter a valid email.");
      return;
    }
    setEmailErr(false);
    setStatus(
      "Thanks! Your request is saved (demo). In production, connect this form to your CRM/email workflow."
    );
  }

  function onClear() {
    setForm({
      name: "",
      email: "",
      phone: "",
      stage: "",
      problem: "",
      query: "",
      file: null,
    });
    setEmailErr(false);
    setStatus("");
  }

  return (
    <div className="twWrap">
      <section className="twSection" aria-label="Why researchers trust us">
        <header className="twHead">
          <div className="twKicker">
            <span className="twDot" /> WHY RESEARCHERS TRUST US
          </div>

          <h2 className="twH2">
            Trusted because we reduce confusion — not because we “sell packages”.
          </h2>

          <p className="twSub">
            Real voices, real blockers, and what changed after support — designed
            to be readable, interactive, and SEO-friendly.
          </p>
        </header>

        <div className="twGrid">
          {/* LEFT: Cards */}
          <div className="twList">
            {TESTIMONIALS.map((t) => {
              const isOpen = !!expanded[t.id];
              return (
                <article
                  key={t.id}
                  className={`twCard ${isOpen ? "expanded" : ""}`}
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <meta
                    itemProp="itemReviewed"
                    content="ResearchEdit4U research planning support"
                  />

                  <div className="twTop">
                    <div className="twAvatar" aria-hidden="true">
                      {t.initials}
                    </div>

                    <div className="twMeta">
                      <div className="twWho">
                        <span className="twName" itemProp="author">
                          {t.author}
                        </span>
                        <span className="twRole">• {t.role}</span>
                      </div>

                      <div className="twChips">
                        <span className="twChip">
                          <span className="twFlag" aria-hidden="true">
                            {t.flag}
                          </span>
                          <strong>{t.country}</strong>
                        </span>

                        {t.chips.map((c, i) => (
                          <span className="twChip" key={i}>
                            <strong>{c.label}</strong> {c.value}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="twQuote" itemProp="reviewBody">
                    {t.quote}
                  </div>

                  <div className="twActions">
                    <div className="twBtnRow">
                      <button
                        className="twBtn"
                        type="button"
                        aria-expanded={isOpen ? "true" : "false"}
                        onClick={() => toggleCard(t.id)}
                      >
                        <span className="twIco">i</span>
                        <span className="twBtnLabel">
                          {isOpen ? "Hide details" : "Show details"}
                        </span>
                      </button>

                      <button
                        className="twBtn primary"
                        type="button"
                        onClick={() => openModal(t.prefill)}
                      >
                        <span className="twIco">↗</span>
                        {t.id === "t2" ? "Request pricing & scope" : "Drop a query"}
                      </button>
                    </div>

                    <div className="twOutcome">
                      <strong>Outcome:</strong> {t.outcome}
                    </div>
                  </div>

                  <div className="twDetails">
                    <div>
                      <strong>Before:</strong> {t.details.before}
                    </div>
                    <div>
                      <strong>After:</strong> {t.details.after}
                    </div>

                    <ul>
                      {t.details.bullets.map((b, i) => (
                        <li key={i}>
                          <strong>{b.k}</strong> {b.v}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>

          {/* RIGHT: Sticky rail */}
          <aside className="twRail" aria-label="Trust rail">
            <div className="twRailInner">
              <div className="twRailCard">
                <div className="twRHead">
                  <div className="twRTitle">Fast scan</div>
                  <div className="twRBadge">Higher-ed focus</div>
                </div>

                <div className="twRBody">
                  <div className="twMiniBadges" aria-label="Trust signals">
                    {TRUST_PILLS.map((p) => (
                      <span className="twPill" key={p}>
                        <span className="twPDot" />
                        {p}
                      </span>
                    ))}
                  </div>

                  <div className="twRailList" aria-label="Common wins">
                    {COMMON_WINS.map((w, i) => (
                      <div className="twRailItem" key={i}>
                        <div className="twRailIcon">{w.icon}</div>
                        <div>
                          <b>{w.title}</b>
                          <span>{w.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="twCtaBox" role="region" aria-label="Call to action">
                <h3>Want a quote for your exact stage?</h3>
                <p>
                  Drop a 1–2 line query. We’ll reply with best-fit module(s), a
                  transparent price band, and timeline.
                </p>

                <div className="twCtaRow">
                  <button
                    className="twBtn primary"
                    type="button"
                    onClick={() => openModal({ stage: "", problem: "" })}
                  >
                    <span className="twIco">↗</span>Request pricing & scope
                  </button>

                  <button
                    className="twBtn"
                    type="button"
                    onClick={() => openModal({ stage: "", problem: "" })}
                  >
                    <span className="twIco">✎</span>Drop a query
                  </button>
                </div>

                <small>No obligation • Response time varies by workload</small>
              </div>
            </div>
          </aside>
        </div>

        <footer className="twFoot">
          <div className="twFootbar">
            <div className="twLock">
              <div className="twLbox">🔒</div>
              Integrity-first support — you remain the author.
            </div>

            <div className="twFootBadges">
              {FOOT_BADGES.map((b) => (
                <span className="twPill" key={b}>
                  <span className="twPDot" />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </footer>
      </section>

      {/* MODAL */}
      <div
        className={`twModal ${open ? "open" : ""}`}
        aria-hidden={open ? "false" : "true"}
        onClick={(e) => {
          if (e.target.classList.contains("twModal")) closeModal();
        }}
      >
        <div className="twPanel" role="dialog" aria-modal="true" aria-labelledby="mTitle">
          <div className="twPHead">
            <div>
              <h4 id="mTitle">Request pricing & scope</h4>
              <p id="mSub">
                Tell us your stage + blocker. We’ll reply with module(s), a transparent
                price band, and timeline.
              </p>
            </div>
            <button className="twX" type="button" onClick={closeModal} aria-label="Close">
              ×
            </button>
          </div>

          <form className="twForm" onSubmit={onSubmit} noValidate>
            <div className="twRow">
              <div>
                <label htmlFor="tName">Name</label>
                <input
                  id="tName"
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  autoComplete="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="tEmail">Email</label>
                <input
                  id="tEmail"
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  type="email"
                  autoComplete="email"
                  placeholder="name@email.com"
                  required
                />
                {emailErr ? <div className="twErr">Please enter a valid email.</div> : null}
              </div>
            </div>

            <div className="twRow">
              <div>
                <label htmlFor="tPhone">Phone (optional)</label>
                <input
                  id="tPhone"
                  value={form.phone}
                  onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                  autoComplete="tel"
                  placeholder="+91…"
                />
              </div>

              <div>
                <label htmlFor="tStage">Stage</label>
                <select
                  id="tStage"
                  value={form.stage}
                  onChange={(e) => setForm((p) => ({ ...p, stage: e.target.value }))}
                  required
                >
                  <option value="">Select…</option>
                  {STAGES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <label htmlFor="tProblem">Blocker / problem</label>
            <input
              id="tProblem"
              value={form.problem}
              onChange={(e) => setForm((p) => ({ ...p, problem: e.target.value }))}
              placeholder="E.g., Too many ideas, no clear direction"
              required
            />

            <label htmlFor="tQuery">Your query (1–2 lines)</label>
            <textarea
              id="tQuery"
              value={form.query}
              onChange={(e) => setForm((p) => ({ ...p, query: e.target.value }))}
              placeholder="Example: My supervisor says the gap is unclear. I need a defendable methodology and a clean plan."
              required
            />
            <div className="twHint">Keep it short. We’ll ask follow-ups only if needed.</div>

            <label htmlFor="tFile">Upload (optional)</label>
            <input
              id="tFile"
              type="file"
              onChange={(e) => setForm((p) => ({ ...p, file: e.target.files?.[0] || null }))}
            />

            <div className="twFormActions">
              <button className="twBtn" type="button" onClick={onClear}>
                <span className="twIco">↺</span>Clear
              </button>
              <button className="twBtn primary" type="submit">
                <span className="twIco">↗</span>Submit
              </button>
            </div>

            {status ? <div className="twMsg">{status}</div> : null}
          </form>
        </div>
      </div>
    </div>
  );
}
