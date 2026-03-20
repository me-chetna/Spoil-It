import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
  userId: String,
  contentId: String,
  rating: Number,
});

export default mongoose.models.Rating || mongoose.model("Rating", ratingSchema);