"use client"

import { useState } from "react"
import ArtistCard from "@/components/artists/ArtistCard"
import ArtistModal from "@/components/artists/ArtistModal"
import { artists } from "@/data/artists"

export default function ArtistsPage() {

  const [search, setSearch] = useState("")
  const [selectedArtist, setSelectedArtist] = useState<any>(null)

  const filtered = artists.filter((artist) =>
    artist.name.toLowerCase().includes(search.toLowerCase())
  )

  const cDrama = filtered.filter(a => a.category === "C-Drama")
  const kDrama = filtered.filter(a => a.category === "K-Drama")

  return (
    <div className="bg-black min-h-screen text-white p-10">

      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-6">
        Category Wise Lead
      </h1>

      {/* Search */}
      <div className="flex justify-center mb-10">
        <input
          placeholder="Search Artist"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className="bg-black border border-white rounded-full px-6 py-2 w-80"
        />
      </div>


      {/* C-Drama */}
      <h2 className="text-2xl font-semibold mb-6">
        C-Drama Leads
      </h2>

      <div className="grid grid-cols-4 gap-8 mb-16">

        {cDrama.map((artist)=>(
          <ArtistCard
            key={artist.id}
            {...artist}
            onClick={() => setSelectedArtist(artist)}
          />
        ))}

      </div>


      {/* K-Drama */}
      <h2 className="text-2xl font-semibold mb-6">
        K-Drama Leads
      </h2>

      <div className="grid grid-cols-4 gap-8">

        {kDrama.map((artist)=>(
          <ArtistCard
            key={artist.id}
            {...artist}
            onClick={() => setSelectedArtist(artist)}
          />
        ))}

      </div>


      {/* Artist Modal */}
      {selectedArtist && (
        <ArtistModal
          artist={selectedArtist}
          onClose={() => setSelectedArtist(null)}
        />
      )}

    </div>
  )
}