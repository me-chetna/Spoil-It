import FeaturedNewsCard from "./FeaturedNewsCard"

const dummyNews = [
  {
    image: "https://www.borgenmagazine.com/wp-content/uploads/2013/05/celebrity_news.jpg",
    title: "Netflix announces premiere date for 'Bloodhounds Season 2'",
    description:
      "Premiere date and teasers unveiled for Netflix's action thriller 'Bloodhounds Season 2'",
  },
  {
    image: "/featured2.jpg",
    title: "Netflix announces premiere date for 'Bloodhounds Season 2'",
    description:
      "Premiere date and teasers unveiled for Netflix's action thriller 'Bloodhounds Season 2'",
  },
  {
    image: "/featured3.jpg",
    title: "Netflix announces premiere date for 'Bloodhounds Season 2'",
    description:
      "Premiere date and teasers unveiled for Netflix's action thriller 'Bloodhounds Season 2'",
  },
  {
    image: "https://www.borgenmagazine.com/wp-content/uploads/2013/05/celebrity_news.jpg",
    title: "Netflix announces premiere date for 'Bloodhounds Season 2'",
    description:
      "Premiere date and teasers unveiled for Netflix's action thriller 'Bloodhounds Season 2'",
  },
  {
    image: "/featured5.jpg",
    title: "Netflix announces premiere date for 'Bloodhounds Season 2'",
    description:
      "Premiere date and teasers unveiled for Netflix's action thriller 'Bloodhounds Season 2'",
  },
  {
    image: "https://www.borgenmagazine.com/wp-content/uploads/2013/05/celebrity_news.jpg",
    title: "Netflix announces premiere date for 'Bloodhounds Season 2'",
    description:
      "Premiere date and teasers unveiled for Netflix's action thriller 'Bloodhounds Season 2'",
  },
  {
    image: "/featured2.jpg",
    title: "Netflix announces premiere date for 'Bloodhounds Season 2'",
    description:
      "Premiere date and teasers unveiled for Netflix's action thriller 'Bloodhounds Season 2'",
  },
  {
    image: "/featured3.jpg",
    title: "Netflix announces premiere date for 'Bloodhounds Season 2'",
    description:
      "Premiere date and teasers unveiled for Netflix's action thriller 'Bloodhounds Season 2'",
  },
  {
    image: "https://www.borgenmagazine.com/wp-content/uploads/2013/05/celebrity_news.jpg",
    title: "Netflix announces premiere date for 'Bloodhounds Season 2'",
    description:
      "Premiere date and teasers unveiled for Netflix's action thriller 'Bloodhounds Season 2'",
  },
  {
    image: "/featured5.jpg",
    title: "Netflix announces premiere date for 'Bloodhounds Season 2'",
    description:
      "Premiere date and teasers unveiled for Netflix's action thriller 'Bloodhounds Season 2'",
  },
  {
    image: "https://www.borgenmagazine.com/wp-content/uploads/2013/05/celebrity_news.jpg",
    title: "Netflix announces premiere date for 'Bloodhounds Season 2'",
    description:
      "Premiere date and teasers unveiled for Netflix's action thriller 'Bloodhounds Season 2'",
  },
  {
    image: "/featured2.jpg",
    title: "Netflix announces premiere date for 'Bloodhounds Season 2'",
    description:
      "Premiere date and teasers unveiled for Netflix's action thriller 'Bloodhounds Season 2'",
  },
  {
    image: "/featured3.jpg",
    title: "Netflix announces premiere date for 'Bloodhounds Season 2'",
    description:
      "Premiere date and teasers unveiled for Netflix's action thriller 'Bloodhounds Season 2'",
  },
  {
    image: "https://www.borgenmagazine.com/wp-content/uploads/2013/05/celebrity_news.jpg",
    title: "Netflix announces premiere date for 'Bloodhounds Season 2'",
    description:
      "Premiere date and teasers unveiled for Netflix's action thriller 'Bloodhounds Season 2'",
  },
  {
    image: "/featured5.jpg",
    title: "Netflix announces premiere date for 'Bloodhounds Season 2'",
    description:
      "Premiere date and teasers unveiled for Netflix's action thriller 'Bloodhounds Season 2'",
  },
  {
    image: "https://www.borgenmagazine.com/wp-content/uploads/2013/05/celebrity_news.jpg",
    title: "Netflix announces premiere date for 'Bloodhounds Season 2'",
    description:
      "Premiere date and teasers unveiled for Netflix's action thriller 'Bloodhounds Season 2'",
  },
  {
    image: "/featured2.jpg",
    title: "Netflix announces premiere date for 'Bloodhounds Season 2'",
    description:
      "Premiere date and teasers unveiled for Netflix's action thriller 'Bloodhounds Season 2'",
  },
  {
    image: "/featured3.jpg",
    title: "Netflix announces premiere date for 'Bloodhounds Season 2'",
    description:
      "Premiere date and teasers unveiled for Netflix's action thriller 'Bloodhounds Season 2'",
  },
  {
    image: "https://www.borgenmagazine.com/wp-content/uploads/2013/05/celebrity_news.jpg",
    title: "Netflix announces premiere date for 'Bloodhounds Season 2'",
    description:
      "Premiere date and teasers unveiled for Netflix's action thriller 'Bloodhounds Season 2'",
  },
  {
    image: "/featured5.jpg",
    title: "Netflix announces premiere date for 'Bloodhounds Season 2'",
    description:
      "Premiere date and teasers unveiled for Netflix's action thriller 'Bloodhounds Season 2'",
  },
]

export default function FeaturedNews() {
  return (
    <section className="bg-black px-16 py-16">

      <h2 className="text-4xl text-white font-bold mb-10 text-center">
        Featuring News
      </h2>

      <div className="flex flex-col gap-6">

        {dummyNews.slice(0, 15).map((item, i) => (
        <FeaturedNewsCard
            key={i}
            image={item.image}
            title={item.title}
            description={item.description}
        />
        ))}

      </div>

    </section>
  )
}