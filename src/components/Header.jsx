import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CalendarClock, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { company, services } from "../data/siteData";

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  const closeMenus = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  const navLinkClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <>
      <div className="top-contact-bar">
        <div className="top-contact-inner">
          <span className="top-service-area">
            <MapPin size={15} />
            {company.serviceArea}
          </span>

          <div className="top-contact-links">
            <a href={company.phoneHref}>
              <Phone size={15} />
              {company.phone}
            </a>

            <a href={company.emailHref}>
              <Mail size={15} />
              {company.email}
            </a>
          </div>
        </div>
      </div>

      <header className={`site-header ${hasScrolled ? "scrolled" : ""}`}>
        <Link to="/" className="brand" aria-label="John Henry Roofing home" onClick={closeMenus}>
          <div className="brand-logo-wrap">
            <img
              src="/images/logo-john-henry.png"
              alt="John Henry Roofing Ltd."
              className="brand-logo"
              onError={(event) => {
                event.currentTarget.style.display = "none";
                event.currentTarget.parentElement.classList.add("logo-fallback-active");
              }}
            />

            <div className="logo-fallback">
              <div className="brand-mark">JH</div>
              <div className="brand-text">
                <span className="brand-script">John Henry</span>
                <span className="brand-roofing">Roofing Ltd</span>
                <span className="brand-tagline">a trusted name in roofing</span>
              </div>
            </div>
          </div>
        </Link>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`main-nav ${mobileOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <NavLink to="/" className={navLinkClass} onClick={closeMenus} end>
            Home
          </NavLink>

          <div
            className={`nav-dropdown ${servicesOpen ? "is-open" : ""}`}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="nav-dropdown-trigger"
              onClick={() => setServicesOpen((open) => !open)}
              aria-expanded={servicesOpen}
            >
              Services
              <span aria-hidden="true">▾</span>
            </button>

            <div className="services-dropdown-menu" aria-label="Services submenu">
              <Link to="/services" onClick={closeMenus}>All Services</Link>
              {services.map((service) => (
                <Link to={service.path} key={service.id} onClick={closeMenus}>
                  {service.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          <NavLink to="/about" className={navLinkClass} onClick={closeMenus}>
            About
          </NavLink>
          <NavLink to="/gallery" className={navLinkClass} onClick={closeMenus}>
            Gallery
          </NavLink>
          <NavLink to="/reviews" className={navLinkClass} onClick={closeMenus}>
            Reviews
          </NavLink>
          <NavLink to="/careers" className={navLinkClass} onClick={closeMenus}>
            Careers
          </NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={closeMenus}>
            Contact
          </NavLink>
        </nav>

        <Link className="quote-button" to="/quote" onClick={closeMenus}>
          Request a Quote
          <CalendarClock size={17} />
        </Link>
      </header>
    </>
  );
}
