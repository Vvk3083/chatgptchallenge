import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
    name:String,
    email:String,
    message:String
},{timestamps:true});

export const FormData = mongoose.models.FormData || mongoose.model("FormData", FormSchema);