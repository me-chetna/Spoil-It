import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import Liked from "@/app/models/Like";
import Content from "@/app/models/Content";

export async function GET(req: Request) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  const liked = await Liked.find({ userId });

  const likedIds = liked.map((l) => l.movieId);

  const contents = await Content.find({
    tmdbId: { $in: likedIds },
  });

  // 🔥 Build genre preference
  const genreCount: any = {};

  contents.forEach((c) => {
    c.genres.forEach((g: string) => {
      genreCount[g] = (genreCount[g] || 0) + 1;
    });
  });

  // 🔥 simple recommendation (same genre)
  const topGenres = Object.keys(genreCount).sort(
    (a, b) => genreCount[b] - genreCount[a]
  );

  const recommendations = await Content.find({
    genres: { $in: topGenres.slice(0, 2) },
  }).limit(10);

  return NextResponse.json({
    recommendations,
    analytics: genreCount,
  });
}