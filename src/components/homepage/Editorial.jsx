import React from "react";
import "../../assets/style/style.css";
import { AVOID, CONTROL } from "../../assets/content/homepage/editorial";

function Icon({ name }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none" };
  const stroke = {
    stroke: "rgba(37, 99, 235, 0.95)",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (name === "scope") {
    return (
      <svg {...common}>
        <path {...stroke} d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16z" />
        <path {...stroke} d="M12 8v8" />
        <path {...stroke} d="M8 12h8" />
      </svg>
    );
  }
  if (name === "report") {
    return (
      <svg {...common}>
        <path {...stroke} d="M8 3h8l3 3v15H8V3z" />
        <path {...stroke} d="M16 3v4h4" />
        <path {...stroke} d="M10 12h7M10 16h7" />
      </svg>
    );
  }
  if (name === "risk") {
    return (
      <svg {...common}>
        <path {...stroke} d="M12 3l9 16H3L12 3z" />
        <path {...stroke} d="M12 9v4" />
        <path {...stroke} d="M12 17h.01" />
      </svg>
    );
  }
  if (name === "edit") {
    return (
      <svg {...common}>
        <path {...stroke} d="M4 20h4l11-11a2 2 0 0 0 0-3l-1-1a2 2 0 0 0-3 0L4 16v4z" />
        <path {...stroke} d="M13 6l5 5" />
      </svg>
    );
  }
  if (name === "shield") {
    return (
      <svg {...common}>
        <path {...stroke} d="M12 3l7 4v6c0 5-3 8-7 9-4-1-7-4-7-9V7l7-4z" />
        <path {...stroke} d="M9 12l2 2 4-5" />
      </svg>
    );
  }
  // clock
  return (
    <svg {...common}>
      <path {...stroke} d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
      <path {...stroke} d="M12 7v6l4 2" />
    </svg>
  );
}

function TonePill({ tone, children }) {
  return <span className={`erPill erPill--${tone}`}>{children}</span>;
}

export default function Editorial() {
  return (
    <section className="erSection">
      <div className="erWrap">
        <div className="erShell">
          {/* Top heading */}
          <div className="erTop">
            <div className="erKicker">WHY RESEARCHERS TRUST RESEARCHEDIT4U</div>
            <h2 className="erTitle">Editorial rigour with publishing-first thinking.</h2>
            <p className="erSub">
              A clear “risk → control” layout that feels institutional: we surface common rejection risks,
              then show the controls we apply to deliver a reviewer-ready submission.
            </p>
          </div>

          <div className="erDividerH" />

          {/* Two columns */}
          <div className="erGrid">
            {/* Left */}
            <div className="erCol">
              <div className="erColTitle">WHAT WE HELP YOU AVOID</div>
              <div className="erList">
                {AVOID.map((x) => (
                  <div className="erItem" key={x.title}>
                    <div className="erIconBox" aria-hidden="true">
                      <Icon name={x.icon} />
                    </div>
                    <div className="erItemText">
                      <div className="erItemTitle">{x.title}</div>
                      <div className="erItemDesc">{x.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vertical divider */}
            <div className="erDividerV" />

            {/* Right */}
            <div className="erCol">
              <div className="erColTitle">HOW WE CONTROL FOR QUALITY</div>
              <div className="erList">
                {CONTROL.map((x) => (
                  <div className="erItem erItem--wide" key={x.title}>
                    <div className="erIconBox" aria-hidden="true">
                      <Icon name={x.icon} />
                    </div>

                    <div className="erItemText">
                      <div className="erItemTitleRow">
                        <div className="erItemTitle">{x.title}</div>
                        <TonePill tone={x.pillTone}>{x.pill}</TonePill>
                      </div>
                      <div className="erItemDesc">{x.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="erDividerH" />

          {/* Bottom bar */}
          <div className="erBottom">
            <div className="erBottomLeft">
              <span>COPE-aligned ethical support</span>
              <span className="erSep">•</span>
              <span>Transparent scope &amp; timelines</span>
              <span className="erSep">•</span>
              <span>Reviewer-ready delivery</span>
            </div>

            <div className="erBottomRight">
              <button className="erBtn erBtn--ghost" type="button">
                See Editing Samples
              </button>
              <button className="erBtn erBtn--primary" type="button">
                Book 1:1 Expert Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
