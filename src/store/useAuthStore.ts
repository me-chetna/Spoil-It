import { create } from "zustand";

interface User {
  _id: string;
  email?: string | null;
  name?: string | null;
  image?: string | null;
  avatar?: string | null;
  spoilCoins?: number;
}

interface AuthState {
  user: User | null;
  openLogin: boolean;

  setUser: (user: User | null) => void;
  setLoginModal: (open: boolean) => void;
  logout: () => void;
  updateCoins: (coins: number) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  openLogin: false,

  setUser: (user) => set({ user }),
  setLoginModal: (open) => set({ openLogin: open }),
  logout: () => set({ user: null }),

  updateCoins: (coins) =>
    set((state) => ({
      user: state.user ? { ...state.user, spoilCoins: coins } : null,
    })),
}));