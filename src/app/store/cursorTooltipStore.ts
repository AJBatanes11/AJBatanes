import { create } from "zustand";

interface CursorState {
  variant: string;
  label?: string;
  setCursor: (variant: string, label?: string) => void;
  resetCursor: () => void;
}

export const useCursorStore = create<CursorState>((set) => ({
  variant: "default",
  label: undefined,
  setCursor: (variant, label) => set({ variant, label }),
  resetCursor: () => set({ variant: "default", label: undefined }),
}));
