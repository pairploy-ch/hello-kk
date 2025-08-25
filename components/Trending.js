"use client"
import React, { useEffect, useRef } from 'react';
import { Heart, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TourCard = ({ title, subtitle, rating, reviewCount, price, tiktokUrl }) => {
  const embedRef = useRef(null);

  // Extract video ID from TikTok URL
  const extractVideoId = (url) => {
    const match = url.match(/\/video\/(\d+)/);
    return match ? match[1] : null;
  };

  const videoId = extractVideoId(tiktokUrl);

  useEffect(() => {
    // Load TikTok embed script
    if (window.TikTok) {
      window.TikTok.embed.create();
    } else {
      const script = document.createElement('script');
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  if (!videoId) {
    return (
      <div className="relative group cursor-pointer">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 aspect-[4/5] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-center">Invalid TikTok URL</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      <div className="relative overflow-hidden rounded-2xl bg-black aspect-[9/16] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
        {/* Heart icon */}
        <button className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors z-20">
          <Heart className="w-5 h-5 text-white" />
        </button>
        
        {/* TikTok Embed */}
        <div className="w-full h-full">
          <blockquote 
            className="tiktok-embed w-full h-full" 
            cite={tiktokUrl}
            data-video-id={videoId}
            data-embed-from="oembed"
          >
            <section>
              <a 
                target="_blank" 
                title="TikTok Video"
                href={tiktokUrl}
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500"
              >
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04.57z" fill="#000"/>
                    </svg>
                  </div>
                  <p className="text-sm">Loading TikTok Video...</p>
                </div>
              </a>
            </section>
          </blockquote>
        </div>
        
        {/* Info overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-10">
          <h3 className="text-white font-bold text-lg mb-1 leading-tight">
            {title}
          </h3>
          
  
        </div>
      </div>
    </div>
  );
};

const PopularToursSection = () => {
  const tours = [
    {
      title: "Amazing City Views",

      tiktokUrl: "https://www.tiktok.com/@evthingaboutcty/video/7513436417956023560?is_from_webapp=1&sender_device=pc&web_id=7494195039099930119"
    },
       {
      title: "Amazing City Views",

      tiktokUrl: "https://www.tiktok.com/@evthingaboutcty/video/7513436417956023560?is_from_webapp=1&sender_device=pc&web_id=7494195039099930119"
    },
       {
      title: "Amazing City Views",

      tiktokUrl: "https://www.tiktok.com/@evthingaboutcty/video/7513436417956023560?is_from_webapp=1&sender_device=pc&web_id=7494195039099930119"
    },
       {
      title: "Amazing City Views",

      tiktokUrl: "https://www.tiktok.com/@evthingaboutcty/video/7513436417956023560?is_from_webapp=1&sender_device=pc&web_id=7494195039099930119"
    },

  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Explore Popular Tours
          </h2>
          <p className="text-gray-600 text-lg">
            Watch TikTok videos of handpicked top rated trips.
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
            View All Tours
          </button>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Tour Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tours.map((tour, index) => (
          <TourCard
            key={index}
            title={tour.title}
            subtitle={tour.subtitle}
            rating={tour.rating}
            reviewCount={tour.reviewCount}
            price={tour.price}
            tiktokUrl={tour.tiktokUrl}
          />
        ))}
      </div>
      
 
    </div>
  );
};

export default PopularToursSection;