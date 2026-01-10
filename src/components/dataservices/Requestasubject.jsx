import React, { useState } from "react";
import "../../assets/style/style.css";

const LEVELS = [
  "UG / Coursework",
  "PG / Coursework",
  "PhD / Registration",
  "PhD / Final submission",
  "Researcher / Faculty",
  "Industry / Report",
];

export default function Requestasubject() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    level: "PhD / Registration",
    subject: "",
    requirement: "",
    file: null,
  });

  const onChange = (k) => (e) => {
    const v = k === "file" ? e.target.files?.[0] || null : e.target.value;
    setData((p) => ({ ...p, [k]: v }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form submit:", data);
    // connect your API here
  };

  return (
    <div className="rqPage">
      <div className="rqShell">
        <section className="rqCard">
          <div className="rqTop">
            <div className="rqTopLeft">
              <div className="rqTitle">Request a subject-specific sample or get a quote</div>
              <div className="rqDesc">
                Tell us your level + subject + requirement. We&apos;ll reply with the closest matching sample excerpt and a clear quotation.
              </div>
            </div>

            <div className="rqPills">
              <span className="rqPill"><span className="rqDot" /> Confidential</span>
              <span className="rqPill"><span className="rqDot" /> QC-backed</span>
              <span className="rqPill"><span className="rqDot" /> Research-first</span>
            </div>
          </div>

          <form className="rqForm" onSubmit={onSubmit}>
            {/* Row 1 */}
            <div className="rqGrid2">
              <div className="rqField">
                <label className="rqLabel">Full name <span className="rqReq">*</span></label>
                <input
                  className="rqInput"
                  placeholder="Your name"
                  value={data.name}
                  onChange={onChange("name")}
                />
              </div>

              <div className="rqField">
                <label className="rqLabel">Email <span className="rqReq">*</span></label>
                <input
                  className="rqInput"
                  placeholder="name@email.com"
                  value={data.email}
                  onChange={onChange("email")}
                />
              </div>

              {/* Row 2 */}
              <div className="rqField">
                <label className="rqLabel">Phone / WhatsApp <span className="rqReq">*</span></label>
                <input
                  className="rqInput"
                  placeholder="+1 / +44 / +91..."
                  value={data.phone}
                  onChange={onChange("phone")}
                />
              </div>

              <div className="rqField">
                <label className="rqLabel">Level <span className="rqReq">*</span></label>
                <select className="rqSelect" value={data.level} onChange={onChange("level")}>
                  {LEVELS.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Subject */}
            <div className="rqField rqSpan">
              <label className="rqLabel">Subject / domain <span className="rqReq">*</span></label>
              <input
                className="rqInput"
                placeholder="e.g., Psychology, Civil Engg, Management, Public Health"
                value={data.subject}
                onChange={onChange("subject")}
              />
            </div>

            {/* Requirement */}
            <div className="rqField rqSpan">
              <label className="rqLabel">Requirement <span className="rqReq">*</span></label>
              <textarea
                className="rqTextarea"
                placeholder="What do you need? (data cleaning, survey analysis, regression, interpretation, reporting tables/figures, QC review...)"
                value={data.requirement}
                onChange={onChange("requirement")}
              />
            </div>

            {/* File */}
            <div className="rqField rqSpan">
              <label className="rqLabel">
                Upload template / codebook / questionnaire <span className="rqOpt">(optional)</span>
              </label>

              <div className="rqFileBar">
                <label className="rqFileBtn">
                  Choose File
                  <input type="file" className="rqFileInput" onChange={onChange("file")} />
                </label>

                <div className="rqFileName" aria-live="polite">
                  {data.file ? data.file.name : "No file chosen"}
                </div>
              </div>

              <div className="rqTip">
                Tip: If you upload your format, we&apos;ll align sample structure closer to your requirements.
              </div>
            </div>

            {/* CTA */}
            <button type="submit" className="rqCta">
              Send &amp; get a reply
            </button>

            <div className="rqFoot">
              Integrity-first: we don&apos;t fabricate data/results/claims. We help you understand and present your results clearly.
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
