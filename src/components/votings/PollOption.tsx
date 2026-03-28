"use client";

import { PollOption as PollOptionType } from "@/types/poll";

interface Props {
  option: PollOptionType & { rating?: number }; // ✅ typed properly
  selected: boolean;
  onVote: () => void;
  disabled: boolean;
  showResults: boolean;
  isCorrect: boolean;
}

export default function PollOption({
  option,
  selected,
  onVote,
  disabled,
  showResults,
  isCorrect,
}: Props) {
  return (
    <div
      className={`flex items-center gap-3 mb-4 p-2 rounded-lg transition
        ${
          showResults && isCorrect
            ? "bg-green-900/40 border border-green-500"
            : showResults && selected
            ? "bg-red-900/40 border border-red-500"
            : "bg-transparent"
        }
      `}
    >
      {/* IMAGE */}
      <img
        src={option.image}
        className="w-20 h-12 object-cover rounded"
      />

      {/* TEXT */}
      <div className="flex-1">
        <p className="text-m font-medium">{option.title}</p>
      </div>

      {/* BUTTON / RESULT */}
      {!showResults ? (
        <button
          onClick={onVote}
          disabled={disabled}
          className="px-3 py-1 rounded bg-gray-500 hover:bg-gray-600 disabled:opacity-50 border-4 border-white"
        >
          Vote
        </button>
      ) : (
        <div className="text-xs flex flex-col items-end gap-1">

          {/* USER CHOICE */}
          {selected && (
            <span className="text-green-400">Your Vote</span>
          )}

          {/* CORRECT ANSWER */}
          {isCorrect && (
            <span className="text-yellow-400 font-semibold">
              Correct 
            </span>
          )}

          {/* WRONG CHOICE */}
          {selected && !isCorrect && (
            <span className="text-red-400">
              Wrong ❌
            </span>
          )}
        </div>
      )}
    </div>
  );
}