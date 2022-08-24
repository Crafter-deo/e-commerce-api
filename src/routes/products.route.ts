import Router from "express";
import * as productController from "../controllers/products.controller";

const router = Router();

router
  //get products
  .get("/", productController.getProducts)

  //get a product
  .get("/:id", productController.getProduct);

export default router;
