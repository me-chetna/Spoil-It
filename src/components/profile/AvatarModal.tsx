"use client";

import { useState } from "react";
import AvatarPicker from "./AvatarPicker";

interface Props {
  setAvatar: (avatar: string) => void;
  onClose: () => void;
}

export default function AvatarModal({ setAvatar, onClose }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSave() {
    if (!selected) return;

    setLoading(true);

    try {
      const res = await fetch("/api/user/avatar", {
        method: "POST",
        body: JSON.stringify({ avatar: selected }),
      });

      const data = await res.json();

      if (res.ok) {
        setAvatar(selected);
        onClose();
      } else {
        alert(data.error);
      }

    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-black p-8 rounded-3xl w-[500px] text-white">

        <h2 className="text-xl mb-6 text-center">
          Choose Your Avatar
        </h2>

        <AvatarPicker
          selected={selected}
          setSelected={setSelected}
        />

        <div className="flex justify-center gap-4 mt-6">

          <button
            onClick={onClose}
            className="px-4 py-2 border border-white rounded-full"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            disabled={!selected || loading}
            className="px-4 py-2 bg-white text-black rounded-full"
          >
            {loading ? "Saving..." : "Save"}
          </button>

        </div>

      </div>

    </div>
  );
}