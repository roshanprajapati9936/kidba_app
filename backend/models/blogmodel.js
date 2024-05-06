import mongoose from "mongoose";
import kidbaModel from "./kidbaModel.js";

const Schema =mongoose.Schema;

const BlogsSchema = new Schema ({
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
    kidba_name:{
    type:Schema.Types.ObjectId,
    required:true,
    ref:kidbaModel,
   },
   comment:{
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
export default mongoose.model("blog",BlogsSchema);

