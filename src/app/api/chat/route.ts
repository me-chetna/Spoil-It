import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import Liked from "@/app/models/Like";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { userId, message } = await req.json();

    if (!userId || !message) {
      return NextResponse.json(
        { error: "Missing data" },
        { status: 400 }
      );
    }

    // ✅ Fetch liked movies
    const liked = await Liked.find({ userId });

    const likedTitles = liked.map((item) => item.title).join(", ");

    // ✅ Gemini setup
    const genAI = new GoogleGenerativeAI(
      process.env.GEMINI_API_KEY as string
    );

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    // ✅ Prompt
    const prompt = `
You are a movie and anime expert assistant.

User liked: ${likedTitles || "Nothing yet"}

User question: ${message}

Give:
- Clear answer if it's a question
- Recommendations if asked
- Keep it short and helpful
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;

    const reply = response.text();

    return NextResponse.json({ reply });
  } catch (err: any) {
    console.error("CHAT ERROR:", err.message);

    return NextResponse.json(
      { error: err.message || "Chat failed" },
      { status: 500 }
    );
  }
}