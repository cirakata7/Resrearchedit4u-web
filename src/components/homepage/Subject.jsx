import React, { useMemo, useState } from "react";
import "../../assets/style/style.css";
import SUBJECTS from "../../assets/content/homepage/subject";

export default function Subject() {
  const data = useMemo(() => SUBJECTS, []);
  const [activeKey, setActiveKey] = useState("life");

  const active = data.find((d) => d.key === activeKey) || data[0];

  return (
    <section className="sscPage">
      <div className="sscWrap">
        <div className="sscTop">
          <div className="sscKicker">SUBJECTS WE HANDLE</div>
          <h1 className="sscTitle">Subject Scorecards</h1>
          <p className="sscSub">
            Select a discipline cluster to see subject-specific outcomes, typical improvements, and a downloadable sample preview .
          </p>
          {/* <p className="sscNote">Prototype note: Replace sample links + numbers per your internal data.</p> */}
        </div>

        <div className="sscPanel">
          {/* LEFT LIST */}
          <aside className="sscLeft">
            <div className="sscLeftHeader">SELECT A SUBJECT</div>

            <div className="sscList">
              {data.map((s) => {
                const isActive = s.key === activeKey;
                return (
                  <button
                    key={s.key}
                    className={`sscItem ${isActive ? "isActive" : ""}`}
                    onClick={() => setActiveKey(s.key)}
                    type="button"
                  >
                    <div className="sscItemIcon" aria-hidden="true">
                      <span>{s.icon}</span>
                    </div>

                    <div className="sscItemMain">
                      <div className="sscItemName">
                        {s.nameLines[0]} <br />
                        {s.nameLines[1]}
                      </div>
                    </div>

                    <div className="sscItemSide">{s.sideNote}</div>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <main className="sscRight">
            <div className="sscHeaderRow">
              <div className="sscHeaderLeft">
                <div className="sscBadge" aria-hidden="true">
                  <span>{active.icon}</span>
                </div>
                <div>
                  <div className="sscHeaderTitle">{active.title}</div>
                  <div className="sscHeaderDesc">{active.blurb}</div>
                </div>
              </div>

              {/* <button className="sscGhostCta" type="button">
                View 1-page case snapshot →
              </button> */}
            </div>

            <div className="sscStats">
              {active.stats.map((st) => (
                <div className="sscStatCard" key={st.label}>
                  <div className="sscStatLabel">{st.label}</div>
                  <div className="sscStatValue">{st.value}</div>
                  <div className="sscStatSub">{st.sub}</div>
                </div>
              ))}
            </div>

            <div className="sscMidGrid">
              {/* <section className="sscBox">
                <div className="sscBoxTitle">WHAT WE TYPICALLY IMPROVE</div>
                <ul className="sscBullets">
                  {active.improve.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </section> */}

              <section className="sscBox">
                <div className="sscBoxTitle">SUBFIELDS</div>
                <div className="sscChips">
                  {active.subfields.map((c) => (
                    <span className={`sscChip ${c === "Show less" ? "isGhost" : ""}`}>
                      {c}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            <div className="sscBottom">
              <div className="sscBottomText">
                {/* <div className="sscBottomTitle">{active.downloadTitle}</div> */}
                <div className="sscBottomDesc">{active.downloadDesc}</div>
              </div>

              <div className="sscBottomActions">
                {/* <button className="sscBtn sscBtnGhost" type="button">
                  Direct download
                </button> */}
                <button className="sscBtn sscBtnGold" type="button">
                  📥 Download sample
                </button>
              </div>
            </div>
          </main>

          {/* glow overlays */}
          <div className="sscGlowA" aria-hidden="true" />
          <div className="sscGlowB" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
