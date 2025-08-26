"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animatingRating, setAnimatingRating] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    // Animate rating number
    const timer = setTimeout(() => {
      let current = 0;
      const target = 4.9;
      const increment = target / 30;
      const ratingTimer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(ratingTimer);
        }
        setAnimatingRating(current);
      }, 50);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur. Eget pharetra et ipsum sem sagittis amet sagittis. Amet maecenas eu mauris rhoncus at posuere suspendisse purus. Egestas morbi aliquet sagittis dictum. Sed eget leo enim eget non tellus in amet.",
      author: "John Doe",
      position: "CEO, Company Name",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop&crop=center"
    },
    // {
    //   id: 2,
    //   rating: 5,
    //   text: "Amazing experience with this travel company! The service was exceptional and the destinations were breathtaking. I would definitely recommend them to anyone looking for an unforgettable adventure.",
    //   author: "Sarah Johnson",
    //   position: "Travel Blogger",
    //   avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    //   image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=600&h=400&fit=crop&crop=center"
    // },
    {
      id: 3,
      rating: 5,
      text: "Professional service from start to finish. Every detail was perfectly planned and executed. The team made our family vacation truly memorable and stress-free.",
      author: "Michael Chen",
      position: "Marketing Director",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop&crop=center"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center justify-center mb-6">
            <Star className="w-8 h-8 text-blue-500 mr-3" fill="currentColor" />
            <span className="text-lg font-medium text-gray-600 uppercase tracking-wider">
              TESTIMONIAL
            </span>
          </div>
          
    <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-6">
            Hear From Those Who Live
            <br />
            <span className="font-medium">in Khon Kaen</span>
          </h1>
          
      
        </div>

        {/* Main Content */}
        <div className={`transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Testimonial Card */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Stars */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 transition-all duration-300 ${
                        i < currentTestimonial.rating
                          ? 'text-blue-500 scale-110'
                          : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 text-lg leading-relaxed mb-8 line-height-loose">
                  {currentTestimonial.text}
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.author}
                      className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100 transition-all duration-300 hover:ring-blue-200"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <Star className="w-3 h-3 text-white" fill="currentColor" />
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg">
                      {currentTestimonial.author}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {currentTestimonial.position}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-blue-500 transition-colors duration-200" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 bg-blue-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group hover:bg-blue-600"
                >
                  <ChevronRight className="w-5 h-5 text-white transition-colors duration-200" />
                </button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={currentTestimonial.image}
                  alt="Travel experience"
                  className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Floating Rating Badge */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-blue-500" fill="currentColor" />
                    <span className="font-semibold text-gray-800">
                      {currentTestimonial.rating}.0
                    </span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-cyan-400 rounded-full opacity-60 animate-bounce"></div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

     
      </div>
    </div>
  );
};

export default TestimonialSection;