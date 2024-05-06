import blogtagModel from "../models/blogtag.model.js"
export const getsBlogTag = async (req, res) => {
    try {
        const blogtags = await blogtagModel.find()

        if (blogtags) {
            return res.status(200).json({
                data:blogtags,
                message: 'fetched'
            })
        }
        return res.status(400).json({
            message: 'bad request'
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const addBlogTag = (req,res) => {
    try {
        console.log(req.body)

        const {blogtag_name} = req.body

        const saveBlogTag = new blogtagModel({
            blogtag_name:blogtag_name
        });
        saveBlogTag.save();

        if (saveBlogTag) {
            return res.status(201).json({
                data: saveBlogTag,
                message: 'created'
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
export const getBlogTag = async (req, res) => {
    try {
        const blogtagID = req.params.blogtag_id;
        const blogtag = await blogtagModel.findOne({_id: blogtagID });
        if (blogtag) {
            return res.status(200).json({
                data: blogtag,
                message: 'fetched'
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

export const updateBlogTag = async (req, res) => {
    try {
        const blogtagID = req.params.blogtag_id;
        const {blogtag_name} = req.body
        
        const updatedBlogtag = await blogtagModel.updateOne({ _id: blogtagID }, {
            $set: {
                blogtag_name:blogtag_name,
            }
        });
        if (updatedBlogtag.acknowledged) {
            return res.status(200).json({
                message: 'Updated'
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

export const deleteBlogTag = async (req, res) => {
    try {
        const blogtagID = req.params.blogtag_id;
        const blogtag = await blogtagModel.deleteOne({ _id: blogtagID });
        if (blogtag.acknowledged) {
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


