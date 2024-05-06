import mongoose from "mongoose";

const Schema =mongoose.Schema;

const KidbaSchema=new Schema({
     
     kidba_name:{
        type:String,
        required:true,
     },
     short_description:{
        type:String,
         default:null,
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
export default mongoose.model('kidba',KidbaSchema )