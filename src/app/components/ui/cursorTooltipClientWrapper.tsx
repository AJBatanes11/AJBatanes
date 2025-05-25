"use client";

import { MouseEventHandler, ReactNode } from "react";
import { useCursorStore } from "../../store/cursorTooltipStore";

interface CursorClientWrapperProps {
  children: ReactNode;
  cursorVariant?: string;
  cursorLabel?: string;
  resetOnLeave?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export default function CursorClientWrapper({
  children,
  cursorVariant,
  cursorLabel,
  resetOnLeave = true,
  className = "",
  onClick,
}: CursorClientWrapperProps) {
  const { setCursor, resetCursor } = useCursorStore();

  return (
    <div
      className={className}
      onMouseEnter={() =>
        cursorVariant && setCursor(cursorVariant, cursorLabel)
      }
      onMouseLeave={() => resetOnLeave && resetCursor()}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
