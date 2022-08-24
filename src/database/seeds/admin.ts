import userModel from "../../models/user.model";

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
    console.log("Admin account created");
    return;
  }

  console.log("Admin account exists");
  return;
};

export default adminSeeder;