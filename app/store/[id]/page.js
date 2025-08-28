import { products } from '../../../data/products';
import Image from 'next/image';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const product = products.find((p) => p.id === params.id);
  return {
    title: product ? `${product.name} | Ahmed’s Store` : 'Product Not Found',
    description: product ? product.description : '',
  };
}

export default function ProductDetailPage({ params }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return (
      <main className="product-not-found">
        <h1>Product Not Found</h1>
        <Link href="/store">&larr; Back to Store</Link>
      </main>
    );
  }

  return (
    <main className="product-detail">
      {/* Product Image */}
      <div className="product-image">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="image"
          priority
        />
      </div>

      {/* Product Info */}
      <h1>{product.name}</h1>
      <p className="price">${product.price.toFixed(2)}</p>
      <p className="description">{product.description}</p>

      {/* Back to Store */}
      <Link href="/store" className="back-link">
        &larr; Back to Store
      </Link>
    </main>
  );
}
