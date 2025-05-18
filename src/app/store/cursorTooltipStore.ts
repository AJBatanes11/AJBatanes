// stores/cursorStore.ts
import { create } from 'zustand'

export type CursorTooltipVariant = 'default' | 'label' | 'invisible' | 'zoom'

interface CursorTooltipState {
  variant: CursorTooltipVariant
  label: string
  setCursor: (variant: CursorTooltipVariant, label?: string) => void
  resetCursor: () => void
}

export const useCursorStore = create<CursorTooltipState>((set) => ({
  variant: 'default',
  label: '',
  setCursor: (variant, label = '') => set({ variant, label }),
  resetCursor: () => set({ variant: 'default', label: '' }),
}))
