import plants from '../data/plants';
import PlantCard from '../components/PlantCard';
import Header from '../components/Header';
import './ProductPage.css';

// Group plants by category
const categories = plants.reduce((acc, plant) => {
  if (!acc[plant.category]) acc[plant.category] = [];
  acc[plant.category].push(plant);
  return acc;
}, {});

const categoryIcons = {
  'Tropical Statement Plants': '🌴',
  'Effortless Low-Maintenance': '🪴',
  'Succulents & Cacti': '🌵',
};

export default function ProductPage() {
  return (
    <>
      <Header />
      <main className="product-page">
        <section className="product-hero">
          <div className="product-hero-content">
            <h1 className="product-hero-title">Our Plant Collection</h1>
            <p className="product-hero-subtitle">
              Handpicked plants, thoughtfully organised. Find your perfect green companion.
            </p>
          </div>
        </section>

        <div className="categories-container">
          {Object.entries(categories).map(([category, categoryPlants]) => (
            <section key={category} className="category-section" id={`category-${category.replace(/\s+/g, '-').toLowerCase()}`}>
              <div className="category-header">
                <span className="category-icon" aria-hidden="true">
                  {categoryIcons[category] || '🌱'}
                </span>
                <h2 className="category-title">{category}</h2>
                <span className="category-count">{categoryPlants.length} plants</span>
              </div>
              <div className="plant-grid">
                {categoryPlants.map((plant) => (
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
