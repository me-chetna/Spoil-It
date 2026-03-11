import { Poll } from "@/types/poll"

export const polls: Poll[] = [
  {
    id: "1",
    title: "Most Watched Anime",
    cost: 10,
    options: [
      {
        id: "a1",
        title: "Demon Slayer",
        image: "/anime/demonslayer.jpg",
        votes: 120
      },
      {
        id: "a2",
        title: "Naruto",
        image: "/anime/naruto.jpg",
        votes: 90
      },
      {
        id: "a3",
        title: "Solo Levelling",
        image: "/anime/sololevelling.jpg",
        votes: 70
      },
      {
        id: "a4",
        title: "Attack on Titan",
        image: "/anime/aot.jpg",
        votes: 150
      }
    ]
  },
  {
    id: "2",
    title: "Best Romantic Series",
    cost: 10,
    options: [
      {
        id: "a1",
        title: "Buisness Proposal",
        image: "https://i0.wp.com/www.lindseyh.be/wp-content/uploads/2022/05/abusinessproposal-poster-2.jpg?resize=700%2C435&ssl=1",
        votes: 120
      },
      {
        id: "a2",
        title: "My Demon",
        image: "https://rollingstoneindia.com/wp-content/uploads/2023/10/My-Demon-BTS-Still-Song-Kang-Kim-Yoo-Jung-SBS-HanCinema-2.jpg",
        votes: 90
      },
      {
        id: "a3",
        title: "King the land",
        image: "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24854922/ktl.jpg?quality=90&strip=all&crop=0,12.569444444444,100,50",
        votes: 70
      },
      {
        id: "a4",
        title: "Queen of tears",
        image: "https://www.nme.com/wp-content/uploads/2024/03/queen-of-tears-netflix.jpeg",
        votes: 150
      }
    ]
  }
]