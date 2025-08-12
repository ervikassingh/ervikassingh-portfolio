import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import languages from "../../content/languages";
import tools from "../../content/tools";

export default function SkillsPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-blue-900/30 to-black">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32 pb-16">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-display">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-zinc-400">
            Technologies and tools I use to build modern applications.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div>
          {/* Programming Languages Section */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl mb-6 font-display">
              Programming Languages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-[70%]">
              {languages.map((lang) => (
                <a
                  href={lang.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={lang.name}
                  className="flex items-center space-x-4 px-4 py-2 bg-zinc-800/20 rounded-lg border border-zinc-700/50 hover:border-zinc-600/50 hover:bg-zinc-800/30 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex-shrink-0">
                    <img src={lang.icon} alt={lang.name} className="rounded-lg w-6 h-auto" />
                  </div>
                  <span className="text-zinc-100 font-medium group-hover:opacity-70 transition-opacity duration-300">{lang.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Tools & Frameworks Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl mb-6 font-display">
              Tools & Frameworks
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-[70%]">
              {tools.map((tool) => (
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={tool.name}
                  className="flex items-center space-x-4 px-4 py-2 bg-zinc-800/20 rounded-lg border border-zinc-700/50 hover:border-zinc-600/50 hover:bg-zinc-800/30 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex-shrink-0">
                    <img src={tool.icon} alt={tool.name} className="rounded-lg w-6 h-auto" />
                  </div>
                  <span className="text-zinc-100 font-medium group-hover:opacity-70 transition-opacity duration-300">{tool.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
