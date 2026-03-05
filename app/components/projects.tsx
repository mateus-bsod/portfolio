"use client"

import { useRef } from "react"
import Link from "next/link"
import dev from "../profile.json"

export default function ListProjects() {
	const projects = dev.projects
	const containerRef = useRef<HTMLDivElement>(null)

	const scrollNext = () => {
		if (!containerRef.current) return
		const card = containerRef.current.querySelector<HTMLDivElement>(".project-card")
		if (!card) return
		const cardWidth = card.offsetWidth + 24 // card + gap
		containerRef.current.scrollBy({ left: cardWidth, behavior: "smooth" })
	}

	const scrollPrev = () => {
		if (!containerRef.current) return
		const card = containerRef.current.querySelector<HTMLDivElement>(".project-card")
		if (!card) return
		const cardWidth = card.offsetWidth + 24
		containerRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" })
	}

	return (
		<div className="w-full flex flex-col items-center justify-center py-15">
			<div className="flex items-center gap-6">
				<div
					onClick={scrollPrev}
					className="text-white/40 text-4xl font-bold cursor-pointer select-none hover:scale-110 hover:rotate-10 transition-all duration-200 ease-linear"
				>
					&lt;
				</div>
				<div
					ref={containerRef}
					className="flex gap-6 overflow-x-scroll scroll-smooth -mx-2 px-2 hide-scrollbar w-[75vw]"
				>
					{projects.map((project) => (
						<div
							key={project.id}
							className="project-card flex-shrink-0 w-[200px] h-[320px] flex flex-col justify-between items-center bg-[#090909]/40 border border-[#808080]/30 p-4 rounded-lg shadow-lg"
						>
							{project.logo ? (
								<img
									src={project.logo}
									alt={project.name}
									className="w-24 h-24 object-contain mb-4 rounded-lg"
								/>
							) : (
								<div className="w-24 h-24 flex items-center justify-center bg-gray-300 text-gray-700 font-bold text-lg mb-4 rounded-lg">
									{project.projectName.slice(0, 2).toUpperCase()}
								</div>
							)}
							<h4 className="text-base font-semibold text-center whitespace-normal">{project.projectName}</h4>
							<p className="text-sm text-center text-[var(--color-text-gray-light)] whitespace-normal">{project.description}</p>
							<Link
								href={project.link}
								className="mt-auto text-sm text-[var(--color-primary-dark)] hover:underline"
							>
								Ver projeto
							</Link>
						</div>
					))}
				</div>
				<div
					onClick={scrollNext}
					className="text-white/40 text-4xl font-bold cursor-pointer select-none hover:scale-110 hover:-rotate-10 transition-all duration-200 ease-linear"
				>
					&gt;
				</div>
			</div>
		</div>
	)
}