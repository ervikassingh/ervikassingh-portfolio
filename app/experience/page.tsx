"use client";

import React, { useState } from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import experience from "../../content/experience";

export default function ExperiencePage() {
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  // Function to calculate duration between two dates
  const calculateDuration = (startDate: string, endDate: string): string => {
    const start = new Date(startDate);
    const end = endDate === "Present" ? new Date() : new Date(endDate);
    
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
    const diffMonths = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    
    if (diffYears === 0) {
      return `${diffMonths} mos`;
    } else if (diffMonths === 0) {
      return `${diffYears} yr`;
    } else {
      return `${diffYears} yr ${diffMonths} mos`;
    }
  };

  const toggleCard = (title: string) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(title)) {
      newExpanded.delete(title);
    } else {
      newExpanded.add(title);
    }
    setExpandedCards(newExpanded);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-blue-900/30 to-black">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32 pb-16">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-display">
            Experience
          </h2>
          <p className="mt-4 text-zinc-400">
            My professional journey in software development and blockchain engineering.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-zinc-700/50"></div>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={exp.title} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-800 rounded-full border-4 border-zinc-900 z-10"></div>
                
                {/* Experience card with left margin for timeline */}
                <div className="ml-16 w-[70%]">
                  <Card>
                    <div 
                      className="p-6 md:p-8 cursor-pointer transition-all duration-500 ease-out hover:bg-zinc-800/20 hover:scale-[1.005]"
                      onClick={() => toggleCard(exp.title)}
                    >
                      <div className="flex items-start">
                        {/* Experience Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col space-y-2">
                            {/* Job Title */}
                            <h3 className="text-xl font-bold text-zinc-100 sm:text-2xl font-display select-none">
                              {exp.title}
                            </h3>
                            
                            {/* Company & Employment Type */}
                            <p className="text-zinc-300 font-medium select-none">
                              {exp.company} · {exp.employmentType}
                            </p>
                            
                            {/* Duration & Location */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-zinc-400 select-none">
                              <span>{exp.startDate} - {exp.endDate} · {calculateDuration(exp.startDate, exp.endDate)}</span>
                              <span className="hidden sm:inline">·</span>
                              <span>{exp.location}</span>
                            </div>
                            
                            {/* Expandable Description */}
                            <div className={`overflow-hidden transition-all duration-500 ease-out ${
                              expandedCards.has(exp.title) ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                            }`}>
                              <div className="border-t border-zinc-700/50 pt-3">
                                <p className="text-sm text-zinc-300 leading-relaxed select-none font-medium">
                                  {exp.description}
                                </p>
                              </div>
                            </div>
                            
                            {/* Expand/Collapse Indicator */}
                            <div className="flex items-center justify-center pt-3">
                              <div className={`w-2 h-2 border-t-2 border-r-2 border-zinc-400 transition-all duration-500 ease-out ${
                                expandedCards.has(exp.title) ? '-rotate-45 scale-110' : 'rotate-45 scale-100'
                              }`}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
