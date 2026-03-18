"use client"

import { motion } from "framer-motion"

interface Props {
  name: string
  age: number
  birthday: string
  image: string
  rank: string
  onClick: () => void
}

export default function ArtistCard({
  name,
  age,
  birthday,
  image,
  rank,
  onClick
}: Props) {

  return (

    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center relative cursor-pointer"
    >

      {/* Rank */}
      <div className="absolute -top-2 bg-gradient-to-r from-pink-500 to-purple-500 text-black text-xs font-semibold px-3 py-1 rounded">
        {rank}
      </div>

      {/* Avatar */}
      <div className="w-28 h-28 rounded-full border-4 border-pink-500 overflow-hidden">
        <img
          src={image}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="font-semibold mt-3">
        {name}
      </h3>

      <div className="text-xs text-gray-300 text-center">
        <p>Age: {age}</p>
        <p>{birthday}</p>
      </div>

    </motion.div>
  )
}