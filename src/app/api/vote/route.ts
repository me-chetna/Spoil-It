import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import User from "@/app/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { pollId, optionId, correctOptionId } = await req.json();

    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Not logged in" }, { status: 401 });
    }

    const user = await User.findOne({ email: session.user.email });

    // ❌ already voted
    const already = user.votedPolls?.find((p: any) => p.pollId === pollId);
    if (already) {
      return NextResponse.json({ error: "Already voted" }, { status: 400 });
    }

    // ❌ no coins
    if (user.spoilCoins < 10) {
      return NextResponse.json({ error: "Not enough coins" }, { status: 400 });
    }

    // 🔻 subtract 10
    user.spoilCoins -= 10;

    // ✅ correct answer → +20
    let isCorrect = false;
    if (optionId === correctOptionId) {
      user.spoilCoins += 30;
      isCorrect = true;
    }

    // save vote
    user.votedPolls.push({ pollId, optionId });

    await user.save();

    return NextResponse.json({
      coins: user.spoilCoins,
      isCorrect,
    });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}