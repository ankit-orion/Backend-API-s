import mongoose from 'mongoose';
const productSchema = new mongoose.Schema(
    {
        description:{
            type:string,
            required:true,
        },
        name:{
            type:string,
            required:true,

        },
        productImage:{
            type:string,
            required:true,
        },
        price:{
            type:Number,
            required:true,
        },
        category:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Category",
            required:true,
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        },
        stock:{
            type:Number,
            required:true,
        }
    },
    {timestamps:true}
);
export const Product = mongoose.model("Product", productSchema);