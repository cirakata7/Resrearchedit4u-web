
import React, { useMemo, useRef, useState } from "react";
import "../../assets/style/style.css";
import { FINAL_CTA } from "../../assets/content/academicpresentation/Readyforyour";

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function daysUntil(dateStr) {
  if (!dateStr) return null;
  const d = new Date(`${dateStr}T00:00:00`);
  const now = new Date();
  const diff = d.getTime() - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function starString(rating) {
  // 0..5 → "★★★★☆" style
  const r = clamp(Number(rating) || 0, 0, 5);
  const full = Math.floor(r);
  const half = r - full >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty);
}

export default function Readyforyour ({
  onQuote = (payload) => alert("Quote request captured (demo):\n" + JSON.stringify(payload, null, 2)),
  onStart = (payload) => alert("Start request captured (demo):\n" + JSON.stringify(payload, null, 2)),
}) {
  const d = useMemo(() => FINAL_CTA, []);

  const [need, setNeed] = useState("defence");
  const [deadline, setDeadline] = useState("");
  const [notes, setNotes] = useState("");
  const [fileName, setFileName] = useState("");
  const [uploadTitle, setUploadTitle] = useState(d.upload.titleDefault);
  const [uploadHint, setUploadHint] = useState(d.upload.hintDefault);

  const fileRef = useRef(null);

  const plan = d.planMap[need] || d.planMap.defence;
  const diffDays = daysUntil(deadline);
  const showUrgent = diffDays !== null && diffDays <= 5;

  function payload() {
    return {
      need,
      recommendedPlan: plan.name,
      deadline: deadline || null,
      notes: notes || null,
      fileSelected: !!fileName,
      fileName: fileName || null,
    };
  }

  function handleChooseFile() {
    fileRef.current?.click();
  }

  function handleFileChange(e) {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    setFileName(f.name);
    setUploadTitle(d.upload.titleSelected);
    setUploadHint(f.name);
  }

  function handleAttachLater() {
    if (fileRef.current) fileRef.current.value = "";
    setFileName("");
    setUploadTitle(d.upload.titleAttachLater);
    setUploadHint(d.upload.hintAttachLater);
  }

  function selectNeed(id) {
    setNeed(id);
  }

  return (
    <section className="fcSection" aria-label="Final call to action">
      <div className="fcWrap">
        <div className="fcShell">
          <div className="fcCard">
            {/* LEFT */}
            <div className="fcLeft">
              <div>
                <h2 className="fcH1">{d.heading}</h2>
                <p className="fcSub">{d.subheading}</p>

                <div className="fcTrustStrip" aria-label="Trust strip">
                  <div className="fcBadges">
                    {d.trustBadges.map((b) => (
                      <span className="fcBadge" key={b.id}>
                        <span className="fcBadgeIcon" aria-hidden="true">
                          {b.id === "rev" ? "✅" : "🔒"}
                        </span>
                        {b.label}
                      </span>
                    ))}

                    {/* dynamic badge reflects selected plan (like your HTML hook) */}
                    <span className="fcBadge isPlan">
                      <span className="fcBadgeIcon" aria-hidden="true">🛡️</span>
                      {plan.name}
                    </span>
                  </div>

                  <div className="fcRating">
                    <div className="fcStars" aria-hidden="true">
                      {starString(d.rating.stars).replace("½", "★")}
                    </div>
                    <div className="fcSmall">{d.rating.label}</div>
                  </div>
                </div>
              </div>

              <div className="fcFoot">
                <span>{d.footerLeft}</span>
                <span>{d.footerRight}</span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="fcRight">
              <div className="fcLabel">{d.needLabel}</div>

              <div className="fcChips" role="group" aria-label="Need selector">
                {d.needs.map((n) => {
                  const active = n.id === need;
                  return (
                    <button
                      key={n.id}
                      type="button"
                      className={`fcChip ${active ? "isActive" : ""}`}
                      aria-pressed={active}
                      onClick={() => selectNeed(n.id)}
                    >
                      {n.label}
                    </button>
                  );
                })}
              </div>

              <div className="fcRow">
                <div className="fcField">
                  <span className="fcIco" aria-hidden="true">📅</span>
                  <input
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    aria-label={d.fields.deadline.label}
                  />
                </div>

                <div className="fcField">
                  <span className="fcIco" aria-hidden="true">📝</span>
                  <input
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={d.fields.notes.placeholder}
                    aria-label={d.fields.notes.label}
                  />
                </div>
              </div>

              <div className="fcUpload" aria-label="Upload draft">
                <div className="fcUploadLeft">
                  <span className="fcIco" aria-hidden="true">⬆️</span>
                  <div className="fcUploadText">
                    <b>{uploadTitle}</b>
                    <span>{uploadHint}</span>
                  </div>
                </div>

                <div className="fcUploadBtns">
                  <input
                    ref={fileRef}
                    type="file"
                    accept={d.upload.accept}
                    hidden
                    onChange={handleFileChange}
                  />
                  <button className="fcBtnSmall" type="button" onClick={handleChooseFile}>
                    {d.upload.btnChoose}
                  </button>
                  <button className="fcBtnSmall" type="button" onClick={handleAttachLater}>
                    {d.upload.btnLater}
                  </button>
                </div>
              </div>

              <div className="fcRecommend" aria-live="polite">
                <span>
                  Recommended plan: <strong>{plan.name}</strong>
                </span>
                <span className="fcWhy">{plan.why}</span>
              </div>

              {showUrgent && <div className="fcHint">{d.urgentHint}</div>}

              <div className="fcCtaRow">
                <button className="fcBtn primary" type="button" onClick={() => onQuote(payload())}>
                  {d.ctas.primary} <span className="fcArrow">→</span>
                </button>
                <button className="fcBtn ghost" type="button" onClick={() => onStart(payload())}>
                  {d.ctas.secondary}
                </button>
              </div>

              <div className="fcDisc">{d.disclaimer}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
