import React, { useEffect, useMemo, useRef, useState } from "react";
import "../../assets/style/style.css";
import OFFERS from "../../assets/content/homepage/quickoffers";
import { Link } from "react-router-dom";

export default function QuickOffers() {
  const offers = useMemo(() => OFFERS, []);
  const trackRef = useRef(null);

  const [index, setIndex] = useState(0);

  const getStep = () => {
    const el = trackRef.current;
    if (!el) return { step: 320, gap: 12 };
    const card = el.querySelector(".ppCard");
    const gap = 12; // must match CSS gap
    const cardW = card ? card.getBoundingClientRect().width : 320;
    return { step: cardW + gap, gap };
  };

  const scrollToIndex = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const { step } = getStep();
    el.scrollTo({ left: i * step, behavior: "smooth" });
  };

  const go = (dir) => {
    const n = offers.length;
    if (n === 0) return;

    // LOOPING LOGIC
    const next = (index + dir + n) % n;
    setIndex(next);
    scrollToIndex(next);
  };

  // Keep index updated when user swipes manually
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let t = null;
    const onScroll = () => {
      // debounce so index updates after swipe settles
      if (t) clearTimeout(t);
      t = setTimeout(() => {
        const { step } = getStep();
        const i = Math.round(el.scrollLeft / step);
        setIndex(Math.max(0, Math.min(offers.length - 1, i)));
      }, 80);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (t) clearTimeout(t);
      el.removeEventListener("scroll", onScroll);
    };
  }, [offers.length]);

  // If screen resizes, keep the same card aligned
  useEffect(() => {
    const onResize = () => scrollToIndex(index);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <section className="ppSection">
      <div className="ppWrap">
        <div className="ppShell">
          {/* Header */}
          <div className="ppHeader">
            <div className="ppHeaderLeft">
              <div className="ppKicker">QUICK OFFERS THAT SAVE TIME &amp; REJECTIONS</div>
              <h2 className="ppTitle">Plug-and-play services for your next submission.</h2>
              <p className="ppSub">
                Choose a focused offer when you&apos;re close to submission or responding to
                queries — so you don&apos;t lose more months in the rejection loop.
              </p>
            </div>
          </div>

          {/* Grid/Carousel */}
          <div className="ppGridWrap">
            <button
              type="button"
              className="ppNavBtn ppNavPrev"
              aria-label="Previous offer"
              onClick={() => go(-1)}
            >
              ‹
            </button>

            <div className="ppGrid" id="ppTrack" ref={trackRef}>
              {offers.map((o) =>
                o.kind === "guide" ? (
                  <GuideCard key={o.offerNo} data={o} />
                ) : (
                  <OfferCard key={o.offerNo} data={o} />
                )
              )}
            </div>

            <button
              type="button"
              className="ppNavBtn ppNavNext"
              aria-label="Next offer"
              onClick={() => go(1)}
            >
              ›
            </button>
          </div>

          {/* Optional: small indicator */}
          <div className="ppDots" aria-hidden="true">
            {offers.map((_, i) => (
              <span key={i} className={`ppDot ${i === index ? "isActive" : ""}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OfferCard({ data }) {
  return (
    <article className="ppCard">
      <div className="ppCardTop">
        <div className="ppOfferNo">{data.offerNo}</div>
        <span className="ppPill">{data.pill}</span>
      </div>

      <div className="ppCardTitle">{splitLines(data.title)}</div>
      <div className="ppCardSub">{data.subtitle}</div>

      <ul className="ppBullets">
        {data.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      <div className="ppSpacer" />
      <div className="ppDivider" />

      <div className="ppActions">
        <Link to={data.primaryLink} className="ppBtn ppBtnPrimary">
          <span className="ppBtnIcon" aria-hidden="true">↗</span>
          {data.primary}
        </Link>

        <button className="ppBtn ppBtnGhost" type="button">
          {data.secondary}
        </button>
      </div>
    </article>
  );
}

function GuideCard({ data }) {
  return (
    <article className="ppCard ppCardGuide">
      <div className="ppRibbon" aria-hidden="true">
        <span>{data.ribbon}</span>
      </div>

      <div className="ppCardTop">
        <div className="ppOfferNo">{data.offerNo}</div>
        <span className="ppPill">{data.pill}</span>
      </div>

      <div className="ppCardTitle">{splitLines(data.title)}</div>

      <div className="ppCardSub ppCardSubGuide">
        <span className="ppMiniIcon" aria-hidden="true">✉</span>
        {data.subtitle}
      </div>

      <ul className="ppBullets">
        {data.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      <div className="ppCircle">
        <input className="ppInput" placeholder={data.placeholder} />
      </div>

      <button className="ppBtn ppBtnPrimary ppBtnWide" type="button">
        <span className="ppBtnIcon" aria-hidden="true">↗</span>
        {data.primary}
      </button>
    </article>
  );
}

function splitLines(text) {
  return text.split("\n").map((t, i) => <div key={i}>{t}</div>);
}
