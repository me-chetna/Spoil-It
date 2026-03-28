export interface PollOption {
  id: string
  title: string
  image: string
  tmdbId?: number // ✅ NEW
  rating?: number // ✅ NEW
}

export interface Poll {
  id: string
  title: string
  cost: number // coins required
  options: PollOption[]
  userVotedOption?: string
}