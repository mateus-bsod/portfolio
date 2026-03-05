// ScrollArrowSmart.jsx
import { useEffect, useState } from "react";

export default function ScrollArrowSmart() {
  const [isLastSection, setIsLastSection] = useState(false);
  const [topValue, setTopValue] = useState<number | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const last = Array.from(sections).pop();
          const lastVisible = entry.isIntersecting && entry.target === last;
          setIsLastSection(lastVisible);
          setTopValue(lastVisible ? window.innerHeight * 0.10 : window.innerHeight * 0.85);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        top: topValue !== null ? `${topValue}px` : undefined,
        transition: "top 0.7s ease-in-out",
      }}
      className="fixed left-1/2 -translate-x-1/2 flex flex-col items-center z-50"
      onClick={() => {
        const sections = document.querySelectorAll("section");
        if (isLastSection) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const currentIndex = Array.from(sections).findIndex(
            (s) =>
              s.getBoundingClientRect().top >= 0 &&
              s.getBoundingClientRect().top < window.innerHeight
          );
          const nextSection = sections[currentIndex + 1];
          if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      <svg
        className={`w-6 h-6 text-white/40 animate-move-arrow transition-transform duration-300 ${
          isLastSection ? "rotate-180" : ""
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
      </svg>
    </div>
  );
}