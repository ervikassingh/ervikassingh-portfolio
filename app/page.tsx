import Link from "next/link";
import React from "react";
import {
	Download,
	Mail,
	Github,
	Linkedin,
	Twitter,
	Instagram,
} from "lucide-react";
import Particles from "./components/particles";
import AnimatedText from "./components/animated-text";
import socialsData from "../content/socials";

const navigation = [
	{ name: "Experience", href: "/experience" },
	{ name: "Skills", href: "/skills" },
	{ name: "Projects", href: "/projects" },
	{ name: "Certifications", href: "/certifications" },
];

const iconMap = {
	Mail,
	Github,
	Linkedin,
	Twitter,
	Instagram,
};

const socials = socialsData.map((social) => {
	const IconComponent = iconMap[social.icon as keyof typeof iconMap];
	return {
		...social,
		icon: <IconComponent size={20} />,
	};
});

export default function Home() {
	return (
		<div className="w-screen min-h-screen relative py-12 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-zinc-900 via-blue-900/30 to-black">
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>

			<div className="flex flex-col items-center justify-center flex-1">
				<nav className="mb-12 animate-fade-in">
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
				<div className="mt-8 text-center animate-fade-in">
					<h2 className="text-sm text-zinc-500 ">
						Web3 engineer with{" "}
						<span className="text-zinc-300 font-medium">
							5+ years of experience
						</span>{" "}
						building decentralized applications.
					</h2>
				</div>
			</div>

			<div className="mt-auto mb-8 animate-fade-in">
				<Link
					href="https://drive.google.com/file/d/1emaSFLFhWBOVW-M3pgtejRUMM7LpEIX8/view"
					target="_blank"
					className="group inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-zinc-300 border border-zinc-700/50 rounded-lg bg-zinc-900/20 backdrop-blur-sm transition-all duration-500 hover:border-zinc-500/50 hover:bg-zinc-800/30 hover:text-zinc-100 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
				>
					<span className="relative">Download Resume</span>
					<Download className="ml-2 w-3.5 h-3.5" />
				</Link>
			</div>

			<footer className="mt-auto w-full px-6 py-6 animate-fade-in">
				<div className="max-w-7xl mx-auto">
					<div className="flex items-center justify-center gap-8 md:gap-10">
						{socials.map((social) => (
							<Link
								key={social.label}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={social.label}
								className="group flex items-center justify-center transition-all duration-300 text-zinc-400 hover:text-zinc-200 hover:scale-110"
							>
								{social.icon}
							</Link>
						))}
					</div>
				</div>
			</footer>
		</div>
	);
}
