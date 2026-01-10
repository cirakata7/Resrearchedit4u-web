import React, { useMemo, useState } from "react";
import "../../assets/style/style.css";
import { ACADEMIC_HERO } from "../../assets/content/academicpresentation/academicHeroData";


function cx(...arr) {
  return arr.filter(Boolean).join(" ");
}

export default function AcademicHero() {
  const data = useMemo(() => ACADEMIC_HERO, []);
  const [active, setActive] = useState(data.chips[0]?.id || "thesis");

  const chip = data.chips.find((c) => c.id === active) || data.chips[0];

  const imgSrc = chip?.imageSrc || data.fallbackImage.src;
  const imgAlt = chip?.imageAlt || data.fallbackImage.alt;

  return (
    <section className="ahSection">
      <div className="ahWrap">
        <div className="ahShell">
          {/* LEFT */}
          <div className="ahLeft">
            <div className="ahKicker">{data.kicker}</div>

            <h1 className="ahTitle">{data.title}</h1>
            <p className="ahSub">{data.subtitle}</p>

            <div className="ahCtas">
              <a className="ahBtnPrimary" href={data.ctas.primary.href}>
                {data.ctas.primary.label}
                <span className="ahArrow">→</span>
              </a>

              <a className="ahBtnSecondary" href={data.ctas.secondary.href}>
                {data.ctas.secondary.label}
              </a>
            </div>

            {/* Chips */}
            <div className="ahChips" role="tablist" aria-label="Select service type">
              {data.chips.map((c) => {
                const isActive = c.id === active;
                return (
                  <button
                    key={c.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={cx("ahChip", isActive && "isActive")}
                    onClick={() => setActive(c.id)}
                  >
                    <span className={cx("ahDot", isActive && "isOn")} aria-hidden="true" />
                    <span className="ahChipText">{c.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Trust pill row */}
            <div className="ahTrustRow">
              {data.trustPills.map((p) => (
                <span className="ahTrustPill" key={p.id}>
                  <span className="ahTrustDot" aria-hidden="true" />
                  {p.label}
                </span>
              ))}
            </div>

            {/* Features */}
            <div className="ahFeatures">
              {data.features.map((f) => (
                <div className="ahFeatureRow" key={f.id}>
                  <div className="ahFeatureLeft">
                    <span className="ahIcon" aria-hidden="true">
                      {f.id === "secure" ? "🔒" : "🖨️"}
                    </span>
                    <span className="ahFeatureText">{f.left}</span>
                  </div>
                  <div className="ahFeatureRight">{f.right}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="ahRight">
            <div className="ahImageCard">
              {/* top small badges */}
              <div className="ahImageTop">
                <span className="ahBadge">{chip?.topBadge || "Real-world outputs"}</span>
              </div>

              <div className="ahImageFrame">
                <img
                  className="ahImg"
                  src={imgSrc}
                  alt={imgAlt}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = data.fallbackImage.src;
                  }}
                />
              </div>

              {/* bottom pills */}
              <div className="ahImageBottom">
                {(chip?.bottomPills || ["Deck"]).map((t) => (
                  <span className="ahPill" key={t}>
                    <span className="ahPillDot" aria-hidden="true" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* end right */}
        </div>
      </div>
    </section>
  );
}
