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



  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Single Background Image */}
      <div className="absolute inset-0">
        <img
          src="/bg-invest.jpg"
          alt="Travel destination"
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-cyan-900/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className={`text-center max-w-4xl mx-auto transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Header */}
        <div className="text-center mb-16 space-y-6">
       
          <h1 className="text-white text-5xl lg:text-6xl font-light leading-tight mb-6">
            Invest in Khon Kaen
            <br />
            <span className="font-medium text-white">Growth, Opportunity, Future</span>
          </h1>
          {/* <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent leading-tight">
            Khon Kaen
            <br /> */}
          {/* <span style={{background: 'linear-gradient(to right, #22E9A2, #07A1EA)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Highlights</span> */}
          {/* </h1> */}

          <p className="text-white text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
           ลงทุนในอสังหาริมทรัพย์ขอนแก่น เมืองมหาวิทยาลัยและศูนย์กลางธุรกิจอีสาน <br></br> ที่มูลค่าเพิ่มขึ้นต่อเนื่อง
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