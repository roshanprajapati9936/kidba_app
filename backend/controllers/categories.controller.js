import categoriesModel from "../models/categories.model.js"

export const getCategories = async (req, res) => {
    try{
        const category = await categoriesModel.find({})
        res.status(200).json({
          success:true,
          message:"All categories list ",
          category,
        })
     }catch(error){
       console.log(error)
       res.status(500).json({
        success:false,
        message:'Error while getting all categories'
       })
     }
    
}

export const addCategories = (req,res) => {
    try {
        console.log(req.body)

        const {categories_name , short_description} = req.body

        const saveCategories = new categoriesModel({
            categories_name:categories_name,
            short_description,
        });
        saveCategories.save();

        if (saveCategories) {
            return res.status(201).json({
                data: saveCategories,
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
export const getCategory = async (req, res) => {
    try {
        const categoryID = req.params.category_id;
        const category = await categoriesModel.findOne({_id: categoryID });
        if (category) {
            return res.status(200).json({
                data: category,
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

export const updateCategories = async (req, res) => {
    try {
        const categoriesID = req.params.categories_id;
        const {categories_name , short_description} = req.body
        console.log(categoriesID, req.body)
        const updatedCategories = await categoriesModel.updateOne({ _id: categoriesID }, {
            $set: {
                categories_name:categories_name,
                short_description:short_description,
            }
        });
        if (updatedCategories.acknowledged) {
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

export const deleteCategory = async (req, res) => {
    try {
        const categoryID = req.params.category_id;
        const category = await categoriesModel.deleteOne({ _id: categoryID });
        if (category.acknowledged) {
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


