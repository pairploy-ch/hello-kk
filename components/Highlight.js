"use client"
import React from 'react';
import { ArrowRight, Clock, MapPin } from 'lucide-react';

const TravelBlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      category: "NEWS",
      title: "เจริญก่อนไม่รอแล้วนะ! “ขอนแก่นโมเดล” ไม่รองบรัฐเตรียมสร้างรถไฟฟ้ารางเบา",
      excerpt: "ปัญหาคลาสสิคของไทย หนีไม่พ้นภาครัฐที่ทำนโยบายลงไปไม่ถึงประชาชน ทั้งคนที่อยู่ใกล้หรือคนที่อยู่ไกล",
      image: "/hl-1.jpg",
      readTime: "25 ส.ค. 2568",
      featured: true
    },
      {
      id: 1,
      category: "NEWS",
      title: "เจริญก่อนไม่รอแล้วนะ! “ขอนแก่นโมเดล” ไม่รองบรัฐเตรียมสร้างรถไฟฟ้ารางเบา",
      excerpt: "ปัญหาคลาสสิคของไทย หนีไม่พ้นภาครัฐที่ทำนโยบายลงไปไม่ถึงประชาชน ทั้งคนที่อยู่ใกล้หรือคนที่อยู่ไกล",
      image: "/hl-1.jpg",
      readTime: "25 ส.ค. 2568",
      featured: true
    },
        {
      id: 2,
      category: "NEWS",
      title: "เจริญก่อนไม่รอแล้วนะ! “ขอนแก่นโมเดล” ไม่รองบรัฐเตรียมสร้างรถไฟฟ้ารางเบา",
      excerpt: "ปัญหาคลาสสิคของไทย หนีไม่พ้นภาครัฐที่ทำนโยบายลงไปไม่ถึงประชาชน ทั้งคนที่อยู่ใกล้หรือคนที่อยู่ไกล",
      image: "/hl-1.jpg",
      readTime: "25 ส.ค. 2568",
      featured: true
    },
        {
      id: 3,
      category: "NEWS",
      title: "เจริญก่อนไม่รอแล้วนะ! “ขอนแก่นโมเดล” ไม่รองบรัฐเตรียมสร้างรถไฟฟ้ารางเบา",
      excerpt: "ปัญหาคลาสสิคของไทย หนีไม่พ้นภาครัฐที่ทำนโยบายลงไปไม่ถึงประชาชน ทั้งคนที่อยู่ใกล้หรือคนที่อยู่ไกล",
      image: "/hl-1.jpg",
      readTime: "25 ส.ค. 2568",
      featured: true
    },
 
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full border border-green-200">
            <span className="text-sm font-semibold text-green-600 tracking-wider uppercase">Highlight</span>
            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse"></div>
          </div>
          
           <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-6">
                    What’s New in<br />
                    <span className="font-medium"> Khon Kaen</span>
                  </h1>
          {/* <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent leading-tight">
            Khon Kaen
            <br /> */}
            {/* <span style={{background: 'linear-gradient(to right, #22E9A2, #07A1EA)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Highlights</span> */}
          {/* </h1> */}
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
           เรื่องราวเด่น กิจกรรมฮอต ทุกมุมของขอนแก่น
           
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Featured Post */}
          <div className="lg:col-span-7">
            <div className="h-[655px] group relative overflow-hidden rounded bg-white shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-2">
                              <div className="relative h-64 md:h-[65%] overflow-hidden">
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
                {/* <div className="absolute top-6 right-6">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full" style={{background: 'linear-gradient(to right, #22E9A2, #07A1EA)'}}>
                    <span className="text-xs font-medium text-white">Featured</span>
                  </span>
                </div> */}
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
               
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-3  transition-colors">
                  {blogPosts[0].title}
                </h3>
                
                <p className="text-slate-600 mb-6 line-clamp-2">
                  {blogPosts[0].excerpt}
                </p>
                
                <button className="inline-flex items-center gap-2 font-semibold hover:opacity-80 transition-all group" style={{color: '#07A1EA'}}>
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Side Posts */}
          <div className="lg:col-span-5 space-y-6 flex flex-col">
            {blogPosts.slice(1).map((post, index) => (
              <div key={post.id} className="group relative overflow-hidden rounded bg-white shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex-1">
                <div className="flex h-full">
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
                      <span className="inline-block px-2 py-1 text-xs font-medium text-green-600 bg-green-50 rounded">
                        {post.category}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-bold text-slate-800 mb-2  transition-colors leading-tight">
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
                      
                      <button className="hover:opacity-80 transition-all" style={{color: '#07A1EA'}}>
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