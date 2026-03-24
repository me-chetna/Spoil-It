"use client";

import { useEffect, useState } from "react";
import HeroCategories from "@/components/Home/Main Carousel/HeroCategories";
import HorizontalCarousel from "@/components/Home/card-carousel/Horizontalcarousel";
import CommunitySection from "@/components/Home/Community-main-page/CommunitySection";
import ExclusiveStory from "@/components/Home/Exclusive-Story/ExclusiveStory";
import { Content } from "@/types/content";
import HeroSearch from "@/components/Home/Search/HomeSearch";

export default function Home() {
  const [trending, setTrending] = useState<Content[]>([]);
  const [topRated, setTopRated] = useState<Content[]>([]);
  const [popular, setPopular] = useState<Content[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [trendRes, topRes, popRes] = await Promise.all([
          fetch("/api/tmdb/trending"),
          fetch("/api/tmdb/topRated"),
          fetch("/api/tmdb/popular"),
        ]);

        const trendData = await trendRes.json();
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

        setTrending(mapData(trendData.results));
        setTopRated(mapData(topData.results));
        setPopular(mapData(popData.results));

      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchData();
  }, []);

  // ✅ Loading state
  if (!trending.length || !topRated.length || !popular.length) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <main>
      <HeroCategories />

      {/* SEARCH */}
      <HeroSearch />

      {/* ⭐ Top Rated */}
      <HorizontalCarousel
        title="Top Rated"
        items={topRated}
        color="white"
        bgColor="black"
      />

      {/* 🔥 Trending */}
      <HorizontalCarousel
        title="Trending Now"
        items={trending}
        color="black"
        bgColor="white"
      />

      {/* 🆕 Fresh Arrivals */}
      <HorizontalCarousel
        title="Fresh Arrivals"
        items={popular}
        color="white"
        bgColor="black"
      />

      <CommunitySection />
      <ExclusiveStory />
    </main>
  );
}