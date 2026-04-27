import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from './CartSlice';
import './ProductList.css';

/* ─────────────────────────────────────────
   Plant Catalogue — 6 plants × 3 categories
───────────────────────────────────────── */
const plantsData = [
  // ── 1. Tropical Statement Plants
  {
    id: 1,
    category: 'Tropical Statement Plants',
    name: 'Monstera Deliciosa',
    price: 34.99,
    image: '/plant_monstera.png',
  },
  {
    id: 2,
    category: 'Tropical Statement Plants',
    name: 'Fiddle Leaf Fig',
    price: 44.99,
    image: '/plant_fiddle_leaf.png',
  },
  {
    id: 3,
    category: 'Tropical Statement Plants',
    name: 'Bird of Paradise',
    price: 52.99,
    image: 'https://images.unsplash.com/photo-1598880942248-1e8cbaef64d9?w=400&q=80',
  },
  {
    id: 4,
    category: 'Tropical Statement Plants',
    name: 'Elephant Ear (Alocasia)',
    price: 38.99,
    image: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=400&q=80',
  },
  {
    id: 5,
    category: 'Tropical Statement Plants',
    name: 'Calathea Orbifolia',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80',
  },
  {
    id: 6,
    category: 'Tropical Statement Plants',
    name: 'Philodendron Brasil',
    price: 26.99,
    image: 'https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?w=400&q=80',
  },

  // ── 2. Effortless Low-Maintenance
  {
    id: 7,
    category: 'Effortless Low-Maintenance',
    name: 'Snake Plant',
    price: 19.99,
    image: '/plant_snake.png',
  },
  {
    id: 8,
    category: 'Effortless Low-Maintenance',
    name: 'Golden Pothos',
    price: 14.99,
    image: '/plant_pothos.png',
  },
  {
    id: 9,
    category: 'Effortless Low-Maintenance',
    name: 'Peace Lily',
    price: 22.99,
    image: '/plant_peace_lily.png',
  },
  {
    id: 10,
    category: 'Effortless Low-Maintenance',
    name: 'ZZ Plant',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=400&q=80',
  },
  {
    id: 11,
    category: 'Effortless Low-Maintenance',
    name: 'Spider Plant',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400&q=80',
  },
  {
    id: 12,
    category: 'Effortless Low-Maintenance',
    name: 'Cast Iron Plant',
    price: 27.99,
    image: 'https://images.unsplash.com/photo-1603436326446-74e2b1703df9?w=400&q=80',
  },

  // ── 3. Succulents & Cacti
  {
    id: 13,
    category: 'Succulents & Cacti',
    name: 'Aloe Vera',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400&q=80',
  },
  {
    id: 14,
    category: 'Succulents & Cacti',
    name: 'Jade Plant',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&q=80',
  },
  {
    id: 15,
    category: 'Succulents & Cacti',
    name: 'Echeveria Elegans',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&q=80',
  },
  {
    id: 16,
    category: 'Succulents & Cacti',
    name: 'String of Pearls',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1573168710465-7e88b67fdd6b?w=400&q=80',
  },
  {
    id: 17,
    category: 'Succulents & Cacti',
    name: 'Christmas Cactus',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1548586196-aa5803b77379?w=400&q=80',
  },
  {
    id: 18,
    category: 'Succulents & Cacti',
    name: 'Barrel Cactus',
    price: 21.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
  },
];

/* Group by category */
const categories = plantsData.reduce((acc, plant) => {
  if (!acc[plant.category]) acc[plant.category] = [];
  acc[plant.category].push(plant);
  return acc;
}, {});

const categoryIcons = {
  'Tropical Statement Plants':   '🌴',
  'Effortless Low-Maintenance':  '🪴',
  'Succulents & Cacti':          '🌵',
};

/* ── Single Plant Card ── */
function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const alreadyInCart = cartItems.some((i) => i.id === plant.id);

  const handleAddToCart = () => {
    dispatch(addItem(plant));
  };

  return (
    <article className="pl-card" id={`plant-${plant.id}`}>
      <div className="pl-card-img-wrap">
        <img src={plant.image} alt={plant.name} className="pl-card-img" loading="lazy" />
        {alreadyInCart && <span className="pl-in-cart-badge">✓ In Cart</span>}
      </div>
      <div className="pl-card-body">
        <h3 className="pl-card-name">{plant.name}</h3>
        <div className="pl-card-footer">
          <span className="pl-card-price">${plant.price.toFixed(2)}</span>
          {/* Button is DISABLED once the item is in the cart */}
          <button
            className="pl-add-btn"
            id={`add-btn-${plant.id}`}
            onClick={handleAddToCart}
            disabled={alreadyInCart}
            aria-label={
              alreadyInCart
                ? `${plant.name} already in cart`
                : `Add ${plant.name} to cart`
            }
          >
            {alreadyInCart ? 'Added ✓' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </article>
  );
}

/* ── Navbar ── */
function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQty = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <header className="pl-navbar" role="banner">
      <div className="pl-navbar-brand">
        <span aria-hidden="true">🌿</span>
        <Link to="/" className="pl-navbar-logo">Paradise Nursery</Link>
      </div>
      <nav className="pl-navbar-links" aria-label="Main navigation">
        <Link to="/"       className="pl-nav-link" id="nav-home">Home</Link>
        <Link to="/plants" className="pl-nav-link" id="nav-plants">Plants</Link>
        <Link to="/cart"   className="pl-nav-cart" id="nav-cart" aria-label="Shopping cart">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2" className="pl-cart-svg" aria-hidden="true">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          {totalQty > 0 && (
            <span className="pl-cart-badge" id="cart-count">{totalQty}</span>
          )}
        </Link>
      </nav>
    </header>
  );
}

/* ── Product List Page ── */
export default function ProductList() {
  return (
    <>
      <Navbar />
      <main className="pl-page">
        {/* Page hero */}
        <section className="pl-hero">
          <h1 className="pl-hero-title">Our Plant Collection</h1>
          <p className="pl-hero-sub">
            Handpicked plants in three beautiful categories — find your perfect green companion.
          </p>
        </section>

        {/* Categories */}
        <div className="pl-categories">
          {Object.entries(categories).map(([category, plants]) => (
            <section
              key={category}
              className="pl-category"
              id={`category-${category.replace(/[\s&]+/g, '-').toLowerCase()}`}
            >
              <div className="pl-category-header">
                <span className="pl-category-icon" aria-hidden="true">
                  {categoryIcons[category] || '🌱'}
                </span>
                <h2 className="pl-category-title">{category}</h2>
                <span className="pl-category-count">{plants.length} plants</span>
              </div>
              <div className="pl-grid">
                {plants.map((plant) => (
                  <PlantCard key={plant.id} plant={plant} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
