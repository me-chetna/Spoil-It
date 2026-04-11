"use client";

import { useState } from "react";
import AvatarPicker from "./AvatarPicker";
import { useAuthStore } from "@/store/useAuthStore";
import { useSession } from "next-auth/react";

interface Props {
  onClose: () => void; // ✅ setAvatar prop removed
}

export default function AvatarModal({ onClose }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { update } = useSession();
  const { setUser, user } = useAuthStore();

  async function handleSave() {
    if (!selected || !user) return;
    setLoading(true);

    try {
      const res = await fetch("/api/user/avatar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user._id, image: selected }),
      });

      const data = await res.json();

      if (res.ok) {
        setUser({ ...user, avatar: selected }); // ✅ update store → ProfileModal reacts instantly
        await update();                          // ✅ sync session for reload persistence
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
        <h2 className="text-xl mb-6 text-center">Choose Your Avatar</h2>
        <AvatarPicker selected={selected} setSelected={setSelected} />
        <div className="flex justify-center gap-4 mt-6">
          <button onClick={onClose} className="px-4 py-2 border border-white rounded-full">
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