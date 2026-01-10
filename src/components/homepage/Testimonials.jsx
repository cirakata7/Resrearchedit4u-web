import React, { useMemo, useState, useEffect } from "react";
import "../../assets/style/style.css";
import { CATS, STORIES } from "../../assets/content/homepage/testimonialsdata";

export default function Testimonials() {
  const cats = useMemo(() => CATS, []);
  const allStories = useMemo(() => STORIES, []);

  const [activeCat, setActiveCat] = useState("All");
  const [q, setQ] = useState("");
  const [selectedId, setSelectedId] = useState(allStories[0]?.id);

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalEmail, setModalEmail] = useState("");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();

    return allStories.filter((s) => {
      const catOk = activeCat === "All" || s.cat === activeCat;
      if (!catOk) return false;
      if (!needle) return true;

      const hay = [
        s.title,
        s.excerpt,
        s.cat,
        s.metaLine,
        s.region,
        s.field,
        ...(s.tags || []),
        ...(s.badges || []),
        ...(s.listPills || []),
      ]
        .join(" ")
        .toLowerCase();

      return hay.includes(needle);
    });
  }, [allStories, activeCat, q]);

  const selected = useMemo(() => {
    const found = filtered.find((x) => x.id === selectedId);
    return found || filtered[0] || null;
  }, [filtered, selectedId]);

  // keep selected valid when filters/search change
  useEffect(() => {
    if (!filtered.length) return;
    const exists = filtered.some((x) => x.id === selectedId);
    if (!exists) setSelectedId(filtered[0].id);
  }, [activeCat, q, filtered, selectedId]);

  const go = (dir) => {
    if (!filtered.length) return;
    const idx = filtered.findIndex((x) => x.id === selectedId);
    const next = (idx + dir + filtered.length) % filtered.length;
    setSelectedId(filtered[next].id);
  };

  const clearAll = () => {
    setActiveCat("All");
    setQ("");
    setSelectedId(allStories[0]?.id);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setModalEmail("");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    if (isModalOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isModalOpen]);

  return (
    <section className="sgSection">
      <div className="sgWrap">
        <div className="sgShell">
          {/* Header */}
          <div className="sgHeader">
            <div className="sgHeaderLeft">
              <div className="sgKicker">TESTIMONIALS</div>
              <h2 className="sgTitle">Filtered story gallery (mini case snapshots)</h2>
              {/* <p className="sgSub">
                Choose what you need help with. Pick a story. Review the snapshot.
                <br />
                Request an anonymised sample if helpful. (Names anonymised; NDAs respected.)
              </p> */}
            </div>
          </div>

          <div className="sgDivider" />

          {/* Filters row */}
          <div className="sgTools">
            <div className="sgChips">
              {cats.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`sgChip ${activeCat === c ? "isActive" : ""}`}
                  onClick={() => setActiveCat(c)}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="sgToolsRight">
              {/* <span className="sgCount">{filtered.length} stories</span> */}
              {/* <button className="sgSearchBtn" type="button" aria-hidden="true">
                🔎 <span>Search</span>
              </button> */}
            </div>
          </div>

          {/* Search row */}
          <div className="sgSearchRow">
            {/* <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="sgSearch"
              placeholder="Search (e.g., similarity, methods, cover letter)…"
            />
            <button className="sgClear" type="button" onClick={clearAll}>
              Clear
            </button> */}
          </div>

          {/* Main grid */}
          <div className="sgGrid">
            {/* Left featured */}
            <div className="sgFeatured">
              {selected ? (
                <div className="sgFeaturedCard">
                  <div className="sgFeaturedTop">
                    <div className="sgBadges">
                      {selected.badges.map((b) => (
                        <span className="sgBadge" key={b}>
                          {b}
                        </span>
                      ))}
                    </div>

                    <div className="sgNavArrows">
                      <button className="sgArrow" onClick={() => go(-1)} aria-label="Previous">
                        ‹
                      </button>
                      <button className="sgArrow" onClick={() => go(1)} aria-label="Next">
                        ›
                      </button>
                    </div>
                  </div>

                  <h3 className="sgFeaturedTitle">{selected.title}</h3>
                  <p className="sgFeaturedExcerpt">“{selected.excerpt}”</p>

                  <div className="sgMeta">{selected.metaLine}</div>

                  <div className="sgRows">
                    {selected.rows.map((r) => (
                      <div className="sgRow" key={r.k}>
                        <div className="sgRowK">{r.k}</div>
                        <div className="sgRowV">{r.v}</div>
                      </div>
                    ))}
                  </div>

                  <div className="sgBottom">
                    <button className="sgBtnPrimary" type="button" onClick={openModal}>
                      See anonymised sample →
                    </button>

                    {/* <button className="sgBtnGhost" type="button">
                      Copy share link
                    </button> */}

                    {/* <span className="sgBottomNote">Names anonymised · NDAs respected</span> */}
                  </div>

                  <div className="sgDots" aria-label="Story navigation">
                    {filtered.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        className={`sgDot ${s.id === selectedId ? "isOn" : ""}`}
                        onClick={() => setSelectedId(s.id)}
                        aria-label={`Go to story: ${s.title}`}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="sgEmpty">No stories match your search/filter. Try clearing.</div>
              )}
            </div>

            {/* Right picker */}
            <aside className="sgPicker">
              <div className="sgPickerHead">
                <div className="sgPickerTitle">PICK A STORY</div>
                <div className="sgPickerCount">{filtered.length} shown</div>
              </div>

              <div className="sgPickerList">
                {filtered.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    className={`sgPick ${selectedId === s.id ? "isActive" : ""}`}
                    onClick={() => setSelectedId(s.id)}
                  >
                    <div className="sgPickTitle">{s.title}</div>
                    <div className="sgPickMeta">
                      <span className="sgMiniTag">{s.cat}</span>
                      <span className="sgMiniMeta">
                        {s.field} &nbsp;•&nbsp; {s.region}
                      </span>
                    </div>
                    <div className="sgPickPills">
                      {s.listPills.map((p) => (
                        <span key={p} className="sgMiniPill">
                          {p}
                        </span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </aside>
          </div>

          {/* Modal (IMPORTANT: outside buttons) */}
          {isModalOpen && selected && (
            <div className="amOverlay" onMouseDown={closeModal}>
              <div className="amModal" onMouseDown={(e) => e.stopPropagation()}>
                <div className="amHead">
                  <div>
                    <div className="amTitle">Anonymised sample — {selected.cat}</div>
                    <div className="amSub">{selected.title}</div>
                  </div>

                  <button className="amClose" type="button" onClick={closeModal} aria-label="Close">
                    ×
                  </button>
                </div>

                <div className="amBody">
                  {/* Left */}
                  <div className="amLeft">
                    <div className="amLabel">SNAPSHOT PREVIEW</div>

                    <div className="amBox">
                      <div className="amBoxTitle">Context</div>
                      <div className="amBoxText">{selected.metaLine}</div>
                    </div>

                    <div className="amBox">
                      <div className="amBoxTitle">What improved</div>
                      <div className="amBoxText">
                        {selected.rows?.find((r) => r.k === "What improved")?.v ||
                          "Structure, clarity, consistency"}
                      </div>
                    </div>

                    <div className="amBox">
                      <div className="amBoxTitle">What you receive</div>
                      <div className="amBoxText">
                        Tracked-change style example + formatting cues (anonymised).
                      </div>
                    </div>

                    <div className="amBox">
                      <div className="amBoxTitle">Ethics note</div>
                      <div className="amBoxText">
                        Author-owned work · No ghostwriting · NDAs respected.
                      </div>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="amRight">
                    <div className="amRightTitle">Request the sample</div>
                    <div className="amRightText">
                      Receive a subject-appropriate anonymised sample showing formatting and
                      tracked-change style. (Optional email gating; connect this action to
                      HubSpot/CRM.)
                    </div>

                    <input
                      className="amInput"
                      placeholder="Email address"
                      value={modalEmail}
                      onChange={(e) => setModalEmail(e.target.value)}
                    />

                    <button className="amSend" type="button">
                      Send sample
                    </button>

                    <div className="amNote">
                      Prototype only: no emails are sent. Your developer can wire this to your lead
                      workflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
