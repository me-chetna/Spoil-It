import { connectDB } from "@/app/lib/db";
import Poll from "@/app/models/Poll";
import User from "@/app/models/User";
import { NextResponse } from "next/dist/server/web/spec-extension/response";

export async function POST(req: Request) {
  await connectDB();

  const { pollId } = await req.json();

  const poll = await Poll.findById(pollId);

  const winningOption = poll.options.reduce((prev: any, curr: any) =>
    curr.votes > prev.votes ? curr : prev
  );

  const users = await User.find({
    "votedPolls.pollId": pollId,
  });

  for (const user of users) {
    const vote = user.votedPolls.find(
      (v: any) => v.pollId === pollId
    );

    if (vote.optionId === winningOption.id) {
      user.spoilCoins += 20; // 🔥 reward
      await user.save();
    }
  }

  return NextResponse.json({ success: true });
}