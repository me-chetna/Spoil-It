import VerticalScroller from "./VerticalScroller";
import { Content } from "@/types/content";

const dummyData: Content[] = [
  {
    id: 1,
    title: "Business Proposal",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/1/19/A_Business_Proposal.jpg/250px-A_Business_Proposal.jpg",
    episodes: 16,
    type: "drama",
    watchCount: "10M+",
  },
  {
    id: 2,
    title: "When I fly towards You",
    poster: "https://m.media-amazon.com/images/M/MV5BODI3NzUwYTktMjlkYS00MDNiLTg0MjgtNWQ1NWZkYmQ2Mzk4XkEyXkFqcGc@._V1_QL75_UY281_CR11,0,190,281_.jpg",
    seasons: 4,
    type: "drama",
    watchCount: "10M+",
  },
  {
    id: 3,
    title: "Meri Zindagi Hai Tu",
    poster: "https://image.tmdb.org/t/p/original/hgu1VpgD5AFPPK6LHLbBVGWCuNe.jpg",
    type: "drama",
    episodes: 36,
    watchCount: "1000M+",
  },
  {
    id: 4,
    title: "F4 Thailand",
    poster: "https://upload.wikimedia.org/wikipedia/en/6/6a/F4_Thailand_Boys_Over_Flowers.Fair_Use.png",
    episodes: 36,
    type: "series",
    watchCount: "40M+",
  },
];
const dummyData2: Content[] = [
  {
    id: 1,
    title: "Spy x Family",
    poster: "https://m.media-amazon.com/images/I/81eVcxUwfRL._UF1000,1000_QL80_.jpg",
    seasons: 3,
    type: "anime",
    watchCount: "10M+",
  },
  {
    id: 2,
    title: "Apothecary Diaries",
    poster: "https://images.justwatch.com/poster/312295819/s718/the-apothecary-diaries.jpg",
    seasons: 2,
    type: "anime",
    watchCount: "2000M+",
  },
  {
    id: 3,
    title: "Horimiya",
    poster: "https://a.storyblok.com/f/178900/750x1060/2dd59a00d2/61e35baca6c08ada5ca6a9a08f72ff5c1613247162_main.jpg/m/filters:quality(95)format(webp)",
    seasons: 2,
    type: "anime",
    watchCount: "2000M+",
  },
  {
    id: 4,
    title: "Joose the tiger and the fish",
    poster: "https://m.media-amazon.com/images/I/818Lr-5cZ5L._UF1000,1000_QL80_.jpg",
    episodes: 1,
    type: "anime",
    watchCount: "2000M+",
  },
];
const dummyData3: Content[] = [
  {
    id: 1,
    title: "Bhool Bhulaiyaa",
    poster: "https://images.justwatch.com/poster/28938186/s718/bhool-bhulaiyaa.jpg",
    episodes: 1,
    type: "movie",
    watchCount: "10M+",
  },
  {
    id: 2,
    title: "Aladdin",
    poster: "https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2F9%2Fgracenote%2F977df60d9d9d677424bf98f8550eb528.jpg",
    episodes: 1,
    type: "movie",
    watchCount: "2000M+",
  },
  {
    id: 3,
    title: "The Amazing Spiderman",
    poster: "https://i0.wp.com/www.heyuguys.com/images/2012/06/The-Amazing-Spider-Man-poster.jpg?ssl=1",
    type: "movie",
    watchCount: "200M+",
  },
  {
    id: 4,
    title: "Phir Hera Pheri",
    poster: "https://m.media-amazon.com/images/M/MV5BMTNkZTExMWYtMGZjMy00NGUwLWJmMWEtOThjYmZjY2Q0N2M5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    episodes: 1,
    type: "movie",
    watchCount: "40M+",
  },
];
const dummyData4: Content[] = [
  {
    id: 1,
    title: "Money Heist",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRklvsM3DC65sk23oAgy0WDVM7WoerLDNqZww&s",
    episodes: 16,
    type: "series",
    watchCount: "10M+",
  },
  {
    id: 2,
    title: "Stranger Things",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Stranger_Things_season_1.jpg/250px-Stranger_Things_season_1.jpg",
    seasons: 4,
    type: "series",
    watchCount: "2000M+",
  },
  {
    id: 3,
    title: "Bridgerton",
    poster: "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQdZb55rSIUGX16tvVAG8Ad0lFWzA8cRWfBQlNVGSGwzwYK4hnHW3vrTyutgEkssuz4KI3mfctlQKti9xx8TES3E21l3xPt1sLeFBsf4HwmqQ-Jf3jiQ14N7ol8skRld7CGXIq0n0z3IRT2pMMOdVq-BC.jpg?r=aa3",
    seasons: 4,
    type: "series",
    watchCount: "200M+",
  },
  {
    id: 4,
    title: "All of us are dead",
    poster: "https://m.media-amazon.com/images/I/71ZIF65sybL._AC_UF1000,1000_QL80_.jpg",
    seasons: 1,
    type: "series",
    watchCount: "40M+",
  },
];

export default function ExclusiveStory() {

  return (
    <div className="bg-black text-white py-16">

      <h2 className="text-4xl text-center font-bold mb-12">
        Exclusive Story
      </h2>

      <div className="grid grid-cols-4 gap-2 px-10">

        <VerticalScroller items={dummyData} />
        <VerticalScroller items={dummyData2} />
        <VerticalScroller items={dummyData3} />
        <VerticalScroller items={dummyData4} />

      </div>

    </div>
  );
}