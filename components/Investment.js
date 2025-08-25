"use client"
import React, { useState, useEffect } from 'react';
import { Send, Mail } from 'lucide-react';

const TravelNewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = () => {
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  // Mock travel photos for the collage background
  const travelImages = [
    "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1502780402662-acc01917949e?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1471919743851-c4df8b6ee133?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1526400473556-aac12354f3db?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1527004760525-b3a2652ead96?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=300&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1505832018823-50331d70d237?w=300&h=200&fit=crop&crop=center"
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Single Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center"
          alt="Travel destination"
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-cyan-900/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className={`text-center max-w-2xl mx-auto transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Join Our Travel
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Community
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-4 leading-relaxed">
              Travel Tips, promotions and special deals.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Directly to your inbox.
            </p>
          </div>

          {/* Email Subscription Form */}
          <div className="mb-8">
            <div className="relative max-w-lg mx-auto">
              <div className="flex items-center bg-white/95 backdrop-blur-sm rounded-full shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 hover:bg-white">
                <div className="flex items-center pl-6 text-gray-400">
                  <Mail className="w-5 h-5 mr-3" />
                </div>
                
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 py-4 px-2 text-gray-800 placeholder-gray-500 bg-transparent outline-none text-base md:text-lg"
                />
                
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitted}
                  className={`m-2 p-3 rounded-full transition-all duration-300 ${
                    isSubmitted
                      ? 'bg-green-500 text-white scale-110'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 hover:scale-110 hover:shadow-lg'
                  }`}
                >
                  {isSubmitted ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Send className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Success Message */}
          {isSubmitted && (
            <div className="animate-fade-in">
              <div className="inline-flex items-center bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-3 text-green-300">
                <div className="w-4 h-4 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="font-medium">Thank you for subscribing! ✈️</span>
              </div>
            </div>
          )}

          {/* Social Proof */}
          <div className={`mt-12 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}>
            <div className="flex items-center justify-center space-x-8 text-white/80">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300">50K+</div>
                <div className="text-sm">Subscribers</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-300">100+</div>
                <div className="text-sm">Destinations</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">Weekly</div>
                <div className="text-sm">Updates</div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className={`mt-8 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}>
            <p className="text-sm text-gray-400 mb-4">
              Trusted by travelers worldwide • No spam, unsubscribe anytime
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-blue-400/60 rounded-full animate-bounce opacity-70"></div>
      <div className="absolute top-32 right-16 w-2 h-2 bg-cyan-400/60 rounded-full animate-pulse opacity-70"></div>
      <div className="absolute bottom-20 left-16 w-4 h-4 bg-blue-300/60 rounded-full animate-bounce opacity-70" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 right-10 w-2 h-2 bg-cyan-300/60 rounded-full animate-pulse opacity-70" style={{animationDelay: '2s'}}></div>
    </div>
  );
};

export default TravelNewsletterSection;