import { connectDB } from "@/app/lib/db";
import Rating from "@/app/models/Rating";

export async function POST(req: Request) {
  const body = await req.json();

  await connectDB();

  await Rating.findOneAndUpdate(
    { userId: body.userId, contentId: body.contentId },
    body,
    { upsert: true }
  );

  return new Response("OK");
}