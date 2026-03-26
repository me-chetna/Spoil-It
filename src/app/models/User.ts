import mongoose from "mongoose";
import Vote from "./Poll";

const UserSchema = new mongoose.Schema({
  email: String,
  name: String,
  image: String,

  avatar: {
    type: String,
    default: null,
  },

  spoilCoins: {
    type: Number,
    default: 50,
  },

  votedPolls: [
    {
      pollId: String,
      optionId: String,
    },
  ],
});

export default mongoose.models.User || mongoose.model("User", UserSchema);