import mongoose, { Schema } from "mongoose";
const discountSchema:Schema = new mongoose.Schema({
    product:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    Discount:{
        type:Number,
        required:true
    },
})

export default mongoose.model('discount',discountSchema,'discount')