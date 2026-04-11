"use client"

import { useState, useEffect } from "react"
import AvatarModal from "@/components/profile/AvatarModal"
import { useAuthStore } from "@/store/useAuthStore"

export default function ProfileModal({ onClose }: { onClose: () => void }) {

  const user = useAuthStore((state) => state.user)
  const [openAvatarModal, setOpenAvatarModal] = useState(false)
  const [likeCount, setLikeCount] = useState(0)

  // ✅ Derive avatar directly from store — no local state needed
  const avatarSrc = user?.avatar || user?.image || "/fallback.jpg"

  useEffect(() => {
    if (!user?.email) return
    const fetchLikes = async () => {
      try {
        const res = await fetch(`/api/likes?userId=${user.email}`)
        const data = await res.json()
        setLikeCount(data.length || 0)
      } catch (err) {
        console.error("Like fetch error:", err)
      }
    }
    fetchLikes()
  }, [user])

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-black rounded-3xl w-[600px] p-10 my-20 relative text-white">

        <button onClick={onClose} className="absolute right-6 top-6 text-2xl">✕</button>

        {/* Avatar */}
        <div className="flex justify-center mb-8">
          <div
            onClick={() => setOpenAvatarModal(true)}
            className="w-40 h-40 rounded-full bg-gray-300 overflow-hidden cursor-pointer hover:scale-105 transition"
          >
            <img
              src={avatarSrc}   // ✅ always in sync with store
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">{user?.name || "No name"}</h3>
            <p className="text-gray-400">{user?.email || "No email"}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Spoil-Coins</h3>
            <p>{user?.spoilCoins ?? 0}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Total series Liked</h3>
            <p>{likeCount}</p>
          </div>
        </div>

      </div>

      {openAvatarModal && (
        <AvatarModal
          onClose={() => setOpenAvatarModal(false)} // ✅ no setAvatar prop needed anymore
        />
      )}
    </div>
  )
}