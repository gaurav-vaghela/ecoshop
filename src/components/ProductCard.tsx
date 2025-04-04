import React from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Product } from '../types';
import { ShoppingCart, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch: cartDispatch } = useCart();
  const { state: wishlistState, dispatch: wishlistDispatch } = useWishlist();

  const isInWishlist = wishlistState.items.some(item => item.id === product.id);

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isInWishlist) {
      wishlistDispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product.id });
    } else {
      wishlistDispatch({ type: 'ADD_TO_WISHLIST', payload: product });
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group h-full flex flex-col">
      <Link to={`/products/${product.id}`} className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.onSale && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Sale
          </div>
        )}
        <button 
          onClick={handleWishlist}
          className={`absolute top-4 right-4 p-2 rounded-full shadow-md transition-colors ${
            isInWishlist 
              ? 'bg-red-500 text-white hover:bg-red-600' 
              : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
          }`}
        >
          <Heart className="h-5 w-5" fill={isInWishlist ? 'currentColor' : 'none'} />
        </button>
      </Link>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-teal-600 dark:text-teal-400 font-medium">{product.category}</span>
            <span className="text-sm text-gray-400 dark:text-gray-500">•</span>
            <span className="text-sm text-teal-600 dark:text-teal-400 font-medium">{product.subcategory}</span>
          </div>
          <Link to={`/products/${product.id}`}>
            <h3 className="text-lg font-semibold hover:text-teal-600 dark:text-white dark:hover:text-teal-400 transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm line-clamp-2">{product.description}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            {product.onSale ? (
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-red-500 dark:text-red-400">
                  ${product.salePrice?.toFixed(2)}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          <button
            onClick={() => cartDispatch({ type: 'ADD_TO_CART', payload: product })}
            className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};