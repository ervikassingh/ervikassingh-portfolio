import React from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  return (
    <h1 className={`py-4 px-0.5 z-10 text-5xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-8xl whitespace-nowrap bg-clip-text text-center ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-transparent hover:via-transparent hover:to-transparent hover:drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]"
          style={{
            textShadow: char === " " ? "none" : "0 0 0 currentColor",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}
