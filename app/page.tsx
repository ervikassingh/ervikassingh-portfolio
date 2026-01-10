import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import AnimatedText from "./components/animated-text";

const navigation = [
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="w-screen min-h-screen relative py-12 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-zinc-900 via-blue-900/30 to-black">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      <div className="flex flex-col items-center justify-center flex-1">
        <nav className="mb-8 animate-fade-in">
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

        <div className="w-screen h-px animate-glow animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <AnimatedText text="vikas singh" />
        <div className="w-screen h-px animate-glow animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      </div>
      <div className="mt-auto mb-8 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          Web3 engineer with{" "}
          <span className="text-zinc-300 font-medium">5+ years of experience</span>{" "}
          building decentralized applications.
        </h2>
        <div className="mt-4">
          <Link
            href="https://drive.google.com/file/d/1emaSFLFhWBOVW-M3pgtejRUMM7LpEIX8/view"
            target="_blank"
            className="group inline-block text-base duration-500 text-zinc-500 hover:text-zinc-300 transition-all"
          >
            <span className="underline-slide glow-pulse transition-all duration-500">
              Download Resume
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
