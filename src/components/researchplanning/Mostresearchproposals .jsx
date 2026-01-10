import React, { useMemo, useState } from "react";
import "../../assets/style/style.css";
import {COPY} from "../../assets/content/researchplanningdata/Mostresearchproposals";



function Toggle({ active, onChange }) {
  return (
    <div className="pcToggle" role="tablist" aria-label="Planning toggle">
      <button
        type="button"
        className={`pcTab ${active === "bottlenecks" ? "pcTabActive" : ""}`}
        role="tab"
        aria-selected={active === "bottlenecks"}
        onClick={() => onChange("bottlenecks")}
      >
        Common bottlenecks
      </button>
      <button
        type="button"
        className={`pcTab ${active === "receive" ? "pcTabActive" : ""}`}
        role="tab"
        aria-selected={active === "receive"}
        onClick={() => onChange("receive")}
      >
        What you receive
      </button>
    </div>
  );
}

export default function Mostresearchproposals() {
  const [mode, setMode] = useState("bottlenecks");
  const content = useMemo(() => COPY[mode], [mode]);

  return (
    <section className="pcPage">
      <div className="pcShell">
        <header className="pcHeader">
          <h2 className="pcH1">Most research proposals don’t fail in writing. They fail in planning.</h2>

          <p className="pcSub">
            If your supervisor keeps saying “make it clearer” or “strengthen the methodology,” it usually means the logic chain
            is broken: <strong>gap</strong> → <strong>objectives</strong> → <strong>research questions</strong> →{" "}
            <strong>research methodology</strong> → <strong>timeline</strong>. Use the toggle below to see what typically blocks
            proposals — and what we deliver to fix it.
          </p>
        </header>

        <div className="pcWrap">
          <div className="pcBar">
            <div className="pcChip">
              <span className="pcChipText">Planning clarity</span>
            </div>
            <div className="pcHint">One view at a time • Cleaner on mobile</div>

            <div className="pcBarRight">
              <Toggle active={mode} onChange={setMode} />
            </div>
          </div>

          <div className="pcGrid">
            {/* Left card */}
            <article className="pcCard">
              <h3 className="pcCardTitle">{content.leftTitle}</h3>
              <ul className="pcList">
                {content.leftItems.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </article>

            {/* Middle card */}
            <article className="pcCard">
              <h3 className="pcCardTitle">{content.midTitle}</h3>
              <p className="pcBody">{content.midBody}</p>
              <ul className="pcList">
                {content.midItems.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </article>

            {/* Right card */}
            <article className="pcCard pcCardRight">
              <h3 className="pcCardTitle">{content.rightTitle}</h3>
              <p className="pcBody">{content.rightBody}</p>

              <button type="button" className="pcCta">
                {content.rightCta}
              </button>

              <div className="pcNote">{content.rightNote}</div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
