import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    duration:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required
    },
    teacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Teacher",
        required:true
    },
    students:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Student",
        }
    ]
},
{timestamps:true});
export const Course = mongoose.model("Course", courseSchema)