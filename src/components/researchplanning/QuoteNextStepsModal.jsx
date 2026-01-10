import React, { useMemo, useState } from "react";
import "../../assets/style/style.css";
import { QUOTE_NEXT_STEPS } from "../../assets/content/researchplanningdata/quoteNextStepsData";
import { useNavigate } from "react-router-dom";

const initialState = {
  selectedOption: "free_call",
  academicLevel: "",
  fullName: "",
  discipline: "",
  helpWith: [],
  formatAvailable: "",
  notes: "",
};

function cx(...arr) {
  return arr.filter(Boolean).join(" ");
}

function CheckboxItem({ id, label, checked, onChange }) {
  return (
    <label className="qnpPCheck">
      <input
        type="checkbox"
        className="qnpPCheckBox"
        checked={checked}
        onChange={(e) => onChange(id, e.target.checked)}
      />
      <span className="qnpPCheckText">{label}</span>
    </label>
  );
}

export default function QuoteNextStepsPage() {
  const navigate = useNavigate();
  const COPY = QUOTE_NEXT_STEPS;

  const [form, setForm] = useState(initialState);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    const e = {};
    if (!form.academicLevel) e.academicLevel = "Select an academic level.";
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!form.discipline.trim()) e.discipline = "Discipline/subject is required.";
    if (!form.helpWith.length) e.helpWith = "Select at least one help area.";
    if (!form.formatAvailable) e.formatAvailable = "Select one option.";
    return e;
  }, [form]);

  const isValid = Object.keys(errors).length === 0;

  const setField = (key, value) => setForm((s) => ({ ...s, [key]: value }));

  const onCheck = (id, checked) => {
    setForm((s) => {
      const set = new Set(s.helpWith);
      if (checked) set.add(id);
      else set.delete(id);
      return { ...s, helpWith: Array.from(set) };
    });
  };

  const markTouched = (key) => setTouched((t) => ({ ...t, [key]: true }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      academicLevel: true,
      fullName: true,
      discipline: true,
      helpWith: true,
      formatAvailable: true,
    });

    if (!isValid) return;

    // Here you can send to API/email/CRM
    console.log("QUOTE FORM PAYLOAD:", form);
    setSubmitted(true);
  };

  return (
    <section className="qnpPPage" aria-label={COPY.title}>
      <div className="qnpPShell">
        {/* Top bar */}
        <div className="qnpPTop">
          {/* <button type="button" className="qnpPBack" onClick={() => navigate(-1)}>
            ← Back
          </button> */}

          <div className="qnpPTopText">
            <h1 className="qnpPTitle">{COPY.title}</h1>
            <p className="qnpPSub">
              Share a few details so we can recommend the best path and send a transparent quote + timeline.
            </p>
          </div>
        </div>

        <div className="qnpPGrid">
          {/* Main form card */}
          <div className="qnpPCard">
            <form className="qnpPBody" onSubmit={handleSubmit}>
              <div className="qnpPGrid2">
                {/* Selected option */}
                <div className="qnpPField">
                  <label className="qnpPLabel">{COPY.fields.selectedOption.label}</label>
                  <select
                    className="qnpPSelect"
                    value={form.selectedOption}
                    onChange={(e) => setField("selectedOption", e.target.value)}
                  >
                    {COPY.fields.selectedOption.options.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Academic level */}
                <div className="qnpPField">
                  <label className="qnpPLabel">{COPY.fields.academicLevel.label}</label>
                  <select
                    className={cx("qnpPSelect", touched.academicLevel && errors.academicLevel && "qnpPInvalid")}
                    value={form.academicLevel}
                    onBlur={() => markTouched("academicLevel")}
                    onChange={(e) => setField("academicLevel", e.target.value)}
                  >
                    <option value="">{COPY.fields.academicLevel.placeholder}</option>
                    {COPY.fields.academicLevel.options.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                  {touched.academicLevel && errors.academicLevel ? (
                    <div className="qnpPError">{errors.academicLevel}</div>
                  ) : null}
                </div>

                {/* Full name */}
                <div className="qnpPField">
                  <label className="qnpPLabel">{COPY.fields.fullName.label}</label>
                  <input
                    className={cx("qnpPInput", touched.fullName && errors.fullName && "qnpPInvalid")}
                    value={form.fullName}
                    onBlur={() => markTouched("fullName")}
                    onChange={(e) => setField("fullName", e.target.value)}
                    placeholder={COPY.fields.fullName.placeholder}
                  />
                  {touched.fullName && errors.fullName ? (
                    <div className="qnpPError">{errors.fullName}</div>
                  ) : null}
                </div>

                {/* Discipline */}
                <div className="qnpPField">
                  <label className="qnpPLabel">{COPY.fields.discipline.label}</label>
                  <input
                    className={cx("qnpPInput", touched.discipline && errors.discipline && "qnpPInvalid")}
                    value={form.discipline}
                    onBlur={() => markTouched("discipline")}
                    onChange={(e) => setField("discipline", e.target.value)}
                    placeholder={COPY.fields.discipline.placeholder}
                  />
                  {touched.discipline && errors.discipline ? (
                    <div className="qnpPError">{errors.discipline}</div>
                  ) : null}
                </div>
              </div>

              {/* Help with */}
              <div className="qnpPField qnpPFieldFull">
                <label className="qnpPLabel">{COPY.fields.helpWith.label}</label>

                <div className={cx("qnpPCheckGrid", touched.helpWith && errors.helpWith && "qnpPCheckGridInvalid")}>
                  {COPY.fields.helpWith.items.map((it) => (
                    <CheckboxItem
                      key={it.id}
                      id={it.id}
                      label={it.label}
                      checked={form.helpWith.includes(it.id)}
                      onChange={onCheck}
                    />
                  ))}
                </div>

                {touched.helpWith && errors.helpWith ? (
                  <div className="qnpPError">{errors.helpWith}</div>
                ) : null}
              </div>

              {/* Format available */}
              <div className="qnpPField qnpPFieldFull">
                <label className="qnpPLabel">{COPY.fields.formatAvailable.label}</label>
                <select
                  className={cx("qnpPSelect", touched.formatAvailable && errors.formatAvailable && "qnpPInvalid")}
                  value={form.formatAvailable}
                  onBlur={() => markTouched("formatAvailable")}
                  onChange={(e) => setField("formatAvailable", e.target.value)}
                >
                  <option value="">{COPY.fields.formatAvailable.placeholder}</option>
                  {COPY.fields.formatAvailable.options.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
                {touched.formatAvailable && errors.formatAvailable ? (
                  <div className="qnpPError">{errors.formatAvailable}</div>
                ) : null}
              </div>

              {/* Notes */}
              <div className="qnpPField qnpPFieldFull">
                <label className="qnpPLabel">{COPY.fields.notes.label}</label>
                <textarea
                  className="qnpPTextarea"
                  value={form.notes}
                  onChange={(e) => setField("notes", e.target.value)}
                  placeholder={COPY.fields.notes.placeholder}
                  rows={4}
                />
              </div>

              {/* Actions */}
              <div className="qnpPActions">
                <button type="submit" className="qnpPBtn qnpPBtnPrimary" disabled={!isValid}>
                  {COPY.actions.primary}
                </button>

                <button type="button" className="qnpPBtn qnpPBtnGhost" onClick={() => navigate(-1)}>
                  {COPY.actions.secondary}
                </button>
              </div>

              <div className="qnpPFoot">
                {COPY.footerNote.split("\n").map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
            </form>
          </div>

          {/* Right info panel */}
          <aside className="qnpPSide">
            <div className="qnpPSideCard">
              <div className="qnpPSideH">What happens next</div>
              <ul className="qnpPSideList">
                <li>We confirm scope + format requirements.</li>
                <li>You receive package recommendation + quote + timeline.</li>
                <li>Work starts after approval and payment.</li>
                <li>Every delivery passes QC checklist.</li>
              </ul>
            </div>

            <div className="qnpPSideCard">
              <div className="qnpPSideH">Privacy & integrity</div>
              <div className="qnpPSideText">
                Confidential handling. No fabricated data/results/citations. Your authorship remains yours.
              </div>
            </div>

            {submitted ? (
              <div className="qnpPSuccess">
                <div className="qnpPSuccessH">Submitted</div>
                <div className="qnpPSuccessT">
                  Your details were captured. Connect this to your backend to send email/CRM.
                </div>
              </div>
            ) : null}
          </aside>
        </div>
      </div>
    </section>
  );
}
