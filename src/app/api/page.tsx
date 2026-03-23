"use client";

import { useEffect, useState } from "react";
import ContentCarousel from "@/components/Home/card-carousel/Horizontalcarousel";
import { Content } from "@/types/content";

export default function Home() {
  const [topRated, setTopRated] = useState<Content[]>([]);
  const [popular, setPopular] = useState<Content[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [topRes, popRes] = await Promise.all([
          fetch("/api/tmdb/top-rated"),
          fetch("/api/tmdb/popular"),
        ]);

        const topData = await topRes.json();
        const popData = await popRes.json();

        const mapData = (data: any[]): Content[] =>
          data.map((item) => ({
            id: item.id,
            title: item.title || item.name,
            poster: item.poster_path
              ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
              : "/fallback.jpg",
            type: item.media_type || "movie",
            watchCount: item.vote_average
              ? `⭐ ${item.vote_average.toFixed(1)}`
              : "N/A",
          }));

        setTopRated(mapData(topData.results));
        setPopular(mapData(popData.results));

      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchData();
  }, []);

  // ✅ Loading state
  if (!topRated.length || !popular.length) {
    return (
      <div className="text-white text-center mt-20">
        Loading...
      </div>
    );
  }

  return (
    <div>

      {/* ⭐ Top Rated */}
      <ContentCarousel
        title="⭐ Top Rated"
        items={topRated}
        color="black"
        bgColor="#f5f5f5"
      />

      {/* 🆕 Fresh Arrivals */}
      <ContentCarousel
        title="🆕 Fresh Arrivals"
        items={popular}
        color="white"
        bgColor="#111"
      />

    </div>
  );
}