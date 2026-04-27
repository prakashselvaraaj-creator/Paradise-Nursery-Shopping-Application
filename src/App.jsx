import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';

/* ── Landing Page (e-plantShopping home) ── */
function LandingPage() {
  return (
    <main className="landing-page">
      <div className="landing-overlay" />

      {/* Floating leaf particles */}
      <div className="landing-particles" aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <span key={i} className="particle" style={{ '--i': i }}>🌿</span>
        ))}
      </div>

      <div className="landing-content">
        <div className="landing-badge">Est. 2024 · Premium Indoor Plants</div>

        {/* Company name */}
        <h1 className="landing-title">
          <span className="title-line1">e-plant</span>
          <span className="title-line2">Shopping</span>
        </h1>

        {/* About the company */}
        <div className="landing-about">
          <AboutUs />
        </div>

        {/* Get Started button linking to the product page */}
        <Link to="/plants" className="get-started-btn" id="get-started-btn">
          Get Started
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
               style={{ width: 18, height: 18 }} aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="landing-scroll-hint" aria-hidden="true">
        <span>Explore Plants</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </main>
  );
}

/* ── Root App with Routing ── */
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/"       element={<LandingPage />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart"   element={<CartItem />} />
          {/* Redirect any unknown path to home */}
          <Route path="*"       element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
