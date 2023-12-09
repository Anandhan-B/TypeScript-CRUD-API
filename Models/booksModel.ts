import mongoose, { Schema } from "mongoose";
const bookSchema:Schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
})

export default mongoose.model('c1',bookSchema,'c1')