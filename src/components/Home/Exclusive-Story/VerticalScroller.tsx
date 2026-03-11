"use client";

import { useState } from "react";
import ContentCard from "@/components/Home/card-carousel/Card";
import { Content } from "@/types/content";

interface Props {
  items: Content[];
}

export default function VerticalScroller({ items }: Props) {

  const [index, setIndex] = useState(0);

  const visible = 3;

  const maxIndex = Math.max(0, items.length - visible);

  const scrollUp = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const scrollDown = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="flex flex-col items-center gap-3">

      {/* UP BUTTON */}
      <button onClick={scrollUp} className="text-3xl">
        ▲
      </button>

      {/* VIEWPORT */}
      <div className="overflow-hidden h-[830px]">

        <div
          className="flex flex-col gap-1 transition-transform duration-500"
          style={{
            transform: `translateY(-${index * 240}px)`
          }}
        >
          {items.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>

      </div>

      {/* DOWN BUTTON */}
      <button onClick={scrollDown} className="text-3xl">
        ▼
      </button>

    </div>
  );
}