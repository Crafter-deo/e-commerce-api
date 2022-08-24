import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

export const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      lower: true,
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
    verified: {
      type: Boolean,
      default: false,
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


// mongodb pre-hook
UserSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  user.password = bcrypt.hashSync(user.password, 12);
  next();
});


export default model("User", UserSchema);
