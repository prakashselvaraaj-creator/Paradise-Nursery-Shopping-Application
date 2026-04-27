import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from '../store/cartSlice';
import Header from '../components/Header';
import './CartPage.css';

export default function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items);

  const totalQty = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalCost = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (items.length === 0) {
    return (
      <>
        <Header />
        <main className="cart-page">
          <div className="cart-empty">
            <div className="cart-empty-icon" aria-hidden="true">🛒</div>
            <h1 className="cart-empty-title">Your cart is empty</h1>
            <p className="cart-empty-sub">
              Looks like you haven&apos;t added any plants yet.
            </p>
            <Link to="/products" className="continue-btn" id="continue-shopping-empty">
              Start Shopping
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="cart-page">
        <div className="cart-container">
          {/* ── Page header */}
          <div className="cart-page-header">
            <h1 className="cart-page-title">Shopping Cart</h1>
            <div className="cart-summary-pills">
              <span className="summary-pill" id="total-items-display">
                🌿 {totalQty} {totalQty === 1 ? 'plant' : 'plants'}
              </span>
              <span className="summary-pill highlight" id="total-cost-display">
                Total: ${totalCost.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="cart-layout">
            {/* ── Items list */}
            <section className="cart-items" aria-label="Cart items">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="cart-item"
                  id={`cart-item-${item.id}`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-img"
                  />
                  <div className="cart-item-info">
                    <h2 className="cart-item-name">{item.name}</h2>
                    <p className="cart-item-unit">
                      Unit price: <strong>${item.price.toFixed(2)}</strong>
                    </p>
                    <p className="cart-item-subtotal">
                      Subtotal:{' '}
                      <strong className="subtotal-val">
                        ${(item.price * item.quantity).toFixed(2)}
                      </strong>
                    </p>
                  </div>
                  <div className="cart-item-controls">
                    <div className="qty-control">
                      <button
                        className="qty-btn"
                        id={`decrease-btn-${item.id}`}
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        −
                      </button>
                      <span className="qty-value" id={`qty-display-${item.id}`}>
                        {item.quantity}
                      </span>
                      <button
                        className="qty-btn"
                        id={`increase-btn-${item.id}`}
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="delete-btn"
                      id={`delete-btn-${item.id}`}
                      onClick={() => dispatch(removeFromCart(item.id))}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                        <path d="M10 11v6M14 11v6" />
                        <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </section>

            {/* ── Order summary */}
            <aside className="order-summary">
              <h2 className="order-summary-title">Order Summary</h2>
              <div className="order-lines">
                {items.map((item) => (
                  <div key={item.id} className="order-line">
                    <span className="order-line-name">
                      {item.name}{' '}
                      <span className="order-line-qty">× {item.quantity}</span>
                    </span>
                    <span className="order-line-price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="order-divider" />
              <div className="order-total">
                <span>Total</span>
                <span className="order-total-val">${totalCost.toFixed(2)}</span>
              </div>
              <div className="order-actions">
                <Link to="/products" className="continue-btn" id="continue-shopping-btn">
                  ← Continue Shopping
                </Link>
                <button
                  className="checkout-btn"
                  id="checkout-btn"
                  onClick={() => alert('🎉 Thank you for your order! Your plants are on their way.')}
                >
                  Checkout
                </button>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
