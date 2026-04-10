import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import User from "@/app/models/User";
import Poll from "@/app/models/Poll"; // ✅ USE DATABASE MODEL
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { pollId, optionId } = await req.json();

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

    // 🔻 subtract coins
    user.spoilCoins -= 10;

    // 🔥 GET POLL FROM DATABASE
    const poll = await Poll.findOne({ pollId });

    if (!poll) {
      return NextResponse.json({ error: "Poll not found" }, { status: 404 });
    }

    // ✅ CHECK CORRECT ANSWER FROM DATABASE
    const isCorrect = optionId === poll.correctOptionId;

    if (isCorrect) {
      user.spoilCoins += 20;
    }

    // 🔥 UPDATE POLL VOTES IN DATABASE
    const option = poll.options.find((opt: any) => opt.id === optionId);
    if (option) {
      option.votes += 1;
      await poll.save();
    }

    // save vote to user
    user.votedPolls.push({ pollId, optionId });

    await user.save();

    return NextResponse.json({
      coins: user.spoilCoins,
      isCorrect,
      correctOptionId: poll.correctOptionId, // 🔥 SEND BACK
    });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}