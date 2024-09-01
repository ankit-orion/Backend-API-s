import mongoose from "mongoose";
const workingStaffSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    experience:{
        type:Number,
        required:true,
    },
    salary:{
        type:Number,
        required:true,
    },
    department:{
        type:String,
        required:true,
    }
},{timestamps:true});
export const WorkingStaff = mongoose.model("WorkingStaff", workingStaffSchema);