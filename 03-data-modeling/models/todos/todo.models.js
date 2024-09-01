import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
    {
        content:{
            type:String,
            required:true,
        },
        completed:{
            type:Boolean,
            default:false,
        },
        // here we have to realte the model with the user model and the user model is related to the user collection
        // so we have to use the ref property to relate the todo model with the user model
        // we can have multiple users and each user can have multiple todos
        createdBy:{
            type: mongoose.Schema.Types.ObjectId,
            // here we have to refer to the user model
            ref: "User", // User is the name given in the model

            required: true,
        },
        // array of subTodos and each subTodo will be an object id
        subTodos:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "subTodo",
            }
        ]
    },
    {timestamps: true}
)

export const Todo = mongoose.model("Todo", todoSchema)