import React, { useEffect, useMemo, useRef, useState } from "react";
import "../../assets/style/style.css";
import { useNavigate } from "react-router-dom";
import SLIDES from "../../assets/content/homepage/herodata";

export default function Hero() {
  const navigate = useNavigate();
  const slides = useMemo(() => SLIDES, []);
  const [active, setActive] = useState(2);
  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const timerRef = useRef(null);

  const go = (dir) => {
    setActive((p) => (p + dir + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isHoveringCard) return;
    timerRef.current = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 2600);

    return () => clearInterval(timerRef.current);
  }, [isHoveringCard, slides.length]);

  const s = slides[active];

  return (
    <div className="hero-page">
      <div className="hero-container">
        <div className="hero-grid">
          {/* LEFT */}
          <section className="hero-left">
            <div className="hero-badge">
              <span className="badge-dot" />
              <span>From draft to journal decision — in one partner</span>
            </div>

            <h1 className="hero-title">
              Research paper editing &nbsp;
              <span className="hero-accent">journal submission support</span> you can trust.
            </h1>

            <p className="hero-description">
              Pass AI and plagiarism checks confidently, reduce hidden rejection risks,
              and move from rough draft to submission-ready manuscript with ethical support.
            </p>

            <div className="hero-actions">
              <button className="btn btnPrimary" onClick={() => navigate("/booknow")}>
                Book Now
              </button>
              <button className="btn btnGhost">See Editing Samples</button>
            </div>

            <div className="hero-meta-grid">
              <div>
                <div className="hero-meta-title">Fast turnarounds</div>
                <div className="hero-meta-text">24–72 hours for most editing jobs.</div>
              </div>

              <div>
                <div className="hero-meta-title">Ethical & transparent</div>
                <div className="hero-meta-text">COPE-aligned support — no ghostwriting.</div>
              </div>

              <div className="hero-meta-full">
                <div className="hero-meta-title">Proven outcomes</div>
                <div className="hero-meta-text">
                  4,051+ researchers helped · 200+ acceptances.
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT */}
          <section
            className="hero-right"
            onMouseEnter={() => setIsHoveringCard(true)}
            onMouseLeave={() => setIsHoveringCard(false)}
          >
            <div className="hero-card">
              <div className="hero-card-top">
                <div className="hero-pill">{s.pill}</div>

                <div className="hero-dots">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      className={`hero-dot-btn ${i === active ? "is-active" : ""}`}
                      onClick={() => setActive(i)}
                    />
                  ))}
                </div>
              </div>

              <div className="hero-card-body">
                <div>
                  <h3 className="hero-card-title">{s.title}</h3>
                  <p className="hero-card-desc">{s.desc}</p>

                  <div className="hero-tag-list">
                    {s.tags.map((t) => (
                      <span className="hero-tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>

                <div className="hero-preview">
                  <div className="hero-preview-inner">
                    <img src={s.img} alt={s.title} className="hero-image" />
                  </div>
                </div>
              </div>

              <div className="hero-card-bottom">
                <div className="hero-nav">
                  <button className="hero-nav-btn" onClick={() => go(-1)}>
                    <span className="hero-arrow left" />
                  </button>

                  <button className="hero-nav-cta">{s.ctaLabel}</button>

                  <button className="hero-nav-btn" onClick={() => go(1)}>
                    <span className="hero-arrow right" />
                  </button>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
