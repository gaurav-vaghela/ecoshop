import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const { state, dispatch } = useCart();

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (state.items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Your cart is empty</h2>
        <Link
          to="/products"
          className="inline-block bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-8 dark:text-white">Shopping Cart</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {state.items.map(item => (
            <div
              key={item.id}
              className="flex items-center gap-4 border-b dark:border-gray-700 py-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />
              
              <div className="flex-1">
                <h3 className="font-semibold dark:text-white">{item.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">${item.price.toFixed(2)}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    dispatch({
                      type: 'UPDATE_QUANTITY',
                      payload: { id: item.id, quantity: Math.max(0, item.quantity - 1) }
                    })
                  }
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  <Minus className="h-4 w-4 dark:text-gray-400" />
                </button>
                <span className="w-8 text-center dark:text-white">{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch({
                      type: 'UPDATE_QUANTITY',
                      payload: { id: item.id, quantity: item.quantity + 1 }
                    })
                  }
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  <Plus className="h-4 w-4 dark:text-gray-400" />
                </button>
              </div>

              <button
                onClick={() =>
                  dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })
                }
                className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg h-fit">
          <h3 className="text-xl font-semibold mb-4 dark:text-white">Order Summary</h3>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between dark:text-gray-300">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between dark:text-gray-300">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="border-t dark:border-gray-700 pt-2 font-semibold flex justify-between dark:text-white">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <Link
            to="/checkout"
            className="block w-full bg-teal-600 text-white text-center py-2 rounded hover:bg-teal-700"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};