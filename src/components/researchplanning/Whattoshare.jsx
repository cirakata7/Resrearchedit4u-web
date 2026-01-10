import React from "react";
import "../../assets/style/style.css";
import { WHAT_TO_SHARE } from "../../assets/content/researchplanningdata/Whattoshare";

function Card({ c, onUpload }) {
  return (
    <article className="wtsCard">
      <h3 className="wtsCardTitle">{c.title}</h3>

      {c.type === "list" ? (
        <ul className="wtsList">
          {c.items.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      ) : (
        <>
          <p className="wtsText">{c.text}</p>
          <button type="button" className="wtsBtn" onClick={onUpload}>
            {c.ctaLabel}
          </button>
        </>
      )}
    </article>
  );
}

export default function WhattoShare() {
  const onUpload = () => {
    // hook this to your upload modal / quote form section
    console.log("Upload Brief clicked");
  };

  return (
    <section className="wtsPage" aria-label="What to share">
      <div className="wtsShell">
        <header className="wtsHeader">
          <h2 className="wtsTitle">{WHAT_TO_SHARE.title}</h2>
          <p className="wtsSub">{WHAT_TO_SHARE.subtitle}</p>
        </header>

        <div className="wtsGrid">
          {WHAT_TO_SHARE.cards.map((c) => (
            <Card key={c.id} c={c} onUpload={onUpload} />
          ))}
        </div>
      </div>
    </section>
  );
}
