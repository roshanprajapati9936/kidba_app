import mongoose from 'mongoose'

const  orderSchema = new mongoose.Schema({
     
    products : [{
        type : mongoose.ObjectId,
        ref:'Product'
    }],
    payment : {},
    buyer:{
        type:mongoose.ObjectId,
        ref:'user'
    },
    status:{
        type:String,
        default:'Not process',
        enum :["Not Process", "Processing", "Shipped" , "deleverd", "cancel"],
    }
},{timestamps:true})
export default mongoose.model("order", orderSchema);