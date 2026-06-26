import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, services } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img
          src="/images/logo-john-henry.png"
          alt="John Henry Roofing Ltd."
          className="footer-logo"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="footer-fallback-logo">
          <div className="brand-mark">JH</div>
          <div className="brand-text">
            <span className="brand-script">John Henry</span>
            <span className="brand-roofing">Roofing Ltd</span>
            <span className="brand-tagline">a trusted name in roofing</span>
          </div>
        </div>

        <p>© 2026 John Henry Roofing Ltd. All Rights Reserved.</p>
      </div>

      <div className="footer-column">
        <h3>Company</h3>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="footer-column">
        <h3>Services</h3>
        {services.slice(0, 8).map((service) => (
          <Link to={service.path} key={service.id}>{service.shortTitle}</Link>
        ))}
      </div>

      <div className="footer-column contact-footer">
        <h3>Contact</h3>

        <p>
          <Phone size={16} />
          <a href={company.phoneHref}>{company.phone}</a>
        </p>

        <p>
          <Mail size={16} />
          <a href={company.emailHref}>{company.email}</a>
        </p>

        <p>
          <MapPin size={16} />
          <span>{company.address}</span>
        </p>
      </div>
    </footer>
  );
}
