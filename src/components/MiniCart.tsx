import React from 'react';
import { useCart } from '../context/CartContext';
import { X, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MiniCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MiniCart: React.FC<MiniCartProps> = ({ isOpen, onClose }) => {
  const { state, dispatch } = useCart();
  const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog">
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />
      
      <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-white dark:bg-gray-800 shadow-xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <h2 className="text-lg font-semibold dark:text-white">Shopping Cart</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
            <X className="h-5 w-5 dark:text-gray-400" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400">
              <ShoppingBag className="h-12 w-12 mb-4" />
              <p>Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map(item => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium dark:text-white">{item.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Qty: {item.quantity}</p>
                    <p className="text-teal-600 dark:text-teal-400">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
                    className="text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {state.items.length > 0 && (
          <div className="border-t dark:border-gray-700 p-4 space-y-4">
            <div className="flex justify-between text-lg font-semibold dark:text-white">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Link
                to="/cart"
                onClick={onClose}
                className="text-center px-4 py-2 border-2 border-teal-600 dark:border-teal-500 text-teal-600 dark:text-teal-400 rounded hover:bg-teal-50 dark:hover:bg-teal-900/20"
              >
                View Cart
              </Link>
              <Link
                to="/checkout"
                onClick={onClose}
                className="text-center px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
              >
                Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};