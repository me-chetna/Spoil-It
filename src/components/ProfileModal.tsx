"use client"

import { useState } from "react"
import AvatarModal from "@/components/AvatarModal"

export default function ProfileModal({ onClose }: { onClose: () => void }) {

  const [avatar, setAvatar] = useState<string | null>(null)
  const [openAvatarModal, setOpenAvatarModal] = useState(false)

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
            className="w-40 h-40 rounded-full bg-gray-300 overflow-hidden cursor-pointer hover:scale-105 transition"
          >

            {avatar && (
              <img
                src={avatar}
                className="w-full h-full object-cover"
              />
            )}

          </div>

        </div>

        {/* Profile Info */}

        <div className="space-y-6">

          <div>
            <h3 className="text-lg font-semibold">Name</h3>
            <p className="text-gray-400">Type your Name</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Spoil-Coins</h3>
            <p>10,000</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Total series Liked</h3>
            <p>10</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Email</h3>
            <p>abcd@gmail.com</p>
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