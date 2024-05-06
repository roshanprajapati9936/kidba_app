import express from 'express';
import { isAdmin, requireSignIn } from '../middlewares/auth.middleware.js';
import { singleProductController, createProductController, getsProductsController, updateProductController, deleteProductController } from '../controllers/product.controller.js';

const router = express.Router();


// routes
// create product
router.post("/create-product", requireSignIn, isAdmin, createProductController);

//gets products
router.get("/gets-product", getsProductsController);

// single product
router.get("/single-product/:product_id", singleProductController);

// update product
router.put("/update-product/:product_id", updateProductController);

// deleted product
router.delete("/delete-product/:product_id",deleteProductController);

export default router;
