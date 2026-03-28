import { connectDB } from "@/app/lib/db";
import Poll from "@/app/models/Poll";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();

  const polls = await Poll.find();

  return NextResponse.json(polls);
}