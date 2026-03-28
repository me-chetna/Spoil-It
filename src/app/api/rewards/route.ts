import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import User from "@/app/models/User";
import Poll from "@/app/models/Poll";

export async function POST(req: Request) {
  await connectDB();

  const { pollId } = await req.json();

  const poll = await Poll.findOne({ pollId });

  if (!poll) {
    return NextResponse.json({ error: "Poll not found" });
  }

  // 🔥 find winning option
  const winningOption = poll.options.reduce((prev: any, curr: any) =>
    curr.votes > prev.votes ? curr : prev
  );

  const users = await User.find({
    "votedPolls.pollId": pollId,
  });

  for (const user of users) {
    const vote = user.votedPolls.find(
      (v: any) => v.pollId.toString() === pollId // ✅ FIX
    );

    if (vote?.optionId === winningOption.id) {
      user.spoilCoins += 20;
      await user.save();
    }
  }

  return NextResponse.json({ success: true });
}