

import React, { useMemo, useState } from "react";
import "../../assets/style/style.css";
import { OUTCOME_PICKER } from "../../assets/content/academicpresentation/Choosetheright";

function cx(...arr) {
  return arr.filter(Boolean).join(" ");
}

function buildWhyText(data, state) {
  const s1 = data.steps.find((x) => x.id === "deadline");
  const s2 = data.steps.find((x) => x.id === "use");
  const s3 = data.steps.find((x) => x.id === "have");

  return `Based on: ${s1?.labelMap?.[state.deadline] ?? state.deadline} · ${
    s2?.labelMap?.[state.use] ?? state.use
  } · ${s3?.labelMap?.[state.have] ?? state.have}`;
}

/* Scoring logic is ported from your HTML file (same behavior). :contentReference[oaicite:1]{index=1} */
function score(itemId, state) {
  let s = 0;

  // Use-case weighting
  if (state.use === "viva") {
    s += itemId === "defence" ? 50 : 0;
    s += itemId === "dataviz" ? 18 : 0;
    s += itemId === "talk" ? 10 : 0;
    s += itemId === "poster" ? 8 : 0;
  }
  if (state.use === "conf") {
    s += itemId === "talk" ? 50 : 0;
    s += itemId === "poster" ? 28 : 0;
    s += itemId === "dataviz" ? 14 : 0;
    s += itemId === "convert" ? 10 : 0;
  }
  if (state.use === "lab") {
    s += itemId === "dataviz" ? 32 : 0;
    s += itemId === "talk" ? 26 : 0;
    s += itemId === "defence" ? 14 : 0;
  }
  if (state.use === "industry") {
    s += itemId === "pitch" ? 50 : 0;
    s += itemId === "dataviz" ? 24 : 0;
    s += itemId === "talk" ? 12 : 0;
  }

  // Deadline weighting
  if (state.deadline === "48h") {
    s += itemId === "convert" ? 18 : 0;
    s += itemId === "dataviz" ? 12 : 0;
  }
  if (state.deadline === "flex") {
    s += itemId === "defence" ? 8 : 0;
    s += itemId === "talk" ? 6 : 0;
    s += itemId === "poster" ? 6 : 0;
  }

  // Input weighting
  if (state.have === "draftppt") {
    s += itemId === "convert" ? 24 : 0;
    s += itemId === "talk" ? 10 : 0;
    s += itemId === "defence" ? 8 : 0;
  }
  if (state.have === "figures") {
    s += itemId === "dataviz" ? 26 : 0;
    s += itemId === "poster" ? 10 : 0;
  }
  if (state.have === "manuscript") {
    s += itemId === "defence" ? 12 : 0;
    s += itemId === "poster" ? 8 : 0;
    s += itemId === "talk" ? 8 : 0;
  }

  return s;
}

export default function Choosetheright({
  onPrimary = () => {},
  onSecondary = () => {},
}) {
  const d = useMemo(() => OUTCOME_PICKER, []);

  const initial = useMemo(() => {
    const obj = {};
    d.steps.forEach((st) => (obj[st.id] = st.defaultValue));
    return obj;
  }, [d.steps]);

  const [state, setState] = useState(initial);

  const whyText = useMemo(() => buildWhyText(d, state), [d, state]);

  const top2 = useMemo(() => {
    return [...d.items]
      .map((it) => ({ it, s: score(it.id, state) }))
      .sort((a, b) => b.s - a.s)
      .slice(0, 2)
      .map((x) => x.it);
  }, [d.items, state]);

  function setChoice(stepId, value) {
    setState((p) => ({ ...p, [stepId]: value }));
  }

  return (
    <section className="opSection" aria-label="Outcome picker">
      <div className="opWrap">
        <div className="opShell">
          {/* Header */}
          <div className="opHead">
            <div className="opTitle">
              <div className="opKicker">{d.heading}</div>
              <p className="opSub">{d.subheading}</p>
            </div>

            <div className="opHeadRight">
              <span className="opPill">
                <span className="opDot" aria-hidden="true" />
                {d.badge}
              </span>
            </div>
          </div>

          <div className="opBody">
            {/* Steps */}
            <div className="opPicker" aria-label="Three-step picker">
              {d.steps.map((st) => (
                <div className="opStep" key={st.id}>
                  <h3 className="opStepTitle">{st.title}</h3>
                  <p className="opStepDesc">{st.desc}</p>

                  <div className="opChoices" role="group" aria-label={st.title}>
                    {st.options.map((o) => {
                      const active = state[st.id] === o.id;
                      return (
                        <button
                          key={o.id}
                          type="button"
                          className={cx("opChoice", active && "isActive")}
                          aria-pressed={active}
                          onClick={() => setChoice(st.id, o.id)}
                        >
                          {o.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Recommendations */}
            <div className="opReco" aria-label="Recommendations">
              <div className="opRecoHead">
                <div className="opRecoLeft">
                  <b>Your best match (recommended)</b>
                  <span className="opWhy">{whyText}</span>
                </div>

                <div className="opActions">
                  {d.ctas.map((c) => (
                    <a
                      key={c.id}
                      className={cx("opBtn", c.variant === "primary" && "primary")}
                      href={c.href}
                      onClick={(e) => {
                        // Optional: keep SPA behavior if you prefer
                        // e.preventDefault();
                        c.id === "quote" ? onPrimary(state) : onSecondary(state);
                      }}
                    >
                      {c.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="opCards">
                {top2.map((it) => (
                  <article className="opCard" key={it.id}>
                    <div className="opCardTop">
                      <h4 className="opName">{it.name}</h4>
                      <span className="opFormat">
                        <span className="opDot mini" aria-hidden="true" />
                        {it.format}
                      </span>
                    </div>

                    <p className="opOutcome">{it.outcome}</p>

                    <div className="opMeta">
                      {it.tags.map((t) => (
                        <span className="opTag" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="opFoot">
                      <a className="opSample" href={it.sampleHref}>
                        See sample
                      </a>
                      <span className="opMini">Format: {it.format} · editable</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
          {/* end body */}
        </div>
      </div>
    </section>
  );
}
