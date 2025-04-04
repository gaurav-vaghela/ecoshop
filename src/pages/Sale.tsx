import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { Tag } from 'lucide-react';

export const Sale = () => {
  // Filter products that are on sale
  const saleProducts = products.filter(product => product.onSale);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Sale</h1>
        <p className="text-gray-600">Don't miss out on these amazing deals!</p>
      </div>

      {saleProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {saleProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <Tag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">No active sales</h2>
          <p className="text-gray-600">Check back later for new deals and discounts!</p>
        </div>
      )}
    </div>
  );
};