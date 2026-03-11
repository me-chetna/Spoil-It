interface Props {
  title: string
  review: string
  user: string
  rating: number
}

export default function ReviewCard({ title, review, user, rating }: Props) {

  return (
    <div className="bg-gray-300 w-[220px] flex flex-col justify-between">

      {/* Review body */}
      <div className="p-4">

        <h3 className="font-semibold text-center mb-2">
          {title}
        </h3>

        <p className="text-sm text-center leading-snug">
          {review}
        </p>

      </div>

      {/* Footer */}
      <div className="bg-black text-white p-3 text-sm">

        <p>By : {user}</p>

        <p className="font-semibold">
          Rating : {rating}/10
        </p>

      </div>

    </div>
  )
}