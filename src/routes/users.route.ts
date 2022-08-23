import Router from "express";
import * as userController from "../controllers/user.controller";

const router = Router();

// get users
router
  .get("/", userController.getUsers)

  // get a user
  .get("/:id", userController.getUser)

  // get user shopping cart
  .get("/:id/cart", userController.getCart)

  // get orders
  .get("/:id/orders", userController.getOrders)

  // add to shopping cart
  .post("/:id/cart", userController.addToCart)
  
  // add order
  .post("/:id/orders", userController.addOrder);

export default router;
