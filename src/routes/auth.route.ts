import Router from "express";
import * as authController from "../controllers/auth.controller";

const router = Router();

router
  .post("/register", authController.postRegister)

  .post("/login", authController.postLogin)

  .post("/resetpassword", authController.postResetPassword)

  .post("/logout", authController.postLogout);

  
export default router;
