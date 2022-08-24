import { Request, Response } from "express";

export const getProducts = (req: Request, res: Response) => {
  console.log(req.query);
  res.json({ message: "success" });
};

export const getProduct = (req: Request, res: Response) => {
  res.json({ message: "success" });
};


