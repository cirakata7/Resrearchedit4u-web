// src/components/HowItWorksInlineWe/HowItWorksInlineWe.jsx

import React, { useEffect, useMemo, useRef, useState } from "react";
import "../../assets/style/style.css";
import { HOW_IT_WORKS } from "../../assets/content/servicesoverviewdata/howitworks";

export default function HowItWorksInlineWe() {
  const { kicker, title, sub, hint, trust, steps } = HOW_IT_WORKS;

  const [openId, setOpenId] = useState(null);
  const tableRef = useRef(null);

  const anyOpen = useMemo(() => !!openId, [openId]);

  function openRow(id) {
    setOpenId(id);
  }
  function closeRow() {
    setOpenId(null);
  }

  // ESC closes
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") closeRow();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // outside click closes (same behaviour as HTML) :contentReference[oaicite:1]{index=1}
  useEffect(() => {
    function onDocClick(e) {
      const inside = e.target.closest(".hiwTable");
      if (!inside) closeRow();
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <section className="hiwWrap" aria-labelledby="hiwTitle">
      <div className="hiwOuter">
        <div className="hiwShell">
          <div className="hiwSection">
            <div className="hiwKicker">
              <span className="hiwDot" /> {kicker}
            </div>

            <h2 className="hiwH2" id="hiwTitle">
              {title}
            </h2>

            <p className="hiwSub">{sub}</p>

            <div className="hiwHintBar" aria-label="Interaction hint">
              <div className="hiwHintLeft">
                <span className="hiwHintIcon" aria-hidden="true">
                  {/* info icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path
                      d="M7 10a5 5 0 1 1 8.7 3.3c-.7.7-1.2 1.1-1.5 1.7-.2.4-.2.8-.2 1.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <span>
                  Tap a{" "}
                  <span className="hiwHintPill">
                    <span className="hiwPillDot" />
                    {hint.youLabel}
                  </span>{" "}
                  row → see{" "}
                  <span className="hiwHintPill we">
                    <span className="hiwPillDot" />
                    {hint.weLabel}
                  </span>
                  .
                </span>
              </div>
            </div>

            <div className="hiwTable" ref={tableRef} aria-label="How it works (inline We card)">
              <div className="hiwThead">
                <div className="hiwTh">Step</div>
                <div className="hiwTh">You</div>
              </div>

              {steps.map((s) => {
                const isOpen = openId === s.id;
                return (
                  <div key={s.id} className={`hiwRow ${isOpen ? "open" : ""}`} data-row={s.no}>
                    <div className="hiwStepCol">
                      <div className="hiwStepNo">{s.no}</div>
                      <div className="hiwStepLbl">{s.label}</div>
                    </div>

                    <div className="hiwContentCell">
                      <div className="hiwYouWrap">
                        <div
                          className="hiwYouMain"
                          role="button"
                          tabIndex={0}
                          aria-label={`Reveal what we do for step ${s.no}`}
                          onClick={() => openRow(s.id)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              openRow(s.id);
                            }
                          }}
                        >
                          <p className="hiwCellTitle">{s.youTitle}</p>
                          <p className="hiwCellText">{s.youText}</p>
                        </div>

                        <div className="hiwRail">
                          {!isOpen ? (
                            <button
                              className="hiwRevealBtn"
                              type="button"
                              aria-label={`Reveal We for step ${s.no}`}
                              onClick={() => openRow(s.id)}
                            >
                              <span className={`hiwPulse ${anyOpen ? "stop" : ""}`} />
                              Reveal “We”
                            </button>
                          ) : null}

                          <div className="hiwWeCard" aria-label={`We do for step ${s.no}`}>
                            <div className="hiwWeHead">
                              <div className="hiwWeTag">
                                <span className="hiwWeDot" />
                                We
                              </div>

                              <button
                                className="hiwCloseBtn"
                                type="button"
                                aria-label="Close We card"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  closeRow();
                                }}
                              >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                  <path d="M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                  <path d="M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                              </button>
                            </div>

                            <p className="hiwWeTitle">{s.weTitle}</p>
                            <p className="hiwWeText">{s.weText}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="hiwTrust" aria-label="Trust strip">
              <div className="hiwTrustLeft">
                <span className="hiwLock" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M7 11V8a5 5 0 0 1 10 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M6 11h12v10H6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                </span>
                {trust.text}
              </div>

              <div className="hiwChips">
                {trust.chips.map((c) => (
                  <span key={c.label} className={`hiwChip ${c.tone}`}>
                    <span className="hiwChipDot" />
                    {c.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
