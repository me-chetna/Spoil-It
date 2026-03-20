import mongoose from "mongoose";

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
});

export default mongoose.models.User || mongoose.model("User", UserSchema);