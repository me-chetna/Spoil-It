import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import Liked from "@/app/models/Like"; // ✅ use Like model

// ✅ POST (Add to likes)
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
    const existing = await Liked.findOne({
      userId,
      movieId: movie.id,
    });

    if (existing) {
      return NextResponse.json(
        { error: "Already liked" },
        { status: 200 }
      );
    }

    const item = await Liked.create({
      userId,
      movieId: movie.id,
      title: movie.title,
      poster: movie.poster,
    });

    return NextResponse.json(item);
  } catch (err) {
    console.error("LIKE POST ERROR:", err);

    return NextResponse.json(
      { error: "Failed to add like" },
      { status: 500 }
    );
  }
}

// ✅ DELETE (Remove from likes)
export async function DELETE(req: Request) {
  try {
    await connectDB();

    const { userId, movieId } = await req.json();

    await Liked.deleteOne({ userId, movieId });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("LIKE DELETE ERROR:", err);

    return NextResponse.json(
      { error: "Delete failed" },
      { status: 500 }
    );
  }
}

// ✅ GET (Fetch likes)
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

    const items = await Liked.find({ userId });

    return NextResponse.json(items);
  } catch (err) {
    console.error("LIKE GET ERROR:", err);

    return NextResponse.json(
      { error: "Failed to fetch likes" },
      { status: 500 }
    );
  }
}