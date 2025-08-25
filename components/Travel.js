"use client"
import React, { useState } from 'react';
import { Settings, ShoppingCart, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TravelUI() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const destinations = [
    {
      name: 'พระมหาธาตุแก่นนคร',
      image: '/travel-1.webp',
      color: 'from-black-300 to-black-500'
    },
        {
      name: 'บึงแก่นนคร',
      image: '/travel-2.webp',
      color: 'from-black-300 to-black-500'
    },
            {
      name: 'สวนสัตว์ขอนแก่น',
      image: '/travel-3.webp',
      color: 'from-black-300 to-black-500'
    },


  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, destinations.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev === 0 ? Math.max(0, destinations.length - 3) : prev - 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getVisibleDestinations = () => {
    return destinations.slice(currentSlide, currentSlide + 3);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
 
      {/* Main Content */}
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/bg.webp')"
          }}
        >
          <div className="absolute inset-0 bg-slate-900/40"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center min-h-screen">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div className="text-white space-y-8">
                <div>
                  <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-6">
                    Discover the Heart<br />
                    <span className="font-medium">of Khon Kaen</span>
                  </h1>
                  <p className="text-lg text-slate-200 leading-relaxed max-w-md">
                    สัมผัสแลนด์มาร์ก ไลฟ์สไตล์ และกิจกรรมสนุก ๆ ของขอนแก่นในที่เดียว
                  </p>
                </div>
                
                <button className="bg-[none] border border-white text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  Explore
                </button>
              </div>

              {/* Right Content - Destination Cards Slider */}
              <div className="relative">
                {/* Cards Container */}
                <div className="space-y-4 transition-all duration-500 ease-in-out">
                  {getVisibleDestinations().map((destination, index) => (
                    <div
                      key={`${currentSlide}-${index}`}
                      className="relative group cursor-pointer transform transition-all duration-500 hover:scale-105"
                    >
                      <div className="relative overflow-hidden rounded-md shadow-2xl">
                        <img 
                          src={destination.image}
                          alt={destination.name}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${destination.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                        
                        {/* Card Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-2xl font-semibold mb-1">{destination.name}</h3>
                          <p className="text-sm opacity-90 mb-4">{destination.tours}</p>
                          
                          {/* Arrow Button */}
                          <div className="absolute bottom-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                            <ArrowUpRight className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-white/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  ))}
                </div>

                {/* Slide Indicators with Navigation Arrows */}
                {destinations.length > 3 && (
                  <div className="flex justify-center items-center mt-8 space-x-4">
                    {/* Previous Arrow */}
                    <button 
                      onClick={prevSlide}
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Dots */}
                    <div className="flex space-x-2">
                      {Array.from({ length: Math.max(1, destinations.length - 2) }).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            currentSlide === index ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Next Arrow */}
                    <button 
                      onClick={nextSlide}
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}