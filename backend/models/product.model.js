import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:mongoose.ObjectId,
        ref:'cart',
        required:true,
    },
    quantity:{
       type:Number,
        default:null,
    },
    photo:{
        type:String,
        required:true,
    },
    shippping:{
        type:Boolean,
        default:null,
    },
    role:{
        type:Number,
        default:0,
    }
},{timestamps:true})
export default mongoose.model("product",productSchema);