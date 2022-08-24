import mongoose from "mongoose";
import config from "../config/index";

const connect = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI!);
    console.log("Database connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connect;
