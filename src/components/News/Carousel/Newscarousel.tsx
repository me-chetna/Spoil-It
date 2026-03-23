"use client";

import { useEffect, useState } from "react";

export default function NewsHeroCarousel() {
  const [news, setNews] = useState<any[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch("/api/news?query=celebrity");
      const data = await res.json();

      // ✅ FIX: use articles
      const mapped =
        data.articles?.map((item: any) => ({
          image: item.image || "/fallback.jpg",
          headline: item.title,
          description: item.description || "No description available.",
        })) || [];

      setNews(mapped);
    };

    fetchNews();
  }, []);

  useEffect(() => {
    if (!news.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % news.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [news]);

  if (!news.length) return null;

  const currentNews = news[index];

  return (
    <div className="relative w-full h-[520px] overflow-hidden">
      
      {/* IMAGE */}
      <img
        src={currentNews.image}
        className="w-full h-full object-cover"
      />

      {/* TEXT OVERLAY */}
      <div className="absolute bottom-20 left-10 bg-black/40 backdrop-blur-sm px-6 py-4 rounded-md max-w-[800px] ">

        {/* HEADLINE */}
        <h2 className="text-white text-3xl font-bold leading-snug">
          {currentNews.headline}
        </h2>

        {/* ✅ DESCRIPTION ADDED */}
        <p className="text-gray-200 mt-3 text-sm leading-relaxed text-3xl">
          {currentNews.description}
        </p>

      </div>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {news.map((_, i) => (
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