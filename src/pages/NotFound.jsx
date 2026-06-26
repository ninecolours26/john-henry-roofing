import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";

export default function NotFound() {
  return (
    <main>
      <PageHero kicker="Page Not Found" title="This Page Is Not Available" showQuoteButton={false}>
        The page you are looking for may have moved or does not exist.
      </PageHero>

      <section className="content-section narrow-section center-copy">
        <Link to="/" className="primary-button">
          Return Home
          <ArrowRight size={16} />
        </Link>
      </section>
    </main>
  );
}
