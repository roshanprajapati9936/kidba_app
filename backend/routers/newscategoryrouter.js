import express from 'express'

import { addKidsEducationdata, deleteKidsEducation, getKidsEducation, getsKidsEducation, updateKidsEducation } from '../controllers/newscategory.controller.js';

const router=express.Router()

router.get("/gets-kidseducationdata",getsKidsEducation);

router.post("/add-kidseducationdata",addKidsEducationdata);

router.get("/get-kidseducationdata/:kidseducation_id",getKidsEducation);

router.put("/update-kidseducationdata/:kidseducation_id",updateKidsEducation);

router.delete("/delete-kidseducationdata/:kidseducation_id",deleteKidsEducation);



export default router;