import mongoose from "mongoose";
import config from "../config/index";
import log from "../utils/logger";

const connect = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI!);
    log.info("Database connected");
  } catch (err) {
    log.error(err);
    process.exit(1);
  }
};

export default connect;
