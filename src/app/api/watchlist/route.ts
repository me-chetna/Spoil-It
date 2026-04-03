import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import Watchlist from "@/app/models/Watchlist";

// ✅ POST (Add to watchlist)
// ✅ POST (Add)
//✅ DELETE
export async function POST(req: Request) {
    try {
      await connectDB();

      const { userId, movie } = await req.json();

      if (!userId || !movie?.id) {
        return NextResponse.json(
          { error: "Missing data" },
          { status: 400 }
        );
      }

      // ✅ check duplicate
      const existing = await Watchlist.findOne({
        userId,
        movieId: movie.id,
      });

      if (existing) {
        return NextResponse.json(
          { error: "Already added" },
          { status: 200 }
        );
      }

      const item = await Watchlist.create({
        userId,
        movieId: movie.id,
        title: movie.title,
        poster: movie.poster,
      });

      return NextResponse.json(item);
    } catch (err) {
      return NextResponse.json(
        { error: "Failed to add", errorDetails: err instanceof Error ? err.message : String(err) },
        { status: 500 }
      );
    }
  }

  // ✅ DELETE (Remove)
  export async function DELETE(req: Request) {
    try {
      await connectDB();

      const { userId, movieId } = await req.json();

      await Watchlist.deleteOne({ userId, movieId });

      return NextResponse.json({ success: true });
    } catch (err) {
      return NextResponse.json(
        { error: "Delete failed" },
        { status: 500 }
      );
    }
  }

// ✅ GET (Fetch watchlist)
export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { error: "Missing userId" },
        { status: 400 }
      );
    }
    console.log("API HIT");
    console.log("MONGO URI:", process.env.MONGODB_URI);

    const items = await Watchlist.find({ userId });

    return NextResponse.json(items);
  } catch (err) {
    console.error("GET ERROR:", err);

    return NextResponse.json(
      { error: "Failed to fetch" },
      { status: 500 }
    );
  }
}