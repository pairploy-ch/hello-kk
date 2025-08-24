"use client"
import React, { useState } from 'react';
import { ChevronDown, Phone, User, Menu, X, Globe } from 'lucide-react';

export default function HouzezNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState('TH');

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'TH' ? 'EN' : 'TH');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (menuName) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  const NavItem = ({ title, hasDropdown = false, menuName, dropdownItems = [] }) => (
    <div className="relative group">
      <button
        className="flex items-center space-x-1 px-4 py-2 text-white hover:text-blue-200 transition-colors duration-200 font-medium"
        onClick={() => hasDropdown && toggleDropdown(menuName)}
      >
        <span>{title}</span>
        {hasDropdown && (
          <ChevronDown 
            size={16} 
            className={`transition-transform duration-200 ${
              activeDropdown === menuName ? 'rotate-180' : ''
            }`}
          />
        )}
      </button>
      
      {hasDropdown && (
        <div className={`absolute top-full left-0 w-64 bg-white  rounded-lg mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50`}>
          <div className="py-2">
            {dropdownItems.map((item, index) => (
              <a key={index} href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent border-b border-white/20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <span className="text-white text-xl font-bold">hellokk</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <NavItem 
                title="Highlight" 
                hasDropdown={true} 
                menuName="highlight"
                dropdownItems={['News', 'Event']}
              />
              <NavItem 
                title="Lifestyle&Travel" 
                hasDropdown={true} 
                menuName="lifestyle"
                dropdownItems={['แนะนำโรงแรม', 'แนะนำของกิน', 'แนะนำที่เที่ยว']}
              />
              <NavItem 
                title="Property" 
                hasDropdown={true} 
                menuName="property"
                dropdownItems={['เช่า/ซื้อ', 'ลงทุน']}
              />
              <NavItem title="Contact" hasDropdown={false} />
            </div>
          </div>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-white hover:text-blue-200 transition-colors font-medium"
            >
              <Globe size={16} />
              <span>{currentLanguage}</span>
            </button>

            {/* Login button */}
            <button className="bg-transparent border-1 border-white text-white px-3 py-1 rounded hover:bg-white hover:text-blue-600 transition-colors duration-200 text-sm flex items-center space-x-1">
              <User size={14} />
              <span>LOGIN</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-sm">
            <a href="#" className="block px-3 py-2 text-white hover:text-blue-200 font-medium">
              HIGHLIGHT
            </a>
            <a href="#" className="block px-3 py-2 text-white hover:text-blue-200 font-medium">
              LIFESTYLE & TRAVEL
            </a>
            <a href="#" className="block px-3 py-2 text-white hover:text-blue-200 font-medium">
              PROPERTY
            </a>
            <a href="#" className="block px-3 py-2 text-white hover:text-blue-200 font-medium">
              CONTACT US
            </a>
            
            <div className="border-t border-white/20 pt-4">
              <button 
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-3 py-2 text-white hover:text-blue-200 w-full text-left"
              >
                <Globe size={16} />
                <span>{currentLanguage}</span>
              </button>
              <button className="flex items-center px-3 py-1 text-white hover:text-blue-200 w-full text-left">
                <User size={16} />
                <span>LOGIN</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}