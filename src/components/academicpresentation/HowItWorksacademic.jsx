
import React, { useMemo } from "react";
import "../../assets/style/style.css";
import { HOW_IT_WORKS_ACADEMIC } from "../../assets/content/academicpresentation/HowItWorksacademicData";

function cx(...arr) {
  return arr.filter(Boolean).join(" ");
}

function Icon({ type = "doc-lines" }) {
  // Inline SVG icons based on your HTML. :contentReference[oaicite:1]{index=1}
  if (type === "page-topline") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 7h12v14H6V7Z" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M8 11h8M8 15h6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M8 5h8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.95"
        />
      </svg>
    );
  }

  if (type === "clipboard") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7 3h10v4H7V3Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6 7h12v14H6V7Z" stroke="currentColor" strokeWidth="1.8" opacity="0.65" />
        <path
          d="M9 11h6M9 15h6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.95"
        />
      </svg>
    );
  }

  // default: doc-lines
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 4h10v16H7V4Z" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M9 8h6M9 12h6M9 16h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.95"
      />
    </svg>
  );
}

export default function HowItWorksacademic({
  onBrowseAll = (href) => {},
  onPrimary = (href) => {},
  onSecondary = (href) => {},
}) {
  const d = useMemo(() => HOW_IT_WORKS_ACADEMIC, []);

  return (
    <section className="hwaSection" aria-label="Related services">
      <div className="hwaWrap">
        <div className="hwaShell">
          {/* Header */}
          <div className="hwaTop">
            <div>
              <h2 className="hwaH2">{d.heading}</h2>
              <p className="hwaSub">{d.subheading}</p>
            </div>

            <a
              className="hwaMiniLink"
              href={d.topCta.href}
              onClick={(e) => {
                // If SPA, prevent default and handle with router
                // e.preventDefault();
                onBrowseAll(d.topCta.href);
              }}
            >
              {d.topCta.label} <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Cards */}
          <div className="hwaGrid">
            {d.cards.map((c) => (
              <article className="hwaCard" key={c.id}>
                <div className="hwaRow">
                  <div className="hwaLeft">
                    <div className="hwaIcon" aria-hidden="true">
                      <Icon type={c.icon?.type} />
                    </div>
                    <p className="hwaTitle" title={c.title}>
                      {c.title}
                    </p>
                  </div>

                  <span className="hwaBadge">{c.badge}</span>
                </div>

                <p className="hwaDesc">{c.desc}</p>

                <div className="hwaCtaRow">
                  <a
                    className={cx("hwaBtn", "primary")}
                    href={c.primary.href}
                    onClick={(e) => {
                      // e.preventDefault();
                      onPrimary(c.primary.href);
                    }}
                  >
                    {c.primary.label}
                  </a>

                  <a
                    className="hwaBtn"
                    href={c.secondary.href}
                    onClick={(e) => {
                      // e.preventDefault();
                      onSecondary(c.secondary.href);
                    }}
                  >
                    {c.secondary.label}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
