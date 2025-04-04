import React, { useState, useRef, useEffect } from 'react';
import { ShoppingCart, Menu, X, Search, Heart, UserCircle } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { MiniCart } from './MiniCart';
import { UserMenu } from './UserMenu';
import { products } from '../data/products';

export const Navbar = () => {
  const { state } = useCart();
  const { state: wishlistState } = useWishlist();
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = wishlistState.items.length;

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const getMenuEmoji = (path: string) => {
    const emojis: { [key: string]: string } = {
      '/': '🏠',
      '/products': '🛍️',
      '/blog': '📝',
      '/offers': '🎁'
    };
    return isActive(path) ? emojis[path] : '';
  };

  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 5);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchFocus = () => {
    if (searchQuery.trim()) {
      setShowSearchResults(true);
    }
  };

  const handleProductClick = (productId: number) => {
    setShowSearchResults(false);
    setSearchQuery('');
    navigate(`/products/${productId}`);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/blog', label: 'Blog' },
    { path: '/offers', label: 'Offers' }
  ];

  return (
    <>
      <nav className="bg-teal-600 text-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="font-bold text-2xl tracking-tight">EcoShop</Link>
            
            <div className="hidden md:flex items-center flex-1 max-w-xl mx-8">
              <div className="relative w-full" ref={searchRef}>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSearchResults(!!e.target.value.trim());
                  }}
                  onFocus={handleSearchFocus}
                  className="w-full pl-10 pr-10 py-2 rounded-full bg-teal-700 text-white placeholder-teal-200 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-teal-200" />
                
                {showSearchResults && searchQuery.trim() && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg overflow-hidden">
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map(product => (
                        <button
                          key={product.id}
                          onClick={() => handleProductClick(product.id)}
                          className="w-full flex items-center gap-4 p-3 hover:bg-gray-50 transition-colors text-left"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div className="flex-1 min-w-0">
                            <h3 className="text-gray-900 font-medium truncate">
                              {product.name}
                            </h3>
                            <p className="text-gray-500 text-sm truncate">
                              {product.category}
                            </p>
                          </div>
                          <span className="text-teal-600 text-sm font-medium">
                            View
                          </span>
                        </button>
                      ))
                    ) : (
                      <div className="p-4 text-center text-gray-500">
                        No products found
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors flex items-center gap-2 ${
                    isActive(link.path)
                      ? 'text-white font-medium'
                      : 'text-teal-100 hover:text-white'
                  }`}
                >
                  {link.label}
                  {getMenuEmoji(link.path) && (
                    <span className="animate-bounce">{getMenuEmoji(link.path)}</span>
                  )}
                </Link>
              ))}
              <Link
                to="/wishlist"
                className={`relative transition-colors ${
                  isActive('/wishlist')
                    ? 'text-white'
                    : 'text-teal-100 hover:text-white'
                }`}
              >
                <Heart className="h-6 w-6" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setIsMiniCartOpen(true)}
                className="relative text-teal-100 hover:text-white transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {itemCount}
                  </span>
                )}
              </button>
              <UserMenu isAuthenticated={localStorage.getItem('isAuthenticated') === 'true'} />
            </div>

            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={() => setIsMiniCartOpen(true)}
                className="relative text-teal-100 hover:text-white transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {itemCount}
                  </span>
                )}
              </button>
              <UserMenu isAuthenticated={localStorage.getItem('isAuthenticated') === 'true'} />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-teal-100 hover:text-white"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-teal-700 px-4 py-4">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSearchResults(!!e.target.value.trim());
                }}
                onFocus={handleSearchFocus}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-teal-800 text-white placeholder-teal-200 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-teal-200" />
              
              {showSearchResults && searchQuery.trim() && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg overflow-hidden z-50">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                      <button
                        key={product.id}
                        onClick={() => {
                          handleProductClick(product.id);
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full flex items-center gap-4 p-3 hover:bg-gray-50 transition-colors text-left"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-gray-900 font-medium truncate">
                            {product.name}
                          </h3>
                          <p className="text-gray-500 text-sm truncate">
                            {product.category}
                          </p>
                        </div>
                        <span className="text-teal-600 text-sm font-medium">
                          View
                        </span>
                      </button>
                    ))
                  ) : (
                    <div className="p-4 text-center text-gray-500">
                      No products found
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="flex flex-col space-y-3">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors flex items-center gap-2 ${
                    isActive(link.path)
                      ? 'text-white font-medium'
                      : 'text-teal-100 hover:text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                  {getMenuEmoji(link.path) && (
                    <span className="animate-bounce">{getMenuEmoji(link.path)}</span>
                  )}
                </Link>
              ))}
              <Link
                to="/wishlist"
                className={`flex items-center space-x-2 transition-colors ${
                  isActive('/wishlist')
                    ? 'text-white font-medium'
                    : 'text-teal-100 hover:text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Heart className="h-6 w-6" />
                <span>Wishlist ({wishlistCount})</span>
              </Link>
            </div>
          </div>
        )}
      </nav>

      <MiniCart isOpen={isMiniCartOpen} onClose={() => setIsMiniCartOpen(false)} />
    </>
  );
};