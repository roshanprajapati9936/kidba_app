import categoryModel from "../models/category.model.js";
import slugify from 'slugify';

export const createCategoryController = async (req, res) => {
    try {
      console.log(req.body)

      const {name} = req.body

      const saveCategories = new categoryModel({
           name:name,
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

};

// upadet category 

export const updateCategoryController = async(req,res)=>{
  try{
     const {name} = req.body
     const {id} = req.params
    const category = await categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)}, {new:true})
    res.status(200).json({
      success:true,
      message:'updated category Successfully',
      category,
    })
  }catch(error){
     console.log(error)
     res.status(500).json({
       success:false,
       message:"error while updating"
     })
  }
}

// get all category

export const getsCategoryController = async(req,res)=>{
     try{
        const category = await categoryModel.find({})
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

// single category

export const singleCategoryController =async(req,res)=>{
  try{
         const category = await categoryModel.findOne({slug:req.params.slug})
         res.status(200).json({
          success:true,
          message:'Get single category successfully',
          category,
         })
  }catch(error){
    console.log(error)
    res.status(500).json({
      success:false,
      message:"Error in single category"
    })

  }
}

// delete category
export const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    await categoryModel.findByIdAndDelete(id);
    
    res.status(200).json({
       success: true,
       message: "Category deleted successfully"
    });
  } catch(error) {
      console.error(error);
      res.status(500).json({
         success: false,
         message: 'Internal server error',
      });
  }
}


