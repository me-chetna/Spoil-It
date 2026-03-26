"use client";

import { useState } from "react";
import { Poll } from "@/types/poll";
import PollOption from "@/components/votings/PollOption";
import { useAuthStore } from "@/store/useAuthStore";

interface Props {
  poll: Poll;
}

export default function PollCard({ poll }: Props) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [localOptions, setLocalOptions] = useState(poll.options);

  const { user, setLoginModal, updateCoins } = useAuthStore();

  const totalVotes = localOptions.reduce(
    (sum, o) => sum + o.votes,
    0
  );

  async function handleVote(optionId: string) {
    if (!user) {
      setLoginModal(true);
      return;
    }

    if (selectedOption) return;

    try {
      const res = await fetch("/api/vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pollId: poll._id,
          optionId,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error);
        return;
      }

      // ✅ update UI state
      setSelectedOption(optionId);
      setShowResults(true);

      // ✅ update votes locally (instant feedback)
      setLocalOptions((prev) =>
        prev.map((o) =>
          o.id === optionId
            ? { ...o, votes: o.votes + 1 }
            : o
        )
      );

      // 🔥 temporary feedback (later connect to global store)
      updateCoins(data.coins);

    } catch (err) {
      console.error("Vote error:", err);
    }
  }

  return (
    <div className="bg-gray-800 rounded-xl p-5">

      {/* TITLE */}
      <h2 className="text-lg font-semibold mb-4">
        {poll.title}
      </h2>

      {/* OPTIONS */}
      {localOptions.map((option) => (
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

      {/* INFO */}
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
  );
}