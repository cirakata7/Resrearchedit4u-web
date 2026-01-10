// src/components/SupportPacks.jsx
import React, { useMemo, useState } from "react";
import { PRICING_PLANS } from "../../assets/content/dataservices/pricingData";
import "../../assets/style/style.css";

function cn(...xs) {
  return xs.filter(Boolean).join(" ");
}

function Chip({ children }) {
  return <span className="chip">{children}</span>;
}

function Button({ variant = "primary", size = "md", onClick, children, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "btn",
        variant === "primary" && "btn--primary",
        variant === "ghost" && "btn--ghost",
        size === "sm" && "btn--sm"
      )}
    >
      {children}
    </button>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <header className="spHeader">
      <h1 className="spTitle">{title}</h1>
      <p className="spSubtitle">{subtitle}</p>
    </header>
  );
}

function FitGuide({ planId, openId, setOpenId, quickFit }) {
  const isOpen = openId === planId;

  return (
    <div className="fit">
      <button
        className="fitTop"
        onClick={() => setOpenId(isOpen ? null : planId)}
        aria-expanded={isOpen}
      >
        <span className="fitCheck" aria-hidden="true">✓</span>
        <span className="fitTitle">{quickFit.title}</span>
        <span className={cn("fitCaret", isOpen && "fitCaret--open")} aria-hidden="true">▾</span>
      </button>

      <div className={cn("fitBody", isOpen && "fitBody--open")}>
        <div className="fitCols">
          <div className="fitCol">
            <div className="fitColTitle">Best fit when</div>
            <ul className="fitList">
              {quickFit.best.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>

          <div className="fitCol">
            <div className="fitColTitle">Not ideal when</div>
            <ul className="fitList">
              {quickFit.notIdeal.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        </div>

        {quickFit.footers?.length ? (
          <div className="fitFooter">
            {quickFit.footers.map((x, i) => (
              <Chip key={i}>{x}</Chip>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function PlanCard({ plan, selected, onSelect, openFitId, setOpenFitId, onCta }) {
  return (
    <article
      className={cn(
        "card",
        plan.isFeatured && "card--featured",
        selected && "card--selected"
      )}
      onClick={() => onSelect(plan.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onSelect(plan.id);
      }}
      aria-pressed={selected}
    >
      <div className="cardTopRow">
        <div className="badge">
          <span className="dot" aria-hidden="true" />
          <span className="badgeText">{plan.badge}</span>
        </div>

        <div className={cn("cornerTag", plan.isFeatured && "cornerTag--featured")}>
          {plan.cornerTag}
        </div>
      </div>

      <h2 className="cardTitle">{plan.title}</h2>
      <p className="cardDesc">{plan.desc}</p>

      <ul className="cardBullets">
        {plan.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      <FitGuide
        planId={plan.id}
        openId={openFitId}
        setOpenId={setOpenFitId}
        quickFit={plan.quickFit}
      />

      <div className="cardCtas" onClick={(e) => e.stopPropagation()}>
        {plan.ctas.map((c) => (
          <Button
            key={c.id}
            variant={c.variant}
            size={c.variant === "ghost" ? "sm" : "md"}
            onClick={() => onCta(plan.id, c.id)}
          >
            {c.label}
          </Button>
        ))}
      </div>
    </article>
  );
}

export default function PricingData() {
  const plans = useMemo(() => PRICING_PLANS, []);
  const [selectedId, setSelectedId] = useState("core");
  const [openFitId, setOpenFitId] = useState("core");

  const selectedPlan = plans.find((p) => p.id === selectedId);

  function onCta(planId, ctaId) {
    // Replace with routing / modal / analytics.
    // Keeping it functional without external dependencies:
    const plan = plans.find((p) => p.id === planId);
    const cta = plan?.ctas?.find((x) => x.id === ctaId);
    window.alert(`CTA clicked:\nPlan: ${plan?.title}\nAction: ${cta?.label}`);
  }

  return (
    <section className="spWrap">
      <div className="spShell">
        <SectionTitle
          title="Choose how much support you need"
          subtitle="Start small if you’re unsure. Upgrade anytime. Everything stays clear, documented, and QC-checked."
        />

        <div className="grid">
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              selected={selectedId === plan.id}
              onSelect={(id) => setSelectedId(id)}
              openFitId={openFitId}
              setOpenFitId={setOpenFitId}
              onCta={onCta}
            />
          ))}
        </div>

        <div className="summary">
          <div className="summaryLeft">
            <div className="summaryTitle">{selectedPlan?.title}</div>
            <div className="summaryText">{selectedPlan?.desc}</div>
          </div>

          {/* <div className="summaryRight">
            <Button onClick={() => onCta(selectedId, `${selectedId}Primary`)}>Continue</Button>
            <Button variant="ghost" size="sm" onClick={() => setOpenFitId(selectedId)}>
              View fit guide
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
