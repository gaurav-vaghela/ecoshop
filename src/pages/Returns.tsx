import React from 'react';
import { Package, RefreshCw, DollarSign, ShieldCheck } from 'lucide-react';

export const Returns = () => {
  const returnSteps = [
    {
      icon: Package,
      title: 'Initiate Return',
      description: 'Log into your account and select the items you wish to return from your order history.'
    },
    {
      icon: RefreshCw,
      title: 'Print Label',
      description: 'Download and print your prepaid return shipping label.'
    },
    {
      icon: ShieldCheck,
      title: 'Pack Items',
      description: 'Pack items securely in their original packaging if possible.'
    },
    {
      icon: DollarSign,
      title: 'Refund',
      description: 'Receive your refund within 5-7 business days after we receive your return.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Returns & Refunds</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We want you to be completely satisfied with your purchase. If you're not happy
          with your order, we'll help you return it.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {returnSteps.map((step, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm text-center">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <step.icon className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6">Return Policy</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">30-Day Return Window</h3>
              <p className="text-gray-600">
                Items can be returned within 30 days of delivery for a full refund.
                Products must be unused and in their original packaging.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Return Shipping</h3>
              <p className="text-gray-600">
                For defective items or incorrect shipments, return shipping is free.
                For other returns, a flat-rate return shipping fee of $7.95 will apply.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Non-Returnable Items</h3>
              <p className="text-gray-600">
                Some items cannot be returned, including:
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>Personalized or custom-made products</li>
                <li>Intimate or sanitary goods</li>
                <li>Downloadable software or digital products</li>
                <li>Gift cards</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Damaged Items</h3>
              <p className="text-gray-600">
                If you receive a damaged item, please contact us within 48 hours of
                delivery. We'll send a replacement or issue a full refund.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Refund Information</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Refund Processing</h3>
              <p className="text-gray-600">
                Refunds are processed within 3-5 business days after we receive your
                return. The funds may take an additional 3-7 business days to appear
                in your account, depending on your bank.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Refund Methods</h3>
              <p className="text-gray-600">
                Refunds will be issued to the original payment method used for the
                purchase. Store credit is available upon request.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Partial Refunds</h3>
              <p className="text-gray-600">
                Partial refunds may be offered for:
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>Items returned without original packaging</li>
                <li>Items with signs of use or wear</li>
                <li>Missing accessories or parts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-teal-50 rounded-lg p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Start Your Return</h2>
          <p className="text-gray-600 mb-6">
            Ready to return an item? Log into your account to start the return process.
            Need help? Our customer service team is here to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/account/orders"
              className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
            >
              View Orders
            </a>
            <a
              href="/contact"
              className="inline-block bg-white text-teal-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};