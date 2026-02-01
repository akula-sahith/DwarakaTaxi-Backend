import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    fcmToken: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Admin", adminSchema);
