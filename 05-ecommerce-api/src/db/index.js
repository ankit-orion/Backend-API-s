import mongoose from "mongoose";
import { DB_NAME }from "../constant.js";

const connectDB = async ()=>{
    try{
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Connected to the database ${connection.connection.host}`);
        // mongoose.connection.on("connected", ()=>{
        //     console.log("Connected to the database");
        // })
    }
    catch(err){
        // console.log(process.env.MONGODB_URI);
        console.log("Error connecting to the database", err);
        process.exit(1);
    }
}
export default connectDB;