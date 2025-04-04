import React from 'react';
import { ImageSlider } from '../components/ImageSlider';
import { OfferSection } from '../components/OfferSection';
import { TrendingSection } from '../components/TrendingSection';
import { BrandsSection } from '../components/BrandsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <ImageSlider />
      
      <OfferSection />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-teal-600 dark:text-teal-400 font-medium">Welcome to EcoShop</span>
            <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-900 dark:text-white">
              Discover Sustainable Living with Our Premium Collection
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We curate the finest eco-friendly products to help you make sustainable choices 
              without compromising on quality or style. From everyday essentials to luxury items, 
              find everything you need for a greener lifestyle.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Shop Now
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"
              alt="Eco-friendly Products"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent rounded-lg" />
          </div>
        </div>
      </div>

      <TrendingSection />

      <div className="bg-teal-600 dark:bg-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <p className="text-teal-100">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-teal-100">Products Available</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-teal-100">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>

      <BrandsSection />

      <TestimonialsSection />

      <div className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 dark:text-white">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Stay updated with our latest products, exclusive offers, and eco-friendly tips.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
                <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="relative h-64 md:h-96">
              <img
                src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800"
                alt="Newsletter"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600/50 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};