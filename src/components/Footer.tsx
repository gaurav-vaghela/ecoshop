import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">About EcoShop</h3>
            <p className="text-gray-400 mb-4">
              Your premier destination for sustainable and eco-friendly products. 
              We believe in quality, style, and environmental responsibility.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-teal-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-teal-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-teal-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-teal-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="hover:text-teal-500 transition-colors">Shop All</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-teal-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-teal-500 transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-teal-500 transition-colors">Blog</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="hover:text-teal-500 transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-teal-500 transition-colors">Shipping Info</Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-teal-500 transition-colors">Returns</Link>
              </li>
              <li>
                <Link to="/track-order" className="hover:text-teal-500 transition-colors">Track Order</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-teal-500" />
                <span>123 Shopping Street, NY 10001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-teal-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-teal-500" />
                <span>support@ecoshop.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 EcoShop. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-teal-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-teal-500 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};