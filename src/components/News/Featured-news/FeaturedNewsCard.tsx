interface Props {
  image: string
  title: string
  description: string
}

export default function FeaturedNewsCard({ image, title, description }: Props) {
  return (
    <div className="flex items-center gap-6">

      {/* IMAGE */}
      <img
        src={image}
        className="w-[180px] h-[120px] object-cover rounded-xl"
      />

      {/* TEXT CARD */}
      <div className="flex-1 bg-gradient-to-r from-gray-500 to-gray-900 p-6 rounded-2xl">

        <h3 className="text-white font-semibold underline mb-2">
          {title}
        </h3>

        <p className="text-gray-300 text-sm">
          {description}
        </p>

      </div>

    </div>
  )
}