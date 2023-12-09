import mongoose, { Schema } from "mongoose";
const tagsSchema:Schema = new mongoose.Schema({
    tags:[{
        type:String,
        required:true
    }]
})

export default mongoose.model('tags',tagsSchema,'tags')