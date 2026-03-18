"use client"

import { useState } from "react"
import ReviewRow from "@/components/community/ReviewRow"

const reviews = [
  {
    id: 1,
    title: "Queen of Tears",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvCk3JO0F05KjnuA15EoWBY1p8fMMPK_Z9v6SsluM-V8N4TGTA9MYxe-I13_wZgC-jWLGTRg&s=10",
    watch: "10M+",
    author: "Crazyme",
    rating: "9/10",
    text: "Queen of Tears is widely considered worth watching, praised for its phenomenal lead chemistry and emotional depth."
  },
  {
    id: 2,
    title: "Hasee Toh Phasee",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFs7--w-guXf4YCDiFXqcB6lsX3S_Y5L8CvmxULllLwTHLMUwPUsrGQmPZCEOxHJWBzPRisg&s=10",
    watch: "10M+",
    author: "cutie",
    rating: "9/10",
    text: "Raj and Meera fall in love, but are forced to stay away from each other as they belong to rival mafia families."
  }
]

export default function CommunityPage() {
  const [search,setSearch] = useState("")

  const filtered = reviews.filter(r =>
    r.title.toLowerCase().includes(search.toLowerCase()) ||
    r.text.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="bg-black min-h-screen text-white px-10 py-6">

      {/* SEARCH */}
      <div className="flex justify-center mb-10">
        <input
          placeholder="Search movie or reviews..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className="w-[650px] max-w-full bg-black border border-white rounded-full px-6 py-3 outline-none"
        />
      </div>

      <h1 className="text-center text-4xl font-bold mb-16">
        Famous Reviews
      </h1>

      {filtered.map((item) => (
        <ReviewRow key={item.id} data={item}/>
      ))}

    </div>
  )
}