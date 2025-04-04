import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600',
    title: 'New Collection 2024',
    subtitle: 'Discover the latest trends in fashion and technology',
    cta: 'Shop Now',
    link: '/products'
  },
  {
    url: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1600',
    title: 'Premium Lifestyle',
    subtitle: 'Elevate your everyday with premium quality products',
    cta: 'Explore More',
    link: '/products'
  },
  {
    url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600',
    title: 'Special Offers',
    subtitle: 'Up to 50% off on selected items',
    cta: 'View Deals',
    link: '/offers'
  }
];

export const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const goToSlide = useCallback((index: number) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 1000); // Match the transition duration
    }
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      goToSlide((currentSlide + 1) % slides.length);
    }
  }, [currentSlide, goToSlide, isAnimating]);

  const prevSlide = useCallback(() => {
    if (!isAnimating) {
      goToSlide((currentSlide - 1 + slides.length) % slides.length);
    }
  }, [currentSlide, goToSlide, isAnimating]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="relative h-[600px] overflow-hidden" role="region" aria-label="Image Slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 transform ${
            index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
          }`}
          aria-hidden={index !== currentSlide}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.url})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
              <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="max-w-xl text-white space-y-6">
                  <h2 
                    className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in"
                    style={{
                      opacity: index === currentSlide ? 1 : 0,
                      transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'opacity 0.5s ease-out 0.5s, transform 0.5s ease-out 0.5s'
                    }}
                  >
                    {slide.title}
                  </h2>
                  <p 
                    className="text-xl md:text-2xl text-gray-200"
                    style={{
                      opacity: index === currentSlide ? 1 : 0,
                      transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'opacity 0.5s ease-out 0.7s, transform 0.5s ease-out 0.7s'
                    }}
                  >
                    {slide.subtitle}
                  </p>
                  <button
                    onClick={() => navigate(slide.link)}
                    className="bg-teal-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-teal-700 transition-colors transform hover:scale-105"
                    style={{
                      opacity: index === currentSlide ? 1 : 0,
                      transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'opacity 0.5s ease-out 0.9s, transform 0.5s ease-out 0.9s'
                    }}
                  >
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Previous slide"
        disabled={isAnimating}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Next slide"
        disabled={isAnimating}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide}
            disabled={isAnimating}
          />
        ))}
      </div>
    </div>
  );
};