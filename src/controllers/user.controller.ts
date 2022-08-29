import { Request, Response } from "express";
import User from "../models/user.model";
import log from "../utils/logger";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.status(200).json({ users });
  } catch (err) {
    log.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getUser = async (req: Request, res: Response) => {
  const foundUser = await User.findById(req.params.id);
  if (!foundUser) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.status(200).json({ foundUser });
};

export const getCart = (req: Request, res: Response) => {
  res.json({ message: "success" });
};

export const getOrders = (req: Request, res: Response) => {
  res.json({ message: "success" });
};

export const addToCart = (req: Request, res: Response) => {
  res.json({ message: "success" });
};

export const addOrder = (req: Request, res: Response) => {
  res.json({ message: "success" });
};
