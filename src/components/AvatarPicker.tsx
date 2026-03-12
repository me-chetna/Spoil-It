"use client"

import { avatars } from "@/data/avatars"

interface Props {
  selected: string | null
  setSelected: (id: string) => void
}

export default function AvatarPicker({ selected, setSelected }: Props) {
  return (
    <div className="grid grid-cols-5 gap-4 mt-6">

      {avatars.map((avatar) => (

        <div
          key={avatar.id}
          onClick={() => setSelected(avatar.src)}
          className={`cursor-pointer rounded-full p-1 transition 
            ${selected === avatar.src ? "ring-2 ring-white" : ""}
          `}
        >
          <img
            src={avatar.src}
            alt={avatar.label}
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>

      ))}

    </div>
  )
}