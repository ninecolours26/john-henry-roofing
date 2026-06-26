import PageHero from "../components/PageHero";
import { galleryImages } from "../data/siteData";

export default function Gallery() {
  return (
    <main>
      <PageHero kicker="Project Gallery" title="Recent Roofing Work">
        View examples of roof repairs, roof replacements, flat roofing, shingle roofing, and exterior work completed for properties in Winnipeg and surrounding communities.
      </PageHero>

      <section className="content-section">
        <div className="section-kicker">Gallery</div>
        <h2>Roofing Project Photos</h2>
        <p className="section-intro">
          These photos show the clean, professional look John Henry Roofing Ltd. is building across the website. Additional real project photos can be added as the gallery grows.
        </p>

        <div className="gallery-grid full-gallery-grid">
          {galleryImages.map((image, index) => (
            <div className="gallery-card" key={image}>
              <img src={image} alt={`John Henry Roofing project ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
