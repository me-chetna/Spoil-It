"use client";

import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";

interface Props {
  onClose: () => void;
}

export default function LikeModal({ onClose }: Props) {
  const user = useAuthStore((state) => state.user);
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`/api/likes?userId=${user.email}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user]);

  // ✅ DELETE FUNCTION
  const removeFromLikes = async (movieId: number) => {
    try {
      await fetch("/api/likes", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user?.email,
          movieId,
        }),
      });

      // ✅ instant UI update
      setItems((prev) => prev.filter((m) => m.movieId !== movieId));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-zinc-900 p-8 rounded-xl w-[800px] max-w-[90%]">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-2xl font-semibold">
            Your Liked Movies
          </h2>

          <button
            onClick={onClose}
            className="text-white text-lg hover:text-red-400"
          >
            ✕
          </button>
        </div>

        {/* SCROLL */}
        <div className="max-h-[60vh] overflow-y-auto pr-2">

          {items.length === 0 ? (
            <p className="text-gray-400 text-center">
              No Liked Movies Yet. Start exploring and like your favorites!
            </p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              {items.map((movie) => (
                <div key={movie._id} className="relative">

                  {/* ❌ DELETE BUTTON */}
                  <button
                    onClick={() => removeFromLikes(movie.movieId)}
                    className="absolute top-1 right-1 bg-black/70 rounded-full px-2 text-white hover:text-red-400"
                  >
                    ✕
                  </button>

                  <div className="bg-black rounded-xl p-2">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster}`}
                      className="rounded-lg h-[180px] w-full object-cover"
                    />

                    <p className="text-white text-sm mt-2 text-center">
                      {movie.title}
                    </p>
                  </div>

                </div>
              ))}

            </div>
          )}

        </div>

      </div>

    </div>
  );
}