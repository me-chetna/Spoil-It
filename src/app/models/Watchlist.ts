import mongoose from "mongoose";

const WatchlistSchema = new mongoose.Schema(
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
WatchlistSchema.index({ userId: 1, movieId: 1 }, { unique: true });

export default mongoose.models.Watchlist ||
  mongoose.model("Watchlist", WatchlistSchema);