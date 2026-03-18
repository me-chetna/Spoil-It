"use client"

import { useAuthStore } from "@/store/auth"

export default function Login() {

  const { openLogin, setLoginModal, login } = useAuthStore()

  if (!openLogin) return null

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-black p-10 rounded-3xl w-[500px] relative">

        <button
          onClick={() => setLoginModal(false)}
          className="absolute right-5 top-5 text-white text-xl"
        >
          ✕
        </button>

        <h1 className="text-center text-3xl font-bold mb-2">
          OOPS!
        </h1>

        <p className="text-center text-gray-300 mb-8">
          Sign in to access all the benefits
        </p>

        <input
          placeholder="Email"
          className="w-full mb-4 p-3 rounded-full bg-gray-600"
        />

        <input
          placeholder="Password"
          type="password"
          className="w-full mb-4 p-3 rounded-full bg-gray-600"
        />

        <button
          onClick={login}
          className="w-full bg-white text-black p-3 rounded-full mb-4"
        >
          Login
        </button>

        <p className="text-center mb-4">OR</p>

        <button className="w-full bg-white text-black p-3 rounded-full">
          Sign up with Google
        </button>

      </div>

    </div>
  )
}