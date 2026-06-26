import { CheckCircle2, HardHat, Users } from "lucide-react";
import PageHero from "../components/PageHero";

export default function Careers() {
  return (
    <main>
      <PageHero kicker="Careers" title="Join the John Henry Roofing Team" image="/images/roofer-working.jpg">
        John Henry Roofing Ltd. is looking for dependable, hardworking people who take pride in roofing work, safety, teamwork, and quality workmanship.
      </PageHero>

      <section className="content-section two-column-section careers-intro">
        <div>
          <div className="section-kicker align-left">Work With Us</div>
          <h2>Roofing Jobs in Winnipeg</h2>
          <p>
            John Henry Roofing Ltd. is looking for reliable people to join the team. Whether you have roofing experience or are willing to learn, we are interested in people who show up ready, work safely, listen carefully, and understand the importance of doing the job properly.
          </p>
          <p>
            Roofing is hands-on outdoor work. It requires effort, awareness, teamwork, and respect for safety on every job site. If you want to build practical roofing skills and be part of a professional crew, complete the application below.
          </p>
        </div>

        <aside className="career-card">
          <HardHat size={46} />
          <h3>Who We Are Looking For</h3>
          <p>Reliable workers who can follow instructions, work as part of a crew, and respect safety on every job site.</p>
        </aside>
      </section>

      <section className="values-section careers-values">
        <article>
          <Users />
          <h3>Team-Focused</h3>
          <p>Roofing requires communication, effort, and respect for the people working beside you.</p>
        </article>
        <article>
          <CheckCircle2 />
          <h3>Reliable</h3>
          <p>We value people who arrive prepared and take responsibility for their work.</p>
        </article>
        <article>
          <HardHat />
          <h3>Safety-Minded</h3>
          <p>Good roofing work depends on safe habits, proper attention, and job-site awareness.</p>
        </article>
      </section>

      <section className="content-section careers-form-section">
        <div className="section-kicker">Apply Now</div>
        <h2>Roofing Job Application</h2>
        <p className="section-intro">
          Tell us who you are, how to reach you, your availability, and whether you have roofing or construction experience.
        </p>

        <form className="careers-form">
          <div className="form-grid">
            <input type="text" name="first_name" placeholder="First Name" />
            <input type="text" name="last_name" placeholder="Last Name" />
            <input type="tel" name="phone" placeholder="Phone Number" />
            <input type="email" name="email" placeholder="Email Address" />
            <select name="experience">
              <option value="">Roofing Experience</option>
              <option value="Experienced Roofer">Experienced Roofer</option>
              <option value="Roofing Labourer">Roofing Labourer</option>
              <option value="Construction Experience">Construction Experience</option>
              <option value="Willing to Learn">Willing to Learn</option>
            </select>
            <input type="text" name="availability" placeholder="Availability" />
          </div>
          <textarea name="message" placeholder="Tell us about your experience, work habits, and why you want to join John Henry Roofing."></textarea>
          <button type="button">Submit Application</button>
        </form>
      </section>
    </main>
  );
}
