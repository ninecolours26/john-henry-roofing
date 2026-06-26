import { CalendarClock } from "lucide-react";
import PageHero from "../components/PageHero";
import ContactPanel from "../components/ContactPanel";
import QuoteForm from "../components/QuoteForm";

export default function Contact() {
  return (
    <main>
      <PageHero kicker="Contact John Henry Roofing" title="Get in Touch About Your Roof">
        Call, email, or submit a quote request. Tell us what is happening with your property and John Henry Roofing Ltd. will follow up with the next step.
      </PageHero>

      <section className="contact-quote-section page-contact-section">
        <ContactPanel />

        <section className="quote-panel">
          <QuoteForm />
        </section>

        <aside className="estimate-card">
          <CalendarClock size={54} />
          <h3>Free, No-Obligation Estimates</h3>
          <p>Straightforward advice. Clear communication. No pressure.</p>
        </aside>
      </section>
    </main>
  );
}
