"use client";

import { useEffect, useState } from "react";

type Props = {
  images: string[];
  active: boolean;
};

export default function HeroPanel({ images, active }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!active) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [active, images.length]);

  return (
    <div className="absolute inset-0 overflow-hidden">

      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {images.map((img, i) => (
          <div key={i} className="min-w-full h-full">

            <img
              src={img}
              className="w-full h-full object-cover"
            />

          </div>
        ))}
      </div>

    </div>
  );
}