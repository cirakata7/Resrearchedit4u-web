// src/components/dataservices/DataHero.jsx
import React from "react";
import { Link } from "react-router-dom";
import { HERO } from "../../assets/content/dataservices/heroContent";
import "../../assets/style/style.css";

import heroImg from "../../assets/images/ai.webp";

export default function DataHero() {
  return (
    <section className="dsHero" id="top">
      <div className="dsContainer">
        <div className="dsGrid">
          {/* LEFT */}
          <div className="dsLeft">
            <h1 className="dsTitle">{HERO.title}</h1>

            <p className="dsBody">
              {HERO.bodyParts.map((p, i) =>
                p.b ? <b key={i}>{p.t}</b> : <span key={i}>{p.t}</span>
              )}
            </p>

            <div className="dsActions">
              {HERO.ctas.map((c) => (
                <Link
                  key={c.href}
                  to={c.href}
                  className={`dsBtn ${c.variant === "primary" ? "dsBtnPrimary" : "dsBtnGhost"}`}
                >
                  {c.label}
                </Link>
              ))}
            </div>

            <div className="dsChips">
              {HERO.chips.map((t) => (
                <span className="dsChip" key={t}>
                  <span className="dsDot" />
                  {t}
                </span>
              ))}
            </div>

            <p className="dsNote">{HERO.note}</p>
          </div>

          {/* RIGHT (IMAGE BOX) */}
          <aside className="dsRight" aria-label="Data services visual">
            <div className="dsImgCard">
              <div className="dsImgFrame">
                {/* If you have a real image, uncomment this and set correct import path */}
                
                <img className="dsImg" src={heroImg} alt="Data analysis preview" />
               

                {/* Placeholder “image” design */}
                <div className="dsImgPlaceholder">
                  {/* <div className="dsImgChip">
                    <span className="dsImgChipDot" />
                    QC Checked
                  </div> */}

                  {/* <div className="dsImgSheet">
                    <div className="dsSheetRow dsSheetHead">
                      <span>Variable</span>
                      <span>Coef.</span>
                      <span>P</span>
                      <span>CI</span>
                    </div>
                    <div className="dsSheetRow">
                      <span>X₁</span><span>0.62</span><span>0.004</span><span>0.25</span>
                    </div>
                    <div className="dsSheetRow">
                      <span>X₂</span><span>0.34</span><span>0.012</span><span>0.14</span>
                    </div>
                    <div className="dsSheetRow">
                      <span>X₃</span><span>1.02</span><span>0.003</span><span>0.87</span>
                    </div>
                  </div> */}

                  {/* <div className="dsImgChart" aria-hidden="true">
                    <svg viewBox="0 0 240 120" className="dsSvg">
                      <path
                        className="dsLine"
                        d="M10,95 C45,90 60,72 82,70 C110,66 120,52 140,50 C165,47 175,35 198,30 C215,27 225,20 235,18"
                      />
                      <path
                        className="dsFill"
                        d="M10,95 C45,90 60,72 82,70 C110,66 120,52 140,50 C165,47 175,35 198,30 C215,27 225,20 235,18 L235,120 L10,120 Z"
                      />
                    </svg>
                  </div> */}

                  {/* <div className="dsImgFooter">
                    <span className="dsMiniLabel">Tools</span>
                    <span className="dsMiniPill">SPSS</span>
                    <span className="dsMiniPill">R</span>
                    <span className="dsMiniPill">Excel</span>
                  </div> */}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
