interface Props {
  name?: string
  overallRating?: number
  characterRating?: number
  storyRating?: number
  seasons?: number
  platforms?: string[]
  poster?: string
}

export default function AwardWinnerCard({
  name,
  overallRating,
  characterRating,
  storyRating,
  seasons,
  platforms,
  poster
}: Props) {

  const hasWinner = name && poster

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl px-6 py-4 flex justify-between items-center w-full h-24">

      {!hasWinner ? (

        <div className="text-gray-400 text-sm">
          Winner will appear here
        </div>

      ) : (

        <>
          {/* LEFT INFO */}
          <div className="flex flex-col gap-2">

        {/* Title */}
        <h3 className="text-2xl font-semibold text-white">
            {name}
        </h3>

        {/* Ratings Row */}
        <div className="flex gap-6 text-sm text-gray-200 font-medium">

            <span>
            Rating : {overallRating}/10
            </span>

            <span>
            Characters : {characterRating}/10
            </span>

            <span>
            Story : {storyRating}/10
            </span>

            <span>
            Seasons : {seasons}
            </span>

        </div>

        {/* Platforms */}
        <p className="text-sm text-gray-300 font-medium">
            Watch : {platforms?.join(", ")}
        </p>

        </div>

          {/* RIGHT POSTER */}
          <img
            src={poster}
            alt={name}
            className="h-16 w-28 object-cover rounded-lg"
          />
        </>
      )}

    </div>
  )
}