import { useEffect, useRef, useState } from "react";

export interface Section {
  id: string;
  label: string;
}

export function useSectionScroll(sections: Section[]) {
  const [active, setActive] = useState(sections[0]?.id || "");
  const sectionRefs = useRef<Record<string, HTMLElement>>({});
  const isScrolling = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sectionRefs.current).forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    if (isScrolling.current) return;
    const currentIndex = sections.findIndex((s) => s.id === active);
    if (e.deltaY > 0) {
      const next = sections[currentIndex + 1];
      if (next) {
        isScrolling.current = true;
        sectionRefs.current[next.id]?.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => (isScrolling.current = false), 800);
      }
    } else if (e.deltaY < 0) {
      const prev = sections[currentIndex - 1];
      if (prev) {
        isScrolling.current = true;
        sectionRefs.current[prev.id]?.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => (isScrolling.current = false), 800);
      }
    }
  };

  useEffect(() => {
    const onWheel = (e: WheelEvent) => handleWheel(e);
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [active]);

  return { active, sectionRefs, handleClick };
}