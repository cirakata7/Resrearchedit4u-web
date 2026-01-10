import React from "react";
import "../style/style.css";

export default function Footer() {
  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="ftWrap">
      <div className="ftShell">
        {/* Newsletter strip */}
        <section className="ftTop">
          <div className="ftTopLeft">
            <div className="ftTopTitle">
              Share what you&apos;re working on — get next-step options in 1 working day.
            </div>
            <div className="ftTopSub">
              Get practical resources on rejection, journal choice, and peer review. No spam.
            </div>

            <div className="ftPills" aria-hidden="true">
              <span className="ftPill">Ethics-first</span>
              <span className="ftPill">Privacy-respectful</span>
              <span className="ftPill">Unsubscribe anytime</span>
            </div>
          </div>

          <form
            action="https://formspree.io/f/xvzpaakg"
            method="POST"
            className="ftSubscribe"
          >
            <label className="ftLabel" htmlFor="footerEmail">
              Email for updates & resources
            </label>

            <div className="ftInputRow">
              <div className="ftInputWrap">
                <span className="ftMailIcon" aria-hidden="true">✉</span>
                <input
                  id="footerEmail"
                  className="ftInput"
                  type="email"
                  name="email"
                  placeholder="you@university.edu"
                  required
                />
              </div>

              <button className="ftBtnPrimary" type="submit">
                Notify me
              </button>
            </div>

            <div className="ftMeta">
              We send 1–2 emails/month. No spam.
            </div>
          </form>
        </section>

        <div className="ftDivider" />

        {/* Link columns */}
        <section className="ftGrid">
          <div className="ftCol">
            <div className="ftColTitle">ABOUT / TRUST</div>
            <p className="ftColText">
              Specialised academic support for researchers, universities, and R&amp;D teams — with
              ethics-first editorial and publication strategy.
            </p>

            <div className="ftLinks">
              <a href="#!" className="ftLinkStrong">Ethical support policy</a>
              <a href="#!" className="ftLinkStrong">Confidentiality</a>
              <a href="#!" className="ftLinkStrong">No-ghostwriting policy</a>
            </div>
          </div>

          <div className="ftCol">
            <div className="ftColTitle">SERVICES</div>
            <div className="ftLinks">
              <a href="#!" className="ftLinkStrong">Editorial Support</a>
              <a href="#!" className="ftLinkStrong">Data &amp; Statistics</a>
              <a href="#!" className="ftLinkStrong">Journal Selection &amp; Submission</a>
              <a href="#!" className="ftLinkStrong">Quick Offers</a>
            </div>
          </div>

          <div className="ftCol">
            <div className="ftColTitle">RESOURCES (RE MINDS)</div>
            <div className="ftLinks">
              <a href="#!" className="ftLinkStrong">Desk rejection series</a>
              <a href="#!" className="ftLinkStrong">Journal selection guide</a>
              <a href="#!" className="ftLinkStrong">AI &amp; similarity explained</a>
            </div>
          </div>

          <div className="ftCol">
            <div className="ftColTitle">CONTACT</div>
            <div className="ftLinks">
              <a href="mailto:support@researchedit4u.in" className="ftLinkStrong">
                support@researchedit4u.in
              </a>
              <a href="#!" className="ftLinkStrong">WhatsApp (quick response)</a>
              <div className="ftLine">Hours: Mon–Sat</div>
              <a href="#!" className="ftLinkStrong">Book 1:1 Expert Call</a>
            </div>
          </div>
        </section>

        <div className="ftDivider" />

        {/* Bottom row */}
        <section className="ftBottom">
          <div className="ftBottomLeft">
            <span>© ResearchEdit4U</span>
            <a href="#!" className="ftLegal">Terms</a>
            <a href="#!" className="ftLegal">Privacy</a>
            <a href="#!" className="ftLegal">Cookies</a>
          </div>

          <button className="ftBackTop" type="button" onClick={backToTop}>
            Back to top <span className="ftUp" aria-hidden="true">↑</span>
          </button>
        </section>
      </div>
    </footer>
  );
}
