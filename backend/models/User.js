const { Timestamp } = require("mongodb");
const mongoose = require("mongoose")

const {Schema} = mongoose;

const  UserSchema = new Schema({
    phoneNumber:{
        type:String,
        unique:true,
        required:true,
    },

    password:{
        type:String,
        required:false,
    },


},
{timestamps:true})


module.exports = mongoose.models.User || mongoose.Model("User",UserSchema)