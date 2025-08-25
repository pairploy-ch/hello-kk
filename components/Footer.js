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
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-2xl font-bold text-gray-900">togo</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-sm">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
            </p>
            <div className="space-y-2">
              <p className="text-gray-700 text-sm">
                <span className="font-medium">E.</span> hello@yoursite.com
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-medium">P.</span> (00) 238 9836
              </p>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">About us</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Career</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Partner</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Tour booking</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Visa online</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Travel guide</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Car service</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Sim and card</a></li>
            </ul>
          </div>

          {/* Need Help Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Need help?</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Customer care</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Safety trip</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Privacy policy</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Terms of use</a></li>
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

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">© 2025 Uxper. All right reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;