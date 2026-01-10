// src/components/ServiceCategorySnapshot/ServiceCategorySnapshot.jsx

import React, { useMemo, useState } from "react";
import "../../assets/style/style.css";
import { SERVICE_CATEGORIES, TRUST_BADGES } from "../../assets/content/servicesoverviewdata/serviceover";

function downloadSample(serviceName) {
  // Same behaviour as your HTML: creates a placeholder file download. :contentReference[oaicite:1]{index=1}
  const content =
    `RE4U Sample (Placeholder)\nAsset: ${serviceName}\n\n` +
    `Replace this download with a PDF link later.\n`;

  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `RE4U_${serviceName.replace(/\s+/g, "_")}_Sample.txt`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export default function ServiceCategorySnapshot() {
  const [activeKey, setActiveKey] = useState(SERVICE_CATEGORIES[0]?.key || "planning");
  const [modalOpen, setModalOpen] = useState(false);
  const [toast, setToast] = useState("");

  const active = useMemo(
    () => SERVICE_CATEGORIES.find((c) => c.key === activeKey) || SERVICE_CATEGORIES[0],
    [activeKey]
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    category: active?.title || "",
    query: "",
  });

  // keep category synced when switching tabs
  React.useEffect(() => {
    setForm((p) => ({ ...p, category: active?.title || "" }));
  }, [active?.title]);

  function openModal() {
    setToast("");
    setModalOpen(true);
    // focus handled in effect
  }

  function closeModal() {
    setModalOpen(false);
  }

  React.useEffect(() => {
    function onEsc(e) {
      if (e.key === "Escape") closeModal();
    }
    if (modalOpen) window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [modalOpen]);

  React.useEffect(() => {
    if (!modalOpen) return;
    const t = setTimeout(() => {
      const el = document.querySelector("#re4u_name");
      if (el) el.focus();
    }, 50);
    return () => clearTimeout(t);
  }, [modalOpen]);

  function updateField(e) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  function clearForm() {
    setToast("");
    setForm({
      name: "",
      email: "",
      phone: "",
      category: active?.title || "",
      query: "",
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    setToast("Submitted. We’ll reply with scope + pricing to your email. You can close this window.");
  }

  return (
    <section className="scWrap" aria-labelledby="scTitle">
      <div className="scShell">
        <div className="scKicker">
          <span className="scDot" /> Service overview
        </div>

        <h2 className="scH2" id="scTitle">
          Pick a category. See exactly what you get.
        </h2>

        <p className="scSub">
          A clean, decision-ready snapshot (like your old site) — with <strong>“Starts at”</strong> pricing and a{" "}
          <strong>Download sample</strong> button inside every card.
        </p>

        <div className="scLayout">
          {/* CATEGORY RAIL */}
          <aside className="scRail" aria-label="Service categories">
            <div className="scRailTitle">
              <strong>Categories</strong>
              <span>{SERVICE_CATEGORIES.length} areas</span>
            </div>

            <div className="scCats" role="tablist" aria-label="Service category tabs">
              {SERVICE_CATEGORIES.map((c) => (
                <button
                  key={c.key}
                  className="scCatBtn"
                  type="button"
                  role="tab"
                  aria-selected={c.key === activeKey ? "true" : "false"}
                  onClick={() => setActiveKey(c.key)}
                >
                  <span className="scIco" aria-hidden="true">
                    {/* simple icon dot; swap with SVGs if you want exact ones */}
                    <span className="scIcoDot" />
                  </span>
                  <span className="scCatText">
                    <b>{c.title}</b>
                    <small>{c.short}</small>
                  </span>
                </button>
              ))}
            </div>
          </aside>

          {/* PANEL */}
          <main className="scPanel" aria-live="polite">
            <div className="scPanelTop">
              <div className="scPanelTitle">
                <h3 className="scH3">{active.title}</h3>
                <p className="scDesc">{active.desc}</p>
              </div>

              <div className="scTrust" aria-label="Trust badges">
                {TRUST_BADGES.map((b) => (
                  <span key={b} className="scBadge">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="scGrid">
              {active.cards.map((card) => (
                <article key={card.name} className="scCard">
                  <div className="scCardHead">
                    <h4 className="scH4">{card.name}</h4>
                    <span className="scPill">{card.tag}</span>
                  </div>

                  <ul className="scList">
                    {card.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>

                  <div className="scPriceRow">
                    <div className="scPrice">
                      Starts at <span>{card.price}</span> <small>(INR)</small>
                    </div>

                    <button
                      className="scBtn scBtnPrimary"
                      type="button"
                      onClick={() => downloadSample(card.name)}
                    >
                      Download sample
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="scFooter">
              <button className="scBtn" type="button" onClick={openModal}>
                Request pricing &amp; scope
              </button>
            </div>
          </main>
        </div>
      </div>

      {/* MODAL */}
      {modalOpen ? (
        <div
          className="scModalBack"
          role="dialog"
          aria-modal="true"
          aria-labelledby="scModalTitle"
          onClick={(e) => {
            if (e.target.classList.contains("scModalBack")) closeModal();
          }}
        >
          <div className="scModal">
            <div className="scModalTop">
              <b id="scModalTitle">Request pricing &amp; scope</b>
              <button className="scX" type="button" aria-label="Close" onClick={closeModal}>
                ✕
              </button>
            </div>

            <div className="scModalBody">
              <p className="scMini">
                We’ll reply with the best-fit module, a realistic timeline, and a transparent scope-based quote.
                Response time varies by workload.
              </p>

              <form className="scForm" onSubmit={onSubmit}>
                <div>
                  <label>
                    Name
                    <input
                      id="re4u_name"
                      required
                      name="name"
                      value={form.name}
                      onChange={updateField}
                      placeholder="Full name"
                    />
                  </label>
                </div>

                <div>
                  <label>
                    Email
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={updateField}
                      placeholder="name@email.com"
                    />
                  </label>
                </div>

                <div>
                  <label>
                    Phone
                    <input
                      required
                      name="phone"
                      value={form.phone}
                      onChange={updateField}
                      placeholder="Mobile number"
                    />
                  </label>
                </div>

                <div>
                  <label>
                    Category
                    <select name="category" value={form.category} onChange={updateField}>
                      {SERVICE_CATEGORIES.map((c) => (
                        <option key={c.key} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <textarea
                  required
                  name="query"
                  value={form.query}
                  onChange={updateField}
                  placeholder="Your query (1–2 lines). Example: Supervisor says the gap is unclear; need defensible methodology + a clean plan."
                />

                <div className="scFormFoot">
                  <span className="scNote">No obligation • Ethical support only</span>

                  <div className="scActions">
                    <button type="button" className="scBtn" onClick={clearForm}>
                      Clear
                    </button>
                    <button type="submit" className="scBtn scBtnPrimary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>

              {toast ? <div className="scToast">{toast}</div> : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
