import mongoose from 'mongoose'

const cartSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    role:{
        type:Number,
        default:0,
    },
    createAt:{
      type:Date,
      default:Date.now()
    }
})
export default mongoose.model("cart",cartSchema);