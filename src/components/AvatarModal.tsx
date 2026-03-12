"use client"

import { avatars } from "@/data/avatars"

interface Props {
  setAvatar: (avatar: string) => void
  onClose: () => void
}

export default function AvatarModal({ setAvatar, onClose }: Props) {

  return (

    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-black p-8 rounded-3xl w-[500px]">

        <h2 className="text-white text-xl mb-6 text-center">
          Choose Your Avatar
        </h2>

        <div className="grid grid-cols-5 gap-4">

          {avatars.map((avatar) => (

            <img
              key={avatar.id}
              src={avatar.src}
              className="w-16 h-16 rounded-full cursor-pointer hover:scale-110 transition"
              onClick={() => {
                setAvatar(avatar.src)
                onClose()
              }}
            />

          ))}

        </div>

      </div>

    </div>
  )
}