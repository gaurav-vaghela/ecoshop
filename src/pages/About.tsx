import React from 'react';
import { Shield, Leaf, Heart } from 'lucide-react';

export const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About EcoShop</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We're committed to providing sustainable and eco-friendly products while delivering 
          an exceptional shopping experience to our customers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="h-8 w-8 text-teal-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
          <p className="text-gray-600">
            Every product is carefully selected and tested to ensure the highest quality standards.
          </p>
        </div>
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Leaf className="h-8 w-8 text-teal-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
          <p className="text-gray-600">
            We prioritize sustainable materials and environmentally conscious manufacturing processes.
          </p>
        </div>
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="h-8 w-8 text-teal-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Customer First</h3>
          <p className="text-gray-600">
            Your satisfaction is our top priority, with dedicated support and hassle-free returns.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2020, EcoShop began with a simple mission: to make sustainable shopping 
            accessible to everyone. We believe that every purchase decision can make a difference 
            in creating a better world for future generations.
          </p>
          <p className="text-gray-600">
            Today, we work with over 100 eco-conscious brands and have helped thousands of 
            customers make sustainable choices in their daily lives.
          </p>
        </div>
        <div className="relative h-96">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"
            alt="Our Story"
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Be part of our community and help us create a more sustainable future. Subscribe to our 
          newsletter for eco-friendly tips and exclusive offers.
        </p>
        <div className="flex max-w-md mx-auto gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
          <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};