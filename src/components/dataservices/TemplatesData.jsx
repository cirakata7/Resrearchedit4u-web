// src/components/TemplatesDownloadSection.jsx
import React, { useMemo, useState } from "react";
import { COUNTRY_CODES, DOWNLOAD_TEMPLATES } from "../../assets/content/dataservices/templatesData";
import "../../assets/style/style.css";

function cn(...xs) {
  return xs.filter(Boolean).join(" ");
}

function Button({ variant = "primary", size = "md", disabled, onClick, type = "button", children }) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "btn",
        variant === "primary" && "btn--primary",
        variant === "ghost" && "btn--ghost",
        size === "sm" && "btn--sm"
      )}
    >
      {children}
    </button>
  );
}

function Modal({ open, title, onClose, children }) {
  if (!open) return null;

  return (
    <div className="modalOverlay" role="dialog" aria-modal="true" aria-label={title}>
      <div className="modalCard">
        <div className="modalTop">
          <div className="modalTitleWrap">
            <div className="modalTitle">{title}</div>
          </div>
          <button className="modalClose" onClick={onClose} aria-label="Close dialog">
            Close
          </button>
        </div>
        <div className="modalBody">{children}</div>
      </div>
    </div>
  );
}

function createAndDownloadDummyFile(fileName, contextText) {
  // Replace this with a real file URL download in production.
  const content = `RE4U Template Download\n\n${contextText}\n\n(Replace with actual PDF/Docx download link)`;
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName?.replace(/\s+/g, "-") || "download.txt";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || "").trim());
}

function normalizePhone(phone) {
  return String(phone || "").replace(/[^\d]/g, "");
}

export default function TemplatesDownloadSection() {
  const templates = useMemo(() => DOWNLOAD_TEMPLATES, []);
  const codes = useMemo(() => COUNTRY_CODES, []);

  const [activeId, setActiveId] = useState(null);
  const [busy, setBusy] = useState(false);
  const [toast, setToast] = useState(null);

  // Form state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [cc, setCc] = useState(codes?.[0]?.code || "+91");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const activeItem = templates.find((t) => t.id === activeId);

  function resetForm() {
    setFullName("");
    setEmail("");
    setCc(codes?.[0]?.code || "+91");
    setPhone("");
    setErrors({});
  }

  function openModal(itemId) {
    setActiveId(itemId);
    setToast(null);
    resetForm();
  }

  function closeModal() {
    setActiveId(null);
    setBusy(false);
    setErrors({});
  }

  function validate() {
    const e = {};
    const n = String(fullName || "").trim();
    const em = String(email || "").trim();
    const p = normalizePhone(phone);

    if (!n) e.fullName = "Full name is required.";
    if (!em) e.email = "Email is required.";
    else if (!isValidEmail(em)) e.email = "Enter a valid email address.";
    if (!p) e.phone = "Phone number is required.";
    else if (p.length < 7) e.phone = "Enter a valid phone number.";

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleJustDownload() {
    if (!validate()) return;

    setBusy(true);
    try {
      // Simulate verification/logging
      await new Promise((r) => setTimeout(r, 600));

      createAndDownloadDummyFile(
        activeItem?.fileName || "download.txt",
        `Download: ${activeItem?.title}\nName: ${fullName}\nEmail: ${email}\nPhone: ${cc} ${normalizePhone(phone)}`
      );

      setToast({ type: "success", msg: "Download started." });
    } finally {
      setBusy(false);
    }
  }

  async function handleEmailAndDownload() {
    if (!validate()) return;

    setBusy(true);
    try {
      // Simulate “send email + download”
      await new Promise((r) => setTimeout(r, 800));

      createAndDownloadDummyFile(
        activeItem?.fileName || "download.txt",
        `Download: ${activeItem?.title}\n(Email delivery simulated)\nName: ${fullName}\nEmail: ${email}\nPhone: ${cc} ${normalizePhone(phone)}`
      );

      setToast({ type: "success", msg: "Email queued and download started." });
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="tdWrap">
      <div className="tdShell">
        <header className="tdHeader">
          <h2 className="tdTitle">Templates & checklists you can download (with verification)</h2>
          <p className="tdSubtitle">
            Get instant access after you share your name, email, and phone (with country code).
            We’ll also send the link to your inbox.
          </p>
        </header>

        <div className="tdGrid">
          {templates.map((t) => (
            <article key={t.id} className="tdCard">
              <div className="tdCardTitle">{t.title}</div>
              <p className="tdCardDesc">{t.desc}</p>
              <div className="tdCardActions">
                <Button onClick={() => openModal(t.id)}>Download</Button>
              </div>
            </article>
          ))}
        </div>

        <div className="tdBottomCallout">
          <div className="tdBottomText">
            Want these aligned to your institute/sponsor format?{" "}
            <a className="tdLink" href="#upload">
              Upload your template.
            </a>
          </div>
        </div>
      </div>

      <Modal open={!!activeItem} title="Get the download link" onClose={closeModal}>
        <div className="modalMeta">
          <div className="modalMetaLine">
            <span className="modalMetaLabel">Download:</span>{" "}
            <span className="modalMetaValue">{activeItem?.title}</span>
          </div>
          <div className="modalMetaSub">
            Share your details once. We’ll start the download and email the link (if delivery is enabled).
          </div>
        </div>

        <form className="formGrid" onSubmit={(e) => e.preventDefault()}>
          <div className="field">
            <label className="label">
              Full name<span className="req">*</span>
            </label>
            <input
              className={cn("input", errors.fullName && "input--error")}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your name"
              autoComplete="name"
            />
            {errors.fullName ? <div className="err">{errors.fullName}</div> : null}
          </div>

          <div className="field">
            <label className="label">
              Email<span className="req">*</span>
            </label>
            <input
              className={cn("input", errors.email && "input--error")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@email.com"
              autoComplete="email"
            />
            {errors.email ? <div className="err">{errors.email}</div> : null}
          </div>

          <div className="field field--full">
            <label className="label">
              Phone / WhatsApp<span className="req">*</span>
            </label>

            <div className="phoneRow">
              <div className="subField">
                <div className="subLabel">Country code</div>
                <select className="input" value={cc} onChange={(e) => setCc(e.target.value)}>
                  {codes.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="subField subField--grow">
                <div className="subLabel">Phone number</div>
                <input
                  className={cn("input", errors.phone && "input--error")}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone number"
                  inputMode="tel"
                  autoComplete="tel"
                />
              </div>
            </div>

            <div className="helper">
              Use a number you can receive follow-ups on (we don’t spam).
            </div>

            {errors.phone ? <div className="err">{errors.phone}</div> : null}
          </div>

          <div className="modalActions">
            <Button disabled={busy} onClick={handleEmailAndDownload}>
              {busy ? "Working…" : "Email me + download"}
            </Button>
            <Button variant="ghost" size="sm" disabled={busy} onClick={handleJustDownload}>
              Just download
            </Button>
          </div>

          {toast ? (
            <div className={cn("toast", toast.type === "success" && "toast--success")}>
              {toast.msg}
            </div>
          ) : null}

          <div className="integrity">
            <span className="integrityStrong">Integrity-first:</span> We support analysis and reporting. We don’t fabricate data, results, or claims.
          </div>
        </form>
      </Modal>
    </section>
  );
}
