import mongoose, { Schema } from "mongoose";
const movieSchema:Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
})

export default mongoose.model('movie',movieSchema,'movie')