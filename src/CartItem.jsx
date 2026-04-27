import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

/* ── Shared Navbar (same on Product and Cart pages) ── */
function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQty = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <header className="ci-navbar" role="banner">
      <div className="ci-navbar-brand">
        <span aria-hidden="true">🌿</span>
        <Link to="/" className="ci-navbar-logo">Paradise Nursery</Link>
      </div>
      <nav className="ci-navbar-links" aria-label="Main navigation">
        <Link to="/"       className="ci-nav-link" id="nav-home">Home</Link>
        <Link to="/plants" className="ci-nav-link" id="nav-plants">Plants</Link>
        <Link to="/cart"   className="ci-nav-cart" id="nav-cart" aria-label="Shopping cart">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2" className="ci-cart-svg" aria-hidden="true">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          {totalQty > 0 && (
            <span className="ci-cart-badge" id="cart-count">{totalQty}</span>
          )}
        </Link>
      </nav>
    </header>
  );
}

/* ── Cart Item Page ── */
export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  /* Totals */
  const calculateTotalAmount = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotalCost = (item) => {
    return item.price * item.quantity;
  };

  const totalQty = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalCost = calculateTotalAmount();

  /* Handlers */
  const handleIncrease = (id, currentQty) =>
    dispatch(updateQuantity({ id, quantity: currentQty + 1 }));

  const handleDecrease = (id, currentQty) =>
    dispatch(updateQuantity({ id, quantity: currentQty - 1 }));

  const handleDelete = (id) =>
    dispatch(removeItem(id));

  const handleCheckout = () =>
    alert('🌿 Coming Soon! Your order will be processed shortly. Thank you for shopping at Paradise Nursery!');

  /* Empty cart view */
  if (items.length === 0) {
    return (
      <>
        <Navbar />
        <main className="ci-page">
          <div className="ci-empty">
            <div className="ci-empty-icon" aria-hidden="true">🛒</div>
            <h1 className="ci-empty-title">Your cart is empty</h1>
            <p className="ci-empty-sub">You haven&apos;t added any plants yet.</p>
            <Link to="/plants" className="ci-continue-btn" id="continue-shopping-empty">
              ← Continue Shopping
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="ci-page">
        <div className="ci-container">

          {/* ── Page header with totals ── */}
          <div className="ci-page-header">
            <h1 className="ci-page-title">Shopping Cart</h1>
            <div className="ci-summary-pills">
              {/* Total number of plants in cart */}
              <span className="ci-pill" id="total-items">
                🌿 {totalQty} {totalQty === 1 ? 'plant' : 'plants'}
              </span>
              {/* Total cost of all items */}
              <span className="ci-pill ci-pill-highlight" id="total-cost">
                Total: ${totalCost.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="ci-layout">

            {/* ── Item list ── */}
            <section className="ci-items" aria-label="Cart items">
              {items.map((item) => (
                <article key={item.id} className="ci-item" id={`cart-item-${item.id}`}>

                  {/* Thumbnail */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="ci-item-img"
                  />

                  {/* Name + prices */}
                  <div className="ci-item-info">
                    <h2 className="ci-item-name">{item.name}</h2>
                    {/* Unit price */}
                    <p className="ci-item-unit">
                      Unit price: <strong>${item.price.toFixed(2)}</strong>
                    </p>
                    {/* Total cost for this plant */}
                    <p className="ci-item-subtotal">
                      Total:{' '}
                      <strong className="ci-subtotal-val">
                        ${calculateTotalCost(item).toFixed(2)}
                      </strong>
                    </p>
                  </div>

                  {/* Controls */}
                  <div className="ci-item-controls">
                    {/* Quantity increase / decrease */}
                    <div className="ci-qty">
                      <button
                        className="ci-qty-btn"
                        id={`decrease-${item.id}`}
                        onClick={() => handleDecrease(item.id, item.quantity)}
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        −
                      </button>
                      <span className="ci-qty-val" id={`qty-${item.id}`}>
                        {item.quantity}
                      </span>
                      <button
                        className="ci-qty-btn"
                        id={`increase-${item.id}`}
                        onClick={() => handleIncrease(item.id, item.quantity)}
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        +
                      </button>
                    </div>

                    {/* Delete button */}
                    <button
                      className="ci-delete-btn"
                      id={`delete-${item.id}`}
                      onClick={() => handleDelete(item.id)}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                           strokeWidth="2" aria-hidden="true">
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

            {/* ── Order summary ── */}
            <aside className="ci-summary">
              <h2 className="ci-summary-title">Order Summary</h2>

              <div className="ci-order-lines">
                {items.map((item) => (
                  <div key={item.id} className="ci-order-line">
                    <span className="ci-order-name">
                      {item.name}
                      <span className="ci-order-qty"> × {item.quantity}</span>
                    </span>
                    <span className="ci-order-price">
                      ${calculateTotalCost(item).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="ci-divider" />

              {/* Total cart amount */}
              <div className="ci-order-total">
                <span>Total</span>
                <span className="ci-total-val" id="order-total">${totalCost.toFixed(2)}</span>
              </div>

              <div className="ci-actions">
                {/* Continue shopping → back to product listing */}
                <Link to="/plants" className="ci-continue-btn" id="continue-shopping-btn">
                  ← Continue Shopping
                </Link>

                {/* Checkout button — shows "Coming Soon" message */}
                <button
                  className="ci-checkout-btn"
                  id="checkout-btn"
                  onClick={handleCheckout}
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
