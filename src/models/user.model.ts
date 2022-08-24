import { Schema, model } from "mongoose";

export const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    passwordConfirmation: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["user", "retailer", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

export default model("User", UserSchema);