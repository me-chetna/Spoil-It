import { NextResponse } from "next/server";
import { fetchFromTMDB } from "@/app/lib/tmdb";

export async function GET() {
  try {
    const data = await fetchFromTMDB("/person/popular");

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch popular artists" },
      { status: 500 }
    );
  }
}