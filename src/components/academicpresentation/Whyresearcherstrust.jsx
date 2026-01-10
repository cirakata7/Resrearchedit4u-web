
import React, { useMemo, useState } from "react";
import "../../assets/style/style.css";
import { WHY_RESEARCHERS_TRUST } from "../../assets/content/academicpresentation/whyResearchersTrustData";

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

function cx(...arr) {
  return arr.filter(Boolean).join(" ");
}

function StarBar({ rating = 4.5 }) {
  const score = clamp(Number(rating || 0), 0, 5);
  const pct = (score / 5) * 100;

  // lightweight 5-star bar using text + clipped fill
  return (
    <div className="wrtStars" aria-label={`Star rating ${score.toFixed(1)} out of 5`}>
      <div className="wrtStarsBase" aria-hidden="true">
        ★★★★★
      </div>
      <div className="wrtStarsFill" aria-hidden="true" style={{ width: `${pct}%` }}>
        ★★★★★
      </div>
    </div>
  );
}

export default function Whyresearcherstrust({
  onCta = (key) => {},
}) {
  const d = useMemo(() => WHY_RESEARCHERS_TRUST, []);
  const [flipped, setFlipped] = useState(() => {
    const obj = {};
    d.cards.forEach((c) => (obj[c.key] = false));
    return obj;
  });

  function toggle(key) {
    setFlipped((p) => ({ ...p, [key]: !p[key] }));
  }

  return (
    <section className="wrtSection" aria-label="Why researchers trust">
      <div className="wrtWrap">
        <div className="wrtShell">
          {/* Header */}
          <div className="wrtHead">
            <div className="wrtTitle">
              <div className="wrtKicker">{d.heading}</div>
              <p className="wrtSub">{d.subheading}</p>
            </div>

            <span className="wrtPill">
              <span className="wrtDot" aria-hidden="true" />
              {d.pill}
            </span>
          </div>

          {/* Grid */}
          <div className="wrtBody">
            <div className="wrtGrid">
              {d.cards.map((c) => {
                const rd = d.REVIEW_DATA[c.key] || { rating: 4.5, reviews: "TBD" };
                const rating = clamp(Number(rd.rating || 4.5), 0, 5);

                return (
                  <div className="wrtCardWrap" key={c.key}>
                    <button
                      type="button"
                      className={cx("wrtCard", flipped[c.key] && "isFlipped")}
                      onClick={() => toggle(c.key)}
                      aria-label={`${c.title}. Click to flip`}
                    >
                      {/* FRONT */}
                      <div className="wrtFace wrtFront">
                        <div className="wrtTopRow">
                          <div className="wrtLeftTop">
                            <div className="wrtIcon" aria-hidden="true">
                              {c.icon}
                            </div>
                            <p className="wrtHLine">{c.title}</p>
                          </div>
                          <span className="wrtFlipHint" aria-hidden="true">
                            Flip ↺
                          </span>
                        </div>

                        <div className="wrtMiniRow" aria-label="Highlights">
                          {c.chips.map((chip) => (
                            <span className="wrtChip" key={chip}>
                              {chip}
                            </span>
                          ))}
                        </div>

                        <div className="wrtSpacer" />

                        <div className="wrtBottomRow" aria-label="Reviews and action">
                          <div className="wrtScoreSide">
                            <StarBar rating={rating} />
                            <div className="wrtScoreBlock">
                              <div className="wrtScore">{rating.toFixed(1)}</div>
                              <div className="wrtReviews">{rd.reviews} reviews</div>
                            </div>
                          </div>

                          <button
                            type="button"
                            className="wrtCta"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggle(c.key);
                              onCta(c.key);
                            }}
                          >
                            See details
                          </button>
                        </div>

                        <p className="wrtSmall">Tap to flip and see exactly what you get.</p>
                      </div>

                      {/* BACK */}
                      <div className="wrtFace wrtBack">
                        <div className="wrtTopRow">
                          <p className="wrtHLine">{c.backTitle}</p>
                          <span className="wrtFlipHint" aria-hidden="true">
                            Back ↩
                          </span>
                        </div>

                        <div className="wrtProvide">
                          {c.items.map((it) => (
                            <div className="wrtItem" key={it}>
                              <span className="wrtTick" aria-hidden="true">
                                ✓
                              </span>
                              <span>{it}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

            <p className="wrtNote">
              {d.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
