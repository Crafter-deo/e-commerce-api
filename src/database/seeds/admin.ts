import userModel from "../../models/user.model";
import log from "../../utils/logger";

const adminSeeder = async () => {
  const existingAdmin = await userModel.findOne({ role: "admin" });
  if (!existingAdmin) {
    await userModel.create({
      name: "Admin",
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
      passwordConfirmation: process.env.ADMIN_PASSWORD,
      role: "admin",
    });
    log.info("Admin account created");
    return;
  }

  log.info("Admin account exists");
  return;
};

export default adminSeeder;
