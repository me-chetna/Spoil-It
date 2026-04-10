import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import User from "@/app/models/User";
import Poll from "@/app/models/Poll";
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
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    // 1. Check if already voted
    const alreadyVoted = user.votedPolls?.some((p: any) => p.pollId === pollId);
    if (alreadyVoted) {
      return NextResponse.json({ error: "Already voted" }, { status: 400 });
    }

    // 2. Fetch Poll from DB (Searching by the custom 'id' field)
    const poll = await Poll.findOne({ id: pollId });
    if (!poll) {
      return NextResponse.json({ error: `Poll ${pollId} not found` }, { status: 404 });
    }

    // 3. Handle Coins
    if (user.spoilCoins < (poll.cost || 10)) {
      return NextResponse.json({ error: "Not enough coins" }, { status: 400 });
    }
    user.spoilCoins -= (poll.cost || 10);

    // 4. Validate Answer
    const isCorrect = optionId === poll.correctOptionId;
    if (isCorrect) {
      user.spoilCoins += 20;
    }

    // 5. Update Poll Vote Count
    const option = poll.options.find((opt: any) => opt.id === optionId);
    if (option) {
      option.votes = (option.votes || 0) + 1;
      // Mark as modified if it's a nested array
      poll.markModified('options');
      await poll.save();
    }

    // 6. Update User Record
    user.votedPolls.push({ pollId, optionId });
    await user.save();

    return NextResponse.json({
      coins: user.spoilCoins,
      isCorrect,
      correctOptionId: poll.correctOptionId,
    });

  } catch (err) {
    console.error("VOTE_ERROR:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}