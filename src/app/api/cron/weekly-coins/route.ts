import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import User from "@/app/models/User";

export async function GET(req: Request) {
  try {
    // 🔐 SECURITY CHECK
    const auth = req.headers.get("authorization");

    if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectDB();

    // 🔥 ADD 10 COINS TO ALL USERS
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