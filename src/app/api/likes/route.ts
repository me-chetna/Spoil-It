import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import Liked from "@/app/models/Like";
import { ensureContentExists } from "@/app/lib/contentHelper";

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

    const existing = await Liked.findOne({
      userId,
      movieId: movie.id,
    });

    if (existing) {
      return NextResponse.json({ message: "Already liked" });
    }

    const item = await Liked.create({
      userId,
      movieId: movie.id,
      title: movie.title || movie.name,
      poster: movie.poster_path || movie.poster,
    });

    // after validation
    await ensureContentExists(movie.id); // 🔥 ADD THIS LINE

    return NextResponse.json(item);
  } catch (err: any) {
    console.error("LIKE POST ERROR:", err.message);

    return NextResponse.json(
      { error: err.message || "Failed to add like" },
      { status: 500 }
    );
  }
}

// ✅ DELETE
export async function DELETE(req: Request) {
  try {
    await connectDB();

    const { userId, movieId } = await req.json();

    if (!userId || !movieId) {
      return NextResponse.json(
        { error: "Missing data" },
        { status: 400 }
      );
    }

    await Liked.deleteOne({ userId, movieId });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("LIKE DELETE ERROR:", err.message);

    return NextResponse.json(
      { error: err.message || "Delete failed" },
      { status: 500 }
    );
  }
}

// ✅ GET
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

    const items = await Liked.find({ userId });

    return NextResponse.json(items);
  } catch (err: any) {
    console.error("LIKE GET ERROR:", err.message);

    return NextResponse.json(
      { error: err.message || "Failed to fetch likes" },
      { status: 500 }
    );
  }
}