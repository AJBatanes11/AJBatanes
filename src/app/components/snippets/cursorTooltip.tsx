"use client";

import { useEffect, useRef } from "react";
import { useCursorStore } from "../../store/cursorTooltipStore";

export default function CursorTooltip() {
  const { variant, label } = useCursorStore();
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const animFrameId = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const updatePosition = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      animFrameId.current = requestAnimationFrame(updatePosition);
    };

    animFrameId.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  const variantStyles: Record<string, string> = {
    default: "w-8 h-8 bg-transparent",
    invert: "w-2 h-2 bg-base-light",
    label: "w-24 h-24 bg-base-dark text-base-light",
    labelInvert: "w-24 h-24 bg-base-light text-base-dark",
    invisible: "w-8 h-8 bg-transparent",
  };

  return (
    <div
      ref={cursorRef}
      className={`fixed pointer-events-none select-none z-[9999] rounded-full hidden lg:flex items-center justify-center text-sm font-semibold transition-all duration-200 ease-out ${
        variantStyles[variant] ?? variantStyles.default
      }`}
      // Notice: no inline style for transform here, it's managed inside RAF loop
    >
      {(variant === "label" || variant === "labelInvert") && label}
    </div>
  );
}
