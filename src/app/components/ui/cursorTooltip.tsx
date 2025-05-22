"use client";

import { useEffect, useRef, useState } from "react";
import { useCursorStore } from "../../store/cursorTooltipStore";

export default function CursorTooltip() {
  const { variant, label } = useCursorStore();
  const cursorRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let requestId: number;

    const move = (e: MouseEvent) => {
      cancelAnimationFrame(requestId);
      requestId = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(requestId);
    };
  }, []);

  const variantStyles: Record<string, string> = {
    default: "w-2 h-2 bg-black-custom dark:bg-white-custom",
    invert: "w-2 h-2 bg-white-custom dark:bg-black-custom",
    label:
      "w-24 h-24 bg-black-custom dark:bg-white-custom text-white-custom dark:text-black-custom flex items-center justify-center",
    labelInvert:
      "w-24 h-24 bg-white-custom dark:bg-black-custom text-black-custom dark:text-white-custom flex items-center justify-center",
    invisible: "w-8 h-8 bg-transparent",
  };

  return (
    <div
      ref={cursorRef}
      className={`fixed pointer-events-none select-none z-[9999] rounded-full hidden lg:flex items-center justify-center text-sm font-semibold transition-all duration-150 ease-out ${
        variantStyles[variant] ?? variantStyles.default
      }`}
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
      }}
    >
      {variant === "label" || variant === "labelInvert" ? label : null}
    </div>
  );
}
