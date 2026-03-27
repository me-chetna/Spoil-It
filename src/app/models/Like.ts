import mongoose from "mongoose";

const LikeSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    movieId: {
      type: Number,
      required: true,
    },
    title: String,
    poster: String,
  },
  { timestamps: true }
);

// prevent duplicates
LikeSchema.index({ userId: 1, movieId: 1 }, { unique: true });

export default mongoose.models.Liked ||
  mongoose.model("Liked", LikeSchema);