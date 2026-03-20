import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  userId: String,
  contentId: String,
  title: String,
  review: String,
  rating: Number,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Review || mongoose.model("Review", reviewSchema);