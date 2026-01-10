import React from "react";
import "../../assets/style/style.css";

export default function DataDefendCTA() {
  return (
    <section className="ddPage">
      <div className="ddShell">
        <div className="ddCard" role="region" aria-label="Call to action">
          <h2 className="ddTitle">Ready to make your data easier to defend?</h2>
          <p className="ddSub">
            Upload your brief and we&apos;ll reply with a clear quote, a realistic pathway, and what you&apos;ll receive.
          </p>

          <div className="ddActions">
            <button type="button" className="ddBtn ddBtnPrimary">
              Get a Data Review + Quote
            </button>
            <button type="button" className="ddBtn ddBtnGhost">
              Talk to an Analyst
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
