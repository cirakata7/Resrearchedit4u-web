import React, { useEffect, useMemo, useRef, useState } from "react";
import "../../assets/style/style.css";
import { SAMPLE_EXCERPTS } from "../../assets/content/dataservices/sampleExcerptsData";

/* ---------- Accessible Modal (focus trap + ESC + click outside) ---------- */
function Modal({ open, title, children, onClose }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();

      if (e.key === "Tab") {
        const panel = panelRef.current;
        if (!panel) return;
        const focusables = panel.querySelectorAll(
          'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])'
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

    setTimeout(() => {
      const panel = panelRef.current;
      const firstFocusable = panel?.querySelector(
        "button,input,select,textarea,[href],[tabindex]:not([tabindex='-1'])"
      );
      firstFocusable?.focus?.();
    }, 30);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="sxModalOverlay" role="dialog" aria-modal="true" aria-label={title} onMouseDown={onClose}>
      <div className="sxModalPanel" ref={panelRef} onMouseDown={(e) => e.stopPropagation()}>
        <div className="sxModalHeader">
          <div className="sxModalTitle">{title}</div>
          <button className="sxIconBtn" type="button" onClick={onClose} aria-label="Close modal">
            ×
          </button>
        </div>
        <div className="sxModalBody">{children}</div>
      </div>
    </div>
  );
}

export default function SampleExcerpts() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [requestOpen, setRequestOpen] = useState(false);
  const [activeId, setActiveId] = useState(SAMPLE_EXCERPTS[0].id);

  const active = useMemo(
    () => SAMPLE_EXCERPTS.find((x) => x.id === activeId) ?? SAMPLE_EXCERPTS[0],
    [activeId]
  );

  // Request form (simple validation)
  const [form, setForm] = useState({ name: "", email: "", topic: "", notes: "" });
  const [touched, setTouched] = useState({});
  const errors = useMemo(() => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) e.email = "Enter a valid email.";
    if (!form.topic.trim()) e.topic = "Subject/topic is required.";
    return e;
  }, [form]);
  const canSubmit = Object.keys(errors).length === 0;

  const openPreview = (id) => {
    setActiveId(id);
    setPreviewOpen(true);
  };

  const openRequest = (id) => {
    setActiveId(id);
    setRequestOpen(true);
  };

  const submit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, topic: true, notes: true });
    if (!canSubmit) return;

    alert("Request submitted (demo). Connect this payload to your backend/API.");
    setRequestOpen(false);
    setForm({ name: "", email: "", topic: "", notes: "" });
    setTouched({});
  };

  return (
    <section className="sxWrap">
      <div className="sxShell">
        <header className="sxHeader">
          <h2 className="sxHeading">See sample excerpts before you decide</h2>
          <p className="sxSub">
            These are brief excerpts showing how we structure analysis decisions, QC checks, and reporting outputs.
            Want a closer match to your subject? Request one.
          </p>
        </header>

        <div className="sxGrid" role="list">
          {SAMPLE_EXCERPTS.map((card) => (
            <article className="sxCard" role="listitem" key={card.id}>
              <div className="sxCardTop">
                <div className="sxChipRow">
                  <span className="sxChip">
                    {card.badgeDot ? <span className="sxDot" aria-hidden /> : null}
                    {card.badge}
                  </span>
                </div>
                <div className="sxRightTag">{card.rightTag}</div>
              </div>

              <div className="sxTitle">{card.title}</div>
              <div className="sxDesc">{card.desc}</div>

              <div className="sxActions">
                <button className="sxBtnPrimary" type="button" onClick={() => openPreview(card.id)}>
                  Preview
                </button>
                <button className="sxBtnGhost" type="button" onClick={() => openRequest(card.id)}>
                  Request full sample
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Preview Modal */}
        <Modal
          open={previewOpen}
          title={active.preview.modalTitle}
          onClose={() => setPreviewOpen(false)}
        >
          <div className="sxPreviewGrid">
            {/* Left: “Screenshot”/Preview area */}
            <div className="sxPreviewLeft">
              <div className="sxPreviewFrame">
                <div className="sxPreviewFrameTop">
                  <span className="sxMiniPill">{active.preview.metaLeft}</span>
                  <span className="sxMiniPill soft">{active.preview.metaRight}</span>
                </div>

                {/* Placeholder for screenshot/image/PDF */}
                <div className="sxPreviewMock">
                  <div className="sxMockTitle">Preview snapshot</div>
                  <div className="sxMockText">
                    Replace this with your real preview image/PDF in production.
                  </div>
                  <div className="sxMockRow">
                    <span className="sxMockBadge">QC</span>
                    <span className="sxMockBadge">Notes</span>
                    <span className="sxMockBadge">Tables</span>
                  </div>
                </div>
              </div>

              <div className="sxFooterNote">{active.preview.footerNote}</div>
            </div>

            {/* Right: details */}
            <div className="sxPreviewRight">
              {active.preview.sections.map((sec, idx) => (
                <div className="sxBlock" key={idx}>
                  <div className="sxBlockLabel">{sec.label}</div>
                  <ul className="sxList">
                    {sec.items.map((it, i) => (
                      <li key={i}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="sxPreviewCtas">
                <button className="sxBtnPrimary" type="button" onClick={() => { setPreviewOpen(false); setRequestOpen(true); }}>
                  Request this full sample
                </button>
                <button className="sxBtnSecondary" type="button" onClick={() => setPreviewOpen(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </Modal>

        {/* Request Modal
        <Modal
          open={requestOpen}
          title={`Request full sample — ${active.badge}`}
          onClose={() => setRequestOpen(false)}
        >
          <form className="sxForm" onSubmit={submit}>
            <div className="sxFormGrid">
              <label className="sxField">
                <span className="sxLabel">Your name</span>
                <input
                  className={`sxInput ${touched.name && errors.name ? "hasError" : ""}`}
                  value={form.name}
                  onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                  onBlur={() => setTouched((s) => ({ ...s, name: true }))}
                  placeholder="e.g., Your Name"
                />
                {touched.name && errors.name ? <span className="sxErr">{errors.name}</span> : null}
              </label>

              <label className="sxField">
                <span className="sxLabel">Email</span>
                <input
                  className={`sxInput ${touched.email && errors.email ? "hasError" : ""}`}
                  value={form.email}
                  onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                  onBlur={() => setTouched((s) => ({ ...s, email: true }))}
                  placeholder="e.g., you@university.edu"
                />
                {touched.email && errors.email ? <span className="sxErr">{errors.email}</span> : null}
              </label>

              <label className="sxField sxSpan2">
                <span className="sxLabel">Subject / topic</span>
                <input
                  className={`sxInput ${touched.topic && errors.topic ? "hasError" : ""}`}
                  value={form.topic}
                  onChange={(e) => setForm((s) => ({ ...s, topic: e.target.value }))}
                  onBlur={() => setTouched((s) => ({ ...s, topic: true }))}
                  placeholder="e.g., Cr(VI) adsorption, Marketing segmentation, Education survey, etc."
                />
                {touched.topic && errors.topic ? <span className="sxErr">{errors.topic}</span> : null}
              </label>

              <label className="sxField sxSpan2">
                <span className="sxLabel">Notes (optional)</span>
                <textarea
                  className="sxInput sxTextarea"
                  value={form.notes}
                  onChange={(e) => setForm((s) => ({ ...s, notes: e.target.value }))}
                  onBlur={() => setTouched((s) => ({ ...s, notes: true }))}
                  placeholder="Dataset type, tool preference (SPSS/R), deadlines, supervisor template, etc."
                />
                <span className="sxHelper">We will respond with the closest matching excerpt for your subject.</span>
              </label>
            </div>

            <div className="sxFormActions">
              <button type="button" className="sxBtnSecondary" onClick={() => setRequestOpen(false)}>
                Cancel
              </button>
              <button type="submit" className="sxBtnPrimary" disabled={!canSubmit} aria-disabled={!canSubmit}>
                Submit request
              </button>
            </div>
          </form>
        </Modal> */}
      </div>
    </section>
  );
}
