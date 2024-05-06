import express from 'express'
import { addCategories, deleteCategory, getCategories, getCategory, updateCategories } from '../controllers/categories.controller.js';

const router=express.Router()

router.get("/get-catergories",getCategories);

router.post("/add-categories",addCategories);

router.get("/get-category/:category_id",getCategory);

router.put("/update-categories/:categories_id",updateCategories);

router.delete("/delete-category/:category_id",deleteCategory);

export default router;