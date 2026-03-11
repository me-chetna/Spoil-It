"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import ReviewCard from "@/components/Home/Community-main-page/ReviewCard";

interface Review {
  title: string;
  review: string;
  user: string;
  rating: number;
}

interface Props {
  reviews: Review[];
}

export default function CommunityCarousel({ reviews }: Props) {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex items-center gap-4 px-10">

      {/* LEFT BUTTON */}
      <button
        onClick={scrollPrev}
        className="text-3xl font-bold text-black"
      >
        {"<"}
      </button>

      {/* VIEWPORT */}
      <div className="overflow-hidden w-full" ref={emblaRef}>

        {/* TRACK */}
        <div className="flex gap-6">

          {reviews.map((item, i) => (
            <div
              key={i}
              className="flex-[0_0_calc(100%/6)]"
            >
              <ReviewCard
                title={item.title}
                review={item.review}
                user={item.user}
                rating={item.rating}
              />
            </div>
          ))}

        </div>

      </div>

      {/* RIGHT BUTTON */}
      <button
        onClick={scrollNext}
        className="text-3xl font-bold text-black"
      >
        {">"}
      </button>

    </div>
  );
}