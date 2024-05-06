import multer from "multer";
import path from 'path'
import fs from 'fs'
import newsModel from "../models/news.model.js";
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (fs.existsSync('./uploads/newsclasses')) {
            cb(null, './uploads/newsclasses')

        } else {
            fs.mkdirSync('./uploads/newsclasses')
            cb(null, './uploads/newsclasses')
        }
    },
    filename: function (req, file, cb) {

        let orName = file.originalname;
        let ext = path.extname(orName);
        let basename = path.parse(orName).name;
        let filename = basename + '-' + Date.now() + ext
        cb(null, filename)
    }
})
const upload = multer({ storage: storage })



export const getsnewsClasses = async (req, res) => {
    try {
        const news = await newsModel.aggregate([
            {
                $lookup: {
                    from: "news",
                    localField: "kids_education_name",
                    foreignField: "_id",
                    as: "kids_education_name"
                },
            },
            { $unwind: "$kids_education_name" },
            { $sort: { '_id': 1 } },
            { $limit: 3 },
        ]);


        if(news){
            return res.status(200).json({
                 data:news,
                 message:'successfully',
                 filepath:'http://localhost:8002/uploads/newsclasses'

            })
        }

        return res.status(400).json({
            message: 'No data found'
        });

    } catch (error) {
        console.error("Error fetching news classes:", error);
        return res.status(500).json({
            message: error.message
        });
    }
}


export const addNewsClasses = (req, res) => {

    try {
        const addImage = upload.single("avatar")
        addImage(req, res, function (err) {
            if (err)  return res.status(400).json({ message: err.message });
             
            const { calendar, title,  short_description,  kids_education_name, Comment} = req.body;
            let filename = null;
            if (req.file) {
                filename = req.file.filename;
            }
            const newsClass = new newsModel({
                calendar:calendar,
                title:title,
                short_description,
                kids_education_name:kids_education_name,
                Comment:Comment,
                image:filename,
            });

            newsClass.save();
            if (newsClass){
                return res.status(201).json({
                    data:newsClass,
                    message: 'Created'

                })
            }
            return res.status(400).json({
                message: 'Bad request'
            })

        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}



export const getNewsClasses = async (req, res) => {
    try {
        const newsID = req.params.news_id;
        const news = await newsModel.findOne({ _id: newsID })
        if (news) {
            return res.status(200).json({
                data: news,
                message: 'Fetched!'
            })
        }
        return res.status(400).json({
            message: 'Bad request'
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}


export const deleteNewsClasses = async (req, res) => {
    try {
        const newsID = req.params.news_id;
        const existNews = await newsModel.findOne({ _id: newsID });
        const news = await newsModel.deleteOne({ _id: newsID });
        if (news.acknowledged) {

            if (fs.existsSync('./uploads/newsclasses/' + existNews.image)) {
                fs.unlinkSync('./uploads/newsclasses/' + existNews.image)
            }

            return res.status(200).json({
                message: 'Deleted'
            })
        }

        return res.status(400).json({
            message: 'Bad request'
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const updateNewsClasses = async (req, res) => {
    try {
        const updateNews = upload.single("avatar");
        updateNews(req, res, async function (err) {

            if (err) return res.status(400).json({ message: err.message });
            const newsID = req.params.news_id;
            const existNews = await newsModel.findOne({ _id: newsID });
            const { calendar, title,  short_description,  kids_education_name, Comment} = req.body;

            let filename = existNews.image;
            if (req.file) {
                filename = req.file.filename;
                if (fs.existsSync('./uploads/newsclasses/' + existNews.image)) {
                    fs.unlinkSync('./uploads/newsclasses/' + existNews.image)
                }
            }
            const updatedNews = await newsModel.updateOne({ _id: newsID }, {
                $set: {
                  
                    calendar:calendar,
                    title:title,
                    short_description,
                    kids_education_name:kids_education_name,
                    Comment:Comment,
                    image:filename,
                }
            });
            if (updatedNews.acknowledged) {
                return res.status(200).json({
                    message: 'Updated'
                })
            }

            return res.status(400).json({
                message: 'Bad request'
            })
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}





