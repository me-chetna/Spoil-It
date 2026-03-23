import { NextResponse } from "next/server";
import { fetchFromTMDB } from "@/app/lib/tmdb";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> } // 👈 FIX
) {
  try {
    const { id } = await context.params; // 👈 MUST await

    console.log("Artist ID:", id);

    if (!id) {
      return NextResponse.json(
        { error: "ID missing" },
        { status: 400 }
      );
    }

    const person = await fetchFromTMDB(`/person/${id}`);

    let credits = { cast: [] };

    try {
      credits = await fetchFromTMDB(
        `/person/${id}/combined_credits`
      );
    } catch (err) {
      console.error("Credits error:", err);
    }

    return NextResponse.json({
      person,
      credits,
    });

  } catch (err) {
    console.error("PERSON ERROR:", err);

    return NextResponse.json(
      { error: "Failed to fetch artist details" },
      { status: 500 }
    );
  }
}