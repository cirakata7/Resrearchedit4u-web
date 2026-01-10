import React, { useMemo, useState } from "react";
import "../../assets/style/style.css";
import { FILTERS, FAQS } from "../../assets/content/homepage/faqdata";


export default function Faq() {
  const filters = useMemo(() => FILTERS, []);
  const faqs = useMemo(() => FAQS, []);

  const [activeFilter, setActiveFilter] = useState("All");
  const [openId, setOpenId] = useState("guarantee");

  const visibleFaqs =
    activeFilter === "All"
      ? faqs
      : faqs.filter((f) => f.tags.includes(activeFilter));

  return (
    <section className="fqSection">
      <div className="fqWrap">
        <div className="fqShell">
          {/* Header */}
          <div className="fqHeader">
            <div className="fqHeaderLeft">
              <div className="fqKicker">FREQUENTLY ASKED QUESTIONS</div>
              <h2 className="fqTitle">Common questions before you book with us.</h2>
              {/* <p className="fqSub">
                Clear answers on ethics, process, AI/similarity, and journal selection - so you can
                decide with confidence.
              </p> */}
            </div>

            {/* <div className="fqHeaderRight">
              Names anonymised; full testimonials available on request and NDAs respected.
            </div> */}
          </div>

          <div className="fqDivider" />

          {/* Main grid */}
          <div className="fqGrid">
            {/* Left card */}
            <aside className="fqAside">
              <div className="fqAsideCard">
                <div className="fqAsideTitle">Still unsure?</div>
                <div className="fqAsideText">
                  Use the quick routes below. No confusing hand-offs - clear next steps.
                </div>

                <button className="fqBtn fqBtnPrimary" type="button">
                  Book 1:1 Expert Call
                </button>
                <button className="fqBtn fqBtnGhost" type="button">
                  See Editing Sample
                </button>

                <div className="fqAsideDash" />

                <div className="fqTrustGrid">
                  <span className="fqChip">
                    <span className="fqChipDot" /> COPE-aligned
                  </span>
                  <span className="fqChip">
                    <span className="fqChipDot" /> No ghostwriting
                  </span>
                  <span className="fqChip">
                    <span className="fqChipDot" /> NDA-friendly
                  </span>
                  <span className="fqChip">
                    <span className="fqChipDot" /> Transparent quotes
                  </span>
                </div>
              </div>
            </aside>

            {/* Right panel */}
            <div className="fqPanel">
              {/* Filter chips */}
              <div className="fqFilters">
                {filters.map((f) => (
                  <button
                    key={f}
                    type="button"
                    className={`fqFilter ${activeFilter === f ? "isActive" : ""}`}
                    onClick={() => setActiveFilter(f)}
                  >
                    {f}
                  </button>
                ))}
              </div>

              <div className="fqDividerLite" />

              {/* Accordion list */}
              <div className="fqList">
                {visibleFaqs.map((item) => {
                  const isOpen = openId === item.id;

                  return (
                    <div key={item.id} className={`fqItem ${isOpen ? "isOpen" : ""}`}>
                      <button
                        type="button"
                        className="fqQRow"
                        onClick={() => setOpenId(isOpen ? "" : item.id)}
                        aria-expanded={isOpen}
                      >
                        <span className="fqIcon" aria-hidden="true">
                          ⓘ
                        </span>

                        <span className="fqQBlock">
                          <span className="fqQ">{item.q}</span>
                          <span className="fqTagRow">
                            {item.tags.map((t) => (
                              <span key={t} className="fqTag">
                                {t}
                              </span>
                            ))}
                          </span>
                        </span>

                        <span className={`fqChevron ${isOpen ? "up" : "down"}`} aria-hidden="true" />
                      </button>

                      {isOpen && (
                        <div className="fqA">
                          <p className="fqAText">{item.a}</p>
                          {/* <button className="fqLearn" type="button">
                            Learn more <span aria-hidden="true">→</span>
                          </button> */}
                        </div>
                      )}
                    </div>
                  );
                })}

                {visibleFaqs.length === 0 && (
                  <div className="fqEmpty">No FAQs match this filter.</div>
                )}
              </div>
            </div>
          </div>
          {/* end grid */}
        </div>
      </div>
    </section>
  );
}
