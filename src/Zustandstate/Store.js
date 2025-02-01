import { create } from 'zustand';

const useStore = create((set) => ({
  currency: 'usd',
  setCurrency: (newCurrency) => set((state) => ({
    ...state,
    currency: newCurrency,
  })),
}));

export default useStore;
