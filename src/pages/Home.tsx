import React from 'react';
import { ImageSlider } from '../components/ImageSlider';
import { OfferSection } from '../components/OfferSection';
import { TrendingSection } from '../components/TrendingSection';
import { BrandsSection } from '../components/BrandsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ArrowRight, Leaf, ShieldCheck, Truck, Recycle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const categories = [
    {
      name: "Eco-Friendly Electronics",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
      description: "Sustainable tech for modern living",
      link: "/products?category=Electronics"
    },
    {
      name: "Sustainable Home",
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800", 
      description: "Eco-conscious home essentials",
      link: "/products?category=Home"
    },
    {
      name: "Green Living",
      image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800",
      description: "Everyday sustainable choices",
      link: "/products?category=Lifestyle"
    },
    {
      name: "Zero Waste",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800",
      description: "Plastic-free alternatives",
      link: "/products?category=ZeroWaste"
    }
  ];

  const blogPosts = [
    {
      title: "Living Sustainably in 2024",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800",
      excerpt: "Discover practical tips for a more eco-conscious lifestyle.",
      date: "March 15, 2024"
    },
    {
      title: "The Future of Green Tech",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800",
      excerpt: "Exploring innovative sustainable technology solutions.",
      date: "March 12, 2024"
    },
    {
      title: "Zero Waste Home Guide",
      image: "https://images.unsplash.com/photo-1517260739337-6799d239ce83?w=800",
      excerpt: "Transform your home with these eco-friendly tips.",
      date: "March 10, 2024"
    }
  ];

  return (
    <div>
      <ImageSlider />
      
      <OfferSection />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-24">
          <div>
            <span className="text-teal-600 dark:text-teal-400 font-medium">Welcome to EcoShop</span>
            <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-900 dark:text-white">
              Discover Sustainable Living with Our Premium Collection
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We curate the finest eco-friendly products to help you make sustainable choices 
              without compromising on quality or style. From everyday essentials to luxury items, 
              find everything you need for a greener lifestyle.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Shop Now
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"
              alt="Eco-friendly Products"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent rounded-lg" />
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Shop by Category</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our curated collection of sustainable products across various categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group relative overflow-hidden rounded-lg aspect-square"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:from-black/90 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-gray-200 text-sm mb-4">{category.description}</p>
                  <span className="inline-flex items-center text-sm font-medium text-teal-400 group-hover:text-teal-300">
                    Shop Now <ArrowRight className="h-4 w-4 ml-2" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <TrendingSection />

        <div className="bg-teal-600 dark:bg-teal-800 text-white py-16 -mx-4 px-4 my-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">10K+</div>
                <p className="text-teal-100">Happy Customers</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <p className="text-teal-100">Products Available</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <p className="text-teal-100">Satisfaction Rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <p className="text-teal-100">Eco-friendly Brands</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Our Commitment to Sustainability</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We believe in making eco-friendly choices accessible to everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-lg font-semibold mb-3 dark:text-white">Eco-Friendly Products</h3>
              <p className="text-gray-600 dark:text-gray-400">Carefully curated products that minimize environmental impact</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="h-8 w-8 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-lg font-semibold mb-3 dark:text-white">Quality Assured</h3>
              <p className="text-gray-600 dark:text-gray-400">Rigorous testing ensures the highest quality standards</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="h-8 w-8 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-lg font-semibold mb-3 dark:text-white">Sustainable Shipping</h3>
              <p className="text-gray-600 dark:text-gray-400">Eco-friendly packaging and carbon-neutral delivery options</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Recycle className="h-8 w-8 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-lg font-semibold mb-3 dark:text-white">Zero Waste</h3>
              <p className="text-gray-600 dark:text-gray-400">Committed to reducing waste in our operations</p>
            </div>
          </div>
        </div>

        <BrandsSection />

        <TestimonialsSection />

        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Latest from Our Blog</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Stay informed about sustainable living and eco-friendly practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                to="/blog"
                className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-teal-600 dark:text-white">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium"
            >
              View All Posts
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 py-16 -mx-4 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 dark:text-white">Subscribe to Our Newsletter</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Stay updated with our latest products, exclusive offers, and eco-friendly tips.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                  <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="relative h-64 md:h-96">
                <img
                  src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800"
                  alt="Newsletter"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600/50 to-transparent rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};