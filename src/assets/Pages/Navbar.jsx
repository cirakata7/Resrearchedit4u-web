/* ===========================
   Navbar.jsx (with Services dropdown)
   =========================== */
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/style.css";
import Logo from "../images/logo.webp";

const SERVICES = [
  { path: "/services", label: "Services Overview" },
  { path: "/services/research-planning", label: "Research Planning" },
  { path: "/services/data-services", label: "Data Services" },
  { path: "/services/editorial-support", label: "Editorial Support" },
  { path: "/services/publication-support", label: "Publication Support" },
  { path: "/services/academic-presentation", label: "Academic Presentation" },
];

const LINKS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services", dropdown: true },
  { path: "/remind", label: "RE Minds" },
  { path: "/case-stories", label: "Case Stories" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // desktop dropdown
  const [servicesMobileOpen, setServicesMobileOpen] = useState(false); // mobile accordion
  const servicesRef = useRef(null);

  // Close menu when resizing up to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1080) {
        setOpen(false);
        setServicesMobileOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close desktop dropdown on outside click + ESC
  useEffect(() => {
    const onDocClick = (e) => {
      if (!servicesRef.current) return;
      if (!servicesRef.current.contains(e.target)) setServicesOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setServicesOpen(false);
    };

    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // helper: highlight Services nav when any /services route is active
  const isServicesPathActive = () => {
    if (typeof window === "undefined") return false;
    return window.location.pathname.startsWith("/services");
  };

  return (
    <header className="navWrap">
      {/* Top info strip */}
      <div className="topStrip">
        <div className="topInner">
          <div className="topLeft">
            Trusted by 4051+ researchers · 200+ accepted papers · 95% satisfaction
          </div>
          <div className="topRight">
            Mon–Sat: 10:00–19:00 IST ·{" "}
            <span className="muted">Email:</span> support@researchedit4u.in
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="mainBar">
        <div className="mainInner">
          {/* Brand */}
          <div className="brand">
            <img src={Logo} alt="ResearchEdit4U Logo" className="logo" />
            <div className="brandText">
              <div className="brandName">ResearchEdit4U Solution</div>
              <div className="brandSub">
                Research paper editing & publication support
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="navLinks navLinksDesktop" aria-label="Primary">
            {LINKS.map((link) => {
              // Services dropdown
              if (link.dropdown) {
                const active = isServicesPathActive();
                return (
                  <div
                    key={link.path}
                    className="navDropdown"
                    ref={servicesRef}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      type="button"
                      className={`navLink navLinkBtn ${active ? "isActive" : ""} ${
                        servicesOpen ? "isOpen" : ""
                      }`}
                      aria-haspopup="menu"
                      aria-expanded={servicesOpen}
                      onClick={() => setServicesOpen((v) => !v)}
                    >
                      Services <span className="navCaret" aria-hidden="true">▾</span>
                    </button>

                    <div
                      className={`navDropdownMenu ${servicesOpen ? "isOpen" : ""}`}
                      role="menu"
                      aria-label="Services menu"
                    >
                      {SERVICES.map((s) => (
                        <NavLink
                          key={s.path}
                          to={s.path}
                          role="menuitem"
                          className={({ isActive }) =>
                            `navDropdownItem ${isActive ? "isActive" : ""}`
                          }
                          onClick={() => setServicesOpen(false)}
                        >
                          {s.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                );
              }

              // Normal links
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => `navLink ${isActive ? "isActive" : ""}`}
                >
                  {link.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Actions (desktop) */}
          <div className="actions actionsDesktop">
            <a
              href="https://wa.me/919938296223"
              className="btn waBtn"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Support
            </a>
            <button
              className="btn callBtn"
              onClick={() => (window.location.href = "tel:+919938296223")}
            >
              Book 1:1 Expert Call
            </button>
          </div>

          {/* Mobile controls */}
          <div className="mobileControls">
            <a
              href="https://wa.me/919938296223"
              className="btn waBtn mobileQuick"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>

            <button
              type="button"
              className={`hamburger ${open ? "isOpen" : ""}`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobileMenu"
              onClick={() => {
                setOpen((v) => !v);
                setServicesMobileOpen(false);
              }}
            >
              <span className="hamLine" />
              <span className="hamLine" />
              <span className="hamLine" />
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        <div
          className={`menuOverlay ${open ? "isOpen" : ""}`}
          onClick={() => {
            setOpen(false);
            setServicesMobileOpen(false);
          }}
        />

        {/* Mobile drawer */}
        <aside
          id="mobileMenu"
          className={`mobileMenu ${open ? "isOpen" : ""}`}
          aria-label="Mobile menu"
        >
          <div className="mobileMenuHeader">
            <div className="mobileMenuTitle">Menu</div>
            <button
              type="button"
              className="mobileClose"
              aria-label="Close menu"
              onClick={() => {
                setOpen(false);
                setServicesMobileOpen(false);
              }}
            >
              ✕
            </button>
          </div>

          <nav className="mobileLinks">
            {/* Home */}
            <NavLink
              to="/"
              className={({ isActive }) => `mobileLink ${isActive ? "isActive" : ""}`}
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => `mobileLink ${isActive ? "isActive" : ""}`}
              onClick={() => setOpen(false)}
            >
              About
            </NavLink>

            {/* Services accordion */}
            <button
              type="button"
              className={`mobileLink mobileLinkBtn ${
                isServicesPathActive() ? "isActive" : ""
              } ${servicesMobileOpen ? "isOpen" : ""}`}
              aria-expanded={servicesMobileOpen}
              onClick={() => setServicesMobileOpen((v) => !v)}
            >
              Services <span className="mobileCaret" aria-hidden="true">▾</span>
            </button>

            <div className={`mobileSubLinks ${servicesMobileOpen ? "isOpen" : ""}`}>
              {SERVICES.map((s) => (
                <NavLink
                  key={s.path}
                  to={s.path}
                  className={({ isActive }) =>
                    `mobileSubLink ${isActive ? "isActive" : ""}`
                  }
                  onClick={() => {
                    setOpen(false);
                    setServicesMobileOpen(false);
                  }}
                >
                  {s.label}
                </NavLink>
              ))}
            </div>

            <NavLink
              to="/remind"
              className={({ isActive }) => `mobileLink ${isActive ? "isActive" : ""}`}
              onClick={() => setOpen(false)}
            >
              RE Minds
            </NavLink>

            <NavLink
              to="/case-stories"
              className={({ isActive }) => `mobileLink ${isActive ? "isActive" : ""}`}
              onClick={() => setOpen(false)}
            >
              Case Stories
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) => `mobileLink ${isActive ? "isActive" : ""}`}
              onClick={() => setOpen(false)}
            >
              Contact
            </NavLink>
          </nav>

          <div className="mobileActions">
            <a
              href="https://wa.me/919938296223"
              className="btn waBtn"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setOpen(false);
                setServicesMobileOpen(false);
              }}
            >
              WhatsApp Support
            </a>

            <button
              className="btn callBtn"
              onClick={() => {
                setOpen(false);
                setServicesMobileOpen(false);
                window.location.href = "tel:+919938296223";
              }}
            >
              Book 1:1 Expert Call
            </button>
          </div>
        </aside>
      </div>
    </header>
  );
}
