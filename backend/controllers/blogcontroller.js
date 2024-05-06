import multer from "multer";
import path from 'path'
import fs from 'fs'
import blogModel from "../models/blogModel.js";
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (fs.existsSync('./uploads/blogclasses')) {
            cb(null, './uploads/blogclasses')

        } else {
            fs.mkdirSync('./uploads/blogclasses')
            cb(null, './uploads/blogclasses')
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

export const getsblogClasses = async (req, res) => {
    try {
        const blog = await blogModel.aggregate([
            {
                $lookup: {
                    from: "kidbas",
                    localField: "kidba_name",
                    foreignField: "_id",
                    as: "kidba_name"
                },
            },
            { $unwind: "$kidba_name" },
            { $sort: { '_id': 1 } },
            { $limit: 3 },
        ]);


        if(blog){
            return res.status(200).json({
                 data:blog,
                 message:'successfully',
                 filepath:'http://localhost:8002/uploads/blogclasses'

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

export const addblogClasses = (req, res) => {

    try {
        const addImage = upload.single("avatar")
        addImage(req, res, function (err) {
            if (err)  return res.status(400).json({ message: err.message });
             

            const { calendar, kidba_name,  comment, title, short_description,image  } = req.body;
            let filename = null;
            if (req.file) {
                filename = req.file.filename;
            }
            const blogClass = new blogModel({
                calendar:calendar,
                kidba_name:kidba_name,
                comment:comment,
                title:title,
                short_description:short_description,
                image:filename,
            });

             blogClass.save();
            if (blogClass){
                return res.status(201).json({
                    data: blogClass,
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

export const getblogClasses = async (req, res) => {
    try {
        const blogID = req.params.blog_id;
        const blog = await blogModel.findOne({ _id: blogID })
        if (blog) {
            return res.status(200).json({
                data: blog,
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


export const deleteblogClasses = async (req, res) => {
    try {
        const blogID = req.params.blog_id;
        const existBlog = await blogModel.findOne({ _id: blogID });

        if (!existBlog) {
            return res.status(404).json({
                message: 'Blog not found'
            });
        }

        const blog = await blogModel.deleteOne({ _id: blogID });
        

        if (blog.acknowledged) {
            if (fs.existsSync('./uploads/blogclasses/' + existBlog.image)) {
                fs.unlinkSync('./uploads/blogclasses/' + existBlog.image);
            }

            return res.status(200).json({
                message: 'Deleted'
            });
        } else {
            return res.status(400).json({
                message: 'Bad request'
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

export const updateblogClasses = async (req, res) => {
    try {
        const updateBlog = upload.single("avatar");
        updateBlog(req, res, async function (err) {

            if (err) return res.status(400).json({ message: err.message });
            const blogID = req.params.blog_id;
            const existBlog = await  blogModel.findOne({ _id: blogID });
            const { calendar, kidba_name,  comment, title, short_description,image  } = req.body;

            let filename = existBlog.image;
            if (req.file) {
                filename = req.file.filename;
                if (fs.existsSync('./uploads/blogclasses/' + existBlog.image)) {
                    fs.unlinkSync('./uploads/blogclasses/' + existBlog.image)
                }
            }
            const updatedBlog = await blogModel.updateOne({ _id: blogID }, {
                $set: {
                    calendar:calendar,
                    kidba_name:kidba_name,
                    comment:comment,
                    title:title,
                    short_description:short_description,
                    image:filename,
                }
            });
            if (updatedBlog.acknowledged) {
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
 




