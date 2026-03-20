import { connectDB } from "@/app/lib/db";
import User from "@/app/models/User";

export async function POST(req: Request) {
  const { userId, item } = await req.json();

  await connectDB();

  await User.findByIdAndUpdate(userId, {
    $addToSet: { watchlist: item },
  });

  return new Response("Added");
}