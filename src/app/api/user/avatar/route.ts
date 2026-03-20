import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connectDB } from "@/app/lib/db";
import User from "@/app/models/User";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { avatar } = await req.json();

    if (!avatar) {
      return NextResponse.json({ error: "Avatar required" }, { status: 400 });
    }

    await connectDB();

    const updatedUser = await User.findOneAndUpdate(
      { email: session.user.email },
      { avatar },
      { new: true }
    );

    return NextResponse.json({
      message: "Avatar updated",
      user: updatedUser,
    });

  } catch (error) {
    console.log("❌ Avatar update error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}