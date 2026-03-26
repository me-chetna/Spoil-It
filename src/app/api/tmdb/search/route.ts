import { NextResponse } from "next/server";

const API_KEY = process.env.TMDB_API_KEY;

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

    const res = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}`
    );

    const data = await res.json();

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Search failed" },
      { status: 500 }
    );
  }
}