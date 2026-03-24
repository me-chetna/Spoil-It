"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState} from "react";
import ContentCard from "./Card";
import { Content } from "@/types/content";

interface Props {
  title: string;
  items: Content[];
  color: string;
  bgColor: string;
}

export default function ContentCarousel({
  title,
  items,
  color,
  bgColor,
}: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true, // smoother UX
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  // ✅ Prevent rendering empty / undefined data
  if (!items || items.length === 0) {
    return null;
  }
  const [selectedMovie, setSelectedMovie] = useState<any>(null);

  const openMovie = async (item: any) => {
    try {
      const type = item.type === "tv" ? "tv" : "movie";

      const res = await fetch(`/api/tmdb/${type}/${item.id}`);
      const data = await res.json();

      if (!data.details) {
        console.error("Invalid movie data", data);
        return;
      }

      setSelectedMovie({
        title: data.details.title || data.details.name,
        overview: data.details.overview,

        backdrop: data.details.backdrop_path
          ? `https://image.tmdb.org/t/p/original${data.details.backdrop_path}`
          : "/fallback.jpg",

        genres: data.details.genres || [],

        providers:
          data.providers?.results?.US?.flatrate || [],

        cast: data.credits?.cast?.slice(0, 8) || [],
      });

    } catch (err) {
      console.error("Movie fetch error:", err);
    }
  };
  return (
    <div className="w-full py-10" style={{ backgroundColor: bgColor }}>
      
      <h2
        className="text-3xl font-bold text-center mb-8"
        style={{ color }}
      >
        {title}
      </h2>

      <div className="flex items-center gap-4 px-10">

        {/* LEFT BUTTON */}
        <button
          onClick={scrollPrev}
          className="text-3xl font-bold hover:scale-110 transition"
          style={{ color }}
        >
          {"<"}
        </button>

        {/* CAROUSEL */}
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex gap-6">

            {items.map((item) => {
              // ✅ SAFETY LAYER (VERY IMPORTANT)
              const safeItem = {
                ...item,
                title: item.title || "Untitled",
                poster: item.poster || "/fallback.jpg",
              };

              return (
                <div
                  key={item.id}
                  className="flex-[0_0_calc(100%/6)]"
                >
                  <ContentCard item={safeItem} color={color} onClick={() => openMovie(item)} />
                </div>
              );
            })}

          </div>
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={scrollNext}
          className="text-3xl font-bold hover:scale-110 transition"
          style={{ color }}
        >
          {">"}
        </button>

      </div>
    </div>
  );
}