"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import dev from "../profile.json";

export default function ListProjects() {

    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    const [offset, setOffset] = useState(0);

    const projects = dev.projects;

    useEffect(() => {
        let animationFrame: number;

        const step = () => {
            if (!isPaused && contentRef.current && containerRef.current) {
                const width = contentRef.current.scrollWidth / 2;
                setOffset((prev) => {
                const next = prev + 1;
                return next >= width ? 0 : next;
                });
            }
            animationFrame = requestAnimationFrame(step);
        };
        animationFrame = requestAnimationFrame(step);

        return () => cancelAnimationFrame(animationFrame);
    }, [isPaused]);

    return (
        <div
            className="w-full overflow-hidden relative max-w-5xl mx-auto select-none py-10"
            ref={containerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >

        <div className="absolute left-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-r from-transparent to-[rgba(255,255,255,0)]" />
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-transparent to-[rgba(255,255,255,0)]" />

        <div
            ref={contentRef}
            className="flex whitespace-nowrap"
            style={{ transform: `translateX(-${offset}px)` }}
        >
            {[...projects, ...projects].map((project, idx) => (
                <div
                    key={idx}
                    className="flex flex-col items-center justify-center mx-8 min-w-[150px]"
                >
                    {project.logo ? (
                    <img
                        src={project.logo}
                        alt={project.name}
                        className="w-20 h-20 object-contain mb-2 rounded-lg bg-white/10"
                    />
                    ) : (
                    <div className="w-20 h-20 flex items-center justify-center bg-gray-300 text-gray-700 font-bold text-lg mb-2 rounded-lg">
                        {project.projectName.slice(0, 2).toUpperCase()}
                    </div>
                    )}

                    <h4 className="text-sm font-semibold text-center">{project.projectName}</h4>
                    <p className="text-xs text-center text-slate-400 mb-1">{project.description}</p>
                    <Link
                    href={project.link}
                    className="text-xs text-[var(--color-primary-dark)] hover:underline"
                    >
                    Ver projeto
                    </Link>
                </div>
            ))}
        </div>
        </div>
    );
}