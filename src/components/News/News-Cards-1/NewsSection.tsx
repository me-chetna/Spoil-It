import NewsColumn from "./NewsColumn"

const dummyNews = [
  {
    title: "‘Leviticus’: Neon’s Next Big Horror Film Dated for June 19, 2026!",
    date: "3/3/2026",
    author: "Brad Miska",
    image: "https://hips.hearstapps.com/hmg-prod/images/bb26247b-59ac-4aa7-a093-0118ea271b4c.jpg?crop=0.286xw:0.314xh;0.393xw,0.069xh&resize=480:*"
  },
  {
    title: "Game of Thrones Movie in the Works at Warner Bros",
    date: "3/3/2026",
    author: "Rebecca Rubin",
    image: "/news2.jpg"
  },
  {
    title: "Sonic 4 Teases Amy Rose’s Storyline",
    date: "3/3/2026",
    author: "Ryan Gajewski",
    image: "/news3.jpg"
  },
  {
    title: "Charlotte Rampling Joins Mark Ruffalo",
    date: "3/3/2026",
    author: "Nick Vivarelli",
    image: "/news4.jpg"
  },
  {
    title: "Cillian Murphy Reacts to Peaky Blinders Movie",
    date: "3/3/2026",
    author: "Zack Sharf",
    image: "/news5.jpg"
  }
]

export default function NewsSection() {

  return (
    <div className="grid grid-cols-3 gap-10 px-10 py-12 bg-white text-black">

      <NewsColumn
        title="Top news"
        news={dummyNews}
      />

      <NewsColumn
        title="Celebrity news"
        news={dummyNews}
      />

      <NewsColumn
        title="Movie news"
        news={dummyNews}
      />

    </div>
  )
}