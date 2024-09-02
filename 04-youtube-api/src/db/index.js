import mongoose from "mongoose";
import {DB_NAME }from "../constant.js";

const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected || DB HOST: ${connectionInstance.connection.host}`);
    }
    catch(err){
        // console.log(process.env.MONGODB_URI);
        console.log("Error connecting to the database", err);
        process.exit(1);
    }
}
export default connectDB;