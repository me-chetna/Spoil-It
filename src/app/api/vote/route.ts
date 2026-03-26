import { NextResponse } from "next/server";
import {connectDB} from "@/app/lib/db";
import User from "@/app/models/User";
import Poll from "@/app/models/Poll";
import { getServerSession } from "next-auth"; // if using auth

export async function POST(req: Request) {
  try {
    await connectDB();

    const { pollId, optionId } = await req.json();

    // 🔥 get logged-in user
    const session = await getServerSession();

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session.user.email });
    const poll = await Poll.findById(pollId);

    if (!user || !poll) {
      return NextResponse.json(
        { error: "Invalid data" },
        { status: 400 }
      );
    }

    // ❌ already voted
    const alreadyVoted = user.votedPolls.find(
      (v: any) => v.pollId.toString() === pollId
    );

    if (alreadyVoted) {
      return NextResponse.json(
        { error: "Already voted" },
        { status: 400 }
      );
    }

    // ❌ not enough coins
    if (user.spoilCoins < poll.cost) {
      return NextResponse.json(
        { error: "Not enough Spoil Coins" },
        { status: 400 }
      );
    }

    // 🔥 deduct coins
    user.spoilCoins -= poll.cost;

    // 🔥 increment vote
    const option = poll.options.find(
      (o: any) => o.id === optionId
    );

    if (!option) {
      return NextResponse.json(
        { error: "Invalid option" },
        { status: 400 }
      );
    }

    option.votes += 1;

    // 🔥 save vote
    user.votedPolls.push({
      pollId,
      optionId,
    });

    await user.save();
    await poll.save();

    return NextResponse.json({
      success: true,
      coins: user.spoilCoins,
    });

  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}