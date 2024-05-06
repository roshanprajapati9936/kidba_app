import express from 'express'

import { addKidba, deleteKidba, getKidba, getsKidba, updateKidba } from '../controllers/kidbaController.js';

const router=express.Router()

router.get("/gets-kidba",getsKidba);

router.post("/add-kidba",addKidba);

router.get("/get-kidba/:kidba_id",getKidba);

router.put("/update-kidba/:kidba_id",updateKidba);

router.delete("/delete-kidba/:kidba_id",deleteKidba);

export default router;