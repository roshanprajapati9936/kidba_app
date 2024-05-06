import express from 'express'
import { isAdmin, requireSignIn } from '../middlewares/auth.middleware.js';
import { createCategoryController, deleteCategoryController, getsCategoryController, singleCategoryController, updateCategoryController } from '../controllers/category.controller.js';

const router = express.Router()
// create category 
router.post("/create-category", requireSignIn, isAdmin, createCategoryController);

// update category 
router.put("/update-category/:id", requireSignIn, isAdmin, updateCategoryController);

// get all category
router.get("/category", getsCategoryController);

// single category 
router.get("/single-category/:slug", singleCategoryController);

// delete category 

router.delete("/deletee-category/:id", deleteCategoryController)

export default router;