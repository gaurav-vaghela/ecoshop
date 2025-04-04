import React from 'react';
import { Timer, Truck, Shield, Gift } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const OfferSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-teal-600 to-teal-800 dark:from-teal-800 dark:to-teal-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Offers</h2>
          <p className="text-teal-100">Discover amazing deals and exclusive offers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:transform hover:-translate-y-1 transition-all">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Timer className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Flash Sale</h3>
            <p className="text-teal-100">Up to 50% off on selected items</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:transform hover:-translate-y-1 transition-all">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
            <p className="text-teal-100">On orders over $100</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:transform hover:-translate-y-1 transition-all">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Money Back</h3>
            <p className="text-teal-100">30-day return guarantee</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:transform hover:-translate-y-1 transition-all">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Special Gift</h3>
            <p className="text-teal-100">Free gift on orders over $150</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={() => navigate('/offers')}
            className="bg-white text-teal-600 dark:text-teal-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-teal-50 transition-colors"
          >
            View All Offers
          </button>
        </div>
      </div>
    </div>
  );
};