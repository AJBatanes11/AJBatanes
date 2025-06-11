"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-base-light dark:bg-base-dark"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut", delay: 1.2 }}
      style={{ pointerEvents: "none" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        role="img"
        aria-hidden="true"
        className="text-base-dark dark:text-base-light"
      >
        <title>AJ CB Logo</title>

        {/* Rotating Polygon Border */}
        <motion.g
          animate={{ rotate: 360 }}
          transform="rotate(0, 50, 50)"
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        >
          <polygon
            points="25,5 75,5 95,25 95,75 75,95 25,95 5,75 5,25"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          />
        </motion.g>

        {/* Static AJ + CB Text */}
        <text
          x="50%"
          y="40%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontSize="32"
          fontWeight="bold"
          fill="currentColor"
        >
          AJ
        </text>
        <text
          x="50%"
          y="65%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontSize="32"
          fontWeight="bold"
          fill="currentColor"
        >
          CB
        </text>
      </svg>
    </motion.div>
  );
}
