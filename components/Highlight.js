"use client"
import React from 'react';
import { ArrowRight, Clock, MapPin } from 'lucide-react';

const TravelBlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      category: "UNCATEGORIZED",
      title: "Exploring Italy in 10 Days: A Complete Travel Itinerary",
      excerpt: "Italy is a country known for its rich history, incredible art, and...",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      category: "UNCATEGORIZED",
      title: "3 Days in Paris: A Short Escape to the City of Lights",
      excerpt: "Paris is a city of romance, history, and culture. In just three...",
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      readTime: "5 min read"
    },
    {
      id: 3,
      category: "UNCATEGORIZED",
      title: "One Week in Japan: Tokyo, Kyoto & Osaka Adventure",
      excerpt: "Japan is a country that blends cutting-edge technology with ancient traditions. This...",
      image: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      readTime: "10 min read"
    },
    {
      id: 4,
      category: "UNCATEGORIZED",
      title: "5 Days in New York City: Landmarks, Culture & Neighborhoods",
      excerpt: "The Big Apple never sleeps—and with just five days, you can catch...",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      readTime: "7 min read"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-100 to-blue-100 rounded-full border border-sky-200">
            <span className="text-sm font-semibold text-sky-600 tracking-wider uppercase">Highlight</span>
            <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent leading-tight">
            Crafting Unforgettable
            <br />
            <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">Journeys</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Here where share travel tips, destination guide,
            <br />
            and stories that inspire your next adventure.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Featured Post */}
          <div className="lg:col-span-7">
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-96 md:h-[500px] overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                    <span className="text-xs font-medium text-white">{blogPosts[0].category}</span>
                  </span>
                </div>

                {/* Featured Badge */}
                <div className="absolute top-6 right-6">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full">
                    <span className="text-xs font-medium text-white">Featured</span>
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Italy</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-sky-600 transition-colors">
                  {blogPosts[0].title}
                </h3>
                
                <p className="text-slate-600 mb-6 line-clamp-2">
                  {blogPosts[0].excerpt}
                </p>
                
                <button className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-blue-600 transition-colors group">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Side Posts */}
          <div className="lg:col-span-5 space-y-6">
            {blogPosts.slice(1).map((post, index) => (
              <div key={post.id} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex">
                  <div className="relative w-32 md:w-40 flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
                  </div>
                  
                  <div className="flex-1 p-6">
                    <div className="mb-2">
                      <span className="inline-block px-2 py-1 text-xs font-medium text-sky-600 bg-sky-50 rounded-lg">
                        {post.category}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-sky-600 transition-colors leading-tight">
                      {post.title}
                    </h4>
                    
                    <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <button className="text-sky-600 hover:text-blue-600 transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

 
      </div>
    </section>
  );
};

export default TravelBlogSection;