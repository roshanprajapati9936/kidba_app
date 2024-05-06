import mongoose from "mongoose";

const Schema = mongoose.Schema;

const LevelModel = new Schema({
     
    level_name:{
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
export default mongoose.model("level",LevelModel);