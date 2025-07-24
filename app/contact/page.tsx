"use client";
import { Mail, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <Mail size={18} />,
		href: "mailto:mail.ervikassingh@gmail.com",
		label: "Email",
		handle: "mail.ervikassingh@gmail.com",
	},
	{
		icon: <Github size={18} />,
		href: "https://github.com/ervikassingh",
		label: "Github",
		handle: "ervikassingh",
	},
	{
		icon: <Linkedin size={18} />,
		href: "https://www.linkedin.com/in/ervikassingh/",
		label: "LinkedIn",
		handle: "in/ervikassingh",
	},
	{
		icon: <Twitter size={18} />,
		href: "https://x.com/wiekkii",
		label: "X",
		handle: "wiekkii",
	},
	{
		icon: <Instagram size={18} />,
		href: "https://www.instagram.com/wiekki",
		label: "Instagram",
		handle: "wiekki",
	},
];

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900 via-blue-900/30 to-black">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-8 sm:px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-6 mx-auto mt-32 sm:mt-20 md:mt-24 lg:mt-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-12">
					{socials.map((s) => (
						<Card key={s.label}>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-3 duration-700 group md:gap-6 md:py-16 lg:py-20 md:p-12"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>
								<div className="z-10 flex flex-col items-center">
									<span className="text-sm md:text-base lg:text-lg xl:text-xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display text-center break-words">
										{s.handle}
									</span>
									<span className="mt-2 md:mt-3 text-xs md:text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
