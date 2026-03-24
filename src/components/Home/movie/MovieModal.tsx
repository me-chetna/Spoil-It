"use client";

interface Props {
  movie: any;
  onClose: () => void;
}

export default function MovieModal({ movie, onClose }: Props) {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

      <div className="bg-black text-white w-[800px] rounded-2xl overflow-y-auto max-h-[90vh] relative">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl z-10"
        >
          ✕
        </button>

        {/* BACKDROP */}
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop}`}
          className="w-full h-[300px] object-cover"
        />

        <div className="p-6">

          {/* TITLE */}
          <h2 className="text-3xl font-bold mb-3">
            {movie.title}
          </h2>

          {/* OVERVIEW */}
          <p className="text-gray-300 mb-4">
            {movie.overview}
          </p>

          {/* BUTTONS */}
          <div className="flex gap-3 mb-6">
            <button className="bg-gray-700 px-4 py-2 rounded">
              + Watchlist
            </button>

            <button className="bg-white text-black px-4 py-2 rounded">
              👍 Like
            </button>
          </div>

          {/* RATINGS (UI only for now) */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Ratings</h3>
            <p>Overall: ⭐⭐⭐⭐⭐</p>
            <p>Story: ⭐⭐⭐⭐☆</p>
            <p>Characters: ⭐⭐⭐⭐⭐</p>
          </div>

          {/* GENRES */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Genres</h3>
            <div className="flex gap-2 flex-wrap">
              {movie.genres.map((g: any) => (
                <span key={g.id} className="bg-gray-700 px-2 py-1 rounded text-sm">
                  {g.name}
                </span>
              ))}
            </div>
          </div>

          {/* WATCH PROVIDERS */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Available On</h3>

            <div className="flex gap-3">
              {movie.providers?.map((p: any, i: number) => (
                <img
                  key={i}
                  src={`https://image.tmdb.org/t/p/w200${p.logo_path}`}
                  className="w-10 h-10 rounded"
                />
              ))}
            </div>
          </div>

          {/* CAST */}
          <div>
            <h3 className="font-semibold mb-3">Cast</h3>

            <div className="grid grid-cols-4 gap-4">
              {movie.cast.map((c: any) => (
                <div key={c.id} className="text-center">
                  <img
                    src={
                      c.profile_path
                        ? `https://image.tmdb.org/t/p/w200${c.profile_path}`
                        : "/fallback.jpg"
                    }
                    className="w-full h-24 object-cover rounded"
                  />
                  <p className="text-xs mt-1">{c.name}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}