import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import User from "@/app/models/User";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  await connectDB();

  let user = await User.findOne({ email });

  if (!user) {
    // first time login → give 50 coins
    user = await User.create({
      email,
      password,
      username: email.split("@")[0],
      spoilCoins: 50,
    });
  }

  return NextResponse.json(user);
}