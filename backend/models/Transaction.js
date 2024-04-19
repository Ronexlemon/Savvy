const { Timestamp } = require("mongodb");
const mongoose = require("mongoose")

const {Schema} = mongoose;

const  TransactionSchema = new Schema({
    reason:{
        type:String,
        required:true,
    },

    amount:{
        type:String,
        required:false,
    },


},
{timestamps:true})


module.exports = mongoose.models.Transaction || mongoose.Model("Transaction",TransactionSchema)