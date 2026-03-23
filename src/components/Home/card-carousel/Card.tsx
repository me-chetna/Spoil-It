"use client";

import { Content } from "@/types/content";

interface Props {
  item: Content;
  color?: string;
}

export default function ContentCard({ item, color }: Props) {
  return (
    <div className="cursor-pointer">

      {/* IMAGE */}
      <div className="relative group overflow-hidden rounded-md">

        <img
          src={item.poster}
          className="w-full h-[220px] object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Episode / Season badge */}
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
          {item.type === "movie" ? "M1" : "TV"}
        </div>

      </div>

      {/* TITLE */}
      <h3 className="mt-2 text-sm font-semibold" style={{color: color}}>
        {item.title}
      </h3>

      {/* WATCH COUNT */}
      <p className="text-xs text-gray-700">
        Ratings : {item.watchCount}
      </p>

    </div>
  );
}