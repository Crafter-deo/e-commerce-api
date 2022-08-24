import { Request, Response } from "express";
import User from "../models/user.model";

export const postRegister = async (req: Request, res: Response) => {
  const { name, email, password, passwordConfirmation, role } = req.body;

  const foundUser = await User.findOne({ email });

  if (foundUser) {
    return res.status(400).json({ message: "User already exists" });
  }
  if (password !== passwordConfirmation) {
    return res.status(400).json({ message: "Passwords do not match" });
  }
  try {
    const newUser = await User.create({
      name,
      email,
      password,
      passwordConfirmation,
      role,
    });
    return res.status(201).json({ message: "User registration successful" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const postLogin = (req: Request, res: Response) => {};

export const postResetPassword = (req: Request, res: Response) => {
  res.json({ message: "success" });
};

export const postLogout = (req: Request, res: Response) => {
  res.json({ message: "success" });
};
