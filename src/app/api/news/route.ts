import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const query = searchParams.get("query") || "celebrity";

  try {
    const res = await fetch(
      `https://gnews.io/api/v4/search?q=${query}&lang=en&max=20&apikey=${process.env.GNEWS_API_KEY}`
    );

    const data = await res.json();

    return NextResponse.json(data);

  } catch (err) {
    console.error("GNews error:", err);

    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}