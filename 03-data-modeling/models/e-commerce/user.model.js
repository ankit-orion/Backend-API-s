import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:[true, "username must be unique"],
            lowercase:[true, "username must be lowercase"]
        },
        email:{
            type:String,
            required:true,
            unique:[true, "email must be unique"],
            lowercase:[true, "email must be lowercase"]
        },
        password:{
            type:String,
            required:[true, "password is required"],
            match:[
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                "Password must be at least 8 characters long and contain at least one letter and one number"
            ],
            min:[8, "password must be at least 8 characters"]
        },
    },
    {timestamps:true}
);
export const user = mongoose.model("User", userSchema);