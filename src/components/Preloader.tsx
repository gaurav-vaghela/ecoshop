import React from 'react';

export const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 z-50 flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-teal-100 border-t-teal-600 rounded-full animate-spin" />
        <div className="w-16 h-16 border-4 border-transparent border-b-teal-600 rounded-full animate-spin absolute top-0 left-0" style={{ animationDirection: 'reverse', animationDuration: '1s' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-teal-600 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};