import React, { useMemo, useState } from "react";
import "../style/style.css";

const COUNTRY_CODES = [
  { v: "+91", label: "+91 (India)" },
  { v: "+1", label: "+1 (USA/Canada)" },
  { v: "+44", label: "+44 (UK)" },
  { v: "+61", label: "+61 (Australia)" },
  { v: "+971", label: "+971 (UAE)" },
  { v: "other", label: "Other" },
];

const TIMELINES = [
  { v: "", label: "Select your timeline" },
  { v: "1-10", label: "1–10 days (urgent)" },
  { v: "10-20", label: "10–20 days (standard)" },
  { v: "20-30", label: "20–30 days" },
  { v: "30-plus", label: "30 days or more" },
];

const SERVICES = [
  { v: "language_editing", label: "Language Editing / Substantive Editing" },
  { v: "research_design", label: "Research Design & Problem / GAP Framing" },
  { v: "data_analysis", label: "Data Analysis & Statistics" },
  { v: "publication_support", label: "Publication Support (Journal Selection, Submission, Response to Reviewers)" },
  { v: "plagiarism_reduction", label: "Plagiarism / Similarity Reduction (within academic integrity)" },
  { v: "formatting_references", label: "Manuscript Formatting & References" },
  { v: "visuals_graphical_abstract", label: "Visuals & Graphical Abstract / Figures" },
  { v: "thesis_support", label: "Thesis / Dissertation End-to-End Support" },
  { v: "other", label: "Other (please specify in the message box)" },
];

