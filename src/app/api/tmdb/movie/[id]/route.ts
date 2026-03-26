import { NextResponse } from "next/server";
import { fetchFromTMDB } from "@/app/lib/tmdb";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> } // ✅ FIX
) {
  try {
    const { id } = await context.params; // ✅ MUST await

    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type") || "movie";

    console.log("Movie:", id, type);

    const details = await fetchFromTMDB(`/${type}/${id}`);

    let credits = { cast: [] };
    let providers = {};

    try {
      credits = await fetchFromTMDB(`/${type}/${id}/credits`);
    } catch (err) {
      console.log("Credits failed");
    }

    try {
      providers = await fetchFromTMDB(`/${type}/${id}/watch/providers`);
    } catch (err) {
      console.log("Providers failed");
    }

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