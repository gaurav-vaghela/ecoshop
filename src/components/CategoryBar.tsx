import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Laptop, 
  Home, 
  ShoppingBag, 
  Leaf, 
  Baby, 
  Shirt, 
  Watch, 
  Gift,
  BookOpen,
  Dumbbell,
  Coffee,
  Palette
} from 'lucide-react';

const categories = [
  { icon: Laptop, name: 'Electronics', link: '/products?category=Electronics' },
  { icon: Home, name: 'Home & Living', link: '/products?category=Home' },
  { icon: ShoppingBag, name: 'Accessories', link: '/products?category=Accessories' },
  { icon: Leaf, name: 'Eco-Friendly', link: '/products?category=EcoFriendly' },
  { icon: Baby, name: 'Kids', link: '/products?category=Kids' },
  { icon: Shirt, name: 'Fashion', link: '/products?category=Fashion' },
  { icon: Watch, name: 'Watches', link: '/products?category=Watches' },
  { icon: Gift, name: 'Gifts', link: '/products?category=Gifts' },
  { icon: BookOpen, name: 'Books', link: '/products?category=Books' },
  { icon: Dumbbell, name: 'Sports', link: '/products?category=Sports' },
  { icon: Coffee, name: 'Kitchen', link: '/products?category=Kitchen' },
  { icon: Palette, name: 'Art', link: '/products?category=Art' }
];

export const CategoryBar = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center">
          <div className="overflow-x-auto scrollbar-hide py-4">
            <div className="flex space-x-8 min-w-max">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  to={category.link}
                  className="flex flex-col items-center gap-1 group min-w-[64px]"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:bg-teal-50 dark:group-hover:bg-teal-900/20 transition-colors">
                    <category.icon className="h-6 w-6 text-gray-600 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400" />
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 text-center">
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};