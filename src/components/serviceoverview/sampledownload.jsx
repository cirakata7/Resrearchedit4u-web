// src/components/SamplesDownloads/SamplesDownloads.jsx

import React, { useMemo, useState } from "react";
import "../../assets/style/style.css";
import {
  ASSETS,
  FILE_CONTENT,
  HIGHLIGHTS,
  TRUST_STRIP,
  REGIONS,
} from "../../assets/content/servicesoverviewdata/sampledownload";

const TABS = [
  { key: "preview", label: "Preview" },
  { key: "inside", label: "What's inside" },
  { key: "download", label: "Download" },
];

function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v || "").trim());
}

function downloadTxt(filename) {
  const content = FILE_CONTENT[filename] || "File content not found.";
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();

  setTimeout(() => URL.revokeObjectURL(url), 500);
}

export default function SamplesDownloads() {
  const initialTabs = useMemo(() => {
    const m = {};
    ASSETS.forEach((a) => (m[a.id] = "preview"));
    return m;
  }, []);

  const [activeTab, setActiveTab] = useState(initialTabs);

  // Modal state
  const [isOpen, setIsOpen] = useState(false);
  const [assetName, setAssetName] = useState("");
  const [assetFile, setAssetFile] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    region: "",
    query: "",
  });
  const [emailErr, setEmailErr] = useState(false);
  const [status, setStatus] = useState(
    "We will show a success message here (demo)."
  );

  function openModal(name, file) {
    setAssetName(name || "RE4U Asset");
    setAssetFile(file || "");
    setIsOpen(true);
    setEmailErr(false);
    setStatus("Demo: this would send an email + save the lead in your CRM.");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsOpen(false);
    setAssetName("");
    setAssetFile("");
    setForm({ name: "", email: "", region: "", query: "" });
    setEmailErr(false);
    setStatus("We will show a success message here (demo).");
    document.body.style.overflow = "";
  }

  function onSubmit(e) {
    e.preventDefault();
    const ok = isValidEmail(form.email);
    if (!ok) {
      setEmailErr(true);
      setStatus("Please enter a valid email.");
      return;
    }
    setEmailErr(false);
    setStatus(
      "Success! We'll email the asset link shortly (demo). You can now close this window."
    );
  }

  return (
    <div className="sdWrap">
      <section className="sdSection" aria-label="Samples and downloads">
        <div className="sdKicker">
          <span className="sdDot" />
          Samples / Downloads
        </div>

        <h2 className="sdH2">
          Proof assets that feel like "next steps" - not marketing.
        </h2>

        <p className="sdSub">
          Each asset includes a <b>before -&gt; after</b> snippet so stressed
          scholars instantly understand the benefit. Download instantly, or
          optionally send to your email for later.
        </p>

        <div className="sdPillRow" aria-label="Highlights">
          {HIGHLIGHTS.map((h, idx) => (
            <span className="sdPill" key={idx}>
              <span className="sdMiniDot" />
              <b>{h.bold}</b> {h.text}
            </span>
          ))}
        </div>

        <div className="sdGrid">
          {ASSETS.map((a) => {
            const tab = activeTab[a.id] || "preview";
            return (
              <article className="sdAsset" key={a.id} data-asset={a.id}>
                <div className="sdAssetHead">
                  <div className="sdBadgeRow">
                    <span className="sdTag">
                      <span className="sdIco">{a.tagLeft.icon}</span>{" "}
                      {a.tagLeft.label}
                    </span>
                    <span className="sdTag">
                      <span className="sdIco">{a.tagRight.icon}</span>{" "}
                      {a.tagRight.label}
                    </span>
                  </div>

                  <div className="sdAssetTitle">{a.title}</div>
                  <p className="sdAssetDesc">{a.desc}</p>
                </div>

                <div className="sdTabs" role="tablist" aria-label="Asset tabs">
                  {TABS.map((t) => {
                    const selected = tab === t.key;
                    return (
                      <button
                        key={t.key}
                        className="sdTabBtn"
                        role="tab"
                        aria-selected={selected ? "true" : "false"}
                        onClick={() =>
                          setActiveTab((p) => ({ ...p, [a.id]: t.key }))
                        }
                        type="button"
                      >
                        <span className="sdSmall" />
                        {t.label}
                      </button>
                    );
                  })}
                </div>

                {/* Panels */}
                <div
                  className="sdPanel"
                  aria-hidden={tab === "preview" ? "false" : "true"}
                  style={{ display: tab === "preview" ? "block" : "none" }}
                >
                  <div className="sdPreview">
                    <div className="sdSplit">
                      <div className="sdLabel">
                        <span className="sdChip" />
                        {a.before.title}
                      </div>
                      <p className="sdSplitP">{a.before.text}</p>
                    </div>

                    <div className="sdSplit">
                      <div className="sdLabel">
                        <span className="sdChip" />
                        {a.after.title}
                      </div>
                      <p className="sdSplitP">{a.after.text}</p>
                    </div>
                  </div>
                </div>

                <div
                  className="sdPanel"
                  aria-hidden={tab === "inside" ? "false" : "true"}
                  style={{ display: tab === "inside" ? "block" : "none" }}
                >
                  <ul className="sdInsideList">
                    {a.inside.map((x, i) => (
                      <li key={i}>{x}</li>
                    ))}
                  </ul>
                </div>

                <div
                  className="sdPanel"
                  aria-hidden={tab === "download" ? "false" : "true"}
                  style={{ display: tab === "download" ? "block" : "none" }}
                >
                  <div className="sdCtaRow">
                    <button
                      className="sdBtn sdBtnPrimary"
                      type="button"
                      onClick={() => downloadTxt(a.file)}
                    >
                      <span className="sdDotIcon">↓</span> Download now
                    </button>

                    <button
                      className="sdBtn sdBtnGhost"
                      type="button"
                      onClick={() => openModal(a.title, a.file)}
                    >
                      <span className="sdDotIcon">✉</span> Email me this
                    </button>
                  </div>

                  <div className="sdMicro">{a.micro}</div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="sdTrust" aria-label="Trust strip">
          {TRUST_STRIP.map((t, idx) => (
            <span className="sdPill" key={idx}>
              <span className="sdMiniDot" />
              <b>{t.bold}</b> {t.text}
            </span>
          ))}
        </div>
      </section>

      {/* Modal */}
      <div
        className="sdModal"
        aria-hidden={isOpen ? "false" : "true"}
        role="dialog"
        aria-modal="true"
        aria-label="Email asset modal"
        onClick={(e) => {
          if (e.target.classList.contains("sdModal")) closeModal();
        }}
        style={{ display: isOpen ? "grid" : "none" }}
      >
        <div className="sdModalCard">
          <div className="sdModalHead">
            <div className="sdModalTitle">Email me: {assetName}</div>
            <button className="sdX" type="button" onClick={closeModal} aria-label="Close">
              ✕
            </button>
          </div>

          <div className="sdModalBody">
            <div className="sdTwo">
              <form className="sdForm" onSubmit={onSubmit} noValidate>
                <div className="sdField">
                  <label htmlFor="sdName">Name</label>
                  <input
                    id="sdName"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Your name"
                  />
                </div>

                <div className="sdField">
                  <label htmlFor="sdEmail">
                    Email <span className="sdReq">*</span>
                  </label>
                  <input
                    id="sdEmail"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    placeholder="you@university.edu"
                    required
                  />
                  {emailErr ? (
                    <div className="sdErr">Please enter a valid email.</div>
                  ) : null}
                </div>

                <div className="sdField">
                  <label htmlFor="sdRegion">Country / region (optional)</label>
                  <select
                    id="sdRegion"
                    value={form.region}
                    onChange={(e) => setForm((p) => ({ ...p, region: e.target.value }))}
                  >
                    <option value="">Select...</option>
                    {REGIONS.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                  <div className="sdHelper">
                    Used only to match terminology (IRB / HREC / REC) and price band later.
                  </div>
                </div>

                <div className="sdField">
                  <label htmlFor="sdQuery">Optional note (1-2 lines)</label>
                  <textarea
                    id="sdQuery"
                    value={form.query}
                    onChange={(e) => setForm((p) => ({ ...p, query: e.target.value }))}
                    placeholder="Example: supervisor says the gap is unclear; need defensible methodology."
                  />
                  <div className="sdHelper">
                    Keep it short. We ask follow-ups only if needed.
                  </div>
                </div>

                <div className="sdCtaRow">
                  <button type="submit" className="sdBtn sdBtnPrimary">
                    <span className="sdDotIcon">↗</span> Send to my email
                  </button>

                  <button
                    type="button"
                    className="sdBtn sdBtnGhost"
                    onClick={() => {
                      if (assetFile) downloadTxt(assetFile);
                      setStatus("Downloaded. You can still submit to email if you want.");
                    }}
                  >
                    <span className="sdDotIcon">↓</span> Download instead
                  </button>
                </div>

                <div className="sdStatus">{status}</div>
              </form>

              <div className="sdSideNote">
                <b>What happens next</b>
                <br />- We send you the asset link (and a short "how to use it").
                <br />- If you add a note, we can reply with a <b>best-fit module</b> suggestion.
                <br />
                <br />
                <b>Confidential & ethical</b>
                <br />
                We support clarity, structure, and defensible methods - not misconduct.
              </div>
            </div>
          </div>

          <div className="sdModalFoot">
            <div className="sdFootStatus">Asset: {assetName || "-"}</div>
            <div className="sdFootStatus">Close with the ✕ button.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
