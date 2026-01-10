import React, { useMemo, useState } from "react";
import "../../assets/style/style.css";
import { PROCESS_STEPS } from "../../assets/content/homepage/processStepsData";

export default function ProcessSteps() {
  const data = useMemo(() => PROCESS_STEPS, []);
  const steps = data.steps;
  const [active, setActive] = useState(5);

  const s = steps.find((x) => x.n === active) || steps[0];

  return (
    <section className="processSection">
      <div className="processWrap">
        <div className="processShell">
          <div className="processHeader">
            <div className="processKicker">{data.kicker}</div>
            <h2 className="processTitle">{data.title}</h2>
            <p className="processRight">{data.rightText}</p>
          </div>

          <div className="processCard">
            <div className="processCardTop">
              <div className="processPillRow">
                <span className="processPill">
                  <strong>Step {s.n}</strong>
                  <span className="processDot">•</span>
                  <span>{s.pill}</span>
                </span>
                <span className="processHint">{s.hint}</span>
              </div>
              <div className="processTopRight">{s.rightTop}</div>
            </div>

            <div className="processTimeline">
              <div className="processLine" />

              <div className="processStops">
                {steps.map((st) => {
                  const isActive = st.n === active;
                  const isDone = st.n < active;

                  return (
                    <button
                      key={st.key}
                      type="button"
                      className={`processStop ${isActive ? "isActive" : ""} ${isDone ? "isDone" : ""}`}
                      onClick={() => setActive(st.n)}
                      aria-label={`Step ${st.n}: ${st.short}`}
                    >
                      <span className="processCircle">{st.n}</span>
                      <span className={`processLabel ${isActive ? "isBold" : ""}`}>{st.short}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="processLower">
              <div className="processLowerHead">
                <h3>What happens in this step</h3>
                <span className="processBadge">{s.badge}</span>
              </div>

              <div className="processCards">
                {s.cards.map((c) => (
                  <div className="processMini" key={`${s.key}-${c.n}-${c.title}`}>
                    <div className="processMiniTop">
                      <span className="processMiniPill">
                        <strong>{c.n}</strong>
                        <span className="processDot">•</span>
                        <span>{c.pill}</span>
                      </span>
                      <span className="processMiniRight">{c.stepOf}</span>
                    </div>

                    <div className="processMiniTitle">{c.title}</div>
                    <div className="processMiniDesc">{c.desc}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
