import Link from 'next/link';
import Image from 'next/image';
import { products } from '../../data/products';

export const metadata = {
  title: "Ahmed’s Store | Featured Products",
  description: "Browse featured products in Ahmed’s Store.",
};

export default function StorePage() {
  return (
    <section className="store">
      <h1 className="store-title">Featured Products</h1>
      
      <div className="store-grid">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/store/${product.id}`}
            className="store-card"
          >
            {/* Product Image */}
            <div className="store-card-image">
              <Image
                src={product.image}
                alt={product.name}
                // fill
                className="image"
              />
            </div>

            {/* Product Info */}
            <div className="store-card-info">
              <h2>{product.name}</h2>
              <p>${product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
