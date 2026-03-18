"use client"

interface Props {
  artist: any
  onClose: () => void
}

export default function ArtistModal({ artist, onClose }: Props) {

  if (!artist) return null

  return (

    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-black text-white rounded-3xl w-[700px] p-8 relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-6 text-2xl"
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

            <p>Age: {artist.age}</p>
            <p>Birthday: {artist.birthday}</p>
            <p>Marriage Status: {artist.marriage}</p>

          </div>

        </div>

        {/* Movies / Series */}

        <h3 className="text-lg font-semibold mb-3">
          Filmography
        </h3>

        <div className="grid grid-cols-4 gap-4">

          {artist.works.map((work: any, i: number) => (

            <div key={i} className="text-center">

              <img
                src={work.poster}
                className="w-full h-28 object-cover rounded"
              />

              <p className="text-xs mt-1">
                {work.title}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}