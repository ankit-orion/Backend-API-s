import mongoose from "mongoose";
const patientSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        diagoneWith:{
            type:String,
            required:true,
        },
        address:{
            type:String,
            required:true,
        },
        age:{
            type:Number,
            required:true,
        },
        bloodGroup:{
            type:String,
            enum:["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
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
        gender:{
            type:String,
            enum:["male", "female", "other"],
        },
        admittedAt:{
            type:Date,
            required:true,
        },
        dischargedAt:{
            type:Date,
        },
        admittedIn:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Hospital",
            required:true,
        }
    }, 
    { timestamps: true }
);
export const Patient = mongoose.model("Patient", patientSchema);