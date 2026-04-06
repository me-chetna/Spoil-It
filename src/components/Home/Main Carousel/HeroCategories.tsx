"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import HeroPanel from "./HeroPanel";

type Category = "anime" | "drama" | "movies" | "series" | null;

const categories = [
  {
    id: "anime",
    title: "ANIME",
    images: [
      "https://m.media-amazon.com/images/S/pv-target-images/a90c37cc3e0bcddcb2cc8d068664c874585e8dc3fbaeae08a742b26ad243f047.jpg",
      "https://static0.srcdn.com/wordpress/wp-content/uploads/2025/09/demon-slayer-anime-featured-image-1.png?w=1600&h=1200&fit=crop",
      "https://m.media-amazon.com/images/S/pv-target-images/8cf72626a1ff4d712d472c9c6f3a427cdfcef0ecd3b057591a7c6bc6367c1061.jpg",
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GR751KNZY-backdrop_wide",
      "https://external-preview.redd.it/jujutsu-kaisen-season-3-will-be-some-of-the-best-anime-ever-v0-p0WFRquUzQSEo8nboYUCLPqj5ZhyiL9F6Yuu122FtGQ.jpeg?auto=webp&s=31228a47f906c35e0f0c4ae5f74de82fe460f642",
      "https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYwIOxDKc-KZLhyul1hN7Bcbh7vqr1oJvEjBvuMuGNPpXW9bsv6Ib0lI7diVAczpTqlqoICa8tAelmx-u3QL7oTlAJmnZHOFTK8F.jpg?r=6ae",
    ],
  },
  {
    id: "drama",
    title: "DRAMA",
    images: [
      "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSOAx0CeFr92obnqXZyJ_ydHkh3uI07Ld7mvK5sWOpB8LeEaPUMqIVB39bBpzm5M4aM0KlrOGZDc1luZII3BSbtvBpy3ZJdrqxIS.jpg?r=050",
      "https://i.ytimg.com/vi/TFeO2fFXKzs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBmWc0C4vlcs_DOFJdsaAPlgEx3iQ",
      "https://miro.medium.com/1*mexhFEBQ3r7b8Nuw3nEuAw.jpeg",
      "https://theothermeunfolded.com/wp-content/uploads/2025/12/Screenshot-2025-12-31-232324.png",
      "https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbH8tqiUQnge6e7A447M1DheMG-GanmQvEgICataDqfRpqyirgE5ek35-SMEjh2-KuOKWVkx0hvJdkCkq1h4rj1CbePOJLBSjrxT.jpg?r=71c",
    ],
  },
  {
    id: "movies",
    title: "MOVIES",
    images: [
      "https://i.ytimg.com/vi/7IBDa53IsvI/maxresdefault.jpg",
      "https://thumbnails.cbsig.net/CBS_Production_Entertainment_VMS/2021/07/16/1922595395638/TITAN_US_1997_SA_16x9_1920x1080_2729621_1920x1080.jpg",
      "https://img.kanopy.com/cdn-cgi/image/fit=cover,height=540,width=960/https://static-assets.kanopy.com/video-images/arts/bc472f48-3730-479b-a1fa-44154256f8a1.jpeg",
      "https://origin-staticv2.sonyliv.com/videoasset_images/bahubali_the_beginning_hindi_3july_landscape_thumb.jpg",
      "https://m.media-amazon.com/images/S/pv-target-images/14db27b1570a8703e3975fddaa6b624bb2ca77ac7dbff925802102995b46420d.jpg",
      "https://i.ytimg.com/vi/x_7YlGv9u1g/maxresdefault.jpg",
    ],
  },
  {
    id: "series",
    title: "SERIES",
    images: [
      "https://m.media-amazon.com/images/S/pv-target-images/1545c1c1c89d476d35029056ddb248ebb9523acf7488250d0370e8a8fa5e40ad.jpg",
      "https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/9789/1757951169789-i",
      "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVLUiv605bYZs8xpFMk8NUhig3InsvcOresN2Fit58L5o1xDQNM1hTuIRGnSYaF7BxmDMzaMNgTVG5v2nNmwLjxe2pmbpZ8zuFY8.jpg?r=986",
      "https://m.media-amazon.com/images/S/pv-target-images/ca6c124aba403bae51f99e784f400560766a38cde06b835ce710bd504848f895.jpg",
      "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRcNFWXX6Oy76FZ1zyhYWRUp09jRyeOliZlBJMCfi6NYt57BXM-T41aahUm_TKlXT0uk1fnlqMKu3RwbqPldmSCvmRiNSJ1hxwEe.jpg?r=90b",
    ],
  },
];

export default function HeroCategories() {
  const [active, setActive] = useState<Category>(null);

  return (
    <div
      className="relative w-full h-[560px] overflow-hidden"
      onMouseLeave={() => setActive(null)}
    >

      <div className="flex h-full">

        {categories.map((cat) => {
          const expanded = active === cat.id;

          return (
            <motion.div
              key={cat.id}
              onMouseEnter={() => setActive(cat.id as Category)}
              animate={{
                flex: expanded ? 5 : active ? 0.8 : 1,
              }}
              transition={{ duration: 0.45 }}
              className="relative overflow-hidden cursor-pointer"
              style={{
                clipPath:
                  "polygon(10% 0%,100% 0%,90% 100%,0% 100%)",
              }}
            >

              {/* Sliding Images */}
              <HeroPanel
                images={cat.images}
                active={expanded}
              />

              {/* Category Title */}
              <div className="absolute inset-0 flex items-center justify-center">

                <span className="text-white text-4xl tracking-wider rotate-90">
                  {cat.title}
                </span>

              </div>

            </motion.div>
          );
        })}

      </div>

    </div>
  );
}