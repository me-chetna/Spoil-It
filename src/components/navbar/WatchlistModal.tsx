"use client";

interface Props {
  onClose: () => void;
}

const watchlist = [
  { id: 1, title: "Queen of Tears", poster: "/queen.jpg", rating: 9.5 },
  { id: 2, title: "Attack on Titan", poster: "/aot.jpg", rating: 9.8 },
  { id: 3, title: "Interstellar", poster: "/interstellar.jpg", rating: 9.2 },
  { id: 4, title: "Interstellar", poster: "/interstellar.jpg", rating: 9.2 },
  { id: 5, title: "Interstellar", poster: "/interstellar.jpg", rating: 9.2 },
  { id: 6, title: "Interstellar", poster: "/interstellar.jpg", rating: 9.2 },
  { id: 7, title: "Interstellar", poster: "/interstellar.jpg", rating: 9.2 },
  { id: 8, title: "Interstellar", poster: "/interstellar.jpg", rating: 9.2 },
  { id: 9, title: "Interstellar", poster: "/interstellar.jpg", rating: 9.2 },
];

export default function WatchlistModal({ onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-zinc-900 p-8 rounded-xl w-[800px] max-w-[90%]">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-2xl font-semibold">
            Your Watchlist
          </h2>

          <button
            onClick={onClose}
            className="text-white text-lg hover:text-red-400"
          >
            ✕
          </button>
        </div>

        {/* SCROLLABLE AREA */}
        <div className="max-h-[60vh] overflow-y-auto pr-2">

          {/* MOVIES GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {watchlist.map((movie) => {

              const topRated = movie.rating >= 9.5;

              return (
                <div
                  key={movie.id}
                  className={`rounded-xl p-[2px] ${
                    topRated
                      ? "bg-gradient-to-r from-pink-500 to-purple-500"
                      : "bg-transparent"
                  }`}
                >

                  <div className="bg-black rounded-xl p-2">

                    <img
                      src={movie.poster}
                      className="rounded-lg h-[180px] w-full object-cover"
                    />

                    <p className="text-white text-sm mt-2 text-center">
                      {movie.title}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </div>
  );
}