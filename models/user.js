import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true, // ป้องกันซ้ำซ้อน
    },
    password: {
      type: String,
      required: false, // ✅ ทำให้ optional สำหรับ Google users
      default: "",     // ✅ ค่าเริ่มต้นสำหรับ Google users
    },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
