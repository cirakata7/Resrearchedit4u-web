import React, { useMemo, useState } from "react";
import "../../assets/style/style.css";
import { RESOURCES_PAGE } from "../../assets/content/researchplanningdata/Freetemplates";

function Button({ variant, children, href, onClick }) {
  if (variant === "link") {
    return (
      <a className="rsLink" href={href} onClick={onClick}>
        {children}
      </a>
    );
  }

  const cls = variant === "primary" ? "rsBtn rsBtnPrimary" : "rsBtn rsBtnGhost";
  return (
    <a className={cls} href={href} onClick={onClick} role="button">
      {children}
    </a>
  );
}

function Tag({ children }) {
  return (
    <span className="rsTag" aria-label="tag">
      {children}
    </span>
  );
}

/** Small inline modal for Preview */
function PreviewModal({ open, title, onClose }) {
  if (!open) return null;
  return (
    <div className="rsModalOverlay" role="dialog" aria-modal="true" aria-label="Preview modal">
      <div className="rsModal">
        <div className="rsModalHead">
          <div className="rsModalTitle">{title}</div>
          <button type="button" className="rsModalClose" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <div className="rsModalBody">
          <div className="rsPreviewBox">
            Preview placeholder (connect your PDF/image preview here).
          </div>
          <div className="rsModalHint">
            Hook this to your viewer: open PDF in a new tab, or render pages inside this modal.
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Freetemplates() {
  const [preview, setPreview] = useState({ open: false, title: "" });

  const templates = useMemo(() => RESOURCES_PAGE.templates.items, []);
  const samples = useMemo(() => RESOURCES_PAGE.samples.items, []);

  const openPreview = (title) => (e) => {
    e?.preventDefault?.();
    setPreview({ open: true, title });
  };

  const closePreview = () => setPreview({ open: false, title: "" });

  return (
    <section className="rsPage" aria-label="Resources and samples">
      <div className="rsShell">
        {/* Templates */}
        <header className="rsHeader">
          <h2 className="rsH">{RESOURCES_PAGE.templates.title}</h2>
          <p className="rsSub">{RESOURCES_PAGE.templates.subtitle}</p>
        </header>

        <div className="rsGrid3">
          {templates.map((t) => (
            <article className="rsCard" key={t.id}>
              <Tag>{t.tag}</Tag>
              <h3 className="rsCardTitle">{t.title}</h3>
              <p className="rsCardDesc">{t.desc}</p>

              <div className="rsActions">
                <Button variant={t.primaryCta.variant} href={t.primaryCta.href}>
                  {t.primaryCta.label}
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Samples */}
        <header className="rsHeader rsHeaderGap">
          <h2 className="rsH">{RESOURCES_PAGE.samples.title}</h2>
          <p className="rsSub">{RESOURCES_PAGE.samples.subtitle}</p>
        </header>

        <div className="rsGrid3">
          {samples.map((s) => (
            <article className="rsCard" key={s.id}>
              <div className="rsTopRow">
                <Tag>{s.tag}</Tag>
                <div className="rsMeta">{s.meta}</div>
              </div>

              <h3 className="rsCardTitle">{s.title}</h3>
              <p className="rsCardDesc">{s.desc}</p>

              <div className="rsActions rsActionsSplit">
                <Button
                  variant="primary"
                  href={s.actions.find((a) => a.id === "preview")?.href || "#"}
                  onClick={openPreview(s.title)}
                >
                  Preview
                </Button>

                <Button
                  variant="link"
                  href={s.actions.find((a) => a.id === "download")?.href || "#"}
                >
                  Download PDF
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <PreviewModal open={preview.open} title={preview.title} onClose={closePreview} />
    </section>
  );
}
