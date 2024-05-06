import express from 'express'
import { addLevel, deleteLevel, getLevel, getsLevel, updateLevel } from '../controllers/level.controller.js';

const router = express.Router();

router.get("/gets-level",getsLevel);

router.post("/add-level",addLevel);

router.get("/get-level/:level_id",getLevel);

router.put("/update-level/:level_id",updateLevel);

router.delete("/delete-level/:level_id",deleteLevel);

export default router;