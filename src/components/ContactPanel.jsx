import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "../data/siteData";

export default function ContactPanel() {
  return (
    <aside className="contact-panel">
      <div className="section-kicker align-left">Get In Touch</div>

      <h2>Request a Free Quote</h2>

      <p className="contact-intro">
        Tell us what is happening with your roof and we will get back to you as soon as possible.
      </p>

      <div className="contact-row">
        <Phone size={20} />
        <a href={company.phoneHref}>{company.phone}</a>
      </div>

      <div className="contact-row">
        <Mail size={20} />
        <a href={company.emailHref}>{company.email}</a>
      </div>

      <div className="contact-row">
        <MapPin size={20} />
        <span>{company.address}</span>
      </div>
    </aside>
  );
}
