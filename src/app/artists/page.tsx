"use client";

import { useEffect, useState } from "react";
import ArtistCard from "@/components/artists/ArtistCard";
import ArtistModal from "@/components/artists/ArtistModal";

export default function ArtistsPage() {

  const [artists, setArtists] = useState<any[]>([]);
  const [selectedArtist, setSelectedArtist] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch ONLY popular artists (NO extra API calls)
  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const res = await fetch("/api/tmdb/person/popular");
        const data = await res.json();

        const top = data.results.slice(0, 32);

        // ✅ fetch birthdays in parallel (optimized)
        const detailed = await Promise.all(
          top.map(async (a: any, i: number) => {
            try {
              const res = await fetch(`/api/tmdb/person/${a.id}`);
              const full = await res.json();

              return {
                id: a.id,
                name: a.name,

                age: a.popularity?.toFixed(1) || "N/A",

                // ✅ NOW REAL BIRTHDAY
                birthday: formatDate(full.person.birthday), 

                image: a.profile_path
                  ? `https://image.tmdb.org/t/p/w500${a.profile_path}`
                  : "/fallback.jpg",

                rank: `#${i + 1}`,
              };
            } catch {
              return {
                id: a.id,
                name: a.name,
                age: a.popularity?.toFixed(1) || "N/A",
                birthday: "N/A",
                image: "/fallback.jpg",
                rank: `#${i + 1}`,
              };
            }
          })
        );

        setArtists(detailed);

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArtists();
  }, []);
    function formatDate(dateString: string) {
    if (!dateString) return "N/A";

    const date = new Date(dateString);

    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  // ✅ Fetch FULL data ONLY when clicked
  const openArtist = async (artist: any) => {
    try {
      const res = await fetch(`/api/tmdb/person/${artist.id}`);
      const data = await res.json();

      setSelectedArtist({
        name: data.person.name,
        image: data.person.profile_path
          ? `https://image.tmdb.org/t/p/w500${data.person.profile_path}`
          : "/fallback.jpg",

        age : data.person.popularity?.toFixed(1) || "N/A",

        birthday: formatDate(data.person.birthday),
        bio : data.person.biography || "No biography available.",

        works: data.credits.cast.slice(0, 8).map((w: any) => ({
          title: w.title || w.name,
          poster: w.poster_path
            ? `https://image.tmdb.org/t/p/w500${w.poster_path}`
            : "/fallback.jpg",
        })),
      });

    } catch (err) {
      console.error("Artist detail error:", err);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white p-10">

      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-10">
        Top Artists
      </h1>

      {/* ✅ Loading */}
      {loading ? (
        <div className="text-center mt-20">Loading artists...</div>
      ) : (

        <div className="grid grid-cols-4 gap-8">

          {artists.map((artist) => (
            <ArtistCard
              key={artist.id}
              {...artist}
              onClick={() => openArtist(artist)}
            />
          ))}

        </div>

      )}

      {/* Modal */}
      {selectedArtist && (
        <ArtistModal
          artist={selectedArtist}
          onClose={() => setSelectedArtist(null)}
        />
      )}

    </div>
  );
}