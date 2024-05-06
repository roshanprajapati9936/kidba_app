import mongoose from "mongoose";

const Schema =mongoose.Schema;

const CategoriesSchema=new Schema({
     
     categories_name:{
        type:String,
        required:true,
     },
     short_description:{
        type:String,
        required:true,
     },
     status:{
        type:Number,
        default:1,
     },
     
     createdAt:{
        type:Date,
        default:Date.now()
     }
})
export default mongoose.model('categories',CategoriesSchema )