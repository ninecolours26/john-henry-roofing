import { useEffect, useState } from "react";
import {
  Hammer,
  Home,
  ClipboardCheck,
  Users,
  Mail,
  MapPin,
  Phone,
  Star,
  Award,
  Handshake,
  Layers,
  PanelTop,
  ArrowRight,
  Quote,
  CalendarClock,
  ShieldAlert
} from "lucide-react";
import { supabase } from "./supabaseClient";

const services = [
  {
    id: "roof-repairs",
    title: "Roof Repairs",
    icon: Hammer,
    description:
      "Quick and effective repairs for leaks, missing shingles, storm damage, and general roof problems."
  },
  {
    id: "roof-replacement",
    title: "Roof Replacement",
    icon: Home,
    description:
      "Full roof replacement for homes, garages, rental properties, and commercial buildings."
  },
  {
    id: "roof-inspections",
    title: "Roof Inspections",
    icon: ClipboardCheck,
    description:
      "Professional inspections to identify roof problems before they become expensive repairs."
  },
  {
    id: "urgent-roof-repairs",
    title: "Urgent Roof Repairs",
    icon: ShieldAlert,
    description:
      "Fast roofing support when leaks, wind damage, or sudden roof problems need attention."
  },
  {
    id: "shingle-roofing",
    title: "Shingle Roofing",
    icon: Layers,
    description:
      "Durable asphalt shingle roofing for clean curb appeal and long-lasting protection."
  },
  {
    id: "flat-roofing",
    title: "Flat Roofing",
    icon: PanelTop,
    description:
      "Flat roofing repair and replacement for garages, additions, and commercial properties."
  }
];

const serviceNavLinks = services.map((service) => ({
  label: service.title,
  href: `#${service.id}`
}));

const galleryImages = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg"
];

const reviews = [
  {
    name: "Winnipeg Homeowner",
    location: "Winnipeg, MB",
    text:
      "John Henry Roofing was professional, straightforward, and easy to work with. The roofing work was completed properly and the process was clearly explained."
  },
  {
    name: "Local Property Owner",
    location: "Winnipeg, MB",
    text:
      "We appreciated the experience and attention to detail. The team helped us understand the right solution for our roof and completed the work with care."
  },
  {
    name: "Commercial Client",
    location: "Winnipeg, MB",
    text:
      "Reliable, timely, and focused on getting the job done right. We would call John Henry Roofing again for future roofing needs."
  }
];

