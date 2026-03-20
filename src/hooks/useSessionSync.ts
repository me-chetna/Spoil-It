"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useAuthStore } from "@/store/useAuthStore";

export default function useSessionSync() {
  const { data: session } = useSession();
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    if (session?.user) {
      setUser(session.user);
    }
  }, [session]);
}