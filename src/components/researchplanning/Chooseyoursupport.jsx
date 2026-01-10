import React from "react";
import "../../assets/style/style.css";

import {
    SUPPORT_LEVELS,
    SUPPORT_SECTION_META,
} from "../../assets/content/researchplanningdata/Chooseyoursupport";

function PillButton({ variant = "primary", children, onClick }) {
    return (
        <button
            type="button"
            className={`spBtn ${variant === "primary" ? "spBtnPrimary" : "spBtnGhost"}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

function Card({ item }) {
    return (
        <article className={`spCard ${item.highlight ? "spCardHighlight" : ""}`}>
            <div className="spCardHead">
                <div className="spTierRow">
                    <div className="spTierText">
                        <span className="spTier">{item.tier}</span>
                        <span className="spDash">—</span>
                        <span className="spName">{item.name}</span>
                    </div>

                    {item.badge ? <span className="spBadge">{item.badge}</span> : null}
                </div>

                <div className="spPrice">{item.priceLabel}</div>
                <div className="spSubNote">{item.subNote}</div>
            </div>

            <div className="spBestFor">
                <span className="spBestLabel">Best for:</span> {item.bestFor}
            </div>

            <ul className="spList">
                {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                ))}
            </ul>

            <div className="spActions">
                {item.ctas.map((c) => (
                    <PillButton
                        key={c.id}
                        variant={c.variant}
                        onClick={() => console.log("CTA:", item.id, c.id)}
                    >
                        {c.label}
                    </PillButton>
                ))}
            </div>

            <div className="spFootnote">{item.footnote}</div>
        </article>
    );
}

export default function Chooseyoursupport() {
    return (
        <section className="spPage" aria-label="Support level pricing">
            <div className="spShell">
                <header className="spHeader">
                    <h2 className="spTitle">{SUPPORT_SECTION_META.title}</h2>
                    <p className="spSubtitle">{SUPPORT_SECTION_META.subtitle}</p>
                </header>

                <div className="spGrid">
                    {SUPPORT_LEVELS.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>

                <div className="spBottomRow">
                    <button
                        type="button"
                        className="spBottomCta"
                        onClick={() => console.log("Bottom CTA")}
                    >
                        {SUPPORT_SECTION_META.bottomCta}
                    </button>
                </div>
            </div>
        </section>
    );
}
