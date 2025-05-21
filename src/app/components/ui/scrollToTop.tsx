"use client";

import { useEffect, useState } from "react";
import { useCursorStore } from "../../store/cursorTooltipStore";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { setCursor, resetCursor } = useCursorStore();

  return (
    <>
      <button
        onClick={scrollToTop}
        className="sticky bottom-4 w-full z-50"
        aria-label="Scroll to top"
        onMouseEnter={() => setCursor("labelInvert", "Back to Top")}
        onMouseLeave={resetCursor}
      >
        <div
          className={`mr-2 p-3 float-right text-dark-glass dark:text-light-glass transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          Back to Top
        </div>
      </button>
    </>
  );
}
