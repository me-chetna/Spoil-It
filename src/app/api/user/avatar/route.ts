import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import User from "@/app/models/User";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { userId, image } = await req.json();

    if (!userId || !image) {
      return NextResponse.json({ error: "Missing userId or image" }, { status: 400 });
    }

    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    user.avatar = image; // ✅ was user.image — must match what session callback reads
    await user.save();

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("AVATAR UPDATE ERROR:", err.message);
    return NextResponse.json({ error: err.message || "Failed to update avatar" }, { status: 500 });
  }
}