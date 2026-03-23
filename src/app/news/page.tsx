import NewsHeroCarousel from "@/components/News/Carousel/Newscarousel";
import FeaturedNews from "@/components/News/Featured-news/FeaturedNews";

export default function NewsPage() {

  return (
    <main className="bg-black min-h-screen">

      <NewsHeroCarousel />
      <FeaturedNews />
    </main>
  );
}