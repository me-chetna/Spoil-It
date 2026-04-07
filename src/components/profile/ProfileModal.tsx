"use client"

import { useState, useEffect } from "react"
import AvatarModal from "@/components/profile/AvatarModal"
import { useAuthStore } from "@/store/useAuthStore"

export default function ProfileModal({ onClose }: { onClose: () => void }) {

  const user = useAuthStore((state) => state.user)

  const [avatar, setAvatar] = useState<string | null>(null)
  const [openAvatarModal, setOpenAvatarModal] = useState(false)

  const [likeCount, setLikeCount] = useState(0) // ✅ NEW

  // 🔥 Set avatar
  useEffect(() => {
    if (user?.image) {
      setAvatar(user.image)
    }
  }, [user])

  // 🔥 FETCH LIKES COUNT
  useEffect(() => {
    if (!user?.email) return

    const fetchLikes = async () => {
      try {
        const res = await fetch(`/api/likes?userId=${user.email}`)
        const data = await res.json()

        setLikeCount(data.length || 0) // ✅ COUNT
      } catch (err) {
        console.error("Like fetch error:", err)
      }
    }

    fetchLikes()
  }, [user])

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-black rounded-3xl w-[600px] p-10 my-20 relative text-white">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-2xl"
        >
          ✕
        </button>

        {/* Avatar */}
        <div className="flex justify-center mb-8">
          <div
            onClick={() => setOpenAvatarModal(true)}
            className="w-40 h-40 rounded-full bg-gray-300 overflow-hidden cursor-pointer hover:scale-105 transition flex items-center justify-center"
          >
            {avatar ? (
              <img
                src={user?.image || "/fallback.jpg"}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-black">No Image</span>
            )}
          </div>
        </div>

        {/* Profile Info */}
        <div className="space-y-6">

          <div>
            <h3 className="text-lg font-semibold">{user?.name || "No name"}</h3>
            <p className="text-gray-400">
              {user?.email || "No email"}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Spoil-Coins</h3>
            <p>{user?.spoilCoins ?? 0}</p>
          </div>

          {/* ✅ FIXED LIKE COUNT */}
          <div>
            <h3 className="text-lg font-semibold">Total series Liked</h3>
            <p>{likeCount}</p>
          </div>

        </div>

      </div>

      {openAvatarModal && (
        <AvatarModal
          setAvatar={setAvatar}
          onClose={() => setOpenAvatarModal(false)}
        />
      )}

    </div>
  )
}