"use client";

import { motion } from "framer-motion";
import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  main?: boolean;
  dark?: boolean;
  small?: boolean;
  disableTheming?: boolean;
  disableReveal?: boolean;
  ariaLabel?: string;
};

export default function Container({
  children,
  main = false,
  dark = false,
  small = false,
  disableTheming = false,
  disableReveal = false,
  ariaLabel = "Container",
}: ContainerProps) {
  const themeAttr = !disableTheming ? { "data-theme": dark } : {};

  return (
    <motion.section
      {...themeAttr}
      aria-label={ariaLabel}
      initial={disableReveal ? false : { opacity: 0, y: 60 }}
      whileInView={disableReveal ? undefined : { opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      viewport={{
        once: false, // important: animate in *and* out
        amount: 0.15, // like your 15% threshold
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`
        ${small ? "" : "min-h-screen"}
        ${main ? "" : "py-10"}
      `}
    >
      {children}
    </motion.section>
  );
}
