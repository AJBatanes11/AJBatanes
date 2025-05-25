"use client";

import { useEffect, useState } from "react";

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

  return (
    <>
      <button
        onClick={scrollToTop}
        className="sticky bottom-4 w-full z-50"
        aria-label="Scroll to top"
      >
        <div
          className={`mr-2 p-3 float-right text-dark-glass dark:text-light-glass transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-row gap-1 items-center justify-center rotate-90 origin-bottom-right mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.2"
              stroke="currentColor"
              className="size-5 m-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>

            <span className="text-sm whitespace-nowrap">Return to top</span>
          </div>
        </div>
      </button>
    </>
  );
}
