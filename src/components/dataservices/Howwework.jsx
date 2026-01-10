// HowWeWork.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import "../../assets/style/style.css";
import { HOW_WE_WORK_STEPS } from "../../assets/content/dataservices/HowWeWorks";

function Icon({ name }) {
  const common = { className: "hwIc", "aria-hidden": true, viewBox: "0 0 24 24" };
  switch (name) {
    case "upload":
      return (
        <svg {...common}>
          <path d="M12 3l4 4h-3v7h-2V7H8l4-4z" fill="currentColor" />
          <path d="M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      );
    case "doc":
      return (
        <svg {...common}>
          <path d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" fill="currentColor" opacity=".14"/>
          <path d="M14 3v4a2 2 0 0 0 2 2h4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
          <path d="M7 3h7l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
        </svg>
      );
    case "card":
      return (
        <svg {...common}>
          <rect x="4" y="6" width="16" height="12" rx="2.4" fill="currentColor" opacity=".14"/>
          <rect x="4" y="6" width="16" height="12" rx="2.4" fill="none" stroke="currentColor" strokeWidth="1.6"/>
          <path d="M4 10h16" fill="none" stroke="currentColor" strokeWidth="1.4" opacity=".9"/>
          <path d="M7 15h5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M5 19V5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          <path d="M5 19h14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          <path d="M8 16l3-4 3 2 4-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 2l8 4v6c0 5-3.4 9.7-8 10-4.6-.3-8-5-8-10V6l8-4z" fill="currentColor" opacity=".14"/>
          <path d="M12 2l8 4v6c0 5-3.4 9.7-8 10-4.6-.3-8-5-8-10V6l8-4z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
          <path d="M8.2 12.2l2.2 2.2 5.4-5.4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "refresh":
      return (
        <svg {...common}>
          <path d="M20 12a8 8 0 1 1-2.3-5.7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          <path d="M20 4v5h-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "link":
      return (
        <svg {...common}>
          <path d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          <path d="M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 1 1-7-7l1-1" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="M20 6l-11 11-5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "flag":
      return (
        <svg {...common}>
          <path d="M6 21V4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          <path d="M6 5h9l-1.2 2.6L15 10H6" fill="currentColor" opacity=".14"/>
          <path d="M6 5h9l-1.2 2.6L15 10H6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        </svg>
      );
    case "grid":
    default:
      return (
        <svg {...common}>
          <rect x="5" y="5" width="6" height="6" rx="1.2" fill="currentColor" opacity=".14"/>
          <rect x="13" y="5" width="6" height="6" rx="1.2" fill="currentColor" opacity=".14"/>
          <rect x="5" y="13" width="6" height="6" rx="1.2" fill="currentColor" opacity=".14"/>
          <rect x="13" y="13" width="6" height="6" rx="1.2" fill="currentColor" opacity=".14"/>
          <path d="M5 5h6v6H5zM13 5h6v6h-6zM5 13h6v6H5zM13 13h6v6h-6z" fill="none" stroke="currentColor" strokeWidth="1.4"/>
        </svg>
      );
  }
}

function Modal({ open, title, children, onClose }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key !== "Tab") return;

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
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      const panel = panelRef.current;
      const focusable = panel?.querySelector("input, button, [href], [tabindex]:not([tabindex='-1'])");
      focusable?.focus?.();
    }, 20);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="hwModalOverlay" onMouseDown={onClose} role="dialog" aria-modal="true" aria-label={title}>
      <div className="hwModalPanel" ref={panelRef} onMouseDown={(e) => e.stopPropagation()}>
        <div className="hwModalHead">
          <div className="hwModalTitle">{title}</div>
          <button className="hwIconBtn" onClick={onClose} type="button" aria-label="Close">
            ×
          </button>
        </div>
        <div className="hwModalBody">{children}</div>
      </div>
    </div>
  );
}

