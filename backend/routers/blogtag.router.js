import express from 'express'
import { addBlogTag, deleteBlogTag, getBlogTag, getsBlogTag, updateBlogTag } from '../controllers/blogtag.controller.js';

const router = express.Router()

router.get("/gets-blogtag",getsBlogTag)

router.post("/add-blogtag",addBlogTag)

router.get("/get-blogtag/:blogtag_id",getBlogTag)

router.delete('/delete-blogtag/:blogtag_id',deleteBlogTag)

router.put("/update-blogtag/:blogtag_id",updateBlogTag)

export default router;