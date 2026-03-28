import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import User from "@/app/models/User";

export async function GET() {
  try {
    await connectDB();

    await User.updateMany({}, { $inc: { spoilCoins: 10 } });

    console.log("✅ Weekly coins added");

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("CRON ERROR:", err);

    return NextResponse.json(
      { error: "Failed to update coins" },
      { status: 500 }
    );
  }
}