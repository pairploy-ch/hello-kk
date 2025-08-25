"use client"
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-2xl font-bold text-gray-900">hellokk</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-sm">
              Discover the best highlights, lifestyle tips, and property insights. Your gateway to exceptional living experiences.
            </p>
            <div className="space-y-2">
              <p className="text-gray-700 text-sm">
                <span className="font-medium">E.</span> hello@hellokk.com
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-medium">P.</span> (00) 238 9836
              </p>
            </div>
          </div>

          {/* Highlight Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Highlight</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Featured Stories</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Top Destinations</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Trending Now</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">{"Editor's Pick"}</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Special Features</a></li>
            </ul>
          </div>

          {/* Lifestyle Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Lifestyle</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Food & Dining</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Travel</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Wellness</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Culture</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Entertainment</a></li>
            </ul>
          </div>

          {/* Property Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Property</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Buy</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Rent</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Investment</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Market Trends</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Property Guide</a></li>
            </ul>
          </div>
        </div>

        {/* Connect Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <Facebook className="w-4 h-4" />
                  <span className="text-sm">Facebook</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <Instagram className="w-4 h-4" />
                  <span className="text-sm">Instagram</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <Twitter className="w-4 h-4" />
                  <span className="text-sm">Twitter</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <Youtube className="w-4 h-4" />
                  <span className="text-sm">Youtube</span>
                </a>
              </div>
              <div className="mt-4">
                <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm">Pinterest</span>
                </a>
              </div>
            </div>

            {/* Language/Currency Selector */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-300 rounded px-4 py-2 pr-8 text-sm text-gray-700 focus:outline-none focus:border-gray-400">
                  <option>EN / USD</option>
                  <option>TH / THB</option>
                  <option>JP / JPY</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact and Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="mb-4 md:mb-0">
              <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
              <p className="text-gray-600 text-sm">Get in touch with us for any inquiries or support.</p>
            </div>
            <a href="#contact" className="px-6 py-2 bg-teal-500 text-white text-sm rounded hover:bg-teal-600 transition-colors">
              Contact Us
            </a>
          </div>
          <div className="text-center pt-4 border-t border-gray-100">
            <p className="text-gray-500 text-sm">© 2025 HelloKK. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;