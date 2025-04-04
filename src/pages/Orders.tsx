import React from 'react';
import { Package, Truck, CheckCircle, Clock, Search, Filter, Download } from 'lucide-react';
import { MetaTags } from '../components/MetaTags';

interface Order {
  id: string;
  date: string;
  total: number;
  status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
  items: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }[];
  tracking?: string;
}

const orders: Order[] = [
  {
    id: 'ORD-2024-001',
    date: '2024-03-15',
    total: 299.97,
    status: 'delivered',
    items: [
      {
        id: 1,
        name: 'Premium Wireless Headphones',
        price: 199.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200'
      },
      {
        id: 2,
        name: 'Smart Watch Pro',
        price: 99.98,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200'
      }
    ],
    tracking: '1Z999AA1234567890'
  },
  {
    id: 'ORD-2024-002',
    date: '2024-03-10',
    total: 79.99,
    status: 'shipped',
    items: [
      {
        id: 3,
        name: 'Leather Laptop Bag',
        price: 79.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200'
      }
    ],
    tracking: '1Z999AA1234567891'
  },
  {
    id: 'ORD-2024-003',
    date: '2024-03-05',
    total: 49.99,
    status: 'processing',
    items: [
      {
        id: 4,
        name: 'Minimalist Desk Lamp',
        price: 49.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=200'
      }
    ]
  }
];

const getStatusIcon = (status: Order['status']) => {
  switch (status) {
    case 'processing':
      return <Clock className="h-4 w-4" />;
    case 'shipped':
      return <Truck className="h-4 w-4" />;
    case 'delivered':
      return <CheckCircle className="h-4 w-4" />;
    case 'cancelled':
      return <Package className="h-4 w-4" />;
  }
};

const getStatusText = (status: Order['status']) => {
  switch (status) {
    case 'processing':
      return 'Processing';
    case 'shipped':
      return 'Shipped';
    case 'delivered':
      return 'Delivered';
    case 'cancelled':
      return 'Cancelled';
  }
};

const getStatusColor = (status: Order['status']) => {
  switch (status) {
    case 'processing':
      return 'bg-yellow-100 text-yellow-800';
    case 'shipped':
      return 'bg-blue-100 text-blue-800';
    case 'delivered':
      return 'bg-green-100 text-green-800';
    case 'cancelled':
      return 'bg-red-100 text-red-800';
  }
};

export const Orders = () => {
  return (
    <>
      <MetaTags
        title="Orders"
        description="View and track your EcoShop orders"
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h1 className="text-2xl font-bold">My Orders</h1>
          <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
            <div className="relative flex-1 sm:flex-none">
              <input
                type="text"
                placeholder="Search orders..."
                className="w-full md:w-auto pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="flex items-center justify-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <Filter className="h-5 w-5" />
              Filter
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 md:p-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                  <div className="w-full md:w-auto">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                      <h2 className="text-lg font-semibold">Order #{order.id}</h2>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                        <span className="flex items-center gap-1.5">
                          {getStatusIcon(order.status)}
                          {getStatusText(order.status)}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      Placed on {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                  <button className="flex items-center gap-2 text-teal-600 hover:text-teal-700">
                    <Download className="h-5 w-5" />
                    <span className="hidden sm:inline">Invoice</span>
                  </button>
                </div>

                <div className="border-t border-b py-4 my-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium truncate">{item.name}</h3>
                        <p className="text-gray-600">
                          Quantity: {item.quantity} × ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${(item.quantity * item.price).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    {order.tracking && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Truck className="h-5 w-5" />
                        <span className="text-sm">Tracking: {order.tracking}</span>
                      </div>
                    )}
                  </div>
                  <div className="text-right w-full sm:w-auto">
                    <p className="text-sm text-gray-600">Total</p>
                    <p className="text-xl font-bold">${order.total.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};