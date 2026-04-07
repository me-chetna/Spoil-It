"use client";

import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";

export default function RecommendPage() {
  const user = useAuthStore((s) => s.user);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`/api/recommend?userId=${user.email}`)
      .then((res) => res.json())
      .then(setData);
  }, [user]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl mb-4">Recommendations</h1>

      <div className="grid grid-cols-4 gap-4">
        {data.recommendations.map((m: any) => (
          <div key={m.tmdbId}>{m.title}</div>
        ))}
      </div>

      <h2 className="mt-6">Your Genre Taste</h2>
      <pre>{JSON.stringify(data.analytics, null, 2)}</pre>
    </div>
  );
}