import { connectDB } from "@/app/lib/db";
import User from "@/app/models/User";
import Vote from "@/app/models/Vote";

export async function POST(req: Request) {
  const { userId, votingId, option } = await req.json();

  await connectDB();

  const user = await User.findById(userId);

  if (user.spoilCoins < 10) {
    return new Response("Not enough coins", { status: 400 });
  }

  user.spoilCoins -= 10;
  await user.save();

  await Vote.create({
    userId,
    votingId,
    selectedOption: option,
  });

  return new Response("Vote submitted");
}