import { create } from "zustand";

export const useDarkModeStore = create<{
  count: number;
  setCount: (count: number) => void;
}>((set) => ({
  count: 0,
  setCount: (count) => {
    set(() => {
      if (typeof document !== "undefined") {
        if (count > 0) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
      return { count };
    });
  },
}));
