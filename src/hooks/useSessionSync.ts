"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useAuthStore } from "@/store/useAuthStore";

export default function useSessionSync() {
  const { data: session } = useSession();
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    if (!session?.user) {
      setUser(null);
      return;
    }

    setUser({
      _id: (session.user as any).id || session.user.email || "temp-id",
      email: session.user.email,
      name: session.user.name,
      image: session.user.image,
      avatar: (session.user as any).avatar || null, // ✅ THIS WAS MISSING
      spoilCoins: (session.user as any).spoilCoins || 50,
    });
  }, [session, setUser]);
}