import React from 'react';
import { Shield } from 'lucide-react';

export const BrandsSection = () => {
  const brands = [
    { 
      name: 'AudioTech', 
      logo: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=400',
      description: 'Premium Audio Equipment'
    },
    { 
      name: 'TechFit', 
      logo: 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?w=400',
      description: 'Smart Fitness Gear'
    },
    { 
      name: 'LightCraft', 
      logo: 'https://images.unsplash.com/photo-1542393545-10f5cde2c810?w=400',
      description: 'Modern Lighting Solutions'
    },
    { 
      name: 'EcoWare', 
      logo: 'https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=400',
      description: 'Sustainable Home Products'
    },
    { 
      name: 'GreenLife', 
      logo: 'https://images.unsplash.com/photo-1587387119725-9d6bac0f22fb?w=400',
      description: 'Eco-friendly Lifestyle'
    },
    { 
      name: 'PureHome', 
      logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
      description: 'Natural Home Solutions'
    }
  ];

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-teal-600 dark:text-teal-400" />
            <h2 className="text-3xl font-bold dark:text-white">Trusted Brands</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300">We partner with the best to bring you quality products</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-all group"
            >
              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">{brand.name}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-1">{brand.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};