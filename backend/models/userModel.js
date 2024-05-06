import mongoose from 'mongoose'

const userSchema =new mongoose.Schema({
   name:{
    type:String,
    required:true,
   },
   lastName:{
     type:String,
     required:true,
   },
   userName:{
    type:String,
    required:true,
   },
   email:{
    type:String,
    required:true,
   },
   password:{
    type:String,
    required:true,
   },
   question:{
    type:String,
    required:true,
   },
   role:{
    type:Number,
    default:0,
   },
   createdAt:{
    type:Date,
    default:Date.now()
   }

})
export default mongoose.model("user",userSchema);