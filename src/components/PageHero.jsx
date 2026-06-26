import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function PageHero({ kicker, title, children, image = "/images/hero-house.jpg", showQuoteButton = true }) {
  return (
    <section className="page-hero" style={{ "--page-hero-image": `url(${image})` }}>
      <div className="page-hero-overlay"></div>
      <div className="page-hero-content">
        {kicker && <div className="page-kicker">{kicker}</div>}
        <h1>{title}</h1>
        {children && <p>{children}</p>}
        {showQuoteButton && (
          <Link to="/quote" className="primary-button">
            Request a Free Quote
            <ArrowRight size={16} />
          </Link>
        )}
      </div>
    </section>
  );
}
