import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20
        },
})