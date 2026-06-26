import { CalendarClock } from "lucide-react";
import PageHero from "../components/PageHero";
import ContactPanel from "../components/ContactPanel";
import QuoteForm from "../components/QuoteForm";

export default function Quote() {
  return (
    <main>
      <PageHero kicker="Request a Quote" title="Request a Free Roofing Estimate">
        Complete the form below with your contact information, property address, service needed, and a short description of the project. We will review your request and follow up with next steps.
      </PageHero>

      <section className="contact-quote-section page-contact-section">
        <ContactPanel />

        <section className="quote-panel quote-page-panel">
          <QuoteForm />
        </section>

        <aside className="estimate-card">
          <CalendarClock size={54} />
          <h3>What Happens Next?</h3>
          <p>John Henry Roofing Ltd. will review your request, contact you about the property, and help determine the next practical step.</p>
        </aside>
      </section>
    </main>
  );
}
