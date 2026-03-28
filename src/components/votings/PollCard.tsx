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

  const { user, setLoginModal, updateCoins } = useAuthStore();

  // 🔥 FETCH TMDB DATA (FIXED)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const updated = await Promise.all(
          poll.options.map(async (opt: any) => {
            try {
              let endpoint = "";
              let isPerson = false;

              // ✅ detect type (keep your logic)
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

              // ✅ FIX: handle different response shapes
              let rating = 0;

              if (isPerson) {
                rating = data.popularity || 0;
              } else {
                rating = data.details?.vote_average || 0;
              }

              return {
                ...opt,
                rating,
                image: opt.image, // ✅ YOU said you'll handle image
              };
            } catch {
              return {
                ...opt,
                rating: 0,
                image: opt.image || "/fallback.jpg",
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

  // 🔥 SAFE CORRECT OPTION
  const correctOptionId =
    localOptions.length > 0
      ? localOptions.reduce((best, curr) =>
          (curr.rating || 0) > (best.rating || 0) ? curr : best
        ).id
      : null;

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
          pollId: poll.id,
          optionId,
          correctOptionId,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error);
        return;
      }

      setSelectedOption(optionId);
      setShowResults(true);

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
            isCorrect={option.id === correctOptionId}
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