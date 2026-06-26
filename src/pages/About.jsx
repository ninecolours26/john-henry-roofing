import { Award, CheckCircle2, Handshake, ShieldCheck, Users } from "lucide-react";
import PageHero from "../components/PageHero";

export default function About() {
  return (
    <main>
      <PageHero kicker="About John Henry Roofing Ltd." title="A Trusted Name in Roofing">
        John Henry Roofing Ltd. provides dependable roofing services for homeowners, property owners, and businesses across Winnipeg and surrounding communities.
      </PageHero>

      <section className="content-section two-column-section">
        <div>
          <div className="section-kicker align-left">Built on Experience</div>
          <h2>Roofing Work Done with Care, Clarity, and Respect</h2>
          <p>
            John Henry Roofing Ltd. is built around reliable workmanship and honest communication. Roofing is not just about installing materials. It is about protecting homes and buildings from water, wind, weather, and long-term damage.
          </p>
          <p>
            Each project begins with listening to the customer, looking carefully at the condition of the property, and explaining the practical options. Whether the work involves a repair, full replacement, inspection, eavestroughs, soffit, fascia, or exterior roofing detail, the goal is to give customers a clear understanding before the work begins.
          </p>
        </div>

        <div className="image-panel about-page-image"></div>
      </section>

      <section className="values-section">
        <article>
          <Award />
          <h3>Honest Estimates</h3>
          <p>Clear recommendations and straightforward pricing before work begins.</p>
        </article>
        <article>
          <Handshake />
          <h3>Professional Service</h3>
          <p>A respectful process from the first call to the final cleanup.</p>
        </article>
        <article>
          <ShieldCheck />
          <h3>Property Protection</h3>
          <p>Roofing decisions focused on protecting the structure long term.</p>
        </article>
        <article>
          <Users />
          <h3>Local Experience</h3>
          <p>Practical roofing knowledge for Winnipeg homes and buildings.</p>
        </article>
      </section>

      <section className="content-section narrow-section">
        <div className="section-kicker">Why Customers Call John Henry Roofing</div>
        <h2>Clear Advice Before the Work Begins</h2>
        <div className="check-list-grid">
          <p><CheckCircle2 /> Roof repairs and replacement options explained clearly</p>
          <p><CheckCircle2 /> Practical recommendations based on visible roof condition</p>
          <p><CheckCircle2 /> Support for homeowners, property managers, and businesses</p>
          <p><CheckCircle2 /> Service focused on communication, safety, and workmanship</p>
        </div>
      </section>
    </main>
  );
}
