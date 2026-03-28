import mongoose from "mongoose";

const PollSchema = new mongoose.Schema({
  pollId: String,

  cost: {
    type: Number,
    default: 10,
  },

   options: [
    {
      id: String,
      votes: {
        type: Number,
        default: 0,
      },
    },
  ],
});

export default mongoose.models.Poll || mongoose.model("Poll", PollSchema);