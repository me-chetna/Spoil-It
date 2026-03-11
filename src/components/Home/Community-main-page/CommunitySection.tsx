"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import CommunityCarousel from "./CommunityCarousel";

const reviews = [
  {
    title: "Queen of Tears",
    review: "Queen of Tears is widely considered worth watching...",
    user: "Crazyme",
    rating: 9,
  },
  {
    title: "Solo Levelling",
    review: "Solo Leveling is a masterpiece...",
    user: "Crazyme",
    rating: 11,
  },
  {
    title: "YJHD",
    review: "Yeh Jawaani Hai Deewani blends love and adventure.",
    user: "Crazyme",
    rating: 8.5,
  },
  {
    title: "TSITP",
    review: "The Summer I Turned Pretty was different.",
    user: "Crazyme",
    rating: 5,
  },
  {
    title: "Queen of Tears",
    review: "Queen of Tears is widely considered worth watching...",
    user: "Crazyme",
    rating: 9,
  },
  {
    title: "Solo Levelling",
    review: "Solo Leveling is a masterpiece...",
    user: "Crazyme",
    rating: 11,
  },
  {
    title: "YJHD",
    review: "Yeh Jawaani Hai Deewani blends love and adventure.",
    user: "Crazyme",
    rating: 8.5,
  },
  {
    title: "TSITP",
    review: "The Summer I Turned Pretty was different.",
    user: "Crazyme",
    rating: 5,
  },
];

export default function CommunitySection() {

  const [query, setQuery] = useState("");

  const filtered = reviews.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.user.toLowerCase().includes(query.toLowerCase())
  );

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