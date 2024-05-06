import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PriceModel = new Schema({
     
    price_name:{
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
export default mongoose.model("price",PriceModel);