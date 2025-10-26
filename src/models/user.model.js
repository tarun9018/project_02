import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
 
const userSchema = new Schema(
{
        username:{
            type: String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true
        },
         email: {
            type: String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true
        },
         fullname: {
            type: String,
            required:true,
            trim:true
        },
         avatar: {
            type: String,
            required:true,
            trim:true
        },
         coverimage: {
            type: String,
            
        },
         watchHistory:[     
         {
            type:Schema.Types.ObjectId,
            ref:"video"
            }
         ],
         password:{
            type:String,
            required:[true,`Password must required `]
        },
        RefreshToken:{
            type:String,
            required:[true,`Password must required `]
        }
    
    
},
{
        timestamps:true
    }
)

userSchema.pre("save",async function(next) {
    if(!this.isModified(this.password))
        return next();
this.password=bcrypt.hash(this.password,8)
next()

})   // validate Password method


userSchema.method.isPasswordCorrect = async function(password)   {
    return await bcrypt.compare(password,this.password)
}// if  Password change method
userSchema.method.generateAccessToken = function(){
    jwt.sign(
        {
            id:this._id,
            email:this._email,
            fullname:this._fullname

        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}   // Access token method

userSchema.method.generateRefreshToken = function(){}
export const user = mongoose.model("user",userSchema)