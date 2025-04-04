import React, { useEffect } from 'react';
import { Check, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-slide-up">
      <div className={`flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg ${
        type === 'success' 
          ? 'bg-teal-600 text-white' 
          : 'bg-red-600 text-white'
      }`}>
        <div className="flex items-center gap-2">
          {type === 'success' ? (
            <Check className="h-5 w-5" />
          ) : (
            <X className="h-5 w-5" />
          )}
          <p>{message}</p>
        </div>
        <button 
          onClick={onClose}
          className="ml-4 hover:opacity-80"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};