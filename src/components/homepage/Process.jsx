import React, { useEffect, useState } from "react";
import "../../assets/style/style.css";
import { METRICS, FEATURES } from "../../assets/content/homepage/processdata";

//    Count-up Hook (numbers only)

function useCountUp(target, duration = 12000) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setValue(target);
                clearInterval(timer);
            } else {
                setValue(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [target, duration]);

    return value;
}

/* =========================
   Icons (unchanged)
========================= */
function Icon({ name }) {
    const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none" };
    const stroke = {
        stroke: "rgba(255,255,255,.92)",
        strokeWidth: 1.7,
        strokeLinecap: "round",
        strokeLinejoin: "round",
    };

    if (name === "shield") {
        return (
            <svg {...common}>
                <path {...stroke} d="M12 3l7 4v6c0 5-3 8-7 9-4-1-7-4-7-9V7l7-4z" />
                <path {...stroke} d="M9 12l2 2 4-5" />
            </svg>
        );
    }

    if (name === "doc") {
        return (
            <svg {...common}>
                <path {...stroke} d="M8 3h6l4 4v14H8V3z" />
                <path {...stroke} d="M14 3v5h5" />
                <path {...stroke} d="M10 12h6M10 16h6" />
            </svg>
        );
    }

    if (name === "bars") {
        return (
            <svg {...common}>
                <path {...stroke} d="M6 20V10M12 20V6M18 20v-8" />
                <path {...stroke} d="M4 20h16" />
            </svg>
        );
    }

    return (
        <svg {...common}>
            <path {...stroke} d="M12 19c4-2 7-5 7-9 0-3-2-5-5-5-1 0-2 .4-2 .4S11 5 10 5c-3 0-5 2-5 5 0 4 3 7 7 9z" />
            <path {...stroke} d="M9 13l6-6" />
        </svg>
    );
}

/* =========================
   Process Component
========================= */
export default function Process() {
    return (
        <section className="tsSection">
            <div className="tsWrap">
                <div className="tsCard">
                    {/* LEFT: Metrics */}
                    <div className="tsLeft">
                        <div className="tsHeading">
                            TRUSTED WORLDWIDE FOR ETHICAL PUBLICATION SUPPORT.
                        </div>

                        <div className="tsMetrics">
                            {METRICS.map((m) => {
                                const raw = m.value;

                                // extract number only (no commas)
                                const number = parseInt(raw.replace(/[^0-9]/g, ""), 10);

                                // extract suffix ONLY
                                const suffix = raw.includes("%")
                                    ? "%"
                                    : raw.includes("+")
                                        ? "+"
                                        : "";

                                const count = useCountUp(number);

                                return (
                                    <div className="tsMetric" key={m.value}>
                                        <div className="tsMetricLabel">
                                            {m.label.split("\n").map((x, i) => (
                                                <span key={i}>{x}</span>
                                            ))}
                                        </div>

                                        <div className="tsMetricValue">
                                            {count}
                                            {suffix}
                                        </div>

                                        <div className="tsMetricDesc">
                                            {m.desc.split("\n").map((x, i) => (
                                                <span key={i}>{x}</span>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT: Feature pills */}
                    <div className="tsRight">
                        <div className="tsFeatureGrid">
                            {FEATURES.map((f) => (
                                <div className="tsFeature" key={f.title}>
                                    <div className="tsIcon">
                                        <Icon name={f.icon} />
                                    </div>
                                    <div className="tsFeatureText">
                                        <div className="tsFeatureTitle">{f.title}</div>
                                        <div className="tsFeatureDesc">{f.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* soft highlight overlay */}
                    <div className="tsGlow" aria-hidden="true" />
                </div>

            </div>
            <section className="offer">
                <h1>Expert academic editing for publication success — enjoy up to 50% OFF for a limited time 📘✨ Book Now!</h1>
            </section>
        </section>

    );
}
