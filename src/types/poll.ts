export interface PollOption {
  id: string
  title: string
  image: string
  votes: number
}

export interface Poll {
  _id: string
  title: string
  cost: number // coins required
  options: PollOption[]
  userVotedOption?: string
}