import { NextResponse } from "next/server";
import { fetchFromTMDB } from "@/app/lib/tmdb";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    const [details, credits, providers] = await Promise.all([
      fetchFromTMDB(`/movie/${id}`),                 // ✅ FIXED
      fetchFromTMDB(`/movie/${id}/credits`),        // ✅ FIXED
      fetchFromTMDB(`/movie/${id}/watch/providers`) // ✅ FIXED
    ]);

    return NextResponse.json({
      details,
      credits,
      providers,
    });

  } catch (err) {
    console.error("MOVIE API ERROR:", err);
    return NextResponse.json(
      { error: "Failed to fetch movie" },
      { status: 500 }
    );
  }
}