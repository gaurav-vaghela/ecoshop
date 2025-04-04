import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  category: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Ultimate Guide to Sustainable Living",
    excerpt: "Discover practical tips and strategies for adopting a more sustainable lifestyle without compromising on comfort or style.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800",
    author: {
      name: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
    },
    date: "March 15, 2024",
    category: "Sustainability",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Eco-Friendly Home Decor Trends for 2024",
    excerpt: "Explore the latest trends in sustainable home decor and learn how to create a beautiful, environmentally conscious living space.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800",
    author: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
    },
    date: "March 12, 2024",
    category: "Home & Decor",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Zero-Waste Shopping: A Beginner's Guide",
    excerpt: "Learn how to reduce your environmental impact through smart shopping choices and zero-waste alternatives.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
    },
    date: "March 10, 2024",
    category: "Lifestyle",
    readTime: "6 min read"
  }
];

export const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover tips, guides, and insights about sustainable living and eco-friendly products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <Link to={`/blog/${post.id}`} className="block">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </Link>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm text-teal-600 font-medium">{post.category}</span>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
              </div>
              <Link to={`/blog/${post.id}`}>
                <h2 className="text-xl font-bold mb-2 hover:text-teal-600 transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm text-gray-600">{post.author.name}</span>
                </div>
                <span className="text-sm text-gray-500">{post.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};