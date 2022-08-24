import Router from "express";
import * as productController from "../controllers/products.controller";

const router = Router();

router
  //get products
  .get("/", productController.getProducts)

  //get a product
  .get("/:id", productController.getProduct)

  //add product
  .post("/", productController.addProduct)

  // update product
  .put("/:id", productController.updateProduct)

  // delete product
  .delete("/:id", productController.deleteProduct);

export default router;
