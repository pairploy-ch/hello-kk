"use client"
import React from 'react';
import { ArrowRight, Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const TravelBlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      category: "FEATURED",
      title: "Exploring Italy in 10 Days: A Complete Travel Itinerary",
      excerpt: "Italy is a country known for its rich history, incredible art, and cultural heritage. Discover the perfect 10-day journey through Rome, Florence, and Venice.",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      readTime: "28 ส.ค. 2568",

      featured: true
    },
       {
      id: 1,
      category: "FEATURED",
      title: "Exploring Italy in 10 Days: A Complete Travel Itinerary",
      excerpt: "Italy is a country known for its rich history, incredible art, and cultural heritage. Discover the perfect 10-day journey through Rome, Florence, and Venice.",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      readTime: "28 ส.ค. 2568",

      featured: true
    },

       {
      id: 1,
      category: "FEATURED",
      title: "Exploring Italy in 10 Days: A Complete Travel Itinerary",
      excerpt: "Italy is a country known for its rich history, incredible art, and cultural heritage. Discover the perfect 10-day journey through Rome, Florence, and Venice.",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      readTime: "28 ส.ค. 2568",

      featured: true
    },

       {
      id: 1,
      category: "FEATURED",
      title: "Exploring Italy in 10 Days: A Complete Travel Itinerary",
      excerpt: "Italy is a country known for its rich history, incredible art, and cultural heritage. Discover the perfect 10-day journey through Rome, Florence, and Venice.",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      readTime: "28 ส.ค. 2568",

      featured: true
    },


  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
            {/* Header */}
        <div className="text-center mb-16 space-y-6">
       
          <h1 className=" text-5xl lg:text-6xl font-light leading-tight mb-6">
            Latest News
            <br />
            <span className="font-medium ">from Khon Kaen</span>
          </h1>
          {/* <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent leading-tight">
            Khon Kaen
            <br /> */}
          {/* <span style={{background: 'linear-gradient(to right, #22E9A2, #07A1EA)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Highlights</span> */}
          {/* </h1> */}

          <p className=" text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          อัปเดตข่าวเด่นและกิจกรรมล่าสุดของขอนแก่น
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end mb-6 gap-2">
          <button className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded text-white ${
                    post.featured 
                      ? 'bg-emerald-500' 
                      : post.category === 'FOR COUPLES' 
                        ? 'bg-pink-500' 
                        : post.category === 'FOR FAMILY'
                          ? 'bg-blue-500'
                          : 'bg-gray-600'
                  }`}>
                    {post.category}
                  </span>
                </div>

                {/* Action Icons */}
                <div className="absolute top-3 right-3 flex gap-2">
                  <button className="p-1.5 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button className="p-1.5 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2  transition-colors">
                  {post.title}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{post.location}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Bottom Info */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <button className="text-emerald-600 hover:text-emerald-700 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-sky-500 text-white font-medium rounded-lg hover:bg-sky-600 transition-colors">
            <span>View All News</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TravelBlogSection;