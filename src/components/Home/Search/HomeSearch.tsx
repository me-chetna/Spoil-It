"use client";

import { useState } from "react";
import HorizontalCarousel from "@/components/Home/card-carousel/Horizontalcarousel";
import { Content } from "@/types/content";

export default function HeroSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Content[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);

    try {
      const res = await fetch(
        `/api/tmdb/search?query=${encodeURIComponent(query)}`
      );
      const data = await res.json();

      const mapped: Content[] =
        data.results?.map((item: any) => ({
          id: item.id,
          title: item.title || item.name,
          poster: item.poster_path
            ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
            : "/fallback.jpg",
          type: item.media_type === "tv" ? "tv" : "movie",
          watchCount: item.vote_average
            ? `⭐ ${item.vote_average.toFixed(1)}`
            : "N/A",
        })) || [];

      setResults(mapped);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full py-16 bg-black flex flex-col items-center">

      {/* TEXT */}
      <h1 className="text-white text-4xl font-bold mb-2">
        Welcome.
      </h1>

      <p className="text-gray-300 mb-6">
        Millions of movies, TV shows and people to discover. Explore now.
      </p>

      {/* SEARCH BAR */}
      <div className="flex w-[60%] bg-white rounded-full overflow-hidden">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie, tv show, person..."
          className="flex-1 px-6 py-3 outline-none text-black"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />

        <button
          onClick={handleSearch}
          className="bg-cyan-500 text-white px-6"
        >
          Search
        </button>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-white mt-6">Searching...</p>
      )}

      {/* ✅ THIS IS THE MAIN FIX */}
      {results.length > 0 && (
        <HorizontalCarousel
          title={`Results for "${query}"`}
          items={results}
          color="white"
          bgColor="black"
        />
      )}

    </div>
  );
}