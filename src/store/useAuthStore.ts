import { create } from "zustand";
import { avatars } from '../data/avatars';

interface User {
  _id: string; // ✅ ADD THIS
  email?: string | null;
  name?: string | null;
  image?: string | null;
  spoilCoins?: number;
}

interface AuthState {
  user: User | null;
  openLogin: boolean;

  setUser: (user: User) => void;
  setLoginModal: (open: boolean) => void;
  logout: () => void;

  updateCoins: (coins: number) => void; // 🔥 ADD THIS
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  openLogin: false,

  setUser: (user) =>
    set({
      user,
    }),

  setLoginModal: (open) =>
    set({
      openLogin: open,
    }),

  logout: () =>
    set({
      user: null,
    }),

  // 🔥 update coins globally
  updateCoins: (coins) =>
    set((state) => ({
      user: state.user
        ? { ...state.user, spoilCoins: coins }
        : null,
    })),
}));