"use client";

import { useState, useEffect } from "react";

interface NewsItem {
  id: number;
  image: string;
  headline: string;
}

/* Dummy data for now */
const dummyNews: NewsItem[] = [
  {
    id: 1,
    image: "https://images-luxe.outlookindia.com/2026/03/03151657/COVERN-PHOTO-ZENDAYA-AND-TOM.jpg",
    headline:
      "Tom Holland and Zendaya become first ever Spider-Man couple to go public",
  },
  {
    id: 2,
    image: "https://images.indianexpress.com/2025/09/Demon-Slayer.jpeg?w=1200",
    headline:
      "Demon Slayer movie breaks global anime box office records",
  },
  {
    id: 3,
    image: "https://dramabeans.com/wp-content/uploads/2026/01/133200547.1.jpg",
    headline:
      "Netflix announces new Korean drama lineup for 2026",
  },
];

export default function NewsHeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % dummyNews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentNews = dummyNews[index];

  return (
    <div className="relative w-full h-[520px] overflow-hidden">

      {/* IMAGE */}
      <img
        src={currentNews.image}
        className="w-full h-full object-cover"
      />

      {/* HEADLINE OVERLAY */}
      <div className="absolute bottom-20 left-10 bg-black/40 backdrop-blur-sm px-6 py-4 rounded-md max-w-[800px]">
        <h2 className="text-white text-3xl font-bold leading-snug">
          {currentNews.headline}
        </h2>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {dummyNews.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>

    </div>
  );
}