import React, { useMemo, useState } from "react";
import "../../assets/style/style.css";
import { CHOOSE_PATH } from "../../assets/content/homepage/choosePathData";

export default function ChoosePath() {
  const data = useMemo(() => CHOOSE_PATH, []);
  const initOpen = data.cards.reduce((acc, c) => ({ ...acc, [c.id]: !!c.defaultOpen }), {});
  const [open, setOpen] = useState(initOpen);
  const [showTip, setShowTip] = useState(true);

  const toggle = (id) => setOpen((p) => ({ ...p, [id]: !p[id] }));

  return (
    <section className="cpSection">
      <div className="cpWrap">
        <div className="cpShell">
          <div className="cpHeader">
            <div className="cpHeaderLeft">
              <div className="cpKicker">{data.kicker}</div>
              <h2 className="cpTitle">{data.title}</h2>
            </div>

            <div className="cpTip">
              {showTip && <p className="cpTipText">{data.tip}</p>}
              <button className="cpTipBtn" onClick={() => setShowTip((s) => !s)}>
                {showTip ? "Hide tip" : "Show tip"}
              </button>
            </div>
          </div>

          <div className="cpGrid">
            {data.cards.map((c) => (
              <article className="cpCard" key={c.id}>
                <div className="cpTop">
                  <div className="cpIcon">{c.icon}</div>

                  <div className="cpText">
                    <h3 className="cpH3">{c.title}</h3>
                    <p className="cpDesc">{c.desc}</p>
                  </div>

                  <button className="cpChevron" onClick={() => toggle(c.id)} aria-label="Toggle details">
                    {open[c.id] ? "▴" : "▾"}
                  </button>
                </div>

                {open[c.id] && <p className="cpMore">{c.more}</p>}

                <div className="cpDivider" />
                <div className="cpBottom">
                  <a className="cpGo" href={c.cta.href}>
                    {c.cta.label} →
                  </a>
                  <span className="cpTag">{c.tag}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
