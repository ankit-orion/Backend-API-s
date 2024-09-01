import mongoose from "mongoose";
const busSchema = new mongoose.Schema({
    busNumber:{
        type:String,
        required:true,
    },
    driverName:{
        type:String,
        required:true,
    },
    driverContact:{
        type:String,
        required:true,
    },
    route:{
        type:String,
        required:true,
    },
    students:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Student",
        }
    ],
    teachers:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Teacher",
        }
    ],
},{})
export const Bus = mongoose.model("Bus", busSchema)