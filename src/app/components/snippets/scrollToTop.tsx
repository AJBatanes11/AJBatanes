"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      setIsVisible(scrollY > 600);
      setIsAtBottom(scrollY + clientHeight >= scrollHeight - 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="scrollToTop"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="sticky mt-20 bottom-4 w-full z-40"
        >
          <div className="mr-2 p-3 float-right">
            <motion.div
              animate={{ rotate: isAtBottom ? 0 : 90 }}
              transition={{
                type: "spring",
                duration: 0.3,
                ease: "easeInOut",
                stiffness: 500,
                damping: 40,
              }}
              className="flex flex-row gap-1 items-center justify-center origin-bottom-right mr-2"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.2"
                stroke="currentColor"
                className="size-5 m-auto"
                animate={{ rotate: isAtBottom ? 90 : 0 }}
                transition={{
                  type: "spring",
                  duration: 0.3,
                  ease: "easeInOut",
                  stiffness: 500,
                  damping: 40,
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </motion.svg>
              <span className="text-sm whitespace-nowrap">Return to top</span>
            </motion.div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
