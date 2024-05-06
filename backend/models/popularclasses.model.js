import mongoose from "mongoose";
import categoriesModel from "./categories.model.js";

const Schema =mongoose.Schema;

const popularClasses = new Schema({
      
    title:{
        type:String,
        required:true,
    },
    category:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:categoriesModel,
    },
    description:{
        type:String,
        required:true,
    },       
    price:{
        type:String,
         default:null,
    },
    label:{
        type:String,
        defalut:null,
    },
    duration:{
      type:String,
      default:null,
    },
    image:{
        type:String,
        default:null,
    },
    status:{
        type:Number,
        default:null,
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});
export default mongoose.model("popularclasses",popularClasses);