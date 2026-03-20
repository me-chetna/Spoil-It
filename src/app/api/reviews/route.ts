import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import Review from "@/app/models/Review";

export async function GET() {
  await connectDB();
  const reviews = await Review.find().sort({ createdAt: -1 });
  return NextResponse.json(reviews);
}

export async function POST(req: Request) {
  const body = await req.json();

  await connectDB();

  const review = await Review.create(body);

  return NextResponse.json(review);
}