import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { START_WHERE } from "../../assets/content/dataservices/pathSelectorContent";
import "../../assets/style/style.css";

export default function StartWhereYouAre() {
  const [active, setActive] = useState(START_WHERE.tabs[0]?.key || "");

  const tab = useMemo(
    () => START_WHERE.tabs.find((t) => t.key === active) || START_WHERE.tabs[0],
    [active]
  );

  const onKeyNav = (e) => {
    const keys = START_WHERE.tabs.map((t) => t.key);
    const i = keys.indexOf(active);

    if (e.key === "ArrowRight") {
      e.preventDefault();
      setActive(keys[(i + 1) % keys.length]);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setActive(keys[(i - 1 + keys.length) % keys.length]);
    }
  };

  return (
    <section className="swyWrap" aria-label="Start where you are">
      <div className="swyShell">
        <header className="swyHead">
          <h2 className="swyTitle">{START_WHERE.title}</h2>
          <p className="swySub">{START_WHERE.subtitle}</p>
        </header>

        {/* Tabs */}
        <div
          className="swyTabs"
          role="tablist"
          aria-label="Choose support type"
          onKeyDown={onKeyNav}
        >
          {START_WHERE.tabs.map((t) => {
            const isActive = t.key === active;
            return (
              <button
                key={t.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
                className={`swyTab ${isActive ? "isActive" : ""}`}
                onClick={() => setActive(t.key)}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Main card */}
        <div className="swyCard">
          <div className="swyCardTop">
            <span className="swyPill">
              <span className="swyPillDot" aria-hidden="true" />
              {tab.bestForTag}
            </span>
          </div>

          <div className="swyCardGrid">
            <div className="swyMain">
              <h3 className="swyH3">{tab.heading}</h3>
              <p className="swyIntro">{tab.intro}</p>

              <div className="swyBtns">
                <Link className="swyBtn swyBtnPrimary" to={tab.ctaPrimary.href}>
                  {tab.ctaPrimary.label}
                </Link>
                <Link className="swyBtn swyBtnGhost" to={tab.ctaSecondary.href}>
                  {tab.ctaSecondary.label}
                </Link>
              </div>
            </div>

            <div className="swyCols">
              {tab.cols.map((c) => (
                <div className="swyCol" key={c.title}>
                  <div className="swyColTitle">{c.title}</div>
                  <ul className="swyList">
                    {c.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft background edge (optional like your clip) */}
        <div className="swyGlow" aria-hidden="true" />
      </div>
    </section>
  );
}
