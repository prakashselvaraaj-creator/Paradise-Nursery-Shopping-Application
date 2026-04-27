import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <main className="landing">
      <div className="landing-overlay" />
      <div className="landing-particles">
        {[...Array(12)].map((_, i) => (
          <span key={i} className="particle" style={{ '--i': i }} aria-hidden="true">🌿</span>
        ))}
      </div>
      <div className="landing-content">
        <div className="landing-badge">Est. 2024 · Premium Indoor Plants</div>
        <h1 className="landing-title">
          <span className="title-line1">Paradise</span>
          <span className="title-line2">Nursery</span>
        </h1>
        <p className="landing-tagline">
          Bring the beauty of nature indoors. We curate hand-selected, thriving
          houseplants — from dramatic tropical statements to resilient succulents —
          delivered straight to your door, ready to transform your home into a
          verdant sanctuary.
        </p>
        <div className="landing-actions">
          <Link to="/products" className="get-started-btn" id="get-started-btn">
            <span>Get Started</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <div className="landing-stats">
            <div className="stat">
              <span className="stat-num">50+</span>
              <span className="stat-label">Plant Varieties</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">4.9★</span>
              <span className="stat-label">Customer Rating</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">Free</span>
              <span className="stat-label">Shipping Over $50</span>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-scroll-hint" aria-hidden="true">
        <span>Explore below</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </main>
  );
}
