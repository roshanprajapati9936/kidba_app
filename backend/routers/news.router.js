import express from 'express'
import { addNewsClasses, deleteNewsClasses, getNewsClasses, getsnewsClasses, updateNewsClasses } from '../controllers/news.controller.js'

const router = express.Router()

router.get("/gets-news",getsnewsClasses);

router.post("/add-news",addNewsClasses);

router.get("/get-news/:news_id",getNewsClasses);

router.delete("/delete-news/:news_id",deleteNewsClasses);

router.put("/update-news/:news_id",updateNewsClasses);

export default router;