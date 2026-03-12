import left from "@/images/left.png"
import right from "@/images/right.png"

interface Props {
  title: string
}

export default function Laurel({ title }: Props) {
  return (
    <div className="flex items-center gap-3 w-52">

      <img
        src={left.src}
        className="h-12"
        alt="left laurel"
      />

      <span className="text-sm text-center w-full">
        {title}
      </span>

      <img
        src={right.src}
        className="h-12"
        alt="right laurel"
      />

    </div>
  )
}