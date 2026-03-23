import { NextResponse } from "next/server";
import { fetchFromTMDB } from "@/app/lib/tmdb";

export async function GET() {
  try {
    const data = await fetchFromTMDB("/trending/all/day");

    return NextResponse.json(data);

  } catch (error) {
    console.log("TMDB error:", error);
    return NextResponse.json(
      { error: "Failed to fetch TMDB" },
      { status: 500 }
    );
  }
}