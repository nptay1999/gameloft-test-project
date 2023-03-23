import create from 'zustand';

interface ScrollState {
  scroll: {
    list: string[];
    active: number;
  };
  up: () => void;
  down: () => void;
  reset: () => void;
}

const useScroll = create<ScrollState>()((set) => ({
  scroll: {
    list: ['hero', 'form', 'community', 'promotion', 'exclustive', 'footer'],
    active: 0,
  },
  up: () =>
    set((state) => ({
      scroll: {
        ...state.scroll,
        active: state.scroll.active > 1 ? state.scroll.active - 1 : 0,
      },
    })),
  down: () =>
    set((state) => ({
      scroll: {
        ...state.scroll,
        active:
          state.scroll.active < state.scroll.list.length - 1
            ? state.scroll.active + 1
            : state.scroll.list.length - 1,
      },
    })),
  reset: () =>
    set((state) => ({
      scroll: { ...state.scroll, active: 0 },
    })),
}));

export default useScroll;
