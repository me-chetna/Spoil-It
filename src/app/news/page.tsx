import NewsHeroCarousel from "@/components/News/Carousel/Newscarousel";
import FeaturedNews from "@/components/News/Featured-news/FeaturedNews";
import NewsSection from "@/components/News/News-Cards-1/NewsSection";

export default function NewsPage() {

  return (
    <main className="bg-black min-h-screen">

      <NewsHeroCarousel />
      <NewsSection />
      <FeaturedNews />
    </main>
  );
}