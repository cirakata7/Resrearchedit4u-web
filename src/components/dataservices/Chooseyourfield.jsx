// MethodPicker.jsx (ALL CLASS NAMES CHANGED TO MATCH CSS ABOVE)
import React, { useEffect, useMemo, useRef, useState } from "react";
import "../../assets/style/style.css";
import { FIELDS, QUESTIONS, CONTENT } from "../../assets/content/dataservices/Chooseyourfield";

function useRecommendedContent(questionId) {
  return CONTENT[questionId] ?? CONTENT.compare;
}

function ScrollRow({ children, ariaLabel }) {
  const ref = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const updateEdges = () => {
    const el = ref.current;
    if (!el) return;
    const left = el.scrollLeft;
    const max = el.scrollWidth - el.clientWidth;
    setCanLeft(left > 2);
    setCanRight(left < max - 2);
  };

  useEffect(() => {
    updateEdges();
    const el = ref.current;
    if (!el) return;

    const onScroll = () => updateEdges();
    const onResize = () => updateEdges();

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const nudge = (dir) => {
    const el = ref.current;
    if (!el) return;
    const amount = Math.max(240, Math.floor(el.clientWidth * 0.55));
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="mpRowWrap">
      {canLeft && (
        <button
          type="button"
          className="mpRowNav mpRowNavLeft"
          aria-label={`Scroll ${ariaLabel} left`}
          onClick={() => nudge(-1)}
        >
          ‹
        </button>
      )}

      <div className={`mpRowFade ${canLeft ? "mpFadeLeftOn" : ""} ${canRight ? "mpFadeRightOn" : ""}`} />

      <div className="mpRow" ref={ref} role="list" aria-label={ariaLabel}>
        {children}
      </div>

      {canRight && (
        <button
          type="button"
          className="mpRowNav mpRowNavRight"
          aria-label={`Scroll ${ariaLabel} right`}
          onClick={() => nudge(1)}
        >
          ›
        </button>
      )}
    </div>
  );
}

function Chip({ active, children, onClick, ariaLabel }) {
  return (
    <button
      type="button"
      className={`mpChip ${active ? "mpChipActive" : ""}`}
      aria-pressed={active}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default function MethodPicker() {
  const [fieldId, setFieldId] = useState("eng");
  const [questionId, setQuestionId] = useState("text");

  const content = useRecommendedContent(questionId);

  const example = useMemo(() => {
    const map = content.examplesByField || {};
    return map[fieldId] || map.unsure || "Choose a field to see tailored examples.";
  }, [content, fieldId]);

  const tailoredLabel = useMemo(() => {
    const f = FIELDS.find((x) => x.id === fieldId);
    return f ? f.label : "Not sure";
  }, [fieldId]);

  return (
    <div className="mpPage">
      <div className="mpShell">
        <header className="mpHeader">
          <h1 className="mpH1">Choose your field. Then choose your question.</h1>
          <p className="mpSub">
            Same research rules across subjects—different examples, different reviewer expectations. This helps you pick a defendable
            methodology and the right type of analysis.
          </p>
        </header>

        <section className="mpPanel" aria-label="Method selection">
          {/* Step 1 */}
          <div className="mpStepHead">
            <span className="mpStepPill">Step 1</span>
            <span className="mpStepText">Pick your field (we’ll tailor examples)</span>
          </div>

          <ScrollRow ariaLabel="Fields">
            {FIELDS.map((f) => (
              <Chip
                key={f.id}
                active={fieldId === f.id}
                onClick={() => setFieldId(f.id)}
                ariaLabel={`Field: ${f.label}`}
              >
                {f.label}
              </Chip>
            ))}
          </ScrollRow>

          {/* Step 2 */}
          <div className="mpStepHead mpStepHeadTight">
            <span className="mpStepPill">Step 2</span>
            <span className="mpStepText">Pick your research question (this drives methodology)</span>
          </div>

          <ScrollRow ariaLabel="Questions">
            {QUESTIONS.map((q) => (
              <Chip
                key={q.id}
                active={questionId === q.id}
                onClick={() => setQuestionId(q.id)}
                ariaLabel={`Question type: ${q.label}`}
              >
                {q.label}
              </Chip>
            ))}
          </ScrollRow>

          <div className="mpDivider" />

          {/* Recommended */}
          <article className="mpRec" aria-live="polite">
            <div className="mpRecTop">
              <div className="mpRecKicker">{content.kicker}</div>
              <div className="mpRecTailored">Tailored for {tailoredLabel}</div>
            </div>

            <h2 className="mpRecTitle">{content.title}</h2>
            <p className="mpRecBlurb">{content.blurb}</p>

            <div className="mpGrid">
              {content.cards.map((c) => (
                <div className="mpCard" key={c.title}>
                  <div className="mpCardTitle">{c.title}</div>
                  <div className="mpCardBody">{c.body}</div>
                </div>
              ))}
            </div>

            <div className="mpExample">
              <div className="mpExampleTitle">Example for your field</div>
              <div className="mpExampleBody">{example}</div>
            </div>

            <div className="mpRecBottom">
              <p className="mpIntegrity">
                <strong>Integrity-first:</strong> We guide methodology and reporting. We don’t fabricate data/results, and we’ll flag
                overclaims (e.g., causality from cross-sectional data).
              </p>

              <div className="mpCta">
                <button type="button" className="mpBtn mpBtnPrimary">
                  Send my dataset for review
                </button>
                <button type="button" className="mpBtn mpBtnGhost">
                  See packages
                </button>
              </div>
            </div>

            <div className="mpBadges" aria-label="Trust badges">
              <span className="mpBadge">Works across all subjects</span>
              <span className="mpBadge">Plain-English guidance</span>
              <span className="mpBadge">QC-backed outputs</span>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
