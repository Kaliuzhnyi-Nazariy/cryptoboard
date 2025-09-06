import { Schema, model } from "mongoose";
import { mongooseHelper } from "../helper";

const userSchema = new Schema(
  {
    email: { type: String, require: true, unique: true },
    name: { type: String, require: true },
    password: { type: String, require: [true, "Setting password is obvious!"] },
    token: { type: String || null, default: null },
    avatar: { type: String },
  },
  { versionKey: false, timestamps: true }
);

(userSchema as any).post("save", mongooseHelper);

const User = model("user", userSchema);

export default User;
