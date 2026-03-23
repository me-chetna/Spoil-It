"use client";

import { useEffect, useState } from "react";
import FeaturedNewsCard from "./FeaturedNewsCard";

export default function FeaturedNews() {
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch("/api/news");
      const data = await res.json();

      const mapped =
        data.data?.map((item: any) => ({
          image: item.image || "/fallback.jpg",
          title: item.title,
          description: item.description || "No description available",
        })) || [];

      setNews(data.articles || []);
    };

    fetchNews();
  }, []);

  return (
    <section className="bg-black px-16 py-16">
      <h2 className="text-4xl text-white font-bold mb-10 text-center">
        Featuring News
      </h2>

      <div className="flex flex-col gap-6">
        {news.slice(0, 15).map((item, i) => (
          <FeaturedNewsCard
            key={i}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}