import mongoose from "mongoose";

const ContentSchema = new mongoose.Schema({
  tmdbId: { type: String, unique: true },

  title: String,
  genres: [String],
  actors: [String],
  episodes: Number,
  rating: Number,

  vector: [Number], // 🔥 future ML
});

export default mongoose.models.Content ||
  mongoose.model("Content", ContentSchema);