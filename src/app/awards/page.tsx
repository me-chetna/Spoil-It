"use client"

import { useState } from "react"
import { motion } from "framer-motion"

import AwardCard from "@/components/awards/AwardCard"
import Laurel from "@/components/awards/Laurel"
import AwardWinnerCard from "@/components/awards/AwardWinnerCard"

import { awardCategories } from "@/data/awardCategories"
import { awardWinners } from "@/data/awardWinner"

const awards = [
  {
    title: "Academy Awards",
    image: "https://variety.com/wp-content/uploads/2022/07/2008-Oscar-Statue.jpg"
  },
  {
    title: "Golden Globe Awards",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsD97BRogzKL_kCt2rcGRGoijfjGFhSNIt0Q&s"
  },
  {
    title: "BAFTA Awards",
    image: "https://cdn.britannica.com/38/263538-050-70FE37CD/A-BAFTA-Award-is-pictured-at-the-nominations-and-details-of-this-years-BAFTA-Awards-at-BAFTA-on-January-19-2004-in-London-Trophy-British-Academy-Film-Awards.jpg"
  },
  {
    title: "Cannes Film Festival",
    image: "https://hips.hearstapps.com/hmg-prod/images/palme-d-or-awards-664374c0b7c37.png"
  },
  {
    title: "Primetime Emmy Awards",
    image: "https://www.hilltopviewsonline.com/wp-content/uploads/2019/09/3909725882_94f2779b65_o-598x900.jpg"
  },
  {
    title: "Annie Awards",
    image: "https://media.licdn.com/dms/image/v2/D5622AQHJ438W83L95Q/feedshare-shrink_800/feedshare-shrink_800/0/1715025609438"
  },
  {
    title: "IIFA Awards",
    image: "https://tehelka.com/media/2022/05/IIFA-Awards-advanced-to-June-first-week.jpg"
  },
  {
    title: "Tony Awards",
    image: "https://www.hollywoodreporter.com/wp-content/uploads/2022/05/Tony_Statuette_062510-2-H-2022.jpg"
  },
  {
    title: "MTV Awards",
    image: "https://static.tvtropes.org/pmwiki/pub/images/vma.jpg"
  },
  {
    title: "Grammy Awards",
    image: "https://i8.amplience.net/i/naras/2026_grammys_68th_grammy_awards_Date-Hero-V3_1644x925"
  },
  {
    title: "Venice Film Festival",
    image: "https://static.labiennale.org/files/styles/full_screen_slide/public/cinema/2023/750x500/leone-ve80.jpg"
  },
  {
    title: "Anime Awards",
    image: "https://deadline.com/wp-content/uploads/2024/02/2024-Anime-Awards.jpg"
  }
]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

export default function AwardsPage() {

  const [search, setSearch] = useState("")
  const [year, setYear] = useState("2025")
  const [category, setCategory] = useState("Anime")

  const filteredAwards = awardCategories.filter((award) =>
    award.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      {/* Famous Awards Section */}

      <div className="p-10 bg-white min-h-screen">

        <h1 className="text-4xl font-bold text-center mb-10 text-black">
          Famous Awards
        </h1>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center"
        >

          {awards.map((award) => (
            <AwardCard
              key={award.title}
              title={award.title}
              image={award.image}
            />
          ))}

        </motion.div>

      </div>


      {/* Category Awards Section */}

      <div className="bg-black text-white min-h-screen p-10">

        {/* Filters */}

        <div className="flex gap-4 mb-10 text-center justify-center">

          <input
            type="text"
            placeholder="Search here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gray-700 px-4 py-2 rounded-full w-100"
          />

          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="bg-gray-700 px-6 py-2 rounded-full"
          >
            <option>2025</option>
            <option>2024</option>
            <option>2023</option>
          </select>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-gray-700 px-6 py-2 rounded-full"
          >
            <option>Anime</option>
            <option>Movies</option>
            <option>Series</option>
          </select>

        </div>


        {/* Award Winners */}

        <div className="flex flex-col gap-6">

          {filteredAwards.map((award) => {

            const winner = awardWinners[award]

            return (
              <div
                key={award}
                className="flex gap-6 items-center"
              >

                <Laurel title={award} />

                <div className="flex-1">

                  <AwardWinnerCard
                    name={winner?.name}
                    overallRating={winner?.overallRating}
                    characterRating={winner?.characterRating}
                    storyRating={winner?.storyRating}
                    seasons={winner?.seasons}
                    platforms={winner?.platforms}
                    poster={winner?.poster}
                  />

                </div>

              </div>
            )
          })}

        </div>

      </div>
    </>
  )
}