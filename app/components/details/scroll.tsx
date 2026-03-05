"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animationFrame: number;

    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
      animationFrame = requestAnimationFrame(updateProgress); // atualiza frame a frame
    };

    animationFrame = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <>
      <div className="fixed bottom-0 left-0 w-full h-2 bg-black/ z-50">
        <div
          className="h-2 bg-[#553fdd] transition-all duration-150 ease-linear"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </>
  );
}