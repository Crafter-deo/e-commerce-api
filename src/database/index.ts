import mongoose from "mongoose";
import config from "../config/index";
//import database from config/index.ts

const connect = async () => {
  try {
    mongoose.connect(config.DB_URI);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connect;