export default function Booknow() {
  const emailPattern = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);
  const phonePattern = useMemo(() => /^[0-9]{7,15}$/, []);

  const [values, setValues] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    timeline: "",
    services: [],
    fileUpload: null,
    message: "",
  });

  const [errors, setErrors] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const setField = (k, v) => {
    setValues((prev) => ({ ...prev, [k]: v }));
    setSubmitted(false);
  };

  const toggleService = (svc) => {
    setValues((prev) => {
      const has = prev.services.includes(svc);
      return { ...prev, services: has ? prev.services.filter((x) => x !== svc) : [...prev.services, svc] };
    });
    setSubmitted(false);
  };

  const validate = () => {
    const e = [];
    const fullName = values.fullName.trim();
    const email = values.email.trim();
    const timeline = values.timeline;
    const phone = values.phone.trim();
    const countryCode = values.countryCode;

    if (!fullName || fullName.length < 2) e.push("Please enter your full name.");
    if (!emailPattern.test(email)) e.push("Please enter a valid email address.");
    if (!timeline) e.push("Please select your timeline.");
    if (!values.services.length) e.push("Please select at least one service requirement.");
    if (!values.fileUpload) e.push("Please upload at least one file.");

    if (phone) {
      if (!phonePattern.test(phone)) e.push("Please enter a valid phone number (7–15 digits, numbers only).");
      if (!countryCode) e.push("Please select a country code for your phone number.");
    }

    return e;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);

    if (e.length) return;

    // Demo behaviour (same as your HTML): reset + show thank you.
    setSubmitted(true);
    setValues({
      fullName: "",
      email: "",
      countryCode: "+91",
      phone: "",
      timeline: "",
      services: [],
      fileUpload: null,
      message: "",
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="rfBody">
      <div className="rfPageWrap">
        <div className="rfCard">
          <div className="rfCardHeader">
            <div className="rfBrandPill">
              <span className="rfBrandPillDot" />
              RESEARCHEDIT4U ENQUIRY
            </div>

            <h1 className="rfCardTitle">Share your manuscript with our team</h1>
            <p className="rfCardSubtitle">
              Tell us what you are working on and what kind of support you need. We’ll review the details and respond
              with a tailored plan, timeline and quote.
            </p>
          </div>

          {errors.length > 0 && (
            <div className="rfErrors" role="alert">
              {errors.map((x) => (
                <div key={x}>{x}</div>
              ))}
            </div>
          )}

          {submitted && (
            <div className="rfThankYou" role="status">
              <strong>Thank you for sharing your work with Researchedit4u.</strong>
              Our team will review your details and files and get back to you with a recommended plan, timeline and
              quote. If your deadline is very urgent, you can also reach out via our direct contact channels on the
              website.
            </div>
          )}

          <form className="rfForm" onSubmit={onSubmit} noValidate>
            <div className="rfGrid">
              {/* Full Name */}
              <div className="rfField">
                <label className="rfLabel" htmlFor="fullName">
                  Full Name<span className="rfReq">*</span>
                </label>
                <input
                  className="rfInput"
                  id="fullName"
                  type="text"
                  value={values.fullName}
                  onChange={(e) => setField("fullName", e.target.value)}
                  placeholder="Dr. A. Sharma"
                  minLength={2}
                  required
                />
              </div>

              {/* Email */}
              <div className="rfField">
                <label className="rfLabel" htmlFor="email">
                  Email Address<span className="rfReq">*</span>
                </label>
                <input
                  className="rfInput"
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={(e) => setField("email", e.target.value)}
                  placeholder="name@university.edu"
                  required
                />
              </div>

              {/* Phone + country */}
              <div className="rfField">
                <label className="rfLabel" htmlFor="phone">
                  Phone (with country code)
                </label>

                <div className="rfInlineGroup">
                  <select
                    className="rfSelect"
                    value={values.countryCode}
                    onChange={(e) => setField("countryCode", e.target.value)}
                    aria-label="Country code"
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.v} value={c.v}>
                        {c.label}
                      </option>
                    ))}
                  </select>

                  <input
                    className="rfInput"
                    id="phone"
                    type="tel"
                    value={values.phone}
                    onChange={(e) => setField("phone", e.target.value)}
                    placeholder="9876543210"
                    inputMode="numeric"
                  />
                </div>

                <div className="rfHint">Used only for urgent queries and personalised support (no spam).</div>
              </div>

              {/* Timeline */}
              <div className="rfField">
                <label className="rfLabel" htmlFor="timeline">
                  Timeline<span className="rfReq">*</span>
                </label>
                <select
                  className="rfSelect"
                  id="timeline"
                  value={values.timeline}
                  onChange={(e) => setField("timeline", e.target.value)}
                  required
                >
                  {TIMELINES.map((t) => (
                    <option key={t.v} value={t.v}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Services */}
              <div className="rfField rfFull">
                <fieldset className="rfFieldset">
                  <legend className="rfLegend">
                    Service Requirements (you can select more than one)<span className="rfReq">*</span>
                  </legend>

                  <div className="rfServicesGrid">
                    {SERVICES.map((s) => (
                      <label key={s.v} className="rfCheckLabel">
                        <input
                          type="checkbox"
                          checked={values.services.includes(s.v)}
                          onChange={() => toggleService(s.v)}
                        />
                        <span>{s.label}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>

              {/* File Upload */}
              <div className="rfField rfFull">
                <label className="rfLabel" htmlFor="fileUpload">
                  Upload File(s)<span className="rfReq">*</span>
                </label>
                <input
                  className="rfFile"
                  id="fileUpload"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setField("fileUpload", e.target.files?.[0] || null)}
                  required
                />
                <div className="rfFileHint">
                  Attach your manuscript, thesis, proposal or related file (PDF or DOC/DOCX).
                </div>
              </div>

              {/* Message */}
              <div className="rfField rfFull">
                <label className="rfLabel" htmlFor="message">
                  Additional Message (short description)
                </label>
                <textarea
                  className="rfTextarea"
                  id="message"
                  value={values.message}
                  onChange={(e) => setField("message", e.target.value)}
                  rows={4}
                  placeholder="E.g., Q1 journal in environmental engineering, first revision after major comments, thesis editing with 3-week deadline…"
                />
              </div>
            </div>

            <div className="rfActionsRow">
              <div className="rfActionsCaption">
                By submitting, you agree that we may contact you regarding this project.
              </div>
              <button className="rfSubmitBtn" type="submit">
                <span className="rfSubmitIcon">➤</span>
                Submit enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
