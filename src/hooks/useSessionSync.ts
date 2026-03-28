"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useAuthStore } from "@/store/useAuthStore";

export default function useSessionSync() {
  const { data: session } = useSession();
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    if (!session?.user?.email) return;

    const syncUser = async () => {
      try {
        const res = await fetch(`/api/user?email=${session.user.email}`);
        const data = await res.json();

        if (!res.ok) {
          console.error("Failed to fetch user");
          return;
        }

        setUser(data); // ✅ REAL USER FROM DB
      } catch (err) {
        console.error("Session sync error:", err);
      }
    };

    syncUser();
  }, [session, setUser]);
}