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

    // ✅ USE YOUR WORKING VERCEL PROXY
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_PROXY_URL}/api/tmdb/search/multi?query=${encodeURIComponent(query)}`
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