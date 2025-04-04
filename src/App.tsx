import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { Navbar } from './components/Navbar';
import { CategoryBar } from './components/CategoryBar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { About } from './pages/About';
import { Wishlist } from './pages/Wishlist';
import { Offers } from './pages/Offers';
import { Sale } from './pages/Sale';
import { FAQ } from './pages/FAQ';
import { ShippingInfo } from './pages/ShippingInfo';
import { Returns } from './pages/Returns';
import { TrackOrder } from './pages/TrackOrder';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Profile } from './pages/Profile';
import { Orders } from './pages/Orders';
import { Settings } from './pages/Settings';
import { Contact } from './pages/Contact';
import { Preloader } from './components/Preloader';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <Preloader />}
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <ThemeProvider>
        <CartProvider>
          <WishlistProvider>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col text-gray-900 dark:text-gray-100">
              <ScrollToTop />
              <ScrollToTopButton />
              <Navbar />
              <CategoryBar />
              <main className="flex-1">
                <PageWrapper>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/offers" element={<Offers />} />
                    <Route path="/sale" element={<Sale />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/shipping" element={<ShippingInfo />} />
                    <Route path="/returns" element={<Returns />} />
                    <Route path="/track-order" element={<TrackOrder />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<BlogPost />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </PageWrapper>
              </main>
              <Footer />
            </div>
          </WishlistProvider>
        </CartProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;