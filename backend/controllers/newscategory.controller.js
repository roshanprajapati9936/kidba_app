import newscategoryModel from "../models/newscategory.model.js"

export const getsKidsEducation = async (req, res) => {
    try {
        const kidsEducation = await newscategoryModel.find()

        if (kidsEducation) {
            return res.status(200).json({
                data:kidsEducation,
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

export const addKidsEducationdata = (req,res) => {
    try {
        console.log(req.body)

        const {kids_education_name} = req.body

        const saveKidsEducationdata = new newscategoryModel({
            kids_education_name:kids_education_name,
        });
        saveKidsEducationdata.save();

        if (saveKidsEducationdata) {
            return res.status(201).json({
                data: saveKidsEducationdata,
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

export const getKidsEducation = async (req, res) => {
    try {
        const kidseducationID = req.params.kidseducation_id;
        const kidseducation= await newscategoryModel.findOne({_id: kidseducationID });
        if (kidseducation) {
            return res.status(200).json({
                data: kidseducation,
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

export const updateKidsEducation = async (req, res) => {
    try {
        const kidseducationID = req.params.kidseducation_id;
        const {kids_education_name} = req.body
       
        const updatedKidsEducation = await newscategoryModel.updateOne({ _id: kidseducationID }, {
            $set: {
                kids_education_name:kids_education_name,
            }
        });
        if (updatedKidsEducation.acknowledged) {
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

export const deleteKidsEducation = async (req, res) => {
    try {
        const kidseducationID = req.params.kidseducation_id;
        const kidseducation = await newscategoryModel.deleteOne({ _id: kidseducationID });
        if (kidseducation .acknowledged) {
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
