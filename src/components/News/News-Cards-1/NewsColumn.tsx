"use client";

import { useState } from "react";
import NewsCard from "./NewsCard";

interface News {
  title: string;
  date: string;
  image: string;
}

interface Props {
  title: string;
  news: News[];
}

export default function NewsColumn({ title, news }: Props) {

  const [index, setIndex] = useState(0);

  const visibleCards = 4;
  const cardHeight = 90; // approximate card height

  const maxIndex = Math.max(0, news.length - visibleCards);

  const scrollUp = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const scrollDown = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="flex flex-col items-center">

      <h2 className="text-2xl font-bold text-black mb-4">
        {title}
      </h2>

      {/* UP BUTTON */}
      <button
        onClick={scrollUp}
        className="text-black text-2xl mb-2"
      >
        ▲
      </button>

      {/* VIEWPORT */}
      <div className="overflow-hidden h-[380px] w-full">

        {/* TRACK */}
        <div
          className="flex flex-col gap-3 transition-transform duration-500"
          style={{
            transform: `translateY(-${index * cardHeight}px)`
          }}
        >

          {news.map((item, i) => (
            <NewsCard
              key={i}
              title={item.title}
              date={item.date}
              image={item.image}
            />
          ))}

        </div>

      </div>

      {/* DOWN BUTTON */}
      <button
        onClick={scrollDown}
        className="text-black text-2xl mt-2"
      >
        ▼
      </button>

    </div>
  );
}