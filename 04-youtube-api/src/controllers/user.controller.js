import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from '../utils/apiError.js';
// this User will be used to check if the user is already registered or not and many other things
import {User} from '../models/user.model.js';
import uploadOnCloudinary from '../utils/cloudinary.js';
import { ApiResponse } from '../utils/ApiResponse.js';
const registerUser = asyncHandler(async(req, res)=>{
    
    // get user details from the fronted that is req.body
    // validation required for the user details
    // for example, check if the email is already registered
    // using username or email
    // check if fields are not empty
    // check for images, check for avatar
    // upload them to cloduinary
    // create a user in the database
    // create user object - create entry in the database
    // send the response back to the frontend
    // also we might want to remove the password from the response
    // also remove refresh token from the response
    // check for user creation 
    // if user creation fails, send error response
    // else send success response and return the user object

    // get user details from the requrest
    const {fullName, email, username, password, } = req.body
    // we will validate the user details here we can use multiple if else to check 
    // if(fullName === ""){
    //     throw new ApiError(400, "Full name is required")
    // }
    // another way of doing this is
    if(
        [fullName, email, username, password].some((field)=>
        field?.trim()==="")
    ){
        throw new ApiError(400, "All fields are required")
    }

    // check if the user is already registered
    // here we are checking if the email or username is already registered
    // findOne will return the user object if found else null
    // $or is used to check if any of the condition is true
    const existedUser = await User.findOne({$or:[{email}, {username}]})
    if(existedUser){
        throw new ApiError(409, "User already registered with this email or username")
    }

    // ?. is used to check if the object is not null or undefined

    const avatarLocalPath = req.files?.avatar[0]?.path;

    // since avatar is required so we check if it is present or not then accordingly throw error
    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar is required")
    }
    if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length>0){
        const coverImageLocalPath = req.files.coverImage[0].path;
    }
    // if coverImage is not present then we will use empty string
    // upload the images to cloudinary
    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);
    if(!avatar){
        throw new ApiError(500, "Error uploading avatar")
    }
    // create user object and save it in the database
    const user = await User.create({
        fullName,
        avatar: avatar.url,
        // here if coverImage is not present then we will get error so we use optional chaining
        coverImage: coverImage?.url || "",
        email,
        username: username.toLowerCase(),
        password,
    })
    // check if user is created or not 
    const createdUser = await User.findById(user._id).select("-password -refreshToken")
    console.log(createdUser);
    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    // send the response back to the frontend
    // since we have already create a apiResponse class so we can use that in case we did not create that then we can use the below code
    // res.status(201).json({
    //     statusCode: 201,
    //     data: createdUser,
    //     message: "success",
    //     success: true,
    // })

    return res.status(201).json(new ApiResponse(201, createdUser,"User registered successfully"))
})

export {registerUser}