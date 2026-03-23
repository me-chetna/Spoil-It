"use client";

import { useEffect, useState } from "react";
import SearchBar from "@/components/Home/Community-main-page/SearchBar";
import CommunityCarousel from "./CommunityCarousel";

interface Review {
  title: string;
  review: string;
  user: string;
  rating: number;
}

export default function CommunitySection() {
  const [query, setQuery] = useState("");
  const [reviews, setReviews] = useState<Review[]>([]);

  // ✅ Fetch from backend
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/reviews");
        const data = await res.json();

        setReviews(data.reviews); // 🔥 IMPORTANT
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };

    fetchReviews();
  }, []);

  // ✅ Filter logic
  const filtered = reviews.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.user.toLowerCase().includes(query.toLowerCase())
  );

  // ✅ Loading state
  if (!reviews.length) {
    return <div className="text-center mt-10">Loading community...</div>;
  }

  return (
    <div className="bg-white py-12">

      <h2 className="text-4xl font-bold text-center text-black">
        Community
      </h2>

      <SearchBar value={query} onChange={setQuery} />

      <CommunityCarousel reviews={filtered} />

    </div>
  );
}