import mongoose, { Schema } from "mongoose";
const orderSchema:Schema = new mongoose.Schema({
    products:[{
        type:String,
        required:true
    }],
    totalAmount:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    },
})

export default mongoose.model('orders',orderSchema,'orders')