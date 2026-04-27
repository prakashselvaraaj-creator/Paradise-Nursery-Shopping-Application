import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const items = useSelector((state) => state.cart.items);
  const totalQty = items.reduce((sum, i) => sum + i.quantity, 0);
  const location = useLocation();
  const isCart = location.pathname === '/cart';

  return (
    <header className="header">
      <div className="header-brand">
        <span className="header-leaf">🌿</span>
        <Link to="/products" className="header-title">Paradise Nursery</Link>
      </div>
      <nav className="header-nav">
        {isCart ? (
          <Link to="/products" className="header-link">← Continue Shopping</Link>
        ) : (
          <Link to="/products" className="header-link">Shop</Link>
        )}
        <Link to="/cart" className="header-cart-btn" id="cart-icon-link" aria-label="Shopping cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="cart-icon-svg"
            aria-hidden="true"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          {totalQty > 0 && (
            <span className="cart-badge" id="cart-badge">{totalQty}</span>
          )}
        </Link>
      </nav>
    </header>
  );
}
