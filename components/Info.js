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
      number: '1.8M+',
      label: "จำนวนประชากร",
      delay: "delay-100"
    },
    {
      number: '204,000M+',
      label: "GDP จังหวัด",
      delay: "delay-200"
    },
    {
      number: '136',
      label: "โครงการ Smart City",
      delay: "delay-300"
    },
    {
      number: '135',
      label: "มหาวิทยาลัย",
      delay: "delay-400"
    }
  ];

  return (
    <div className=" bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
 
    
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16">
            {/* Header */}
        <div className="text-center mb-16 space-y-6">
       
           <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-6">
                    The Rising Smart City of Isan<br />
                    <span className="font-medium">Khon Kaen</span>
                  </h1>
          {/* <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent leading-tight">
            Khon Kaen
            <br /> */}
            {/* <span style={{background: 'linear-gradient(to right, #22E9A2, #07A1EA)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Highlights</span> */}
          {/* </h1> */}
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
           ศูนย์กลางเศรษฐกิจ การศึกษา และการลงทุนแห่งภาคอีสาน
           
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
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#07A1EA] to-[#22E9A2] bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300 font-mono tabular-nums">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-base md:text-lg font-medium leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

 
      </div>

    </div>
  );
};

export default TravelStatsSection;