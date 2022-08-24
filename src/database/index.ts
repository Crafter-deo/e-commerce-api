import mongoose from "mongoose";
import config from "../config/index";
import log from "../utils/logger";
import adminSeeder from "./seeds/admin";

const connect = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI!);
    log.info("Database connected");
    await adminSeeder();
  } catch (err) {
    log.error(err);
    process.exit(1);
  }
};

export default connect;
