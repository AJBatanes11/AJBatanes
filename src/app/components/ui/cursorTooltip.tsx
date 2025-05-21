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
    default: "w-2 h-2 bg-black dark:bg-white rounded-full",
    label:
      "w-24 h-24 bg-black dark:bg-white rounded-full flex items-center justify-center text-sm font-semibold text-white dark:text-black",
    invisible: "w-8 h-8 bg-transparent",
    zoom: "w-20 h-20 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-semibold",
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
      {variant === "label" || variant === "zoom" ? label : null}
    </div>
  );
}
