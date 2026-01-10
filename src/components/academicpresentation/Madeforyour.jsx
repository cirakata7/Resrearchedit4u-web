
import React, { useMemo, useState } from "react";
import "../../assets/style/style.css";
import { AUDIENCE_STRIP } from "../../assets/content/academicpresentation/Madeforyour";

function cx(...arr) {
  return arr.filter(Boolean).join(" ");
}

function sortByPersona(tiles, persona) {
  return [...tiles].sort((a, b) => {
    const sa = a.scores?.[persona] ?? 0;
    const sb = b.scores?.[persona] ?? 0;
    return sb - sa;
  });
}

export default function Madeforyour() {
  const d = useMemo(() => AUDIENCE_STRIP, []);
  const [persona, setPersona] = useState(d.personas[0]?.id || "phd");

  const personaLabel =
    d.personas.find((p) => p.id === persona)?.label || "Selected";

  const tiles = useMemo(() => sortByPersona(d.tiles, persona), [d.tiles, persona]);

  return (
    <section className="asSection" aria-label="Audience triage strip">
      <div className="asWrap">
        <div className="asShell">
          {/* Header */}
          <div className="asHead">
            <div className="asTitleBlock">
              <h2 className="asTitle">{d.heading}</h2>
              <p className="asSub">{d.subheading}</p>
            </div>

            <div className="asRightMeta" aria-hidden="true">
              <span className="asMetaPill">{`Active: ${personaLabel}`}</span>
              {d.metaRight.map((m) => (
                <span className="asMetaPill" key={m}>
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Persona chips */}
          <div className="asChips" role="group" aria-label="Choose persona">
            {d.personas.map((p) => {
              const active = p.id === persona;
              return (
                <button
                  key={p.id}
                  type="button"
                  className={cx("asChip", active && "isActive")}
                  aria-pressed={active}
                  onClick={() => setPersona(p.id)}
                >
                  <span className="asBadge" aria-hidden="true">
                    {p.id === "phd" ? "🎓" : p.id === "conference" ? "🏅" : p.id === "lab" ? "🧪" : "💼"}
                  </span>
                  <span className="asChipText">{p.label}</span>
                </button>
              );
            })}
          </div>

          {/* Services */}
          <div className="asServices" aria-label="Reordered services">
            <h3 className="asH3">
              {d.servicesHeadingPrefix}
              {personaLabel}
              {")"}
            </h3>

            <div className="asGrid">
              {tiles.map((t) => (
                <article className="asTile" key={t.id}>
                  <div className="asKicker">
                    {t.kickerPills?.map((k) => (
                      <span className="asPill" key={k}>
                        {k}
                      </span>
                    ))}
                  </div>

                  <h4 className="asTileTitle">{t.title}</h4>
                  <p className="asTileDesc">{t.desc}</p>

                  <div className="asTileFoot">
                    <span className="asFootLeft">{t.leftFoot}</span>
                    <a className="asBtn" href={t.ctaHref}>
                      {t.ctaLabel}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
