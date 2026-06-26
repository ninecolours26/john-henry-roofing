import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/siteData";

export default function Services() {
  return (
    <main>
      <PageHero kicker="Roofing Services" title="Roofing and Exterior Services in Winnipeg">
        John Henry Roofing Ltd. provides roof repairs, roof replacement, roof inspections, shingle roofing, flat roofing, eavestroughs, soffit, fascia, and exterior support for homes and businesses.
      </PageHero>

      <section className="content-section">
        <div className="section-kicker">Our Services</div>
        <h2>Choose the Service That Matches Your Project</h2>
        <p className="section-intro">
          Not every roofing problem requires the same solution. The service pages below explain common concerns, practical next steps, and the type of work John Henry Roofing can provide.
        </p>

        <div className="service-grid all-services-grid">
          {services.map((service) => (
            <ServiceCard service={service} key={service.id} />
          ))}
        </div>

        <div className="wide-cta-card">
          <h3>Not sure what service you need?</h3>
          <p>
            Tell us what is happening with your roof, eavestroughs, soffit, fascia, siding, or exterior. We will help direct the request and recommend the practical next step.
          </p>
          <Link to="/quote" className="primary-button">
            Request a Free Quote
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
