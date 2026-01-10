import React from "react";
import "../../assets/style/style.css";
import { TOOLS_SUPPORT_DATA } from "../../assets/content/researchplanningdata/Workswith";

export default function Workwith() {
    return (
        <section className="rtsSec">
            <div className="rtsWrap">
                <h2 className="rtsH">{TOOLS_SUPPORT_DATA.title}</h2>
                <p className="rtsP">{TOOLS_SUPPORT_DATA.subtitle}</p>

                <div className="rtsGrid">
                    {TOOLS_SUPPORT_DATA.cards.map((c) => (
                        <article className="rtsCard" key={c.id}>
                            <div className="rtsCardH">{c.heading}</div>
                            <div className="rtsCardT">{c.text}</div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
