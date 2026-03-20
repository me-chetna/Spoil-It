import { create } from "zustand"


interface User {
  email?: string | null
  name?: string | null
  image?: string | null
}

interface AuthState {
  user: User | null
  isLoggedIn: boolean
  openLogin: boolean

  setLoginModal: (value: boolean) => void
  setUser: (user: User) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoggedIn: false,
  openLogin: false,

  setLoginModal: (value) => set({ openLogin: value }),

  setUser: (user) =>
    set({
      user,
      isLoggedIn: true,
    }),

  logout: () =>
    set({
      user: null,
      isLoggedIn: false,
    }),
}))