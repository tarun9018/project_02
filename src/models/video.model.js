import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema({
    videofile:{
        type:String,
        required:true
    },
     thumbnail:{
        type:String,
        required:true
    },
     tittle:{
        type:String,
        required:true
    },
     description:{
        type:String,
        required:true
    },
     duration:{
        type:String,
        required:true
    },
     views:{
        type:String,
        required:true
    },
      ispublished:{
        type:Boolean,
        required:true
    },
     owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },

},{
    timestamps:true
})

videoSchema.plugin(mongooseAggregatePaginate)
export const video=mongoose.model("video",videoSchema)