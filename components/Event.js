"use client"
import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const CalendarEventSection = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 11, 1)); // December 2024
  const [eventScrollIndex, setEventScrollIndex] = useState(0);
  
  const events = [
    {
      id: 1,
      title: "Tokyo Food Tour Experience",
      date: "2024-12-05",
      time: "10:00 AM - 4:00 PM",
      location: "Tokyo, Japan",
      participants: 12,
      price: "$120",
      category: "Food & Culture",
      image: "https://images.unsplash.com/photo-1543618219-44e141c9fc5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      title: "Paris Photography Workshop",
      date: "2024-12-08",
      time: "2:00 PM - 6:00 PM", 
      location: "Paris, France",
      participants: 8,
      price: "$85",
      category: "Photography",
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 3,
      title: "Italian Cooking Class",
      date: "2024-12-12",
      time: "6:00 PM - 9:00 PM",
      location: "Rome, Italy", 
      participants: 15,
      price: "$95",
      category: "Cooking",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 4,
      title: "New York City Walking Tour",
      date: "2024-12-15",
      time: "9:00 AM - 1:00 PM",
      location: "New York, USA",
      participants: 20,
      price: "$45",
      category: "Sightseeing",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 5,
      title: "Bali Sunset Yoga Session",
      date: "2024-12-20",
      time: "5:00 PM - 7:00 PM",
      location: "Bali, Indonesia",
      participants: 10,
      price: "$35",
      category: "Wellness",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 6,
      title: "London Thames Cruise",
      date: "2024-12-25",
      time: "7:00 PM - 10:00 PM",
      location: "London, UK",
      participants: 30,
      price: "$75",
      category: "Cruise",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
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
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-100 to-blue-100 rounded-full border border-sky-200 mb-6">
            <Calendar className="w-4 h-4 text-sky-600" />
            <span className="text-sm font-semibold text-sky-600 tracking-wider uppercase">Upcoming Events</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Travel Events & Experiences
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our curated travel experiences and connect with fellow adventurers around the world
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Events List - Left Side */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-sm p-6 h-full">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">All Events</h2>
                <div className="flex gap-2">
                  <button
                    onClick={handlePrevEvent}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50"
                    disabled={eventScrollIndex === 0}
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={handleNextEvent}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50"
                    disabled={eventScrollIndex >= events.length - 3}
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
              
              <div className="overflow-hidden h-96">
                <div 
                  className="space-y-4 transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateY(-${eventScrollIndex * 140}px)` }}
                >
                  {events.map((event) => (
                    <div key={event.id} className="group bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-all duration-300 hover:border-sky-200 h-32">
                      <div className="flex gap-4 h-full">
                        <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded-lg">
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
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <Users className="w-3 h-3 flex-shrink-0" />
                              <span>{event.participants} participants</span>
                            </div>
                          </div>
                          
                          <div className="mt-auto flex items-center justify-between">
                            <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(event.category)}`}>
                              {event.category}
                            </span>
                            <button className="text-xs font-medium text-sky-600 hover:text-blue-600 transition-colors">
                              Join Event
                            </button>
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
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={previousMonth}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={nextMonth}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
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