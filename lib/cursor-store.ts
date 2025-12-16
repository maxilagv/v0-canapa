import { create } from 'zustand';

type CursorState = 'default' | 'hover' | 'text';

interface CursorStore {
  cursorState: CursorState;
  setCursorState: (newState: CursorState) => void;
}

export const useCursorStore = create<CursorStore>((set) => ({
  cursorState: 'default',
  setCursorState: (newState) => set({ cursorState: newState }),
}));
