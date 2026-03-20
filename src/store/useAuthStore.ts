import { create } from "zustand";

interface User {
  email?: string | null;
  name?: string | null;
  image?: string | null;
}

interface AuthState {
  user: User | null;
  openLogin: boolean;

  setUser: (user: User) => void;
  setLoginModal: (open: boolean) => void;
  logout: () => void;
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
}));