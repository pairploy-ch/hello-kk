"use client"
import React from 'react';
import { Settings, ShoppingCart, ArrowUpRight } from 'lucide-react';

export default function TravelUI() {
  const destinations = [
    {
      name: 'Phuket',
      tours: '1 tour',
      image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=400&h=300&fit=crop&crop=faces',
      color: 'from-teal-400 to-teal-600'
    },
    {
      name: 'Lyon',
      tours: '1 tour', 
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&h=300&fit=crop&crop=faces',
      color: 'from-orange-300 to-orange-500'
    },
    {
      name: 'Marseille',
      tours: '1 tour',
      image: 'https://images.unsplash.com/photo-1518616435983-71071c6d553d?w=400&h=300&fit=crop&crop=faces',
      color: 'from-blue-400 to-blue-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
 
      {/* Main Content */}
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&h=1080&fit=crop')"
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
                    Discover the untouched<br />
                    <span className="font-medium">beauty of Vinh Hy</span>
                  </h1>
                  <p className="text-lg text-slate-200 leading-relaxed max-w-md">
                    Lorem ipsum dolor sit amet consectetur. Odio ut 
                    tellus neque pulvinar ridiculus nisl. Cras at luctus 
                    molestie pharetra in aliquet faucibus ornare vel.
                  </p>
                </div>
                
                <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  Explore Tours
                </button>
              </div>

              {/* Right Content - Destination Cards */}
              <div className="space-y-4">
                {destinations.map((destination, index) => (
                  <div
                    key={destination.name}
                    className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                      index === 1 ? 'translate-x-8' : index === 2 ? 'translate-x-16' : ''
                    }`}
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <img 
                        src={destination.image}
                        alt={destination.name}
                        className="w-80 h-48 object-cover group-hover:scale-110 transition-transform duration-700"
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
                    <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Pagination Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}