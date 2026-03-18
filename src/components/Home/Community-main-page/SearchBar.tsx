"use client";

import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="flex justify-center mt-6 mb-10">
      <div className="flex items-center w-[420px] bg-white rounded-full border border-black overflow-hidden">

        <input
          type="text"
          placeholder="Search series or user..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 px-6 py-3 outline-none text-black"
        />

        <div className="bg-black text-white p-3">
          <Search size={20} />
        </div>

      </div>
    </div>
  );
}