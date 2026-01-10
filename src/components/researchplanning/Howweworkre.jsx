import React, { useMemo, useState } from "react";
import "../../assets/style/style.css";
import { HOW_WE_WORK } from "../../assets/content/researchplanningdata/Howweworkre";

function StepTab({ step, active, onClick }) {
  return (
    <button
      type="button"
      className={`hwTab ${active ? "hwTabActive" : ""}`}
      onClick={onClick}
      role="tab"
      aria-selected={active}
    >
      <span className={`hwNum ${active ? "hwNumActive" : ""}`}>{step.num}</span>
      <span className="hwTabText">{step.tab}</span>
    </button>
  );
}

function CTAButton({ variant, children, onClick }) {
  return (
    <button
      type="button"
      className={`hwBtn ${variant === "primary" ? "hwBtnPrimary" : "hwBtnGhost"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default function HowWeWorkkre() {
  const [activeId, setActiveId] = useState(HOW_WE_WORK.steps[0].id);

  const activeStep = useMemo(() => {
    return HOW_WE_WORK.steps.find((s) => s.id === activeId) || HOW_WE_WORK.steps[0];
  }, [activeId]);

  return (
    <section className="hwPage" aria-label="How we work">
      <div className="hwShell">
        <header className="hwHeader">
          <h2 className="hwTitle">{HOW_WE_WORK.heading}</h2>
          <p className="hwSub">{HOW_WE_WORK.subtext}</p>
        </header>

        <div className="hwCard">
          {/* Stepper */}
          <div className="hwStepperWrap" role="tablist" aria-label="Workflow steps">
            <div className="hwStepper">
              {HOW_WE_WORK.steps.map((s) => (
                <StepTab
                  key={s.id}
                  step={s}
                  active={s.id === activeId}
                  onClick={() => setActiveId(s.id)}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="hwPanel" role="tabpanel" aria-label={activeStep.title}>
            <div className="hwPanelTitleRow">
              <div className="hwPanelKicker">{activeStep.num})</div>
              <div className="hwPanelTitle">{activeStep.title}</div>
            </div>

            <p className="hwPanelDesc">{activeStep.desc}</p>

            <ul className="hwList">
              {activeStep.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className="hwActions">
              {activeStep.ctas.map((c) => (
                <CTAButton
                  key={c.id}
                  variant={c.variant}
                  onClick={() => console.log("CTA:", activeStep.id, c.id)}
                >
                  {c.label}
                </CTAButton>
              ))}
            </div>
          </div>

          {/* Footer chips */}
          <div className="hwFooter">
            {HOW_WE_WORK.footerChips.map((t) => (
              <span className="hwChip" key={t}>
                <span className="hwChipDot" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
