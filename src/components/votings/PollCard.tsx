"use client"

import { useState } from "react"
import { Poll } from "@/types/poll"
import PollOption from "@/components/votings/PollOption"
import { useAuthStore } from "@/store/auth"

interface Props {
  poll: Poll
}

export default function PollCard({ poll }: Props) {

  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [showResults, setShowResults] = useState(false)
  const { isLoggedIn, setLoginModal } = useAuthStore()

  const totalVotes = poll.options.reduce(
    (sum, o) => sum + o.votes,
    0
  )

  function handleVote(optionId: string) {
    if (!isLoggedIn) {
        setLoginModal(true)
        return
    }

    if (selectedOption) return

    // later -> POST /api/vote

    setSelectedOption(optionId)
    setShowResults(true)
  }

  return (
    <div className="bg-gray-800 rounded-xl p-5">

      <h2 className="text-lg font-semibold mb-4">
        {poll.title}
      </h2>

      {poll.options.map(option => (
        <PollOption
          key={option.id}
          option={option}
          totalVotes={totalVotes}
          selected={selectedOption === option.id}
          onVote={() => handleVote(option.id)}
          disabled={!!selectedOption}
          showResults={showResults}
        />
      ))}

      {!showResults && (
        <p className="text-xs text-gray-400 mt-3">
          Voting costs {poll.cost} Spoil Coins
        </p>
      )}

      {showResults && (
        <p className="text-xs text-green-400 mt-3">
          Vote locked ✔
        </p>
      )}

    </div>
  )
}