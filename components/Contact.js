"use client"
import React, { useState } from 'react';

export default function BlueSignupForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    phoneNumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-cyan-200 rounded-full opacity-10"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center relative z-10">
        
        {/* Left side - Welcome content */}
        <div className="space-y-8">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-gray-800">BlueTech</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-gray-800 leading-tight">
              Get started with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                BlueTech.
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-md">
              Answer a couple of questions to make sure your business is a good fit.
            </p>
          </div>

          {/* Testimonial */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold">
                JW
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="font-semibold text-gray-800">Jeremy Wilson</h4>
                  <span className="text-sm text-gray-500">Founder @ Elite</span>
                </div>
                <p className="text-gray-600 italic">
                  "The pricing transparency and feature offerings exceeded our expectations. BlueTech transformed our workflow."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Let's start with the basics</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-semibold text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-semibold text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="johndoe@gmail.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="companyName" className="text-sm font-semibold text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Your Company"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phoneNumber" className="text-sm font-semibold text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Continue
            </button>
          </div>

          {/* Additional info */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              By continuing, you agree to our{' '}
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}