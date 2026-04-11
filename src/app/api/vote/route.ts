import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import User from "@/app/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { polls } from "@/data/poll"; // ✅ Import static poll data

export async function POST(req: Request) {
  try {
    await connectDB();
    const { pollId, optionId } = await req.json();
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Not logged in" }, { status: 401 });
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    // 1. Check if already voted
    const alreadyVoted = user.votedPolls?.some((p: any) => p.pollId === pollId);
    if (alreadyVoted) {
      return NextResponse.json({ error: "Already voted" }, { status: 400 });
    }

    // 2. ✅ Find poll from static data (not DB)
    const poll = polls.find((p) => p.id === pollId);
    if (!poll) {
      return NextResponse.json({ error: `Poll ${pollId} not found` }, { status: 404 });
    }

    // 3. Handle Coins — deduct cost
    const cost = poll.cost || 10;
    if (user.spoilCoins < cost) {
      return NextResponse.json({ error: "Not enough coins" }, { status: 400 });
    }
    user.spoilCoins -= cost;

    // 4. Validate Answer
    const isCorrect = optionId === poll.correctOptionId;
    if (isCorrect) {
      user.spoilCoins += 20; // net gain: +10
    }

    // 5. Update User Record
    user.votedPolls.push({ pollId, optionId });
    await user.save();

    return NextResponse.json({
      coins: user.spoilCoins,
      isCorrect,
      correctOptionId: poll.correctOptionId, // ✅ returned to frontend
    });

  } catch (err) {
    console.error("VOTE_ERROR:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}