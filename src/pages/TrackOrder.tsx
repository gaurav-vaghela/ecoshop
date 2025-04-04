import React, { useState } from 'react';
import { Search, Package, Truck, Box, CheckCircle } from 'lucide-react';

export const TrackOrder = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [trackingResult, setTrackingResult] = useState<{
    status: string;
    location: string;
    timestamp: string;
    updates: {
      status: string;
      location: string;
      timestamp: string;
      description: string;
    }[];
  } | null>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTracking(true);
    // Simulated tracking result
    setTrackingResult({
      status: 'In Transit',
      location: 'Chicago, IL',
      timestamp: '2024-03-15 14:30 EST',
      updates: [
        {
          status: 'Out for Delivery',
          location: 'Chicago, IL',
          timestamp: '2024-03-15 14:30 EST',
          description: 'Package is out for delivery'
        },
        {
          status: 'Arrived at Local Facility',
          location: 'Chicago, IL',
          timestamp: '2024-03-15 08:45 EST',
          description: 'Package has arrived at local delivery facility'
        },
        {
          status: 'In Transit',
          location: 'Indianapolis, IN',
          timestamp: '2024-03-14 20:15 EST',
          description: 'Package is in transit to the next facility'
        },
        {
          status: 'Shipped',
          location: 'Cleveland, OH',
          timestamp: '2024-03-14 10:00 EST',
          description: 'Package has been shipped'
        }
      ]
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Track Your Order</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Enter your order number and email address to track your package.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleTrack} className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="space-y-6">
            <div>
              <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Order Number
              </label>
              <input
                type="text"
                id="orderNumber"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="Enter your order number"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="Enter your email address"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
            >
              <Search className="h-5 w-5" />
              Track Order
            </button>
          </div>
        </form>

        {isTracking && trackingResult && (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <Package className="h-6 w-6 text-teal-600" />
                <h2 className="text-xl font-semibold">Tracking Details</h2>
              </div>
              <div className="text-sm text-gray-600">
                Last updated: {trackingResult.timestamp}
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
              {trackingResult.updates.map((update, index) => (
                <div key={index} className="relative pl-12 pb-8">
                  <div className="absolute left-2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-teal-600 flex items-center justify-center">
                    {index === 0 ? (
                      <Truck className="h-3 w-3 text-teal-600" />
                    ) : index === trackingResult.updates.length - 1 ? (
                      <Box className="h-3 w-3 text-teal-600" />
                    ) : (
                      <CheckCircle className="h-3 w-3 text-teal-600" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold">{update.status}</h3>
                    <p className="text-sm text-gray-600">{update.description}</p>
                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                      <span>{update.location}</span>
                      <span>•</span>
                      <span>{update.timestamp}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t">
              <h3 className="font-semibold mb-4">Estimated Delivery</h3>
              <div className="bg-teal-50 rounded-lg p-4">
                <p className="text-teal-600">Expected delivery by March 16, 2024</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};