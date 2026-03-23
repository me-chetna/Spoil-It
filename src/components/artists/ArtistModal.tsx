"use client";

interface Props {
  artist: any;
  onClose: () => void;
}

export default function ArtistModal({ artist, onClose }: Props) {
  if (!artist) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-start justify-center pt-10 z-50 overflow-y-auto"
      onClick={onClose} // ✅ close on outside click
    >
      {/* Modal */}
      <div
        className="bg-black text-white rounded-3xl w-[700px] p-8 relative max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600"
        onClick={(e) => e.stopPropagation()} // ✅ prevent closing when clicking inside
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-6 text-2xl hover:scale-110 transition"
        >
          ✕
        </button>

        {/* Top Info */}
        <div className="flex gap-6 mb-6">
          <img
            src={artist.image}
            className="w-32 h-32 rounded-xl object-cover"
          />

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              {artist.name}
            </h2>

            <p>Popularity: {artist.age}</p>
            <p>Birthday: {artist.birthday}</p>

            {/* Biography */}
            <div className="mt-3 text-sm text-gray-300 leading-relaxed max-h-40 overflow-y-auto">
              <span className="font-semibold text-white">Description: </span>
              {artist.bio}
            </div>
          </div>
        </div>

        {/* Filmography */}
        <h3 className="text-lg font-semibold mb-3">
          Filmography
        </h3>

        <div className="grid grid-cols-4 gap-4">
          {artist.works.map((work: any, i: number) => (
            <div key={i} className="text-center">
              <img
                src={work.poster}
                className="w-full h-28 object-cover rounded hover:scale-105 transition"
              />

              <p className="text-xs mt-1 line-clamp-2">
                {work.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}