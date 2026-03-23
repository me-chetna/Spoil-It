import { NextResponse } from "next/server";
import { fetchFromTMDB } from "@/app/lib/tmdb";

export async function GET() {
  try {
    const data = await fetchFromTMDB("/movie/top_rated");

    return NextResponse.json(data);
  } catch (error) {
    console.error("Top Rated Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch top rated" },
      { status: 500 }
    );
  }
}