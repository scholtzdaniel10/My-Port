import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
	{
		title: "My Portfolio",
		description: "Built with React, Tailwind, Vite & R3F.",
		tags: ["React", "Tailwind", "R3F"],
		image: "/project1.png",
		github: "https://github.com/scholtzdaniel10/My-Port",
		live: "https://your-portfolio-live-link.com",
	},
	{
		title: "TaskFlow-App",
		description: "Built with React, Material UI, Vite & R3F. ",
		tags: ["React", "Material UI", "Vite",],
		image: "/project3.png",
		github: "https://github.com/jaderiley/Taskflow-app",
		live: "https://your-taskflow-live-link.com",
	},
	{
		title: "Paarthacive-Library",
		description: "Built with React, Bulma UI, Vite & R3F. STILL IN PROGRESS!!!",
		tags: ["React", "Bulma UI", "Vite",],
		image: "/project2.png",
		github: "https://github.com/scholtzdaniel10/Paarthacive-Library-1",
		live: "https://your-taskflow-live-link.com",
	},
];

export default function WorkSection() {
	return (
		<section id="work" className="py-20 px-4 bg-gray-900">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold mb-12">My Work</h2>
				<div className="grid md:grid-cols-2 gap-10">
					{projects.map((p, i) => (
						<div
							key={i}
							className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
						>
							<img
								src={p.image}
								alt={p.title}
								className="w-full h-56 object-cover"
							/>
							<div className="p-6">
								<h3 className="text-2xl font-semibold">{p.title}</h3>
								<p className="mt-2 text-gray-400">{p.description}</p>
								<div className="flex flex-wrap gap-2 mt-4">
									{p.tags.map((t, idx) => (
										<span
											key={idx}
											className="bg-gray-700 text-sm px-3 py-1 rounded-full"
										>
											{t}
										</span>
									))}
								</div>
								<div className="flex gap-4 mt-4">
									<a
										href={p.github}
										target="_blank"
										rel="noopener noreferrer"
									>
										<FaGithub />
									</a>
									<a
										href={p.live}
										target="_blank"
										rel="noopener noreferrer"
									>
										<FaExternalLinkAlt />
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}