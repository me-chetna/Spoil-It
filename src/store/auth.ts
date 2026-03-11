import { create } from "zustand"

interface AuthState {
  isLoggedIn: boolean
  openLogin: boolean
  setLoginModal: (value: boolean) => void
  login: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  openLogin: false,

  setLoginModal: (value) => set({ openLogin: value }),

  login: () =>
    set({
      isLoggedIn: true,
      openLogin: false
    })
}))