"use client";

import React, { useState, useRef, useEffect } from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import experience from "../../content/experience";

export default function ExperiencePage() {
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());
  const [cardHeights, setCardHeights] = useState<{ [key: string]: number }>({});
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Function to calculate duration between two dates
  const calculateDuration = (startDate: string, endDate: string): string => {
    try {
      // Parse dates more reliably for mobile devices
      const parseDate = (dateStr: string): Date => {
        if (dateStr === "Present") return new Date();
        
        // Handle format like "Dec 2021" or "Oct 2020"
        const months: { [key: string]: number } = {
          'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
          'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
        };
        
        const parts = dateStr.trim().split(' ');
        if (parts.length === 2) {
          const month = months[parts[0]];
          const year = parseInt(parts[1]);
          
          if (month !== undefined && !isNaN(year)) {
            return new Date(year, month, 1);
          }
        }
        
        // Fallback to standard parsing
        const parsed = new Date(dateStr);
        if (isNaN(parsed.getTime())) {
          throw new Error(`Invalid date format: ${dateStr}`);
        }
        return parsed;
      };

      const start = parseDate(startDate);
      const end = parseDate(endDate);
      
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
    } catch (error) {
      console.error('Error calculating duration:', error);
      return 'Duration unavailable';
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

  // Calculate content height when component mounts and on window resize
  useEffect(() => {
    const calculateHeights = () => {
      const heights: { [key: string]: number } = {};
      experience.forEach((exp) => {
        const contentRef = contentRefs.current[exp.title];
        if (contentRef) {
          heights[exp.title] = contentRef.scrollHeight;
        }
      });
      setCardHeights(heights);
    };

    calculateHeights();
    
    // Recalculate heights on window resize
    window.addEventListener('resize', calculateHeights);
    return () => window.removeEventListener('resize', calculateHeights);
  }, []);

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
                      className="p-6 md:p-8 cursor-pointer transition-all duration-300 ease-out hover:bg-zinc-800/20 hover:border-zinc-400 group"
                      onClick={() => toggleCard(exp.title)}
                    >
                      <div className="flex items-start">
                        {/* Experience Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col space-y-2">
                            {/* Job Title */}
                            <h3 className="text-xl font-bold text-zinc-100 sm:text-2xl font-display select-none group-hover:text-white transition-colors duration-300">
                              {exp.title}
                            </h3>
                            
                            {/* Company & Employment Type */}
                            <p className="text-zinc-300 font-medium select-none group-hover:text-zinc-200 transition-colors duration-300">
                              {exp.company} · {exp.employmentType}
                            </p>
                            
                            {/* Duration & Location */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-zinc-400 select-none group-hover:text-zinc-300 transition-colors duration-300">
                              <span>{exp.startDate} - {exp.endDate} · {calculateDuration(exp.startDate, exp.endDate)}</span>
                              <span className="hidden sm:inline">·</span>
                              <span>{exp.location}</span>
                            </div>
                            
                            {/* Expandable Description with smooth height animation */}
                            <div 
                              className="overflow-hidden transition-all duration-700 ease-in-out"
                              style={{
                                height: expandedCards.has(exp.title) 
                                  ? `${cardHeights[exp.title] || 0}px` 
                                  : '0px',
                                opacity: expandedCards.has(exp.title) ? 1 : 0
                              }}
                            >
                              <div 
                                ref={(el) => { contentRefs.current[exp.title] = el; }}
                                className="border-t border-zinc-700/50 pt-3"
                              >
                                <p className="text-sm text-zinc-300 leading-relaxed select-none font-medium group-hover:text-zinc-200 transition-colors duration-300">
                                  {exp.description}
                                </p>
                              </div>
                            </div>
                            
                            {/* Expand/Collapse Indicator */}
                            <div className="flex items-center justify-center pt-3">
                              <div className={`w-2 h-2 border-t-2 border-r-2 border-zinc-400 transition-all duration-500 ease-in-out ${
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
