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
  Droplets,
  Layers,
  PanelTop,
  ArrowRight,
  Quote,
  CalendarClock
} from "lucide-react";
import { supabase } from "./supabaseClient";

const services = [
  {
    title: "Roof Replacement",
    icon: Home,
    description: "Durable, long-lasting roofs built to withstand Winnipeg weather."
  },
  {
    title: "Roof Repairs",
    icon: Hammer,
    description: "Fast, effective repairs to extend the life of your roof."
  },
  {
    title: "Shingle Roofing",
    icon: Layers,
    description: "Premium shingles in a variety of styles and colours."
  },
  {
    title: "Flat Roofing",
    icon: PanelTop,
    description: "Reliable flat roofing systems for residential and commercial buildings."
  },
  {
    title: "Eavestroughs",
    icon: Droplets,
    description: "Seamless eavestrough installation and maintenance."
  },
  {
    title: "Inspections",
    icon: ClipboardCheck,
    description: "Thorough roof inspections for peace of mind."
  }
];

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
    name: "Sarah M.",
    location: "Winnipeg, MB",
    text: "John Henry Roofing did an outstanding job on our new roof. Professional, efficient, and the attention to detail was exceptional."
  },
  {
    name: "Michael T.",
    location: "Boniface, MB",
    text: "We’ve used John Henry Roofing for both repairs and maintenance. They’re reliable, honest, and always deliver great results."
  },
  {
    name: "Lisa R.",
    location: "Transcona, MB",
    text: "The team was fantastic from start to finish. Our new eavestroughs and new roof look amazing and the service was excellent."
  }
];

function App() {
  const [hasScrolled, setHasScrolled] = useState(false);

  const [formData, setFormData] = useState({
    full_name: "",
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

    if (!formData.full_name || !formData.phone || !formData.email) {
      setSubmitStatus({
        type: "error",
        message: "Please complete your name, phone number, and email address."
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
        full_name: formData.full_name,
        phone: formData.phone,
        email: formData.email,
        service_needed: formData.service_needed,
        property_address: formData.property_address,
        message: formData.message,
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
      full_name: "",
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
          <a href="#services">Services</a>
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
              Solutions for
              <br />
              Homeowners and
              <br />
              Businesses
            </h1>

            <div className="gold-rule"></div>

            <p>
              Quality craftsmanship. Reliable service.
              <br />
              Built to protect what matters most.
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
          </div>

          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="service-card" key={service.title}>
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
              <span>Years of Experience</span>
              <div></div>
              <p>
                Proudly serving homeowners and businesses with integrity and care.
              </p>
            </div>
          </div>

          <div className="about-content">
            <div className="section-kicker align-left">
              About John Henry Roofing Ltd.
            </div>

            <h2>A Trusted Name in Roofing</h2>

            <p>
              With over 40 years of experience, John Henry Roofing Ltd. delivers
              exceptional roofing services with a focus on quality, safety, and
              customer satisfaction. We treat every project like it is our own home.
            </p>

            <div className="trust-features">
              <div>
                <Award size={38} />
                <h3>Quality Workmanship</h3>
                <p>
                  We use premium materials and proven techniques to ensure lasting
                  results.
                </p>
              </div>

              <div>
                <Handshake size={38} />
                <h3>Reliable Service</h3>
                <p>
                  On time, on budget, and committed to clear communication.
                </p>
              </div>

              <div>
                <Users size={38} />
                <h3>Experienced Team</h3>
                <p>
                  Skilled professionals dedicated to getting the job done right.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="gallery-section">
          <div className="section-kicker">Our Gallery</div>

          <div className="section-heading">
            <h2>Recent Roofing Projects</h2>
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
          <div className="section-kicker">What Our Clients Say</div>

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
              Fill out the form and we’ll get back to you within 24 hours.
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
                  name="full_name"
                  placeholder="Full Name"
                  value={formData.full_name}
                  onChange={handleChange}
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />

                <select
                  name="service_needed"
                  value={formData.service_needed}
                  onChange={handleChange}
                >
                  <option value="">Service Needed</option>
                  <option value="Roof Replacement">Roof Replacement</option>
                  <option value="Roof Repairs">Roof Repairs</option>
                  <option value="Shingle Roofing">Shingle Roofing</option>
                  <option value="Flat Roofing">Flat Roofing</option>
                  <option value="Eavestroughs">Eavestroughs</option>
                  <option value="Inspection">Inspection</option>
                </select>

                <input
                  type="text"
                  name="property_address"
                  placeholder="Property Address"
                  value={formData.property_address}
                  onChange={handleChange}
                  className="form-field-wide"
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
            <h3>Fast, Free Estimates</h3>
            <p>No obligation. No pressure. Honest advice.</p>
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
          <a href="#services">Roof Replacement</a>
          <a href="#services">Roof Repair</a>
          <a href="#services">Shingle Roofing</a>
          <a href="#services">Flat Roofing</a>
          <a href="#services">Eavestroughs</a>
          <a href="#services">Inspections</a>
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