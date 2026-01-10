// Heroresearchplanning.jsx (UPDATED select for visibility + required)
import React, { useMemo, useState } from "react";
import "../../assets/style/style.css";
import { BENEFITS, ROADMAP } from "../../assets/content/researchplanningdata/heroresearchplanning";
import { useNavigate } from "react-router-dom";


function CheckIcon() {
  return (
    <span className="ppCheck" aria-hidden>
      ✓
    </span>
  );
}

export default function Heroresearchplanning() {
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    level: "",       // IMPORTANT: keep empty to show placeholder
    date: "",
    details: "",
  });

  const errors = useMemo(() => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.whatsapp.trim()) e.whatsapp = "WhatsApp number is required.";
    if (!form.level) e.level = "Select academic level.";
    if (!form.date) e.date = "Select a preferred date.";
    return e;
  }, [form]);

  const canSubmit = Object.keys(errors).length === 0;

  const submit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    alert("Submitted (demo). Connect to your API/backend.");
  };
  const navigate = useNavigate();

  return (
    <section className="ppWrap">
      <div className="ppShell">
        <div className="ppGrid">
          {/* LEFT */}
          <div className="ppLeft">
            <div className="ppCrumb">
              <span className="ppDot" aria-hidden />
              Research Planning • Research Proposal Writing Help • PhD/Thesis/Grants
            </div>

            <h1 className="ppH">
              Research Planning for PhD & Grants — Proposal, Methodology & Work Plan
            </h1>

            <p className="ppSub">
              Get a supervisor-ready research plan with a clear <b>problem statement</b>, defendable{" "}
              <b>research gap</b>, aligned <b>research objectives</b> and <b>research questions</b>, strong{" "}
              <b>research methodology</b>, and a feasible timeline—so you stop rewriting the same proposal again and again.
            </p>

            <div className="ppBenefitList">
              {BENEFITS.map((b, i) => (
                <div className="ppBenefit" key={i}>
                  <CheckIcon />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div className="ppCtas">
              <button
                className="ppBtnPrimary"
                type="button"
                onClick={() => navigate("/quote-nextsteps")}
              >
                Get Your Quote
              </button>

              <button className="ppBtnGhost" type="button">
                Upload Your Brief
              </button>
              <button className="ppBtnLink" type="button">
                View Packages →
              </button>
            </div>

            {/* Quote Card */}
            <div className="ppQuoteCard">
              <div className="ppQuoteTitle">Get a quote in 30 minutes (WhatsApp/Email)</div>

              <form className="ppForm" onSubmit={submit}>
                <div className="ppFormGrid">
                  <label className="ppField">
                    <span className="ppLabel">Full Name</span>
                    <input
                      className={`ppInput ${errors.name ? "hasError" : ""}`}
                      value={form.name}
                      onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                      placeholder="Full Name"
                      required
                    />
                    {errors.name ? <span className="ppErr">{errors.name}</span> : null}
                  </label>

                  <label className="ppField">
                    <span className="ppLabel">WhatsApp Number</span>
                    <input
                      className={`ppInput ${errors.whatsapp ? "hasError" : ""}`}
                      value={form.whatsapp}
                      onChange={(e) => setForm((s) => ({ ...s, whatsapp: e.target.value }))}
                      placeholder="WhatsApp Number"
                      required
                    />
                    {errors.whatsapp ? <span className="ppErr">{errors.whatsapp}</span> : null}
                  </label>

                  {/* UPDATED: select has placeholder option + required + :invalid styling works */}
                  <label className="ppField">
                    <span className="ppLabel">Academic Level</span>
                    <select
                      className={`ppInput ${errors.level ? "hasError" : ""}`}
                      value={form.level}
                      onChange={(e) => setForm((s) => ({ ...s, level: e.target.value }))}
                      required
                    >
                      <option value="" disabled>
                        Academic Level
                      </option>
                      <option value="ug">UG</option>
                      <option value="pg">PG</option>
                      <option value="postdoc">Postdoc</option>
                      <option value="grant">Grant</option>
                    </select>
                    {errors.level ? <span className="ppErr">{errors.level}</span> : null}
                  </label>

                  <label className="ppField">
                    <span className="ppLabel">Preferred date</span>
                    <input
                      className={`ppInput ${errors.date ? "hasError" : ""}`}
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm((s) => ({ ...s, date: e.target.value }))}
                      required
                    />
                    {errors.date ? <span className="ppErr">{errors.date}</span> : null}
                  </label>

                  <label className="ppField ppSpan2">
                    <span className="ppLabel">Share more details (optional)</span>
                    <textarea
                      className="ppInput ppTextarea"
                      value={form.details}
                      onChange={(e) => setForm((s) => ({ ...s, details: e.target.value }))}
                      placeholder="Topic, research area, supervisor requirements, deadline, university format, etc."
                    />
                    <span className="ppHelper">
                      Transparent quote before work starts • Confidential • Integrity-first
                    </span>
                  </label>
                </div>

                <div className="ppFormActions">
                  <button className="ppBtnPrimary" type="submit" disabled={!canSubmit} aria-disabled={!canSubmit}>
                    Get Quote & Next Steps
                  </button>
                  <button className="ppBtnSecondary" type="button">
                    Share More Details
                  </button>
                </div>
              </form>
            </div>

            <div className="ppBadges">
              <span className="ppBadge">
                <span className="ppBadgeDot" aria-hidden /> Confidential
              </span>
              <span className="ppBadge">
                <span className="ppBadgeDot" aria-hidden /> Domain-aligned experts
              </span>
              <span className="ppBadge">
                <span className="ppBadgeDot" aria-hidden /> Quote shared before work
              </span>
              <span className="ppBadge">
                <span className="ppBadgeDot" aria-hidden /> Integrity promise
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <aside className="ppRight">
            <div className="ppRoadTop">
              <div className="ppRoadTitle">{ROADMAP.title}</div>
              <div className="ppRoadSub">{ROADMAP.subtitle}</div>
            </div>

            <div className="ppRoadCanvas" aria-label="Roadmap image area">
              <div className="ppFlow">
                {ROADMAP.steps.map((s) => (
                  <div className={`ppStepCard ppStep${s.n}`} key={s.n}>
                    <div className="ppStepIcon" aria-hidden>✓</div>
                    <div>
                      <div className="ppStepTitle">{s.n} {s.title}</div>
                      <div className="ppStepSub">{s.sub}</div>
                    </div>
                  </div>
                ))}
                <div className="ppCurve ppCurve1" aria-hidden />
                <div className="ppCurve ppCurve2" aria-hidden />
                <div className="ppCurve ppCurve3" aria-hidden />
                <div className="ppCurve ppCurve4" aria-hidden />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
