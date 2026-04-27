import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import './PlantCard.css';

export default function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const inCart = useSelector((state) =>
    state.cart.items.some((i) => i.id === plant.id)
  );

  const handleAdd = () => {
    dispatch(addToCart(plant));
  };

  return (
    <article className="plant-card" id={`plant-${plant.id}`}>
      <div className="plant-card-img-wrap">
        <img
          src={plant.image}
          alt={plant.name}
          className="plant-card-img"
          loading="lazy"
        />
        {inCart && <span className="in-cart-badge">In Cart ✓</span>}
      </div>
      <div className="plant-card-body">
        <h3 className="plant-card-name">{plant.name}</h3>
        <p className="plant-card-desc">{plant.description}</p>
        <div className="plant-card-footer">
          <span className="plant-card-price">${plant.price.toFixed(2)}</span>
          <button
            className={`add-to-cart-btn ${inCart ? 'added' : ''}`}
            onClick={handleAdd}
            id={`add-btn-${plant.id}`}
            aria-label={`Add ${plant.name} to cart`}
          >
            {inCart ? '+ Add More' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </article>
  );
}
