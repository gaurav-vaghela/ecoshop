import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Timer, Gift, Tag, Truck } from 'lucide-react';

export const Offers = () => {
  const navigate = useNavigate();
  
  const offers = [
    {
      title: "Flash Sale",
      description: "Up to 50% off on selected items",
      validUntil: "Limited time only",
      icon: Timer,
      link: "/sale",
      bgColor: "bg-red-500"
    },
    {
      title: "Free Shipping",
      description: "On orders over $100",
      validUntil: "Ongoing offer",
      icon: Truck,
      link: "/products",
      bgColor: "bg-blue-500"
    },
    {
      title: "Bundle Deals",
      description: "Buy 2 get 1 free on accessories",
      validUntil: "While stocks last",
      icon: Gift,
      link: "/products?category=Accessories",
      bgColor: "bg-purple-500"
    },
    {
      title: "Clearance Sale",
      description: "Extra 20% off on clearance items",
      validUntil: "Limited stock",
      icon: Tag,
      link: "/sale",
      bgColor: "bg-orange-500"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Special Offers</h1>
        <p className="text-gray-600">Discover amazing deals and exclusive discounts</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {offers.map((offer, index) => (
          <div
            key={index}
            onClick={() => navigate(offer.link)}
            className="group cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className={`${offer.bgColor} p-6 text-white`}>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <offer.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{offer.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-center mb-4">{offer.description}</p>
                <div className="text-sm text-center">
                  <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-gray-600">
                    {offer.validUntil}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-teal-600 to-teal-800 rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Subscribe for Exclusive Offers</h2>
            <p className="mb-6">Be the first to know about our special deals and new arrivals</p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900"
              />
              <button className="bg-white text-teal-600 px-6 py-2 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          <div className="relative h-64 md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800"
              alt="Special Offers"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/30" />
          </div>
        </div>
      </div>
    </div>
  );
};