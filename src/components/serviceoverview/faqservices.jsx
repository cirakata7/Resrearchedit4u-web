// src/components/FAQ/FAQ.jsx

import React, { useMemo, useState } from "react";
import "../../assets/style/style.css";
import { FAQ_CATEGORIES, FAQ_ITEMS } from "../../assets/content/servicesoverviewdata/faqservices";

async function copyText(text) {
  // clipboard API
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // fallback
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      return true;
    } catch {
      return false;
    }
  }
}

function buildAnswerText(item) {
  const bullets = (item.bullets || [])
    .map((b) => `• ${b.strong ? `${b.strong}${b.text}` : b.text}`)
    .join("\n");
  return `${item.q}\n\n${item.a}\n${bullets}`.trim();
}

export default function FAQ() {
  const [filter, setFilter] = useState("all");

  // expanded map
  const [openMap, setOpenMap] = useState(() => {
    const m = {};
    FAQ_ITEMS.forEach((i) => (m[i.id] = false));
    return m;
  });

  const visibleItems = useMemo(() => {
    if (filter === "all") return FAQ_ITEMS;
    return FAQ_ITEMS.filter((i) => i.cat === filter);
  }, [filter]);

  const counts = useMemo(() => {
    const c = { all: FAQ_ITEMS.length };
    FAQ_ITEMS.forEach((i) => {
      c[i.cat] = (c[i.cat] || 0) + 1;
    });
    return c;
  }, []);

  function closeAll() {
    setOpenMap((prev) => {
      const next = { ...prev };
      FAQ_ITEMS.forEach((i) => (next[i.id] = false));
      return next;
    });
  }

  function openAllVisible() {
    setOpenMap((prev) => {
      const next = { ...prev };
      visibleItems.forEach((i) => (next[i.id] = true));
      return next;
    });
  }

  function toggleItem(id) {
    setOpenMap((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function onFilter(cat) {
    setFilter(cat);
    closeAll(); // match your HTML behaviour: filter resets open state
  }

  async function onCopy(item, setCopied) {
    const ok = await copyText(buildAnswerText(item));
    setCopied(ok ? "ok" : "fail");
    setTimeout(() => setCopied(""), 900);
  }

  const allVisibleOpen =
    visibleItems.length > 0 &&
    visibleItems.every((i) => openMap[i.id] === true);

  return (
    <main className="faqWrap">
      <section className="faqPanel" aria-labelledby="faqTitle">
        <header className="faqHeader">
          <div className="faqKicker">
            <span className="faqDot" /> FAQ
          </div>
          <h2 className="faqH2" id="faqTitle">
            Answers without the overwhelm
          </h2>
          <p className="faqSub">
            Pick a category to filter. Each question is a real heading (SEO-friendly),
            and answers stay practical — timeline, confidentiality, revisions, what we need, and ethics.
          </p>
        </header>

        <div className="faqContent">
          {/* LEFT */}
          <aside className="faqLeft" aria-label="FAQ categories">
            <div className="faqTools">
              <button
                className={`faqToolBtn ${allVisibleOpen ? "isOn" : ""}`}
                type="button"
                aria-pressed={allVisibleOpen ? "true" : "false"}
                title="Open all visible answers"
                onClick={() => (allVisibleOpen ? closeAll() : openAllVisible())}
              >
                ⬇️ {allVisibleOpen ? "Close all" : "Open all"}
              </button>

              <button
                className="faqToolBtn"
                type="button"
                title="Collapse all answers"
                onClick={closeAll}
              >
                ⬆️ Collapse
              </button>
            </div>

            <div className="faqChipRow" role="tablist" aria-label="FAQ filters">
              {FAQ_CATEGORIES.map((c) => {
                const active = filter === c.key;
                const showCount = c.key === "all";
                return (
                  <button
                    key={c.key}
                    className={`faqChip ${active ? "active" : ""}`}
                    type="button"
                    role="tab"
                    aria-selected={active ? "true" : "false"}
                    onClick={() => onFilter(c.key)}
                  >
                    {c.label}
                    {showCount ? <small>{counts.all}</small> : null}
                  </button>
                );
              })}
            </div>

            <p className="faqHint">
              Tip: On mobile, swipe the category chips. In each answer, you can copy the response for your notes.
            </p>
          </aside>

          {/* RIGHT */}
          <section className="faqRight" aria-label="FAQ questions">
            <div className="faqList">
              {visibleItems.map((item) => (
                <FAQItem
                  key={item.id}
                  item={item}
                  isOpen={!!openMap[item.id]}
                  onToggle={() => toggleItem(item.id)}
                  onCopy={onCopy}
                />
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

function FAQItem({ item, isOpen, onToggle, onCopy }) {
  const [copied, setCopied] = useState("");

  return (
    <article className={`faqItem ${isOpen ? "open" : ""}`} data-cat={item.cat}>
      <div
        className="faqHead"
        role="button"
        tabIndex={0}
        aria-expanded={isOpen ? "true" : "false"}
        onClick={(e) => {
          if (e.target.closest(".faqIconBtn")) return;
          onToggle();
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
      >
        <div className="faqQMeta">
          <div className="faqCatTag">
            <span className="faqCatDot" /> {toTitle(item.cat)}
          </div>
          <h3 className="faqH3">{item.q}</h3>
        </div>

        <div className="faqIcons">
          <button
            className="faqIconBtn"
            type="button"
            title="Copy answer"
            aria-label="Copy answer"
            onClick={(e) => {
              e.stopPropagation();
              onCopy(item, setCopied);
            }}
          >
            {copied === "ok" ? "✅" : copied === "fail" ? "⚠️" : "📋"}
          </button>

          <div className="faqChev" aria-hidden="true">
            ⌄
          </div>
        </div>
      </div>

      <div className="faqBody">
        <p className="faqAnsP">{item.a}</p>
        <ul className="faqBul">
          {(item.bullets || []).map((b, i) => (
            <li key={i}>
              {b.strong ? <strong>{b.strong}</strong> : null}
              {b.text}
            </li>
          ))}
        </ul>
        {item.note ? <div className="faqMiniNote">{item.note}</div> : null}
      </div>
    </article>
  );
}

function toTitle(cat) {
  if (cat === "inputs") return "What we need";
  return cat.charAt(0).toUpperCase() + cat.slice(1);
}
