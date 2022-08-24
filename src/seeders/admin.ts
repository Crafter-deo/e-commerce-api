import userModel from "../models/user.model";
import config from "../config/index";

const adminSeeder = async () => {
  const existingAdmin = await userModel.findOne({ role: "admin" });
  if (!existingAdmin) {
    await userModel.create({
      name: "Admin",
      email: config.ADMIN_EMAIL,
      password: config.ADMIN_PASSWORD,
      passwordConfirmation: config.ADMIN_PASSWORD,
      role: "admin",
    });
    console.log("Admin account created");
    return;
  }

  console.log("Admin account exists");
  return;
};
