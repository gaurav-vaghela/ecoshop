import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { ShareButton } from '../components/ShareButton';
import { products } from '../data/products';
import { ShoppingCart, Heart, ArrowLeft, Check, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { ReviewsSection } from '../components/ReviewsSection';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch: cartDispatch } = useCart();
  const { state: wishlistState, dispatch: wishlistDispatch } = useWishlist();
  const [selectedImage, setSelectedImage] = useState(0);
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  const product = products.find(p => p.id === Number(id));
  const isInWishlist = product ? wishlistState.items.some(item => item.id === product.id) : false;

  const productImages = [
    product?.image,
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    'https://images.unsplash.com/photo-1505740106531-4243f3831c78?w=800',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800'
  ].filter(Boolean);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <button
          onClick={() => navigate('/products')}
          className="text-teal-600 hover:text-teal-700 font-medium"
        >
          Back to Products
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    cartDispatch({ type: 'ADD_TO_CART', payload: product });
    setShowAddedMessage(true);
    setTimeout(() => setShowAddedMessage(false), 2000);
  };

  const handleWishlist = () => {
    if (isInWishlist) {
      wishlistDispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product.id });
    } else {
      wishlistDispatch({ type: 'ADD_TO_WISHLIST', payload: product });
    }
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const reviews = [
    {
      id: 1,
      user: {
        name: "Alex Thompson",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
      },
      rating: 5,
      date: "2 weeks ago",
      content: "Excellent product! The quality is outstanding and it perfectly matches the description. Very happy with my purchase.",
      helpful: 12,
      images: [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200",
        "https://images.unsplash.com/photo-1505740106531-4243f3831c78?w=200"
      ]
    },
    {
      id: 2,
      user: {
        name: "Sarah Miller",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
      },
      rating: 4,
      date: "1 month ago",
      content: "Great product overall. The only minor issue is that it took a bit longer to arrive than expected. But the quality makes up for it.",
      helpful: 8
    }
  ];

  const reviewStats = {
    averageRating: 4.5,
    totalReviews: 128,
    ratingDistribution: {
      5: 80,
      4: 30,
      3: 10,
      2: 5,
      1: 3
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 group">
            <img
              src={productImages[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                  selectedImage === index ? 'border-teal-600' : 'border-transparent hover:border-teal-400'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-sm text-teal-600 font-medium">{product.category}</span>
              <span className="text-sm text-gray-400">•</span>
              <span className="text-sm text-teal-600 font-medium">{product.subcategory}</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill={i < 4 ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">(128 reviews)</span>
            </div>
            {product.onSale ? (
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-red-500">
                  ${product.salePrice?.toFixed(2)}
                </span>
                <span className="text-xl text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            ) : (
              <p className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
            )}
          </div>

          <p className="text-gray-600">{product.description}</p>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Key Features</h3>
            <ul className="grid grid-cols-1 gap-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-600">
                  <Check className="h-5 w-5 text-teal-600" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Specifications</h3>
            <dl className="grid grid-cols-1 gap-2">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex">
                  <dt className="w-1/3 text-gray-600">{key}</dt>
                  <dd className="w-2/3 font-medium text-gray-900">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </button>
            <button
              onClick={handleWishlist}
              className={`p-3 border rounded-lg transition-colors ${
                isInWishlist 
                  ? 'bg-red-500 text-white border-red-500 hover:bg-red-600' 
                  : 'hover:bg-gray-50'
              }`}
            >
              <Heart className="h-5 w-5" fill={isInWishlist ? 'currentColor' : 'none'} />
            </button>
            <ShareButton
              title={product.name}
              description={product.description}
              url={window.location.href}
            />
          </div>

          {showAddedMessage && (
            <div className="fixed bottom-8 right-8 bg-teal-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
              <Check className="h-5 w-5" />
              Added to cart
            </div>
          )}
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(relatedProduct => (
              <div
                key={relatedProduct.id}
                onClick={() => navigate(`/products/${relatedProduct.id}`)}
                className="cursor-pointer group"
              >
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-3">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-teal-600">
                  {relatedProduct.name}
                </h3>
                <p className="text-gray-600">${relatedProduct.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <ReviewsSection
        reviews={reviews}
        averageRating={reviewStats.averageRating}
        totalReviews={reviewStats.totalReviews}
        ratingDistribution={reviewStats.ratingDistribution}
      />
    </div>
  );
};