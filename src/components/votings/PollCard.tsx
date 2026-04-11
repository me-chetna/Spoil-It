"use client";

import { useState, useEffect } from "react";
import { Poll } from "@/types/poll";
import PollOption from "@/components/votings/PollOption";
import { useAuthStore } from "@/store/useAuthStore";

interface Props {
  poll: Poll;
}

export default function PollCard({ poll }: Props) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [localOptions, setLocalOptions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔥 NEW STATE (IMPORTANT)
  const [correctOptionId, setCorrectOptionId] = useState<string>("");

  const { user, setLoginModal, updateCoins } = useAuthStore();

  // 🔥 FETCH TMDB DATA
  useEffect(() => {
    const fetchData = async () => {
      try {
        const updated = await Promise.all(
          poll.options.map(async (opt: any) => {
            try {
              let endpoint = "";
              let isPerson = false;

              if (
                poll.title.toLowerCase().includes("actor") ||
                poll.title.toLowerCase().includes("actress")
              ) {
                endpoint = `/api/tmdb/person/${opt.tmdbId}`;
                isPerson = true;
              } else {
                endpoint = `/api/tmdb/movie/${opt.tmdbId}`;
              }

              const res = await fetch(endpoint);
              const data = await res.json();

              let rating = 0;

              if (isPerson) {
                rating = data.popularity || 0;
              } else {
                rating = data.details?.vote_average || 0;
              }

              return {
                ...opt,
                rating,
              };
            } catch {
              return {
                ...opt,
                rating: 0,
              };
            }
          })
        );

        setLocalOptions(updated);
      } catch (err) {
        console.error("TMDB fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [poll]);

  async function handleVote(optionId: string) {
    if (!user?.email) {
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
          pollId: poll.id, // ✅ correct
          optionId,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error);
        return;
      }

      // ✅ IMPORTANT FIXES
      setSelectedOption(optionId);
      setShowResults(true);
      setCorrectOptionId(data.correctOptionId); // 🔥 THIS WAS MISSING

      updateCoins(data.coins);

      if (data.isCorrect) {
        alert("✅ Correct! +10 coins");
      } else {
        alert("❌ Wrong answer");
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="bg-gray-800 rounded-xl p-5">
      <h2 className="text-lg font-semibold mb-6">
        {poll.title}
      </h2>

      {loading ? (
        <p className="text-gray-400 text-sm">Loading options...</p>
      ) : (
        localOptions.map((option) => (
          <PollOption
            key={option.id}
            option={option}
            selected={selectedOption === option.id}
            onVote={() => handleVote(option.id)}
            disabled={!!selectedOption}
            showResults={showResults}
            correctOptionId={correctOptionId} // 🔥 NOW DYNAMIC
          />
        ))
      )}

      {!showResults && !loading && (
        <p className="text-sm text-gray-400 mt-3 text-center">
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