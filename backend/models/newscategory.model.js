import mongoose from "mongoose";

const Schema =mongoose.Schema;


const NewsCategorySchema = new Schema({
         
      kids_education_name:{
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
});
export  default mongoose.model("news",NewsCategorySchema);


