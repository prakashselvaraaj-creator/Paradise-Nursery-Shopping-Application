import './AboutUs.css';

export default function AboutUs() {
  return (
    <div className="about-us">
      <p className="about-tagline">
        Where Every Home Finds Its Green Soul
      </p>
      <p className="about-description">
        At <strong>Paradise Nursery</strong>, we believe that plants are more than just decoration —
        they are living companions that breathe life, colour, and calm into every space.
        Founded with a passion for botanical beauty, we hand-select each plant in our collection
        to ensure it arrives at your door healthy, vibrant, and ready to thrive.
      </p>
      <p className="about-description">
        From dramatic tropical statement pieces to effortless low-maintenance greens and
        sculptural succulents, our curated range has something for every home, every lifestyle,
        and every green thumb — whether seasoned or just starting out.
      </p>
      <div className="about-values">
        <div className="about-value">
          <span className="about-value-icon">🌱</span>
          <span className="about-value-label">Sustainably Sourced</span>
        </div>
        <div className="about-value">
          <span className="about-value-icon">📦</span>
          <span className="about-value-label">Safely Packaged</span>
        </div>
        <div className="about-value">
          <span className="about-value-icon">🚚</span>
          <span className="about-value-label">Free Shipping Over $50</span>
        </div>
        <div className="about-value">
          <span className="about-value-icon">💚</span>
          <span className="about-value-label">Plant Happiness Guarantee</span>
        </div>
      </div>
    </div>
  );
}