export default function HowWeWork() {
  const [active, setActive] = useState(1);
  const [openReview, setOpenReview] = useState(false);
  const [openCall, setOpenCall] = useState(false);

  const step = useMemo(
    () => HOW_WE_WORK_STEPS.find((s) => s.id === active) ?? HOW_WE_WORK_STEPS[0],
    [active]
  );

  const [reviewForm, setReviewForm] = useState({ name: "", email: "", dataset: "", notes: "" });
  const [touched, setTouched] = useState({});
  const errors = useMemo(() => {
    const e = {};
    if (!reviewForm.name.trim()) e.name = "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(reviewForm.email.trim())) e.email = "Enter a valid email.";
    if (!reviewForm.dataset.trim()) e.dataset = "Dataset link is required.";
    return e;
  }, [reviewForm]);

  const canSubmit = Object.keys(errors).length === 0;

  const submitReview = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, dataset: true, notes: true });
    if (!canSubmit) return;

    alert("Submitted (demo). Connect to your backend/API for production.");
    setOpenReview(false);
    setReviewForm({ name: "", email: "", dataset: "", notes: "" });
    setTouched({});
  };

  const onPillKey = (e, id) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive(id);
    }
    if (e.key === "ArrowRight") setActive((p) => Math.min(6, p + 1));
    if (e.key === "ArrowLeft") setActive((p) => Math.max(1, p - 1));
  };

  return (
    <section className="hwWrap">
      <div className="hwShell">
        <header className="hwHeader">
          <h2 className="hwH">How we work (transparent, QC-first)</h2>
          <p className="hwSub">
            No surprises. You’ll know what’s feasible, what you’ll receive, and how QC is handled—before work starts.
          </p>
        </header>

        {/* Steps row */}
        <nav className="hwSteps" aria-label="Process steps">
          {HOW_WE_WORK_STEPS.slice(0, 5).map((s) => (
            <button
              key={s.id}
              type="button"
              className={`hwStep ${active === s.id ? "isActive" : ""}`}
              onClick={() => setActive(s.id)}
              onKeyDown={(e) => onPillKey(e, s.id)}
            >
              <span className={`hwNum ${active === s.id ? "isActive" : ""}`}>{s.id}</span>
              <span className="hwStepIc">
                <Icon name={s.icon} />
              </span>
              <span className="hwStepLabel">{s.label}</span>
            </button>
          ))}

          <button
            type="button"
            className={`hwStep hwStepSecondRow ${active === 6 ? "isActive" : ""}`}
            onClick={() => setActive(6)}
            onKeyDown={(e) => onPillKey(e, 6)}
          >
            <span className={`hwNum ${active === 6 ? "isActive" : ""}`}>6</span>
            <span className="hwStepIc">
              <Icon name="refresh" />
            </span>
            <span className="hwStepLabel">Deliver + revise</span>
          </button>
        </nav>

        {/* Content card */}
        <div className="hwCard">
          <div className="hwCardLeft">
            <div className="hwCardIcon">
              <Icon name={step.icon} />
            </div>

            <div className="hwCardMain">
              <div className="hwCardTitle">{step.title}</div>
              <div className="hwCardDesc">{step.desc}</div>

              <ul className="hwBullets">
                {step.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>

          {step.rightCards?.length ? (
            <>
              <div className="hwDivider" aria-hidden />
              <div className="hwCardRight" aria-label="QC checks">
                <div className="hwMiniGrid">
                  {step.rightCards.map((c, i) => (
                    <div className="hwMiniCard" key={i}>
                      <div className="hwMiniIcon">
                        <Icon name={c.icon} />
                      </div>
                      <div className="hwMiniText">
                        <div className="hwMiniTitle">{c.title}</div>
                        <div className="hwMiniSub">{c.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : null}
        </div>

        {/* CTA row */}
        <div className="hwCtas">
          <button className="hwBtnPrimary" type="button" onClick={() => setOpenReview(true)}>
            Get a Data Review + Quote
          </button>
          <button className="hwBtnSecondary" type="button" onClick={() => setOpenCall(true)}>
            Talk to an Analyst (10 min)
          </button>
        </div>
      </div>

      {/* Modals
      <Modal open={openReview} title="Get a Data Review + Quote" onClose={() => setOpenReview(false)}>
        <form className="hwForm" onSubmit={submitReview}>
          <div className="hwFormGrid">
            <label className="hwField">
              <span className="hwLabel">Your name</span>
              <input
                className={`hwInput ${touched.name && errors.name ? "hasError" : ""}`}
                value={reviewForm.name}
                onChange={(e) => setReviewForm((s) => ({ ...s, name: e.target.value }))}
                onBlur={() => setTouched((s) => ({ ...s, name: true }))}
                placeholder="e.g., Basant Kumar"
              />
              {touched.name && errors.name ? <span className="hwErr">{errors.name}</span> : null}
            </label>

            <label className="hwField">
              <span className="hwLabel">Email</span>
              <input
                className={`hwInput ${touched.email && errors.email ? "hasError" : ""}`}
                value={reviewForm.email}
                onChange={(e) => setReviewForm((s) => ({ ...s, email: e.target.value }))}
                onBlur={() => setTouched((s) => ({ ...s, email: true }))}
                placeholder="e.g., you@university.edu"
              />
              {touched.email && errors.email ? <span className="hwErr">{errors.email}</span> : null}
            </label>

            <label className="hwField span2">
              <span className="hwLabel">Dataset link</span>
              <input
                className={`hwInput ${touched.dataset && errors.dataset ? "hasError" : ""}`}
                value={reviewForm.dataset}
                onChange={(e) => setReviewForm((s) => ({ ...s, dataset: e.target.value }))}
                onBlur={() => setTouched((s) => ({ ...s, dataset: true }))}
                placeholder="Google Drive/Dropbox link (or describe how you will share)"
              />
              {touched.dataset && errors.dataset ? <span className="hwErr">{errors.dataset}</span> : null}
            </label>

            <label className="hwField span2">
              <span className="hwLabel">Notes (optional)</span>
              <textarea
                className="hwInput hwTextarea"
                value={reviewForm.notes}
                onChange={(e) => setReviewForm((s) => ({ ...s, notes: e.target.value }))}
                onBlur={() => setTouched((s) => ({ ...s, notes: true }))}
                placeholder="Study design, variables, hypothesis, deadline, sponsor template, required tool, etc."
              />
              <span className="hwHelper">We’ll reply with next-step options and a quote after review.</span>
            </label>
          </div>

          <div className="hwFormActions">
            <button type="button" className="hwBtnSecondary" onClick={() => setOpenReview(false)}>
              Cancel
            </button>
            <button type="submit" className="hwBtnPrimary" disabled={!canSubmit} aria-disabled={!canSubmit}>
              Submit for review
            </button>
          </div>
        </form>
      </Modal>

      <Modal open={openCall} title="Talk to an Analyst (10 min)" onClose={() => setOpenCall(false)}>
        <div className="hwCall">
          <div className="hwCallBox">
            <div className="hwCallTitle">Quick call agenda</div>
            <ul className="hwBullets compact">
              <li>Confirm your objectives and dataset readiness</li>
              <li>Pick the right analysis pathway (and what to avoid)</li>
              <li>Estimate timeline and deliverables</li>
            </ul>
            <div className="hwCallActions">
              <button className="hwBtnPrimary" type="button" onClick={() => alert("Demo: open Calendly/booking link")}>
                Book a 10-min call
              </button>
              <button className="hwBtnSecondary" type="button" onClick={() => setOpenCall(false)}>
                Close
              </button>
            </div>
          </div>
          <div className="hwHint">
            Replace the demo action with your real scheduling link (Calendly / Google Calendar appointment page).
          </div>
        </div>
      </Modal> */}
    </section>
  );
}
