import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import { ShareButton } from '../components/ShareButton';

const blogPost = {
  id: 1,
  title: "The Ultimate Guide to Sustainable Living",
  content: `
    <p>Sustainable living has become more than just a trend; it's a necessary shift in lifestyle that helps preserve our planet for future generations. In this comprehensive guide, we'll explore practical ways to incorporate sustainability into your daily life.</p>

    <h2>1. Reduce Your Carbon Footprint</h2>
    <p>Start by making small changes in your daily routine:</p>
    <ul>
      <li>Use public transportation or bike when possible</li>
      <li>Switch to energy-efficient appliances</li>
      <li>Reduce meat consumption</li>
      <li>Choose local and seasonal products</li>
    </ul>

    <h2>2. Minimize Waste</h2>
    <p>Adopting a zero-waste lifestyle might seem challenging, but these simple steps can help:</p>
    <ul>
      <li>Use reusable bags, containers, and water bottles</li>
      <li>Compost organic waste</li>
      <li>Recycle properly</li>
      <li>Buy products with minimal packaging</li>
    </ul>

    <h2>3. Sustainable Home Solutions</h2>
    <p>Transform your living space into an eco-friendly environment:</p>
    <ul>
      <li>Install solar panels</li>
      <li>Use natural cleaning products</li>
      <li>Implement water-saving fixtures</li>
      <li>Choose sustainable materials for furniture and decor</li>
    </ul>
  `,
  image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200",
  author: {
    name: "Emma Wilson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    bio: "Environmental specialist and sustainable living advocate"
  },
  date: "March 15, 2024",
  category: "Sustainability",
  readTime: "5 min read",
  relatedPosts: [
    {
      id: 2,
      title: "Eco-Friendly Home Decor Trends for 2024",
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400"
    },
    {
      id: 3,
      title: "Zero-Waste Shopping: A Beginner's Guide",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400"
    }
  ]
};

export const BlogPost = () => {
  const { id } = useParams();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link
        to="/blog"
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Blog
      </Link>

      <article>
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm text-teal-600 font-medium">{blogPost.category}</span>
            <span className="text-sm text-gray-500 flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {blogPost.date}
            </span>
            <span className="text-sm text-gray-500">{blogPost.readTime}</span>
          </div>
          <h1 className="text-4xl font-bold mb-6">{blogPost.title}</h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={blogPost.author.avatar}
                alt={blogPost.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-medium">{blogPost.author.name}</div>
                <div className="text-sm text-gray-600">{blogPost.author.bio}</div>
              </div>
            </div>
            <ShareButton
              title={blogPost.title}
              description="Check out this interesting article about sustainable living"
              url={window.location.href}
            />
          </div>
        </div>

        <div className="mb-8">
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPost.relatedPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group block bg-white rounded-lg overflow-hidden shadow-sm"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium group-hover:text-teal-600 transition-colors">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};