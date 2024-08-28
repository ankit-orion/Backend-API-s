// we need to require mongoose
import mongoose from 'mongoose';
// schema is a method that takes an object as an argument
const userSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        password:{
            type: String,
            required: [true, "Password is required"],
            // add regex to validate the password
            match:[
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                "Password must be at least 8 characters long and contain at least one letter and one number"
            ],
            min: [8, "password must be of atleast 8 characters"]
        }
    },
    {
        timestamps: true,
    }
)

// we have to export the schema as a model this schema will be created in the mongo database
export const User = mongoose.model("User", userSchema)
// this User will be converted into users in the mongo database and will be stored in the users collection