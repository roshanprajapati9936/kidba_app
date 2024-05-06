import express from 'express'
import { addPrice, deletePrice, getPrice, getsPrice, updatePrice } from '../controllers/price.controller.js';
import { updateLevel } from '../controllers/level.controller.js';

const router =express.Router();

router.get("/gets-price",getsPrice);

router.post("/add-price",addPrice);

router.get("/get-price/:price_id",getPrice);

router.put("/update-price/:price_id",updatePrice);

router.delete("/delete-price/:price_id",deletePrice);

export default router;