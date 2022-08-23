import Router from "express";
import * as productController from "../controllers/products.controller";

const router = Router();

// get users
router
  .get("/", productController.getProducts)

  // get a user
  .get("/:id", productController.getProduct);

export default router;
