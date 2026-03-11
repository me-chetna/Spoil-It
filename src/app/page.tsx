import HeroCategories from "@/components/Home/Main Carousel/HeroCategories";
import HorizontalCarousel from "@/components/Home/card-carousel/Horizontalcarousel";
import CommunitySection from "@/components/Home/Community-main-page/CommunitySection";
import ExclusiveStory from "@/components/Home/Exclusive-Story/ExclusiveStory";

const dummyData: Array<{
  id: number;
  title: string;
  poster: string;
  seasons?: number;
  type: "drama" | "anime" | "movie" | "series";
  watchCount: string;
}> = [
  {
    id: 1,
    title: "Queen of Tears",
    poster: "/queen.jpg",
    seasons: 1,
    type: "drama",
    watchCount: "10M+",
  },
  {
    id: 2,
    title: "Demon Slayer",
    poster: "/demonslayer.jpg",
    seasons: 4,
    type: "anime",
    watchCount: "2000M+",
  },
  {
    id: 3,
    title: "Dhurandar",
    poster: "/dhurandar.jpg",
    type: "movie",
    watchCount: "200M+",
  },
  {
    id: 4,
    title: "Dhurandar",
    poster: "/dhurandar.jpg",
    type: "movie",
    watchCount: "200M+",
  },
  {
    id: 5,
    title: "Dhurandar",
    poster: "/dhurandar.jpg",
    type: "movie",
    watchCount: "200M+",
  },
  {
    id: 6,
    title: "Dhurandar",
    poster: "/dhurandar.jpg",
    type: "movie",
    watchCount: "200M+",
  },
  {
    id: 7,
    title: "Dhurandar",
    poster: "/dhurandar.jpg",
    type: "movie",
    watchCount: "200M+",
  },
  {
    id: 8,
    title: "Dhurandar",
    poster: "/dhurandar.jpg",
    type: "movie",
    watchCount: "200M+",
  },
  {
    id: 9,
    title: "Dhurandar",
    poster: "/dhurandar.jpg",
    type: "movie",
    watchCount: "200M+",
  },
  {
    id: 10,
    title: "Dhurandar",
    poster: "/dhurandar.jpg",
    type: "movie",
    watchCount: "200M+",
  },
  {
    id: 11,
    title: "Dhurandar",
    poster: "/dhurandar.jpg",
    type: "movie",
    watchCount: "200M+",
  },
  {
    id: 12,
    title: "Dhurandar",
    poster: "/dhurandar.jpg",
    type: "movie",
    watchCount: "200M+",
  },
  
  
]

export default function Home() {
  return (
    <main>
      <HeroCategories />
      <HorizontalCarousel
        title="Top Rated"
        items={dummyData}
        color = 'black'
        bgColor = 'white'
      />
      <HorizontalCarousel
        title="Fresh Arrivals"
        items={dummyData}
        color = 'white'
        bgColor = 'black'
      />
      <CommunitySection />
      <ExclusiveStory />
    </main>
  );
}