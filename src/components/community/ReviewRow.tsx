"use client";

import { useState } from "react";

export default function ReviewRow({ data }: any) {
  const [pause, setPause] = useState(false);

  // ✅ use actual reviews
  const reviewCards = data.reviews;

  return (
    <div className="flex items-start gap-10 mb-16">

      {/* Poster */}
      <div className="w-[140px] flex-shrink-0">

        <img
          src={data.poster}
          className="rounded-xl h-[190px] object-cover"
        />

        <p className="font-semibold mt-2">{data.title}</p>

      </div>

      {/* Marquee Reviews */}
      <div
        className="overflow-hidden flex-1"
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
      >

        <div
          className="flex gap-8 w-max marquee"
          style={{
            animationPlayState: pause ? "paused" : "running",
          }}
        >

          {/* ✅ loop reviews */}
          {[...reviewCards, ...reviewCards].map((r, i) => (
            <div
              key={i}
              className="bg-gray-200 text-black w-[300px] p-5 rounded-lg"
            >
              <p className="text-sm leading-relaxed">
                {r.text}
              </p>

              <div className="text-xs mt-4 text-gray-600">
                By : {r.author} &nbsp;
                <b>Rating : {r.rating}</b>
              </div>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}