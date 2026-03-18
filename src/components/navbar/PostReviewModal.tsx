"use client";

import { useState } from "react";

interface Props {
  onClose: () => void;
}

const contentList = [
  "Interstellar",
  "Attack on Titan",
  "Queen of Tears",
  "Breaking Bad",
  "Your Name",
  "Avengers Endgame"
];

export default function PostReviewModal({ onClose }: Props) {

  const [search,setSearch] = useState("");
  const [selected,setSelected] = useState("");
  const [review,setReview] = useState("");
  const [rating,setRating] = useState(0);

  const filtered = contentList.filter((item)=>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100]">

      <div className="bg-zinc-900 p-8 rounded-xl w-[600px] max-w-[90%]">

        {/* HEADER */}
        <div className="flex justify-between mb-6">
          <h2 className="text-white text-2xl font-semibold">
            Post a Review
          </h2>

          <button onClick={onClose} className="text-white text-lg">
            ✕
          </button>
        </div>

        {/* SEARCH DROPDOWN */}
        <div className="mb-6">

          <input
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="Search movie / anime / series..."
            className="w-full p-3 rounded-lg bg-black text-white border border-white/20 outline-none"
          />

          {search && (
            <div className="bg-black border border-white/20 rounded-lg mt-2 max-h-40 overflow-y-auto">

              {filtered.map((item,i)=>(
                <div
                  key={i}
                  onClick={()=>{
                    setSelected(item);
                    setSearch("");
                  }}
                  className="px-4 py-2 text-white hover:bg-white hover:text-black cursor-pointer"
                >
                  {item}
                </div>
              ))}

            </div>
          )}

          {selected && (
            <p className="text-green-400 mt-2 text-sm">
              Selected: {selected}
            </p>
          )}

        </div>

        {/* REVIEW TEXT */}
        <textarea
          value={review}
          onChange={(e)=>setReview(e.target.value)}
          placeholder="Write your review..."
          className="w-full h-32 p-3 rounded-lg bg-black text-white border border-white/20 outline-none mb-6"
        />

        {/* STAR RATING */}
        <div className="flex gap-2 mb-6">

          {[...Array(10)].map((_,i)=>{

            const star = i+1;

            return (
              <button
                key={star}
                onClick={()=>setRating(star)}
                className={`text-2xl ${
                  star <= rating ? "text-yellow-400" : "text-gray-500"
                }`}
              >
                ★
              </button>
            );
          })}

        </div>

        {/* SUBMIT */}
        <button
          className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Submit Review
        </button>

      </div>

    </div>
  );
}