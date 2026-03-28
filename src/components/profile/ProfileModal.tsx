"use client"

import { useState, useEffect } from "react"
import AvatarModal from "@/components/profile/AvatarModal"
import { useAuthStore } from "@/store/useAuthStore"

export default function ProfileModal({ onClose }: { onClose: () => void }) {

  const  user  = useAuthStore((state) => state.user)

  const [avatar, setAvatar] = useState<string | null>(null) // To store the avatar URL
  const [openAvatarModal, setOpenAvatarModal] = useState(false) //To open the avatar dialogue box

  // 🔥 Set avatar from logged-in user
  useEffect(() => {
    if (user?.image) {
      setAvatar(user.image)
    }
  }, [user])

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      {/* Profile Card */}
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
                src={user?.avatar || user?.image}
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
            <p>{user?.spoilCoins ?? 0}</p> {/* 🔥 later from DB */}
          </div>

          <div>
            <h3 className="text-lg font-semibold">Total series Liked</h3>
            <p>0</p> {/* 🔥 later dynamic */}
          </div>
        </div>

      </div>

      {/* Avatar Selection Popup */}
      {openAvatarModal && (
        <AvatarModal
          setAvatar={setAvatar}
          onClose={() => setOpenAvatarModal(false)}
        />
      )}

    </div>
  )
}