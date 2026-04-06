import mongoose from "mongoose";

const PollSchema = new mongoose.Schema({
  pollId: String,

  cost: {
    type: Number,
    default: 10, // Each vote costs 10 points
  },

   options: [
    {
      id: String,
      votes: {
        type: Number,
        default: 0, // Initial votes for each option is 0
      },
    },
  ],
});

export default mongoose.models.Poll || mongoose.model("Poll", PollSchema);