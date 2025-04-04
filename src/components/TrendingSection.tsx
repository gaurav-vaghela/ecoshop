import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';

export const TrendingSection = () => {
  const navigate = useNavigate();
  const trendingProducts = products.slice(0, 4); // In a real app, you'd have a trending flag or algorithm

  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-teal-600 dark:text-teal-400" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Trending Now</h2>
              <p className="text-gray-600 dark:text-gray-300">Discover what's hot this season</p>
            </div>
          </div>
          <Link
            to="/offers"
            className="group flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-semibold transition-colors"
          >
            View All
            <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trendingProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};