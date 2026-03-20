import mongoose from "mongoose";

const voteSchema = new mongoose.Schema({
  userId: String,
  votingId: String,
  selectedOption: String,
});

export default mongoose.models.Vote || mongoose.model("Vote", voteSchema);