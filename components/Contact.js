"use client"
import React from 'react';
import { Facebook, Twitter, Linkedin, CheckCircle } from 'lucide-react';

const DarwinProfile = () => {
  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
                {/* Header */}
        <div className="text-center mb-16 space-y-6">
       
          <h1 className=" text-5xl lg:text-6xl font-light leading-tight mb-6">
            About Us
            <br />
            <span className="font-medium text-blue-500">Talk to Sipim</span>
          </h1>
          {/* <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent leading-tight">
            Khon Kaen
            <br /> */}
          {/* <span style={{background: 'linear-gradient(to right, #22E9A2, #07A1EA)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Highlights</span> */}
          {/* </h1> */}

    
        </div>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Side - Image */}
            <div className="">
              
              <div className="w-full h-full">
                <img 
                  src="/sipim.jpg" 
                  alt="sipim"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="p-8 lg:p-12">
              <div className="space-y-8">
                {/* Name */}
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                 Sipim Piwatthongchai
                </h1>

                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipis cing elit. In 
                  ut elit taras tellus luctus neul tam corper imat tis pulvinar pbus leo dota 
                  un te tas luco tamco vinup niato, lemar supim lor dowr amet taren.
                </p>

                {/* Social Links */}
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                    <Facebook size={20} className="text-gray-700" />
                  </a>
                  <a href="#" className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                    <Twitter size={20} className="text-gray-700" />
                  </a>
                  <a href="#" className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                    <Linkedin size={20} className="text-gray-700" />
                  </a>
                </div>

                {/* Experience Section */}
                <div className="space-y-6">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    Sipim Experience
                  </h2>

                  <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipis cing elit. In 
                    ut elit taras tellus luctus neul tam corper imat tis pulvinar pbus leo
                  </p>

                  {/* Experience Points */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle size={24} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-lg">
                        Over 15 years of experience in the technology industry
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle size={24} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-lg">
                        Before founding the company, Founder A served as a Manager
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle size={24} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-lg">
                        Holds patents for technological innovations that led the industry
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Button */}
                <div className="pt-4">
                  <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-md">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default DarwinProfile;