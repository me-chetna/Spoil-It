import { NextResponse } from "next/server";
import { fetchFromTMDB } from "@/app/lib/tmdb";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json(
      { error: "Query is required" },
      { status: 400 }
    );
  }

  try {
    // ✅ CORRECT endpoint
    const data = await fetchFromTMDB(
      `/search/person?query=${encodeURIComponent(query)}`
    );

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Search failed" },
      { status: 500 }
    );
  }
}