"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Share2, Eye, Bed, Bath, Car, Maximize, MapPin, Clock } from 'lucide-react';

const FeaturedListings = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [favorites, setFavorites] = useState(new Set());
  const [filters, setFilters] = useState({
    status: 'All Status',
    propertyType: 'Property Type',
    location: 'All Cities',
    bedrooms: 'Bedrooms',
    maxPrice: 'Max. Price'
  });

  const listings = [
    {
      id: 1,
      title: "Light And Modern Apartment",
      price: "$4,500/mo",
      pricePerSqft: "$3.75/sq ft",
      address: "2436 SW 8th St, Miami, FL 33135, USA",
      bedrooms: 4,
      bathrooms: 2,
      parking: 1,
      area: 1200,
      type: "APARTMENT",
      status: "FOR RENT",
      featured: true,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
      agent: {
        name: "Samuel Palmer",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
        posted: "5 years ago"
      }
    },
    {
      id: 2,
      title: "New Home For Sale",
      price: "$459,000",
      pricePerSqft: "$2,560/sq ft",
      address: "100 Chopin Plaza, Miami, FL 33131, USA",
      bedrooms: 4,
      bathrooms: 2,
      parking: 1,
      area: 1200,
      type: "SINGLE FAMILY HOME",
      status: "FOR SALE",
      hotOffer: true,
      featured: true,
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
      agent: {
        name: "Michelle Ramirez",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b0c0?w=40&h=40&fit=crop&crop=face",
        posted: "5 years ago"
      }
    },
    {
      id: 3,
      title: "Guaranteed Modern Home",
      price: "$590,000",
      pricePerSqft: "$3,500/sq ft",
      address: "905 Brickell Bay Dr, Miami, FL 33131, USA",
      bedrooms: 3,
      bathrooms: 2,
      parking: 1,
      area: 3410,
      type: "SINGLE FAMILY HOME",
      status: "FOR SALE",
      featured: true,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      agent: {
        name: "Samuel Palmer",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
        posted: "5 years ago"
      }
    },
    {
      id: 4,
      title: "Luxury Penthouse Suite",
      price: "$850,000",
      pricePerSqft: "$4,250/sq ft",
      address: "1451 Brickell Ave, Miami, FL 33131, USA",
      bedrooms: 3,
      bathrooms: 3,
      parking: 2,
      area: 2000,
      type: "PENTHOUSE",
      status: "FOR SALE",
      featured: true,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      agent: {
        name: "Alex Johnson",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
        posted: "2 weeks ago"
      }
    },
    {
      id: 5,
      title: "Cozy Family Villa",
      price: "$3,200/mo",
      pricePerSqft: "$2.67/sq ft",
      address: "789 Ocean Drive, Miami Beach, FL 33139, USA",
      bedrooms: 5,
      bathrooms: 3,
      parking: 2,
      area: 1800,
      type: "VILLA",
      status: "FOR RENT",
      featured: true,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      agent: {
        name: "Sarah Wilson",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
        posted: "1 month ago"
      }
    },
    {
      id: 6,
      title: "Urban Studio Loft",
      price: "$2,800/mo",
      pricePerSqft: "$4.67/sq ft",
      address: "555 NE 15th St, Miami, FL 33132, USA",
      bedrooms: 1,
      bathrooms: 1,
      parking: 1,
      area: 600,
      type: "STUDIO",
      status: "FOR RENT",
      hotOffer: true,
      featured: true,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      agent: {
        name: "Mike Chen",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
        posted: "3 days ago"
      }
    },
    {
      id: 7,
      title: "Waterfront Condo",
      price: "$675,000",
      pricePerSqft: "$3,375/sq ft",
      address: "200 Biscayne Blvd Way, Miami, FL 33131, USA",
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      area: 1500,
      type: "CONDOMINIUM",
      status: "FOR SALE",
      featured: true,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      agent: {
        name: "Emma Davis",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b0c0?w=40&h=40&fit=crop&crop=face",
        posted: "1 week ago"
      }
    },
    {
      id: 8,
      title: "Downtown Loft Space",
      price: "$3,800/mo",
      pricePerSqft: "$3.17/sq ft",
      address: "321 SE 3rd St, Miami, FL 33131, USA",
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      area: 1100,
      type: "LOFT",
      status: "FOR RENT",
      featured: true,
      image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop",
      agent: {
        name: "David Rodriguez",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
        posted: "4 days ago"
      }
    }
  ];

  const nextSlide = () => {
    const filteredListings = getFilteredListings();
    const totalPages = Math.ceil(filteredListings.length / 6);
    setCurrentSlide((prev) => ((prev / 6 + 1) % totalPages) * 6);
  };

  const prevSlide = () => {
    const filteredListings = getFilteredListings();
    const totalPages = Math.ceil(filteredListings.length / 6);
    setCurrentSlide((prev) => ((prev / 6 - 1 + totalPages) % totalPages) * 6);
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  const getFilteredListings = () => {
    let filteredListings = listings;
    
    // Apply filters
    if (filters.status !== 'All Status') {
      filteredListings = filteredListings.filter(listing => 
        listing.status === filters.status
      );
    }
    
    if (filters.propertyType !== 'Property Type') {
      filteredListings = filteredListings.filter(listing => 
        listing.type === filters.propertyType
      );
    }
    
    if (filters.bedrooms !== 'Bedrooms') {
      const bedroomCount = parseInt(filters.bedrooms);
      filteredListings = filteredListings.filter(listing => 
        listing.bedrooms === bedroomCount
      );
    }
    
    return filteredListings;
  };

  const getVisibleListings = () => {
    const filteredListings = getFilteredListings();
    const visible = [];
    for (let i = 0; i < 6; i++) {
      if (filteredListings[currentSlide + i]) {
        visible.push(filteredListings[currentSlide + i]);
      }
    }
    return visible;
  };

  const filteredListings = getFilteredListings();
  const totalPages = Math.ceil(filteredListings.length / 6);
  const currentPage = Math.floor(currentSlide / 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16">
      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4"></div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            Discover Our Featured Listings
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore premium properties curated for modern living and exceptional investment opportunities
          </p>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-12 border border-gray-100">
          {/* Status Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['All Status', 'FOR RENT', 'FOR SALE'].map((status) => (
              <button
                key={status}
                onClick={() => {
                  setFilters({...filters, status});
                  setCurrentSlide(0);
                }}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  filters.status === status
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {status === 'All Status' ? 'All Status' : status.replace('FOR ', 'For ')}
              </button>
            ))}
          </div>

          {/* Filter Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            {/* Property Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">
                Looking For
              </label>
              <select
                value={filters.propertyType}
                onChange={(e) => {
                  setFilters({...filters, propertyType: e.target.value});
                  setCurrentSlide(0);
                }}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
              >
                <option>Property Type</option>
                <option>APARTMENT</option>
                <option>SINGLE FAMILY HOME</option>
                <option>PENTHOUSE</option>
                <option>VILLA</option>
                <option>STUDIO</option>
                <option>CONDOMINIUM</option>
                <option>LOFT</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">
                Location
              </label>
              <select
                value={filters.location}
                onChange={(e) => setFilters({...filters, location: e.target.value})}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
              >
                <option>All Cities</option>
                <option>Miami, FL</option>
                <option>Miami Beach, FL</option>
                <option>Downtown Miami</option>
                <option>Brickell</option>
              </select>
            </div>

            {/* Bedrooms */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">
                Property Size
              </label>
              <select
                value={filters.bedrooms}
                onChange={(e) => {
                  setFilters({...filters, bedrooms: e.target.value});
                  setCurrentSlide(0);
                }}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
              >
                <option>Bedrooms</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            {/* Max Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">
                Your Budget
              </label>
              <select
                value={filters.maxPrice}
                onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
              >
                <option>Max. Price</option>
                <option>$0 - $3,000</option>
                <option>$3,000 - $5,000</option>
                <option>$5,000 - $10,000</option>
                <option>$200,000 - $500,000</option>
                <option>$500,000 - $1,000,000</option>
                <option>$1,000,000+</option>
              </select>
            </div>

            {/* Search Button */}
            <div>
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-gray-600">
            Showing {getVisibleListings().length} of {filteredListings.length} properties
          </div>
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              disabled={currentPage === 0}
              className="group p-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentPage === totalPages - 1}
              className="group p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
          {getVisibleListings().map((listing, index) => (
            <div
              key={listing.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  {listing.featured && (
                    <span className="px-2 py-1 bg-gradient-to-r from-green-400 to-green-500 text-white text-xs font-semibold rounded-full shadow-lg">
                      FEATURED
                    </span>
                  )}
                  <span className={`px-2 py-1 text-white text-xs font-semibold rounded-full shadow-lg ${
                    listing.status === 'FOR RENT' 
                      ? 'bg-gradient-to-r from-purple-500 to-purple-600' 
                      : 'bg-gradient-to-r from-blue-500 to-blue-600'
                  }`}>
                    {listing.status}
                  </span>
                  {listing.hotOffer && (
                    <span className="px-2 py-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-semibold rounded-full shadow-lg animate-pulse">
                      HOT OFFER
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button className="p-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors">
                    <Share2 className="w-3 h-3 text-gray-700" />
                  </button>
                  <button 
                    onClick={() => toggleFavorite(listing.id)}
                    className="p-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
                  >
                    <Heart className={`w-3 h-3 transition-colors ${
                      favorites.has(listing.id) ? 'text-red-500 fill-current' : 'text-gray-700'
                    }`} />
                  </button>
                  <button className="p-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors">
                    <Eye className="w-3 h-3 text-gray-700" />
                  </button>
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-3 left-3">
                  <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg">
                    <div className="text-lg font-bold text-gray-900">{listing.price}</div>
                    <div className="text-xs text-gray-600">{listing.pricePerSqft}</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {listing.title}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-3 h-3 mr-1 text-blue-500 flex-shrink-0" />
                  <p className="text-xs line-clamp-1">{listing.address}</p>
                </div>

                {/* Property Details */}
                <div className="flex items-center gap-3 mb-3 text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <Bed className="w-3 h-3" />
                    <span>{listing.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-3 h-3" />
                    <span>{listing.bathrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Car className="w-3 h-3" />
                    <span>{listing.parking}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Maximize className="w-3 h-3" />
                    <span>{listing.area} Sq Ft</span>
                  </div>
                </div>

                <div className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full inline-block mb-3">
                  {listing.type}
                </div>

                {/* Agent Info */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <img
                      src={listing.agent.avatar}
                      alt={listing.agent.name}
                      className="w-8 h-8 rounded-full object-cover border-2 border-gray-200"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 text-xs">{listing.agent.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>{listing.agent.posted}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Message */}
        {getVisibleListings().length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">No properties found matching your criteria.</p>
            <p className="text-gray-400 mt-2">Try adjusting your filters to see more results.</p>
          </div>
        )}

        {/* Slide Indicators */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 gap-3">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index * 6)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPage
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        )}

      
      </div>
    </div>
  );
};

export default FeaturedListings;