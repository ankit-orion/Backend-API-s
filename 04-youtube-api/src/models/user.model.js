import mongoose, {Schema} from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        // this is for indexing the username field
        // it helps in searching the username faster
        // because it creates a tree like structure
        index: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullName:{
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar:{
        type: String, // cloudinary url will be stored here
        required: true,
    },
    coverImage:{
        type: String, // cloudinary url will be stored here
    },
    watchHistory:[
        {
            type: Schema.Types.ObjectId,
            ref:'Video'
        }
    ],
    likedVideos:[
        {
            type: Schema.Types.ObjectId,
            ref:'Video'
        }
    ],
    password:{
        type: String,
        required: [true, "Password is required"],
    },
    refreshToken:{
        type: String
    },

},{timestamps: true});

// this method should called only when the password is being set
userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {_id: this._id,
        email: this.email,
        username: this.username,
        fullName: this.fullName,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {_id: this._id},
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

// jwt is a bearer token which is used for authentication
// it acts as a proof that the user is authenticated


export const User = mongoose.model('User', userSchema);