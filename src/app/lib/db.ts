import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB_URI!;

if (!MONGO_URI) {
  throw new Error("❌ MONGODB_URI is missing");
}

// 👇 GLOBAL CACHE
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) {
    console.log("✅ Using cached DB");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("⏳ Connecting to MongoDB...");

    cached.promise = mongoose.connect(MONGO_URI).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  console.log("✅ MongoDB Connected");

  return cached.conn;
}