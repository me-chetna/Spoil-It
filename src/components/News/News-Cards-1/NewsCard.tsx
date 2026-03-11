interface Props {
  title: string
  date: string
  image: string
}

export default function NewsCard({ title, date, image }: Props) {
  return (
    <div className="flex items-center justify-between bg-white rounded-lg p-3 border border-gray-300 hover:bg-gray-100 transition">

      <div className="flex-1 pr-4">
        <p className="font-semibold text-sm text-black">{title}</p>

        <p className="text-xs text-gray-500 mt-1">
          • {date} 
        </p>
      </div>

      <img
        src={image}
        className="w-[60px] h-[60px] object-cover rounded-md"
      />

    </div>
  )
}