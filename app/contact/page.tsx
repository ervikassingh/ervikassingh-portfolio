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
		href: "https://linkedin.com/in/ervikassingh",
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
		href: "https://instagram.com/wiekki",
		label: "Instagram",
		handle: "wiekki",
	},
];

export default function Example() {
	return (
		<div className="relative pb-16 min-h-screen bg-gradient-to-tl from-zinc-900 via-blue-900/30 to-black">
			<Navigation />
			<div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-display">
						Contact
					</h2>
					<p className="mt-4 text-zinc-400">
						Get in touch with me through any of these platforms.
					</p>
				</div>
				<div className="w-full h-px bg-zinc-800" />

				{/* Small screens: 1 column */}
				<div className="grid grid-cols-1 gap-4 mx-auto md:hidden">
					{socials.map((s) => (
						<Card key={s.label}>
							<Link
								href={s.href}
								target="_blank"
								className="group h-full block"
							>
								<article className="p-4 md:p-8 h-full flex flex-col justify-start">
									<div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange mb-4">
										{s.icon}
									</div>
									<div className="text-center">
										<h3 className="text-xl font-medium duration-1000 lg:text-2xl text-zinc-200 group-hover:text-white font-display">
											{s.label}
										</h3>
										<p className="mt-2 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
											{s.handle}
										</p>
									</div>
								</article>
							</Link>
						</Card>
					))}
				</div>

				{/* Medium screens: 2 columns */}
				<div className="hidden md:grid grid-cols-2 gap-4 mx-auto lg:hidden">
					{Array.from({ length: 2 }, (_, columnIndex) => (
						<div key={columnIndex} className="grid grid-cols-1 gap-4">
							{socials
								.filter((_, i) => i % 2 === columnIndex)
								.map((s) => (
									<Card key={s.label}>
										<Link
											href={s.href}
											target="_blank"
											className="group h-full block"
										>
											<article className="p-4 md:p-8 h-full flex flex-col justify-start">
												<div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange mb-4">
													{s.icon}
												</div>
												<div className="text-center">
													<h3 className="text-xl font-medium duration-1000 lg:text-2xl text-zinc-200 group-hover:text-white font-display">
														{s.label}
													</h3>
													<p className="mt-2 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
														{s.handle}
													</p>
												</div>
											</article>
										</Link>
									</Card>
								))}
						</div>
					))}
				</div>

				{/* Large screens: 3 columns */}
				<div className="hidden lg:grid grid-cols-1 gap-4 mx-auto lg:mx-0 lg:grid-cols-3">
					{Array.from({ length: 3 }, (_, columnIndex) => (
						<div key={columnIndex} className="grid grid-cols-1 gap-4">
							{socials
								.filter((_, i) => i % 3 === columnIndex)
								.map((s) => (
									<Card key={s.label}>
										<Link
											href={s.href}
											target="_blank"
											className="group h-full block"
										>
											<article className="p-4 md:p-8 h-full flex flex-col justify-start">
												<div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange mb-4">
													{s.icon}
												</div>
												<div className="text-center">
													<h3 className="text-xl font-medium duration-1000 lg:text-2xl text-zinc-200 group-hover:text-white font-display">
														{s.label}
													</h3>
													<p className="mt-2 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
														{s.handle}
													</p>
												</div>
											</article>
										</Link>
									</Card>
								))}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
