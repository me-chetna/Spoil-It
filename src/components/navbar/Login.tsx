"use client"

import { useState } from "react"
import { useAuthStore } from "@/store/useAuthStore"
import { signIn } from "next-auth/react"

export default function Login() {

  const { openLogin, setLoginModal } = useAuthStore()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  if (!openLogin) return null

  async function handleLogin() {
    setLoading(true)

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    })

    setLoading(false)

    if (res?.ok) {
      setLoginModal(false)
      
    } else {
      alert("Invalid credentials")
    }
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-black p-10 rounded-3xl w-[500px] relative">

        {/* CLOSE */}
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

        {/* GOOGLE LOGIN */}
        <button
          onClick={() => signIn("google")}
          className="w-full bg-white text-black p-3 rounded-full hover:bg-gray-200 transition"
        >
          Sign up with Google
        </button>

      </div>

    </div>
  )
}