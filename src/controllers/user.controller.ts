import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
  res.json({ message: "success" });
};

export const getUser = (req: Request, res: Response) => {
  res.json({ message: "success" });
};

export const getCart = (req: Request, res: Response) => {
  res.json({ message: "success" });
};

export const getOrders = (req: Request, res: Response) => {
  res.json({ message: "success" });
}

export const addToCart = (req: Request, res:Response) => {
    res.json({message: 'success'})
}

export const addOrder = (req: Request, res:Response) => {
    res.json({message: 'success'})
}

