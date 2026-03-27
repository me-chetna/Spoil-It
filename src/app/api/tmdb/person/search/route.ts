import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    if (!query) {
      return NextResponse.json(
        { error: "Missing query" },
        { status: 400 }
      );
    }

    // ✅ CALL YOUR VERCEL PROXY (NOT TMDB DIRECTLY)
    const res = await fetch(
      `https://tmdb-api-xhfv.vercel.app/api/tmdb/search/person?query=${encodeURIComponent(query)}`
    );

    const data = await res.json();

    return NextResponse.json(data);

  } catch (err) {
    console.error("SEARCH API ERROR:", err);

    return NextResponse.json(
      { error: "Search failed" },
      { status: 500 }
    );
  }
}