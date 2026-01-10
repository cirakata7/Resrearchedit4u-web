import React, { useMemo, useRef, useState } from "react";
import "../../assets/style/style.css";
import { POPULAR_SERVICES } from "../../assets/content/homepage/popularServicesData";

export default function PopularServices() {
  const data = useMemo(() => POPULAR_SERVICES, []);
  const scrollerRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardW = el.clientWidth;
    const idx = Math.round(el.scrollLeft / cardW);
    setActiveDot(Math.max(0, Math.min(idx, data.items.length - 1)));
  };

  const scrollTo = (i) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  const scrollByOne = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="psSection">
      <div className="psWrap">
        <div className="psHeader">
          <h2 className="psTitle">{data.kicker}</h2>
          <p className="psSubtitle">{data.subtitle}</p>
        </div>

        <div className="psGridWrap">
          <button className="psArrow psArrowLeft" onClick={() => scrollByOne(-1)} aria-label="Previous">
            ‹
          </button>

          <div className="psGrid" ref={scrollerRef} onScroll={onScroll}>
            {data.items.map((it) => (
              <article className="psCard" key={it.id}>
                {it.popular && <div className="psRibbon">Popular</div>}

                <div className="psIcon">{it.icon}</div>

                <h3 className="psCardTitle">{it.title}</h3>
                <div className="psCardSub">{it.sub}</div>

                <ul className="psList">
                  {it.bullets.map((b, idx) => (
                    <li key={`${it.id}-b-${idx}`}>{b}</li>
                  ))}
                </ul>

                <div className="psPrice">{it.price}</div>

                <div className="psActions">
                  <a className="psBtn psBtnPrimary" href={it.primaryCta.href}>
                    {it.primaryCta.label}
                  </a>
                  <a className="psBtn psBtnLink" href={it.secondaryCta.href}>
                    {it.secondaryCta.label} →
                  </a>
                </div>
              </article>
            ))}
          </div>

          <button className="psArrow psArrowRight" onClick={() => scrollByOne(1)} aria-label="Next">
            ›
          </button>

          <div className="psDots">
            {data.items.map((_, i) => (
              <button
                key={`dot-${i}`}
                className={`psDot ${i === activeDot ? "isActive" : ""}`}
                onClick={() => scrollTo(i)}
                aria-label={`Go to card ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
