import mongoose from "mongoose";
import newscategoryModel from "./newscategory.model.js";

const Schema =mongoose.Schema;

const NewsSchema =new Schema ({
   calendar:{
    type:String,
    required:true,
   },
   image:{
    type:String,
    default:null,
   },
   title:{
    type:String,
    required:true,
    
   },
   short_description:{
    type:String,
    required:true,
   },
   kids_education_name:{
    type:Schema.Types.ObjectId,
    required:true,
    ref:newscategoryModel,
   },
   Comment:{
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
export default mongoose.model("kidseducation",NewsSchema);

