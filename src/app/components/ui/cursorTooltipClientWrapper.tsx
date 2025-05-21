"use client";

import { ReactNode } from "react";
import { useCursorStore } from "../../store/cursorTooltipStore";

interface CursorClientWrapperProps {
  children: ReactNode;
  cursorVariant?: string;
  cursorLabel?: string;
  resetOnLeave?: boolean;
}

export default function CursorClientWrapper({
  children,
  cursorVariant,
  cursorLabel,
  resetOnLeave = true,
}: CursorClientWrapperProps) {
  const { setCursor, resetCursor } = useCursorStore();

  return (
    <div
      onMouseEnter={() =>
        cursorVariant && setCursor(cursorVariant, cursorLabel)
      }
      onMouseLeave={() => resetOnLeave && resetCursor()}
    >
      {children}
    </div>
  );
}
