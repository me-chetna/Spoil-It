import mongoose from "mongoose";

const PollSchema = new mongoose.Schema({
  title: String,

  cost: {
    type: Number,
    default: 10,
  },

  options: [
    {
      id: String,
      title: String,
      image: String,
      votes: {
        type: Number,
        default: 0,
      },
    },
  ],

  expiresAt: Date, // 🔥 needed for reward logic
});

export default mongoose.models.Poll || mongoose.model("Poll", PollSchema);