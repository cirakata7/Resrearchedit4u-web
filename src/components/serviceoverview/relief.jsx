import React from "react";
import "../../assets/style/style.css";

export default function BelowHeroStressRelief() {
  return (
    <section className="re4u-srWrap" aria-label="Stress to Relief">
      <div className="re4u-srShell">
        <div className="re4u-srSection">
          <header className="re4u-srHead">
            <div className="re4u-srKicker">
              <span className="re4u-srKdot" />
              RELIEF, NOT A BROCHURE
            </div>

            <h2 className="re4u-srTitle">From stress to clarity — without overthinking.</h2>

            <p className="re4u-srSub">
              Keep it human: show the stress in one line, then show the relief in four calm cards.
            </p>

            <div className="re4u-srPillRow" aria-label="Stress tags">
              <span className="re4u-srPill">Gap unclear</span>
              <span className="re4u-srPill">Methods not working</span>
              <span className="re4u-srPill">Rejection fear</span>
            </div>
          </header>

          <div className="re4u-srGrid" aria-label="Relief cards">
            <div className="re4u-srCard re4u-srCardSage">
              <div className="re4u-srPillRow">
                <span className="re4u-srPill re4u-srPillSoft">Clear direction</span>
              </div>
              <p className="re4u-srCardText">Know the next step.</p>
            </div>

            <div className="re4u-srCard re4u-srCardGold">
              <div className="re4u-srPillRow">
                <span className="re4u-srPill re4u-srPillSoft">Clear structure</span>
              </div>
              <p className="re4u-srCardText">A strong outline that flows.</p>
            </div>

            <div className="re4u-srCard re4u-srCardInk">
              <div className="re4u-srPillRow">
                <span className="re4u-srPill re4u-srPillSoft">Clear reporting</span>
              </div>
              <p className="re4u-srCardText">Explain results simply.</p>
            </div>

            <div className="re4u-srCard re4u-srCardMist">
              <div className="re4u-srPillRow">
                <span className="re4u-srPill re4u-srPillSoft">Clear submission</span>
              </div>
              <p className="re4u-srCardText">A checklist + revision plan.</p>
            </div>
          </div>

          <div className="re4u-srMini" aria-label="Trust chips">
            <span className="re4u-srMiniChip">
              <i className="re4u-srMiniDot" />
              Confidential
            </span>
            <span className="re4u-srMiniChip">
              <i className="re4u-srMiniDot" />
              Ethical support
            </span>
            <span className="re4u-srMiniChip">
              <i className="re4u-srMiniDot" />
              Works across PhD/Master’s
            </span>
          </div>

          <div className="re4u-srQuote">
            “I stopped guessing. I had a clear plan — and felt confident again.”
          </div>
        </div>
      </div>
    </section>
  );
}
