"use client";
import React from "react";
// import { Star } from 'lucide-react';

const TeamMember = ({ name, role, img }) => {
  return (
    <div className="rounded transition-all duration-300 overflow-hidden group hover:scale-105">
      <div className="relative">
        <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent h-20"></div>
      </div>

      <div className="p-6">
        <h3 className="font-semibold text-lg text-gray-900 mb-1">{name}</h3>
        <p className="text-gray-600 text-sm">{role}</p>
      </div>
    </div>
  );
};

const ExperienceTeam = () => {
  const teamMembers = [
    {
      name: "Patricia W. Sanders",
      role: "Potision",
      img: "/profile.jpeg",
    },
    {
      name: "Linda J. Ouellette",
      role: "Potision",
      img: "/profile.jpeg",
    },
    {
      name: "Kenneth C. Anderson",
      role: "Potision",
      img: "/profile.jpeg",
    },
    {
      name: "Timothy M. Herrick",
      role: "Potision",
      img: "/profile.jpeg",
    },
  ];

  return (
    <div className="bg-[#fff] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-6">
            Inspiring People
            <br />
            <span className="font-medium">of Khon Kaen</span>
          </h1>
          {/* <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent leading-tight">
            Khon Kaen
            <br /> */}
          {/* <span style={{background: 'linear-gradient(to right, #22E9A2, #07A1EA)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Highlights</span> */}
          {/* </h1> */}

          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover stories, talents, and journeys that shape our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              img={member.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTeam;
