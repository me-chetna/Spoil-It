"use client"

import { PollOption } from "@/types/poll"

interface Props {
  option: PollOption
  totalVotes: number
  selected: boolean
  onVote: () => void
  disabled: boolean
  showResults: boolean
}

export default function PollOption({
  option,
  totalVotes,
  selected,
  onVote,
  disabled,
  showResults
}: Props) {

  const percentage =
    totalVotes === 0 ? 0 : (option.votes / totalVotes) * 100

  return (
    <div className="flex items-center gap-3 mb-4">

      <img
        src={option.image}
        className="w-20 h-12 object-cover rounded"
      />

      <div className="flex-1">

        <p className="text-sm">{option.title}</p>

        {showResults && (
          <div className="w-full bg-gray-300 rounded h-2 mt-1">
            <div
              className="bg-white h-2 rounded"
              style={{ width: `${percentage}%` }}
            />
          </div>
        )}

      </div>

      {!showResults ? (
        <button
          onClick={onVote}
          className="px-3 py-1 rounded bg-gray-400 hover:bg-gray-500"
        >
          Vote
        </button>
      ) : (
        <span
          className={`text-xs ${
            selected ? "text-green-400" : "text-gray-400"
          }`}
        >
          {selected ? "Your Vote" : ""}
        </span>
      )}

    </div>
  )
}