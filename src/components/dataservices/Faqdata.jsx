import React, { useMemo, useState } from "react";
import "../../assets/style/style.css";
import { FAQ_ITEMS } from "../../assets/content/dataservices/faqData";



function cn(...xs) {
  return xs.filter(Boolean).join(" ");
}

function Button({ variant = "primary", size = "md", onClick, type = "button", children }) {
  return (
    <button
      type={type}
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

function AccordionRow({ item, open, onToggle }) {
  return (
    <div className={cn("faqRow", open && "faqRow--open")}>
      <button
        className="faqQ"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`panel-${item.id}`}
        id={`control-${item.id}`}
        type="button"
      >
        <span className={cn("chev", open && "chev--open")} aria-hidden="true" />
        <span className="qText">{item.q}</span>
      </button>

      <div
        id={`panel-${item.id}`}
        role="region"
        aria-labelledby={`control-${item.id}`}
        className={cn("faqA", open && "faqA--open")}
      >
        <div className="aInner">{item.a}</div>
      </div>
    </div>
  );
}

export default function Faqdata() {
  const items = useMemo(() => FAQ_ITEMS, []);
  const [openId, setOpenId] = useState(null); // set to "q1" if you want first open by default

  function toggle(id) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  function onPrimary() {
    window.alert("Primary CTA: Get a Data Review + Quote");
  }
  function onSecondary() {
    window.alert("Secondary CTA: Preview sample excerpts");
  }

  return (
    <section className="faqWrap">
      <div className="faqShell">
        <header className="faqHeader">
          <h2 className="faqTitle">FAQ</h2>
          <p className="faqSub">Straight answers—so you can decide quickly.</p>
        </header>

        <div className="faqList">
          {items.map((it) => (
            <AccordionRow
              key={it.id}
              item={it}
              open={openId === it.id}
              onToggle={() => toggle(it.id)}
            />
          ))}
        </div>

        <div className="faqCtas">
          <Button onClick={onPrimary}>Get a Data Review + Quote</Button>
          <Button variant="ghost" onClick={onSecondary}>
            Preview sample excerpts
          </Button>
        </div>
      </div>
    </section>
  );
}
