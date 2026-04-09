"use client";

import { PollOption as PollOptionType } from "@/types/poll";

interface Props {
  option: PollOptionType & { rating?: number };
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
      className={`group flex items-center justify-between gap-4 mb-4 p-4 rounded-xl border transition-all duration-300
        ${
          showResults && isCorrect
            ? "bg-green-900/30 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.4)]"
            : showResults && selected
            ? "bg-red-900/30 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]"
            : selected
            ? "bg-cyan-900/20 border-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.3)]"
            : "bg-zinc-900/40 border-zinc-700 hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(34,211,238,0.3)]"
        }
      `}
    >
      {/* LEFT: TEXT */}
      <div className="flex flex-col">
        <p className="text-base font-semibold text-white">
          {option.title}
        </p>

        {/* optional rating */}
        {option.rating && (
          <span className="text-xs text-yellow-400 mt-1">
            ⭐ {option.rating}
          </span>
        )}
      </div>

      {/* RIGHT SIDE */}
      {!showResults ? (
        <button
          onClick={onVote}
          disabled={disabled}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium
          hover:scale-105 hover:shadow-[0_0_15px_rgba(34,211,238,0.6)]
          active:scale-95 transition-all duration-200
          disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100"
        >
          Vote
        </button>
      ) : (
        <div className="flex flex-col items-end gap-1 text-xs">

          {/* YOUR VOTE */}
          {selected && (
            <span className="px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400">
              Your Vote
            </span>
          )}

          {/* CORRECT */}
          {isCorrect && (
            <span className="px-2 py-1 rounded bg-green-500/20 text-green-300 border border-green-400 font-semibold">
              ✔ Correct
            </span>
          )}

          {/* WRONG */}
          {selected && !isCorrect && (
            <span className="px-2 py-1 rounded bg-red-500/20 text-red-300 border border-red-400">
              ✖ Wrong
            </span>
          )}
        </div>
      )}
    </div>
  );
}