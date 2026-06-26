import { Link } from "react-router-dom";
import { ArrowRight, Award, CalendarClock, Handshake, Star, Users } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import QuoteForm from "../components/QuoteForm";
import ContactPanel from "../components/ContactPanel";
import SectionHeader from "../components/SectionHeader";
import { galleryImages, reviews, services } from "../data/siteData";

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            A Trusted Name
            <br />
            in Roofing
          </h1>

          <div className="gold-rule"></div>

          <p>
            John Henry Roofing Ltd. provides residential and commercial roofing services in Winnipeg, including roof repairs, roof replacement, roof inspections, shingle roofing, flat roofing, eavestroughs, soffit, fascia, and exterior roofing support.
          </p>

          <div className="hero-actions">
            <Link to="/quote" className="primary-button">
              Request a Free Quote
              <ArrowRight size={16} />
            </Link>

            <Link to="/services" className="secondary-button">
              View Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="services-band">
        <SectionHeader kicker="Our Services" title="Complete Roofing Solutions">
          From small repairs to full roof replacement, John Henry Roofing helps property owners understand the problem, choose the right service, and protect the building for the long term.
        </SectionHeader>

        <div className="service-grid">
          {services.slice(0, 6).map((service) => (
            <ServiceCard service={service} key={service.id} />
          ))}
        </div>

        <div className="center-action">
          <Link to="/services" className="gallery-button">
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="about-section">
        <div className="about-media">
          <div className="about-photo"></div>

          <div className="experience-panel">
            <strong>40+</strong>
            <span>Years in Roofing</span>
            <div></div>
            <p>Proudly serving homeowners, property owners, and businesses throughout Winnipeg.</p>
          </div>
        </div>

        <div className="about-content">
          <div className="section-kicker align-left">About John Henry Roofing Ltd.</div>

          <h2>Built on Integrity. Backed by Experience.</h2>

          <p>
            John Henry Roofing Ltd. is a Winnipeg roofing company focused on honest service, quality workmanship, and clear communication. Whether you need a repair, inspection, replacement, or exterior roofing work, the process starts with listening, looking carefully, and recommending the practical next step.
          </p>

          <div className="trust-features">
            <div>
              <Award size={38} />
              <h3>Honest Estimates</h3>
              <p>Straightforward roofing advice and clear estimates before the work begins.</p>
            </div>

            <div>
              <Handshake size={38} />
              <h3>Clear Communication</h3>
              <p>We explain the condition of the roof, the recommended work, and the next step.</p>
            </div>

            <div>
              <Users size={38} />
              <h3>Reliable Workmanship</h3>
              <p>Roofing work completed with care, safety, and attention to the details that protect the property.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <SectionHeader kicker="Our Gallery" title="Recent Roofing Projects">
          View examples of roof repairs, roof replacements, shingle roofing, flat roofing, and exterior roofing work completed for properties in Winnipeg and surrounding communities.
        </SectionHeader>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div className="gallery-card" key={image}>
              <img src={image} alt={`John Henry Roofing project ${index + 1}`} />
            </div>
          ))}
        </div>

        <Link to="/gallery" className="gallery-button">
          View Full Gallery
          <ArrowRight size={16} />
        </Link>
      </section>

      <section className="reviews-section">
        <SectionHeader kicker="Customer Experience" title="What Customers Should Expect">
          John Henry Roofing is built around clear advice, practical recommendations, reliable workmanship, and respect for the property from start to finish.
        </SectionHeader>

        <div className="review-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <div className="stars" aria-label="5 star review">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={17} fill="currentColor" />
                ))}
              </div>

              <p>{review.text}</p>
              <h3>{review.name}</h3>
              <span>{review.location}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-quote-section">
        <ContactPanel />

        <section className="quote-panel">
          <QuoteForm />
        </section>

        <aside className="estimate-card">
          <CalendarClock size={54} />
          <h3>Free, No-Obligation Estimates</h3>
          <p>Tell us what is happening with your property. We will follow up with clear next steps.</p>
        </aside>
      </section>
    </main>
  );
}
