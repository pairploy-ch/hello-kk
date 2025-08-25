"use client"
import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const CalendarEventSection = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 11, 1)); // December 2024
  const [eventScrollIndex, setEventScrollIndex] = useState(0);
  
  const events = [

    {
      id: 1,
      title: "ขอนแก่นน่าอยู่ สร้างบ้าน Expo 2025",
      date: "2024-12-15",
      time: "9:00 AM - 1:00 PM",
      location: "เซนทรัล ขอนแก่น",
      image: "/event-1.jpeg"
    },

  ];

  // Calendar logic
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const getDaysArray = () => {
    const days = [];
    
    // Empty cells for days before the first day of month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const hasEvent = (day) => {
    if (!day) return false;
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.some(event => event.date === dateStr);
  };

  const getEventForDay = (day) => {
    if (!day) return null;
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.find(event => event.date === dateStr);
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Food & Culture': 'bg-orange-100 text-orange-600',
      'Photography': 'bg-purple-100 text-purple-600',
      'Cooking': 'bg-red-100 text-red-600',
      'Sightseeing': 'bg-blue-100 text-blue-600',
      'Wellness': 'bg-green-100 text-green-600',
      'Cruise': 'bg-sky-100 text-sky-600'
    };
    return colors[category] || 'bg-gray-100 text-gray-600';
  };

  const handlePrevEvent = () => {
    setEventScrollIndex(Math.max(0, eventScrollIndex - 1));
  };

  const handleNextEvent = () => {
    setEventScrollIndex(Math.min(events.length - 3, eventScrollIndex + 1));
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
           {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full border border-green-200">
            <span className="text-sm font-semibold text-green-600 tracking-wider uppercase">Events</span>
            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse"></div>
          </div>
          
           <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-6">
                    Upcoming Events<br />
                    <span className="font-medium">in Khon Kaen</span>
                  </h1>
          {/* <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent leading-tight">
            Khon Kaen
            <br /> */}
            {/* <span style={{background: 'linear-gradient(to right, #22E9A2, #07A1EA)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Highlights</span> */}
          {/* </h1> */}
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
           ไม่พลาดทุกงานเทศกาล คอนเสิร์ต และกิจกรรมเด่นในเมืองขอนแก่น
           
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Events List - Left Side */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-md shadow-sm p-6 h-full">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">All Events</h2>
                <div className="flex gap-2">
                  <button
                    onClick={handlePrevEvent}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors disabled:opacity-50"
                    disabled={eventScrollIndex === 0}
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={handleNextEvent}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors disabled:opacity-50"
                    disabled={eventScrollIndex >= events.length - 3}
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
              
              <div className="overflow-hidden h-[100%]">
                <div 
                  className="space-y-4 transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateY(-${eventScrollIndex * 140}px)` }}
                >
                  {events.map((event) => (
                    <div key={event.id} className="group bg-white border border-gray-100 rounded-md p-4 hover:shadow-md transition-all duration-300 hover:border-sky-200">
                      <div className="flex gap-4 h-full">
                        <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded-md">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0 flex flex-col">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-gray-800 group-hover:text-sky-600 transition-colors truncate text-sm leading-tight">
                              {event.title}
                            </h3>
                            <span className="text-sm font-bold text-sky-600 ml-2 flex-shrink-0">
                              {event.price}
                            </span>
                          </div>
                          
                          <div className="space-y-1 flex-1">
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <Clock className="w-3 h-3 flex-shrink-0" />
                              <span className="truncate">{event.time}</span>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <MapPin className="w-3 h-3 flex-shrink-0" />
                              <span className="truncate">{event.location}</span>
                            </div>
                       
                          </div>
                          
                    
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Calendar - Right Side */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-md shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={previousMonth}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={nextMonth}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2">
                {/* Day Headers */}
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="p-3 text-center text-sm font-medium text-gray-500 border-b border-gray-100">
                    {day}
                  </div>
                ))}
                
                {/* Calendar Days */}
                {getDaysArray().map((day, index) => {
                  const event = getEventForDay(day);
                  const hasEventToday = hasEvent(day);
                  
                  return (
                    <div key={index} className="relative min-h-[80px] p-2 border border-gray-50 hover:bg-gray-50 transition-colors">
                      {day && (
                        <>
                          <span className={`text-sm font-medium ${hasEventToday ? 'text-sky-600' : 'text-gray-600'}`}>
                            {day}
                          </span>
                          
                          {hasEventToday && event && (
                            <div className="mt-1">
                              <div className="bg-sky-100 text-sky-700 text-xs px-2 py-1 rounded truncate">
                                {event.title.length > 12 ? event.title.substring(0, 12) + '...' : event.title}
                              </div>
                              <div className="text-xs text-gray-500 mt-1">
                                {event.time.split(' - ')[0]}
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarEventSection;