"use client"
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Settings } from 'lucide-react';

const TravelStatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    customers: 0,
    tours: 0,
    countries: 0,
    partners: 0
  });
  const [hasStartedCounting, setHasStartedCounting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation function for counting up numbers
  const animateCounter = (start, end, duration, callback) => {
    const startTime = performance.now();
    const range = end - start;
    
    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + range * easeOutCubic);
      
      callback(current);
      
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        callback(end);
      }
    };
    
    requestAnimationFrame(step);
  };

  // Start counting animation when component becomes visible
  useEffect(() => {
    if (isVisible && !hasStartedCounting) {
      setHasStartedCounting(true);
      
      // Animate each counter with different durations and delays
      setTimeout(() => {
        animateCounter(0, 10000, 2000, (value) => {
          setCounters(prev => ({ ...prev, customers: value }));
        });
      }, 500);

      setTimeout(() => {
        animateCounter(0, 5000, 2200, (value) => {
          setCounters(prev => ({ ...prev, tours: value }));
        });
      }, 700);

      setTimeout(() => {
        animateCounter(0, 30, 1800, (value) => {
          setCounters(prev => ({ ...prev, countries: value }));
        });
      }, 900);

      setTimeout(() => {
        animateCounter(0, 200, 2500, (value) => {
          setCounters(prev => ({ ...prev, partners: value }));
        });
      }, 1100);
    }
  }, [isVisible, hasStartedCounting]);

  // Format numbers with commas and + sign
  const formatNumber = (num, showPlus = true) => {
    const formatted = num.toLocaleString();
    return showPlus ? `${formatted}+` : formatted;
  };

  const stats = [
    {
      number: formatNumber(counters.customers),
      label: "Happy customers",
      delay: "delay-100"
    },
    {
      number: formatNumber(counters.tours),
      label: "Tours and activities",
      delay: "delay-200"
    },
    {
      number: formatNumber(counters.countries),
      label: "Countries around the globe",
      delay: "delay-300"
    },
    {
      number: formatNumber(counters.partners),
      label: "Local Partners",
      delay: "delay-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-50 rounded-full opacity-40 blur-2xl"></div>
      </div>

    
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
        {/* Main heading */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            We're here to introduce you to all
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              the places out there
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            There are many variations of passages of Lorem Ipsum
            <br />
            available, but the majority have suffered
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} ${stat.delay}`}
            >
              <div className="bg-white/70 backdrop-blur-sm border-2 border-blue-200/50 rounded-3xl p-8 text-center hover:border-blue-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300 font-mono tabular-nums">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-base md:text-lg font-medium leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>

                {/* Decorative corner element */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 group-hover:scale-150 group-hover:opacity-30 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:from-blue-600 hover:to-cyan-600">
            Explore Our Tours
          </button>
          <p className="mt-4 text-gray-500 text-sm">
            Join thousands of satisfied travelers worldwide
          </p>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-20 w-5 h-5 bg-blue-600 rounded-full animate-pulse opacity-60" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 right-10 w-2 h-2 bg-blue-500 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
    </div>
  );
};

export default TravelStatsSection;