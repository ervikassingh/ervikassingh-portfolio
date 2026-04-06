"use client";

import React, { useState, useRef, useEffect } from "react";
import { siteContentColumnClass } from "@/app/styles/classes/layout";
import { Card } from "../components/ui/card";
import { PageHero } from "../components/layout/page-hero";
import experience from "../../content/experience";

export function ExperienceClient() {
	const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());
	const [cardHeights, setCardHeights] = useState<{ [key: string]: number }>({});
	const contentRefs = useRef<{ [refKey: string]: HTMLDivElement | null }>({});

	const calculateDuration = (startDate: string, endDate: string): string => {
		try {
			const parseDate = (dateStr: string): Date => {
				if (dateStr === "Present") return new Date();

				const months: { [key: string]: number } = {
					Jan: 0,
					Feb: 1,
					Mar: 2,
					Apr: 3,
					May: 4,
					Jun: 5,
					Jul: 6,
					Aug: 7,
					Sep: 8,
					Oct: 9,
					Nov: 10,
					Dec: 11,
				};

				const parts = dateStr.trim().split(" ");
				if (parts.length === 2) {
					const month = months[parts[0]];
					const year = parseInt(parts[1]);

					if (month !== undefined && !isNaN(year)) {
						return new Date(year, month, 1);
					}
				}

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
			const diffMonths = Math.floor(
				(diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30),
			);

			if (diffYears === 0) {
				return `${diffMonths} mos`;
			} else if (diffMonths === 0) {
				return `${diffYears} yr`;
			} else {
				return `${diffYears} yr ${diffMonths} mos`;
			}
		} catch (error) {
			console.error("Error calculating duration:", error);
			return "Duration unavailable";
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

		setTimeout(() => {
			const heights: { [key: string]: number } = {};
			experience.forEach((exp) => {
				const contentRef = contentRefs.current[exp.title];
				if (contentRef) {
					heights[exp.title] = contentRef.scrollHeight;
				}
			});
			setCardHeights(heights);
		}, 50);
	};

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

		const timeoutId = setTimeout(calculateHeights, 200);

		window.addEventListener("resize", calculateHeights);
		return () => {
			clearTimeout(timeoutId);
			window.removeEventListener("resize", calculateHeights);
		};
	}, []);

	return (
		<div className="relative z-10 pb-16">
			<PageHero
				title="Experience"
				description="My professional journey in software development and blockchain engineering from full-stack delivery to Web3 infrastructure and smart-contract systems."
			/>

			<div className={`relative pt-10 md:pt-14 ${siteContentColumnClass}`}>
				<div className="relative flex flex-col gap-8">
					<div
						className="pointer-events-none absolute bottom-0 left-2 top-0 z-0 w-0.5 -translate-x-1/2 bg-timeline-line sm:left-2.5 dark:bg-timeline-line/50"
						aria-hidden
					/>

					{experience.map((exp) => (
						<div key={exp.title} className="flex gap-2 sm:gap-3 md:gap-4">
							<div className="relative w-4 shrink-0 sm:w-5" aria-hidden>
								<div className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-timeline-ring bg-timeline-dot sm:h-4 sm:w-4 sm:border-4" />
							</div>

							<div className="min-w-0 flex-1">
								<Card>
									<div
										className="group cursor-pointer p-4 transition-all duration-300 ease-out sm:p-6 md:p-8"
										onClick={() => toggleCard(exp.title)}
										onKeyDown={(e) => {
											if (e.key === "Enter" || e.key === " ") {
												e.preventDefault();
												toggleCard(exp.title);
											}
										}}
										role="button"
										tabIndex={0}
									>
										<div className="flex items-start">
											<div className="min-w-0 flex-1">
												<div className="flex flex-col space-y-2">
													<h3 className="select-none break-words font-display text-xl font-bold text-fg transition-colors duration-300 group-hover:text-fg-secondary sm:text-2xl">
														{exp.title}
													</h3>

													<p className="select-none break-words font-medium text-fg-secondary transition-colors duration-300 group-hover:text-fg">
														{exp.company} · {exp.employmentType}
													</p>

													<div className="flex select-none flex-col break-words text-sm text-fg-muted transition-colors duration-300 group-hover:text-fg-secondary sm:flex-row sm:items-center sm:space-x-4">
														<span>
															{exp.startDate} - {exp.endDate} ·{" "}
															{calculateDuration(exp.startDate, exp.endDate)}
														</span>
														<span className="hidden sm:inline">·</span>
														<span>{exp.location}</span>
													</div>

													<div
														className="overflow-hidden transition-all duration-700 ease-in-out"
														style={{
															height: expandedCards.has(exp.title)
																? `${cardHeights[exp.title] || 0}px`
																: "0px",
															opacity: expandedCards.has(exp.title) ? 1 : 0,
														}}
													>
														<div
															ref={(el) => {
																contentRefs.current[exp.title] = el;
															}}
															className="border-t border-border/90 pt-3 dark:border-border/50"
														>
															<ul className="list-inside list-disc space-y-2 select-none text-sm font-medium leading-relaxed text-fg-secondary transition-colors duration-300 group-hover:text-fg">
																{exp.description.map((line, lineIndex) => (
																	<li
																		key={`${exp.title}-line-${lineIndex}`}
																		className="pl-2"
																	>
																		{line}
																	</li>
																))}
															</ul>
														</div>
													</div>

													<div className="flex items-center justify-center pt-3">
														<div
															className={`h-2 w-2 border-r-2 border-t-2 border-accent-soft transition-all duration-500 ease-in-out ${
																expandedCards.has(exp.title)
																	? "-rotate-45 scale-110"
																	: "rotate-45 scale-100"
															}`}
														/>
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
	);
}
