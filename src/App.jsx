import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';

/* ── Landing Page (e-plantShopping home) ── */
function LandingPage({ onGetStartedClick }) {
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

        {/* Get Started button with state toggle */}
        <button className="get-started-btn" id="get-started-btn" onClick={onGetStartedClick}>
          Get Started
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
               style={{ width: 18, height: 18 }} aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
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
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          {!showProductList ? (
            <LandingPage onGetStartedClick={handleGetStartedClick} />
          ) : (
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/cart" element={<CartItem />} />
            </Routes>
          )}
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
