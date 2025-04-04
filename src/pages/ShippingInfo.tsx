import React from 'react';
import { Truck, Clock, Globe, CreditCard } from 'lucide-react';

export const ShippingInfo = () => {
  const shippingMethods = [
    {
      name: 'Standard Shipping',
      time: '3-5 business days',
      price: 'Free on orders over $50',
      description: 'Best for non-urgent deliveries'
    },
    {
      name: 'Express Shipping',
      time: '2-3 business days',
      price: '$9.95',
      description: 'Faster delivery for your orders'
    },
    {
      name: 'Next Day Delivery',
      time: '1 business day',
      price: '$19.95',
      description: 'Get your items the next business day'
    },
    {
      name: 'International Shipping',
      time: '7-14 business days',
      price: 'Calculated at checkout',
      description: 'Available for most countries'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Shipping Information</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We offer various shipping options to meet your needs. All orders are processed
          within 24 hours during business days.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {shippingMethods.map((method, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">{method.name}</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p>Delivery Time: {method.time}</p>
              <p>Cost: {method.price}</p>
              <p>{method.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6">Shipping Policy</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Clock className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Processing Time</h3>
                <p className="text-gray-600">
                  Orders are processed within 24 hours during business days. Orders placed
                  on weekends or holidays will be processed the next business day.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Globe className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">International Shipping</h3>
                <p className="text-gray-600">
                  We ship to most countries worldwide. International shipping times and
                  costs vary by location. Import duties and taxes may apply.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Truck className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Shipping Partners</h3>
                <p className="text-gray-600">
                  We work with reliable shipping partners including FedEx, UPS, and USPS
                  to ensure safe and timely delivery of your orders.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CreditCard className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Free Shipping</h3>
                <p className="text-gray-600">
                  Enjoy free standard shipping on all orders over $50 within the
                  continental United States.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">When will my order ship?</h3>
              <p className="text-gray-600">
                Orders are typically processed and shipped within 24 hours during business
                days. You'll receive a shipping confirmation email with tracking information
                once your order ships.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Can I change my shipping address?</h3>
              <p className="text-gray-600">
                You can modify your shipping address within 1 hour of placing your order.
                Contact our customer service team for assistance with address changes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Do you ship to PO boxes?</h3>
              <p className="text-gray-600">
                Yes, we ship to PO boxes using USPS. However, some larger items may
                require a physical address for delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-teal-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
        <p className="text-gray-600 mb-6">
          Our customer service team is here to help with any shipping-related questions.
        </p>
        <a
          href="/contact"
          className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
};