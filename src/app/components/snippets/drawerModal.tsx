"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ModalPortal from "./modalPortal";

interface DrawerModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string; // e.g. "640px" or "80vw"
}

const drawerVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      duration: 0.6,
      ease: "easeInOut",
      stiffness: 200,
      damping: 25,
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export default function DrawerModal({
  isOpen,
  onClose,
  children,
  maxWidth = "640px",
}: DrawerModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`; // prevent layout shift
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <ModalPortal>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              onClick={onClose}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={drawerVariants}
              role="dialog"
              aria-modal="true"
              className="fixed right-0 top-0 z-50 h-full w-full shadow-xl overflow-y-auto scroll-smooth bg-white text-black"
              style={{ maxWidth }}
              onClick={(e) => e.stopPropagation()}
              onWheel={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              {children}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </ModalPortal>
  );
}
