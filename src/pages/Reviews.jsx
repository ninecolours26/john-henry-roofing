import { Star } from "lucide-react";
import PageHero from "../components/PageHero";
import { reviews } from "../data/siteData";

export default function Reviews() {
  return (
    <main>
      <PageHero kicker="Customer Reviews" title="Reviews and Customer Experience">
        Customer experience matters. John Henry Roofing Ltd. focuses on clear communication, practical roofing advice, reliable workmanship, and respect for the property.
      </PageHero>

      <section className="content-section">
        <div className="section-kicker">What Customers Can Expect</div>
        <h2>Professional Roofing Service from Start to Finish</h2>
        <p className="section-intro">
          Verified customer reviews can be added here as soon as John Henry Roofing is ready to publish them. For now, this page explains the customer experience the company is building around.
        </p>

        <div className="review-grid review-page-grid">
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
    </main>
  );
}
