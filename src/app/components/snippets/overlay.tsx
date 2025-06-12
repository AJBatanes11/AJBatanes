"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

type OverlayProps = {
  isActive: boolean;
  onClick?: () => void;
  className?: string;
  isHeader?: boolean;
};

export default function Overlay({
  isActive,
  onClick,
  className,
  isHeader = false,
}: OverlayProps) {
  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isActive]);

  return typeof window !== "undefined"
    ? createPortal(
        <AnimatePresence>
          {isActive && (
            <motion.div
              onClick={onClick}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`fixed inset-0 ${isHeader ? "z-30" : "z-40"} bg-black/50 backdrop-blur-sm ${className ?? ""}`}
            />
          )}
        </AnimatePresence>,
        document.body
      )
    : null;
}
