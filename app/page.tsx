import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

import languages from "../content/languages";
import tools from "../content/tools";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="w-screen min-h-screen relative py-12 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-zinc-900 via-blue-900/30 to-black">
      <nav className="my-10 animate-fade-in">
        <ul className="flex items-center justify-center gap-8 text-lg font-semibold">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="underline text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-5xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-8xl whitespace-nowrap bg-clip-text ">
        vikas singh
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <div className="my-1 mb-6 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          Crafting the future of decentralized applications
        </h2>
      </div>

      <div className="my-8 text-center animate-fade-in px-4 sm:px-6 md:px-8">
        <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto animate-fade-in">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="hover:scale-105 transition-all duration-300"
            >
              <img src={lang.icon} alt={lang.name} className="rounded-lg" />
            </div>
          ))}
        </div>
        <div className="mb-6" />
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto animate-fade-in">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="hover:scale-105 transition-all duration-300"
            >
              <img src={tool.icon} alt={tool.name} className="rounded-lg" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          I'm building a{" "}
          <Link
            target="_blank"
            href="https://github.com/ervikassingh/nestjs-monolithic-template"
            className="underline duration-500 hover:text-zinc-300"
          >
            monolithic template
          </Link> for NestJS.
        </h2>
      </div>
    </div>
  );
}
