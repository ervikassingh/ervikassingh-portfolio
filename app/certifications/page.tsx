"use client";

import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { ExternalLink } from "lucide-react";
import certifications from "../../content/certifications";

export default function CertificationsPage() {
	return (
		<div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-blue-900/30 to-black">
			<Navigation />
			<div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32 pb-16">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-display">
						Licenses & certifications
					</h2>
					<p className="mt-4 text-zinc-400">
						Professional certifications and licenses I've earned throughout my
						career.
					</p>
				</div>
				<div className="w-full h-px bg-zinc-800" />

				<div className="grid grid-cols-1 gap-6 mx-auto lg:grid-cols-2">
					{certifications.map((cert) => (
						<Card key={cert.credentialId}>
							<div className="p-6 md:p-8 flex flex-col h-full">
								<div>
									<h3 className="text-xl font-bold text-zinc-100 sm:text-2xl font-display mb-2">
										{cert.title}
									</h3>
									<p className="text-sm text-zinc-400 mb-1">
										{cert.issuingOrganization}
									</p>
									<p className="text-sm text-zinc-400 mb-1">
										Issued {cert.issueDate}
									</p>
									<p className="text-xs text-zinc-500 mb-4">
										Credential ID: {cert.credentialId}
									</p>

									{/* Skills */}
									<ul className="list-disc list-inside space-y-1 mb-4">
										{cert.skills.map((skill) => (
											<li key={skill} className="text-xs text-zinc-400">
												{skill}
											</li>
										))}
									</ul>
								</div>

								{/* Show credential button */}
								<div className="mt-auto flex justify-end">
									<a
										href={cert.credentialUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-zinc-300 border border-zinc-700/50 rounded-lg bg-zinc-900/20 backdrop-blur-sm transition-all duration-300 hover:border-zinc-500/50 hover:bg-zinc-800/30 hover:text-zinc-100"
									>
										Show credential
										<ExternalLink className="w-3.5 h-3.5" />
									</a>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