function App() {
  const [hasScrolled, setHasScrolled] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    service_needed: "",
    property_address: "",
    message: ""
  });

  const [submitStatus, setSubmitStatus] = useState({
    type: "",
    message: ""
  });

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.phone ||
      !formData.email ||
      !formData.service_needed ||
      !formData.property_address
    ) {
      setSubmitStatus({
        type: "error",
        message:
          "Please complete your first name, last name, phone number, email address, service needed, and property address."
      });
      return;
    }

    if (!supabase) {
      setSubmitStatus({
        type: "success",
        message:
          "Form is ready. Supabase is not connected yet, so this request was not saved."
      });
      return;
    }

    const { error } = await supabase.from("quote_requests").insert([
      {
        first_name: formData.first_name.trim(),
        last_name: formData.last_name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        service_needed: formData.service_needed,
        property_address: formData.property_address.trim(),
        message: formData.message.trim(),
        status: "New"
      }
    ]);

    if (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please call 204-668-5518."
      });
      return;
    }

    setFormData({
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      service_needed: "",
      property_address: "",
      message: ""
    });

    setSubmitStatus({
      type: "success",
      message: "Thank you. Your quote request has been submitted."
    });
  };

  return (
    <div className="site-shell">
      <div className="top-contact-bar">
        <div className="top-contact-inner">
          <span className="top-service-area">
            <MapPin size={15} />
            Serving Winnipeg &amp; surrounding communities
          </span>

          <div className="top-contact-links">
            <a href="tel:2046685518">
              <Phone size={15} />
              204-668-5518
            </a>

            <a href="mailto:info@johnhenryroofing.ca">
              <Mail size={15} />
              info@johnhenryroofing.ca
            </a>
          </div>
        </div>
      </div>

      <header className={`site-header ${hasScrolled ? "scrolled" : ""}`}>
        <a href="#home" className="brand" aria-label="John Henry Roofing home">
          <div className="brand-logo-wrap">
            <img
              src="/images/logo-john-henry.png"
              alt="John Henry Roofing Ltd."
              className="brand-logo"
              onError={(event) => {
                event.currentTarget.style.display = "none";
                event.currentTarget.parentElement.classList.add(
                  "logo-fallback-active"
                );
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
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#home" className="active">Home</a>

          <div className="nav-dropdown">
            <a href="#services" className="nav-dropdown-trigger">
              Services
              <span aria-hidden="true">▾</span>
            </a>

            <div className="services-dropdown-menu" aria-label="Services submenu">
              {serviceNavLinks.map((item) => (
                <a href={item.href} key={item.label}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="quote-button" href="#quote">
          Request a Quote
          <ArrowRight size={17} />
        </a>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-content">
            <h1>
              Trusted Roofing
              <br />
              Services in
              <br />
              Winnipeg
            </h1>

            <div className="gold-rule"></div>

            <p>
              Residential and commercial roof repairs, roof replacements,
              inspections, and roofing services backed by 40+ years in the
              roofing business.
            </p>

            <div className="hero-actions">
              <a href="#quote" className="primary-button">
                Get a Free Estimate
                <ArrowRight size={16} />
              </a>

              <a href="#services" className="secondary-button">
                View Services
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="services-band">
          <div className="section-kicker">Our Services</div>

          <div className="section-heading">
            <h2>Complete Roofing Solutions</h2>
            <p>
              Roof repairs, replacements, inspections, shingle roofing, flat
              roofing, and urgent roofing support for homes and businesses
              across Winnipeg.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article id={service.id} className="service-card" key={service.title}>
                  <Icon size={48} strokeWidth={1.7} />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#quote">
                    Learn More
                    <ArrowRight size={14} />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="about-media">
            <div className="about-photo"></div>

            <div className="experience-panel">
              <strong>40+</strong>
              <span>Years in Roofing</span>
              <div></div>
              <p>
                Proudly serving homeowners, property owners, and businesses
                throughout Winnipeg.
              </p>
            </div>
          </div>

          <div className="about-content">
            <div className="section-kicker align-left">
              About John Henry Roofing Ltd.
            </div>

            <h2>Built on Integrity. Backed by Experience.</h2>

            <p>
              John Henry Roofing Ltd. is a Winnipeg roofing company with over 40
              years in the roofing business. We provide straightforward roofing
              service for homeowners, property owners, and businesses, with
              clear estimates, honest recommendations, and reliable workmanship.
            </p>

            <div className="trust-features">
              <div>
                <Award size={38} />
                <h3>Honest Estimates</h3>
                <p>
                  Straightforward roofing advice and clear estimates before the
                  work begins.
                </p>
              </div>

              <div>
                <Handshake size={38} />
                <h3>Clear Communication</h3>
                <p>
                  We keep you informed from the first call to the final cleanup.
                </p>
              </div>

              <div>
                <Users size={38} />
                <h3>Reliable Workmanship</h3>
                <p>
                  Roofing work completed with care, safety, and attention to
                  detail.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="gallery-section">
          <div className="section-kicker">Our Gallery</div>

          <div className="section-heading">
            <h2>Recent Roofing Projects</h2>
            <p>
              View examples of roofing repairs, replacements, and completed
              projects across Winnipeg and surrounding areas.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div className="gallery-card" key={image}>
                <img
                  src={image}
                  alt={`Recent roofing project ${index + 1}`}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <div className="project-placeholder">Project {index + 1}</div>
              </div>
            ))}
          </div>

          <a href="#contact" className="gallery-button">
            View Full Gallery
            <ArrowRight size={16} />
          </a>
        </section>

        <section id="reviews" className="reviews-section">
          <div className="section-kicker">Customer Reviews</div>

          <div className="section-heading">
            <h2>Trusted by Homeowners Across Winnipeg</h2>
            <p>
              Real customer reviews help homeowners know what kind of service,
              communication, and workmanship they can expect.
            </p>
          </div>

          <div className="review-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.name}>
                <div className="stars" aria-label="5 star review">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={17} fill="currentColor" />
                  ))}
                </div>

                <p>{review.text}</p>

                <Quote className="quote-icon" size={28} />

                <h3>— {review.name}</h3>
                <span>{review.location}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-quote-section">
          <aside className="contact-panel">
            <div className="section-kicker align-left">Get In Touch</div>

            <h2>Request a Free Quote</h2>

            <p className="contact-intro">
              Tell us what is happening with your roof and we will get back to
              you as soon as possible.
            </p>

            <div className="contact-row">
              <Phone size={20} />
              <a href="tel:2046685518">204-668-5518</a>
            </div>

            <div className="contact-row">
              <Mail size={20} />
              <a href="mailto:info@johnhenryroofing.ca">
                info@johnhenryroofing.ca
              </a>
            </div>

            <div className="contact-row">
              <MapPin size={20} />
              <span>23 Budden Drive, Winnipeg, MB R2K 4C5</span>
            </div>
          </aside>

          <section id="quote" className="quote-panel">
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <select
                  name="service_needed"
                  value={formData.service_needed}
                  onChange={handleChange}
                  required
                >
                  <option value="">Service Needed</option>
                  <option value="Roof Inspection">Roof Inspection</option>
                  <option value="Roof Repair">Roof Repair</option>
                  <option value="Urgent Roof Repair">Urgent Roof Repair</option>
                  <option value="Roof Replacement">Roof Replacement</option>
                  <option value="Shingle Roofing">Shingle Roofing</option>
                  <option value="Flat Roofing">Flat Roofing</option>
                  <option value="Siding Inspection">Siding Inspection</option>
                  <option value="Siding Repair">Siding Repair</option>
                  <option value="Siding Replacement">Siding Replacement</option>
                  <option value="Eavestrough Inspection / Repair">
                    Eavestrough Inspection / Repair
                  </option>
                  <option value="Eavestrough Replacement">
                    Eavestrough Replacement
                  </option>
                  <option value="Soffit / Fascia Inspection / Repair">
                    Soffit / Fascia Inspection / Repair
                  </option>
                  <option value="Other / Not Sure">Other / Not Sure</option>
                </select>

                <input
                  type="text"
                  name="property_address"
                  placeholder="Property Address"
                  value={formData.property_address}
                  onChange={handleChange}
                  className="form-field-wide"
                  required
                />
              </div>

              <textarea
                name="message"
                placeholder="Tell us about your project"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button type="submit">
                Send Request
                <ArrowRight size={16} />
              </button>

              {submitStatus.message && (
                <p className={`form-status ${submitStatus.type}`}>
                  {submitStatus.message}
                </p>
              )}
            </form>
          </section>

          <aside className="estimate-card">
            <CalendarClock size={54} />
            <h3>Free, No-Obligation Estimates</h3>
            <p>Straightforward advice. Clear communication. No pressure.</p>
          </aside>
        </section>
      </main>

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
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <a href="#services">Roof Repair</a>
          <a href="#services">Roof Replacement</a>
          <a href="#services">Roof Inspection</a>
          <a href="#services">Urgent Roof Repairs</a>
          <a href="#services">Shingle Roofing</a>
          <a href="#services">Flat Roofing</a>
        </div>

        <div className="footer-column contact-footer">
          <h3>Contact</h3>

          <p>
            <Phone size={16} />
            <a href="tel:2046685518">204-668-5518</a>
          </p>

          <p>
            <Mail size={16} />
            <a href="mailto:info@johnhenryroofing.ca">
              info@johnhenryroofing.ca
            </a>
          </p>

          <p>
            <MapPin size={16} />
            <span>23 Budden Drive, Winnipeg, MB R2K 4C5</span>
          </p>
        </div>
      </footer>

      <div className="mobile-action-bar">
        <a href="tel:2046685518">
          <Phone size={16} />
          Call
        </a>

        <a href="#quote">
          <CalendarClock size={16} />
          Free Estimate
        </a>
      </div>
    </div>
  );
}

export default App;