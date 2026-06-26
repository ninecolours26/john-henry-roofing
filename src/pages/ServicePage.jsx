import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero";
import ServiceIcon from "../components/ServiceIcon";
import { services } from "../data/siteData";

function getServiceBySlug(slug) {
  return services.find((service) => service.path === `/services/${slug}`);
}

export default function ServicePage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <main>
        <PageHero kicker="Service Not Found" title="We Could Not Find That Service" showQuoteButton={false}>
          The service page you requested is not available.
        </PageHero>
        <section className="content-section narrow-section center-copy">
          <Link to="/services" className="primary-button">
            View All Services
            <ArrowRight size={16} />
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main>
      <PageHero kicker="John Henry Roofing Services" title={service.title}>
        {service.summary}
      </PageHero>

      <section className="content-section service-detail-section">
        <div className="service-detail-card">
          <ServiceIcon type={service.iconType} />
          <h2>{service.title}</h2>
          <p>{service.description}</p>

          <div className="service-bullet-list">
            {service.points.map((point) => (
              <p key={point}>
                <CheckCircle2 size={19} />
                {point}
              </p>
            ))}
          </div>

          <div className="service-detail-actions">
            <Link to="/quote" className="primary-button">
              {service.cta}
              <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="secondary-button">
              View All Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <aside className="service-sidebar">
          <h3>Roofing Services</h3>
          {services.map((item) => (
            <Link className={item.id === service.id ? "active" : ""} to={item.path} key={item.id}>
              {item.shortTitle}
            </Link>
          ))}
        </aside>
      </section>
    </main>
  );
}
