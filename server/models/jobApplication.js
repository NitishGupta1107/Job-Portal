import { requireAuth } from "@clerk/express";
import mongoose from "mongoose";

const JobApplicatonSchema = new mongoose.Schema({
    userId:{
        type:String,
        ref:'User',
        required:true
    },

    companyId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company',
        required:true
    },

    jobId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Job',
        required:true
    },

    status:{
        type:String,
        default:'Pending'
    },

    date:{
        type:Number,
        required:true
    }





})


const JobApplication = mongoose.model('JobApplication',JobApplicatonSchema);

export default JobApplication