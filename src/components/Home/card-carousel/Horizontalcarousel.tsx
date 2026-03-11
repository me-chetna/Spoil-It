"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import ContentCard from "./Card";
import { Content } from "@/types/content";

interface Props {
  title: string;
  items: Content[];
  color : string;
  bgColor : string;
}

export default function ContentCarousel({ title, items, color, bgColor}: Props) {

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
    <div className="w-full py-10" style={{backgroundColor: bgColor}}>

      <h2 className="text-3xl font-bold text-center mb-8" style={{color: color}}>
        {title}
      </h2>

      <div className="flex items-center gap-4 px-10">

        <button onClick={scrollPrev} className="text-3xl font-bold" style={{color: color}}>
          {"<"}
        </button>

        <div className="overflow-hidden w-full" ref={emblaRef}>

          <div className="flex gap-6">

            {items.map((item) => (
              <div
                key={item.id}
                className="flex-[0_0_calc(100%/6)]"
              >
                <ContentCard item={item} color={color} />
              </div>
            ))}

          </div>

        </div>

        <button onClick={scrollNext} className="text-3xl font-bold" style={{color: color}}>
          {">"}
        </button>

      </div>

    </div>
  );
}