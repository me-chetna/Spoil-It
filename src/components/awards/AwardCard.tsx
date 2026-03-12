"use client"

import { motion } from "framer-motion"

interface Props {
  title: string
  image: string
}

export default function AwardCard({ title, image }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="w-40 h-40 rounded-2xl overflow-hidden shadow-lg relative cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-2 left-2 right-2 text-white text-xs font-semibold text-center bg-black/40 rounded px-1">
        {title}
      </div>
    </motion.div>
  )
}