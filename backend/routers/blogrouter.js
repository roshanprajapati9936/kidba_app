import express from 'express'
import { addblogClasses, deleteblogClasses, getblogClasses, getsblogClasses, updateblogClasses } from '../controllers/blogcontroller.js';


const router = express.Router();

router.get("/gets-blog", getsblogClasses);

router.post("/add-blog", addblogClasses);

router.get("/get-blog/:blog_id",getblogClasses);

router.delete("/delete-blog/:blog_id",deleteblogClasses);

router.put("/update-blog/:blog_id", updateblogClasses);

export default router;