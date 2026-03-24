import { NextResponse } from "next/server";
import { fetchFromTMDB } from "@/app/lib/tmdb";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json({ results: [] });
  }

  try {
    const data = await fetchFromTMDB(
      `/search/multi?query=${query}&language=en-US`
    );

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Search failed" },
      { status: 500 }
    );
  }
}