import mongoose  from "mongoose";
const orderItemSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
})
const completeAddressSchema = new mongoose.Schema({
    street:{
        type:string,
        required:true,
    },
    city:{
        type:string,
        required:true,
    },
    state:{
        type:string,
        required:true,
    },
    zip:{
        type:string,
        required:true,
    },
    country:{
        type:string,
        required:true,
    },
})
const categorySchema = new mongoose.Schema(
    {
        name:{
            type:string,
            required:true,
        },
        description:{
            type:string,
            required:true,
        },
        orderItems:{
            type:[orderItemSchema],
            required:true,
        },
        address:{
            type:[completeAddressSchema],
            required:true,
        },
        orderStatus:{
            tyoe:string,
            enum:["pending", "shipped", "delivered", "cancelled"],
            default:"pending",
        }
    },
    {timestamps:true}
);
export const Category = mongoose.model("Category", categorySchema);