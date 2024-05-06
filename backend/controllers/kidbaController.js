import kidbaModel from "../models/kidbaModel.js";

export const getsKidba = async (req, res) => {
    try {
        const categories = await kidbaModel.find();

        if (categories.length > 0) {
            return res.status(200).json({
                data: categories,
                message: 'Fetched'
            });
        }

        return res.status(404).json({
            message: 'No categories found'
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

export const addKidba = async (req, res) => {
    try {
        const { kidba_name, short_description } = req.body;

        const saveCategory = new kidbaModel({
            kidba_name: kidba_name,
            short_description: short_description
        });

        const savedCategory = await saveCategory.save();

        if (savedCategory) {
            return res.status(201).json({
                data: savedCategory,
                message: 'Created'
            });
        }

        return res.status(400).json({
            message: 'Bad request'
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

export const getKidba = async (req, res) => {
    try {
        const categoryID = req.params.kidba_id;
        const category = await kidbaModel.findById(categoryID);

        if (category) {
            return res.status(200).json({
                data: category,
                message: 'Fetched'
            });
        }

        return res.status(404).json({
            message: 'Category not found'
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

export const updateKidba = async (req, res) => {
    try {
        const categoryID = req.params.kidba_id;
        const { kidba_name, short_description } = req.body;

        const updatedCategory = await kidbaModel.findByIdAndUpdate(categoryID, {
            kidba_name: kidba_name,
            short_description: short_description
        }, { new: true });

        if (updatedCategory) {
            return res.status(200).json({
                message: 'Updated',
                data: updatedCategory
            });
        }

        return res.status(404).json({
            message: 'Category not found'
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

export const deleteKidba = async (req, res) => {
    try {
        const categoryID = req.params.kidba_id;
        const deletedCategory = await kidbaModel.findByIdAndDelete(categoryID);

        if (deletedCategory) {
            return res.status(200).json({
                message: 'Deleted'
            });
        }

        return res.status(404).json({
            message: 'Category not found'
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};
