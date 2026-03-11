export interface Content {
  id: number
  title: string
  poster: string
  episodes?: number
  seasons?: number
  type: "movie" | "series" | "anime" | "drama"
  watchCount: string
  rating?: number
}