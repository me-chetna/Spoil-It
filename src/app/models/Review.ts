import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  title: String,
  review: String,
  user: String,
  rating: Number,
}, { timestamps: true });

export default mongoose.models.Review ||
  mongoose.model("Review", ReviewSchema);