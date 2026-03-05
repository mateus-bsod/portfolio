"use client";
import { useEffect, useState } from "react";
import dev from "../profile.json";

export default function SkillsGrid() {
  const [visibleSkills, setVisibleSkills] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
	const observer = new IntersectionObserver(
	  (entries) => {
		entries.forEach((entry) => {
		  const skillName = entry.target.getAttribute("data-skill");
		  if (skillName && entry.isIntersecting) {
			setVisibleSkills((prev) => ({ ...prev, [skillName]: false, }));
			setTimeout(() => {
				setVisibleSkills((prev) => ({ ...prev, [skillName]: true, }));
			}, 50);
		  }
		});
	  },
	  { threshold: 0.3 }
	);

	const elements = document.querySelectorAll("[data-skill]");
	elements.forEach((el) => observer.observe(el));

	return () => observer.disconnect();
  }, []);

  return (
		<div className="w-screen max-w-5xl mx-auto px-2 sm:px-4 md:px-0 flex flex-col items-center justify-center gap-4 py-4">
			<div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
				{dev.skills.map((skill) => {
					const isVisible = visibleSkills[skill.name];
					return (
						<div
						key={skill.name}
						data-skill={skill.name}
						className="flex flex-col items-center gap-1"
						>
						<div className="relative flex items-center justify-center w-full aspect-square max-w-[56px] max-h-[56px] bg-[var(--color-bg-darkest)]/50 border border-white/10 rounded-lg shadow-md shadow-[var(--color-black-opacity-50)] overflow-hidden">
							<img
								src={skill.icon} alt={skill.name}
								className={`w-3/4 h-3/4 max-w-[40px] max-h-[40px] md:max-w-[48px] md:max-h-[48px] filter transition-all duration-700 ${ isVisible ? "grayscale-0 opacity-100" : "grayscale opacity-40" }`}
							/>

							{isVisible && (
								<div className="absolute inset-0 pointer-events-none">
									<div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-white/0 via-white/40 to-white/0 transform rotate-12 blur-sm animate-shine"></div>
								</div>
							)}
						</div>
						<span className="text-xs sm:text-sm text-[var(--color-text-gray-light)]">{skill.name}</span>
						</div>
					);
				})}
			</div>
		</div>
  );
}